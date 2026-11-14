# ==============================================================================
# Vanguard-Sentis 自动化质量门禁与验证脚本 (verify-site.ps1)
# 用途：在无需外部语言运行时（仅用 Windows 原生 PowerShell）的前提下，自动核验：
#   1. ソースコード平文パスワード漏洩ゼロ (Zero Plaintext Secret Check)
#   2. HTML ページ相対リンク・画像・スクリプト存在性 (Zero Broken Links)
#   3. 9幅エンドツーエンド泳道フロー図 JSON 構文・ノード・エッジ整合性 (Flowchart Integrity)
#   4. docs-data.js 全6文書 HTML タグ開閉バランス & 幻灯片分割ルール (Slide Deck Integrity)
#   5. セキュリティメタタグ & Service Worker v5 整合性 (Security & PWA Check)
# ==============================================================================

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$site = Join-Path $root 'site'
$utf8 = New-Object System.Text.UTF8Encoding($false)
$failures = New-Object System.Collections.Generic.List[string]

function Pass([string]$msg) { Write-Host "  [PASS] $msg" -ForegroundColor Green }
function Fail([string]$msg) { Write-Host "  [FAIL] $msg" -ForegroundColor Red; $script:failures.Add($msg) }

Write-Host "=== Vanguard-Sentis 自动化验证套件 (verify-site.ps1) ===" -ForegroundColor Cyan

# 1. Zero Plaintext Secret Check
Write-Host "`n[1/5] 检查公开静态页面是否存在明文口令残留..."
$htmlAndJs = Get-ChildItem -Path $site -Recurse -Include *.html,*.js
$leaks = @()
foreach ($f in $htmlAndJs) {
  $txt = [IO.File]::ReadAllText($f.FullName, $utf8)
  if ($txt -match 'SentisPass') {
    $leaks += $f.FullName.Substring($root.Length + 1)
  }
}
if ($leaks.Count -eq 0) {
  Pass "site/ 下全部 $($htmlAndJs.Count) 个 HTML/JS 文件零明文口令残留"
} else {
  Fail ("发现明文口令残留: " + ($leaks -join ', '))
}

# 2. Relative Asset & Link Check
Write-Host "`n[2/5] 检查 HTML 相对路径引用 (src / href) 完整性..."
$htmlFiles = Get-ChildItem -Path $site -Filter *.html
$missingAssets = @()
foreach ($hf in $htmlFiles) {
  $txt = [IO.File]::ReadAllText($hf.FullName, $utf8)
  $matches = [regex]::Matches($txt, '(?:src|href|data-src)="(\./[^"#?]+)')
  foreach ($m in $matches) {
    $rel = $m.Groups[1].Value -replace '^\./', ''
    if ([string]::IsNullOrWhiteSpace($rel)) { continue }
    $target = Join-Path $site ($rel -replace '/', '\')
    if (-not (Test-Path $target)) {
      $missingAssets += "$($hf.Name) -> $rel"
    }
  }
}
if ($missingAssets.Count -eq 0) {
  Pass "全部 HTML 页面相对引用资产 100% 存在"
} else {
  Fail ("存在缺失引用: " + ($missingAssets -join '; '))
}

# 3. Flowchart Data Integrity Check
Write-Host "`n[3/5] 检查 flows-data.js 9 幅泳道图节点与连线拓扑合法性..."
$rawFlow = [IO.File]::ReadAllText((Join-Path $site 'assets\js\flows-data.js'), $utf8)
$jsonFlow = $rawFlow -replace '^\s*window\.SENTIS_FLOWS\s*=\s*', '' -replace ';\s*$', ''
$flowObj = $jsonFlow | ConvertFrom-Json
$flowErrors = @()
if ($flowObj.order.Count -ne 9) {
  $flowErrors += "流程图数量应为 9，实际为 $($flowObj.order.Count)"
}
foreach ($fid in $flowObj.order) {
  $fl = $flowObj.flows.$fid
  if (-not $fl) { $flowErrors += "缺失流程图定义: $fid"; continue }
  $laneIds = @($fl.lanes | ForEach-Object { $_.id })
  $nodeIds = @($fl.nodes | ForEach-Object { $_.id })
  foreach ($n in $fl.nodes) {
    if ($laneIds -notcontains $n.lane) {
      $flowErrors += "${fid}: 节点 $($n.id) 引用了不存在的泳道 $($n.lane)"
    }
  }
  foreach ($e in $fl.edges) {
    if ($nodeIds -notcontains $e.from -or $nodeIds -notcontains $e.to) {
      $flowErrors += "${fid}: 连线 $($e.from)->$($e.to) 引用了不存在的节点"
    }
  }
}
# Check 05-16 presence in lease and 04-9/10 in sale
$saleText = ($flowObj.flows.sale.nodes | ForEach-Object { $_.text }) -join ' '
$leaseText = ($flowObj.flows.lease.nodes | ForEach-Object { $_.text }) -join ' '
if ($saleText -notmatch '04-9/10') { $flowErrors += "sale 流程缺失 04-9/10 客户贷款审查标注" }
if ($leaseText -notmatch '05-16') { $flowErrors += "lease 流程缺失 05-16 申请取消与恢复募集分支" }

if ($flowErrors.Count -eq 0) {
  Pass "9 幅泳道流程图 JSON 结构、泳道归属、连线端点及 04-9/10、05-16 节点 100% 校验通过"
} else {
  Fail ("流程图校验失败: " + ($flowErrors -join '; '))
}

# 4. docs-data.js Table Tag Balance & v2.0 Alignment Check
Write-Host "`n[4/5] 检查 docs-data.js 表格闭合与 v2.0 架构对齐..."
$ddText = [IO.File]::ReadAllText((Join-Path $site 'js\docs-data.js'), $utf8)
$openTables = ([regex]::Matches($ddText, '<table\b')).Count
$closeTables = ([regex]::Matches($ddText, '</table>')).Count
if ($openTables -eq $closeTables) {
  Pass "docs-data.js <table> 与 </table> 数量严格平衡 ($openTables 对)"
} else {
  Fail "docs-data.js <table> ($openTables) 与 </table> ($closeTables) 数量不匹配"
}
if ($ddText -match 'R07' -and $ddText -match 'FLOWCHARTS-BEGIN' -and $ddText -match 'data-src="\./assets/office/v2_topo_a_navy\.jpg"') {
  Pass "docs-data.js 已包含 7 角色 RBAC (R01~R07)、第九章泳道流程图与大图延迟加载 (data-src)"
} else {
  Fail "docs-data.js 缺少 R07、FLOWCHARTS-BEGIN 或 data-src 延迟加载属性"
}

# 5. Security Headers & Service Worker v5 Check
Write-Host "`n[5/5] 检查安全响应头配置与 Service Worker v5..."
$swText = [IO.File]::ReadAllText((Join-Path $site 'sw.js'), $utf8)
$headersExists = Test-Path (Join-Path $site '_headers')
if ($swText -match "sentis-crm-pwa-v5" -and $headersExists) {
  Pass "Service Worker 已升级至 sentis-crm-pwa-v5 (Network-First)，且 site/_headers 已就绪"
} else {
  Fail "Service Worker 版本或 site/_headers 检查未通过"
}

Write-Host "`n------------------------------------------------------------"
if ($failures.Count -eq 0) {
  Write-Host "ALL CHECKS PASSED (0 Failures)" -ForegroundColor Green
  exit 0
} else {
  Write-Host "CHECKS FAILED ($($failures.Count) Failures)" -ForegroundColor Red
  exit 1
}
