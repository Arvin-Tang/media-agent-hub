import type { ChapterStepProps } from "../../../registry/types";
import AgentEraChapter from "../AgentEraChapter";

export default function Workflow(props: ChapterStepProps) {
  return <AgentEraChapter chapterId="workflow" {...props} />;
}
