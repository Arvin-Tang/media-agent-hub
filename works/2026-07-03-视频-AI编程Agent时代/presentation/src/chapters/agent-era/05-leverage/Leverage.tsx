import type { ChapterStepProps } from "../../../registry/types";
import AgentEraChapter from "../AgentEraChapter";

export default function Leverage(props: ChapterStepProps) {
  return <AgentEraChapter chapterId="leverage" {...props} />;
}
