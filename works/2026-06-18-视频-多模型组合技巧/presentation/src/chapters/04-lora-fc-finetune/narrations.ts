import type { Narration } from "../../registry/types";

export const narrations: Narration[] = [
  // step 0 — LoRA intro
  "第六个，LoRA，低秩适配。大模型训练成本高到什么程度？GPT-4 训练花上亿美金，一般公司根本扛不住。每次为了特定任务重新训练，完全不现实。",
  // step 1 — LoRA solution
  "LoRA 的思路是不动原模型，只给它加一层外挂适配器。打个比方：大模型是底妆粉底，LoRA 是遮瑕笔，不改底妆本身，只做局部调整。有了 LoRA，你在消费级显卡上也能微调大模型。",
  // step 2 — Function Calling intro
  "第七个，Function Calling，函数调用，也叫 Tool Calling，本质是让大模型调用外部函数和 API 的能力。没有这个的 AI 只能动嘴，有了它 AI 就能动手——查天气、订票、发邮件、执行代码。",
  // step 3 — FC flow
  "整个流程是这样的：你说「帮我查北京的天气」，大模型识别意图，发现需要调 getWeather 函数，系统执行函数拿到结果，大模型再把数据转成自然语言回你。它就是 Agent 的那双手。",
  // step 4 — Fine-tuning intro
  "第八个，Fine-tuning，微调。就是用特定领域的数据，对预训练好的模型做二次训练。改动大、成本高、但效果好。",
  // step 5 — When to use what
  "什么时候需要？模型要掌握大量领域知识比如医疗术语、法律条文，或者企业客服需要统一语调。什么时候不需要？只是查最新信息那用 RAG 就够了，只是临时改个风格调 Prompt 就行。Fine-tuning 和 LoRA 的区别：Fine-tuning 改整个模型，成本高效果好；LoRA 只加外挂适配器，成本低效果尚可。",
];
