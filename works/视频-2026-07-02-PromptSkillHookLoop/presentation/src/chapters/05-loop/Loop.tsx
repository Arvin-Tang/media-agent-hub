import type { ChapterStepProps } from "../../registry/types";
import "./Loop.css";

const contentLoop = ["群消息", "AI 话题", "洞察", "文章", "漫画", "动画脚本", "归档"];
const stack = [["OpenSpec", "做什么"], ["Superpowers", "怎么做"], ["Comet", "什么时候做什么"]];

export default function Loop({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="lp-scene scene-pad">
        <main className="lp-compare">
          <section className="lp-single card">
            <div className="label-mono">one hook</div>
            <h2>一个自动动作</h2>
          </section>
          <section className="lp-system card">
            <div className="label-mono">hooks + skills</div>
            <h1>串起来，就是 Loop。</h1>
          </section>
        </main>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="lp-scene scene-pad">
        <main className="lp-ring">
          <div className="kicker">content creation loop</div>
          <h2>内容系统开始转动</h2>
          <div className="lp-loop-nodes">
            {contentLoop.map((item, index) => <span key={item} className={`lp-node-${index + 1}`}>{item}</span>)}
          </div>
        </main>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="lp-scene scene-pad">
        <main className="lp-stack">
          <div className="kicker">ai coding stack</div>
          {stack.map(([name, role], index) => (
            <section className="lp-stack-row card" key={name}>
              <span className="label-mono">layer 0{index + 1}</span>
              <strong>{name}</strong>
              <em>{role}</em>
            </section>
          ))}
        </main>
      </div>
    );
  }

  return (
    <div className="lp-scene scene-pad">
      <main className="lp-files">
        <section className="lp-chat card">
          <div className="label-mono">chat log</div>
          <h2>不是工程系统</h2>
        </section>
        <section className="lp-fs card">
          <div className="label-mono">file system</div>
          <h1>需求、状态、证据、下一步，都落到文件里。</h1>
        </section>
      </main>
    </div>
  );
}
