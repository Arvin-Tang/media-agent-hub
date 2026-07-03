import type { ChapterDef } from "./types";
import ColdopenChapter from "../chapters/agent-era/01-coldopen/Coldopen";
import { narrations as coldopenNarrations } from "../chapters/agent-era/01-coldopen/narrations";
import EvolutionChapter from "../chapters/agent-era/02-evolution/Evolution";
import { narrations as evolutionNarrations } from "../chapters/agent-era/02-evolution/narrations";
import WorkflowChapter from "../chapters/agent-era/03-workflow/Workflow";
import { narrations as workflowNarrations } from "../chapters/agent-era/03-workflow/narrations";
import SkillsChapter from "../chapters/agent-era/04-skills/Skills";
import { narrations as skillsNarrations } from "../chapters/agent-era/04-skills/narrations";
import LeverageChapter from "../chapters/agent-era/05-leverage/Leverage";
import { narrations as leverageNarrations } from "../chapters/agent-era/05-leverage/narrations";
import GuardrailsChapter from "../chapters/agent-era/06-guardrails/Guardrails";
import { narrations as guardrailsNarrations } from "../chapters/agent-era/06-guardrails/narrations";

export const CHAPTERS: ChapterDef[] = [
  {
    id: "coldopen",
    title: "别再把 AI 当 Tab 键",
    narrations: coldopenNarrations,
    Component: ColdopenChapter,
  },
  {
    id: "evolution",
    title: "三阶段演进",
    narrations: evolutionNarrations,
    Component: EvolutionChapter,
  },
  {
    id: "workflow",
    title: "从代码到流程",
    narrations: workflowNarrations,
    Component: WorkflowChapter,
  },
  {
    id: "skills",
    title: "开发者能力迁移",
    narrations: skillsNarrations,
    Component: SkillsChapter,
  },
  {
    id: "leverage",
    title: "小团队杠杆",
    narrations: leverageNarrations,
    Component: LeverageChapter,
  },
  {
    id: "guardrails",
    title: "安全交付",
    narrations: guardrailsNarrations,
    Component: GuardrailsChapter,
  },
];
