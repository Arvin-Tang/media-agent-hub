import type { ChapterStepProps } from "../../registry/types";
import "./FileSystem.css";

const layers = ["OpenSpec\n做什么", "Superpowers\n怎么做", "Comet\n什么时候做什么"];
const files = ["需求", "状态", "验证证据", "下一步动作"];

export default function FileSystem({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="fs-scene scene-pad">
        <main className="fs-stack">
          <section className="fs-copy">
            <div className="kicker">AI coding stack</div>
            <h1>三层工程系统</h1>
          </section>
          <section className="fs-layers">
            {layers.map((item, index) => {
              const [name, role] = item.split("\n");
              return (
                <article className="fs-layer card" key={name}>
                  <span className="label-mono">layer 0{index + 1}</span>
                  <strong>{name}</strong>
                  <em>{role}</em>
                </article>
              );
            })}
          </section>
        </main>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="fs-scene scene-pad">
        <main className="fs-compare">
          <section className="fs-chat card">
            <div className="label-mono">chat log</div>
            <h2>聊天记录</h2>
            <p>不是工程系统</p>
          </section>
          <section className="fs-files card">
            <div className="label-mono">file system</div>
            <h2>文件系统才是</h2>
            <div className="fs-file-grid">
              {files.map((item) => <span key={item}>{item}</span>)}
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="fs-scene scene-pad">
      <main className="fs-ending">
        <div className="fs-equation">
          <span>Hook</span>
          <i />
          <span>Loop</span>
        </div>
        <h1>AI Native 是工作流被重新设计。</h1>
      </main>
    </div>
  );
}
