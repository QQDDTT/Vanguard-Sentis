# Vanguard-Sentis: 房产中介内部综合业务管理系统 (Realty Core)

<p align="center">
  <img src="site/assets/logo/sentis-logo-full-400w.png" alt="株式会社 SENTIS" width="320" /><br>
  <strong>「不動産提案に確かな指針を。」</strong>
</p>

[![Deploy to GitHub Pages](https://github.com/QQDDTT/Vanguard-Sentis/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/QQDDTT/Vanguard-Sentis/actions/workflows/deploy-pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status: Detailed Design](https://img.shields.io/badge/Status-Detailed%20Design%20(M2)-amber.svg)](#)

> 本仓库为 **Vanguard 平台** 下的独立案件公开资产仓，专门管理 **株式会社 SENTIS（センティス）** 不动产买卖内部业务管理系统（Sentis Realty Core）的业务调研、系统设计文档以及设计展示样板网页。

---

## 1. 业务背景与系统定位

**株式会社 SENTIS**（代表取締役：阿部 翔平 / 東京都千代田区神田須田町 2-3-12）是一家专注于**高额不动产（2~10 亿日元）与海外华人富裕层客户**的专业不动产经纪机构。

面对长达数月的买卖契约、银行房贷审查、金融借贷契约与决算过户全链路，为支持 2~5 人小团队达成亿元级业务规模，本项目打造轻量、自包含、高人效的业务管理指挥中心：
- **前置获客对接**：小红书 (RED) 私域线索沉淀、多语言（中/日/英）咨询与视频/VR 远程看房；
- **动态智能 Checklist 引擎**：根据公寓/一户建、法人/个人卖主、在日贷款/海外全款自动生成法定重说份数与所需资料清单；
- **决算反向倒排风控 (D-14/D-10/D-2)**：自动提醒验房预约、管理会社振替用纸提前索取、三合一支付明细银行送审；
- **高额交易财务结算**：内置法定中介费上限核算（3%+6万+税）与契约书/领收书印纸税阶梯匹配。

---

## 2. 线上设计展示样板网页 (Showcase)

本项目设计展示样板网页采用**日本不动产事务所纸质办公美学（Paper-textured Office Stationery）**与纯原生前端技术（Vanilla HTML/CSS/JS）构建，并通过 GitHub Actions 自动持续部署：

- 🌐 **专属独立域名访问**：**[https://vanguard-sentis.evotensor.dev](https://vanguard-sentis.evotensor.dev)**（已启用免费专属 HTTPS）
- 🔗 **GitHub 默认域名**：[https://qqddtt.github.io/Vanguard-Sentis/](https://qqddtt.github.io/Vanguard-Sentis/)（自动 301 重定向）
- 💻 **本地离线双击浏览**：克隆本仓库后，直接在文件管理器中双击 [`site/index.html`](./site/index.html) 即可开箱体验，无需任何本地 Server 或 Node.js 运行环境。

---

## 3. 仓库目录结构

```text
Vanguard-Sentis/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml    # GitHub Actions 自动化部署工作流
├── docs/                       # 核心业务梳理与系统设计文档
│   ├── 01_overview.md          # 公司画像、商业战略与财务计划
│   ├── 02_business_workflow.md # 四大阶段业务 SOP 与境内外双轨风控
│   ├── 03_system_requirements.md# 内部管理系统功能矩阵与计算器设计
│   └── 04_project_schedule.md  # M1~M5 工程研发进度表与甘特图
├── raw/                        # 原始业务调研资料归档
│   ├── 創業計画書.pdf          # 株式会社 SENTIS 商业计划书
│   ├── 売買契約の流れ.docx     # 签约与决算实务 SOP
│   └── 売買契約流れ　ローン利用.pdf # 银行房贷利用指南
├── site/                       # 设计展示样板网页产物
│   ├── index.html              # 纯静态高保真纸质办公室风控制台原型
│   ├── favicon.ico             # 浏览器原生标签页图标
│   ├── assets/
│   │   └── logo/               # SENTIS 官方 CI/VI 全规格多尺寸素材库
│   │       ├── sentis-emblem-512.png # 高清罗盘透明徽标 (512x512)
│   │       ├── sentis-logo-full-400w.png # 完整组合透明标志
│   │       ├── apple-touch-icon.png  # 移动端桌面图标 (180x180)
│   │       └── ... (各尺寸 PNG 与 ICO)
│   └── CNAME                   # 自定义域名配置文件 (vanguard-sentis.evotensor.dev)
├── metadata.json               # 案件元数据与规范校验
└── README.md                   # 本说明文档
```

---

## 4. 平台规范与协议

本项目遵循 **Vanguard 平台化双层仓库规范**：
- 核心平台规范库（Private）：仅维护通用模板、Windows 原生 PowerShell 自动化脚本与架构规范。
- 案件独立公开仓（Public）：维护独立案件的完整生命周期资产与在线静态样板。

