import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./ReviewExample.css";

const checks = ["安全漏洞", "边界条件", "性能问题", "异常处理", "测试覆盖", "架构一致性"];

export default function ReviewExample({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="rv-scene scene-pad">
        <main className="rv-input">
          <section className="rv-prompt card">
            <div className="label-mono">code review prompt</div>
            <h1>请帮我审查这段代码</h1>
            <div className="rv-cursor" />
          </section>
          <section className="rv-checks">
            {checks.map((check, index) => (
              <div className="rv-check card" key={check} style={{ animationDelay: `${index * 70}ms` }}>
                <span className="label-mono">check 0{index + 1}</span>
                <strong>{check}</strong>
              </div>
            ))}
          </section>
        </main>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="rv-scene scene-pad">
        <main className="rv-congestion">
          <div className="rv-count hero-num">06</div>
          <section className="rv-stack">
            <div className="kicker">每次都要重说</div>
            {checks.map((check) => (
              <div className="rv-row" key={check}>
                <span>重复输入</span>
                <strong>{check}</strong>
              </div>
            ))}
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="rv-scene scene-pad">
      <main className="rv-compare">
        <section className="rv-definition card">
          <div className="label-mono">prompt</div>
          <h2>
            <MaskReveal show duration={780}>一句话</MaskReveal>
          </h2>
          <p>解决一次对话</p>
        </section>
        <section className="rv-definition rv-definition-accent card">
          <div className="label-mono">skill</div>
          <h2>
            <MaskReveal show delay={220} duration={780}>一种能力</MaskReveal>
          </h2>
          <p>沉淀一套方法</p>
        </section>
      </main>
    </div>
  );
}
