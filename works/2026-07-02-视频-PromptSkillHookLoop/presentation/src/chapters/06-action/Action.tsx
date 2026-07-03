import type { ChapterStepProps } from "../../registry/types";
import "./Action.css";

const todos = [["Skill", "沉淀高频 Prompt"], ["Hook", "接住烦人时刻"], ["Loop", "串起重复工作"]];
const layers = ["Prompt", "Skill", "Hook", "Loop"];

export default function Action({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="ac-scene scene-pad">
        <main className="ac-todos">
          <div className="kicker">start today</div>
          <h1>先做三件小事</h1>
          <section className="ac-list">
            {todos.map(([name, desc], index) => (
              <div className="ac-todo card" key={name}>
                <span className="label-mono">0{index + 1}</span>
                <strong>{name}</strong>
                <p>{desc}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="ac-scene scene-pad">
      <main className="ac-final">
        <section className="ac-blueprint">
          {layers.map((layer, index) => <span key={layer} className={`ac-layer-${index + 1}`}>{layer}</span>)}
        </section>
        <section className="ac-quote">
          <div className="kicker">future skill</div>
          <h2>会设计 AI 循环的人</h2>
        </section>
      </main>
    </div>
  );
}
