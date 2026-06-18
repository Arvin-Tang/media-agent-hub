export const narrations = [
  // step 0 — 流水线总览 (~10s)
  "我自己做视频就在用组合模式。选题用 Claude，校对用 GPT-4o，配图用 Midjourney，终审用 DeepSeek。整个流程六步，每步都交给最擅长的模型。",

  // step 1 — 放大前两步：Claude选题+大纲 / Claude口播稿 (~8s)
  "选题和大纲用 Claude，结构化思维最强。口播稿也用 Claude，中文写作最自然，但 prompt 里要明确口语化、短句、B 站风格。",

  // step 2 — 放大中间三步：GPT-4o校对 / MJ配图 / 代码分工 (~9s)
  "技术校对丢给 GPT-4o，它查技术名词比 Claude 稳。配图用 Midjourney。代码用 GPT-4o 写逻辑、Claude 写 UI 样式。",

  // step 3 — 放大最后一步：DeepSeek终审 + 总结 (~8s)
  "最终审查丢给 DeepSeek，R1 的推理能力能发现前两个模型没注意到的问题。整个流程比单用模型效率高太多。每个模型都在最舒服的位置干活。",
];
