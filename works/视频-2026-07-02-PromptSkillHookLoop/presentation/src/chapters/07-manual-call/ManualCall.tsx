import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./ManualCall.css";

export default function ManualCall({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="mc-scene scene-pad">
        <div className="mc-grid" />
        <main className="mc-waiting">
          <section className="mc-chat card">
            <div className="label-mono">AI chat</div>
            <div className="mc-cursor" />
            <p>waiting for input...</p>
          </section>
          <section className="mc-copy">
            <div className="kicker">Prompt + Skill</div>
            <h1>
              <MaskReveal show duration={760}>还是要你</MaskReveal>
              <MaskReveal show delay={260} duration={760}>
                <span>主动调用。</span>
              </MaskReveal>
            </h1>
          </section>
        </main>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="mc-scene scene-pad">
        <div className="mc-grid" />
        <main className="mc-drag">
          <div className="mc-human card">
            <div className="label-mono">human</div>
            <strong>发现任务</strong>
            <strong>复制内容</strong>
            <strong>提醒 AI</strong>
          </div>
          <div className="mc-transfer" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <div className="mc-ai card">
            <div className="label-mono">AI</div>
            <h2>现在该做什么？</h2>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="mc-scene scene-pad">
      <div className="mc-grid" />
      <main className="mc-hook-entry">
        <section className="mc-event card">
          <div className="label-mono">event</div>
          <h2>某个时刻发生</h2>
          <div className="mc-pulse" aria-hidden />
        </section>
        <section className="mc-hook card">
          <div className="label-mono">hook</div>
          <h2>AI 自动进入流程</h2>
          <div className="mc-flow" aria-hidden>
            <i />
            <i />
            <i />
          </div>
        </section>
      </main>
    </div>
  );
}
