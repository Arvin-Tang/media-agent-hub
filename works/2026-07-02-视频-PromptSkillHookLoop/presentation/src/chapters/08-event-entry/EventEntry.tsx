import type { ChapterStepProps } from "../../registry/types";
import "./EventEntry.css";

const hookCards = ["任务完成", "新文件出现", "上下文快满"];
const workEvents = ["文件出现", "会议结束", "代码提交", "用户反馈", "系统报错", "权限卡住"];
const manualItems = ["发现", "复制", "提醒"];
const skillItems = ["识别", "归档", "通知"];

export default function EventEntry({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="ee-scene scene-pad">
        <main className="ee-triggers">
          <section className="ee-title">
            <div className="kicker">Hook examples</div>
            <h1>事件触发器</h1>
          </section>
          <section className="ee-card-row">
            {hookCards.map((item, index) => (
              <article className="ee-trigger card" key={item}>
                <span className="label-mono">0{index + 1}</span>
                <strong>{item}</strong>
                <i aria-hidden />
              </article>
            ))}
          </section>
        </main>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="ee-scene scene-pad">
        <main className="ee-stream">
          <div className="kicker">real work</div>
          <h1>真实工作不是连续聊天。</h1>
          <div className="ee-event-line" aria-hidden>
            {workEvents.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="ee-scene scene-pad">
      <main className="ee-compare">
        <section className="ee-column card">
          <div className="label-mono">manual</div>
          <h2>手动发现</h2>
          {manualItems.map((item) => (
            <strong key={item}>{item}</strong>
          ))}
        </section>
        <div className="ee-switch" aria-hidden>
          <span />
          <span />
        </div>
        <section className="ee-column ee-auto card">
          <div className="label-mono">auto skill</div>
          <h2>自动触发</h2>
          {skillItems.map((item) => (
            <strong key={item}>{item}</strong>
          ))}
        </section>
      </main>
    </div>
  );
}
