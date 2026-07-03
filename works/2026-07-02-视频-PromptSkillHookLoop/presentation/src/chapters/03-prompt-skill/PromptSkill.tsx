import type { ChapterStepProps } from "../../registry/types";
import "./PromptSkill.css";

const prompts = ["总结群聊", "修这个 Bug", "第一性原理分析"];
const review = ["安全", "边界", "性能", "异常", "测试"];

export default function PromptSkill({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="ps-scene scene-pad">
        <main className="ps-one-shot">
          <section className="ps-prompt-card card">
            <div className="label-mono">prompt</div>
            <h1>你说一句</h1>
            <div className="ps-prompt-list">
              {prompts.map((item) => <span key={item}>{item}</span>)}
            </div>
          </section>
          <div className="ps-ai-node">AI</div>
          <section className="ps-result card">
            <div className="label-mono">result</div>
            <h2>回一轮结果</h2>
          </section>
        </main>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="ps-scene scene-pad">
        <main className="ps-repeat">
          <div className="kicker">repeat threshold</div>
          <h2>每周三次以上</h2>
          <p>就不该继续躺在聊天记录里。</p>
          <div className="ps-repeat-stack" aria-hidden>
            {Array.from({ length: 6 }).map((_, index) => <i key={index} />)}
          </div>
        </main>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="ps-scene scene-pad">
        <main className="ps-manual card">
          <div className="label-mono">skill manual</div>
          <h2>可复用方法，写成 AI 能调用的说明书。</h2>
          <div className="ps-manual-grid">
            <section><span>input</span><strong>触发条件</strong></section>
            <section><span>process</span><strong>执行流程</strong></section>
            <section><span>output</span><strong>交付标准</strong></section>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="ps-scene scene-pad">
      <main className="ps-review">
        <section className="ps-review-title">
          <div className="kicker">code review skill</div>
          <h2>下次按同一套标准执行</h2>
        </section>
        <section className="ps-checks">
          {review.map((item, index) => (
            <div className="ps-check card" key={item}>
              <span className="label-mono">check 0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
