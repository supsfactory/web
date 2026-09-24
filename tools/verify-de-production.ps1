# Production QA: verify every /de page renders German-only text.
# Flags English leftovers (strong EN stopword density) and FR/ES contamination (accents/loan phrases).
$ErrorActionPreference = 'Continue'
$proxy = "http://127.0.0.1:10808"
$urls = Get-Content "$env:TEMP\opencode-de-urls.txt" | Where-Object { $_.Trim() }
$out = "$env:TEMP\opencode-de-report.jsonl"

$enStrong = @('the','and','with','your','our','this','that','from','they','their','we','are','will','have','not','you','read','for','of','to','yourself','yourselves','these','those','there','here','was','were','been','being','into','onto','about','than','then','should','would','could','some','any','every','each','get','contact us','request a','learn more','read more','get in touch','subscribe','newsletter')
$enRe = ($enStrong | ForEach-Object { '(?<!\p{L})' + [regex]::Escape($_) + '(?!\p{L})' }) -join '|'

function Get-Text([string]$html) {
  $html = [regex]::Replace($html, '(?s)<(script|style|noscript)[^>]*>.*?</\1>', ' ')
  $html = [regex]::Replace($html, '<[^>]+>', ' ')
  $html = [System.Net.WebUtility]::HtmlDecode($html)
  $html = [regex]::Replace($html, '\s+', ' ')
  return $html.Trim()
}

$failFetch = 0; $checked = 0; $flags = @()
foreach ($u in $urls) {
  $u = $u.Trim()
  try {
    $resp = Invoke-WebRequest -Proxy $proxy -UseBasicParsing -Uri $u -Headers @{ 'User-Agent'='Mozilla/5.0'; 'Cache-Control'='no-cache' } -TimeoutSec 25
  } catch { $failFetch++; Write-Output ("FETCH-FAIL|{0}|{1}" -f $u, $_.Exception.Message); continue }
  $checked++
  $text = Get-Text $resp.Content
  $low = $text.ToLowerInvariant()
  $problems = @()
  # FR/ES contamination: accents never used in German
  if ($low -match '[éèëêçàâîïôûñÿæœ¿¡]') { $problems += "FR/ES-ACCENT" }
  if ($low -match '\b(les|vous|pour|avec|notre|nous|dans|sont|chez|êtes|une|des)\b' -and $low -match '\b(vous|our|le|la)\b') { $problems += "FR-WORDS" }
  if ($low -match '\b(usted|ustedes|nuestra|nuestro|para|con|los|las|somos|estamos)\b') { $problems += "ES-WORDS" }
  # English stopword density
  $m = [regex]::Matches($low, $enRe)
  $total = $m.Count
  $unique = ($m | ForEach-Object { $_.Value } | Sort-Object -Unique)
  $uCount = $unique.Count
  if ($total -ge 25 -or $uCount -ge 15) {
    $samples = @()
    foreach ($w in $unique) {
      $c = [regex]::Match($text, ('.{0,50}(?<![\p{L}])' + [regex]::Escape($w) + '(?![\p{L}]).{0,60}'), 'IgnoreCase')
      if ($c.Success) { $samples += ('[{0}] ...{1}...' -f $w, $c.Value.Trim()) }
      if ($samples.Count -ge 6) { break }
    }
    $problems += ("EN-DENSITY(total={0},unique={1})" -f $total, $uCount)
    $flags += [pscustomobject]@{ url = $u; total = $total; unique = $uCount; len = $low.Length; problems = ($problems -join '; '); samples = ($samples -join ' | ') }
  } elseif ($problems.Count -gt 0) {
    $flags += [pscustomobject]@{ url = $u; total = $total; unique = $uCount; len = $low.Length; problems = ($problems -join '; '); samples = '' }
  }
}

"CHECKED=$checked FETCHFAIL=$failFetch"
"FLAGGED=$($flags.Count)"
$flags | Sort-Object -Property unique, len -Descending | ForEach-Object {
  "----- {0}" -f $_.url
  "     problems: {0} (len={1})" -f $_.problems, $_.len
  if ($_.samples) { ($_.samples -split '\|') | ForEach-Object { "     {0}" -f $_.Trim() } }
}
$flags | Sort-Object -Property unique, len -Descending | ConvertTo-Json -Depth 4 | Set-Content -Path $out -Encoding UTF8
Write-Output ("REPORT={0}" -f $out)