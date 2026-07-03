/**
 * RealCase chapter — 4 steps
 *   step 0: 视频制作流水线总览 — 六步骤横向排列，每步标注模型名称和任务名
 *   step 1: 放大前两步 — Claude选题+大纲 / Claude口播稿，标「B站风格prompt」
 *   step 2: 放大中间三步 — GPT-4o校对 / MJ配图 / 代码分工(GPT-4o逻辑+Claude UI)
 *   step 3: 放大最后一步 — DeepSeek终审 + 总结「每个模型在最舒服的位置干活」
 *
 * CSS prefix: .rc-
 * Theme: swiss-ikb (Klein Blue, 200 weight, hairline grid, direct rectangles)
 */

// ─── Pipeline data ───
const PIPELINE = [
  { step: "01", model: "Claude",    task: "选题 + 大纲",  en: "Topic & Outline",    reason: "结构化思维最强" },
  { step: "02", model: "Claude",    task: "口播稿",       en: "Script",             reason: "中文写作最自然" },
  { step: "03", model: "GPT-4o",    task: "技术校对",     en: "Tech Review",        reason: "查名词最稳" },
  { step: "04", model: "Midjourney", task: "配图",        en: "Illustration",       reason: "艺术感强" },
  { step: "05", model: "GPT-4o / Claude", task: "代码",   en: "Code",               reason: "逻辑+UI分工" },
  { step: "06", model: "DeepSeek",  task: "终审",         en: "Final Review",       reason: "R1 推理最强" },
];

export function RealCase({ step }: { step: number }) {
  return (
    <div className="rc-stage">
      {step === 0 && <PipelineOverview />}
      {step === 1 && <ZoomFirstTwo />}
      {step === 2 && <ZoomMiddleThree />}
      {step === 3 && <ZoomFinal />}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 0 — 视频制作流水线总览
 *  六步骤横向排列，每步标注模型名称和任务名
 *  Animation: nodes appear left-to-right, connecting lines draw between them
 * ═══════════════════════════════════════════════════════════════════ */
function PipelineOverview() {
  return (
    <div className="rc-overview">
      <div className="rc-overview-header">
        <span className="rc-kicker">04 / Real Case · 实战</span>
        <h2 className="rc-title">用组合模式做一期视频</h2>
      </div>

      <div className="rc-pipeline">
        {PIPELINE.map((node, i) => (
          <div className="rc-pipe-node-wrap" key={i}>
            {i > 0 && (
              <svg className="rc-pipe-arrow" viewBox="0 0 30 12" fill="none">
                <line
                  x1="0" y1="6" x2="24" y2="6"
                  stroke="var(--accent)"
                  strokeWidth="1"
                  className="rc-pipe-arrow-line"
                  style={{ animationDelay: `${0.5 + i * 0.18}s` }}
                />
                <path
                  d="M24 6 L18 2 M24 6 L18 10"
                  stroke="var(--accent)"
                  strokeWidth="1"
                  className="rc-pipe-arrow-head"
                  style={{ animationDelay: `${0.6 + i * 0.18}s` }}
                />
              </svg>
            )}
            <div
              className="rc-pipe-node"
              style={{ animationDelay: `${0.3 + i * 0.18}s` }}
            >
              <div className="rc-pipe-node-num">{node.step}</div>
              <div className="rc-pipe-node-model">{node.model}</div>
              <div className="rc-pipe-node-task">{node.task}</div>
              <div className="rc-pipe-node-en">{node.en}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="rc-overview-footer" style={{ animationDelay: "1.6s" }}>
        <div className="rc-overview-stat">
          <span className="rc-overview-stat-num">6</span>
          <span className="rc-overview-stat-label">步 · 4 个模型</span>
        </div>
        <div className="rc-overview-divider" />
        <span className="rc-overview-tag">Pipeline · 流水线模式</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 1 — 放大前两步：Claude选题+大纲 / Claude口播稿
 *  Animation: two large cards slide in, "B站风格prompt" tag appears
 * ═══════════════════════════════════════════════════════════════════ */
function ZoomFirstTwo() {
  return (
    <div className="rc-zoom-first">
      <div className="rc-zoom-header">
        <span className="rc-kicker">Step 01 — 02 · Claude</span>
        <h2 className="rc-title">选题 · 大纲 · 口播稿</h2>
      </div>

      <div className="rc-zoom-first-body">
        {/* Card 1: 选题 + 大纲 */}
        <div className="rc-zoom-card rc-zoom-card--1" style={{ animationDelay: "0.3s" }}>
          <div className="rc-zoom-card-head">
            <span className="rc-zoom-card-num">01</span>
            <span className="rc-zoom-card-model">Claude</span>
          </div>
          <div className="rc-zoom-card-body">
            <h3 className="rc-zoom-card-task">选题 + 大纲</h3>
            <div className="rc-zoom-card-reason">结构化思维最强</div>
            <div className="rc-zoom-card-detail">
              <div className="rc-zoom-card-detail-row">
                <span className="rc-zoom-card-detail-label">输入</span>
                <span className="rc-zoom-card-detail-val">粗略想法</span>
              </div>
              <div className="rc-zoom-card-detail-row">
                <span className="rc-zoom-card-detail-label">输出</span>
                <span className="rc-zoom-card-detail-val">章节结构</span>
              </div>
            </div>
          </div>
        </div>

        {/* Connector */}
        <svg className="rc-zoom-connector" viewBox="0 0 60 20" fill="none">
          <line
            x1="0" y1="10" x2="50" y2="10"
            stroke="var(--accent)"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="rc-zoom-connector-line"
          />
          <path d="M50 10 L44 6 M50 10 L44 14" stroke="var(--accent)" strokeWidth="1" />
        </svg>

        {/* Card 2: 口播稿 */}
        <div className="rc-zoom-card rc-zoom-card--2" style={{ animationDelay: "0.7s" }}>
          <div className="rc-zoom-card-head">
            <span className="rc-zoom-card-num">02</span>
            <span className="rc-zoom-card-model">Claude</span>
          </div>
          <div className="rc-zoom-card-body">
            <h3 className="rc-zoom-card-task">口播稿</h3>
            <div className="rc-zoom-card-reason">中文写作最自然</div>
            <div className="rc-zoom-card-prompt" style={{ animationDelay: "1.1s" }}>
              <span className="rc-zoom-card-prompt-label">PROMPT</span>
              <span className="rc-zoom-card-prompt-text">口语化 · 短句 · B站风格</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 2 — 放大中间三步：GPT-4o校对 / MJ配图 / 代码分工
 *  Animation: three cards appear sequentially, code split shown
 * ═══════════════════════════════════════════════════════════════════ */
function ZoomMiddleThree() {
  return (
    <div className="rc-zoom-mid">
      <div className="rc-zoom-header">
        <span className="rc-kicker">Step 03 — 05 · 三模型协作</span>
        <h2 className="rc-title">校对 · 配图 · 代码</h2>
      </div>

      <div className="rc-zoom-mid-body">
        {/* Card 3: GPT-4o 技术校对 */}
        <div className="rc-mid-card rc-mid-card--review" style={{ animationDelay: "0.3s" }}>
          <div className="rc-mid-card-head">
            <span className="rc-mid-card-num">03</span>
          </div>
          <div className="rc-mid-card-model">GPT-4o</div>
          <div className="rc-mid-card-task">技术校对</div>
          <div className="rc-mid-card-reason">查技术名词比 Claude 稳</div>
          <div className="rc-mid-card-visual">
            <svg viewBox="0 0 120 60" fill="none" className="rc-mid-check-svg">
              {/* Document outline */}
              <rect x="10" y="8" width="50" height="44" stroke="var(--text-mute)" strokeWidth="1" fill="none" />
              <line x1="18" y1="18" x2="52" y2="18" stroke="var(--text-mute)" strokeWidth="0.8" />
              <line x1="18" y1="26" x2="52" y2="26" stroke="var(--text-mute)" strokeWidth="0.8" />
              <line x1="18" y1="34" x2="40" y2="34" stroke="var(--text-mute)" strokeWidth="0.8" />
              {/* Checkmark */}
              <path
                d="M75 30 L 88 43 L 110 20"
                stroke="var(--accent)"
                strokeWidth="2"
                fill="none"
                className="rc-mid-check-path"
              />
            </svg>
          </div>
        </div>

        {/* Card 4: Midjourney 配图 */}
        <div className="rc-mid-card rc-mid-card--image" style={{ animationDelay: "0.6s" }}>
          <div className="rc-mid-card-head">
            <span className="rc-mid-card-num">04</span>
          </div>
          <div className="rc-mid-card-model">Midjourney</div>
          <div className="rc-mid-card-task">配图</div>
          <div className="rc-mid-card-reason">艺术感强</div>
          <div className="rc-mid-card-visual">
            <svg viewBox="0 0 120 60" fill="none" className="rc-mid-image-svg">
              {/* Image frame */}
              <rect x="15" y="8" width="90" height="44" stroke="var(--accent)" strokeWidth="1" fill="var(--accent-soft)" />
              {/* Mountain + sun composition */}
              <path d="M15 52 L 40 28 L 55 40 L 75 20 L 105 52 Z" fill="var(--accent)" opacity="0.15" />
              <circle cx="85" cy="20" r="6" fill="var(--accent)" opacity="0.25" />
            </svg>
          </div>
        </div>

        {/* Card 5: 代码分工 */}
        <div className="rc-mid-card rc-mid-card--code" style={{ animationDelay: "0.9s" }}>
          <div className="rc-mid-card-head">
            <span className="rc-mid-card-num">05</span>
          </div>
          <div className="rc-mid-card-model">GPT-4o + Claude</div>
          <div className="rc-mid-card-task">代码</div>
          <div className="rc-mid-card-reason">各写最擅长的部分</div>
          <div className="rc-mid-code-split">
            <div className="rc-mid-code-half" style={{ animationDelay: "1.2s" }}>
              <span className="rc-mid-code-label">GPT-4o</span>
              <span className="rc-mid-code-tag">逻辑 / 算法</span>
              <div className="rc-mid-code-bar rc-mid-code-bar--logic" />
            </div>
            <div className="rc-mid-code-divider" />
            <div className="rc-mid-code-half" style={{ animationDelay: "1.4s" }}>
              <span className="rc-mid-code-label rc-mid-code-label--accent">Claude</span>
              <span className="rc-mid-code-tag">UI / 样式</span>
              <div className="rc-mid-code-bar rc-mid-code-bar--ui" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 3 — 放大最后一步：DeepSeek终审 + 总结
 *  Animation: DeepSeek review node appears, then summary text scales in
 * ═══════════════════════════════════════════════════════════════════ */
function ZoomFinal() {
  return (
    <div className="rc-zoom-final">
      <div className="rc-zoom-header">
        <span className="rc-kicker">Step 06 · DeepSeek R1</span>
        <h2 className="rc-title">终审</h2>
      </div>

      <div className="rc-final-body">
        {/* DeepSeek review visual */}
        <div className="rc-final-review" style={{ animationDelay: "0.3s" }}>
          <div className="rc-final-review-node">
            <div className="rc-final-review-model">DeepSeek</div>
            <div className="rc-final-review-tag">R1 推理</div>
          </div>

          <svg className="rc-final-review-arrows" viewBox="0 0 200 100" fill="none">
            {/* Incoming arrows from previous steps */}
            <line x1="20" y1="20" x2="90" y2="50" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 3" className="rc-final-arrow" style={{ animationDelay: "0.6s" }} />
            <line x1="20" y1="80" x2="90" y2="50" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 3" className="rc-final-arrow" style={{ animationDelay: "0.7s" }} />
            {/* Output arrow */}
            <line x1="110" y1="50" x2="180" y2="50" stroke="var(--accent)" strokeWidth="1.5" className="rc-final-arrow" style={{ animationDelay: "0.9s" }} />
            <path d="M180 50 L174 46 M180 50 L174 54" stroke="var(--accent)" strokeWidth="1.5" className="rc-final-arrow" style={{ animationDelay: "1.0s" }} />
            <text x="145" y="42" textAnchor="middle" fontSize="11" fill="var(--text-mute)" fontFamily="var(--font-mono)">挑毛病</text>
          </svg>

          <div className="rc-final-review-output" style={{ animationDelay: "1.1s" }}>
            <span className="rc-final-review-output-text">发现前两个模型忽略的问题</span>
          </div>
        </div>

        {/* Summary quote */}
        <div className="rc-final-summary" style={{ animationDelay: "1.4s" }}>
          <div className="rc-final-summary-line" />
          <p className="rc-final-summary-text">
            每个模型都在<br />最舒服的位置干活
          </p>
          <div className="rc-final-summary-line" />
        </div>

        {/* Efficiency tag */}
        <div className="rc-final-efficiency" style={{ animationDelay: "1.8s" }}>
          <span className="rc-final-efficiency-text">比单用模型效率高太多</span>
        </div>
      </div>
    </div>
  );
}
