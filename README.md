# Media Agent Hub 🎬

内容创作自动化仓库。灵感从飞书群「点子王」诞生，经过 Agent 加工，变成文章、视频、漫画作品。

## 目录结构

```
media-agent-hub/
├── README.md
├── insights/            ← 灵感挖掘：群聊洞察 + 选题建议
│   └── YYYY-MM-DD/
│       ├── 群聊洞察-YYYY-MM-DD.md
│       └── 选题建议-YYYY-MM-DD.md
└── works/               ← 创作产出：文章/视频/漫画
    ├── articles/        ← 文章作品
    ├── videos/          ← 视频脚本与素材
    └── comics/          ← 漫画分镜与产出
        └── YYYY-MM-DD-选题名/
            └── ...
```

## 工作流

```
群聊消息 → 洞察分析 → 选题提炼
                ↓
          writer / video-creator / comic  Agent 创作
                ↓
          作品归档至 works/ 并推送
```
