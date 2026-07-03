import type { CSSProperties } from "react";

/**
 * LoraFcFinetune chapter — 6 steps
 *   step 0: LoRA intro + training cost bar chart
 *   step 1: LoRA solution — base model + adapter metaphor
 *   step 2: Function Calling intro — "talk only" vs "act"
 *   step 3: FC flow pipeline animation
 *   step 4: Fine-tuning intro — data flowing into model
 *   step 5: Comparison table — Fine-tuning vs LoRA vs RAG
 *
 * CSS prefix: .lf-
 * Theme: swiss-ikb (Klein Blue, 200 weight, hairline grid, direct rectangles)
 */

// ─── Step 0: Training cost data ───
const COST_DATA = [
  { label: "GPT-4",   cost: 100, display: "$100M+" },
  { label: "GPT-3",   cost: 14,  display: "$14M" },
  { label: "LLaMA-2", cost: 4,   display: "$4M" },
  { label: "LoRA",    cost: 0.1, display: "<$0.1M" },
];

// ─── Step 3: FC flow nodes ───
const FC_FLOW = [
  { label: '帮我查北京的天气', en: 'User Input',     type: 'user' },
  { label: '意图识别',         en: 'Intent',          type: 'brain' },
  { label: 'getWeather()',    en: 'Function Select', type: 'code' },
  { label: '执行',             en: 'Execute',         type: 'gear' },
  { label: '结果回传',         en: 'Result',          type: 'result' },
  { label: '北京今天晴，25-32°C', en: 'NL Output',    type: 'output' },
];

// ─── Step 5: Comparison table ───
const COMPARE_ROWS = [
  { label: '原理',   ft: '改整个模型',     lora: '加适配器外挂',  rag: '不改模型' },
  { label: '成本',   ft: '高',             lora: '低',            rag: '低' },
  { label: '效果',   ft: '好',             lora: '尚可',          rag: '依赖检索质量' },
  { label: '适合',   ft: '领域知识/语调',   lora: '特定任务',      rag: '最新信息' },
];

export function LoraFcFinetune({ step }: { step: number }) {
  return (
    <div className="lf-stage">
      {step === 0 && <LoRACost />}
      {step === 1 && <LoRASolution />}
      {step === 2 && <FuncCallingIntro />}
      {step === 3 && <FuncCallingFlow />}
      {step === 4 && <FineTuningIntro />}
      {step === 5 && <CompareTable />}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 0 — LoRA 引入 + 训练成本
 *  Animation: left text slides in, right bar chart grows upward
 * ═══════════════════════════════════════════════════════════════════ */
function LoRACost() {
  return (
    <div className="lf-cost">
      <div className="lf-cost-left">
        <span className="lf-kicker">06 / LoRA</span>
        <h2 className="lf-hero-cn">LoRA</h2>
        <p className="lf-hero-sub">低秩适配 · Low-Rank Adaptation</p>
        <div className="lf-cost-tag">
          <span className="lf-cost-tag-text">一般公司扛不住</span>
        </div>
      </div>

      <div className="lf-cost-right">
        <div className="lf-cost-big-number">
          <span className="lf-cost-dollar">$100M+</span>
          <span className="lf-cost-big-label">GPT-4 训练成本</span>
        </div>

        <div className="lf-cost-chart">
          <span className="lf-cost-chart-title">训练成本对比</span>
          <svg className="lf-cost-bars" viewBox="0 0 400 240" preserveAspectRatio="none">
            {/* Baseline */}
            <line x1="0" y1="220" x2="400" y2="220" stroke="var(--rule)" strokeWidth="1" />

            {COST_DATA.map((d, i) => {
              const barH = (d.cost / 100) * 200;
              const barW = 60;
              const gap = 100;
              const x = 30 + i * gap;
              const y = 220 - barH;
              return (
                <g key={i} className="lf-cost-bar-group" style={{ animationDelay: `${0.4 + i * 0.2}s` }}>
                  <rect
                    x={x}
                    y={y}
                    width={barW}
                    height={barH}
                    fill={i === 3 ? 'var(--accent)' : 'var(--surface-3)'}
                    className="lf-cost-bar"
                  />
                  <text
                    x={x + barW / 2}
                    y={y - 10}
                    textAnchor="middle"
                    className="lf-cost-bar-value"
                    fill="var(--text)"
                  >
                    {d.display}
                  </text>
                  <text
                    x={x + barW / 2}
                    y={238}
                    textAnchor="middle"
                    className="lf-cost-bar-label"
                    fill="var(--text-mute)"
                  >
                    {d.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 1 — LoRA 解决方案
 *  Animation: model block scales in, adapter slides in from right
 * ═══════════════════════════════════════════════════════════════════ */
function LoRASolution() {
  return (
    <div className="lf-solution">
      <div className="lf-solution-header">
        <span className="lf-kicker">06 / LoRA · Solution</span>
        <h2 className="lf-title">不动原模型 · 只加外挂</h2>
      </div>

      <div className="lf-solution-body">
        {/* Base model block */}
        <div className="lf-sol-model">
          <svg viewBox="0 0 280 200" fill="none">
            <rect x="10" y="10" width="260" height="180" stroke="var(--text)" strokeWidth="1.5" fill="var(--surface)" className="lf-sol-model-rect" />
            <text x="140" y="90" textAnchor="middle" className="lf-sol-model-label" fill="var(--text)">大模型</text>
            <text x="140" y="115" textAnchor="middle" className="lf-sol-model-sub" fill="var(--text-mute)">Base Model · 底妆粉底</text>
            {/* Internal grid lines suggesting layers */}
            {[40, 70, 100, 130, 160].map((y, i) => (
              <line key={i} x1="30" y1={y} x2="250" y2={y} stroke="var(--rule)" strokeWidth="0.5" opacity="0.6" />
            ))}
          </svg>
          <span className="lf-sol-label">不改动</span>
        </div>

        {/* Connector */}
        <svg className="lf-sol-connector" viewBox="0 0 80 20" fill="none">
          <line x1="0" y1="10" x2="70" y2="10" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" className="lf-sol-connector-line" />
          <path d="M70 10 L64 6 M70 10 L64 14" stroke="var(--accent)" strokeWidth="1.5" />
        </svg>

        {/* LoRA adapter */}
        <div className="lf-sol-adapter">
          <svg viewBox="0 0 160 120" fill="none">
            <rect x="10" y="10" width="140" height="100" stroke="var(--accent)" strokeWidth="2" fill="var(--accent-soft)" className="lf-sol-adapter-rect" />
            <text x="80" y="55" textAnchor="middle" className="lf-sol-adapter-label" fill="var(--accent)">LoRA</text>
            <text x="80" y="78" textAnchor="middle" className="lf-sol-adapter-sub" fill="var(--accent)">适配器 · 遮瑕笔</text>
          </svg>
          <span className="lf-sol-label lf-sol-label--accent">外挂添加</span>
        </div>
      </div>

      <div className="lf-solution-footer">
        <div className="lf-sol-compare">
          <div className="lf-sol-compare-item lf-sol-compare-item--full">
            <span className="lf-sol-compare-title">Fine-tuning</span>
            <span className="lf-sol-compare-desc">改底妆 · 大范围修改</span>
            <div className="lf-sol-compare-bar lf-sol-compare-bar--full" />
          </div>
          <div className="lf-sol-compare-item lf-sol-compare-item--lora">
            <span className="lf-sol-compare-title lf-sol-compare-title--accent">LoRA</span>
            <span className="lf-sol-compare-desc">遮瑕笔 · 局部精准调整</span>
            <div className="lf-sol-compare-bar lf-sol-compare-bar--lora" />
          </div>
        </div>
        <div className="lf-sol-gpu-tag">
          <span className="lf-sol-gpu-text">消费级显卡可微调</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 2 — Function Calling 引入
 *  Animation: left text fades in, right SVG contrast wipe left→right
 * ═══════════════════════════════════════════════════════════════════ */
function FuncCallingIntro() {
  return (
    <div className="lf-fc-intro">
      <div className="lf-fc-intro-left">
        <span className="lf-kicker">07 / Function Calling</span>
        <h2 className="lf-hero-cn">Function<br />Calling</h2>
        <p className="lf-hero-sub">函数调用 · Tool Calling</p>
        <p className="lf-fc-intro-desc">让大模型调用外部函数和 API 的能力</p>
      </div>

      <div className="lf-fc-intro-right">
        <div className="lf-fc-vs">
          {/* Left: only talk */}
          <div className="lf-fc-vs-side lf-fc-vs-side--talk">
            <span className="lf-fc-vs-label">没有 Function Calling</span>
            <svg viewBox="0 0 140 140" fill="none" className="lf-fc-vs-icon">
              {/* Mouth icon */}
              <ellipse cx="70" cy="55" rx="24" ry="10" stroke="var(--text-mute)" strokeWidth="1.5" fill="none" />
              <line x1="50" y1="55" x2="90" y2="55" stroke="var(--text-mute)" strokeWidth="1" opacity="0.5" />
              {/* Locked hand */}
              <rect x="50" y="85" width="40" height="30" rx="4" stroke="var(--text-mute)" strokeWidth="1.5" fill="none" />
              <rect x="62" y="78" width="16" height="14" rx="2" stroke="var(--text-mute)" strokeWidth="1.5" fill="var(--surface)" />
              <line x1="58" y1="100" x2="82" y2="100" stroke="var(--text-mute)" strokeWidth="1" />
            </svg>
            <span className="lf-fc-vs-text">只能动嘴</span>
          </div>

          {/* Divider */}
          <div className="lf-fc-vs-divider" />

          {/* Right: can act */}
          <div className="lf-fc-vs-side lf-fc-vs-side--act">
            <span className="lf-fc-vs-label lf-fc-vs-label--accent">有 Function Calling</span>
            <svg viewBox="0 0 160 140" fill="none" className="lf-fc-vs-icon lf-fc-vs-icon--act">
              {/* AI core */}
              <rect x="10" y="50" width="40" height="40" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <text x="30" y="75" textAnchor="middle" fontSize="11" fill="var(--accent)" fontFamily="var(--font-mono)">AI</text>
              {/* Connecting lines to tools */}
              <line x1="50" y1="55" x2="95" y2="25" stroke="var(--accent)" strokeWidth="1" className="lf-fc-act-line" style={{ animationDelay: '0.5s' }} />
              <line x1="50" y1="70" x2="95" y2="70" stroke="var(--accent)" strokeWidth="1" className="lf-fc-act-line" style={{ animationDelay: '0.7s' }} />
              <line x1="50" y1="85" x2="95" y2="115" stroke="var(--accent)" strokeWidth="1" className="lf-fc-act-line" style={{ animationDelay: '0.9s' }} />
              {/* Tool icons */}
              <rect x="95" y="15" width="30" height="20" stroke="var(--accent)" strokeWidth="1" fill="var(--surface)" className="lf-fc-act-tool" style={{ animationDelay: '0.6s' }} />
              <text x="110" y="29" textAnchor="middle" fontSize="9" fill="var(--accent)" fontFamily="var(--font-mono)">API</text>
              <rect x="95" y="60" width="30" height="20" stroke="var(--accent)" strokeWidth="1" fill="var(--surface)" className="lf-fc-act-tool" style={{ animationDelay: '0.8s' }} />
              <text x="110" y="74" textAnchor="middle" fontSize="9" fill="var(--accent)" fontFamily="var(--font-mono)">DB</text>
              <rect x="95" y="105" width="30" height="20" stroke="var(--accent)" strokeWidth="1" fill="var(--surface)" className="lf-fc-act-tool" style={{ animationDelay: '1.0s' }} />
              <text x="110" y="119" textAnchor="middle" fontSize="9" fill="var(--accent)" fontFamily="var(--font-mono)">Mail</text>
            </svg>
            <span className="lf-fc-vs-text lf-fc-vs-text--accent">能动手</span>
            <span className="lf-fc-vs-sub">查天气 · 订票 · 发邮件 · 执行代码</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 3 — FC 流程动画
 *  Animation: pipeline nodes light up sequentially left-to-right
 * ═══════════════════════════════════════════════════════════════════ */
function FuncCallingFlow() {
  return (
    <div className="lf-fc-flow">
      <div className="lf-fc-flow-header">
        <span className="lf-kicker">07 / Function Calling · Flow</span>
        <h2 className="lf-title">调用流程</h2>
      </div>

      <div className="lf-fc-flow-pipeline">
        {FC_FLOW.map((node, i) => (
          <div className="lf-fc-flow-node-wrap" key={i}>
            {i > 0 && (
              <svg className="lf-fc-flow-arrow" viewBox="0 0 40 12" fill="none">
                <line
                  x1="0" y1="6" x2="34" y2="6"
                  stroke="var(--accent)"
                  strokeWidth="1"
                  className="lf-fc-flow-arrow-line"
                  style={{ animationDelay: `${0.3 + i * 0.3}s` }}
                />
                <path
                  d="M34 6 L28 2 M34 6 L28 10"
                  stroke="var(--accent)"
                  strokeWidth="1"
                  className="lf-fc-flow-arrow-head"
                  style={{ animationDelay: `${0.4 + i * 0.3}s` }}
                />
              </svg>
            )}
            <div
              className={`lf-fc-flow-node lf-fc-flow-node--${node.type}`}
              style={{ animationDelay: `${0.2 + i * 0.3}s` }}
            >
              <div className="lf-fc-flow-node-icon">
                <FlowIcon type={node.type} />
              </div>
              <span className="lf-fc-flow-node-label">{node.label}</span>
              <span className="lf-fc-flow-node-en">{node.en}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="lf-fc-flow-footer">
        <div className="lf-fc-flow-hands">
          <svg viewBox="0 0 48 48" fill="none" className="lf-fc-flow-hands-icon">
            <path d="M16 32 Q 24 20 32 32" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
            <path d="M16 32 L 12 28 M16 32 L 20 28" stroke="var(--accent)" strokeWidth="1.5" />
            <path d="M32 32 L 28 36 M32 32 L 36 36" stroke="var(--accent)" strokeWidth="1.5" />
          </svg>
          <span className="lf-fc-flow-hands-text">Agent 的那双手</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 4 — Fine-tuning 引入
 *  Animation: data blocks flow into model, model glows
 * ═══════════════════════════════════════════════════════════════════ */
function FineTuningIntro() {
  return (
    <div className="lf-ft">
      <div className="lf-ft-left">
        <span className="lf-kicker">08 / Fine-tuning</span>
        <h2 className="lf-hero-cn">Fine-tuning</h2>
        <p className="lf-hero-sub">微调 · 二次训练</p>

        <div className="lf-ft-tags">
          <div className="lf-ft-tag" style={{ animationDelay: '0.5s' }}>
            <span className="lf-ft-tag-dot" />
            <span className="lf-ft-tag-text">改动大</span>
          </div>
          <div className="lf-ft-tag" style={{ animationDelay: '0.7s' }}>
            <span className="lf-ft-tag-dot" />
            <span className="lf-ft-tag-text">成本高</span>
          </div>
          <div className="lf-ft-tag" style={{ animationDelay: '0.9s' }}>
            <span className="lf-ft-tag-dot lf-ft-tag-dot--accent" />
            <span className="lf-ft-tag-text">效果好</span>
          </div>
        </div>
      </div>

      <div className="lf-ft-right">
        <svg viewBox="0 0 500 320" fill="none" className="lf-ft-svg">
          {/* Data blocks flowing in from left */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i} className="lf-ft-data-block" style={{ animationDelay: `${0.3 + i * 0.25}s` }}>
              <rect
                x={20 + i * 15}
                y={80 + i * 40}
                width="50"
                height="28"
                stroke="var(--accent)"
                strokeWidth="1"
                fill="var(--accent-soft)"
              />
              <text
                x={45 + i * 15}
                y={98 + i * 40}
                textAnchor="middle"
                fontSize="11"
                fill="var(--accent)"
                fontFamily="var(--font-mono)"
              >
                DATA
              </text>
            </g>
          ))}

          {/* Arrows from data to model */}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1={70 + i * 15}
              y1={94 + i * 40}
              x2="190"
              y2={160}
              stroke="var(--accent)"
              strokeWidth="1"
              opacity="0.4"
              className="lf-ft-arrow"
              style={{ animationDelay: `${0.5 + i * 0.25}s` }}
            />
          ))}

          {/* Model block — large, glowing */}
          <rect
            x="190"
            y="60"
            width="280"
            height="200"
            stroke="var(--accent)"
            strokeWidth="2"
            fill="var(--accent-soft)"
            className="lf-ft-model-rect"
          />
          {/* Glow effect via repeated rects */}
          <rect x="190" y="60" width="280" height="200" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.15" className="lf-ft-model-glow1" />
          <rect x="186" y="56" width="288" height="208" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.08" className="lf-ft-model-glow2" />

          {/* Model label */}
          <text x="330" y="150" textAnchor="middle" className="lf-ft-model-label" fill="var(--text)">
            预训练模型
          </text>
          <text x="330" y="175" textAnchor="middle" className="lf-ft-model-sub" fill="var(--text-mute)">
            Pre-trained Model
          </text>

          {/* Internal layer lines — showing modification */}
          {[90, 120, 150, 180, 210, 240].map((y, i) => (
            <line
              key={i}
              x1="210"
              y1={y}
              x2="450"
              y2={y}
              stroke="var(--accent)"
              strokeWidth="0.5"
              opacity="0.3"
              className="lf-ft-model-layer"
              style={{ animationDelay: `${1.0 + i * 0.1}s` }}
            />
          ))}

          {/* "二次训练" label */}
          <text x="330" y="285" textAnchor="middle" fontSize="16" fill="var(--accent)" fontFamily="var(--font-display-cn)" fontWeight="300" className="lf-ft-retrain-label">
            二次训练
          </text>
        </svg>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 5 — 三种方案对比表
 *  Animation: columns reveal one by one, rows fade in
 * ═══════════════════════════════════════════════════════════════════ */
function CompareTable() {
  return (
    <div className="lf-compare">
      <div className="lf-compare-header">
        <span className="lf-kicker">决策 · When to Use What</span>
        <h2 className="lf-title">三种方案对比</h2>
      </div>

      <div className="lf-compare-table">
        {/* Header row */}
        <div className="lf-compare-row lf-compare-row--header">
          <div className="lf-compare-cell lf-compare-cell--label" />
          <div className="lf-compare-cell lf-compare-cell--ft" style={{ animationDelay: '0.3s' }}>
            <span className="lf-compare-col-title">Fine-tuning</span>
            <span className="lf-compare-col-sub">改整个模型</span>
          </div>
          <div className="lf-compare-cell lf-compare-cell--lora" style={{ animationDelay: '0.5s' }}>
            <span className="lf-compare-col-title lf-compare-col-title--accent">LoRA</span>
            <span className="lf-compare-col-sub">加适配器外挂</span>
          </div>
          <div className="lf-compare-cell lf-compare-cell--rag" style={{ animationDelay: '0.7s' }}>
            <span className="lf-compare-col-title">RAG</span>
            <span className="lf-compare-col-sub">不改模型 · 查资料</span>
          </div>
        </div>

        {/* Data rows */}
        {COMPARE_ROWS.map((row, i) => (
          <div
            className="lf-compare-row"
            key={i}
            style={{ animationDelay: `${0.9 + i * 0.2}s` }}
          >
            <div className="lf-compare-cell lf-compare-cell--label">
              <span className="lf-compare-row-label">{row.label}</span>
            </div>
            <div className="lf-compare-cell lf-compare-cell--ft">
              <span className="lf-compare-cell-text">{row.ft}</span>
            </div>
            <div className="lf-compare-cell lf-compare-cell--lora">
              <span className="lf-compare-cell-text">{row.lora}</span>
            </div>
            <div className="lf-compare-cell lf-compare-cell--rag">
              <span className="lf-compare-cell-text">{row.rag}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="lf-compare-footer" style={{ animationDelay: '1.8s' }}>
        <div className="lf-compare-decision">
          <span className="lf-compare-decision-label">什么时候用什么</span>
          <div className="lf-compare-decision-list">
            <div className="lf-compare-decision-item">
              <span className="lf-compare-decision-key">领域知识 / 统一语调</span>
              <span className="lf-compare-decision-arrow">→</span>
              <span className="lf-compare-decision-val">Fine-tuning</span>
            </div>
            <div className="lf-compare-decision-item">
              <span className="lf-compare-decision-key">特定任务微调</span>
              <span className="lf-compare-decision-arrow">→</span>
              <span className="lf-compare-decision-val">LoRA</span>
            </div>
            <div className="lf-compare-decision-item">
              <span className="lf-compare-decision-key">最新信息 / 临时改风格</span>
              <span className="lf-compare-decision-arrow">→</span>
              <span className="lf-compare-decision-val">RAG / Prompt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Flow icons (minimal SVG) ─── */
function FlowIcon({ type }: { type: string }) {
  const stroke = "var(--accent)";
  const sw = 1.5;
  switch (type) {
    case "user":
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="11" r="5" stroke={stroke} strokeWidth={sw} />
          <path d="M6 28 Q 16 18 26 28" stroke={stroke} strokeWidth={sw} />
        </svg>
      );
    case "brain":
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M16 6 Q 8 6 8 14 Q 4 16 6 22 Q 8 28 16 26 Q 24 28 26 22 Q 28 16 24 14 Q 24 6 16 6 Z" stroke={stroke} strokeWidth={sw} fill="none" />
          <circle cx="16" cy="17" r="3" stroke={stroke} strokeWidth="1" opacity="0.5" />
          <path d="M12 14 L 14 11 M20 14 L 18 11 M12 20 L 14 23 M20 20 L 18 23" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M12 10 L 6 16 L 12 22" stroke={stroke} strokeWidth={sw} fill="none" />
          <path d="M20 10 L 26 16 L 20 22" stroke={stroke} strokeWidth={sw} fill="none" />
          <line x1="18" y1="8" x2="14" y2="24" stroke={stroke} strokeWidth={sw} />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="6" stroke={stroke} strokeWidth={sw} fill="none" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <line
                key={deg}
                x1={16 + Math.cos(rad) * 8}
                y1={16 + Math.sin(rad) * 8}
                x2={16 + Math.cos(rad) * 13}
                y2={16 + Math.sin(rad) * 13}
                stroke={stroke}
                strokeWidth={sw}
              />
            );
          })}
        </svg>
      );
    case "result":
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <rect x="6" y="8" width="20" height="16" stroke={stroke} strokeWidth={sw} fill="none" />
          <line x1="6" y1="14" x2="26" y2="14" stroke={stroke} strokeWidth="1" opacity="0.5" />
          <line x1="10" y1="18" x2="22" y2="18" stroke={stroke} strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case "output":
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M6 10 Q 6 6 10 6 H 22 Q 26 6 26 10 V 18 Q 26 22 22 22 H 14 L 10 26 V 22 Q 6 22 6 18 Z" stroke={stroke} strokeWidth={sw} fill="none" />
          <circle cx="12" cy="14" r="1.5" fill={stroke} />
          <circle cx="16" cy="14" r="1.5" fill={stroke} />
          <circle cx="20" cy="14" r="1.5" fill={stroke} />
        </svg>
      );
    default:
      return null;
  }
}
