import type { Narration } from "../../registry/types";

export const narrations: Narration[] = [
  // step 0 — abbreviation rain
  "你打开一篇 AI 文章，满眼 RAG、Agent、MCP、LoRA……是不是头都大了？",
  // step 1 — "别慌"
  "别慌。今天我把 2026 年最常遇到的十个 AI 名词，用大白话一次性讲清楚。",
  // step 2 — LLM intro
  "先说最基础的一个：大模型，英文叫 LLM。GPT、Claude、DeepSeek、Gemini，这些都叫大模型。就像一个读了全人类知识的天才实习生——知识面极广，但刚入职，不懂你公司的具体流程。",
  // step 3 — weakness 1
  "大模型有三个致命弱点。第一，知识有截止日期，训练完就停在那一天了。",
  // step 4 — weakness 2
  "第二，它会幻觉，不懂也硬编答案。",
  // step 5 — weakness 3 + transition
  "第三，它只能聊天，没法操作外部系统，不能查数据库、不能点按钮。后面我们讲的所有技术，都是在补这三个窟窿。注意，下面这些技术都是跑在 LLM 之上的——不是替代大模型，而是给它建一个完整系统。",
];
