#===============================================================================
# batch-edit-pages.ps1
#
# Generic find/replace engine for the multi-language content tree
# (src/content/site/**). Use this for ANY content change that spans the en/es/fr
# page families so each edit is one auditable, re-runnable step.
#
# REQUIREMENT: default scan target is src/content/site/pages (*.yaml) so the
# base file + *.es.yaml + *.fr.yaml twins of every page are covered in one pass.
# Point -Dir / -Files elsewhere (e.g. src/content/site) for news/products.
#
# ENCODING RULES (see TECH.md section 8 - recorded after real mistakes):
#   - Content files are UTF-8 WITHOUT BOM. Reads and writes always use
#     [System.IO.File] with UTF8Encoding($false); line endings are preserved.
#   - Accented strings (FR/ES text) MUST go inside the JSON spec file, which is
#     read explicitly as UTF-8. Keep this .ps1 file ASCII-only: PowerShell 5.1
#     mis-decodes accent literals in a BOM-less script.
#
# INPUT MODES:
#   A) Spec file (recommended - supports one rule per language):
#     powershell -ExecutionPolicy Bypass -File tools/batch-edit-pages.ps1 `
#       -Spec tools/specs/<my-change>.json [-DryRun] [-Strict]
#
#   B) Inline pair(s) (ASCII-only convenience):
#     powershell -ExecutionPolicy Bypass -File tools/batch-edit-pages.ps1 `
#       -Find 'vf.v2' -Replace 'vf.v3' [-Files '*.yaml'] [-Filter '\.fr\.yaml$']
#
# SPEC JSON FORMAT:
#   {
#     "name": "short description",
#     "dir": "src/content/site/pages",
#     "files": "*.yaml",
#     "rules": [
#       { "files": "*.yaml",                         // optional glob override
#         "filter": "\\.es\\.yaml$",                 // optional regex on FILE NAME
#         "find": "old text",                        // literal, or regex when "regex": true
#         "replace": "new text",
#         "regex": false },
#       ...
#     ]
#   }
#   Common filters:
#     all locales (default)            -> omit "filter"
#     Spanish twins only               -> "\\.es\\.yaml$"
#     French twins only                -> "\\.fr\\.yaml$"
#     base (English) files only        -> "^(?!.*\\.(?:es|fr)\\.yaml$)"
#
#   In regex mode "replace" follows .NET replacement syntax ($1 back-references).
#
# OUTPUT:
#   - Console report: per-rule match counts, files changed, NOT_FOUND lists
#     (files that matched the filter but contained no match - catches typos and
#     already-applied values).
#   - tools/out/batch-edit.json: full machine-readable report (applied/unchanged).
#
# FLAGS:
#   -DryRun  print the plan, write nothing.
#   -Strict  exit non-zero if any rule replaced zero occurrences.
#   -V       verbose per-file detail.
#===============================================================================
[CmdletBinding(DefaultParameterSetName = "Spec")]
param(
  [Parameter(ParameterSetName = "Spec", Mandatory = $true)]
  [string]$Spec,
  [Parameter(ParameterSetName = "Inline")]
  [string]$Find,
  [Parameter(ParameterSetName = "Inline")]
  [string]$Replace,
  [string]$Dir = "src/content/site/pages",
  [string]$Files = "*.yaml",
  [string]$Filter = "",
  [switch]$Regex,
  [switch]$DryRun,
  [switch]$Strict,
  [switch]$V
)

$ErrorActionPreference = "Stop"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$outDir = Join-Path $scriptDir "out"

function Read-Utf8($path) {
  return [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
}
function Write-Utf8NoBom($path, $text) {
  $enc = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($path, $text, $enc)
}
function Get-Count($text, $find, $isRegex) {
  if ($isRegex) { return ([regex]::Matches($text, $find)).Count }
  return ([regex]::Matches($text, [regex]::Escape($find))).Count
}
function Apply-Replace($text, $find, $replace, $isRegex) {
  if ($isRegex) { return [regex]::Replace($text, $find, $replace) }
  return $text.Replace($find, $replace)
}

# ---- build the rule set ------------------------------------------------------
$rules = @()
if ($PSCmdlet.ParameterSetName -eq "Spec") {
  if (-not (Test-Path -LiteralPath $Spec)) { throw "Spec file not found: $Spec" }
  $json = Read-Utf8 (Resolve-Path -LiteralPath $Spec)
  $parsed = $json | ConvertFrom-Json
  if ($parsed.dir) { $Dir = $parsed.dir }
  if ($parsed.files) { $Files = $parsed.files }
  foreach ($r in $parsed.rules) {
    $rules += [pscustomobject]@{
      Name    = if ($r.name) { $r.name } else { $r.find }
      Files   = if ($r.files) { $r.files } else { $Files }
      Filter  = if ($r.filter) { $r.filter } else { "" }
      Find    = $r.find
      Replace = $r.replace
      Regex   = [bool]($r.regex)
    }
  }
} else {
  $rules += [pscustomobject]@{
    Name    = $Find
    Files   = $Files
    Filter  = $Filter
    Find    = $Find
    Replace = $Replace
    Regex   = [bool]$Regex
  }
}
if ($rules.Count -eq 0) { throw "No rules supplied. Pass -Spec <file.json> or -Find/-Replace." }
if (-not (Test-Path -LiteralPath $Dir)) { throw "Target dir not found: $Dir (pass -Dir)" }

New-Item -ItemType Directory -Force -Path $outDir | Out-Null

# ---- apply rules -------------------------------------------------------------
$report = New-Object System.Collections.ArrayList
$summary = @()
$strictFail = $false

foreach ($rule in $rules) {
  $fileList = @(Get-ChildItem -LiteralPath $Dir -File -Filter $rule.Files -Recurse)
  if ($rule.Filter) {
    $rx = [regex]::New($rule.Filter)
    $fileList = @($fileList | Where-Object { $rx.IsMatch($_.Name) })
  }

  $replaced = 0
  $changedFiles = 0
  $notFound = @()
  $fileRows = @()
  foreach ($f in $fileList) {
    $text = Read-Utf8 $f.FullName
    $before = $text
    $count = Get-Count $text $rule.Find $rule.Regex
    if ($count -gt 0) {
      $text = Apply-Replace $text $rule.Find $rule.Replace $rule.Regex
      if ($text -ne $before) {
        $replaced += $count
        $changedFiles++
        $fileRows += [pscustomobject]@{ file = $f.FullName.Replace((Resolve-Path -LiteralPath $Dir).Path + "\", ""); replacements = $count }
        if (-not $DryRun) { Write-Utf8NoBom $f.FullName $text }
      }
    } else {
      $notFound += $f.Name
    }
    if ($V) { Write-Host ("  {0} : {1} match(es)" -f $f.Name, $count) }
  }

  $state = if ($DryRun) { "dry-run" } else { "applied" }
  $line = "RULE [{0}] filter={1} files={2} {3} match(es) in {4} file(s)"
  $line = $line -f $rule.Name, $(if ($rule.Filter) { $rule.Filter } else { "(all)" }), $fileList.Count, $replaced, $changedFiles
  $summary += $line
  if ($notFound.Count -gt 0) {
    $summary += "  NOT_FOUND (no match) - first {0}: {1}" -f [Math]::Min($notFound.Count, 10), ($notFound[0..([Math]::Min($notFound.Count, 10) - 1)] -join ", ")
    if ($notFound.Count -gt 10) { $summary += "  ... and $($notFound.Count - 10) more" }
  }
  if ($replaced -eq 0 -and $Strict) { $strictFail = $true }

  [void]$report.Add([pscustomobject]@{
    rule = $rule.Name
    filter = $rule.Filter
    filesScanned = $fileList.Count
    replacements = $replaced
    filesChanged = $changedFiles
    state = $state
    files = $fileRows
    notFound = $notFound
  })
}

# ---- report ------------------------------------------------------------------
Write-Host ""
Write-Host "==== batch-edit-pages $state ===="
Write-Host ("target dir : {0}" -f (Resolve-Path -LiteralPath $Dir).Path)
$summary | ForEach-Object { Write-Host $_ }

$out = [pscustomobject]@{
  tool = "batch-edit-pages.ps1"
  dryRun = [bool]$DryRun
  dir = (Resolve-Path -LiteralPath $Dir).Path
  runAt = (Get-Date -Format "o")
  rules = $report
}
$jsonOut = $out | ConvertTo-Json -Depth 8
Write-Utf8NoBom (Join-Path $outDir "batch-edit.json") $jsonOut
Write-Host ("report written: {0}" -f (Join-Path $outDir "batch-edit.json"))

if ($strictFail) {
  Write-Host "STRICT: at least one rule replaced 0 occurrences." -ForegroundColor Red
  exit 1
}