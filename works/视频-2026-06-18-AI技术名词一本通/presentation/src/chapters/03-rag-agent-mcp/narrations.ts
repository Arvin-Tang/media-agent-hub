import type { Narration } from "../../registry/types";

export const narrations: Narration[] = [
  // step 0 — RAG intro
  "第三个词，RAG，中文叫检索增强生成。大模型的知识是背出来的，考完就忘了。你问它公司内部规定、昨天的新闻，它答不上来。",
  // step 1 — RAG solution
  "RAG 的解决思路很简单——你提问的时候，先去知识库里搜相关内容，然后把搜到的东西连你的问题一起喂给 AI，让它看着资料回答问题。",
  // step 2 — RAG flow detail
  "完整流程就是：你提问，系统去向量数据库搜最相关的内容，然后打包给大模型，最后基于资料回答。智能客服就是典型应用。三个关键组件：向量数据库，把文字转成向量按相似度检索；Embedding，把人类语言转成数学向量；文档分块，把长文档切成小块方便精准检索。",
  // step 3 — Agent intro
  "第四个，Agent，智能体。如果说普通 AI 是「你说一步，它做一步」，那 Agent 就是你给一个目标，它自己从头干到尾。",
  // step 4 — Agent four abilities
  "四大能力：规划，把大目标拆成小步骤；记忆，记住上下文和中间结果；工具调用，查数据库、点按钮、调 API；行动观察，执行操作然后看结果，调整策略。这个思考、行动、观察、再思考的循环，在业界叫 ReAct 框架。",
  // step 5 — Agent vs AI comparison
  "举个栗子。普通 AI：你让它订机票，它回你「好的，请去携程」。Agent：自己打开浏览器，查航班，比价格，下单，把确认信息发你。现在还有 Multi-Agent 模式，多个 Agent 协作完成复杂任务。",
  // step 6 — MCP intro
  "第五个，MCP，模型上下文协议，由 Anthropic 在 2024 年底提出。以前每个 AI 连接外部工具都要定制开发——就像每个设备都有自己的充电线。",
  // step 7 — MCP solution
  "MCP 就是给 AI 行业制定了一个统一标准，相当于 AI 世界的 USB-C 接口。MCP Server 把工具包装成标准接口，MCP Client 按协议调用，不用再一对一对接了。截至 2026 年，几乎所有主流 AI 框架——Claude、LangChain、Vercel AI SDK——都已经支持 MCP，开发门槛大幅降低。",
];
