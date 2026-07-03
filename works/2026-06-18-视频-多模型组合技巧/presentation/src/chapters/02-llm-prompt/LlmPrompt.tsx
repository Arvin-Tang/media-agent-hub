import type { CSSProperties } from "react";

/**
 * LlmPrompt chapter — 5 steps
 *   step 0: Prompt concept intro — big title + chat UI preview
 *   step 1: Bad prompt example — terminal window with blurry output
 *   step 2: Good prompt example — structured prompt with clean output
 *   step 3: Timeline 2023→2025 — prompt engineer era to reasoning models
 *   step 4: Transition — LLM as foundation, tech stack on top
 */

export function LlmPrompt({ step }: { step: number }) {
  return (
    <div className="lp-stage">
      {step === 0 && <PromptIntro />}
      {step === 1 && <BadPrompt />}
      {step === 2 && <GoodPrompt />}
      {step === 3 && <Timeline />}
      {step === 4 && <LlmFoundation />}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 0: Prompt Intro — left big title, right chat preview SVG
 * ═══════════════════════════════════════════════════════════════════ */
function PromptIntro() {
  return (
    <div className="lp-intro">
      {/* Left: big title */}
      <div className="lp-intro-left">
        <div className="lp-intro-kicker">
          <span className="lp-intro-kicker-line" />
          <span className="lp-intro-kicker-text">02 / PROMPT</span>
        </div>
        <h1 className="lp-intro-title">
          <span className="lp-intro-title-en">Prompt</span>
          <span className="lp-intro-title-cn">提示词</span>
        </h1>
        <p className="lp-intro-desc">
          你跟 AI 说的每一句话
        </p>
      </div>

      {/* Right: chat UI mockup */}
      <div className="lp-intro-right">
        <div className="lp-chat-window lp-chat-window--intro">
          {/* Window header */}
          <div className="lp-chat-header">
            <span className="lp-chat-dot" />
            <span className="lp-chat-dot" />
            <span className="lp-chat-dot" />
            <span className="lp-chat-title-mono">chat.ai</span>
          </div>
          {/* Chat body */}
          <div className="lp-chat-body">
            {/* User message */}
            <div className="lp-chat-bubble lp-chat-bubble--user">
              <span className="lp-chat-bubble-role">USER</span>
              <p className="lp-chat-bubble-text">
                <mark className="lp-highlight">写一篇文章</mark>
              </p>
            </div>
            {/* AI message */}
            <div className="lp-chat-bubble lp-chat-bubble--ai">
              <span className="lp-chat-bubble-role">AI</span>
              <div className="lp-chat-bubble-text lp-chat-bubble-text--ai">
                <span className="lp-bar" />
                <span className="lp-bar lp-bar--w80" />
                <span className="lp-bar lp-bar--w60" />
                <span className="lp-bar lp-bar--w90" />
              </div>
            </div>
          </div>
          {/* Input bar */}
          <div className="lp-chat-input">
            <span className="lp-chat-input-placeholder">输入你的 Prompt…</span>
            <span className="lp-chat-send">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 1: Bad Prompt — terminal window, vague input, blurry output
 * ═══════════════════════════════════════════════════════════════════ */
function BadPrompt() {
  return (
    <div className="lp-bad">
      {/* Mark: cross */}
      <div className="lp-mark lp-mark--bad">
        <svg viewBox="0 0 40 40" fill="none">
          <line x1="8" y1="8" x2="32" y2="32" stroke="currentColor" strokeWidth="2" />
          <line x1="32" y1="8" x2="8" y2="32" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="lp-bad-window">
        <div className="lp-chat-header">
          <span className="lp-chat-dot" />
          <span className="lp-chat-dot" />
          <span className="lp-chat-dot" />
          <span className="lp-chat-title-mono">chat.ai</span>
        </div>
        <div className="lp-chat-body">
          {/* User message */}
          <div className="lp-chat-bubble lp-chat-bubble--user">
            <span className="lp-chat-bubble-role">USER</span>
            <p className="lp-chat-bubble-text lp-chat-bubble-text--bad-input">
              写一篇文章
            </p>
          </div>
          {/* AI response: blurry, low-quality */}
          <div className="lp-chat-bubble lp-chat-bubble--ai">
            <span className="lp-chat-bubble-role">AI</span>
            <div className="lp-chat-bubble-text">
              <div className="lp-blurry-output">
                <span className="lp-blurry-line lp-blurry-line--1" />
                <span className="lp-blurry-line lp-blurry-line--2" />
                <span className="lp-blurry-line lp-blurry-line--3" />
                <span className="lp-blurry-line lp-blurry-line--4" />
                <span className="lp-blurry-line lp-blurry-line--5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="lp-bad-label">
        <span className="lp-bad-label-text">几百字废话</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 2: Good Prompt — structured input, clean output, title appears
 * ═══════════════════════════════════════════════════════════════════ */
function GoodPrompt() {
  return (
    <div className="lp-good">
      {/* Mark: check */}
      <div className="lp-mark lp-mark--good">
        <svg viewBox="0 0 40 40" fill="none">
          <path d="M8 20 L16 28 L32 12" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="lp-good-window">
        <div className="lp-chat-header">
          <span className="lp-chat-dot" />
          <span className="lp-chat-dot" />
          <span className="lp-chat-dot" />
          <span className="lp-chat-title-mono">chat.ai</span>
        </div>
        <div className="lp-chat-body">
          {/* User message — structured */}
          <div className="lp-chat-bubble lp-chat-bubble--user">
            <span className="lp-chat-bubble-role">USER</span>
            <div className="lp-chat-bubble-text lp-good-struct">
              <span className="lp-good-struct-line">
                <span className="lp-good-struct-tag">角色</span>
                你是一名科技博主
              </span>
              <span className="lp-good-struct-line">
                <span className="lp-good-struct-tag">受众</span>
                面向完全不懂技术的普通人
              </span>
              <span className="lp-good-struct-line">
                <span className="lp-good-struct-tag">字数</span>
                800 字
              </span>
              <span className="lp-good-struct-line">
                <span className="lp-good-struct-tag">风格</span>
                用比喻，轻松一点
              </span>
            </div>
          </div>
          {/* AI response: clean structured output */}
          <div className="lp-chat-bubble lp-chat-bubble--ai">
            <span className="lp-chat-bubble-role">AI</span>
            <div className="lp-chat-bubble-text lp-good-output">
              <span className="lp-good-output-bar lp-good-output-bar--1" />
              <span className="lp-good-output-bar lp-good-output-bar--2" />
              <span className="lp-good-output-bar lp-good-output-bar--3" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom title */}
      <div className="lp-good-title">
        <span className="lp-good-title-line" />
        <h2 className="lp-good-title-text">Prompt Engineering</h2>
        <span className="lp-good-title-line" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 3: Timeline 2023 → 2025
 * ═══════════════════════════════════════════════════════════════════ */
function Timeline() {
  return (
    <div className="lp-timeline">
      {/* Section label */}
      <div className="lp-timeline-kicker">
        <span className="lp-timeline-kicker-line" />
        <span className="lp-timeline-kicker-text">PROMPT ENGINEERING 的兴衰</span>
      </div>

      {/* Timeline track */}
      <div className="lp-timeline-track">
        {/* Horizontal line */}
        <div className="lp-timeline-line" />

        {/* 2023 node */}
        <div className="lp-tl-node lp-tl-node--2023">
          <div className="lp-tl-dot" />
          <div className="lp-tl-year">2023</div>
          <div className="lp-tl-card lp-tl-card--hot">
            <span className="lp-tl-card-label">提示工程师</span>
            <span className="lp-tl-card-sub">专职职位 · 贼火</span>
          </div>
        </div>

        {/* 2025 node */}
        <div className="lp-tl-node lp-tl-node--2025">
          <div className="lp-tl-dot lp-tl-dot--accent" />
          <div className="lp-tl-year">2025</div>
          <div className="lp-tl-card lp-tl-card--shift">
            <span className="lp-tl-card-label">DeepSeek R1</span>
            <span className="lp-tl-card-sub">推理模型 · 正常说话 &gt; 套模板</span>
          </div>
        </div>

        {/* Arrow direction */}
        <div className="lp-tl-arrow">
          <svg viewBox="0 0 120 16" fill="none">
            <line x1="0" y1="8" x2="106" y2="8" stroke="var(--accent)" strokeWidth="1.5" />
            <path d="M98 2 L112 8 L98 14" stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 4: LLM Foundation — LLM brain base + floating tech labels
 * ═══════════════════════════════════════════════════════════════════ */
function LlmFoundation() {
  const techLabels = [
    { text: "RAG", top: "18%", left: "28%", delay: "0.3s" },
    { text: "Agent", top: "12%", left: "52%", delay: "0.5s" },
    { text: "MCP", top: "22%", left: "72%", delay: "0.7s" },
    { text: "LoRA", top: "32%", left: "18%", delay: "0.9s" },
    { text: "FC", top: "30%", left: "80%", delay: "1.1s" },
    { text: "RLHF", top: "42%", left: "40%", delay: "1.3s" },
  ];

  return (
    <div className="lp-foundation">
      {/* Floating tech labels */}
      {techLabels.map((t) => (
        <div
          key={t.text}
          className="lp-found-label"
          style={
            {
              top: t.top,
              left: t.left,
              "--lp-found-delay": t.delay,
            } as CSSProperties
          }
        >
          {t.text}
        </div>
      ))}

      {/* LLM brain base */}
      <div className="lp-found-base">
        <svg className="lp-found-brain" viewBox="0 0 200 160" fill="none">
          {/* Base platform */}
          <rect x="20" y="110" width="160" height="40" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
          <text x="100" y="136" textAnchor="middle" fontSize="18" fontFamily="var(--font-mono)" fill="var(--accent)" fontWeight="700" letterSpacing="0.1em">LLM</text>

          {/* Brain above base */}
          <ellipse cx="100" cy="60" rx="55" ry="42" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.5" />
          <path d="M100 18 Q 72 36 72 60 Q 72 88 100 102" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
          <path d="M100 18 Q 128 36 128 60 Q 128 88 100 102" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />

          {/* Neural nodes */}
          <circle cx="75" cy="48" r="4" fill="var(--accent)" opacity="0.7" />
          <circle cx="125" cy="48" r="4" fill="var(--accent)" opacity="0.7" />
          <circle cx="100" cy="38" r="3" fill="var(--accent)" opacity="0.6" />
          <circle cx="85" cy="72" r="3" fill="var(--accent)" opacity="0.6" />
          <circle cx="115" cy="72" r="3" fill="var(--accent)" opacity="0.6" />
          <circle cx="100" cy="60" r="5" fill="var(--accent)" opacity="0.8" />

          {/* Connections */}
          <line x1="75" y1="48" x2="100" y2="38" stroke="var(--accent)" strokeWidth="1" opacity="0.35" />
          <line x1="125" y1="48" x2="100" y2="38" stroke="var(--accent)" strokeWidth="1" opacity="0.35" />
          <line x1="75" y1="48" x2="85" y2="72" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
          <line x1="125" y1="48" x2="115" y2="72" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
          <line x1="85" y1="72" x2="115" y2="72" stroke="var(--accent)" strokeWidth="1" opacity="0.25" />
          <line x1="75" y1="48" x2="100" y2="60" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
          <line x1="125" y1="48" x2="100" y2="60" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="38" x2="100" y2="60" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="60" x2="85" y2="72" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="60" x2="115" y2="72" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />

          {/* Connecting pillars from brain to base */}
          <line x1="60" y1="95" x2="60" y2="110" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
          <line x1="100" y1="102" x2="100" y2="110" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
          <line x1="140" y1="95" x2="140" y2="110" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* Caption */}
      <div className="lp-found-caption">
        <span className="lp-found-caption-text">建在 LLM 之上的完整系统</span>
      </div>
    </div>
  );
}
