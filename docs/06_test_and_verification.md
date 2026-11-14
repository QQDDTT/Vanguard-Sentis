# Sentis 内部综合业务管理系统测试与验证规范 (Test & Verification Specification · v2.0)

> **案例标识**：`sentis-crm-system`  
> **适用版本**：`Design Review v2.0 (288項目・7大サブシステム・9幅泳道フロー・幻灯片查阅器)`  
> **验证工具**：[`tools/verify-site.ps1`](../tools/verify-site.ps1)（Windows 原生 PowerShell 自动化测试套件）与 Chrome DevTools 双视口端到端验证  
> **更新日期**：2026-11-14

---

## 1. 自动化质量门禁矩阵 (`tools/verify-site.ps1`)

每次修改 `site/`、`docs/` 或 `flows-data.js` 后，必须在本地执行 `powershell -NoProfile -ExecutionPolicy Bypass -File tools/verify-site.ps1`，确保以下 5 大门禁 100% 通过：

| 验证维度 | 校验内容与准出标准 | 对应脚本检查项 |
| :--- | :--- | :--- |
| **1. 零明文口令防线** | 扫描 `site/` 下全部 `.html` 与 `.js` 文件，严禁出现任何明文口令字符串，仅保留 SHA-256 摘要校验。 | `[1/5] Zero Plaintext Secret Check` |
| **2. 静态引用完整性** | 解析全部 HTML 页面中的 `./` 相对路径（`src`、`href`、`data-src`），确保目标文件 100% 存在于 `site/` 目录中。 | `[2/5] Relative Asset & Link Check` |
| **3. 泳道流程图拓扑校验** | 解析 `site/assets/js/flows-data.js` 的 9 幅泳道图（`overview`, `sale`, `lease`, `takken`, `pm`, `finance`, `hr`, `exec`, `market`），核验所有节点的 `lane` 归属、所有连线的 `from/to` 端点合法性，并确认 `04-9/10` 客户贷款与 `05-16` 取消恢复募集节点完整在列。 | `[3/5] Flowchart Data Integrity Check` |
| **4. 幻灯片 DOM 闭合与延迟加载** | 校验 `site/js/docs-data.js` 中 `<table>` 与 `</table>` 严格配对（杜绝未闭合表格吞噬后续 `<h2>/<h3>` 导致空白幻灯片），并验证 `doc05` 第八章大图已启用 `data-src` 按需加载。 | `[4/5] Table Tag Balance & Lazy Load Check` |
| **5. 安全基线与 PWA 缓存策略** | 确认 `site/_headers`、HTML 安全 Meta 标签及 `site/sw.js` (`sentis-crm-pwa-v5` Network-First 策略) 完整就绪。 | `[5/5] Security & Service Worker v5 Check` |

---

## 2. 双视口端到端布局与交互验证基线 (Terminal Adaptation Spec)

遵循 `Evopoiesis/docs/specs/17-terminal-adaptation-spec.md`，所有页面必须在以下两个标靶视口下完成实机或 Chrome DevTools 仿真测试：

1. **PC 桌面端 (`1920 × 1080`)**：
   - `site/index.html`：清单式分组目录（业务设计仕样书 5 项、画面样板 2 项、品牌资产 1 项）单行紧凑对齐，点击「🔍」弹出幻灯片模态框。
   - `site/document.html?id=doc05`：幻灯片查阅器高度锁死 `100dvh`，外层窗口零纵向滚动条（`docScrollH == clientH`），全部 29 页幻灯片无任何空白页，第 20~28 页渲染 9 幅高清 SVG 泳道流程图。
   - `site/prototype-crm.html`：拓扑 D（左 70% 总台账 + 右 30% 四段抽屉）、拓扑 C（09:00-20:00 车辆与重说预约轴）、拓扑 B（三栏工作台）与 A4 公文账票一键切换无报错。
2. **移动端 iPhone 16 (`393 × 852`)**：
   - 全页面零横向溢出（`document.documentElement.scrollWidth <= document.documentElement.clientWidth`）。
   - 幻灯片翻页控制栏按钮（前へ / スライド選択 / 次へ）及首页清单操作按钮触控热区全部 `>= 44 × 44 px`。
   - 窄屏下按钮自动切换为纯图标模式（保留 `title` 与 `aria-label`），标题与徽标不折行崩坏。
