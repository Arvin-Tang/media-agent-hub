import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Coldopen.css";

const demands = ["格式怎么写", "流程怎么走", "哪些坑不要踩"];

export default function Coldopen({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="co-scene scene-pad">
        <div className="co-grid" />
        <div className="co-chat-stack" aria-hidden>
          {Array.from({ length: 7 }).map((_, index) => (
            <div className={`co-window co-window-${index + 1}`} key={index}>
              <span />
              <span />
              <span />
            </div>
          ))}
        </div>
        <main className="co-hero">
          <div className="kicker">Cold open</div>
          <h1>
            <MaskReveal show duration={760}>AI 很强，</MaskReveal>
            <MaskReveal show delay={260} duration={760}>
              <span className="co-accent">但我还是这么忙？</span>
            </MaskReveal>
          </h1>
          <div className="co-equation label-mono">
            MODEL ↑ <span /> WORKFLOW ?
          </div>
        </main>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="co-scene scene-pad">
        <div className="co-grid" />
        <main className="co-demands">
          <div className="kicker">每次重新说</div>
          <h2>同一套要求，反复输入。</h2>
          <div className="co-demand-rail">
            {demands.map((item, index) => (
              <div className="card co-demand" key={item} style={{ animationDelay: `${index * 120}ms` }}>
                <div className="label-mono">0{index + 1}</div>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <div className="co-pressure label-mono">repeat · repeat · repeat</div>
        </main>
      </div>
    );
  }

  return (
    <div className="co-scene scene-pad">
      <div className="co-grid" />
      <main className="co-disconnect">
        <section className="co-ai-card card">
          <div className="label-mono">AI worker</div>
          <div className="co-avatar">AI</div>
          <p>没有结构，它就像一个临时工。</p>
        </section>
        <div className="co-breakline" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <section className="co-state-card card">
          <div className="label-mono">state</div>
          <h2>窗口一关，状态就断了。</h2>
          <div className="co-status-bars" aria-hidden>
            <i />
            <i />
            <i />
          </div>
        </section>
      </main>
    </div>
  );
}
