import type { Narration } from "../../registry/types";

export const narrations: Narration[] = [
  // step 0 — Prompt intro
  "接下来讲 Prompt，中文叫提示词，就是你跟 AI 说的每一句话。同样一个问题，Prompt 写得不一样，答案天差地别。",
  // step 1 — Bad prompt example
  "你写「写一篇文章」，AI 回你几百字废话。",
  // step 2 — Good prompt example
  "你写「你是一名科技博主，面向完全不懂技术的普通人，800 字，用比喻，轻松一点」——出来的东西就能直接用。这就是 Prompt Engineering。",
  // step 3 — Prompt Engineering context
  "2023 年这岗位贼火，专职提示工程师是个正式职位。不过这两年推理模型越来越聪明，比如 DeepSeek 的 R1 系列，你正常说话反而比套模板更有效了。",
  // step 4 — Transition: all tech builds on LLM
  "注意，下面这些技术都是跑在 LLM 之上的——不是替代大模型，而是给它建一个完整系统。",
];
