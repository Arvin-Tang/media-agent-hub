import type { ChapterStepProps } from "../../../registry/types";
import AgentEraChapter from "../AgentEraChapter";

export default function Evolution(props: ChapterStepProps) {
  return <AgentEraChapter chapterId="evolution" {...props} />;
}
