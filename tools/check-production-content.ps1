#===============================================================================
# check-production-content.ps1
#
# Post-deploy content verifier. Fetches live pages and asserts that expected
# substrings are present. Use it after every content push to prove the new copy
# actually reached production (together with tools/acceptance-crawl.mjs for the
# URL sweep).
#
# INPUT MODES:
#   A) Spec file (recommended - keeps expected text with accents in UTF-8):
#     powershell -ExecutionPolicy Bypass -File tools/check-production-content.ps1 `
#       -Spec tools/specs/production-check.example.json [-Base https://isupfactory.com]
#
#   Spec JSON:
#     { "checks": [ { "url": "/path/", "match": "expected substring",
#                     "title": "optional expected <title> substring" } ] }
#     Relative urls are resolved against -Base (default https://isupfactory.com).
#
#   B) Inline pairs:
#     powershell -ExecutionPolicy Bypass -File tools/check-production-content.ps1 `
#       -Pairs "/w/   |Severe Ocean Conditions"
#     Pairs format: "<url>|<match>" or "<url>|<match>|<titleContains>". Relative
#     paths are allowed and get -Base prepended. Multiple -Pairs args allowed.
#
# FLAGS:
#   -IgnoreCase  case-insensitive substring match (off by default).
#   -TimeoutSec  per-request timeout (default 30).
#
# EXIT CODE: 0 = all checks matched, 1 = at least one page failed to fetch or
# the expected substring/title was not found. Console shows OK / MISS(FETCH).
#===============================================================================
param(
  [Parameter(ParameterSetName = "Spec", Mandatory = $true)]
  [string]$Spec,
  [Parameter(ParameterSetName = "Inline")]
  [string[]]$Pairs,
  [string]$Base = "https://isupfactory.com",
  [switch]$IgnoreCase,
  [int]$TimeoutSec = 30
)

$ErrorActionPreference = "Stop"

function Read-Utf8($path) {
  return [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
}

$checks = @()
if ($PSCmdlet.ParameterSetName -eq "Spec") {
  if (-not (Test-Path -LiteralPath $Spec)) { throw "Spec file not found: $Spec" }
  $json = Read-Utf8 (Resolve-Path -LiteralPath $Spec)
  $parsed = $json | ConvertFrom-Json
  foreach ($c in $parsed.checks) {
    $checks += [pscustomobject]@{ Url = $c.url; Match = $c.match; Title = $c.title }
  }
} else {
  foreach ($p in $Pairs) {
    $parts = $p -split "\|", 3
    $checks += [pscustomobject]@{
      Url   = $parts[0].Trim()
      Match = $parts[1].Trim()
      Title = if ($parts.Count -gt 2) { $parts[2].Trim() } else { $null }
    }
  }
}
if ($checks.Count -eq 0) { throw "No checks supplied. Pass -Spec <file.json> or -Pairs." }

$failed = 0
Write-Host ("Checking {0} against {1}" -f $checks.Count, $Base)
foreach ($c in $checks) {
  $url = $c.Url
  if ($url -notmatch "^(https?://)") { $url = $Base.TrimEnd("/") + "/" + $url.TrimStart("/") }
  try {
    $resp = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec $TimeoutSec -UserAgent "Mozilla/5.0 (compatible; isupfactory-content-check/1.0)"
    $ok = $resp.Content.Contains($c.Match)
    $titleOk = $true
    if ($c.Title) {
      $titleOk = $resp.Content.Contains($c.Title)
    }
    if ($ok -and $titleOk) {
      Write-Host ("OK     {0}" -f $url) -ForegroundColor Green
    } else {
      Write-Host ("MISS   {0}" -f $url) -ForegroundColor Yellow
      if (-not $ok) { Write-Host ("       expected text not found: {0}" -f $c.Match) -ForegroundColor Yellow }
      if ($c.Title -and -not $titleOk) { Write-Host ("       expected title text not found: {0}" -f $c.Title) -ForegroundColor Yellow }
      $failed++
    }
  } catch {
    Write-Host ("ERROR  {0} - {1}" -f $url, $_.Exception.Message) -ForegroundColor Red
    $failed++
  }
}

Write-Host ""
if ($failed -eq 0) {
  Write-Host ("PASS: all {0} checks matched." -f $checks.Count) -ForegroundColor Green
  exit 0
} else {
  Write-Host ("FAIL: {0} of {1} checks failed." -f $failed, $checks.Count) -ForegroundColor Red
  exit 1
}