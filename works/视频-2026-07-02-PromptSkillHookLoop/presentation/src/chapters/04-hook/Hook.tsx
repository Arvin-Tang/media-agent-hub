import type { ChapterStepProps } from "../../registry/types";
import "./Hook.css";

const triggers = ["任务完成", "文件出现", "上下文快满", "每天 08:00"];
const events = ["文件出现", "会议结束", "代码提交", "用户反馈", "系统报错"];

export default function Hook({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="hk-scene scene-pad">
        <main className="hk-manual">
          <section className="hk-skill card">
            <div className="label-mono">skill</div>
            <h2>仍需手动调用</h2>
          </section>
          <section className="hk-trigger card">
            <div className="label-mono">hook</div>
            <h1>事件发生时，自动执行动作。</h1>
          </section>
        </main>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="hk-scene scene-pad">
        <main className="hk-triggers">
          {triggers.map((item, index) => (
            <section className="hk-trigger-item card" key={item}>
              <span className="label-mono">trigger 0{index + 1}</span>
              <strong>{item}</strong>
              <i />
            </section>
          ))}
        </main>
      </div>
    );
  }

  return (
    <div className="hk-scene scene-pad">
      <main className="hk-timeline">
        <div className="kicker">real work is event stream</div>
        <h2>每个时刻，都是 AI 入口。</h2>
        <div className="hk-line">
          {events.map((event) => <span key={event}>{event}</span>)}
        </div>
      </main>
    </div>
  );
}
