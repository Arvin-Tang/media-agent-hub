import type { Narration } from "../../registry/types";

export const narrations: Narration[] = [
  // step 0 — RLHF intro
  "第九个，RLHF，基于人类反馈的强化学习。大模型知识面很广，但它不知道什么该说什么不该说。RLHF 就是用人类反馈来做强化学习——教 AI 价值观。",
  // step 1 — RLHF flow
  "流程很简单：让 AI 生成多个答案，人类排序说这个好那个不好，AI 从排序中学习，调整行为。",
  // step 2 — RLTF
  "2025 年还出了 RLTF，用工具执行结果来反馈。AI 写一段代码，编译通过就是好，报错就是不好。比用人去一条条排序，效率高太多了。",
  // step 3 — Multimodal intro
  "第十个，多模态，Multimodal。AI 不仅能处理文字，还能理解图片、音频、视频。文生图、图生文、语音交互、视频理解。像 DALL·E、Midjourney 就是典型。",
  // step 4 — Multimodal trend
  "2026 年的趋势是，多模态从能看懂往能理解进化——AI 看一张照片，不仅知道这是一只猫，还能理解猫很放松、阳光很好这种情绪和氛围。",
];
