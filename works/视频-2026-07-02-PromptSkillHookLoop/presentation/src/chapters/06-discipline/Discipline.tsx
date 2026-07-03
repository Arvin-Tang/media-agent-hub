import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Discipline.css";

const risks = ["需求没清楚就开工", "测试没跑就宣布完成", "上下文压缩后遗忘设计"];

export default function Discipline({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="dp-scene scene-pad">
        <main className="dp-warnings">
          <div className="dp-alert hero-num">!</div>
          <section className="dp-risk-list">
            <div className="kicker">AI 编程常见翻车</div>
            {risks.map((risk, index) => (
              <div className="dp-risk card" key={risk}>
                <span className="label-mono">risk 0{index + 1}</span>
                <strong>{risk}</strong>
              </div>
            ))}
          </section>
        </main>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="dp-scene scene-pad">
        <main className="dp-extract">
          <section className="dp-chat card">
            <div className="label-mono">chat history</div>
            <p>每次都要遵守的方法</p>
            <p>检查输入，跑测试，说明边界</p>
            <p>不要跳过验证</p>
          </section>
          <div className="dp-arrow">→</div>
          <section className="dp-flow card">
            <div className="label-mono">workflow.md</div>
            <h2>可复用流程</h2>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="dp-scene scene-pad">
      <main className="dp-close">
        <div className="kicker">Prompt to Skill</div>
        <h1>
          <MaskReveal show duration={860}>不是问问题，</MaskReveal>
          <MaskReveal show delay={260} duration={860}><span>是训练工作方法。</span></MaskReveal>
        </h1>
        <p>Prompt 像一句提醒。Skill 像一套训练。</p>
      </main>
    </div>
  );
}
