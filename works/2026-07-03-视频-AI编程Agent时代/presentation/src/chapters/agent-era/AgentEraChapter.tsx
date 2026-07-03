import type { ChapterStepProps } from "../../registry/types";
import { agentEraChapters } from "./chapterData";
import "./AgentEraChapter.css";

interface Props extends ChapterStepProps {
  chapterId: keyof typeof agentEraChapters;
}

const phaseLabels = {
  chaos: ["TAB", "CHAT", "AGENT"],
  timeline: ["01", "02", "03"],
  workflow: ["GOAL", "FILES", "TEST"],
  skills: ["TASK", "REVIEW", "EVIDENCE"],
  leverage: ["SPEC", "WORK", "SHIP"],
  guardrails: ["RISK", "BOUNDARY", "VERIFY"],
};

export default function AgentEraChapter({ chapterId, step }: Props) {
  const chapter = agentEraChapters[chapterId];
  const current = chapter.steps[step] ?? chapter.steps[chapter.steps.length - 1]!;
  const labels = phaseLabels[chapter.mode];

  return (
    <section className={`ae-scene ae-${chapter.mode} scene-pad`}>
      <div className="ae-grid" aria-hidden />
      <div className="ae-scan" aria-hidden />

      <header className="ae-header">
        <div>
          <div className="kicker">{chapter.kicker}</div>
          <h1>{chapter.title}</h1>
        </div>
        <div className="ae-accent label-mono">{chapter.accent}</div>
      </header>

      <main className="ae-main">
        <aside className="ae-visual card">
          <div className="ae-visual-top label-mono">
            <span>{current.eyebrow}</span>
            <span>{String(step + 1).padStart(2, "0")}/{chapter.steps.length}</span>
          </div>

          <div className="ae-flow" aria-hidden>
            {labels.map((label, index) => (
              <div className={`ae-node ${index <= step ? "is-on" : ""}`} key={label}>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="ae-terminal" aria-hidden>
            {(current.terminal ?? []).map((line, index) => (
              <div className="ae-terminal-line" key={`${line}-${index}`}>
                <span className="ae-prompt">$</span>
                <span>{line}</span>
              </div>
            ))}
            <div className="ae-cursor" />
          </div>
        </aside>

        <section className="ae-copy">
          <div className="ae-eyebrow label-mono">{current.eyebrow}</div>
          <h2>{current.headline}</h2>
          <p>{current.detail}</p>
          <div className="ae-chips">
            {current.visual.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
}
