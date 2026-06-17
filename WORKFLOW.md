# 点子王 · AI 自媒体工作流

> 模型基底：**agnes-2.0-flash**（所有创作统一使用）

---

## 整体架构

```
飞书群（点子王）
    │
    ▼
┌──────────────────────────────────────┐
│     点子王-AI创作流水线 (cron)       │  ← 每天 08:00 执行（工作日）
│                                      │
│   Step 1: 拉群消息，筛选 AI 话题      │
│   Step 2: 创作（文章/视频/漫画）      │
│   Step 3: 素材归档 + Git 推送        │
└──────────────────────────────────────┘
    │
    ├── 文章创作 ──→ works/文章-日期-标题/    (当前 cron 直接写)
    ├── 视频创作 ──→ works/视频-日期-标题/    (可调用 video-creator Agent)
    └── 漫画创作 ──→ works/漫画-日期-标题/    (可调用 comic Agent)
```

---

## 仓库目录结构

```
/Users/gracia/Documents/media-agent-hub/
├── README.md
│
├── insights/YYYY-MM-DD/               ← 每日洞察输出
│   ├── 群聊洞察-AI-YYYY-MM-DD.md       ← 群聊整体趋势
│   └── AI选题-YYYY-MM-DD.md            ← 精选选题
│
└── works/                              ← 作品仓库
    ├── 文章-YYYY-MM-DD-标题/            ← 文章作品
    │   ├── 草稿.md                     ← 初稿/大纲
    │   ├── 素材/                       ← 配图/参考/引用
    │   └── 成品/                       ← 终稿/发布版
    │
    ├── 视频-YYYY-MM-DD-标题/            ← 视频作品
    │   ├── 手稿/脚本-逐字稿.md          ← 脚本/逐字稿
    │   ├── 素材/                       ← BGM/画面素材/截图
    │   └── 成品/                       ← 最终视频文件
    │
    └── 漫画-YYYY-MM-DD-标题/            ← 漫画作品
        ├── 手稿/分镜脚本.md             ← 分镜/脚本
        ├── 素材/
        │   ├── 角色立绘/               ← 角色设定图
        │   └── 分镜图/                 ← 各分镜画面
        └── 成品/                       ← 最终漫画
```

---

## 执行流程详解

### 每天早上 08:00（定时任务触发）

**Step 1 → 拉取群消息**

- 命令：`lark-cli im chat-messages-list --chat-id oc_f1406502941cd8bf168b07e58a7737fe --as user`
- 拉取最近 24h 消息
- 只保留 **AI 相关** 话题，非 AI 内容忽略
- 无 AI 话题 → 跳过当日创作

**Step 2 → 洞察输出**

- 写入 `insights/YYYY-MM-DD/群聊洞察-AI-YYYY-MM-DD.md`
  - 高频关键词、兴趣方向、情绪倾向
- 写入 `insights/YYYY-MM-DD/AI选题-YYYY-MM-DD.md`
  - 1-3 个精选选题，含灵感来源、目标受众、创作角度

**Step 3 → 创作产出**

每日最多 3 个作品，每种形式至少产出 1 个：

| 形式 | 路径 | 核心产出 |
|------|------|----------|
| 文章 | `works/文章-日期-标题/` | `草稿.md` → 含完整正文 |
| 视频 | `works/视频-日期-标题/` | `手稿/脚本-逐字稿.md` |
| 漫画 | `works/漫画-日期-标题/` | `手稿/分镜脚本.md` |

**Step 4 → Git 归档**

```bash
cd /Users/gracia/Documents/media-agent-hub
/usr/bin/git add -A
/usr/bin/git commit -m "chore: YYYY-MM-DD AI创作"
/usr/bin/git push
```

- 远程仓库：`git@github.com:Arvin-Tang/media-agent-hub.git`
- git 失败不阻塞（已知远端未配置时 push 会报错但仍能本地 commit）

---

## 模型配置总览

| Agent | 模型 | 备注 |
|-------|------|------|
| **点子王-AI创作流水线** (cron) | `agnes-2.0-flash` | cron payload 直接指定 |
| **点子王剪辑手** (video-creator) | `agnes-2.0-flash` | agent config 指定 |
| **点子王漫画家** (comic) | `agnes-2.0-flash` | agent config 指定 |

模型 ID：`custom-1781679409143/agnes-2.0-flash`（200K context, 8192 max tokens）

---

## Agent 分工

| Agent ID | 名称 | 职责 |
|----------|------|------|
| `main` | QClaw | 主 Agent，微信/飞书绑定，DeepSeek |
| `agent-03528910` | 智能Agent | 当前对话，DeepSeek |
| `video-creator` | 点子王剪辑手 | 视频脚本专精，agnes |
| `comic` | 点子王漫画家 | 漫画分镜专精，agnes |

目前 cron 直接包揽了洞察+创作全流程。后续可改为：

1. cron 只做洞察和选题（Step 1→2）
2. 分别 spawn 下游 Agent 执行创作（文章→当前 session，视频→video-creator，漫画→comic）

---

## 行为约束

- 只做 **AI 技术相关** 内容（AI 工具、模型、开发、编程、技术趋势、Agent 等）
- ❌ **禁止**以下类型话题：
  - 飞书群 vs 微信群等产品体验对比类
  - 免费 API / 生图生视频平台盘点等工具资源类
  - 非 AI 技术的互联网/社交/平台类话题
- 选题必须有群内真实消息支撑，不编造
- 无话题直接跳过
- 素材必须与作品一同归档（放入对应素材/目录）
- 所有创作内容使用 `agnes-2.0-flash` 模型

## 选题筛选优先级

按以下顺序优先采纳：

1. **AI Agent 实操/开发** — 多模型组合、MCP/A2A 协议、Agent 设计模式、开源框架
2. **AI 编程工具深度** — Trae、Cursor、Claude Code 等 IDE 的使用教程/评测/对比
3. **AI 开发入门** — Vibe Coding、零基础编程、自然语言编程实战
4. **AI 技术名词科普** — Agent、Skill、Harness、RAG、MCP 等概念解释
5. **2026 年 AI 大事件/趋势** — 行业整体回顾

## 现有选题池（不允许的旧话题）

以下已确认从选题池中移除：
- ~~飞书群 vs 微信群~~（禁止：非 AI 技术）
- ~~免费生图/生视频 API 改变生态~~（禁止：资源盘点类）
- ~~大学生也能用 Codex 写代码~~（已替换为更聚焦的 #3 Vibe Coding 选题）
