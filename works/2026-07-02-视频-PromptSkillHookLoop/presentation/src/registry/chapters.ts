import type { ChapterDef } from "./types";
import ColdopenChapter from "../chapters/01-coldopen/Coldopen";
import { narrations as coldopenNarrations } from "../chapters/01-coldopen/narrations";
import FourLayersChapter from "../chapters/02-four-layers/FourLayers";
import { narrations as fourLayersNarrations } from "../chapters/02-four-layers/narrations";
import PromptSkillChapter from "../chapters/03-prompt-skill/PromptSkill";
import { narrations as promptSkillNarrations } from "../chapters/03-prompt-skill/narrations";
import ReviewExampleChapter from "../chapters/04-review-example/ReviewExample";
import { narrations as reviewExampleNarrations } from "../chapters/04-review-example/narrations";
import SkillManualChapter from "../chapters/05-skill-manual/SkillManual";
import { narrations as skillManualNarrations } from "../chapters/05-skill-manual/narrations";
import DisciplineChapter from "../chapters/06-discipline/Discipline";
import { narrations as disciplineNarrations } from "../chapters/06-discipline/narrations";
import ManualCallChapter from "../chapters/07-manual-call/ManualCall";
import { narrations as manualCallNarrations } from "../chapters/07-manual-call/narrations";
import EventEntryChapter from "../chapters/08-event-entry/EventEntry";
import { narrations as eventEntryNarrations } from "../chapters/08-event-entry/narrations";
import ContentLoopChapter from "../chapters/09-content-loop/ContentLoop";
import { narrations as contentLoopNarrations } from "../chapters/09-content-loop/narrations";
import FileSystemChapter from "../chapters/10-file-system/FileSystem";
import { narrations as fileSystemNarrations } from "../chapters/10-file-system/narrations";
import ActionChapter from "../chapters/06-action/Action";
import { narrations as actionNarrations } from "../chapters/06-action/narrations";

export const CHAPTERS: ChapterDef[] = [
  {
    id: "coldopen",
    title: "聊天框为什么越用越乱",
    narrations: coldopenNarrations,
    Component: ColdopenChapter,
  },
  {
    id: "four-layers",
    title: "四层结构总览",
    narrations: fourLayersNarrations,
    Component: FourLayersChapter,
  },
  {
    id: "prompt-skill",
    title: "从一句话到一种能力",
    narrations: promptSkillNarrations,
    Component: PromptSkillChapter,
  },
  {
    id: "review-example",
    title: "重复 Prompt 的真实成本",
    narrations: reviewExampleNarrations,
    Component: ReviewExampleChapter,
  },
  {
    id: "skill-manual",
    title: "Skill 是一份能力说明书",
    narrations: skillManualNarrations,
    Component: SkillManualChapter,
  },
  {
    id: "discipline",
    title: "把方法从聊天记录里拿出来",
    narrations: disciplineNarrations,
    Component: DisciplineChapter,
  },
  {
    id: "manual-call",
    title: "AI 不该一直等你开口",
    narrations: manualCallNarrations,
    Component: ManualCallChapter,
  },
  {
    id: "event-entry",
    title: "事件才是真实工作流入口",
    narrations: eventEntryNarrations,
    Component: EventEntryChapter,
  },
  {
    id: "content-loop",
    title: "把动作串成系统",
    narrations: contentLoopNarrations,
    Component: ContentLoopChapter,
  },
  {
    id: "file-system",
    title: "文件系统接管聊天记录",
    narrations: fileSystemNarrations,
    Component: FileSystemChapter,
  },
  {
    id: "action",
    title: "今天就能开始的小 Loop",
    narrations: actionNarrations,
    Component: ActionChapter,
  },
];
