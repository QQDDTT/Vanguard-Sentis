$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding($false)

$raw = [IO.File]::ReadAllText("$root\site\assets\js\flows-data.js", $utf8)
$json = $raw -replace '^\s*window\.SENTIS_FLOWS\s*=\s*', '' -replace ';\s*$', ''
$data = $json | ConvertFrom-Json

# ---------- HTML 章节 (docs-data.js) ----------
$sb = New-Object System.Text.StringBuilder
[void]$sb.Append("`n        <!-- FLOWCHARTS-BEGIN -->`n")
[void]$sb.Append("        <h2>九、 全业务流程图（End-to-End Business Flowcharts）</h2>`n")
[void]$sb.Append("        <p>以下流程图以泳道（角色/外部方）× 业务步骤呈现 288 项业务活动的全部执行路径，编号（如 <code>04-9</code>、<code>07-13</code>）与原表及第四章要件一一对应；已划除或不设立的 06、17、08-6、08-14、19-4~7 不出现在流程中。</p>`n")
foreach ($id in $data.order) {
  $f = $data.flows.$id
  [void]$sb.Append("        <h3>$($f.title)</h3>`n")
  [void]$sb.Append("        <p>$($f.note)</p>`n")
  [void]$sb.Append("        <div class=`"flowchart`" data-flow=`"$id`"></div>`n")
}
[void]$sb.Append("        <!-- FLOWCHARTS-END -->`n")
$htmlSection = $sb.ToString()

$dd = "$root\site\js\docs-data.js"
$c = [IO.File]::ReadAllText($dd, $utf8)
$c = [regex]::Replace($c, '(?s)\r?\n\s*<!-- FLOWCHARTS-BEGIN -->.*?<!-- FLOWCHARTS-END -->\r?\n', "`n")
$idx = $c.LastIndexOf("      </div>")
if ($idx -lt 0) { throw 'doc05 tail not found' }
$c = $c.Substring(0, $idx).TrimEnd() + "`n" + $htmlSection + $c.Substring($idx)
[IO.File]::WriteAllText($dd, $c, $utf8)

# ---------- Markdown 章节 (docs/05) ----------
function Esc([string]$s) { return ($s -replace '"', "'" -replace "`n", '<br/>') }
$md = New-Object System.Text.StringBuilder
[void]$md.Append("`n<!-- FLOWCHARTS-BEGIN -->`n")
[void]$md.Append("---`n`n## 九、 全业务流程图（End-to-End Business Flowcharts）`n`n")
[void]$md.Append("以下流程图以泳道（角色/外部方）呈现全部业务流程，编号与原表及第四章要件对应；已划除或不设立的 06、17、08-6、08-14、19-4~7 不出现在流程中。网站交付物（``site/``）以同源数据 ``site/assets/js/flows-data.js`` 渲染为可横向滚动的泳道 SVG。`n`n")
foreach ($id in $data.order) {
  $f = $data.flows.$id
  [void]$md.Append("### $($f.title)`n`n> $($f.note)`n`n")
  [void]$md.Append("``````mermaid`nflowchart TB`n")
  foreach ($lane in $f.lanes) {
    [void]$md.Append("    subgraph SG_$($lane.id)[`"$(Esc $lane.label)`"]`n")
    foreach ($n in ($f.nodes | Where-Object { $_.lane -eq $lane.id } | Sort-Object row)) {
      $t = Esc $n.text
      switch ($n.type) {
        'decision' { $shape = "$($n.id){`"$t`"}" }
        'start'    { $shape = "$($n.id)([`"$t`"])" }
        'end'      { $shape = "$($n.id)([`"$t`"])" }
        default    { $shape = "$($n.id)[`"$t`"]" }
      }
      [void]$md.Append("        $shape`n")
    }
    [void]$md.Append("    end`n")
  }
  foreach ($e in $f.edges) {
    $arrow = if ($e.dashed) { '-.->' } else { '-->' }
    if ($e.label) { [void]$md.Append("    $($e.from) $arrow|`"$(Esc $e.label)`"| $($e.to)`n") }
    else { [void]$md.Append("    $($e.from) $arrow $($e.to)`n") }
  }
  [void]$md.Append("``````n`n")
}
[void]$md.Append("<!-- FLOWCHARTS-END -->`n")

$mdPath = "$root\docs\05_requirements_definition.md"
$m = [IO.File]::ReadAllText($mdPath, $utf8)
$m = [regex]::Replace($m, '(?s)\r?\n<!-- FLOWCHARTS-BEGIN -->.*?<!-- FLOWCHARTS-END -->\r?\n', "`n")
$m = $m.TrimEnd() + "`n" + $md.ToString()
[IO.File]::WriteAllText($mdPath, $m, $utf8)
Write-Output ("OK flows=" + $data.order.Count)
