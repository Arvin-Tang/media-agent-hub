export interface AgentEraChapterData {
  kicker: string;
  title: string;
  accent: string;
  mode: "chaos" | "timeline" | "workflow" | "skills" | "leverage" | "guardrails";
  steps: Array<{
    eyebrow: string;
    headline: string;
    detail: string;
    visual: string[];
    terminal?: string[];
  }>;
}

export const agentEraChapters: Record<string, AgentEraChapterData> = {
  coldopen: {
    kicker: "Cold open",
    title: "别再把 AI 当高级 Tab 键",
    accent: "Agent Mode",
    mode: "chaos",
    steps: [
      {
        eyebrow: "旧认知",
        headline: "AI 编程不再只是补全下一行",
        detail: "如果还把它当作更聪明的 Tab 键，已经落后一代工具范式。",
        visual: ["autocomplete", "chat snippet", "agent task"],
        terminal: ["> suggest next line", "// user presses Tab", "status: passive"],
      },
      {
        eyebrow: "新变化",
        headline: "从生成代码，到执行任务",
        detail: "目标、文件、测试、修复开始连成一个研发闭环。",
        visual: ["read repo", "edit files", "run tests"],
        terminal: ["> inspect project", "> patch related files", "> npm test"],
      },
      {
        eyebrow: "判断标准",
        headline: "它能不能进入真实研发流程？",
        detail: "关键不在它写了多少代码，而在它是否能留下可审查的过程证据。",
        visual: ["diff", "tests", "report"],
        terminal: ["changed: 7 files", "tests: partial pass", "risk: review needed"],
      },
    ],
  },
  evolution: {
    kicker: "Three phases",
    title: "AI 编程三阶段演进",
    accent: "补全 → 对话 → Agent",
    mode: "timeline",
    steps: [
      {
        eyebrow: "阶段一",
        headline: "代码补全：光标后的下一行",
        detail: "它像自动补全增强版，能加速输入，但仍围绕单点代码片段。",
        visual: ["cursor", "next line", "single file"],
        terminal: ["mode: completion", "scope: line/function", "human integrates"],
      },
      {
        eyebrow: "阶段二",
        headline: "对话编程：问一句，答一段",
        detail: "它能解释报错、生成函数、改组件，但复制、集成、验证主要靠人。",
        visual: ["chat", "copy", "manual verify"],
        terminal: ["mode: chat", "output: snippet", "verification: manual"],
      },
      {
        eyebrow: "阶段三",
        headline: "Agent Mode：给目标，让它跑流程",
        detail: "它开始读项目、找文件、改调用点、跑测试，再根据报错继续修。",
        visual: ["goal", "repo scan", "test loop"],
        terminal: ["mode: agent", "scope: task", "loop: fix until evidence"],
      },
    ],
  },
  workflow: {
    kicker: "Workflow",
    title: "Agent Mode 到底改变了什么",
    accent: "研发流程",
    mode: "workflow",
    steps: [
      {
        eyebrow: "入口",
        headline: "输入的是任务，不是代码题",
        detail: "好任务会写清目标、边界、兼容要求、验收标准。",
        visual: ["goal card", "constraints", "acceptance"],
        terminal: ["task: backend pagination", "keep: API shape", "add: failure tests"],
      },
      {
        eyebrow: "执行",
        headline: "它沿着文件和调用链推进",
        detail: "从项目结构开始，定位相关文件，修改多个调用点。",
        visual: ["file tree", "call graph", "patch set"],
        terminal: ["scan src/routes", "trace user list", "patch 5 call sites"],
      },
      {
        eyebrow: "闭环",
        headline: "跑测试，再用错误反推修复",
        detail: "这才是从写代码到做研发任务的关键跃迁。",
        visual: ["test", "error", "repair"],
        terminal: ["test failed: edge case", "fix serializer", "test passed"],
      },
    ],
  },
  skills: {
    kicker: "Developer shift",
    title: "开发者的新核心能力",
    accent: "拆任务 · 审结果 · 要证据",
    mode: "skills",
    steps: [
      {
        eyebrow: "能力一",
        headline: "更会拆任务",
        detail: "“优化一下”太模糊；可执行任务必须有目标、边界和验收。",
        visual: ["vague request", "clear task", "acceptance"],
        terminal: ["bad: optimize code", "good: change pagination", "guard: no API break"],
      },
      {
        eyebrow: "能力二",
        headline: "更会审查结果",
        detail: "AI 写得越快，接口破坏、边界遗漏、安全问题也会来得越快。",
        visual: ["diff review", "contract", "security"],
        terminal: ["review: changed files", "check: contract", "flag: unsafe shortcut"],
      },
      {
        eyebrow: "能力三",
        headline: "要求验证证据",
        detail: "没有命令、测试和风险说明的“已完成”，只能算草稿。",
        visual: ["commands", "tests", "risk note"],
        terminal: ["ran: npm test", "skipped: e2e", "risk: manual QA"],
      },
    ],
  },
  leverage: {
    kicker: "Small team leverage",
    title: "小团队为什么更该关注",
    accent: "研发杠杆",
    mode: "leverage",
    steps: [
      {
        eyebrow: "现实",
        headline: "一个人很难覆盖完整研发链路",
        detail: "需求、实现、测试、文档、发布，每一环都吃时间。",
        visual: ["requirements", "implementation", "release"],
        terminal: ["todo: spec", "todo: tests", "todo: docs"],
      },
      {
        eyebrow: "杠杆",
        headline: "Agent 压缩流程性和跨文件工作",
        detail: "它不会把一个人变成十个人，但能减少大量重复劳动。",
        visual: ["refactor", "test update", "docs update"],
        terminal: ["batch edit", "update tests", "summarize PR"],
      },
      {
        eyebrow: "前提",
        headline: "流程设计好，杠杆才是真的",
        detail: "没有边界的自动化，只会把返工速度也一起放大。",
        visual: ["scope", "rollback", "review gate"],
        terminal: ["scope locked", "checkpoint saved", "review required"],
      },
    ],
  },
  guardrails: {
    kicker: "Guardrails",
    title: "越自动化，越要有边界",
    accent: "安全交付",
    mode: "guardrails",
    steps: [
      {
        eyebrow: "风险",
        headline: "Agent 会幻觉，也会误解项目结构",
        detail: "不存在的 API、临时补丁、技术债，都可能被快速堆出来。",
        visual: ["hallucination", "wrong API", "debt"],
        terminal: ["warning: unknown API", "shortcut detected", "needs rollback"],
      },
      {
        eyebrow: "分工",
        headline: "人定义目标，AI 执行流程",
        detail: "关键判断、权限边界、风险接受，仍然必须由人来负责。",
        visual: ["human goal", "agent run", "human review"],
        terminal: ["human: acceptance", "agent: execution", "human: approve"],
      },
      {
        eyebrow: "结论",
        headline: "未来厉害的程序员，会让 AI 可验证地交付",
        detail: "不只是写得最快，而是让结果安全、可控、可复盘。",
        visual: ["safe", "controlled", "verified"],
        terminal: ["deliverable: diff + tests + risks", "status: ready for review"],
      },
    ],
  },
};
