import type { ChapterStepProps } from "../../registry/types";
import "./FourLayers.css";

const layers = [
  ["Prompt", "一句话"],
  ["Skill", "一种能力"],
  ["Hook", "一个时刻"],
  ["Loop", "一套系统"],
];

export default function FourLayers({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="fl-scene scene-pad">
        <main className="fl-split">
          <section className="fl-score card">
            <div className="label-mono">old metric</div>
            <h2>90 → 95</h2>
            <p>模型分数继续上涨</p>
          </section>
          <div className="fl-vs label-mono">not enough</div>
          <section className="fl-structure card">
            <div className="label-mono">real upgrade</div>
            <h1>给 AI 建结构</h1>
            <p>让能力进入稳定工作流</p>
          </section>
        </main>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="fl-scene scene-pad">
        <main className="fl-blueprint">
          <div className="kicker">structure map</div>
          <h2>四个工程节点</h2>
          <div className="fl-node-row">
            {layers.map(([name], index) => (
              <div className="fl-node" key={name}>
                <span className="label-mono">0{index + 1}</span>
                <strong>{name}</strong>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="fl-scene scene-pad">
      <main className="fl-quadrants">
        {layers.map(([name, desc], index) => (
          <section className="fl-quad card" key={name}>
            <div className="label-mono">layer 0{index + 1}</div>
            <h2>{name}</h2>
            <p>{desc}</p>
          </section>
        ))}
      </main>
    </div>
  );
}
