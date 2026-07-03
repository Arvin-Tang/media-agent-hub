import type { ChapterDef } from "./types";
import { Hook } from "../chapters/01-hook/Hook";
import { narrations as hookNarrations } from "../chapters/01-hook/narrations";
import { LlmPrompt } from "../chapters/02-llm-prompt/LlmPrompt";
import { narrations as llmPromptNarrations } from "../chapters/02-llm-prompt/narrations";
import { RagAgentMcp } from "../chapters/03-rag-agent-mcp/RagAgentMcp";
import { narrations as ragAgentMcpNarrations } from "../chapters/03-rag-agent-mcp/narrations";
import { LoraFcFinetune } from "../chapters/04-lora-fc-finetune/LoraFcFinetune";
import { narrations as loraFcFinetuneNarrations } from "../chapters/04-lora-fc-finetune/narrations";
import { RlhfMultimodal } from "../chapters/05-rlhf-multimodal/RlhfMultimodal";
import { narrations as rlhfMultimodalNarrations } from "../chapters/05-rlhf-multimodal/narrations";
import { Summary } from "../chapters/06-summary/Summary";
import { narrations as summaryNarrations } from "../chapters/06-summary/narrations";

export const CHAPTERS: ChapterDef[] = [
  {
    id: "hook",
    title: "钩子开场",
    narrations: hookNarrations,
    Component: Hook,
  },
  {
    id: "llm-prompt",
    title: "大模型与提示词",
    narrations: llmPromptNarrations,
    Component: LlmPrompt,
  },
  {
    id: "rag-agent-mcp",
    title: "RAG · Agent · MCP",
    narrations: ragAgentMcpNarrations,
    Component: RagAgentMcp,
  },
  {
    id: "lora-fc-finetune",
    title: "LoRA · FC · Fine-tuning",
    narrations: loraFcFinetuneNarrations,
    Component: LoraFcFinetune,
  },
  {
    id: "rlhf-multimodal",
    title: "RLHF · 多模态",
    narrations: rlhfMultimodalNarrations,
    Component: RlhfMultimodal,
  },
  {
    id: "summary",
    title: "厨房比喻总结",
    narrations: summaryNarrations,
    Component: Summary,
  },
];
