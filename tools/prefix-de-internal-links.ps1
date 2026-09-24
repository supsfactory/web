# Prefix internal root-relative links in German content with /de/ (es-standard).
# Touches only src/content/site/**/*.de.yaml, *.de.mdx, *.de.md.
# Skips already-prefixed (/es, /fr, /de, /en, /zh) and non-localizable (/api, /app,
# /admin, /assets, /downloads, /site, /docs) targets, anchors-only and relative URLs.
$root = Join-Path $PSScriptRoot '..\src\content\site'
$files = Get-ChildItem -Path $root -Recurse -File | Where-Object { $_.Name -match '\.de\.(yaml|mdx|md)$' }
$excluded = '^(/es|/fr|/de|/en|/zh|/api|/app|/admin|/assets|/downloads|/site|/docs)([/?#]|$)'

function Rewrite-Link([string]$target) {
  if (-not $target.StartsWith('/')) { return $target }
  if ($target -match $excluded) { return $target }
  return '/de' + $target
}

$changed = 0
foreach ($f in $files) {
  $text = [System.IO.File]::ReadAllText($f.FullName)
  $orig = $text
  # href:/url:/link: values with single or double quotes
  $text = [regex]::Replace($text, "((?:href|url|link):\s*)(['""])(/[^'""#?]*(?:[?#][^'""]*)?)['""]", {
    param($m)
    $rewritten = Rewrite-Link $m.Groups[3].Value
    if ($rewritten -eq $m.Groups[3].Value) { $m.Value } else { $m.Groups[1].Value + $m.Groups[2].Value + $rewritten + $m.Groups[2].Value }
  })
  # markdown [text](path) links (no spaces)
  $text = [regex]::Replace($text, '\[([^\]]*)\]\((/[^()\s]*(?:\([^()]*\))?)\)', {
    param($m)
    $rewritten = Rewrite-Link $m.Groups[2].Value
    if ($rewritten -eq $m.Groups[2].Value) { $m.Value } else { '[' + $m.Groups[1].Value + '](' + $rewritten + ')' }
  })
  if ($text -ne $orig) {
    [System.IO.File]::WriteAllText($f.FullName, $text, [System.Text.UTF8Encoding]::new($false))
    $changed++
  }
}
Write-Host "Prefixed /de internal links in $changed German content files."