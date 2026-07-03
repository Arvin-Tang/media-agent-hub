# Video Outline

> **主题**：`blueprint`（推荐）—— 工程蓝图 / 系统拆解气质，适合讲事件触发与自动化闭环
> **总时长**：约 1 分 20 秒（口播约 410 字）
> **章节数**：4 章 / 12 步

---

## 1. manual-call — AI 还在等你开口（3 steps · ~16s）

**信息池**：
- 前提：Prompt 和 Skill 通常仍需主动调用 —— 来源 article 开头
- 手动动作：打开聊天框、告诉 AI 做什么、把任务推到它面前 —— 来源 article §1
- 变化点：Hook 让某个时刻发生时 AI 自动进入流程 —— 来源 article §2

**开发计划**：

- step 1 (~5s) — 聊天框等待输入，屏幕强调“还要你主动调用”
- step 2 (~5s) — 人工把任务拖给 AI，形成手动流程感
- step 3 (~6s) — Hook 概念进入画面：时刻发生，AI 自动进入流程

口播节选：
> Prompt 和 Skill 都很重要。但它们通常还要你主动调用。

---

## 2. event-entry — 事件就是入口（3 steps · ~23s）

**信息池**：
- Hook 示例：任务完成通知、新文件识别归档、上下文摘要卡片 —— 来源 article §2
- 定义：Hook 把事件变成 AI 的入口 —— 来源 article §3
- 真实工作事件：文件出现、会议结束、代码提交、用户反馈、系统报错、权限卡住 —— 来源 article §3

**开发计划**：

- step 1 (~7s) — 三个 Hook 示例排成事件触发器：任务完成、文件出现、上下文快满
- step 2 (~8s) — 真实工作事件流铺开，强调“不是连续聊天”
- step 3 (~8s) — 手动发现/复制/提醒与自动触发 Skill 的对比

口播节选：
> Hook 的本质，是把事件变成 AI 的入口。因为真实工作不是连续聊天。

---

## 3. content-loop — 从一个动作到一套系统（3 steps · ~22s）

**信息池**：
- 区分：一个 Hook 只是自动动作，多个 Hook + Skill 才是 Loop —— 来源 article §5
- 内容创作 Loop：拉群消息、筛 AI 话题、生成洞察、写文章、做漫画、写动画脚本、归档素材 —— 来源 article §5
- 结果：AI 从问答助手变成持续运转的内容系统 —— 来源 article §6

**开发计划**：

- step 1 (~6s) — 单点自动动作与闭环系统做视觉对比
- step 2 (~9s) — 内容创作 Loop 七个节点形成环形系统图
- step 3 (~7s) — “持续运转的内容系统”作为主视觉收束

口播节选：
> 一个 Hook，只是一个自动动作。多个 Hook 和多个 Skill 串起来，就是 Loop。

---

## 4. file-system — 文件系统才是工程系统（3 steps · ~20s）

**信息池**：
- AI 编程三层：OpenSpec 管做什么，Superpowers 管怎么做，Comet 管什么时候做什么 —— 来源 article §7
- 关键变化：聊天记录不是工程系统，文件系统才是 —— 来源 article §8
- 文件落点：需求、状态、验证证据、下一步动作 —— 来源 article §8

**开发计划**：

- step 1 (~6s) — OpenSpec / Superpowers / Comet 三层堆栈出现
- step 2 (~7s) — 聊天记录与文件系统对比，文件系统侧显示需求、状态、验证、下一步
- step 3 (~7s) — Hook 与 Loop 两句结尾判断，收束到 AI Native 工作流重设计

口播节选：
> 聊天记录不是工程系统。文件系统才是。需求、状态、验证证据、下一步动作，都要能落到文件里。

---

## 素材清单

### 1. manual-call
- ✓ 聊天框、手动拖拽任务、Hook 入口（CSS/SVG 模拟）

### 2. event-entry
- ✓ 任务完成、新文件、上下文快满、事件流（CSS/SVG 模拟）

### 3. content-loop
- ✓ 内容创作 Loop 节点（CSS/SVG 模拟）

### 4. file-system
- ✓ 三层工程栈、文件系统对比图（CSS/SVG 模拟）
- ⚠️ OpenSpec / Superpowers / Comet 真实 logo 或截图：可选 placeholder

---

## 自检

- [x] 每个 step 都是单一句屏幕内容描述，没有写动画手段
- [x] 没有写具体动画时长，仅保留口播估时
- [x] 每章信息池至少 3 条，并标注 article 来源
- [x] step 估时累计约 81s，与顶部声明一致
- [x] 章节 3 steps 一章，边界清楚
- [x] 素材清单按章节列出，placeholder 风险已标注
- [x] script.md 不含标题、序号等非口播内容
