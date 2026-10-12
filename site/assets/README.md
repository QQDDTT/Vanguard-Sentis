# site/assets 素材目录规范

所有图片素材统一存放于本目录，页面均以相对路径 `./assets/...` 引用。

```
site/assets/
├── logo/                  品牌标识（徽标、信头、favicon 多尺寸）
└── office/                办公室 VR 场景素材（L2 目标产品原型）
    ├── office_*.jpg …     整幅场景底图（昼/夜、门、桌、书架、白板）★页面直接引用，勿移动
    ├── elements/          旧版矩形裁切元素（crm-home.html 使用中）★勿移动
    └── cutouts/           【新】透明背景贴图（PNG，用于合成场景）
        ├── furniture/     家具与大件：desk、bookshelf、door、whiteboard、tokyo_window
        ├── devices/       设备：dual_pc、keyboard_mouse
        └── props/         小物件：lamp、bonsai、seal_box、notebook_items
```

## 贴图规范
- 格式：PNG（带 Alpha），已自动裁边，仅夜景风格。
- 命名：小写英文 + 下划线，无昼夜后缀即夜景；若新增日景版本，加 `_day` 后缀。
- 新增分类时，在 `cutouts/` 下建子目录并更新本文档。

## 生成流程（可复现）
1. 以 `office_hub.jpg` 为参考，AI 重绘单个元素于纯洋红 `#FF00FF` 底。
2. 源图保存至案件 `raw/cutout_src/<name>.jpg`（保留以便重新抠图）。
3. 运行主平台脚本 `scripts/chroma-key-cutout.ps1` 去底，输出至对应 `cutouts/<分类>/`。
   - 默认参数 `-Lo 70 -Hi 170`；`whiteboard` 含粉色便利贴，需用 `-Lo 150 -Hi 215` 避免误抠。
