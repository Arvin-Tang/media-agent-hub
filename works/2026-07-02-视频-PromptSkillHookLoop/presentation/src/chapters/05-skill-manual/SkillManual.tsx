import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./SkillManual.css";

const fields = ["先做什么", "后做什么", "输入", "输出", "合格标准", "避免事项"];
const files = ["markdown-skill.md", "tdd.md", "debugging.md", "subagents.md", "code-review.md", "verify-done.md"];

export default function SkillManual({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="sm-scene scene-pad">
        <main className="sm-fold">
          <section className="sm-prompts">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="sm-strip" key={index}>高频 Prompt</div>
            ))}
          </section>
          <section className="sm-book card">
            <div className="label-mono">skill manual</div>
            <h1>
              <MaskReveal show duration={820}>AI 能调用的</MaskReveal>
              <MaskReveal show delay={240} duration={820}><span>说明书</span></MaskReveal>
            </h1>
          </section>
        </main>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="sm-scene scene-pad">
        <main className="sm-fields">
          <div className="kicker">一套方法，必须写清楚</div>
          <section className="sm-field-grid">
            {fields.map((field, index) => (
              <div className="sm-field card" key={field}>
                <span className="hero-num">0{index + 1}</span>
                <strong>{field}</strong>
              </div>
            ))}
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="sm-scene scene-pad">
      <main className="sm-stack-view">
        <section className="sm-stack-copy">
          <div className="kicker">Superpowers pattern</div>
          <h2>Markdown Skill 给 AI 加纪律。</h2>
        </section>
        <section className="sm-file-stack">
          {files.map((file, index) => (
            <div className="sm-file card" key={file} style={{ transform: `translateY(${index * 18}px)` }}>
              <span className="label-mono">skill file</span>
              <strong>{file}</strong>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
