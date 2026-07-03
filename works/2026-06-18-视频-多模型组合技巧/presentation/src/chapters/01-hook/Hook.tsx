import type { CSSProperties } from "react";

/**
 * Hook chapter — 3 steps
 *   step 0: Four model names arranged, "你手机里有几个 AI？"
 *   step 1: Same question flies to all four models, "谁先回用谁？" + big X overlay
 *   step 2: "最浪费的用法" big text, transition "今天聊：多模型组合"
 *
 * Style: Swiss International, IKB blue, extra-light weight 200, 1px hairline grid
 */

// ─── Four models ───
const MODELS = [
  { name: "ChatGPT",  short: "GPT",     color: "var(--text)" },
  { name: "Claude",   short: "Claude",  color: "var(--text)" },
  { name: "DeepSeek", short: "DeepSeek", color: "var(--text)" },
  { name: "Gemini",   short: "Gemini",  color: "var(--text)" },
];

// ─── Question text for step 1 ───
const QUESTION_TEXT = "帮我写一封情书";

export function Hook({ step }: { step: number }) {
  if (step === 0) return <ModelGrid />;
  if (step === 1) return <BlastCross />;
  if (step === 2) return <WasteTransition />;
  return null;
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 0 — Four model names arranged on a grid
 * "你手机里有几个 AI？"
 * ═══════════════════════════════════════════════════════════════════ */
function ModelGrid() {
  return (
    <div className="hk-grid">
      {/* Kicker */}
      <div className="hk-grid-kicker">
        <span className="hk-grid-kicker-line" />
        <span className="hk-grid-kicker-text" style={{ fontFamily: "var(--font-mono)" }}>
          2026 · 多模型时代
        </span>
      </div>

      {/* Title */}
      <h1 className="hk-grid-title" style={{ fontFamily: "var(--font-display-cn)" }}>
        你手机里有几个 AI？
      </h1>

      {/* Four model cards */}
      <div className="hk-grid-cards">
        {MODELS.map((m, i) => (
          <div
            key={i}
            className="hk-grid-card"
            style={{
              animationDelay: `${0.3 + i * 0.15}s`,
            } as CSSProperties}
          >
            <div className="hk-grid-card-num" style={{ fontFamily: "var(--font-mono)" }}>
              0{i + 1}
            </div>
            <div className="hk-grid-card-name" style={{ fontFamily: "var(--font-display-en)" }}>
              {m.name}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom hairline + count */}
      <div className="hk-grid-footer">
        <span className="hk-grid-footer-line" />
        <span className="hk-grid-footer-count" style={{ fontFamily: "var(--font-display-en)" }}>
          ≥ 4
        </span>
        <span className="hk-grid-footer-label" style={{ fontFamily: "var(--font-display-cn)" }}>
          个模型，同时装着
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 1 — Same question flies to all four models
 * "谁先回用谁？" + big X overlay
 * ═══════════════════════════════════════════════════════════════════ */
function BlastCross() {
  return (
    <div className="hk-blast">
      {/* Title at top */}
      <h2 className="hk-blast-title" style={{ fontFamily: "var(--font-display-cn)" }}>
        谁先回用谁？
      </h2>

      {/* Central SVG: question → four models */}
      <div className="hk-blast-scene">
        <svg className="hk-blast-svg" viewBox="0 0 1200 600" fill="none">
          {/* Central question bubble */}
          <g className="hk-blast-question-grp">
            <rect
              x="500" y="260" width="200" height="80"
              stroke="var(--accent)"
              strokeWidth="1"
              fill="var(--accent-soft)"
            />
            <text
              x="600" y="305"
              textAnchor="middle"
              fontSize="22"
              fill="var(--accent)"
              fontFamily="var(--font-display-cn)"
              fontWeight="300"
            >
              {QUESTION_TEXT}
            </text>
          </g>

          {/* Four lines from center to corners */}
          {[
            { x: 200, y: 120, label: "ChatGPT", delay: 0 },
            { x: 1000, y: 120, label: "Claude", delay: 0.15 },
            { x: 200, y: 480, label: "DeepSeek", delay: 0.3 },
            { x: 1000, y: 480, label: "Gemini", delay: 0.45 },
          ].map((target, i) => (
            <g key={i}>
              {/* Dashed line from center to target */}
              <line
                x1="600" y1="300"
                x2={target.x} y2={target.y}
                stroke="var(--text-mute)"
                strokeWidth="1"
                strokeDasharray="6 4"
                className="hk-blast-line"
                style={{ animationDelay: `${target.delay}s` } as CSSProperties}
              />
              {/* Model label box */}
              <g
                className="hk-blast-model-tag"
                style={{ animationDelay: `${target.delay + 0.2}s` } as CSSProperties}
              >
                <rect
                  x={target.x - 60} y={target.y - 22}
                  width="120" height="44"
                  stroke="var(--text)"
                  strokeWidth="1"
                  fill="var(--surface)"
                />
                <text
                  x={target.x} y={target.y + 5}
                  textAnchor="middle"
                  fontSize="18"
                  fill="var(--text)"
                  fontFamily="var(--font-display-en)"
                  fontWeight="300"
                >
                  {target.label}
                </text>
              </g>
            </g>
          ))}

          {/* Big X overlay — drawn with two strokes */}
          <line
            x1="150" y1="80" x2="1050" y2="520"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            className="hk-blast-x1"
          />
          <line
            x1="1050" y1="80" x2="150" y2="520"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            className="hk-blast-x2"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <p className="hk-blast-sub" style={{ fontFamily: "var(--font-display-cn)" }}>
        同一个问题，群发所有模型
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 2 — "最浪费的用法" + transition
 * ═══════════════════════════════════════════════════════════════════ */
function WasteTransition() {
  return (
    <div className="hk-waste">
      {/* "最浪费的用法" hero text */}
      <div className="hk-waste-hero">
        <span className="hk-waste-hero-label" style={{ fontFamily: "var(--font-mono)" }}>
          THE WORST WAY
        </span>
        <h1 className="hk-waste-hero-text" style={{ fontFamily: "var(--font-display-cn)" }}>
          最浪费的用法
        </h1>
      </div>

      {/* Transition to topic */}
      <div className="hk-waste-transition">
        <div className="hk-waste-hairline" />
        <div className="hk-waste-topic">
          <span className="hk-waste-topic-kicker" style={{ fontFamily: "var(--font-mono)" }}>
            TODAY · 今日话题
          </span>
          <h2 className="hk-waste-topic-title" style={{ fontFamily: "var(--font-display-cn)" }}>
            多模型组合
          </h2>
          <span className="hk-waste-topic-sub" style={{ fontFamily: "var(--font-display-cn)" }}>
            把多个 AI 当成一个团队来用
          </span>
        </div>
        <div className="hk-waste-hairline" />
      </div>
    </div>
  );
}
