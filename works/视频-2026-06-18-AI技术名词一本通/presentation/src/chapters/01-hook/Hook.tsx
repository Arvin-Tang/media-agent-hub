import type { CSSProperties } from "react";

/**
 * Hook chapter — 6 steps
 *   step 0: AI abbreviation rain (information overload anxiety)
 *   step 1: Screen clears, big "别慌" scales in with glow
 *   step 2: LLM brain SVG + model name tags + "genius intern" visual
 *   step 3: Weakness 1 — knowledge cutoff date (calendar with red strike)
 *   step 4: Weakness 2 — hallucination (fake chat window with warning)
 *   step 5: Weakness 3 — can't operate external systems (wall barrier) + transition
 */

// ─── Abbreviation words for rain ───
const RAIN_WORDS = [
  { text: "RAG",              left: 8,  size: 42, delay: 0.0,  dur: 4.2, blur: false, opacity: 0.9 },
  { text: "Agent",            left: 22, size: 56, delay: 0.5,  dur: 5.0, blur: false, opacity: 1.0 },
  { text: "MCP",              left: 38, size: 34, delay: 0.2,  dur: 3.8, blur: true,  opacity: 0.5 },
  { text: "LoRA",             left: 52, size: 48, delay: 0.9,  dur: 4.5, blur: false, opacity: 0.85 },
  { text: "RLHF",             left: 68, size: 38, delay: 0.3,  dur: 5.2, blur: true,  opacity: 0.45 },
  { text: "LLM",              left: 82, size: 64, delay: 0.1,  dur: 4.0, blur: false, opacity: 1.0 },
  { text: "Fine-tuning",      left: 12, size: 28, delay: 1.2,  dur: 6.0, blur: true,  opacity: 0.4 },
  { text: "Function Calling", left: 30, size: 30, delay: 0.7,  dur: 5.5, blur: false, opacity: 0.7 },
  { text: "Embedding",        left: 46, size: 36, delay: 1.0,  dur: 4.8, blur: true,  opacity: 0.5 },
  { text: "ReAct",            left: 60, size: 44, delay: 0.4,  dur: 3.5, blur: false, opacity: 0.8 },
  { text: "Multi-Agent",      left: 74, size: 32, delay: 1.1,  dur: 5.8, blur: true,  opacity: 0.45 },
  { text: "RLTF",             left: 90, size: 26, delay: 0.6,  dur: 4.4, blur: true,  opacity: 0.35 },
  { text: "RAG",              left: 16, size: 24, delay: 1.5,  dur: 5.0, blur: true,  opacity: 0.3 },
  { text: "Agent",            left: 42, size: 50, delay: 0.8,  dur: 4.6, blur: false, opacity: 0.75 },
  { text: "MCP",              left: 64, size: 22, delay: 1.3,  dur: 6.2, blur: true,  opacity: 0.35 },
  { text: "LoRA",             left: 86, size: 40, delay: 0.25, dur: 4.1, blur: false, opacity: 0.7 },
];

// ─── Model names for step 2 ───
const MODELS = [
  { name: "GPT",     angle: -120 },
  { name: "Claude",  angle: -60 },
  { name: "DeepSeek", angle: 0 },
  { name: "Gemini",  angle: 60 },
  { name: "Llama",   angle: 120 },
  { name: "Qwen",    angle: 180 },
];

export function Hook({ step }: { step: number }) {
  if (step === 0) return <RainWords />;
  if (step === 1) return <CalmDown />;
  if (step === 2) return <LLMIntro />;
  if (step === 3) return <Weakness1 />;
  if (step === 4) return <Weakness2 />;
  if (step === 5) return <Weakness3 />;
  return null;
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 0 — Abbreviation Rain
 * Words fall from top with varying sizes, speeds, opacity, blur
 * ═══════════════════════════════════════════════════════════════════ */
function RainWords() {
  return (
    <div className="hk-rain">
      <div className="hk-rain-vignette" />
      {RAIN_WORDS.map((w, i) => {
        const style: CSSProperties = {
          left: `${w.left}%`,
          fontSize: `${w.size}px`,
          animationDelay: `${w.delay}s`,
          animationDuration: `${w.dur}s`,
          opacity: w.opacity,
          filter: w.blur ? "blur(3px)" : "none",
          fontFamily: "var(--font-mono)",
          fontWeight: w.blur ? 300 : 400,
        };
        return (
          <span key={i} className="hk-rain-word" style={style}>
            {w.text}
          </span>
        );
      })}
      <div className="hk-rain-overlay">
        <p className="hk-rain-question" style={{ fontFamily: "var(--font-display-cn)" }}>
          是不是头都大了？
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 1 — "别慌" Calm Down
 * Screen clears, large text scales in from center with subtle glow
 * ═══════════════════════════════════════════════════════════════════ */
function CalmDown() {
  return (
    <div className="hk-calm">
      <div className="hk-calm-glow" />
      <h1 className="hk-calm-title">别慌</h1>
      <p className="hk-calm-sub" style={{ fontFamily: "var(--font-body)" }}>
        2026 年最常遇到的十个 AI 名词，用大白话一次性讲清楚
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 2 — LLM Intro
 * Central brain SVG + orbiting model names + "genius intern" badge
 * ═══════════════════════════════════════════════════════════════════ */
function LLMIntro() {
  return (
    <div className="hk-llm">
      {/* Kicker */}
      <div className="hk-llm-kicker">
        <span className="hk-llm-kicker-line" />
        <span className="hk-llm-kicker-text" style={{ fontFamily: "var(--font-mono)" }}>
          LLM · LARGE LANGUAGE MODEL
        </span>
      </div>

      {/* Central brain SVG */}
      <div className="hk-llm-center">
        <svg className="hk-llm-brain" viewBox="0 0 200 200" fill="none">
          {/* Outer ring */}
          <circle cx="100" cy="100" r="88" stroke="var(--accent)" strokeWidth="1" opacity="0.2" />
          <circle cx="100" cy="100" r="72" stroke="var(--accent)" strokeWidth="1" opacity="0.35" />
          {/* Brain shape */}
          <path
            d="M100 28 C 70 28 52 50 52 78 C 52 96 60 110 68 120 C 74 128 78 138 78 148 L 78 160 C 78 168 86 172 100 172 C 114 172 122 168 122 160 L 122 148 C 122 138 126 128 132 120 C 140 110 148 96 148 78 C 148 50 130 28 100 28 Z"
            fill="var(--accent-soft)"
            stroke="var(--accent)"
            strokeWidth="1.5"
          />
          {/* Brain fold lines */}
          <path d="M100 28 Q 82 55 82 100 Q 82 140 78 160" stroke="var(--accent)" strokeWidth="1" opacity="0.4" fill="none" />
          <path d="M100 28 Q 118 55 118 100 Q 118 140 122 160" stroke="var(--accent)" strokeWidth="1" opacity="0.4" fill="none" />
          <path d="M68 70 Q 85 60 100 68 Q 115 60 132 70" stroke="var(--accent)" strokeWidth="0.8" opacity="0.3" fill="none" />
          <path d="M62 92 Q 82 82 100 90 Q 118 82 138 92" stroke="var(--accent)" strokeWidth="0.8" opacity="0.3" fill="none" />
          {/* Neural nodes */}
          <circle cx="78" cy="65" r="3" fill="var(--accent)" opacity="0.6" />
          <circle cx="122" cy="65" r="3" fill="var(--accent)" opacity="0.6" />
          <circle cx="100" cy="55" r="2.5" fill="var(--accent)" opacity="0.5" />
          <circle cx="70" cy="95" r="2.5" fill="var(--accent)" opacity="0.5" />
          <circle cx="130" cy="95" r="2.5" fill="var(--accent)" opacity="0.5" />
          <circle cx="90" cy="115" r="2" fill="var(--accent)" opacity="0.4" />
          <circle cx="110" cy="115" r="2" fill="var(--accent)" opacity="0.4" />
          {/* Neural connections */}
          <line x1="78" y1="65" x2="100" y2="55" stroke="var(--accent)" strokeWidth="0.6" opacity="0.3" />
          <line x1="122" y1="65" x2="100" y2="55" stroke="var(--accent)" strokeWidth="0.6" opacity="0.3" />
          <line x1="78" y1="65" x2="70" y2="95" stroke="var(--accent)" strokeWidth="0.6" opacity="0.25" />
          <line x1="122" y1="65" x2="130" y2="95" stroke="var(--accent)" strokeWidth="0.6" opacity="0.25" />
          <line x1="70" y1="95" x2="90" y2="115" stroke="var(--accent)" strokeWidth="0.6" opacity="0.2" />
          <line x1="130" y1="95" x2="110" y2="115" stroke="var(--accent)" strokeWidth="0.6" opacity="0.2" />
        </svg>

        {/* "天才实习生" label below brain */}
        <div className="hk-llm-badge">
          <span className="hk-llm-badge-text" style={{ fontFamily: "var(--font-display-cn)" }}>
            天才实习生
          </span>
        </div>
      </div>

      {/* Orbiting model name tags */}
      <div className="hk-llm-orbit">
        {MODELS.map((m, i) => {
          const radius = 280;
          const rad = (m.angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius * 0.55; // elliptical
          const tagStyle: CSSProperties = {
            transform: `translate(${x}px, ${y}px)`,
            animationDelay: `${i * 0.1}s`,
          };
          return (
            <span key={i} className="hk-llm-tag" style={tagStyle}>
              {m.name}
            </span>
          );
        })}
      </div>

      {/* Bottom analogy text */}
      <p className="hk-llm-analogy" style={{ fontFamily: "var(--font-display-cn)" }}>
        读了全人类知识的天才实习生——知识面极广，但刚入职
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 3 — Weakness 1: Knowledge Cutoff
 * Calendar SVG with red strike-through, crack effect
 * ═══════════════════════════════════════════════════════════════════ */
function Weakness1() {
  return (
    <div className="hk-w1">
      <div className="hk-w1-number" style={{ fontFamily: "var(--font-display-en)" }}>
        01
      </div>

      <div className="hk-w1-body">
        {/* Calendar SVG with crack */}
        <svg className="hk-w1-calendar" viewBox="0 0 200 200" fill="none">
          {/* Calendar frame */}
          <rect x="20" y="40" width="160" height="140" stroke="var(--text)" strokeWidth="1.5" fill="var(--surface)" />
          {/* Calendar top bar */}
          <rect x="20" y="40" width="160" height="28" fill="var(--text)" />
          {/* Calendar rings */}
          <line x1="55" y1="30" x2="55" y2="50" stroke="var(--text)" strokeWidth="2" />
          <line x1="145" y1="30" x2="145" y2="50" stroke="var(--text)" strokeWidth="2" />
          {/* Date grid lines */}
          <line x1="20" y1="96" x2="180" y2="96" stroke="var(--rule)" strokeWidth="1" />
          <line x1="20" y1="124" x2="180" y2="124" stroke="var(--rule)" strokeWidth="1" />
          <line x1="20" y1="152" x2="180" y2="152" stroke="var(--rule)" strokeWidth="1" />
          <line x1="60" y1="68" x2="60" y2="180" stroke="var(--rule)" strokeWidth="1" />
          <line x1="100" y1="68" x2="100" y2="180" stroke="var(--rule)" strokeWidth="1" />
          <line x1="140" y1="68" x2="140" y2="180" stroke="var(--rule)" strokeWidth="1" />
          {/* Highlighted date */}
          <rect x="105" y="130" width="30" height="22" fill="var(--accent-soft)" />
          <text x="120" y="147" textAnchor="middle" fontSize="14" fill="var(--accent)" fontFamily="var(--font-mono)" fontWeight="500">
            15
          </text>
          {/* Red strike-through line */}
          <line x1="10" y1="105" x2="190" y2="95" stroke="#cc0000" strokeWidth="3" strokeLinecap="round" className="hk-w1-strike" />
          {/* Crack lines from strike point */}
          <path d="M 120 100 L 115 120 L 125 135 L 118 155" stroke="#cc0000" strokeWidth="1.5" fill="none" opacity="0.6" className="hk-w1-crack1" />
          <path d="M 80 98 L 72 115 L 78 130" stroke="#cc0000" strokeWidth="1" fill="none" opacity="0.4" className="hk-w1-crack2" />
          <path d="M 150 97 L 158 112 L 152 128" stroke="#cc0000" strokeWidth="1" fill="none" opacity="0.4" className="hk-w1-crack3" />
        </svg>

        <div className="hk-w1-text">
          <h2 className="hk-w1-title" style={{ fontFamily: "var(--font-display-cn)" }}>
            知识截止日期
          </h2>
          <p className="hk-w1-desc" style={{ fontFamily: "var(--font-body)" }}>
            训练完就停在那一天了
          </p>
        </div>
      </div>

      <div className="hk-w1-weakness-label" style={{ fontFamily: "var(--font-mono)" }}>
        WEAKNESS 1 / 3
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 4 — Weakness 2: Hallucination
 * Simulated chat window with confident wrong answer + warning
 * ═══════════════════════════════════════════════════════════════════ */
function Weakness2() {
  return (
    <div className="hk-w2">
      <div className="hk-w2-number" style={{ fontFamily: "var(--font-display-en)" }}>
        02
      </div>

      <div className="hk-w2-chat">
        {/* Chat window header */}
        <div className="hk-w2-chat-header">
          <div className="hk-w2-chat-dots">
            <span /><span /><span />
          </div>
          <span className="hk-w2-chat-title" style={{ fontFamily: "var(--font-mono)" }}>
            AI OUTPUT
          </span>
        </div>

        {/* User question */}
        <div className="hk-w2-msg hk-w2-msg--user">
          <span className="hk-w2-role" style={{ fontFamily: "var(--font-mono)" }}>USER</span>
          <p className="hk-w2-text" style={{ fontFamily: "var(--font-body)" }}>
            2026 年中国春运客流量是多少？
          </p>
        </div>

        {/* AI confident wrong answer */}
        <div className="hk-w2-msg hk-w2-msg--ai hk-w2-msg--wrong">
          <span className="hk-w2-role hk-w2-role--ai" style={{ fontFamily: "var(--font-mono)" }}>AI</span>
          <p className="hk-w2-text hk-w2-text--ai" style={{ fontFamily: "var(--font-body)" }}>
            2026 年中国春运客流量约为 <span className="hk-w2-highlight">38 亿人次</span>，
           同比增长 12.5%，创历史新高。
          </p>
          {/* Warning marker */}
          <div className="hk-w2-warning">
            <svg viewBox="0 0 24 24" fill="none" className="hk-w2-warning-icon">
              <path d="M12 2 L22 20 L2 20 Z" stroke="#cc0000" strokeWidth="1.5" fill="none" />
              <line x1="12" y1="9" x2="12" y2="14" stroke="#cc0000" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="17" r="1" fill="#cc0000" />
            </svg>
            <span className="hk-w2-warning-text" style={{ fontFamily: "var(--font-mono)" }}>
              HALLUCINATION · 编造数据
            </span>
          </div>
        </div>
      </div>

      <div className="hk-w2-title-row">
        <h2 className="hk-w2-title" style={{ fontFamily: "var(--font-display-cn)" }}>
          幻觉
        </h2>
        <p className="hk-w2-desc" style={{ fontFamily: "var(--font-body)" }}>
          不懂也硬编答案
        </p>
      </div>

      <div className="hk-w2-weakness-label" style={{ fontFamily: "var(--font-mono)" }}>
        WEAKNESS 2 / 3
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 5 — Weakness 3: Can't Operate External Systems
 * LLM brain behind a wall, external icons blocked off
 * ═══════════════════════════════════════════════════════════════════ */
function Weakness3() {
  return (
    <div className="hk-w3">
      <div className="hk-w3-number" style={{ fontFamily: "var(--font-display-en)" }}>
        03
      </div>

      <div className="hk-w3-scene">
        {/* Left side: LLM brain (small) */}
        <div className="hk-w3-llm-side">
          <svg className="hk-w3-brain" viewBox="0 0 120 120" fill="none">
            <path
              d="M60 16 C 42 16 31 30 31 47 C 31 58 36 66 41 72 C 45 77 47 83 47 89 L 47 96 C 47 101 52 103 60 103 C 68 103 73 101 73 96 L 73 89 C 73 83 75 77 79 72 C 84 66 89 58 89 47 C 89 30 78 16 60 16 Z"
              fill="var(--accent-soft)"
              stroke="var(--accent)"
              strokeWidth="1.2"
            />
            <path d="M60 16 Q 49 33 49 60 Q 49 85 47 96" stroke="var(--accent)" strokeWidth="0.8" opacity="0.35" fill="none" />
            <path d="M60 16 Q 71 33 71 60 Q 71 85 73 96" stroke="var(--accent)" strokeWidth="0.8" opacity="0.35" fill="none" />
            <circle cx="47" cy="40" r="2" fill="var(--accent)" opacity="0.5" />
            <circle cx="73" cy="40" r="2" fill="var(--accent)" opacity="0.5" />
            <circle cx="60" cy="34" r="1.5" fill="var(--accent)" opacity="0.4" />
          </svg>
          <span className="hk-w3-llm-label" style={{ fontFamily: "var(--font-mono)" }}>LLM</span>
        </div>

        {/* Center: Wall barrier */}
        <div className="hk-w3-wall">
          <div className="hk-w3-wall-bricks">
            {/* Brick pattern via CSS */}
            <div className="hk-w3-brick-row hk-w3-brick-row--offset" />
            <div className="hk-w3-brick-row" />
            <div className="hk-w3-brick-row hk-w3-brick-row--offset" />
            <div className="hk-w3-brick-row" />
            <div className="hk-w3-brick-row hk-w3-brick-row--offset" />
          </div>
          <div className="hk-w3-wall-label" style={{ fontFamily: "var(--font-mono)" }}>
            只能聊天
          </div>
        </div>

        {/* Right side: Blocked external systems */}
        <div className="hk-w3-external">
          <div className="hk-w3-ext-item">
            <svg viewBox="0 0 48 48" fill="none" className="hk-w3-ext-icon">
              {/* Database icon */}
              <ellipse cx="24" cy="12" rx="16" ry="6" stroke="var(--text-mute)" strokeWidth="1.5" fill="none" />
              <path d="M8 12 V 24 C 8 27 15 30 24 30 C 33 30 40 27 40 24 V 12" stroke="var(--text-mute)" strokeWidth="1.5" fill="none" />
              <path d="M8 24 V 36 C 8 39 15 42 24 42 C 33 42 40 39 40 36 V 24" stroke="var(--text-mute)" strokeWidth="1.5" fill="none" />
            </svg>
            <span className="hk-w3-ext-label" style={{ fontFamily: "var(--font-mono)" }}>DATABASE</span>
          </div>
          <div className="hk-w3-ext-item">
            <svg viewBox="0 0 48 48" fill="none" className="hk-w3-ext-icon">
              {/* Button icon */}
              <rect x="8" y="16" width="32" height="16" rx="2" stroke="var(--text-mute)" strokeWidth="1.5" fill="none" />
              <rect x="14" y="20" width="20" height="8" rx="1" stroke="var(--text-mute)" strokeWidth="1" fill="none" />
            </svg>
            <span className="hk-w3-ext-label" style={{ fontFamily: "var(--font-mono)" }}>BUTTON</span>
          </div>
          <div className="hk-w3-ext-item">
            <svg viewBox="0 0 48 48" fill="none" className="hk-w3-ext-icon">
              {/* API icon — braces */}
              <path d="M14 10 C 8 10 8 18 8 24 C 8 30 6 34 14 34" stroke="var(--text-mute)" strokeWidth="1.5" fill="none" />
              <path d="M34 10 C 40 10 40 18 40 24 C 40 30 42 34 34 34" stroke="var(--text-mute)" strokeWidth="1.5" fill="none" />
              <line x1="20" y1="24" x2="28" y2="24" stroke="var(--text-mute)" strokeWidth="1.5" />
            </svg>
            <span className="hk-w3-ext-label" style={{ fontFamily: "var(--font-mono)" }}>API</span>
          </div>
        </div>
      </div>

      <div className="hk-w3-titles">
        <h2 className="hk-w3-title" style={{ fontFamily: "var(--font-display-cn)" }}>
          无法操作外部系统
        </h2>
        <p className="hk-w3-desc" style={{ fontFamily: "var(--font-body)" }}>
          不能查数据库、不能点按钮
        </p>
      </div>

      <div className="hk-w3-transition" style={{ fontFamily: "var(--font-display-cn)" }}>
        <span className="hk-w3-transition-line" />
        <span className="hk-w3-transition-text">
          下面所有技术，都是在补这三个窟窿
        </span>
        <span className="hk-w3-transition-line" />
      </div>

      <div className="hk-w3-weakness-label" style={{ fontFamily: "var(--font-mono)" }}>
        WEAKNESS 3 / 3
      </div>
    </div>
  );
}
