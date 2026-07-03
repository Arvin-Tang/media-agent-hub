import type { ChapterStepProps } from "../../../registry/types";
import AgentEraChapter from "../AgentEraChapter";

export default function Guardrails(props: ChapterStepProps) {
  return <AgentEraChapter chapterId="guardrails" {...props} />;
}
