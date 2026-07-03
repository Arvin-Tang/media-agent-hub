import type { CSSProperties } from "react";

/**
 * Summary chapter — 3 steps
 *   step 0: Kitchen metaphor group 1 (LLM, Prompt, RAG)
 *   step 1: Kitchen metaphor group 2 (Agent, MCP, LoRA, Function Calling)
 *   step 2: Kitchen metaphor group 3 (Fine-tuning, RLHF, Multimodal) + closing
 */

// ─── 10 concept → kitchen role mappings ───
const MAPPINGS = [
  { cn: "大模型",  en: "LLM",              role: "万能菜刀",         icon: "knife",     group: 0 },
  { cn: "提示词",  en: "Prompt",            role: "菜谱临时备注",     icon: "note",      group: 0 },
  { cn: "检索增强", en: "RAG",              role: "随时翻的食谱书",   icon: "book",      group: 0 },
  { cn: "智能体",  en: "Agent",             role: "自动炒菜机器人",   icon: "robot",     group: 1 },
  { cn: "协议标准", en: "MCP",              role: "厨具接口标准",     icon: "plug",      group: 1 },
  { cn: "微调适配", en: "LoRA",             role: "专用刀片",         icon: "blade",     group: 1 },
  { cn: "函数调用", en: "Function Calling",  role: "伸手拿佐料",       icon: "hand",      group: 1 },
  { cn: "精调训练", en: "Fine-tuning",      role: "送厨师去进修",     icon: "school",    group: 2 },
  { cn: "反馈对齐", en: "RLHF",             role: "顾客反馈改进菜品", icon: "feedback",  group: 2 },
  { cn: "多模态",  en: "Multimodal",        role: "厨师又看又听又尝", icon: "senses",    group: 2 },
] as const;

export function Summary({ step }: { step: number }) {
  return (
    <div className="sm-stage">
      {step === 0 && <SceneGroup1 />}
      {step === 1 && <SceneGroup2 />}
      {step === 2 && <SceneGroup3 />}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Shared: Kicker
 * ═══════════════════════════════════════════════════════════════════ */

function Kicker({ text }: { text: string }) {
  return (
    <div className="sm-kicker">
      <span className="sm-kicker-line" />
      <span className="sm-kicker-text">{text}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Shared: Concept Card
 * ═══════════════════════════════════════════════════════════════════ */

function ConceptCard({
  mapping,
  index,
  animClass,
}: {
  mapping: (typeof MAPPINGS)[number];
  index: number;
  animClass: string;
}) {
  return (
    <div
      className={`sm-card ${animClass}`}
      style={{ animationDelay: `${0.15 + index * 0.14}s` } as CSSProperties}
    >
      <div className="sm-card-icon">
        <KitchenIcon name={mapping.icon} />
      </div>
      <div className="sm-card-body">
        <span className="sm-card-cn">{mapping.cn}</span>
        <span className="sm-card-en">{mapping.en}</span>
      </div>
      <div className="sm-card-line" />
      <div className="sm-card-role">{mapping.role}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 0: Kitchen metaphor group 1 — LLM, Prompt, RAG
 *         Stagger fade-in cards + kitchen SVG infographic
 * ═══════════════════════════════════════════════════════════════════ */

function SceneGroup1() {
  const group = MAPPINGS.filter((m) => m.group === 0);

  return (
    <div className="sm-scene">
      <Kicker text="SUMMARY · 厨房比喻 · 第一组" />

      <h2 className="sm-title">
        把 AI 系统比作做饭
      </h2>

      {/* ─── Kitchen infographic SVG ─── */}
      <div className="sm-infographic">
        <svg viewBox="0 0 1600 500" fill="none" className="sm-infographic-svg">
          {/* ── Item 1: Knife (LLM) ── */}
          <g className="sm-info-item sm-info-item--1">
            {/* Knife */}
            <g transform="translate(200, 120)">
              {/* Blade */}
              <path
                d="M0 40 L120 0 L135 15 L15 55 Z"
                stroke="var(--accent)"
                strokeWidth="2"
                fill="var(--accent-soft)"
              />
              {/* Handle */}
              <rect x="-15" y="48" width="40" height="20" stroke="var(--accent)" strokeWidth="2" fill="var(--surface)" />
              <line x1="-10" y1="52" x2="20" y2="52" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
              <line x1="-10" y1="56" x2="20" y2="56" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
              <line x1="-10" y1="60" x2="20" y2="60" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
              {/* Label line */}
              <line x1="60" y1="80" x2="60" y2="140" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
              <circle cx="60" cy="80" r="3" fill="var(--accent)" />
            </g>
            <text x="260" y="300" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="28" fontWeight="200" fill="var(--text)">万能菜刀</text>
            <text x="260" y="330" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" fill="var(--accent)" letterSpacing="0.1em">LLM</text>
          </g>

          {/* ── Item 2: Note (Prompt) ── */}
          <g className="sm-info-item sm-info-item--2">
            {/* Sticky note */}
            <g transform="translate(680, 100)">
              <path
                d="M0 0 L100 0 L120 20 L120 100 L0 100 Z"
                stroke="var(--accent)"
                strokeWidth="2"
                fill="var(--surface-2)"
              />
              {/* Folded corner */}
              <path d="M100 0 L120 20 L100 20 Z" stroke="var(--accent)" strokeWidth="1.5" fill="var(--surface)" opacity="0.6" />
              {/* Text lines on note */}
              <line x1="15" y1="35" x2="95" y2="35" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
              <line x1="15" y1="50" x2="85" y2="50" stroke="var(--accent)" strokeWidth="1.5" opacity="0.4" />
              <line x1="15" y1="65" x2="90" y2="65" stroke="var(--accent)" strokeWidth="1.5" opacity="0.4" />
              <line x1="15" y1="80" x2="70" y2="80" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
              {/* Label line */}
              <line x1="60" y1="100" x2="60" y2="160" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
              <circle cx="60" cy="100" r="3" fill="var(--accent)" />
            </g>
            <text x="740" y="300" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="28" fontWeight="200" fill="var(--text)">菜谱临时备注</text>
            <text x="740" y="330" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" fill="var(--accent)" letterSpacing="0.1em">PROMPT</text>
          </g>

          {/* ── Item 3: Book (RAG) ── */}
          <g className="sm-info-item sm-info-item--3">
            {/* Open book */}
            <g transform="translate(1120, 100)">
              {/* Left page */}
              <path
                d="M0 20 Q50 5 100 15 L100 95 Q50 85 0 95 Z"
                stroke="var(--accent)"
                strokeWidth="2"
                fill="var(--surface-2)"
              />
              {/* Right page */}
              <path
                d="M100 15 Q150 5 200 20 L200 95 Q150 85 100 95 Z"
                stroke="var(--accent)"
                strokeWidth="2"
                fill="var(--surface-2)"
              />
              {/* Spine */}
              <line x1="100" y1="15" x2="100" y2="95" stroke="var(--accent)" strokeWidth="2" />
              {/* Text lines left page */}
              <line x1="15" y1="35" x2="85" y2="32" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
              <line x1="15" y1="48" x2="85" y2="45" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              <line x1="15" y1="61" x2="80" y2="58" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              <line x1="15" y1="74" x2="85" y2="71" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              {/* Text lines right page */}
              <line x1="115" y1="32" x2="185" y2="35" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
              <line x1="115" y1="45" x2="185" y2="48" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              <line x1="120" y1="58" x2="185" y2="61" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              <line x1="115" y1="71" x2="185" y2="74" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              {/* Label line */}
              <line x1="100" y1="95" x2="100" y2="155" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
              <circle cx="100" cy="95" r="3" fill="var(--accent)" />
            </g>
            <text x="1220" y="300" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="28" fontWeight="200" fill="var(--text)">随时翻的食谱书</text>
            <text x="1220" y="330" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" fill="var(--accent)" letterSpacing="0.1em">RAG</text>
          </g>

          {/* ── Connector hairlines between items ── */}
          <line x1="380" y1="170" x2="620" y2="170" stroke="var(--rule)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="860" y1="170" x2="1060" y2="170" stroke="var(--rule)" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* ─── Cards row ─── */}
      <div className="sm-cards-row">
        {group.map((m, i) => (
          <ConceptCard key={m.en} mapping={m} index={i} animClass="sm-anim-stagger" />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 1: Kitchen metaphor group 2 — Agent, MCP, LoRA, Function Calling
 *         Slide-in from left + previous group dimmed
 * ═══════════════════════════════════════════════════════════════════ */

function SceneGroup2() {
  const group0 = MAPPINGS.filter((m) => m.group === 0);
  const group1 = MAPPINGS.filter((m) => m.group === 1);

  return (
    <div className="sm-scene">
      <Kicker text="SUMMARY · 厨房比喻 · 第二组" />

      <h2 className="sm-title">厨房里还有更多工具</h2>

      {/* ─── All cards: group 0 dimmed, group 1 active ─── */}
      <div className="sm-cards-grid">
        {/* Group 0 — dimmed, already shown */}
        {group0.map((m, i) => (
          <div key={m.en} className="sm-card sm-card--dimmed">
            <div className="sm-card-icon">
              <KitchenIcon name={m.icon} />
            </div>
            <div className="sm-card-body">
              <span className="sm-card-cn">{m.cn}</span>
              <span className="sm-card-en">{m.en}</span>
            </div>
            <div className="sm-card-line" />
            <div className="sm-card-role">{m.role}</div>
          </div>
        ))}

        {/* Group 1 — active, slide-in animation */}
        {group1.map((m, i) => (
          <ConceptCard
            key={m.en}
            mapping={m}
            index={i}
            animClass="sm-anim-slide-in"
          />
        ))}

        {/* Placeholders for group 2 — empty slots */}
        {MAPPINGS.filter((m) => m.group === 2).map((m) => (
          <div key={m.en} className="sm-card sm-card--placeholder">
            <div className="sm-card-icon sm-card-icon--empty" />
            <div className="sm-card-body">
              <span className="sm-card-cn sm-card-cn--empty">—</span>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Infographic: new kitchen items SVG ─── */}
      <div className="sm-infographic sm-infographic--compact">
        <svg viewBox="0 0 1600 360" fill="none" className="sm-infographic-svg">
          {/* ── Robot cook (Agent) ── */}
          <g className="sm-info-item sm-info-item--slide-1">
            <g transform="translate(140, 40)">
              {/* Robot head */}
              <rect x="20" y="0" width="60" height="50" rx="4" stroke="var(--accent)" strokeWidth="2" fill="var(--surface-2)" />
              <circle cx="35" cy="20" r="5" fill="var(--accent)" />
              <circle cx="65" cy="20" r="5" fill="var(--accent)" />
              <line x1="38" y1="38" x2="62" y2="38" stroke="var(--accent)" strokeWidth="2" />
              {/* Antenna */}
              <line x1="50" y1="0" x2="50" y2="-10" stroke="var(--accent)" strokeWidth="2" />
              <circle cx="50" cy="-12" r="3" fill="var(--accent)" />
              {/* Body */}
              <rect x="15" y="55" width="70" height="60" stroke="var(--accent)" strokeWidth="2" fill="var(--accent-soft)" />
              <line x1="25" y1="70" x2="75" y2="70" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              <line x1="25" y1="80" x2="75" y2="80" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              <line x1="25" y1="90" x2="75" y2="90" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              {/* Arms */}
              <line x1="15" y1="65" x2="-5" y2="90" stroke="var(--accent)" strokeWidth="2" />
              <line x1="85" y1="65" x2="105" y2="90" stroke="var(--accent)" strokeWidth="2" />
              {/* Pan */}
              <circle cx="105" cy="100" r="18" stroke="var(--accent)" strokeWidth="2" fill="var(--surface)" />
              <line x1="105" y1="118" x2="115" y2="135" stroke="var(--accent)" strokeWidth="2" />
            </g>
            <text x="190" y="220" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="24" fontWeight="200" fill="var(--text)">自动炒菜机器人</text>
            <text x="190" y="248" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fill="var(--accent)" letterSpacing="0.1em">AGENT</text>
          </g>

          {/* ── MCP: unified plug (MCP) ── */}
          <g className="sm-info-item sm-info-item--slide-2">
            <g transform="translate(500, 40)">
              {/* Interface bar */}
              <rect x="0" y="30" width="120" height="8" stroke="var(--accent)" strokeWidth="2" fill="var(--accent-soft)" />
              {/* Plug 1 (from left) */}
              <rect x="10" y="10" width="20" height="20" stroke="var(--accent)" strokeWidth="2" fill="var(--surface-2)" />
              <line x1="15" y1="30" x2="15" y2="38" stroke="var(--accent)" strokeWidth="2" />
              <line x1="25" y1="30" x2="25" y2="38" stroke="var(--accent)" strokeWidth="2" />
              {/* Plug 2 (center) */}
              <rect x="50" y="10" width="20" height="20" stroke="var(--accent)" strokeWidth="2" fill="var(--surface-2)" />
              <line x1="55" y1="30" x2="55" y2="38" stroke="var(--accent)" strokeWidth="2" />
              <line x1="65" y1="30" x2="65" y2="38" stroke="var(--accent)" strokeWidth="2" />
              {/* Plug 3 (right) */}
              <rect x="90" y="10" width="20" height="20" stroke="var(--accent)" strokeWidth="2" fill="var(--surface-2)" />
              <line x1="95" y1="30" x2="95" y2="38" stroke="var(--accent)" strokeWidth="2" />
              <line x1="105" y1="30" x2="105" y2="38" stroke="var(--accent)" strokeWidth="2" />
              {/* Socket (below bar) */}
              <rect x="20" y="60" width="80" height="50" stroke="var(--accent)" strokeWidth="2" fill="var(--surface-2)" />
              <circle cx="45" cy="85" r="8" stroke="var(--accent)" strokeWidth="1.5" fill="var(--surface)" />
              <circle cx="75" cy="85" r="8" stroke="var(--accent)" strokeWidth="1.5" fill="var(--surface)" />
            </g>
            <text x="560" y="220" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="24" fontWeight="200" fill="var(--text)">厨具接口标准</text>
            <text x="560" y="248" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fill="var(--accent)" letterSpacing="0.1em">MCP</text>
          </g>

          {/* ── LoRA: blade attachment ── */}
          <g className="sm-info-item sm-info-item--slide-3">
            <g transform="translate(860, 40)">
              {/* Base knife */}
              <path d="M0 60 L80 20 L90 30 L10 70 Z" stroke="var(--text-mute)" strokeWidth="1.5" fill="var(--surface-2)" opacity="0.4" />
              {/* Attachable blade */}
              <path d="M30 50 L110 10 L125 22 L45 62 Z" stroke="var(--accent)" strokeWidth="2" fill="var(--accent-soft)" />
              {/* Attachment dots */}
              <circle cx="55" cy="40" r="3" fill="var(--accent)" />
              <circle cx="80" cy="28" r="3" fill="var(--accent)" />
              {/* Connector lines */}
              <line x1="55" y1="40" x2="55" y2="55" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
              <line x1="80" y1="28" x2="80" y2="43" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
            </g>
            <text x="910" y="220" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="24" fontWeight="200" fill="var(--text)">专用刀片</text>
            <text x="910" y="248" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fill="var(--accent)" letterSpacing="0.1em">LORA</text>
          </g>

          {/* ── Function Calling: mechanical hand ── */}
          <g className="sm-info-item sm-info-item--slide-4">
            <g transform="translate(1220, 30)">
              {/* Arm */}
              <rect x="40" y="0" width="20" height="50" stroke="var(--accent)" strokeWidth="2" fill="var(--surface-2)" />
              <line x1="42" y1="10" x2="58" y2="10" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              <line x1="42" y1="20" x2="58" y2="20" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              <line x1="42" y1="30" x2="58" y2="30" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              <line x1="42" y1="40" x2="58" y2="40" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              {/* Hand */}
              <path d="M35 50 L35 75 L30 80 L30 90 L40 85 L40 95 L48 90 L48 100 L55 95 L55 105 L62 100 L62 80 L65 75 L65 50 Z"
                    stroke="var(--accent)" strokeWidth="2" fill="var(--accent-soft)" strokeLinejoin="miter" />
              {/* Spice jar */}
              <rect x="55" y="95" width="30" height="45" stroke="var(--accent)" strokeWidth="2" fill="var(--surface-2)" />
              <rect x="58" y="100" width="24" height="8" stroke="var(--accent)" strokeWidth="1" fill="var(--accent-soft)" />
              <line x1="60" y1="118" x2="80" y2="118" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              <line x1="60" y1="126" x2="80" y2="126" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
            </g>
            <text x="1280" y="220" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="24" fontWeight="200" fill="var(--text)">伸手拿佐料</text>
            <text x="1280" y="248" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fill="var(--accent)" letterSpacing="0.1em">FUNCTION CALLING</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 2: Kitchen metaphor group 3 + closing
 *         Scale-in cards + finale "2026 年 AI 全貌"
 * ═══════════════════════════════════════════════════════════════════ */

function SceneGroup3() {
  const group0 = MAPPINGS.filter((m) => m.group === 0);
  const group1 = MAPPINGS.filter((m) => m.group === 1);
  const group2 = MAPPINGS.filter((m) => m.group === 2);

  return (
    <div className="sm-scene sm-scene--finale">
      <Kicker text="SUMMARY · 厨房比喻 · 完整版" />

      <h2 className="sm-title sm-title--finale">十个概念，一个厨房</h2>

      {/* ─── Full 5×2 grid: all 10 concepts ─── */}
      <div className="sm-cards-grid sm-cards-grid--all">
        {/* Group 0 — dimmed */}
        {group0.map((m) => (
          <div key={m.en} className="sm-card sm-card--dimmed">
            <div className="sm-card-icon">
              <KitchenIcon name={m.icon} />
            </div>
            <div className="sm-card-body">
              <span className="sm-card-cn">{m.cn}</span>
              <span className="sm-card-en">{m.en}</span>
            </div>
            <div className="sm-card-line" />
            <div className="sm-card-role">{m.role}</div>
          </div>
        ))}

        {/* Group 1 — dimmed */}
        {group1.map((m) => (
          <div key={m.en} className="sm-card sm-card--dimmed">
            <div className="sm-card-icon">
              <KitchenIcon name={m.icon} />
            </div>
            <div className="sm-card-body">
              <span className="sm-card-cn">{m.cn}</span>
              <span className="sm-card-en">{m.en}</span>
            </div>
            <div className="sm-card-line" />
            <div className="sm-card-role">{m.role}</div>
          </div>
        ))}

        {/* Group 2 — active, scale-in */}
        {group2.map((m, i) => (
          <ConceptCard
            key={m.en}
            mapping={m}
            index={i}
            animClass="sm-anim-scale-in"
          />
        ))}
      </div>

      {/* ─── Finale: "2026 年 AI 全貌" ─── */}
      <div className="sm-finale">
        <span className="sm-finale-line sm-finale-line--l" />
        <span className="sm-finale-text">2026 年 AI 全貌</span>
        <span className="sm-finale-line sm-finale-line--r" />
      </div>

      {/* ─── Bottom: next episode ─── */}
      <div className="sm-next">
        <span className="sm-next-label">下期预告</span>
        <span className="sm-next-text">多模型组合技巧 — 不同 AI 怎么搭配使用，效率翻倍</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Kitchen icon set (minimal line-art SVG)
 * ═══════════════════════════════════════════════════════════════════ */

function KitchenIcon({ name }: { name: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none" as const,
  };

  switch (name) {
    case "knife":
      return (
        <svg {...common}>
          <path d="M4 20 L20 4 L24 8 L8 24 Z" stroke="var(--accent)" strokeWidth="1.2" />
          <line x1="4" y1="20" x2="8" y2="24" stroke="var(--accent)" strokeWidth="1.2" />
        </svg>
      );
    case "note":
      return (
        <svg {...common}>
          <rect x="6" y="4" width="16" height="20" stroke="var(--accent)" strokeWidth="1.2" />
          <line x1="9" y1="10" x2="19" y2="10" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
          <line x1="9" y1="14" x2="19" y2="14" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
          <line x1="9" y1="18" x2="15" y2="18" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 6 L14 4 L14 24 L4 22 Z" stroke="var(--accent)" strokeWidth="1.2" />
          <path d="M24 6 L14 4 L14 24 L24 22 Z" stroke="var(--accent)" strokeWidth="1.2" />
          <line x1="14" y1="4" x2="14" y2="24" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
        </svg>
      );
    case "robot":
      return (
        <svg {...common}>
          <rect x="6" y="8" width="16" height="14" stroke="var(--accent)" strokeWidth="1.2" />
          <line x1="14" y1="4" x2="14" y2="8" stroke="var(--accent)" strokeWidth="1.2" />
          <circle cx="14" cy="3" r="1.5" fill="var(--accent)" />
          <circle cx="11" cy="14" r="1.5" fill="var(--accent)" />
          <circle cx="17" cy="14" r="1.5" fill="var(--accent)" />
          <line x1="10" y1="19" x2="18" y2="19" stroke="var(--accent)" strokeWidth="1.2" />
        </svg>
      );
    case "plug":
      return (
        <svg {...common}>
          <rect x="8" y="4" width="12" height="8" stroke="var(--accent)" strokeWidth="1.2" />
          <line x1="11" y1="12" x2="11" y2="16" stroke="var(--accent)" strokeWidth="1.2" />
          <line x1="17" y1="12" x2="17" y2="16" stroke="var(--accent)" strokeWidth="1.2" />
          <rect x="9" y="16" width="10" height="8" stroke="var(--accent)" strokeWidth="1.2" />
        </svg>
      );
    case "blade":
      return (
        <svg {...common}>
          <path d="M4 14 L18 6 L22 10 L8 22 Z" stroke="var(--accent)" strokeWidth="1.2" />
          <line x1="6" y1="18" x2="14" y2="10" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
          <line x1="8" y1="20" x2="16" y2="12" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
        </svg>
      );
    case "hand":
      return (
        <svg {...common}>
          <path
            d="M8 12 L8 6 L10 6 L10 11 L12 11 L12 4 L14 4 L14 11 L16 11 L16 6 L18 6 L18 12 L20 14 L20 20 L8 20 L6 16 Z"
            stroke="var(--accent)"
            strokeWidth="1.2"
            strokeLinejoin="miter"
          />
        </svg>
      );
    case "school":
      return (
        <svg {...common}>
          <path d="M4 12 L14 6 L24 12 L14 18 Z" stroke="var(--accent)" strokeWidth="1.2" />
          <line x1="8" y1="14" x2="8" y2="20" stroke="var(--accent)" strokeWidth="1.2" />
          <line x1="20" y1="14" x2="20" y2="20" stroke="var(--accent)" strokeWidth="1.2" />
          <line x1="8" y1="20" x2="20" y2="20" stroke="var(--accent)" strokeWidth="1.2" />
        </svg>
      );
    case "feedback":
      return (
        <svg {...common}>
          <path d="M4 6 L24 6 L24 18 L14 18 L10 22 L10 18 L4 18 Z" stroke="var(--accent)" strokeWidth="1.2" />
          <line x1="8" y1="10" x2="20" y2="10" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
          <line x1="8" y1="14" x2="16" y2="14" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case "senses":
      return (
        <svg {...common}>
          <circle cx="14" cy="14" r="8" stroke="var(--accent)" strokeWidth="1.2" />
          <circle cx="11" cy="12" r="1.5" fill="var(--accent)" />
          <circle cx="17" cy="12" r="1.5" fill="var(--accent)" />
          <path d="M10 17 Q14 20 18 17" stroke="var(--accent)" strokeWidth="1.2" fill="none" />
          <line x1="14" y1="2" x2="14" y2="5" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
          <line x1="5" y1="6" x2="7" y2="8" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
          <line x1="23" y1="6" x2="21" y2="8" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
        </svg>
      );
    default:
      return null;
  }
}
