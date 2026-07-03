import type { ChapterStepProps } from "../../../registry/types";
import AgentEraChapter from "../AgentEraChapter";

export default function Coldopen(props: ChapterStepProps) {
  return <AgentEraChapter chapterId="coldopen" {...props} />;
}
