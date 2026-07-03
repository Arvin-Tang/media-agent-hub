# Video Outline

> **主题**：`blueprint`（推荐）—— 工程蓝图 / 系统拆解风，适合 Prompt → Skill → Hook → Loop 的工作流结构化讲解
> **总时长**：约 2 分 00 秒（口播约 690 字 ÷ 5.8 字/秒，偏快知识短视频）
> **章节数**：6 章 / 19 步

---

## 1. coldopen — 聊天框为什么越用越乱（3 steps · ~18s）

**信息池**：
- 对比：AI 越用越强，但工作流仍然混乱 —— 来源 article §01
- 痛点：格式、流程、注意事项反复说明 —— 来源 article §01
- 比喻：没有结构的 AI 像记性不稳定的临时工 —— 来源 article §01

**开发计划**：

- step 1 (~5s) — 屏幕中心出现“AI 很强，但我还是这么忙？”的冲突句，背景是多个聊天窗口轮廓
- step 2 (~7s) — 三类重复要求并排出现：格式、流程、避坑，主视觉压向聊天框
- step 3 (~6s) — “临时工状态断线”作为核心隐喻，聊天窗口断成两截

口播节选：
> AI 越用越强。但你的工作流，好像还是很乱。每次打开聊天框，你都要重新说一遍。

---

## 2. four-layers — 四层结构总览（3 steps · ~17s）

**信息池**：
- 结构词：Prompt、Skill、Hook、Loop —— 来源 article §01
- 论断：真正进化不是模型分数，而是给 AI 建结构 —— 来源 article §01
- 分层定义：Prompt 一句话 / Skill 一种能力 / Hook 一个时刻 / Loop 一套系统 —— 来源 article §01 / 结语

**开发计划**：

- step 1 (~6s) — “不是 90 分到 95 分”与“给 AI 建结构”形成左右对照
- step 2 (~5s) — 四个层级以工程蓝图节点形式出现：Prompt、Skill、Hook、Loop
- step 3 (~6s) — 四层定义各占一个象限，保留后续章节的导航感

口播节选：
> AI 工作流真正的进化，不是模型从 90 分变成 95 分。而是我们开始给 AI 建结构。

---

## 3. prompt-skill — 从一句话到一种能力（4 steps · ~27s）

**信息池**：
- Prompt 示例：总结群聊、修 Bug、第一性原理分析 —— 来源 article §02
- Prompt 优势：即时、灵活、低成本 —— 来源 article §02
- Prompt 缺点：只解决这一轮对话，下一次还得再说 —— 来源 article §02
- Skill 示例：Code Review Skill，安全、边界、性能、异常、测试 —— 来源 article §03

**开发计划**：

- step 1 (~6s) — Prompt 作为一次性输入卡片飞入 AI 节点，输出一次结果
- step 2 (~7s) — 同一套要求重复出现，屏幕强调“每周三次以上就该沉淀”
- step 3 (~8s) — Skill 作为可复用说明书，内部列出输入、流程、输出
- step 4 (~6s) — Code Review Skill 的五项检查作为稳定执行清单出现

口播节选：
> Prompt 是一句话。你说一句，AI 回一句。但如果同一套要求你每周说三次以上，那它就不该继续躺在聊天记录里。

---

## 4. hook — 从主动调用到事件触发（3 steps · ~23s）

**信息池**：
- Hook 定义：当某个事件发生时，自动执行某个动作 —— 来源 article §04
- 触发示例：任务完成、文件出现、上下文快满、每天早上八点 —— 来源 article §04
- 现实工作事件：文件出现、会议结束、代码提交、用户反馈、系统报错 —— 来源 article §04

**开发计划**：

- step 1 (~7s) — Skill 旁边出现“仍需手动调用”的提示，转向 Hook 触发器
- step 2 (~9s) — 四个事件入口依次成为屏幕主角：任务完成、文件出现、上下文快满、每天 08:00
- step 3 (~7s) — 现实工作事件流连接成时间线，突出“时刻 = AI 入口”

口播节选：
> Hook 解决的是时刻。任务完成了，自动发通知。文件出现了，自动识别归档。

---

## 5. loop — 系统开始自己转（4 steps · ~28s）

**信息池**：
- Loop 定义：多个 Hook 和 Skill 串起来 —— 来源 article §05
- 内容创作 Loop：拉群消息、筛 AI 话题、生成洞察、写文章、做漫画、写动画脚本、归档 —— 来源 article §05
- AI 编程三层：OpenSpec 管做什么，Superpowers 管怎么做，Comet 管什么时候做什么 —— 来源 article §05
- 文件系统观点：聊天记录不是工程系统，文件系统才是 —— 来源 article §05

**开发计划**：

- step 1 (~6s) — 单个 Hook 与多个 Hook + Skill 的差异对比
- step 2 (~8s) — 内容创作 Loop 的七个节点形成闭环：群消息到归档
- step 3 (~7s) — OpenSpec / Superpowers / Comet 三层分工进入工程栈视图
- step 4 (~7s) — “聊天记录 vs 文件系统”作为关键判断，占据整屏

口播节选：
> 多个 Hook 和 Skill 串起来，就变成 Loop。比如内容创作：拉群消息，筛 AI 话题，生成洞察，写文章，做漫画，写动画脚本，最后归档。

---

## 6. action — 今天就能开始的小 Loop（2 steps · ~17s）

**信息池**：
- 三个行动：高频 Prompt 沉淀 Skill；烦人时刻加 Hook；重复工作串 Loop —— 来源 article §07
- 结尾定义：Prompt 是入口，Skill 是沉淀，Hook 是触发，Loop 是系统 —— 来源 article 结语
- 金句：未来真正厉害的人，是会设计 AI 循环的人 —— 来源 article 结语

**开发计划**：

- step 1 (~8s) — 三个行动建议作为待办清单：Skill、Hook、Loop
- step 2 (~9s) — 四层结构合并成完整系统蓝图，收束到结尾金句

口播节选：
> 今天你可以先做三件小事。把最高频 Prompt 沉淀成 Skill。找一个最烦人的时刻，加一个 Hook。

---

## 素材清单

### 1. coldopen
- ✓ 概念素材：聊天窗口、重复 Prompt、状态断线（CSS/SVG 模拟）
- ⚠️ 真实产品截图：如需展示 OpenClaw / 飞书，可后续提供或使用 placeholder

### 2. four-layers
- ✓ 概念素材：四层蓝图节点（CSS/SVG 模拟）
- ✓ 文案定义：Prompt / Skill / Hook / Loop

### 3. prompt-skill
- ✓ 概念素材：Prompt 输入卡、Skill 说明书、Code Review 检查清单（CSS/SVG 模拟）
- ⚠️ Superpowers 真实界面/仓库图：可选 placeholder

### 4. hook
- ✓ 概念素材：任务完成、文件出现、上下文快满、08:00 触发器（CSS/SVG 模拟）

### 5. loop
- ✓ 概念素材：内容创作 Loop 节点（CSS/SVG 模拟）
- ⚠️ OpenSpec / Superpowers / Comet logo 或仓库截图：可选 placeholder，避免假 logo

### 6. action
- ✓ 概念素材：行动清单和完整系统蓝图（CSS/SVG 模拟）

---

## 自检

- [x] 每个 step 都是单一句屏幕内容描述，没有写动画手段
- [x] 没有写具体毫秒 / keyframe / 错峰量，仅保留口播估时
- [x] 每章信息池至少 3 条，并标注 article 来源
- [x] step 估时累计约 130s，与顶部约 2 分钟同量级
- [x] 每章 2~4 steps，聚焦主题清晰
- [x] 素材清单按章节列出，placeholder 风险已标注
- [x] script.md 不含标题、序号等非口播内容
