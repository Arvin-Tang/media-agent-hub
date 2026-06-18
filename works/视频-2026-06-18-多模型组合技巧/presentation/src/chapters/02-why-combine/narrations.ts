import type { Narration } from "../../registry/types";

export const narrations: Narration[] = [
  // step 0 — four model cards with strengths and weaknesses
  "每个模型都有自己最擅长的活儿。GPT-4o 写代码强，但长文本理解不如 Claude。Claude 写文章最自然，但推理数学不如 DeepSeek R1。DeepSeek 推理猛，但画不了图。Gemini 有 Google 搜索加持，但创意写作一般。",
  // step 1 — barrel effect: weakest dimension caps you
  "单模型使用，你被卡在最弱的那个维度。就像木桶效应——水位由最短的那块板决定。",
  // step 2 — combination: puzzle pieces completing each other
  "组合使用，就是每个维度都用最擅长的模型。四个模型拼在一起，每块补另一块的短板。",
  // step 3 — golden quote
  "整体上限取决于团队里最强的那个，不是最弱的。",
];
