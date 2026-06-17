import type { CSSProperties } from "react";

/**
 * Hook chapter — 3 steps
 *   step 0: Abbreviation words rain down (RAG, Agent, MCP, LoRA, RLHF…)
 *   step 1: Screen clears, big "别慌" appears
 *   step 2: LLM icon appears center, cracks reveal 3 weaknesses one by one
 */

// ─── The list of AI abbreviations ───
const WORDS = [
  "RAG", "Agent", "MCP", "LoRA", "RLHF",
  "LLM", "RAG", "Agent", "MCP", "LoRA",
  "Fine-tuning", "Function Calling", "Embedding",
  "ReAct", "Multi-Agent", "RLTF"
];

// ─── Cracked weakness data ───
const WEAKNESSES = [
  { label: "知识截止日期", desc: "训练完就停在当天" },
  { label: "幻觉",         desc: "不懂也硬编答案" },
  { label: "无法操作外部系统", desc: "不能查数据库、不能点按钮" },
];

export function Hook({ step }: { step: number }) {
  return (
    <div className="hk-stage">
      {step === 0 && <RainWords />}
      {step >= 1 && (
        <div className={`hk-calm ${step === 1 ? "hk-calm--enter" : "hk-calm--visible"}`}>
          <h1 className="hk-calm-title">别慌</h1>
        </div>
      )}
      {step === 2 && <LLMReveal />}
    </div>
  );
}

/* ─── Step 0: Falling abbreviations ─── */
function RainWords() {
  return (
    <div className="hk-rain">
      {WORDS.map((w, i) => {
        const left = Math.random() * 90 + 5; // 5%~95%
        const delay = Math.random() * 2.5;
        const duration = 3 + Math.random() * 4;
        const size = 20 + Math.random() * 28; // 20~48px
        const wordStyle: CSSProperties = {
          left: `${left}%`,
          fontSize: size,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        };
        return (
          <span key={i} className="hk-rain-word" style={wordStyle}>
            {w}
          </span>
        );
      })}
    </div>
  );
}

/* ─── Step 2: LLM reveal with cracking weaknesses ─── */
function LLMReveal() {
  return (
    <div className="hk-llm">
      {/* Central LLM brain icon — pure SVG */}
      <svg className="hk-llm-icon" viewBox="0 0 120 120" fill="none">
        {/* Brain hemispheres */}
        <ellipse cx="60" cy="55" rx="45" ry="38" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="2"/>
        <path d="M60 17 Q 38 30 38 55 Q 38 80 60 93" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5"/>
        <path d="M60 17 Q 82 30 82 55 Q 82 80 60 93" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5"/>
        {/* Neural connections */}
        <circle cx="40" cy="45" r="4" fill="var(--accent)" opacity="0.7"/>
        <circle cx="80" cy="45" r="4" fill="var(--accent)" opacity="0.7"/>
        <circle cx="60" cy="35" r="3" fill="var(--accent)" opacity="0.6"/>
        <circle cx="46" cy="65" r="3" fill="var(--accent)" opacity="0.6"/>
        <circle cx="74" cy="65" r="3" fill="var(--accent)" opacity="0.6"/>
        <line x1="40" y1="45" x2="60" y2="35" stroke="var(--accent)" strokeWidth="1" opacity="0.4"/>
        <line x1="80" y1="45" x2="60" y2="35" stroke="var(--accent)" strokeWidth="1" opacity="0.4"/>
        <line x1="40" y1="45" x2="46" y2="65" stroke="var(--accent)" strokeWidth="1" opacity="0.35"/>
        <line x1="80" y1="45" x2="74" y2="65" stroke="var(--accent)" strokeWidth="1" opacity="0.35"/>
      </svg>

      {/* Three weaknesses as cracked panels */}
      <div className="hk-cracks">
        {WEAKNESSES.map((w, i) => (
          <div
            key={i}
            className="hk-crack"
            style={{ animationDelay: `${0.3 + i * 0.5}s` }}
          >
            <div className="hk-crack-line" />
            <div className="hk-crack-content">
              <span className="hk-crack-label">{w.label}</span>
              <span className="hk-crack-desc">{w.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
