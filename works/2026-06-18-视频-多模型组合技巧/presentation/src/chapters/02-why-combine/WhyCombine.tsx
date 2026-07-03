import type { CSSProperties } from "react";

/**
 * WhyCombine chapter — 4 steps
 *   step 0: Four model cards with strengths & weaknesses (radar-like labels)
 *   step 1: Barrel effect — shortest stave determines water level
 *   step 2: Combination — four models form a complete puzzle
 *   step 3: Golden quote — "上限取决于团队里最强的，不是最弱的"
 */

export function WhyCombine({ step }: { step: number }) {
  if (step === 0) return <ModelCards />;
  if (step === 1) return <BarrelEffect />;
  if (step === 2) return <PuzzleCombine />;
  if (step === 3) return <GoldenQuote />;
  return null;
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 0 — Four Model Cards
 * Each card shows model name, strongest skill, and weakness
 * ═══════════════════════════════════════════════════════════════════ */

const MODELS = [
  {
    name: "GPT-4o",
    nameEn: "GPT-4o",
    strength: "代码强",
    strengthEn: "CODE",
    weakness: "长文本理解弱",
    weaknessEn: "LONG CONTEXT",
    delay: "0s",
  },
  {
    name: "Claude",
    nameEn: "Claude",
    strength: "文章最自然",
    strengthEn: "WRITING",
    weakness: "推理数学弱",
    weaknessEn: "REASONING",
    delay: "0.15s",
  },
  {
    name: "DeepSeek",
    nameEn: "DeepSeek",
    strength: "推理猛",
    strengthEn: "REASONING",
    weakness: "画不了图",
    weaknessEn: "NO IMAGES",
    delay: "0.3s",
  },
  {
    name: "Gemini",
    nameEn: "Gemini",
    strength: "搜索强",
    strengthEn: "SEARCH",
    weakness: "创意写作一般",
    weaknessEn: "CREATIVE",
    delay: "0.45s",
  },
];

function ModelCards() {
  return (
    <div className="wc-cards">
      {/* Kicker */}
      <div className="wc-cards-kicker">
        <span className="wc-cards-kicker-line" />
        <span className="wc-cards-kicker-text">NO MODEL IS OMNIPOTENT</span>
      </div>

      {/* Section title */}
      <h2 className="wc-cards-title">
        没有一个模型是全能的
      </h2>

      {/* Four model cards */}
      <div className="wc-cards-grid">
        {MODELS.map((m) => (
          <div
            key={m.nameEn}
            className="wc-model-card"
            style={{ "--wc-card-delay": m.delay } as CSSProperties}
          >
            {/* Model name */}
            <div className="wc-model-card-name">{m.nameEn}</div>

            {/* Hairline separator */}
            <div className="wc-model-card-rule" />

            {/* Strength */}
            <div className="wc-model-card-row wc-model-card-row--strength">
              <span className="wc-model-card-label">最强项</span>
              <span className="wc-model-card-value">{m.strength}</span>
            </div>

            {/* Weakness */}
            <div className="wc-model-card-row wc-model-card-row--weakness">
              <span className="wc-model-card-label">短板</span>
              <span className="wc-model-card-value">{m.weakness}</span>
            </div>

            {/* Mini SVG bar chart showing capability profile */}
            <div className="wc-model-card-chart">
              <CapabilityBars modelIndex={MODELS.indexOf(m)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Mini capability bars (SVG) ─── */
function CapabilityBars({ modelIndex }: { modelIndex: number }) {
  // 4 dimensions: Code, Writing, Reasoning, Search
  // Each model has different strengths
  const profiles = [
    [0.9, 0.6, 0.65, 0.5], // GPT-4o: code strong
    [0.65, 0.9, 0.55, 0.5], // Claude: writing strong
    [0.6, 0.55, 0.9, 0.45], // DeepSeek: reasoning strong
    [0.55, 0.5, 0.5, 0.9], // Gemini: search strong
  ];
  const dims = ["CODE", "WRITE", "REASON", "SEARCH"];
  const values = profiles[modelIndex] ?? profiles[0];

  return (
    <svg viewBox="0 0 160 80" fill="none" className="wc-cap-bars">
      {values.map((v, i) => (
        <g key={i}>
          <rect
            x={i * 40 + 4}
            y={60 - v * 50}
            width="28"
            height={v * 50}
            fill={v >= 0.85 ? "var(--accent)" : "var(--surface-3)"}
            opacity={v >= 0.85 ? 1 : 0.5}
            className="wc-cap-bar"
            style={{ animationDelay: `${0.6 + i * 0.08}s` }}
          />
          <text
            x={i * 40 + 18}
            y={74}
            textAnchor="middle"
            fontSize="7"
            fontFamily="var(--font-mono)"
            fill="var(--text-faint)"
            letterSpacing="0.05em"
          >
            {dims[i]}
          </text>
        </g>
      ))}
      {/* Baseline */}
      <line x1="0" y1="60" x2="160" y2="60" stroke="var(--rule)" strokeWidth="1" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 1 — Barrel Effect
 * Wooden barrel SVG, shortest stave determines water level
 * ═══════════════════════════════════════════════════════════════════ */
function BarrelEffect() {
  // Stave heights — the shortest one is the "weakness" dimension
  const staves = [
    { label: "代码", height: 0.95, isShort: false },
    { label: "写作", height: 0.7, isShort: false },
    { label: "推理", height: 0.45, isShort: true }, // shortest
    { label: "搜索", height: 0.8, isShort: false },
  ];

  return (
    <div className="wc-barrel">
      {/* Kicker */}
      <div className="wc-barrel-kicker">
        <span className="wc-barrel-kicker-line" />
        <span className="wc-barrel-kicker-text">木桶效应 · BARREL EFFECT</span>
      </div>

      {/* Main visual: barrel SVG */}
      <div className="wc-barrel-visual">
        <svg viewBox="0 0 600 420" fill="none" className="wc-barrel-svg">
          {/* Water level line (determined by shortest stave) */}
          <line
            x1="120" y1="240" x2="480" y2="240"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray="6 4"
            opacity="0.6"
            className="wc-barrel-waterline"
          />
          {/* Water fill */}
          <rect
            x="140" y="240"
            width="320" height="120"
            fill="var(--accent-soft)"
            className="wc-barrel-water"
          />
          {/* Water label */}
          <text
            x="300" y="305"
            textAnchor="middle"
            fontSize="16"
            fontFamily="var(--font-mono)"
            fill="var(--accent)"
            letterSpacing="0.1em"
            opacity="0.7"
          >
            水位上限
          </text>

          {/* Barrel staves (vertical planks) */}
          {staves.map((s, i) => {
            const x = 140 + i * 80;
            const staveTop = 360 - s.height * 260;
            const isHighlight = s.isShort;
            return (
              <g key={i} className="wc-barrel-stave-group" style={{ animationDelay: `${i * 0.1}s` }}>
                {/* Stave */}
                <rect
                  x={x}
                  y={staveTop}
                  width="70"
                  height={360 - staveTop}
                  fill={isHighlight ? "var(--surface-3)" : "var(--surface-2)"}
                  stroke={isHighlight ? "var(--accent)" : "var(--rule)"}
                  strokeWidth="1"
                />
                {/* Stave label at top */}
                <text
                  x={x + 35}
                  y={staveTop - 12}
                  textAnchor="middle"
                  fontSize="14"
                  fontFamily="var(--font-display-cn)"
                  fill={isHighlight ? "var(--accent)" : "var(--text-mute)"}
                  fontWeight={isHighlight ? 500 : 300}
                >
                  {s.label}
                </text>
                {/* Short stave marker */}
                {isHighlight && (
                  <>
                    <line
                      x1={x - 8} y1={staveTop} x2={x + 78} y2={staveTop}
                      stroke="var(--accent)" strokeWidth="2"
                    />
                    <text
                      x={x + 35}
                      y={staveTop - 30}
                      textAnchor="middle"
                      fontSize="11"
                      fontFamily="var(--font-mono)"
                      fill="var(--accent)"
                      letterSpacing="0.1em"
                    >
                      最短板
                    </text>
                  </>
                )}
              </g>
            );
          })}

          {/* Barrel bottom */}
          <line x1="140" y1="360" x2="460" y2="360" stroke="var(--text)" strokeWidth="2" />
          {/* Barrel top opening (ellipse suggestion) */}
          <ellipse
            cx="300" cy="100"
            rx="170" ry="14"
            stroke="var(--rule)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />

          {/* Down arrow from "最短板" to water level */}
          <path
            d="M 300 155 L 300 235"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            className="wc-barrel-arrow"
          />
          <path
            d="M 294 228 L 300 240 L 306 228"
            stroke="var(--accent)"
            strokeWidth="1.5"
            fill="none"
            className="wc-barrel-arrow-head"
          />
        </svg>
      </div>

      {/* Caption */}
      <p className="wc-barrel-caption">
        单模型使用 — 你被卡在最弱的那个维度
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 2 — Puzzle Combine
 * Four models as puzzle pieces completing each other
 * ═══════════════════════════════════════════════════════════════════ */
function PuzzleCombine() {
  return (
    <div className="wc-puzzle">
      {/* Kicker */}
      <div className="wc-puzzle-kicker">
        <span className="wc-puzzle-kicker-line" />
        <span className="wc-puzzle-kicker-text">组合 · COMBINE</span>
      </div>

      {/* Main puzzle visual */}
      <div className="wc-puzzle-visual">
        <svg viewBox="0 0 700 460" fill="none" className="wc-puzzle-svg">
          {/* ─── Four puzzle pieces in a 2×2 grid ─── */}
          {/* Each piece covers the gap left by its neighbor */}

          {/* Piece 1: GPT-4o — top left — covers CODE */}
          <g className="wc-puzzle-piece wc-puzzle-piece--1">
            <path
              d="M 80 80
                 L 300 80
                 L 300 150
                 Q 320 150 320 170
                 Q 320 190 300 190
                 L 300 240
                 L 170 240
                 Q 170 220 150 220
                 Q 130 220 130 240
                 L 80 240
                 Z"
              fill="var(--accent-soft)"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            <text x="180" y="135" textAnchor="middle" fontSize="22" fontFamily="var(--font-display-en)" fill="var(--accent)" fontWeight="300" letterSpacing="-0.02em">
              GPT-4o
            </text>
            <text x="180" y="165" textAnchor="middle" fontSize="13" fontFamily="var(--font-mono)" fill="var(--accent)" letterSpacing="0.1em" opacity="0.7">
              CODE
            </text>
            <text x="180" y="200" textAnchor="middle" fontSize="14" fontFamily="var(--font-display-cn)" fill="var(--text-2)" fontWeight="300">
              代码补位
            </text>
          </g>

          {/* Piece 2: Claude — top right — covers WRITING */}
          <g className="wc-puzzle-piece wc-puzzle-piece--2">
            <path
              d="M 340 80
                 L 560 80
                 L 560 240
                 L 510 240
                 Q 510 220 490 220
                 Q 470 220 470 240
                 L 340 240
                 L 340 190
                 Q 360 190 360 170
                 Q 360 150 340 150
                 Z"
              fill="var(--accent-soft)"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            <text x="440" y="135" textAnchor="middle" fontSize="22" fontFamily="var(--font-display-en)" fill="var(--accent)" fontWeight="300" letterSpacing="-0.02em">
              Claude
            </text>
            <text x="440" y="165" textAnchor="middle" fontSize="13" fontFamily="var(--font-mono)" fill="var(--accent)" letterSpacing="0.1em" opacity="0.7">
              WRITING
            </text>
            <text x="440" y="200" textAnchor="middle" fontSize="14" fontFamily="var(--font-display-cn)" fill="var(--text-2)" fontWeight="300">
              写作补位
            </text>
          </g>

          {/* Piece 3: DeepSeek — bottom left — covers REASONING */}
          <g className="wc-puzzle-piece wc-puzzle-piece--3">
            <path
              d="M 80 260
                 L 130 260
                 Q 130 280 150 280
                 Q 170 280 170 260
                 L 300 260
                 L 300 310
                 Q 320 310 320 330
                 Q 320 350 300 350
                 L 300 420
                 L 80 420
                 Z"
              fill="var(--accent-soft)"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            <text x="180" y="335" textAnchor="middle" fontSize="22" fontFamily="var(--font-display-en)" fill="var(--accent)" fontWeight="300" letterSpacing="-0.02em">
              DeepSeek
            </text>
            <text x="180" y="365" textAnchor="middle" fontSize="13" fontFamily="var(--font-mono)" fill="var(--accent)" letterSpacing="0.1em" opacity="0.7">
              REASONING
            </text>
            <text x="180" y="395" textAnchor="middle" fontSize="14" fontFamily="var(--font-display-cn)" fill="var(--text-2)" fontWeight="300">
              推理补位
            </text>
          </g>

          {/* Piece 4: Gemini — bottom right — covers SEARCH */}
          <g className="wc-puzzle-piece wc-puzzle-piece--4">
            <path
              d="M 340 260
                 L 470 260
                 Q 470 280 490 280
                 Q 510 280 510 260
                 L 560 260
                 L 560 420
                 L 340 420
                 L 340 350
                 Q 360 350 360 330
                 Q 360 310 340 310
                 Z"
              fill="var(--accent-soft)"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            <text x="440" y="335" textAnchor="middle" fontSize="22" fontFamily="var(--font-display-en)" fill="var(--accent)" fontWeight="300" letterSpacing="-0.02em">
              Gemini
            </text>
            <text x="440" y="365" textAnchor="middle" fontSize="13" fontFamily="var(--font-mono)" fill="var(--accent)" letterSpacing="0.1em" opacity="0.7">
              SEARCH
            </text>
            <text x="440" y="395" textAnchor="middle" fontSize="14" fontFamily="var(--font-display-cn)" fill="var(--text-2)" fontWeight="300">
              搜索补位
            </text>
          </g>

          {/* Center circle — "COMPLETE" */}
          <circle
            cx="320" cy="250"
            r="26"
            fill="var(--accent)"
            className="wc-puzzle-center"
          />
          <text
            x="320" y="256"
            textAnchor="middle"
            fontSize="12"
            fontFamily="var(--font-mono)"
            fill="var(--surface)"
            fontWeight="600"
            letterSpacing="0.08em"
          >
            FULL
          </text>
        </svg>
      </div>

      {/* Caption */}
      <p className="wc-puzzle-caption">
        每个维度都用最擅长的模型 — 短板被补上了
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 3 — Golden Quote
 * Big typographic statement
 * ═══════════════════════════════════════════════════════════════════ */
function GoldenQuote() {
  return (
    <div className="wc-quote">
      {/* Accent line top */}
      <div className="wc-quote-line wc-quote-line--top" />

      {/* Quote mark */}
      <div className="wc-quote-mark">
        <svg viewBox="0 0 60 48" fill="none">
          <path
            d="M 8 40 L 8 20 Q 8 8 20 8 L 24 8 L 24 16 L 20 16 Q 16 16 16 20 L 16 24 L 24 24 L 24 40 Z"
            fill="var(--accent)"
            opacity="0.15"
          />
          <path
            d="M 32 40 L 32 20 Q 32 8 44 8 L 48 8 L 48 16 L 44 16 Q 40 16 40 20 L 40 24 L 48 24 L 48 40 Z"
            fill="var(--accent)"
            opacity="0.15"
          />
        </svg>
      </div>

      {/* Main quote — two lines */}
      <div className="wc-quote-body">
        <p className="wc-quote-line-text wc-quote-line-text--1">
          上限取决于
        </p>
        <p className="wc-quote-line-text wc-quote-line-text--2">
          <span className="wc-quote-highlight">团队里最强的</span>
        </p>
        <p className="wc-quote-line-text wc-quote-line-text--3">
          不是最弱的
        </p>
      </div>

      {/* English translation */}
      <p className="wc-quote-en">
        The ceiling is set by your strongest, not your weakest.
      </p>

      {/* Accent line bottom */}
      <div className="wc-quote-line wc-quote-line--bottom" />
    </div>
  );
}
