/**
 * Pitfalls chapter — 5 steps
 *   step 0: "四个坑" title + 坑一：上下文丢失 — broken chain visualization
 *   step 1: 坑二：成本叠加 — stacking API bills
 *   step 2: 坑三：过度工程化 — sledgehammer for a fly
 *   step 3: 坑四：选择困难症 — model selection vortex
 *   step 4: 判断公式 — decision formula
 */

export function Pitfalls({ step }: { step: number }) {
  return (
    <div className="pf-stage">
      {step === 0 && <PitfallContextLoss />}
      {step === 1 && <PitfallCostStack />}
      {step === 2 && <PitfallOverEngineer />}
      {step === 3 && <PitfallChoiceParalysis />}
      {step === 4 && <PitfallFormula />}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Shared: Kicker
 * ═══════════════════════════════════════════════════════════════════ */

function Kicker({ text }: { text: string }) {
  return (
    <div className="pf-kicker">
      <span className="pf-kicker-line" />
      <span className="pf-kicker-text">{text}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 0: "四个坑" title + 坑一：上下文丢失 — broken chain
 * ═══════════════════════════════════════════════════════════════════ */

function PitfallContextLoss() {
  return (
    <div className="pf-pitfall pf-context-loss">
      <Kicker text="PITFALLS · 避坑指南" />

      <div className="pf-context-body">
        {/* ─── Left: title + pitfall number ─── */}
        <div className="pf-context-left">
          <div className="pf-pitfall-count">
            <span className="pf-pitfall-count-num">4</span>
            <span className="pf-pitfall-count-label">个坑</span>
          </div>
          <div className="pf-pitfall-title">上下文丢失</div>
          <div className="pf-pitfall-num">坑 01</div>
          <div className="pf-pitfall-desc">
            模型之间传递信息时，<br />
            上下文断裂 — 后一个模型<br />
            不知道前一个模型聊了什么
          </div>
          <div className="pf-pitfall-fix">
            <span className="pf-pitfall-fix-label">解法</span>
            <span className="pf-pitfall-fix-value">打包完整上下文传递</span>
          </div>
        </div>

        {/* ─── Right: broken chain SVG ─── */}
        <div className="pf-context-right">
          <svg className="pf-chain-svg" viewBox="0 0 720 440" fill="none">
            {/* ── Claude node ── */}
            <g className="pf-chain-node pf-chain-node--claude">
              <rect x="20" y="160" width="200" height="120" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <text x="120" y="195" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fontWeight="600" fill="var(--accent)" letterSpacing="0.15em">MODEL A</text>
              <text x="120" y="225" textAnchor="middle" fontFamily="var(--font-display-en)" fontSize="28" fontWeight="200" fill="var(--text)">Claude</text>
              <text x="120" y="255" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="15" fontWeight="200" fill="var(--text-mute)">写初稿</text>
            </g>

            {/* ── Chain link 1 (intact, left half) ── */}
            <g className="pf-chain-link pf-chain-link--1">
              <path d="M220 200 Q240 200 240 220 Q240 240 260 240" stroke="var(--accent)" strokeWidth="2" fill="none" />
              <path d="M220 240 Q240 240 240 220 Q240 200 260 200" stroke="var(--accent)" strokeWidth="2" fill="none" />
            </g>

            {/* ── Break zone ── */}
            <g className="pf-chain-break">
              {/* Gap in the middle */}
              <line x1="280" y1="180" x2="320" y2="260" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
              <line x1="290" y1="170" x2="330" y2="250" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              {/* X mark at break */}
              <g className="pf-chain-x">
                <line x1="345" y1="205" x2="375" y2="235" stroke="var(--text)" strokeWidth="2.5" />
                <line x1="375" y1="205" x2="345" y2="235" stroke="var(--text)" strokeWidth="2.5" />
              </g>
              <text x="360" y="185" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" fill="var(--text-mute)" letterSpacing="0.15em">CONTEXT LOST</text>
              <text x="360" y="265" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="14" fontWeight="200" fill="var(--text-faint)">上下文断裂</text>
            </g>

            {/* ── Chain link 2 (broken, right half) ── */}
            <g className="pf-chain-link pf-chain-link--2">
              <path d="M380 200 Q400 200 400 220 Q400 240 420 240" stroke="var(--text-faint)" strokeWidth="2" fill="none" opacity="0.4" />
              <path d="M380 240 Q400 240 400 220 Q400 200 420 200" stroke="var(--text-faint)" strokeWidth="2" fill="none" opacity="0.4" />
            </g>

            {/* ── GPT-4o node ── */}
            <g className="pf-chain-node pf-chain-node--gpt">
              <rect x="420" y="160" width="200" height="120" stroke="var(--text-faint)" strokeWidth="1" fill="var(--surface-2)" />
              <text x="520" y="195" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fontWeight="600" fill="var(--text-mute)" letterSpacing="0.15em">MODEL B</text>
              <text x="520" y="225" textAnchor="middle" fontFamily="var(--font-display-en)" fontSize="28" fontWeight="200" fill="var(--text-mute)">GPT-4o</text>
              <text x="520" y="255" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="15" fontWeight="200" fill="var(--text-faint)">技术校对</text>
            </g>

            {/* ── Context bubble from Claude (lost) ── */}
            <g className="pf-context-bubble pf-context-bubble--lost">
              <rect x="40" y="40" width="180" height="70" stroke="var(--accent)" strokeWidth="1" fill="var(--surface)" strokeDasharray="3 3" opacity="0.5" />
              <text x="50" y="62" fontFamily="var(--font-mono)" fontSize="10" fill="var(--accent)" opacity="0.6" letterSpacing="0.1em">CONVERSATION HISTORY</text>
              <line x1="50" y1="72" x2="210" y2="72" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
              <line x1="50" y1="82" x2="195" y2="82" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
              <line x1="50" y1="92" x2="200" y2="92" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
              <text x="130" y="110" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="11" fill="var(--accent)" opacity="0.5">Claude 的对话记忆</text>
            </g>

            {/* ── Arrow from bubble toward GPT-4o (dashed = not arriving) ── */}
            <g className="pf-context-arrow">
              <path d="M230 75 Q300 75 360 75 Q420 75 420 160" stroke="var(--text-faint)" strokeWidth="1.5" strokeDasharray="6 4" fill="none" opacity="0.4" />
              <circle cx="230" cy="75" r="3" fill="var(--text-faint)" opacity="0.4" />
              <text x="325" y="55" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-faint)" letterSpacing="0.1em">NOT TRANSFERRED</text>
            </g>
          </svg>

          <div className="pf-context-caption">
            <span className="pf-caption-bracket">[</span>
            <span className="pf-caption-text">Claude 写的初稿传给 GPT-4o → GPT-4o 不知道之前聊了什么</span>
            <span className="pf-caption-bracket">]</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 1: 坑二：成本叠加 — stacking API bills
 * ═══════════════════════════════════════════════════════════════════ */

function PitfallCostStack() {
  return (
    <div className="pf-pitfall pf-cost-stack">
      <Kicker text="PITFALL 02 · 成本叠加" />

      <div className="pf-cost-body">
        {/* ─── Left: title ─── */}
        <div className="pf-cost-left">
          <div className="pf-pitfall-num">坑 02</div>
          <div className="pf-pitfall-title">成本叠加</div>
          <div className="pf-pitfall-desc">
            多模型 = 多份 API 费用<br />
            一个任务用三个模型，<br />
            成本就是三倍
          </div>
          <div className="pf-pitfall-fix">
            <span className="pf-pitfall-fix-label">原则</span>
            <span className="pf-pitfall-fix-value">简单任务单模型够用</span>
          </div>
        </div>

        {/* ─── Right: stacking bills SVG ─── */}
        <div className="pf-cost-right">
          <svg className="pf-cost-svg" viewBox="0 0 560 440" fill="none">
            {/* ── Bill 1 (bottom) ── */}
            <g className="pf-bill pf-bill--1">
              <rect x="80" y="280" width="320" height="100" stroke="var(--rule)" strokeWidth="1" fill="var(--surface)" />
              <text x="100" y="308" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" fill="var(--text-faint)" letterSpacing="0.15em">API BILL · MODEL A</text>
              <text x="100" y="340" fontFamily="var(--font-display-en)" fontSize="22" fontWeight="200" fill="var(--text-mute)">Claude</text>
              <text x="370" y="340" textAnchor="end" fontFamily="var(--font-display-en)" fontSize="28" fontWeight="200" fill="var(--text-mute)">$0.12</text>
              <line x1="100" y1="355" x2="380" y2="355" stroke="var(--rule)" strokeWidth="1" />
              <text x="100" y="370" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-faint)" letterSpacing="0.1em">PER REQUEST</text>
            </g>

            {/* ── Bill 2 (middle) ── */}
            <g className="pf-bill pf-bill--2">
              <rect x="100" y="180" width="320" height="100" stroke="var(--rule)" strokeWidth="1" fill="var(--surface)" />
              <text x="120" y="208" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" fill="var(--text-faint)" letterSpacing="0.15em">API BILL · MODEL B</text>
              <text x="120" y="240" fontFamily="var(--font-display-en)" fontSize="22" fontWeight="200" fill="var(--text-mute)">GPT-4o</text>
              <text x="390" y="240" textAnchor="end" fontFamily="var(--font-display-en)" fontSize="28" fontWeight="200" fill="var(--text-mute)">$0.15</text>
              <line x1="120" y1="255" x2="400" y2="255" stroke="var(--rule)" strokeWidth="1" />
              <text x="120" y="270" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-faint)" letterSpacing="0.1em">PER REQUEST</text>
            </g>

            {/* ── Bill 3 (top) ── */}
            <g className="pf-bill pf-bill--3">
              <rect x="120" y="80" width="320" height="100" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <text x="140" y="108" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" fill="var(--accent)" letterSpacing="0.15em">API BILL · MODEL C</text>
              <text x="140" y="140" fontFamily="var(--font-display-en)" fontSize="22" fontWeight="200" fill="var(--accent)">DeepSeek</text>
              <text x="410" y="140" textAnchor="end" fontFamily="var(--font-display-en)" fontSize="28" fontWeight="200" fill="var(--accent)">$0.08</text>
              <line x1="140" y1="155" x2="420" y2="155" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
              <text x="140" y="170" fontFamily="var(--font-mono)" fontSize="10" fill="var(--accent)" opacity="0.6" letterSpacing="0.1em">PER REQUEST</text>
            </g>

            {/* ── Total bracket ── */}
            <g className="pf-cost-total">
              <path d="M460 80 L470 80 L470 380 L460 380" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
              <text x="490" y="210" fontFamily="var(--font-mono)" fontSize="12" fontWeight="600" fill="var(--accent)" letterSpacing="0.15em">TOTAL</text>
              <text x="490" y="240" fontFamily="var(--font-display-en)" fontSize="36" fontWeight="200" fill="var(--accent)">$0.35</text>
              <text x="490" y="262" fontFamily="var(--font-display-cn)" fontSize="13" fontWeight="200" fill="var(--text-mute)">三倍费用</text>
            </g>

            {/* ── Versus: single model ── */}
            <g className="pf-cost-versus">
              <line x1="80" y1="410" x2="540" y2="410" stroke="var(--rule)" strokeWidth="1" />
              <text x="80" y="432" fontFamily="var(--font-display-cn)" fontSize="15" fontWeight="200" fill="var(--text-mute)">单模型</text>
              <text x="180" y="432" fontFamily="var(--font-display-en)" fontSize="18" fontWeight="200" fill="var(--text-mute)">$0.12</text>
              <text x="280" y="432" fontFamily="var(--font-mono)" fontSize="14" fill="var(--text-faint)">vs</text>
              <text x="320" y="432" fontFamily="var(--font-display-cn)" fontSize="15" fontWeight="200" fill="var(--accent)">三模型组合</text>
              <text x="440" y="432" fontFamily="var(--font-display-en)" fontSize="18" fontWeight="200" fill="var(--accent)">$0.35</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 2: 坑三：过度工程化 — sledgehammer for a fly
 * ═══════════════════════════════════════════════════════════════════ */

function PitfallOverEngineer() {
  return (
    <div className="pf-pitfall pf-over-engineer">
      <Kicker text="PITFALL 03 · 过度工程化" />

      <div className="pf-oe-body">
        {/* ─── Left: title ─── */}
        <div className="pf-oe-left">
          <div className="pf-pitfall-num">坑 03</div>
          <div className="pf-pitfall-title">过度工程化</div>
          <div className="pf-pitfall-desc">
            简单问题走三个模型投票<br />
            组合是手段，不是目的
          </div>
          <div className="pf-pitfall-fix">
            <span className="pf-pitfall-fix-label">原则</span>
            <span className="pf-pitfall-fix-value">先问：真的需要多模型吗？</span>
          </div>
        </div>

        {/* ─── Right: sledgehammer SVG ─── */}
        <div className="pf-oe-right">
          <svg className="pf-oe-svg" viewBox="0 0 600 440" fill="none">
            {/* ── Simple question (the fly) ── */}
            <g className="pf-oe-question">
              <rect x="30" y="200" width="180" height="60" stroke="var(--text-faint)" strokeWidth="1" fill="var(--surface-2)" />
              <text x="120" y="225" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="14" fontWeight="200" fill="var(--text-mute)">简单问题</text>
              <text x="120" y="248" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text-faint)" letterSpacing="0.1em">"What is 2+2?"</text>
            </g>

            {/* ── Three voting arrows (the sledgehammer) ── */}
            <g className="pf-oe-arrows">
              {/* Arrow to Model A */}
              <path d="M210 215 L290 120" stroke="var(--text-faint)" strokeWidth="1" opacity="0.5" />
              <path d="M285 115 L295 120 L290 130" stroke="var(--text-faint)" strokeWidth="1" fill="none" opacity="0.5" />

              {/* Arrow to Model B */}
              <path d="M210 230 L290 230" stroke="var(--text-faint)" strokeWidth="1" opacity="0.5" />
              <path d="M285 225 L295 230 L290 235" stroke="var(--text-faint)" strokeWidth="1" fill="none" opacity="0.5" />

              {/* Arrow to Model C */}
              <path d="M210 245 L290 340" stroke="var(--text-faint)" strokeWidth="1" opacity="0.5" />
              <path d="M285 335 L295 340 L290 350" stroke="var(--text-faint)" strokeWidth="1" fill="none" opacity="0.5" />
            </g>

            {/* ── Three model boxes (overkill voting) ── */}
            <g className="pf-oe-models">
              {/* Model A */}
              <g className="pf-oe-model pf-oe-model--a">
                <rect x="290" y="90" width="140" height="60" stroke="var(--text-faint)" strokeWidth="1" fill="var(--surface)" />
                <text x="360" y="115" textAnchor="middle" fontFamily="var(--font-display-en)" fontSize="18" fontWeight="200" fill="var(--text-mute)">GPT-4o</text>
                <text x="360" y="138" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text-faint)">= 4</text>
              </g>
              {/* Model B */}
              <g className="pf-oe-model pf-oe-model--b">
                <rect x="290" y="200" width="140" height="60" stroke="var(--text-faint)" strokeWidth="1" fill="var(--surface)" />
                <text x="360" y="225" textAnchor="middle" fontFamily="var(--font-display-en)" fontSize="18" fontWeight="200" fill="var(--text-mute)">Claude</text>
                <text x="360" y="248" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text-faint)">= 4</text>
              </g>
              {/* Model C */}
              <g className="pf-oe-model pf-oe-model--c">
                <rect x="290" y="310" width="140" height="60" stroke="var(--text-faint)" strokeWidth="1" fill="var(--surface)" />
                <text x="360" y="335" textAnchor="middle" fontFamily="var(--font-display-en)" fontSize="18" fontWeight="200" fill="var(--text-mute)">DeepSeek</text>
                <text x="360" y="358" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text-faint)">= 4</text>
              </g>
            </g>

            {/* ── Consensus arrow ── */}
            <g className="pf-oe-consensus">
              <path d="M430 120 L490 200" stroke="var(--text-faint)" strokeWidth="1" opacity="0.4" />
              <path d="M430 230 L490 230" stroke="var(--text-faint)" strokeWidth="1" opacity="0.4" />
              <path d="M430 340 L490 260" stroke="var(--text-faint)" strokeWidth="1" opacity="0.4" />
            </g>

            {/* ── Result (overkill) ── */}
            <g className="pf-oe-result">
              <rect x="490" y="200" width="90" height="60" stroke="var(--text-faint)" strokeWidth="1" fill="var(--surface)" strokeDasharray="3 3" />
              <text x="535" y="225" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="13" fontWeight="200" fill="var(--text-faint)">共识</text>
              <text x="535" y="248" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fill="var(--text-faint)">= 4</text>
            </g>

            {/* ── Overkill stamp ── */}
            <g className="pf-oe-stamp">
              <rect x="180" y="370" width="240" height="50" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <text x="300" y="395" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="18" fontWeight="200" fill="var(--accent)" letterSpacing="0.1em">杀鸡用牛刀</text>
              <text x="300" y="412" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--accent)" opacity="0.6" letterSpacing="0.15em">OVERKILL</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 3: 坑四：选择困难症 — model selection vortex
 * ═══════════════════════════════════════════════════════════════════ */

function PitfallChoiceParalysis() {
  return (
    <div className="pf-pitfall pf-choice-paralysis">
      <Kicker text="PITFALL 04 · 选择困难症" />

      <div className="pf-cp-body">
        {/* ─── Left: title ─── */}
        <div className="pf-cp-left">
          <div className="pf-pitfall-num">坑 04</div>
          <div className="pf-pitfall-title">选择困难症</div>
          <div className="pf-pitfall-desc">
            2026 年模型太多<br />
            每次都重新选 = 浪费时间
          </div>
          <div className="pf-pitfall-fix">
            <span className="pf-pitfall-fix-label">解法</span>
            <span className="pf-pitfall-fix-value">固定 2-3 个主力模型</span>
          </div>
        </div>

        {/* ─── Right: vortex SVG ─── */}
        <div className="pf-cp-right">
          <svg className="pf-cp-svg" viewBox="0 0 560 440" fill="none">
            {/* ── Vortex spiral ── */}
            <g className="pf-cp-vortex">
              <circle cx="280" cy="200" r="160" stroke="var(--rule)" strokeWidth="1" fill="none" opacity="0.3" />
              <circle cx="280" cy="200" r="120" stroke="var(--rule)" strokeWidth="1" fill="none" opacity="0.4" />
              <circle cx="280" cy="200" r="80" stroke="var(--rule)" strokeWidth="1" fill="none" opacity="0.5" />
              <circle cx="280" cy="200" r="40" stroke="var(--rule)" strokeWidth="1" fill="none" opacity="0.6" />
            </g>

            {/* ── Model names scattered in vortex ── */}
            <g className="pf-cp-models">
              {/* Outer ring */}
              <text x="120" y="100" fontFamily="var(--font-display-en)" fontSize="14" fontWeight="200" fill="var(--text-faint)" opacity="0.5">GPT-4o</text>
              <text x="400" y="80" fontFamily="var(--font-display-en)" fontSize="14" fontWeight="200" fill="var(--text-faint)" opacity="0.5">Claude</text>
              <text x="80" y="280" fontFamily="var(--font-display-en)" fontSize="14" fontWeight="200" fill="var(--text-faint)" opacity="0.5">Gemini</text>
              <text x="420" y="300" fontFamily="var(--font-display-en)" fontSize="14" fontWeight="200" fill="var(--text-faint)" opacity="0.5">DeepSeek</text>

              {/* Middle ring */}
              <text x="180" y="130" fontFamily="var(--font-display-en)" fontSize="13" fontWeight="200" fill="var(--text-faint)" opacity="0.4">Llama 4</text>
              <text x="360" y="140" fontFamily="var(--font-display-en)" fontSize="13" fontWeight="200" fill="var(--text-faint)" opacity="0.4">Mistral</text>
              <text x="170" y="270" fontFamily="var(--font-display-en)" fontSize="13" fontWeight="200" fill="var(--text-faint)" opacity="0.4">Qwen 3</text>
              <text x="370" y="260" fontFamily="var(--font-display-en)" fontSize="13" fontWeight="200" fill="var(--text-faint)" opacity="0.4">Grok 3</text>

              {/* Inner ring */}
              <text x="230" y="165" fontFamily="var(--font-display-en)" fontSize="12" fontWeight="200" fill="var(--text-faint)" opacity="0.3">Command R+</text>
              <text x="320" y="180" fontFamily="var(--font-display-en)" fontSize="12" fontWeight="200" fill="var(--text-faint)" opacity="0.3">Yi-Lightning</text>
              <text x="235" y="245" fontFamily="var(--font-display-en)" fontSize="12" fontWeight="200" fill="var(--text-faint)" opacity="0.3">GLM-5</text>
              <text x="315" y="235" fontFamily="var(--font-display-en)" fontSize="12" fontWeight="200" fill="var(--text-faint)" opacity="0.3">MiniMax</text>
            </g>

            {/* ── Center: confused person ── */}
            <g className="pf-cp-center">
              <circle cx="280" cy="200" r="28" stroke="var(--text-mute)" strokeWidth="1.5" fill="var(--surface)" />
              {/* Question mark face */}
              <text x="280" y="208" textAnchor="middle" fontFamily="var(--font-display-en)" fontSize="32" fontWeight="200" fill="var(--text-mute)">?</text>
              {/* Spinning arrows around */}
              <path d="M240 170 Q220 200 240 230" stroke="var(--text-faint)" strokeWidth="1" fill="none" opacity="0.4" />
              <path d="M320 170 Q340 200 320 230" stroke="var(--text-faint)" strokeWidth="1" fill="none" opacity="0.4" />
            </g>

            {/* ── Solution: 3 fixed models ── */}
            <g className="pf-cp-solution">
              <line x1="40" y1="390" x2="520" y2="390" stroke="var(--accent)" strokeWidth="1" />
              <text x="40" y="415" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" fill="var(--accent)" letterSpacing="0.15em">FIXED · 主力阵容</text>

              {/* Three model chips */}
              <g className="pf-cp-chip pf-cp-chip--1">
                <rect x="180" y="400" width="90" height="32" stroke="var(--accent)" strokeWidth="1" fill="var(--accent-soft)" />
                <text x="225" y="421" textAnchor="middle" fontFamily="var(--font-display-en)" fontSize="14" fontWeight="200" fill="var(--accent)">Claude</text>
              </g>
              <text x="280" y="421" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-faint)">写作</text>
              <g className="pf-cp-chip pf-cp-chip--2">
                <rect x="310" y="400" width="90" height="32" stroke="var(--accent)" strokeWidth="1" fill="var(--accent-soft)" />
                <text x="355" y="421" textAnchor="middle" fontFamily="var(--font-display-en)" fontSize="14" fontWeight="200" fill="var(--accent)">GPT-4o</text>
              </g>
              <text x="410" y="421" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-faint)">代码</text>
              <g className="pf-cp-chip pf-cp-chip--3">
                <rect x="430" y="400" width="90" height="32" stroke="var(--accent)" strokeWidth="1" fill="var(--accent-soft)" />
                <text x="475" y="421" textAnchor="middle" fontFamily="var(--font-display-en)" fontSize="13" fontWeight="200" fill="var(--accent)">DeepSeek</text>
              </g>
              <text x="530" y="421" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-faint)">推理</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 * Step 4: 判断公式 — decision formula
 * ═══════════════════════════════════════════════════════════════════ */

function PitfallFormula() {
  return (
    <div className="pf-pitfall pf-formula">
      <Kicker text="DECISION · 判断标准" />

      <div className="pf-formula-body">
        {/* ─── Question ─── */}
        <div className="pf-formula-question">
          <span className="pf-formula-q-label">问自己</span>
          <span className="pf-formula-q-text">任务涉及多种能力维度？</span>
        </div>

        {/* ─── Formula diagram ─── */}
        <div className="pf-formula-diagram">
          <svg className="pf-formula-svg" viewBox="0 0 900 300" fill="none">
            {/* ── Left: input box ── */}
            <g className="pf-formula-input">
              <rect x="20" y="100" width="240" height="100" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <text x="140" y="135" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="18" fontWeight="200" fill="var(--accent)">多种能力维度</text>
              <text x="140" y="165" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--accent)" opacity="0.7" letterSpacing="0.1em">MULTI-DIMENSION?</text>
              <text x="140" y="185" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="13" fontWeight="200" fill="var(--text-mute)">写作 + 代码 + 图片</text>
            </g>

            {/* ── Branch arrows ── */}
            <g className="pf-formula-branches">
              {/* Yes branch (up) */}
              <path d="M260 130 L340 80" stroke="var(--accent)" strokeWidth="1.5" />
              <path d="M335 72 L345 80 L338 90" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
              <text x="290" y="95" fontFamily="var(--font-mono)" fontSize="14" fontWeight="600" fill="var(--accent)">YES</text>

              {/* No branch (down) */}
              <path d="M260 170 L340 220" stroke="var(--text-mute)" strokeWidth="1.5" />
              <path d="M335 228 L345 220 L338 210" stroke="var(--text-mute)" strokeWidth="1.5" fill="none" />
              <text x="290" y="210" fontFamily="var(--font-mono)" fontSize="14" fontWeight="600" fill="var(--text-mute)">NO</text>
            </g>

            {/* ── Yes result ── */}
            <g className="pf-formula-yes">
              <rect x="360" y="40" width="280" height="80" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <text x="500" y="75" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="28" fontWeight="200" fill="var(--accent)">组合</text>
              <text x="500" y="100" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--accent)" opacity="0.7" letterSpacing="0.15em">MULTI-MODEL</text>
              {/* Model icons */}
              <circle cx="440" cy="80" r="6" fill="var(--accent)" opacity="0.6" />
              <circle cx="460" cy="80" r="6" fill="var(--accent)" opacity="0.4" />
              <circle cx="480" cy="80" r="6" fill="var(--accent)" opacity="0.3" />
            </g>

            {/* ── No result ── */}
            <g className="pf-formula-no">
              <rect x="360" y="180" width="280" height="80" stroke="var(--text-faint)" strokeWidth="1" fill="var(--surface-2)" />
              <text x="500" y="215" textAnchor="middle" fontFamily="var(--font-display-cn)" fontSize="28" fontWeight="200" fill="var(--text-mute)">单模型</text>
              <text x="500" y="240" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text-faint)" letterSpacing="0.15em">SINGLE-MODEL</text>
              {/* Single model icon */}
              <circle cx="440" cy="220" r="6" fill="var(--text-mute)" opacity="0.4" />
            </g>

            {/* ── Right arrow to final ── */}
            <g className="pf-formula-final-arrow">
              <path d="M640 80 L720 80" stroke="var(--accent)" strokeWidth="1.5" />
              <path d="M715 73 L725 80 L715 87" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
              <path d="M640 220 L720 220" stroke="var(--text-mute)" strokeWidth="1.5" />
              <path d="M715 213 L725 220 L715 227" stroke="var(--text-mute)" strokeWidth="1.5" fill="none" />
            </g>

            {/* ── Final outcomes ── */}
            <g className="pf-formula-final-yes">
              <text x="740" y="70" fontFamily="var(--font-display-cn)" fontSize="14" fontWeight="200" fill="var(--accent)">效率翻倍</text>
              <text x="740" y="90" fontFamily="var(--font-display-cn)" fontSize="14" fontWeight="200" fill="var(--accent)">各擅其长</text>
            </g>
            <g className="pf-formula-final-no">
              <text x="740" y="210" fontFamily="var(--font-display-cn)" fontSize="14" fontWeight="200" fill="var(--text-mute)">省时省钱</text>
              <text x="740" y="230" fontFamily="var(--font-display-cn)" fontSize="14" fontWeight="200" fill="var(--text-mute)">简单高效</text>
            </g>
          </svg>
        </div>

        {/* ─── Bottom rule ─── */}
        <div className="pf-formula-rule">
          <span className="pf-formula-rule-line" />
          <span className="pf-formula-rule-text">组合是手段，不是目的</span>
          <span className="pf-formula-rule-line" />
        </div>
      </div>
    </div>
  );
}
