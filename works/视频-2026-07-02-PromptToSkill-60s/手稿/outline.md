# Video Outline

> **主题**：`midnight-press`（推荐）—— 开发者 / 工具方法论气质，适合讲 Prompt 到 Skill 的工程纪律
> **总时长**：约 1 分 15 秒（口播约 380 字）
> **章节数**：4 章 / 12 步

---

## 1. hook — 每周三次就该沉淀（3 steps · ~16s）

**信息池**：
- 标准：一句 Prompt 每周说三次以上，就不该留在聊天记录里 —— 来源 article 开头 / 结尾
- 使用场景：写文案、修 Bug、总结群聊、分析问题 —— 来源 article §1
- 痛点：同样要求反复说 —— 来源 article §1

**开发计划**：

- step 1 (~5s) — “每周说三次以上”作为开场判断标准，占据主视觉
- step 2 (~6s) — 四个常见 Prompt 场景排列成输入队列：文案、Bug、群聊、分析
- step 3 (~5s) — 重复要求堆积成聊天记录噪音

口播节选：
> 如果一句 Prompt，你每周要说三次以上。它就不该继续躺在聊天记录里。

---

## 2. review-example — 代码审查为什么不能每次重说（3 steps · ~18s）

**信息池**：
- 代码审查检查项：安全漏洞、边界条件、性能问题、异常处理、测试覆盖、架构一致性 —— 来源 article §2
- 论断：不是 AI 不聪明，而是方法没有沉淀 —— 来源 article §3
- 对比：Prompt 解决一次对话，Skill 沉淀一种能力 —— 来源 article §3

**开发计划**：

- step 1 (~6s) — Code Review 输入框旁边出现六项检查需求
- step 2 (~6s) — 重复输入成本被突出，六项需求变成拥堵列表
- step 3 (~6s) — Prompt 与 Skill 的定义并列对比

口播节选：
> 比如做代码审查。你每次都要提醒它，看安全漏洞，看边界条件，看性能问题。

---

## 3. skill-manual — Skill 是 AI 能调用的说明书（3 steps · ~21s）

**信息池**：
- Skill 定义：把一套可复用方法写成 AI 能调用的说明书 —— 来源 article §3
- 流程要素：先做什么、后做什么、输入、输出、合格标准、避免事项 —— 来源 article §4
- Superpowers 示例：Markdown Skill、TDD、系统化调试、子代理协作、代码审查、验证后完成 —— 来源 article §5

**开发计划**：

- step 1 (~7s) — 高频 Prompt 折叠成一本 Skill 说明书
- step 2 (~7s) — Skill 说明书展开六个字段：先后顺序、输入、输出、合格、避免
- step 3 (~7s) — Superpowers 作为 Markdown Skill 栈，以文件卡片形式出现

口播节选：
> Skill 是一种能力。它把一套方法，写成 AI 能调用的说明书。

---

## 4. discipline — 从聊天记录到可复用流程（3 steps · ~20s）

**信息池**：
- AI 编程风险：需求没清楚就开工，测试没跑就宣布完成，上下文压缩后遗忘设计 —— 来源 article §6
- Skill 价值：把希望 AI 每次遵守的方法，从聊天记录里拿出来 —— 来源 article §7
- 金句：Prompt 像一句提醒，Skill 像一套训练 —— 来源 article 结尾

**开发计划**：

- step 1 (~7s) — AI 编程三类翻车行为作为警告列表出现
- step 2 (~6s) — 聊天记录中的方法被抽出，落到流程文件
- step 3 (~7s) — “不是问问题，是训练工作方法”作为结尾主视觉

口播节选：
> Prompt 像一句提醒。Skill 像一套训练。你不是在问 AI 一个问题。

---

## 素材清单

### 1. hook
- ✓ Prompt 输入队列、重复聊天记录（CSS/SVG 模拟）

### 2. review-example
- ✓ Code Review 检查项列表（CSS/SVG 模拟）

### 3. skill-manual
- ✓ Skill 说明书、Markdown 文件栈（CSS/SVG 模拟）
- ⚠️ Superpowers 真实仓库截图：可选 placeholder

### 4. discipline
- ✓ 翻车警告列表、流程文件转化图（CSS/SVG 模拟）

---

## 自检

- [x] 每个 step 都是单一句屏幕内容描述，没有写动画手段
- [x] 没有写具体动画时长，仅保留口播估时
- [x] 每章信息池至少 3 条，并标注 article 来源
- [x] step 估时累计约 75s，与顶部声明一致
- [x] 章节 3 steps 一章，节奏集中
- [x] 素材清单按章节列出，placeholder 风险已标注
- [x] script.md 不含标题、序号等非口播内容
