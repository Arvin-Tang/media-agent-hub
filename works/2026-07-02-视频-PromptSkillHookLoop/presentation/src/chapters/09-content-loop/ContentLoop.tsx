import type { ChapterStepProps } from "../../registry/types";
import "./ContentLoop.css";

const loopNodes = ["拉群消息", "筛 AI 话题", "生成洞察", "写文章", "做漫画", "写动画脚本", "归档素材"];

export default function ContentLoop({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="cl-scene scene-pad">
        <main className="cl-split">
          <section className="cl-single card">
            <div className="label-mono">one hook</div>
            <h1>一个自动动作</h1>
            <div className="cl-action" aria-hidden />
          </section>
          <section className="cl-system card">
            <div className="label-mono">hooks + skills</div>
            <h1>一套闭环系统</h1>
            <div className="cl-mini-loop" aria-hidden>
              <i />
              <i />
              <i />
              <i />
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="cl-scene scene-pad">
        <main className="cl-loop-map">
          <div className="cl-ring" aria-hidden />
          <h1>内容创作 Loop</h1>
          {loopNodes.map((item, index) => (
            <span className={`cl-node cl-node-${index + 1}`} key={item}>{item}</span>
          ))}
        </main>
      </div>
    );
  }

  return (
    <div className="cl-scene scene-pad">
      <main className="cl-machine">
        <div className="kicker">continuous system</div>
        <h1>AI 变成持续运转的内容系统。</h1>
        <div className="cl-belts" aria-hidden>
          <span />
          <span />
          <span />
        </div>
      </main>
    </div>
  );
}
