import type { CSSProperties } from "react";

/**
 * Cheatsheet chapter — 3 steps
 *   step 0: 8-row cheatsheet table, rows reveal one by one
 *   step 1: "2026.06 状态" timestamp + core golden quote
 *   step 2: Closing — next episode preview + CTA
 */

// ─── Cheatsheet data (8 rows) ───
const ROWS = [
  { task: "长文写作",   primary: "Claude",      secondary: "GPT-4o",    reason: "Claude 中文自然度最高" },
  { task: "代码编写",   primary: "GPT-4o",      secondary: "Claude",    reason: "GPT-4o 代码准确率高" },
  { task: "逻辑推理",   primary: "DeepSeek R1", secondary: "GPT-4o",    reason: "R1 的思维链推理最强" },
  { task: "图片生成",   primary: "Midjourney",  secondary: "DALL·E",    reason: "MJ 艺术感强，DALL·E 跟手快" },
  { task: "实时信息",   primary: "Gemini",      secondary: "GPT-4o",    reason: "Gemini 有 Google 搜索加持" },
  { task: "多模态理解", primary: "GPT-4o",      secondary: "Gemini",    reason: "GPT-4o 图片理解最稳" },
  { task: "数学计算",   primary: "DeepSeek R1", secondary: "Claude",    reason: "R1 数学竞赛级表现" },
  { task: "创意发散",   primary: "Claude",      secondary: "GPT-4o",    reason: "Claude 创意写作更有灵气" },
] as const;

export function Cheatsheet({ step }: { step: number }) {
  return (
    <div className="cs-stage">
      {step === 0 && <CheatSheetTable />}
      {step === 1 && <CheatSheetQuote />}
      {step === 2 && <CheatSheetClosing />}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Shared: Kicker
 * ═══════════════════════════════════════════════════════════════════ */

function Kicker({ text }: { text: string }) {
  return (
    <div className="cs-kicker">
      <span className="cs-kicker-line" />
      <span className="cs-kicker-text">{text}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 0: 8-row cheatsheet table — rows reveal one by one
 * ═══════════════════════════════════════════════════════════════════ */

function CheatSheetTable() {
  return (
    <div className="cs-scene">
      <Kicker text="CHEATSHEET · 模型搭配速查表" />

      <h2 className="cs-title">每件事，选最擅长的</h2>

      {/* ─── Table ─── */}
      <div className="cs-table">
        {/* ─── Header row ─── */}
        <div className="cs-table-header">
          <span className="cs-col cs-col-task">任务类型</span>
          <span className="cs-col cs-col-primary">首选</span>
          <span className="cs-col cs-col-secondary">次选</span>
          <span className="cs-col cs-col-reason">理由</span>
        </div>

        {/* ─── Hairline under header ─── */}
        <div className="cs-table-rule" />

        {/* ─── Data rows (staggered reveal) ─── */}
        {ROWS.map((row, i) => (
          <div
            key={row.task}
            className="cs-row"
            style={{ animationDelay: `${0.4 + i * 0.16}s` } as CSSProperties}
          >
            <span className="cs-col cs-col-task">
              <span className="cs-col-task-text">{row.task}</span>
            </span>
            <span className="cs-col cs-col-primary">
              <span className="cs-model-chip">{row.primary}</span>
            </span>
            <span className="cs-col cs-col-secondary">
              <span className="cs-model-chip cs-model-chip--muted">{row.secondary}</span>
            </span>
            <span className="cs-col cs-col-reason">
              <span className="cs-col-reason-text">{row.reason}</span>
            </span>
          </div>
        ))}

        {/* ─── Bottom hairline ─── */}
        <div className="cs-table-rule cs-table-rule--bottom" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 1: "2026.06 状态" timestamp + core golden quote
 * ═══════════════════════════════════════════════════════════════════ */

function CheatSheetQuote() {
  return (
    <div className="cs-scene cs-scene--quote">
      <Kicker text="NOTE · 重要提醒" />

      {/* ─── Timestamp badge ─── */}
      <div className="cs-timestamp">
        <span className="cs-timestamp-bracket">[</span>
        <span className="cs-timestamp-text">2026.06 状态</span>
        <span className="cs-timestamp-bracket">]</span>
        <span className="cs-timestamp-note">模型更新很快，下个月可能就变了</span>
      </div>

      {/* ─── Hairline divider ─── */}
      <div className="cs-quote-divider" />

      {/* ─── Golden quote ─── */}
      <div className="cs-quote">
        <span className="cs-quote-mark">"</span>
        <p className="cs-quote-text">
          每任务选最强模型
          <br />
          <span className="cs-quote-accent">组合效率翻倍</span>
        </p>
        <span className="cs-quote-mark cs-quote-mark--end">"</span>
      </div>

      {/* ─── Visual: efficiency bars ─── */}
      <div className="cs-bars">
        <div className="cs-bar-group">
          <span className="cs-bar-label">单模型</span>
          <div className="cs-bar cs-bar--single">
            <div className="cs-bar-fill" />
          </div>
          <span className="cs-bar-value">1x</span>
        </div>
        <div className="cs-bar-group">
          <span className="cs-bar-label">组合使用</span>
          <div className="cs-bar cs-bar--combo">
            <div className="cs-bar-fill cs-bar-fill--accent" />
          </div>
          <span className="cs-bar-value cs-bar-value--accent">2x+</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 2: Closing — next episode + CTA
 * ═══════════════════════════════════════════════════════════════════ */

function CheatSheetClosing() {
  return (
    <div className="cs-scene cs-scene--closing">
      <Kicker text="NEXT · 下期预告" />

      {/* ─── Next episode card ─── */}
      <div className="cs-next-card">
        <div className="cs-next-card-top">
          <span className="cs-next-ep-label">EP. NEXT</span>
          <span className="cs-next-ep-line" />
        </div>
        <h3 className="cs-next-ep-title">
          AI Agent 实战搭建
        </h3>
        <p className="cs-next-ep-subtitle">
          从零开始搭一个能自动帮你处理邮件的 Agent
        </p>

        {/* ─── Mini flow diagram SVG ─── */}
        <div className="cs-next-flow">
          <svg viewBox="0 0 800 120" fill="none" className="cs-next-flow-svg">
            {/* Node 1: Email */}
            <g className="cs-flow-node cs-flow-node--1">
              <rect x="20" y="30" width="140" height="60" stroke="var(--accent)" strokeWidth="1.5" fill="var(--surface)" />
              <text x="90" y="55" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="16" fontWeight="200" fill="var(--text)">邮件到达</text>
              <text x="90" y="75" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--accent)" letterSpacing="0.1em">EMAIL</text>
            </g>

            {/* Arrow */}
            <line x1="160" y1="60" x2="220" y2="60" stroke="var(--accent)" strokeWidth="1.5" />
            <path d="M215 54 L225 60 L215 66" stroke="var(--accent)" strokeWidth="1.5" fill="none" />

            {/* Node 2: Agent */}
            <g className="cs-flow-node cs-flow-node--2">
              <rect x="220" y="20" width="180" height="80" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <text x="310" y="50" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="18" fontWeight="200" fill="var(--accent)">Agent 处理</text>
              <text x="310" y="72" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--accent)" letterSpacing="0.1em">CLASSIFY · REPLY · FORWARD</text>
              <text x="310" y="88" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="12" fontWeight="200" fill="var(--accent)" opacity="0.6">分类 / 回复 / 转发</text>
            </g>

            {/* Arrow */}
            <line x1="400" y1="60" x2="460" y2="60" stroke="var(--accent)" strokeWidth="1.5" />
            <path d="M455 54 L465 60 L455 66" stroke="var(--accent)" strokeWidth="1.5" fill="none" />

            {/* Node 3: Done */}
            <g className="cs-flow-node cs-flow-node--3">
              <rect x="460" y="30" width="140" height="60" stroke="var(--accent)" strokeWidth="1.5" fill="var(--surface)" />
              <text x="530" y="55" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="16" fontWeight="200" fill="var(--text)">自动完成</text>
              <text x="530" y="75" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--accent)" letterSpacing="0.1em">DONE</text>
            </g>

            {/* Decorative hairlines */}
            <line x1="640" y1="20" x2="640" y2="100" stroke="var(--rule)" strokeWidth="1" />
            <text x="680" y="50" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text-faint)" letterSpacing="0.1em">COMING</text>
            <text x="680" y="68" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text-faint)" letterSpacing="0.1em">SOON</text>
          </svg>
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div className="cs-cta">
        <span className="cs-cta-line" />
        <div className="cs-cta-body">
          <span className="cs-cta-label">互动</span>
          <span className="cs-cta-text">评论区聊你的模型搭配方式</span>
        </div>
        <span className="cs-cta-line" />
      </div>
    </div>
  );
}
