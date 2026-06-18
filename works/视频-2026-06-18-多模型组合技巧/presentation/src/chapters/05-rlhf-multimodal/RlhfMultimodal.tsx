import type { CSSProperties } from "react";

/**
 * RlhfMultimodal chapter — 5 steps
 *   step 0: RLHF concept intro — brain + balance scale
 *   step 1: RLHF flow — generate → rank → absorb → fine-tune
 *   step 2: RLTF vs RLHF — side-by-side comparison
 *   step 3: Multimodal intro — four-quadrant capability grid
 *   step 4: Multimodal trend — "see" vs "understand" evolution
 */

export function RlhfMultimodal({ step }: { step: number }) {
  return (
    <div className="rm-stage">
      {step === 0 && <RlhfIntro />}
      {step === 1 && <RlhfFlow />}
      {step === 2 && <RltfCompare />}
      {step === 3 && <MultimodalGrid />}
      {step === 4 && <MultimodalTrend />}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Shared: Kicker
 * ═══════════════════════════════════════════════════════════════════ */

function Kicker({ text }: { text: string }) {
  return (
    <div className="rm-kicker">
      <span className="rm-kicker-line" />
      <span className="rm-kicker-text">{text}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 0: RLHF concept intro — brain + balance scale
 * ═══════════════════════════════════════════════════════════════════ */

function RlhfIntro() {
  return (
    <div className="rm-intro">
      <Kicker text="RLHF · REINFORCEMENT LEARNING FROM HUMAN FEEDBACK" />

      <div className="rm-intro-body">
        {/* ─── Left: hero text ─── */}
        <div className="rm-intro-left">
          <div className="rm-intro-en">RLHF</div>
          <div className="rm-intro-cn">基于人类反馈的<br />强化学习</div>
          <div className="rm-intro-desc">
            大模型知识面很广，<br />
            但它不知道什么该说什么不该说。
          </div>
          <div className="rm-intro-tag">
            <span className="rm-intro-tag-label">核心目标</span>
            <span className="rm-intro-tag-value">教 AI 价值观</span>
          </div>
        </div>

        {/* ─── Right: brain + balance scale SVG ─── */}
        <div className="rm-intro-right">
          <svg className="rm-intro-svg" viewBox="0 0 480 420" fill="none">
            {/* ── Brain outline ── */}
            <g className="rm-brain-group">
              <path
                d="M160 120
                   C120 120 100 150 100 180
                   C80 185 70 210 80 235
                   C65 250 65 280 85 295
                   C80 320 100 345 130 345
                   C140 365 170 370 190 355
                   C210 370 240 365 250 345
                   C280 350 310 330 305 300
                   C325 285 325 255 305 240
                   C320 215 305 190 280 185
                   C275 155 245 130 210 130
                   C195 115 175 115 160 120 Z"
                stroke="var(--accent)"
                strokeWidth="1.5"
                fill="var(--accent-soft)"
              />
              {/* Brain folds */}
              <path d="M140 170 Q160 180 150 200" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.4" />
              <path d="M180 150 Q200 165 190 190" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.4" />
              <path d="M220 160 Q240 175 230 200" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.4" />
              <path d="M130 230 Q160 240 150 260" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.4" />
              <path d="M200 240 Q220 250 210 275" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.4" />
              <path d="M260 220 Q280 235 270 260" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.4" />
              {/* Brain label */}
              <text
                x="195" y="260" textAnchor="middle"
                fontFamily="var(--font-mono)" fontSize="13" fontWeight="600"
                fill="var(--accent)" letterSpacing="0.1em"
              >
                AI
              </text>
            </g>

            {/* ── Balance scale ── */}
            <g className="rm-scale-group">
              {/* Vertical post */}
              <line x1="240" y1="60" x2="240" y2="100" stroke="var(--accent)" strokeWidth="2" />
              {/* Horizontal beam */}
              <line x1="120" y1="80" x2="360" y2="80" stroke="var(--accent)" strokeWidth="2" />
              {/* Beam pivot */}
              <circle cx="240" cy="80" r="5" fill="var(--accent)" />
              {/* Left pan: "该说" */}
              <g className="rm-scale-left">
                <line x1="120" y1="80" x2="120" y2="110" stroke="var(--accent)" strokeWidth="1" />
                <path d="M95 110 L145 110 L135 130 L105 130 Z" stroke="var(--accent)" strokeWidth="1.5" fill="var(--surface)" />
                <text x="120" y="124" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="16" fontWeight="200" fill="var(--text)">该说</text>
              </g>
              {/* Right pan: "不该说" */}
              <g className="rm-scale-right">
                <line x1="360" y1="80" x2="360" y2="110" stroke="var(--accent)" strokeWidth="1" />
                <path d="M335 110 L385 110 L375 130 L345 130 Z" stroke="var(--accent)" strokeWidth="1.5" fill="var(--surface)" />
                <text x="360" y="124" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="16" fontWeight="200" fill="var(--text-mute)">不该说</text>
              </g>
              {/* Base */}
              <line x1="210" y1="380" x2="270" y2="380" stroke="var(--accent)" strokeWidth="2" />
            </g>

            {/* ── Connection line from scale to brain ── */}
            <line x1="240" y1="100" x2="240" y2="120" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          </svg>

          <div className="rm-intro-caption">
            知识广 · 不知分寸 → RLHF 教价值观
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 1: RLHF flow — generate → rank → absorb → fine-tune
 * ═══════════════════════════════════════════════════════════════════ */

function RlhfFlow() {
  return (
    <div className="rm-flow">
      <Kicker text="RLHF FLOW · 流程" />

      <div className="rm-flow-title">让 AI 从人类排序中学习</div>

      {/* ─── Horizontal flow ─── */}
      <div className="rm-flow-canvas">
        <svg className="rm-flow-svg" viewBox="0 0 1600 500" fill="none">
          {/* ── Node 1: AI generates 3 answers ── */}
          <g className="rm-flow-node rm-flow-node--1">
            <rect x="40" y="120" width="280" height="260" stroke="var(--rule)" strokeWidth="1" fill="var(--surface-2)" />
            <text x="180" y="100" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fontWeight="600" fill="var(--accent)" letterSpacing="0.1em">STEP 01</text>
            <text x="180" y="155" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="22" fontWeight="200" fill="var(--text)">AI 生成多个答案</text>
            {/* Answer cards */}
            <rect x="60" y="175" width="240" height="36" stroke="var(--accent)" strokeWidth="1" fill="var(--surface)" />
            <text x="75" y="198" fontFamily="var(--font-mono)" fontSize="13" fill="var(--accent)" fontWeight="600">A</text>
            <text x="95" y="198" fontFamily="var(--font-body)" fontSize="13" fill="var(--text)">Paris is the capital.</text>
            <rect x="60" y="220" width="240" height="36" stroke="var(--text-faint)" strokeWidth="1" fill="var(--surface)" />
            <text x="75" y="243" fontFamily="var(--font-mono)" fontSize="13" fill="var(--text-faint)" fontWeight="600">B</text>
            <text x="95" y="243" fontFamily="var(--font-body)" fontSize="13" fill="var(--text-mute)">France has no capital.</text>
            <rect x="60" y="265" width="240" height="36" stroke="var(--text-faint)" strokeWidth="1" fill="var(--surface)" />
            <text x="75" y="288" fontFamily="var(--font-mono)" fontSize="13" fill="var(--text-faint)" fontWeight="600">C</text>
            <text x="95" y="288" fontFamily="var(--font-body)" fontSize="13" fill="var(--text-mute)">The capital is Lyon.</text>
            <text x="180" y="335" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text-faint)" letterSpacing="0.1em">GENERATE</text>
          </g>

          {/* Arrow 1→2 */}
          <g className="rm-flow-arrow rm-flow-arrow--1">
            <line x1="330" y1="250" x2="430" y2="250" stroke="var(--accent)" strokeWidth="1.5" />
            <path d="M422 242 L438 250 L422 258" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
          </g>

          {/* ── Node 2: Human ranking ── */}
          <g className="rm-flow-node rm-flow-node--2">
            <rect x="440" y="120" width="280" height="260" stroke="var(--rule)" strokeWidth="1" fill="var(--surface-2)" />
            <text x="580" y="100" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fontWeight="600" fill="var(--accent)" letterSpacing="0.1em">STEP 02</text>
            <text x="580" y="155" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="22" fontWeight="200" fill="var(--text)">人类排序反馈</text>
            {/* Ranking visualization */}
            <g>
              <rect x="460" y="175" width="240" height="36" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <text x="475" y="198" fontFamily="var(--font-mono)" fontSize="13" fill="var(--accent)" fontWeight="600">1</text>
              <text x="495" y="198" fontFamily="var(--font-body)" fontSize="13" fill="var(--text)">A — Paris is correct</text>
              <text x="688" y="198" textAnchor="end" fontFamily="var(--font-mono)" fontSize="16" fill="var(--accent)" fontWeight="700">✓</text>
            </g>
            <g>
              <rect x="460" y="220" width="240" height="36" stroke="var(--text-faint)" strokeWidth="1" fill="var(--surface)" />
              <text x="475" y="243" fontFamily="var(--font-mono)" fontSize="13" fill="var(--text-faint)" fontWeight="600">2</text>
              <text x="495" y="243" fontFamily="var(--font-body)" fontSize="13" fill="var(--text-mute)">C — Lyon is wrong</text>
              <text x="688" y="243" textAnchor="end" fontFamily="var(--font-mono)" fontSize="16" fill="var(--text-faint)" fontWeight="700">✗</text>
            </g>
            <g>
              <rect x="460" y="265" width="240" height="36" stroke="var(--text-faint)" strokeWidth="1" fill="var(--surface)" />
              <text x="475" y="288" fontFamily="var(--font-mono)" fontSize="13" fill="var(--text-faint)" fontWeight="600">3</text>
              <text x="495" y="288" fontFamily="var(--font-body)" fontSize="13" fill="var(--text-mute)">B — No capital</text>
              <text x="688" y="288" textAnchor="end" fontFamily="var(--font-mono)" fontSize="16" fill="var(--text-faint)" fontWeight="700">✗</text>
            </g>
            <text x="580" y="335" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text-faint)" letterSpacing="0.1em">RANK</text>
          </g>

          {/* Arrow 2→3 */}
          <g className="rm-flow-arrow rm-flow-arrow--2">
            <line x1="730" y1="250" x2="830" y2="250" stroke="var(--accent)" strokeWidth="1.5" />
            <path d="M822 242 L838 250 L822 258" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
          </g>

          {/* ── Node 3: AI absorbs feedback (brain with glow) ── */}
          <g className="rm-flow-node rm-flow-node--3">
            <rect x="840" y="120" width="280" height="260" stroke="var(--rule)" strokeWidth="1" fill="var(--surface-2)" />
            <text x="980" y="100" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fontWeight="600" fill="var(--accent)" letterSpacing="0.1em">STEP 03</text>
            <text x="980" y="155" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="22" fontWeight="200" fill="var(--text)">AI 吸收反馈</text>
            {/* Mini brain */}
            <g className="rm-flow-mini-brain">
              <circle cx="980" cy="230" r="50" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <circle cx="980" cy="230" r="35" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.4" />
              <circle cx="980" cy="230" r="20" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.3" />
              <circle cx="980" cy="230" r="6" fill="var(--accent)" />
              <text x="980" y="234" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--surface)" fontWeight="700">AI</text>
            </g>
            {/* Feedback arrows returning */}
            <path d="M830 250 Q835 200 870 210" stroke="var(--accent)" strokeWidth="1" fill="none" strokeDasharray="3 3" opacity="0.5" />
            <text x="980" y="335" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text-faint)" letterSpacing="0.1em">ABSORB</text>
          </g>

          {/* Arrow 3→4 */}
          <g className="rm-flow-arrow rm-flow-arrow--3">
            <line x1="1130" y1="250" x2="1230" y2="250" stroke="var(--accent)" strokeWidth="1.5" />
            <path d="M1222 242 L1238 250 L1222 258" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
          </g>

          {/* ── Node 4: Model fine-tuned (glowing brain) ── */}
          <g className="rm-flow-node rm-flow-node--4">
            <rect x="1240" y="120" width="280" height="260" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
            <text x="1380" y="100" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fontWeight="600" fill="var(--accent)" letterSpacing="0.1em">STEP 04</text>
            <text x="1380" y="155" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="22" fontWeight="200" fill="var(--text)">模型微调</text>
            {/* Glowing brain */}
            <g className="rm-flow-glow-brain">
              <circle cx="1380" cy="230" r="55" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" className="rm-flow-glow-ring rm-flow-glow-ring--1" />
              <circle cx="1380" cy="230" r="40" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.5" />
              <circle cx="1380" cy="230" r="25" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.3" />
              <circle cx="1380" cy="230" r="8" fill="var(--accent)" />
              <text x="1380" y="234" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--surface)" fontWeight="700">AI</text>
            </g>
            <text x="1380" y="335" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--accent)" letterSpacing="0.1em">FINE-TUNE</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 2: RLTF vs RLHF — side-by-side comparison
 * ═══════════════════════════════════════════════════════════════════ */

function RltfCompare() {
  return (
    <div className="rm-compare">
      <Kicker text="RLHF vs RLTF · 对比" />

      <div className="rm-compare-body">
        {/* ─── Left: RLHF ─── */}
        <div className="rm-compare-side rm-compare-side--left">
          <div className="rm-compare-header">
            <span className="rm-compare-tag">RLHF</span>
            <span className="rm-compare-sub">人类排序</span>
          </div>

          <div className="rm-compare-viz">
            {/* Human labeling visualization */}
            <svg viewBox="0 0 400 280" fill="none" className="rm-compare-svg">
              {/* Person icon */}
              <g className="rm-compare-person">
                <circle cx="60" cy="50" r="18" stroke="var(--text-mute)" strokeWidth="1.5" fill="var(--surface-2)" />
                <line x1="60" y1="68" x2="60" y2="110" stroke="var(--text-mute)" strokeWidth="1.5" />
                <line x1="40" y1="85" x2="80" y2="85" stroke="var(--text-mute)" strokeWidth="1.5" />
                <line x1="60" y1="110" x2="45" y2="140" stroke="var(--text-mute)" strokeWidth="1.5" />
                <line x1="60" y1="110" x2="75" y2="140" stroke="var(--text-mute)" strokeWidth="1.5" />
              </g>
              <text x="60" y="170" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text-faint)" letterSpacing="0.1em">HUMAN</text>

              {/* Label cards */}
              <g>
                <rect x="120" y="30" width="260" height="32" stroke="var(--rule)" strokeWidth="1" fill="var(--surface-2)" />
                <text x="135" y="51" fontFamily="var(--font-body)" fontSize="13" fill="var(--text)">Answer A — good</text>
                <text x="362" y="51" textAnchor="end" fontFamily="var(--font-mono)" fontSize="14" fill="var(--accent)" fontWeight="700">✓</text>
              </g>
              <g>
                <rect x="120" y="72" width="260" height="32" stroke="var(--rule)" strokeWidth="1" fill="var(--surface-2)" />
                <text x="135" y="93" fontFamily="var(--font-body)" fontSize="13" fill="var(--text-mute)">Answer C — wrong</text>
                <text x="362" y="93" textAnchor="end" fontFamily="var(--font-mono)" fontSize="14" fill="var(--text-faint)" fontWeight="700">✗</text>
              </g>
              <g>
                <rect x="120" y="114" width="260" height="32" stroke="var(--rule)" strokeWidth="1" fill="var(--surface-2)" />
                <text x="135" y="135" fontFamily="var(--font-body)" fontSize="13" fill="var(--text-mute)">Answer B — wrong</text>
                <text x="362" y="135" textAnchor="end" fontFamily="var(--font-mono)" fontSize="14" fill="var(--text-faint)" fontWeight="700">✗</text>
              </g>

              {/* Speed indicator */}
              <g>
                <text x="200" y="190" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text-faint)" letterSpacing="0.1em">SPEED</text>
                <rect x="120" y="200" width="260" height="8" stroke="var(--rule)" strokeWidth="1" fill="var(--surface-2)" />
                <rect x="120" y="200" width="60" height="8" fill="var(--text-faint)" opacity="0.4" />
                <text x="200" y="230" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="14" fontWeight="200" fill="var(--text-mute)">慢 · 一条条人工标注</text>
              </g>
            </svg>
          </div>
        </div>

        {/* ─── Center: VS divider ─── */}
        <div className="rm-compare-vs">
          <span className="rm-compare-vs-text">VS</span>
        </div>

        {/* ─── Right: RLTF ─── */}
        <div className="rm-compare-side rm-compare-side--right">
          <div className="rm-compare-header">
            <span className="rm-compare-tag rm-compare-tag--accent">RLTF</span>
            <span className="rm-compare-sub">工具反馈</span>
          </div>

          <div className="rm-compare-viz">
            {/* Code editor + compiler visualization */}
            <svg viewBox="0 0 400 280" fill="none" className="rm-compare-svg">
              {/* Code editor */}
              <g>
                <rect x="10" y="10" width="380" height="100" stroke="var(--rule)" strokeWidth="1" fill="var(--surface-2)" />
                {/* Editor header */}
                <rect x="10" y="10" width="380" height="22" fill="var(--surface)" stroke="var(--rule)" strokeWidth="1" />
                <circle cx="22" cy="21" r="3" fill="var(--text-faint)" opacity="0.4" />
                <circle cx="32" cy="21" r="3" fill="var(--text-faint)" opacity="0.4" />
                <circle cx="42" cy="21" r="3" fill="var(--text-faint)" opacity="0.4" />
                <text x="200" y="26" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-mute)">code.py</text>
                {/* Code lines */}
                <text x="20" y="52" fontFamily="var(--font-mono)" fontSize="12" fill="var(--accent)" fontWeight="600">def</text>
                <text x="42" y="52" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text)">hello():</text>
                <text x="36" y="70" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text)">print(</text>
                <text x="78" y="70" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text-mute)">"Hello"</text>
                <text x="124" y="70" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text)">)</text>
                <text x="20" y="88" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text)">hello()</text>
              </g>

              {/* Compiler arrow */}
              <g>
                <line x1="200" y1="118" x2="200" y2="140" stroke="var(--accent)" strokeWidth="1.5" />
                <path d="M193 133 L200 145 L207 133" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
                <text x="220" y="135" fontFamily="var(--font-mono)" fontSize="11" fill="var(--accent)" letterSpacing="0.1em">COMPILE</text>
              </g>

              {/* Results */}
              <g>
                <rect x="10" y="155" width="180" height="40" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
                <text x="22" y="172" fontFamily="var(--font-mono)" fontSize="14" fill="var(--accent)" fontWeight="700">✓</text>
                <text x="38" y="172" fontFamily="var(--font-mono)" fontSize="12" fill="var(--accent)">编译通过</text>
                <text x="22" y="188" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-mute)">exit 0 · auto feedback</text>
              </g>
              <g>
                <rect x="210" y="155" width="180" height="40" stroke="var(--text-faint)" strokeWidth="1" fill="var(--surface-2)" />
                <text x="222" y="172" fontFamily="var(--font-mono)" fontSize="14" fill="var(--text-faint)" fontWeight="700">✗</text>
                <text x="238" y="172" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text-mute)">SyntaxError</text>
                <text x="222" y="188" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-faint)">exit 1 · auto feedback</text>
              </g>

              {/* Speed indicator */}
              <g>
                <text x="200" y="225" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--accent)" letterSpacing="0.1em">SPEED</text>
                <rect x="20" y="235" width="360" height="8" stroke="var(--rule)" strokeWidth="1" fill="var(--surface-2)" />
                <rect x="20" y="235" width="340" height="8" fill="var(--accent)" />
                <text x="200" y="265" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="14" fontWeight="200" fill="var(--accent)">快 · 自动验证</text>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* ─── Bottom note ─── */}
      <div className="rm-compare-note">
        <span className="rm-compare-note-line" />
        <span className="rm-compare-note-text">效率高太多了</span>
        <span className="rm-compare-note-line" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 3: Multimodal intro — four-quadrant capability grid
 * ═══════════════════════════════════════════════════════════════════ */

function MultimodalGrid() {
  return (
    <div className="rm-mm">
      <Kicker text="MULTIMODAL · 多模态" />

      <div className="rm-mm-title">AI 不仅能处理文字</div>

      {/* ─── Four-quadrant grid ─── */}
      <div className="rm-mm-grid">
        {/* Cell 1: Text → Image */}
        <div className="rm-mm-cell rm-mm-cell--t2i">
          <div className="rm-mm-icon">
            <svg viewBox="0 0 120 80" fill="none" className="rm-mm-svg">
              {/* Text lines */}
              <line x1="4" y1="20" x2="28" y2="20" stroke="var(--accent)" strokeWidth="1.5" />
              <line x1="4" y1="30" x2="24" y2="30" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6" />
              <line x1="4" y1="40" x2="26" y2="40" stroke="var(--accent)" strokeWidth="1.5" opacity="0.4" />
              {/* Arrow */}
              <path d="M34 30 L48 30" stroke="var(--accent)" strokeWidth="1.5" />
              <path d="M44 25 L50 30 L44 35" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
              {/* Image frame */}
              <rect x="54" y="12" width="60" height="44" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <circle cx="70" cy="28" r="6" fill="var(--accent)" opacity="0.5" />
              <path d="M58 50 L74 34 L92 50" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
              <path d="M82 50 L98 38 L114 50" stroke="var(--accent)" strokeWidth="1.5" fill="none" opacity="0.5" />
            </svg>
          </div>
          <div className="rm-mm-label">
            <span className="rm-mm-label-cn">文生图</span>
            <span className="rm-mm-label-en">Text → Image</span>
          </div>
        </div>

        {/* Cell 2: Image → Text */}
        <div className="rm-mm-cell rm-mm-cell--i2t">
          <div className="rm-mm-icon">
            <svg viewBox="0 0 120 80" fill="none" className="rm-mm-svg">
              {/* Image frame */}
              <rect x="4" y="12" width="60" height="44" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <circle cx="20" cy="28" r="6" fill="var(--accent)" opacity="0.5" />
              <path d="M8 50 L24 34 L42 50" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
              <path d="M32 50 L48 38 L64 50" stroke="var(--accent)" strokeWidth="1.5" fill="none" opacity="0.5" />
              {/* Arrow */}
              <path d="M70 30 L84 30" stroke="var(--accent)" strokeWidth="1.5" />
              <path d="M80 25 L86 30 L80 35" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
              {/* Text lines */}
              <line x1="90" y1="20" x2="116" y2="20" stroke="var(--accent)" strokeWidth="1.5" />
              <line x1="90" y1="30" x2="112" y2="30" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6" />
              <line x1="90" y1="40" x2="114" y2="40" stroke="var(--accent)" strokeWidth="1.5" opacity="0.4" />
            </svg>
          </div>
          <div className="rm-mm-label">
            <span className="rm-mm-label-cn">图生文</span>
            <span className="rm-mm-label-en">Image → Text</span>
          </div>
        </div>

        {/* Cell 3: Voice */}
        <div className="rm-mm-cell rm-mm-cell--voice">
          <div className="rm-mm-icon">
            <svg viewBox="0 0 120 80" fill="none" className="rm-mm-svg">
              {/* Mic */}
              <rect x="50" y="10" width="20" height="36" rx="10" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <path d="M38 38 Q38 58 60 58 Q82 58 82 38" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
              <line x1="60" y1="58" x2="60" y2="70" stroke="var(--accent)" strokeWidth="1.5" />
              <line x1="48" y1="70" x2="72" y2="70" stroke="var(--accent)" strokeWidth="1.5" />
              {/* Waveform bars left */}
              <line x1="8" y1="34" x2="8" y2="46" stroke="var(--accent)" strokeWidth="1.5" className="rm-mm-wave rm-mm-wave--1" />
              <line x1="14" y1="28" x2="14" y2="52" stroke="var(--accent)" strokeWidth="1.5" className="rm-mm-wave rm-mm-wave--2" />
              <line x1="20" y1="32" x2="20" y2="48" stroke="var(--accent)" strokeWidth="1.5" className="rm-mm-wave rm-mm-wave--3" />
              {/* Waveform bars right */}
              <line x1="100" y1="28" x2="100" y2="52" stroke="var(--accent)" strokeWidth="1.5" className="rm-mm-wave rm-mm-wave--4" />
              <line x1="106" y1="34" x2="106" y2="46" stroke="var(--accent)" strokeWidth="1.5" className="rm-mm-wave rm-mm-wave--5" />
              <line x1="112" y1="32" x2="112" y2="48" stroke="var(--accent)" strokeWidth="1.5" className="rm-mm-wave rm-mm-wave--6" />
            </svg>
          </div>
          <div className="rm-mm-label">
            <span className="rm-mm-label-cn">语音交互</span>
            <span className="rm-mm-label-en">Voice</span>
          </div>
        </div>

        {/* Cell 4: Video */}
        <div className="rm-mm-cell rm-mm-cell--video">
          <div className="rm-mm-icon">
            <svg viewBox="0 0 120 80" fill="none" className="rm-mm-svg">
              {/* Player frame */}
              <rect x="4" y="10" width="112" height="52" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              {/* Play button */}
              <path d="M52 24 L52 48 L72 36 Z" fill="var(--accent)" />
              {/* Progress bar */}
              <line x1="4" y1="68" x2="96" y2="68" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
              <line x1="4" y1="68" x2="40" y2="68" stroke="var(--accent)" strokeWidth="2" />
              <circle cx="4" cy="68" r="2" fill="var(--accent)" />
              <circle cx="116" cy="68" r="2" fill="var(--accent)" opacity="0.3" />
              {/* Scene markers */}
              <line x1="20" y1="62" x2="20" y2="66" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
              <line x1="50" y1="62" x2="50" y2="66" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
              <line x1="80" y1="62" x2="80" y2="66" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>
          <div className="rm-mm-label">
            <span className="rm-mm-label-cn">视频理解</span>
            <span className="rm-mm-label-en">Video Understanding</span>
          </div>
        </div>
      </div>

      {/* ─── Bottom: tool references ─── */}
      <div className="rm-mm-tools">
        <span className="rm-mm-tools-label">典型应用</span>
        <span className="rm-mm-tools-value">DALL·E</span>
        <span className="rm-mm-tools-sep">/</span>
        <span className="rm-mm-tools-value">Midjourney</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 4: Multimodal trend — "see" vs "understand" evolution
 * ═══════════════════════════════════════════════════════════════════ */

function MultimodalTrend() {
  return (
    <div className="rm-trend">
      <Kicker text="2026 趋势 · MULTIMODAL EVOLUTION" />

      <div className="rm-trend-body">
        {/* ─── Left: "能看懂" ─── */}
        <div className="rm-trend-side rm-trend-side--left">
          <div className="rm-trend-stage-label">2024 — 能看懂</div>
          <div className="rm-trend-cat">
            <svg viewBox="0 0 200 200" fill="none" className="rm-trend-cat-svg">
              {/* Simple cat silhouette */}
              <g stroke="var(--text-mute)" strokeWidth="1.5" fill="var(--surface-2)">
                {/* Head */}
                <path d="M60 80 L50 60 L65 70 L80 55 L95 70 L110 60 L100 80 Z" />
                {/* Body */}
                <ellipse cx="80" cy="130" rx="35" ry="40" />
                {/* Ears */}
                <path d="M55 75 L50 55 L62 68" fill="var(--surface-2)" />
                <path d="M105 75 L110 55 L98 68" fill="var(--surface-2)" />
                {/* Eyes */}
                <circle cx="70" cy="85" r="3" fill="var(--text-mute)" stroke="none" />
                <circle cx="90" cy="85" r="3" fill="var(--text-mute)" stroke="none" />
                {/* Whiskers */}
                <line x1="60" y1="95" x2="48" y2="93" />
                <line x1="60" y1="100" x2="48" y2="102" />
                <line x1="100" y1="95" x2="112" y2="93" />
                <line x1="100" y1="100" x2="112" y2="102" />
                {/* Tail */}
                <path d="M110 140 Q135 130 130 100" fill="none" />
              </g>
            </svg>
          </div>
          {/* Label tag */}
          <div className="rm-trend-tag">
            <span className="rm-trend-tag-bracket">[</span>
            <span className="rm-trend-tag-text">这是一只猫</span>
            <span className="rm-trend-tag-bracket">]</span>
          </div>
          <div className="rm-trend-desc">简单标签识别</div>
        </div>

        {/* ─── Center: evolution arrow ─── */}
        <div className="rm-trend-arrow-wrap">
          <svg viewBox="0 0 200 120" fill="none" className="rm-trend-arrow-svg">
            {/* Dashed line */}
            <line x1="20" y1="60" x2="160" y2="60" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="6 4" />
            {/* Arrow head */}
            <path d="M155 48 L180 60 L155 72" stroke="var(--accent)" strokeWidth="2" fill="none" />
            {/* Label */}
            <text x="100" y="40" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fill="var(--accent)" letterSpacing="0.15em">EVOLUTION</text>
            <text x="100" y="90" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="16" fontWeight="200" fill="var(--text-mute)">进化</text>
          </svg>
        </div>

        {/* ─── Right: "能理解" ─── */}
        <div className="rm-trend-side rm-trend-side--right">
          <div className="rm-trend-stage-label rm-trend-stage-label--accent">2026 — 能理解</div>
          <div className="rm-trend-cat rm-trend-cat--rich">
            {/* Ambient glow behind cat */}
            <div className="rm-trend-glow" />
            <svg viewBox="0 0 200 200" fill="none" className="rm-trend-cat-svg rm-trend-cat-svg--rich">
              {/* Sun/warmth rays */}
              <g opacity="0.15">
                <circle cx="100" cy="100" r="90" stroke="var(--accent)" strokeWidth="1" fill="var(--accent-soft)" />
                <circle cx="100" cy="100" r="75" stroke="var(--accent)" strokeWidth="0.5" fill="none" />
              </g>
              {/* Cat with more detail */}
              <g stroke="var(--accent)" strokeWidth="1.5" fill="var(--surface)">
                {/* Head */}
                <path d="M60 80 L50 60 L65 70 L80 55 L95 70 L110 60 L100 80 Z" />
                {/* Body */}
                <ellipse cx="80" cy="130" rx="35" ry="40" />
                {/* Ears */}
                <path d="M55 75 L50 55 L62 68" fill="var(--surface)" />
                <path d="M105 75 L110 55 L98 68" fill="var(--surface)" />
                {/* Eyes — relaxed (curved lines) */}
                <path d="M67 86 Q70 82 73 86" fill="none" />
                <path d="M87 86 Q90 82 93 86" fill="none" />
                {/* Whiskers */}
                <line x1="60" y1="95" x2="48" y2="93" />
                <line x1="60" y1="100" x2="48" y2="102" />
                <line x1="100" y1="95" x2="112" y2="93" />
                <line x1="100" y1="100" x2="112" y2="102" />
                {/* Tail — curled, relaxed */}
                <path d="M110 140 Q140 135 135 105 Q130 90 115 95" fill="none" />
              </g>
              {/* Sun */}
              <circle cx="160" cy="40" r="12" fill="var(--accent)" opacity="0.2" />
              <circle cx="160" cy="40" r="7" fill="var(--accent)" opacity="0.3" />
            </svg>
          </div>
          {/* Rich understanding tags */}
          <div className="rm-trend-tags">
            <span className="rm-trend-rich-tag">猫很放松</span>
            <span className="rm-trend-rich-tag">阳光很好</span>
            <span className="rm-trend-rich-tag">温暖午后</span>
          </div>
          <div className="rm-trend-desc rm-trend-desc--accent">情绪 + 氛围理解</div>
        </div>
      </div>
    </div>
  );
}
