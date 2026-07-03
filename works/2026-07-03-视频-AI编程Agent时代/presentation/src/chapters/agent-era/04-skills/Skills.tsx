import type { ChapterStepProps } from "../../../registry/types";
import AgentEraChapter from "../AgentEraChapter";

export default function Skills(props: ChapterStepProps) {
  return <AgentEraChapter chapterId="skills" {...props} />;
}
