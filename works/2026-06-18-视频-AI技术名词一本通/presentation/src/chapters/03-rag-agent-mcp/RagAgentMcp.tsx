import type { CSSProperties } from "react";

/**
 * RagAgentMcp chapter — 8 steps (step 0–7)
 *   step 0: RAG concept intro — LLM brain with "forgot after exam" tag
 *   step 1: RAG solution — simple flow diagram
 *   step 2: RAG full pipeline — detailed flow with 3 key components
 *   step 3: Agent intro — left/right comparison: plain AI vs Agent
 *   step 4: Agent four abilities — 2×2 grid with SVG icons
 *   step 5: Agent vs AI scenario — flight booking comparison
 *   step 6: MCP intro — tangled cables chaos
 *   step 7: MCP solution — USB-C hub, unified standard
 *
 * CSS prefix: .ra-
 * Theme: swiss-ikb (Klein Blue, weight 200, hairline grid, flat rectangles)
 */

export function RagAgentMcp({ step }: { step: number }) {
  return (
    <div className="ra-stage">
      {step === 0 && <RagIntro />}
      {step === 1 && <RagSolution />}
      {step === 2 && <RagPipeline />}
      {step === 3 && <AgentIntro />}
      {step === 4 && <AgentAbilities />}
      {step === 5 && <AgentScenario />}
      {step === 6 && <McpIntro />}
      {step === 7 && <McpSolution />}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Shared bits
 * ═══════════════════════════════════════════════════════════════════ */

function Kicker({ index, total, en }: { index: string; total: string; en: string }) {
  return (
    <div className="ra-kicker">
      <span className="ra-kicker-line" />
      <span className="ra-kicker-text">{index} / {total}</span>
      <span className="ra-kicker-sep">·</span>
      <span className="ra-kicker-en">{en}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 0 — RAG concept intro
 *  Animation: clip-path reveal on left text, scale-in on brain icon
 * ═══════════════════════════════════════════════════════════════════ */
function RagIntro() {
  return (
    <div className="ra-rag-intro">
      <Kicker index="03" total="AI 名词" en="RAG" />
      <div className="ra-rag-intro-body">
        {/* Left: big title */}
        <div className="ra-rag-intro-left">
          <h2 className="ra-hero-cn">检索增强生成</h2>
          <p className="ra-hero-en">Retrieval-Augmented Generation</p>
        </div>
        {/* Right: LLM brain with "forgot" tag */}
        <div className="ra-rag-intro-right">
          <svg className="ra-brain-svg" viewBox="0 0 200 200" fill="none">
            {/* Brain outline */}
            <ellipse cx="100" cy="95" rx="70" ry="60" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.5" />
            {/* Hemispheres */}
            <path d="M100 35 Q 70 55 70 95 Q 70 140 100 155" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
            <path d="M100 35 Q 130 55 130 95 Q 130 140 100 155" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
            {/* Neural nodes */}
            <circle cx="78" cy="70" r="4" fill="var(--accent)" opacity="0.7" />
            <circle cx="122" cy="70" r="4" fill="var(--accent)" opacity="0.7" />
            <circle cx="100" cy="55" r="3" fill="var(--accent)" opacity="0.5" />
            <circle cx="85" cy="110" r="3" fill="var(--accent)" opacity="0.5" />
            <circle cx="115" cy="110" r="3" fill="var(--accent)" opacity="0.5" />
            {/* Connections */}
            <line x1="78" y1="70" x2="100" y2="55" stroke="var(--accent)" strokeWidth="0.8" opacity="0.3" />
            <line x1="122" y1="70" x2="100" y2="55" stroke="var(--accent)" strokeWidth="0.8" opacity="0.3" />
            <line x1="78" y1="70" x2="85" y2="110" stroke="var(--accent)" strokeWidth="0.8" opacity="0.3" />
            <line x1="122" y1="70" x2="115" y2="110" stroke="var(--accent)" strokeWidth="0.8" opacity="0.3" />
            {/* Question marks floating — "doesn't know" */}
            <text x="60" y="45" fontSize="20" fontFamily="var(--font-display-en)" fill="var(--text-faint)" opacity="0.5">?</text>
            <text x="132" y="50" fontSize="16" fontFamily="var(--font-display-en)" fill="var(--text-faint)" opacity="0.4">?</text>
            <text x="100" y="175" fontSize="14" fontFamily="var(--font-display-en)" fill="var(--text-faint)" opacity="0.3">?</text>
          </svg>
          {/* "Forgot after exam" tag */}
          <div className="ra-forgot-tag">
            <span className="ra-forgot-tag-text">考试完就忘</span>
            <span className="ra-forgot-tag-sub">Knowledge Cutoff</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 1 — RAG solution (simple flow)
 *  Animation: nodes draw in left-to-right with connector line growth
 * ═══════════════════════════════════════════════════════════════════ */
function RagSolution() {
  const nodes = [
    { label: "用户提问", en: "Query", icon: "user" },
    { label: "知识库", en: "Knowledge Base", icon: "docs" },
    { label: "资料 + 问题", en: "Context + Query", icon: "bundle" },
    { label: "AI 回答", en: "AI Answer", icon: "ai" },
  ];
  return (
    <div className="ra-rag-solution">
      <Kicker index="03" total="AI 名词" en="RAG · Solution" />
      <div className="ra-rag-solution-body">
        <div className="ra-rag-solution-flow">
          {nodes.map((node, i) => (
            <div className="ra-flow-node-wrap" key={i}>
              {i > 0 && (
                <div className="ra-flow-arrow">
                  <svg viewBox="0 0 60 8" preserveAspectRatio="none">
                    <line
                      x1="0" y1="4" x2="52" y2="4"
                      stroke="var(--accent)" strokeWidth="1"
                      className="ra-flow-arrow-line"
                      style={{ animationDelay: `${0.3 + i * 0.3}s` }}
                    />
                    <path
                      d="M48 1 L58 4 L48 7"
                      stroke="var(--accent)" strokeWidth="1" fill="none"
                      className="ra-flow-arrow-head"
                      style={{ animationDelay: `${0.45 + i * 0.3}s` }}
                    />
                  </svg>
                </div>
              )}
              <div
                className="ra-flow-node"
                style={{ animationDelay: `${0.2 + i * 0.3}s` }}
              >
                <div className="ra-flow-node-icon">
                  <FlowIcon kind={node.icon} />
                </div>
                <span className="ra-flow-node-label">{node.label}</span>
                <span className="ra-flow-node-en">{node.en}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="ra-rag-solution-caption">让 AI 看着资料回答问题</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 2 — RAG full pipeline
 *  Animation: vertical cascade reveal, document chunk animation
 * ═══════════════════════════════════════════════════════════════════ */
function RagPipeline() {
  const components = [
    { name: "向量数据库", en: "Vector DB", desc: "按相似度检索" },
    { name: "Embedding", en: "Embedding", desc: "语言转向量" },
    { name: "文档分块", en: "Chunking", desc: "长文档切小块" },
  ];
  return (
    <div className="ra-rag-pipeline">
      <Kicker index="03" total="AI 名词" en="RAG · Pipeline" />
      <div className="ra-rag-pipeline-body">
        {/* Detailed flow */}
        <div className="ra-pipeline-flow">
          {/* User query */}
          <div className="ra-pipeline-node ra-pipeline-node--start" style={{ animationDelay: "0.2s" }}>
            <span className="ra-pipeline-node-label">用户提问</span>
          </div>
          <PipelineArrow delay="0.4s" />
          {/* Vector DB cylinder */}
          <div className="ra-pipeline-node ra-pipeline-node--db" style={{ animationDelay: "0.5s" }}>
            <svg viewBox="0 0 48 48" fill="none" className="ra-pipeline-icon">
              <ellipse cx="24" cy="12" rx="18" ry="6" stroke="var(--accent)" strokeWidth="1.5" />
              <path d="M6 12 V 36 Q 6 42 24 42 Q 42 42 42 36 V 12" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <path d="M6 24 Q 6 30 24 30 Q 42 30 42 24" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
            </svg>
            <span className="ra-pipeline-node-label">向量数据库</span>
          </div>
          <PipelineArrow delay="0.7s" />
          {/* Embedding — vector space dots */}
          <div className="ra-pipeline-node ra-pipeline-node--embed" style={{ animationDelay: "0.8s" }}>
            <svg viewBox="0 0 48 48" fill="none" className="ra-pipeline-icon">
              {/* Scatter dots representing vector space */}
              <circle cx="12" cy="14" r="2" fill="var(--accent)" opacity="0.6" />
              <circle cx="24" cy="10" r="2" fill="var(--accent)" opacity="0.8" />
              <circle cx="34" cy="16" r="2" fill="var(--accent)" opacity="0.5" />
              <circle cx="16" cy="26" r="2" fill="var(--accent)" opacity="0.7" />
              <circle cx="28" cy="24" r="2" fill="var(--accent)" opacity="0.9" />
              <circle cx="36" cy="30" r="2" fill="var(--accent)" opacity="0.4" />
              <circle cx="12" cy="36" r="2" fill="var(--accent)" opacity="0.5" />
              <circle cx="22" cy="38" r="2" fill="var(--accent)" opacity="0.6" />
              {/* Similarity circle */}
              <circle cx="26" cy="18" r="10" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="2 2" />
            </svg>
            <span className="ra-pipeline-node-label">Embedding</span>
          </div>
          <PipelineArrow delay="1.0s" />
          {/* Document chunking */}
          <div className="ra-pipeline-node ra-pipeline-node--chunk" style={{ animationDelay: "1.1s" }}>
            <svg viewBox="0 0 48 48" fill="none" className="ra-pipeline-icon">
              {/* Document */}
              <rect x="8" y="6" width="32" height="36" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
              {/* Chunk lines — showing splitting */}
              <line x1="8" y1="15" x2="40" y2="15" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="8" y1="24" x2="40" y2="24" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="8" y1="33" x2="40" y2="33" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 2" />
              {/* Text lines inside chunks */}
              <line x1="12" y1="10" x2="36" y2="10" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
              <line x1="12" y1="19" x2="32" y2="19" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
              <line x1="12" y1="28" x2="34" y2="28" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
              <line x1="12" y1="37" x2="30" y2="37" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
            </svg>
            <span className="ra-pipeline-node-label">文档分块</span>
          </div>
          <PipelineArrow delay="1.3s" />
          {/* Bundle to LLM */}
          <div className="ra-pipeline-node ra-pipeline-node--bundle" style={{ animationDelay: "1.4s" }}>
            <svg viewBox="0 0 48 48" fill="none" className="ra-pipeline-icon">
              <rect x="8" y="10" width="32" height="28" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <line x1="8" y1="20" x2="40" y2="20" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
              <line x1="8" y1="28" x2="40" y2="28" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
              <text x="24" y="17" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill="var(--accent)" fontWeight="600">Q</text>
              <text x="24" y="26" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill="var(--accent)" fontWeight="600">+</text>
              <text x="24" y="35" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill="var(--accent)" fontWeight="600">Docs</text>
            </svg>
            <span className="ra-pipeline-node-label">打包给 LLM</span>
          </div>
          <PipelineArrow delay="1.6s" />
          {/* Answer */}
          <div className="ra-pipeline-node ra-pipeline-node--end" style={{ animationDelay: "1.7s" }}>
            <span className="ra-pipeline-node-label ra-pipeline-node-label--accent">基于资料回答</span>
          </div>
        </div>

        {/* Three key components */}
        <div className="ra-pipeline-components">
          <span className="ra-pipeline-comp-header">关键组件</span>
          <div className="ra-pipeline-comp-grid">
            {components.map((c, i) => (
              <div
                className="ra-pipeline-comp"
                key={i}
                style={{ animationDelay: `${2.0 + i * 0.2}s` }}
              >
                <span className="ra-pipeline-comp-name">{c.name}</span>
                <span className="ra-pipeline-comp-en">{c.en}</span>
                <span className="ra-pipeline-comp-desc">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelineArrow({ delay }: { delay: string }) {
  return (
    <div className="ra-pipeline-arrow">
      <svg viewBox="0 0 40 8" preserveAspectRatio="none">
        <line
          x1="0" y1="4" x2="32" y2="4"
          stroke="var(--accent)" strokeWidth="1"
          className="ra-pipeline-arrow-line"
          style={{ animationDelay: delay }}
        />
        <path
          d="M28 1 L38 4 L28 7"
          stroke="var(--accent)" strokeWidth="1" fill="none"
          className="ra-pipeline-arrow-head"
          style={{ animationDelay: delay }}
        />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 3 — Agent intro (plain AI vs Agent)
 *  Animation: left block fades in, right block slides in from right
 * ═══════════════════════════════════════════════════════════════════ */
function AgentIntro() {
  return (
    <div className="ra-agent-intro">
      <Kicker index="04" total="AI 名词" en="Agent" />
      <div className="ra-agent-intro-body">
        {/* Left: Plain AI */}
        <div className="ra-agent-intro-side ra-agent-intro-side--plain">
          <span className="ra-agent-intro-label">普通 AI</span>
          <div className="ra-agent-intro-diagram">
            {/* Person icon */}
            <svg viewBox="0 0 60 60" fill="none" className="ra-person-svg">
              <circle cx="30" cy="18" r="8" stroke="var(--text-mute)" strokeWidth="1.5" />
              <path d="M16 50 Q 30 34 44 50" stroke="var(--text-mute)" strokeWidth="1.5" fill="none" />
            </svg>
            {/* Arrow with "one step" */}
            <div className="ra-agent-intro-arrow">
              <svg viewBox="0 0 80 24" fill="none">
                <line x1="0" y1="12" x2="68" y2="12" stroke="var(--text-mute)" strokeWidth="1" />
                <path d="M62 6 L74 12 L62 18" stroke="var(--text-mute)" strokeWidth="1" fill="none" />
              </svg>
              <span className="ra-agent-intro-arrow-text">你说一步</span>
            </div>
            {/* AI icon */}
            <svg viewBox="0 0 60 60" fill="none" className="ra-ai-svg">
              <rect x="12" y="14" width="36" height="32" stroke="var(--text-mute)" strokeWidth="1.5" fill="var(--surface-2)" />
              <circle cx="22" cy="26" r="3" fill="var(--text-mute)" />
              <circle cx="38" cy="26" r="3" fill="var(--text-mute)" />
              <line x1="22" y1="26" x2="38" y2="26" stroke="var(--text-mute)" strokeWidth="0.8" />
              <rect x="20" y="34" width="20" height="6" fill="var(--text-mute)" opacity="0.3" />
            </svg>
          </div>
          <p className="ra-agent-intro-tag">你说一步，它做一步</p>
        </div>

        {/* Divider */}
        <div className="ra-agent-intro-divider" />

        {/* Right: Agent */}
        <div className="ra-agent-intro-side ra-agent-intro-side--agent">
          <span className="ra-agent-intro-label ra-agent-intro-label--accent">Agent</span>
          <div className="ra-agent-intro-diagram">
            {/* Person icon */}
            <svg viewBox="0 0 60 60" fill="none" className="ra-person-svg">
              <circle cx="30" cy="18" r="8" stroke="var(--accent)" strokeWidth="1.5" />
              <path d="M16 50 Q 30 34 44 50" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
            </svg>
            {/* Arrow with "goal" */}
            <div className="ra-agent-intro-arrow">
              <svg viewBox="0 0 80 24" fill="none">
                <line x1="0" y1="12" x2="68" y2="12" stroke="var(--accent)" strokeWidth="1.5" />
                <path d="M62 6 L74 12 L62 18" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
              </svg>
              <span className="ra-agent-intro-arrow-text ra-agent-intro-arrow-text--accent">给个目标</span>
            </div>
            {/* Agent icon — with action loop */}
            <svg viewBox="0 0 60 60" fill="none" className="ra-ai-svg">
              <rect x="12" y="14" width="36" height="32" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <circle cx="22" cy="26" r="3" fill="var(--accent)" />
              <circle cx="38" cy="26" r="3" fill="var(--accent)" />
              <line x1="22" y1="26" x2="38" y2="26" stroke="var(--accent)" strokeWidth="0.8" />
              {/* Action arrows around the box */}
              <path d="M48 20 Q 54 30 48 40" stroke="var(--accent)" strokeWidth="1" fill="none" />
              <path d="M12 40 Q 6 30 12 20" stroke="var(--accent)" strokeWidth="1" fill="none" />
            </svg>
          </div>
          <p className="ra-agent-intro-tag ra-agent-intro-tag--accent">自己从头干到尾</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 4 — Agent four abilities (2×2 grid)
 *  Animation: each cell scale-in with stagger
 * ═══════════════════════════════════════════════════════════════════ */
function AgentAbilities() {
  const abilities = [
    {
      name: "规划",
      en: "Planning",
      desc: "大目标拆成小步骤",
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          {/* Tree structure: goal → sub-goals */}
          <rect x="18" y="4" width="12" height="8" fill="var(--accent)" />
          <line x1="24" y1="12" x2="24" y2="20" stroke="var(--accent)" strokeWidth="1" />
          <line x1="12" y1="20" x2="36" y2="20" stroke="var(--accent)" strokeWidth="1" />
          <line x1="12" y1="20" x2="12" y2="28" stroke="var(--accent)" strokeWidth="1" />
          <line x1="24" y1="20" x2="24" y2="28" stroke="var(--accent)" strokeWidth="1" />
          <line x1="36" y1="20" x2="36" y2="28" stroke="var(--accent)" strokeWidth="1" />
          <rect x="7" y="28" width="10" height="8" stroke="var(--accent)" strokeWidth="1" fill="none" />
          <rect x="19" y="28" width="10" height="8" stroke="var(--accent)" strokeWidth="1" fill="none" />
          <rect x="31" y="28" width="10" height="8" stroke="var(--accent)" strokeWidth="1" fill="none" />
          {/* Sub-sub items */}
          <line x1="12" y1="36" x2="12" y2="42" stroke="var(--accent)" strokeWidth="0.8" opacity="0.5" />
          <line x1="24" y1="36" x2="24" y2="42" stroke="var(--accent)" strokeWidth="0.8" opacity="0.5" />
          <circle cx="12" cy="44" r="2" fill="var(--accent)" opacity="0.5" />
          <circle cx="24" cy="44" r="2" fill="var(--accent)" opacity="0.5" />
        </svg>
      ),
    },
    {
      name: "记忆",
      en: "Memory",
      desc: "记住上下文和中间结果",
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          {/* Brain/memory icon */}
          <rect x="8" y="14" width="32" height="24" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
          {/* Memory slots */}
          <line x1="8" y1="22" x2="40" y2="22" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
          <line x1="8" y1="30" x2="40" y2="30" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
          <rect x="12" y="16" width="6" height="4" fill="var(--accent)" opacity="0.7" />
          <rect x="20" y="16" width="6" height="4" fill="var(--accent)" opacity="0.4" />
          <rect x="28" y="16" width="6" height="4" fill="var(--accent)" opacity="0.7" />
          <rect x="12" y="24" width="6" height="4" fill="var(--accent)" opacity="0.4" />
          <rect x="20" y="24" width="6" height="4" fill="var(--accent)" opacity="0.7" />
          <rect x="28" y="24" width="6" height="4" fill="var(--accent)" opacity="0.4" />
          <rect x="12" y="32" width="6" height="4" fill="var(--accent)" opacity="0.7" />
          <rect x="20" y="32" width="6" height="4" fill="var(--accent)" opacity="0.4" />
          <rect x="28" y="32" width="6" height="4" fill="var(--accent)" opacity="0.7" />
        </svg>
      ),
    },
    {
      name: "工具调用",
      en: "Tool Use",
      desc: "查数据库、点按钮、调 API",
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          {/* Wrench + API icon */}
          <path d="M14 10 L20 16 L16 20 L10 14 Z" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
          <path d="M20 16 L28 24" stroke="var(--accent)" strokeWidth="1.5" />
          {/* API brackets */}
          <path d="M30 12 L26 24 L30 36" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
          <path d="M18 12 L22 24 L18 36" stroke="var(--accent)" strokeWidth="1.5" fill="none" opacity="0.5" />
          {/* Dot */}
          <circle cx="24" cy="24" r="2" fill="var(--accent)" />
        </svg>
      ),
    },
    {
      name: "行动观察",
      en: "Act & Observe",
      desc: "执行 → 看结果 → 调整",
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          {/* Circular loop arrows */}
          <path d="M12 24 A 12 12 0 1 1 24 36" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
          <path d="M12 24 L8 20 M12 24 L16 20" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
          <path d="M24 36 L20 32 M24 36 L28 32" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
          {/* Labels on loop */}
          <text x="24" y="14" textAnchor="middle" fontSize="6" fontFamily="var(--font-mono)" fill="var(--accent)" fontWeight="600">Think</text>
          <text x="38" y="26" textAnchor="middle" fontSize="6" fontFamily="var(--font-mono)" fill="var(--accent)" fontWeight="600">Act</text>
          <text x="24" y="44" textAnchor="middle" fontSize="6" fontFamily="var(--font-mono)" fill="var(--accent)" fontWeight="600">Observe</text>
        </svg>
      ),
    },
  ];

  return (
    <div className="ra-agent-abilities">
      <Kicker index="04" total="AI 名词" en="Agent · Four Abilities" />
      <div className="ra-agent-abilities-grid">
        {abilities.map((a, i) => (
          <div
            className="ra-ability-card"
            key={i}
            style={{ animationDelay: `${0.3 + i * 0.2}s` }}
          >
            <div className="ra-ability-icon">{a.icon}</div>
            <div className="ra-ability-text">
              <span className="ra-ability-name">{a.name}</span>
              <span className="ra-ability-en">{a.en}</span>
              <span className="ra-ability-desc">{a.desc}</span>
            </div>
          </div>
        ))}
      </div>
      {/* ReAct framework label */}
      <div className="ra-react-label" style={{ animationDelay: "1.2s" }}>
        <span className="ra-react-name">ReAct 框架</span>
        <span className="ra-react-cycle">思考 → 行动 → 观察 → 再思考</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 5 — Agent vs AI scenario (flight booking)
 *  Animation: left chat fades in, right pipeline draws sequentially
 * ═══════════════════════════════════════════════════════════════════ */
function AgentScenario() {
  const agentSteps = [
    { label: "打开浏览器", en: "Browser" },
    { label: "查航班", en: "Search" },
    { label: "比价格", en: "Compare" },
    { label: "下单", en: "Order" },
    { label: "发确认", en: "Confirm" },
  ];

  return (
    <div className="ra-agent-scenario">
      <Kicker index="04" total="AI 名词" en="Agent · Example" />
      <div className="ra-agent-scenario-body">
        {/* Left: Plain AI chat */}
        <div className="ra-scenario-plain">
          <span className="ra-scenario-label">普通 AI</span>
          <div className="ra-scenario-chat">
            <div className="ra-chat-msg ra-chat-msg--user">
              <span className="ra-chat-role">USER</span>
              <p className="ra-chat-text">帮我订一张北京到上海的机票</p>
            </div>
            <div className="ra-chat-msg ra-chat-msg--ai">
              <span className="ra-chat-role">AI</span>
              <p className="ra-chat-text ra-chat-text--weak">好的，请去携程。</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="ra-scenario-divider" />

        {/* Right: Agent pipeline */}
        <div className="ra-scenario-agent">
          <span className="ra-scenario-label ra-scenario-label--accent">Agent</span>
          <div className="ra-scenario-pipeline">
            {agentSteps.map((s, i) => (
              <div key={i} className="ra-scenario-step-wrap">
                <div
                  className="ra-scenario-step"
                  style={{ animationDelay: `${0.4 + i * 0.25}s` }}
                >
                  <div className="ra-scenario-step-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="ra-scenario-step-text">
                    <span className="ra-scenario-step-label">{s.label}</span>
                    <span className="ra-scenario-step-en">{s.en}</span>
                  </div>
                </div>
                {i < agentSteps.length - 1 && (
                  <div
                    className="ra-scenario-step-connector"
                    style={{ animationDelay: `${0.55 + i * 0.25}s` }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="ra-scenario-multi-agent" style={{ animationDelay: "1.8s" }}>
            <span className="ra-scenario-multi-label">Multi-Agent</span>
            <span className="ra-scenario-multi-desc">多智能体协作</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 6 — MCP intro (tangled cables chaos)
 *  Animation: chaotic lines draw in, scattered connectors appear
 * ═══════════════════════════════════════════════════════════════════ */
function McpIntro() {
  return (
    <div className="ra-mcp-intro">
      <Kicker index="05" total="AI 名词" en="MCP" />
      <div className="ra-mcp-intro-body">
        {/* Title */}
        <div className="ra-mcp-intro-title">
          <h2 className="ra-hero-cn">模型上下文协议</h2>
          <p className="ra-hero-en">Model Context Protocol · Anthropic 2024</p>
        </div>
        {/* Tangled cables SVG */}
        <div className="ra-mcp-chaos">
          <svg viewBox="0 0 600 300" fill="none" className="ra-chaos-svg">
            {/* AI box on left */}
            <rect x="20" y="130" width="80" height="40" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
            <text x="60" y="155" textAnchor="middle" fontSize="14" fontFamily="var(--font-mono)" fill="var(--accent)" fontWeight="600">AI</text>
            {/* Tool boxes on right */}
            {[
              { y: 30, label: "DB" },
              { y: 90, label: "API" },
              { y: 150, label: "FS" },
              { y: 210, label: "Search" },
              { y: 270, label: "Notify" },
            ].map((tool, i) => (
              <g key={i}>
                <rect x="500" y={tool.y - 15} width="80" height="30" stroke="var(--text-mute)" strokeWidth="1" fill="var(--surface-2)" />
                <text x="540" y={tool.y + 5} textAnchor="middle" fontSize="12" fontFamily="var(--font-mono)" fill="var(--text-mute)">{tool.label}</text>
              </g>
            ))}
            {/* Tangled connection lines */}
            {[
              { y1: 150, y2: 30, curve: 120 },
              { y1: 150, y2: 90, curve: -80 },
              { y1: 150, y2: 150, curve: 200 },
              { y1: 150, y2: 210, curve: -150 },
              { y1: 150, y2: 270, curve: 100 },
            ].map((line, i) => (
              <path
                key={i}
                d={`M100 ${line.y1} C 250 ${line.y1 + line.curve}, 400 ${line.y2 - line.curve}, 500 ${line.y2}`}
                stroke="var(--text-mute)"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
                className="ra-chaos-line"
                style={{ animationDelay: `${0.3 + i * 0.15}s` }}
              />
            ))}
            {/* Chaos indicators — scattered X marks */}
            {[
              { x: 250, y: 60 }, { x: 380, y: 120 }, { x: 320, y: 200 }, { x: 420, y: 250 }
            ].map((pt, i) => (
              <g key={i} className="ra-chaos-x" style={{ animationDelay: `${0.8 + i * 0.1}s` }}>
                <line x1={pt.x - 5} y1={pt.y - 5} x2={pt.x + 5} y2={pt.y + 5} stroke="var(--text-faint)" strokeWidth="1" />
                <line x1={pt.x + 5} y1={pt.y - 5} x2={pt.x - 5} y2={pt.y + 5} stroke="var(--text-faint)" strokeWidth="1" />
              </g>
            ))}
          </svg>
        </div>
        <p className="ra-mcp-chaos-caption">每个工具都要定制对接</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 7 — MCP solution (USB-C hub)
 *  Animation: hub scales in, tools connect with clean lines, frameworks roll
 * ═══════════════════════════════════════════════════════════════════ */
function McpSolution() {
  const tools = [
    { label: "文件系统", en: "FileSystem", angle: -90 },
    { label: "数据库", en: "Database", angle: -30 },
    { label: "API", en: "API", angle: 30 },
    { label: "搜索引擎", en: "Search", angle: 90 },
    { label: "代码执行", en: "Code Exec", angle: 150 },
    { label: "消息通知", en: "Notify", angle: 210 },
  ];
  const frameworks = ["Claude", "LangChain", "Vercel AI SDK"];

  return (
    <div className="ra-mcp-solution">
      <Kicker index="05" total="AI 名词" en="MCP · Solution" />
      <div className="ra-mcp-solution-body">
        {/* USB-C hub diagram */}
        <div className="ra-mcp-hub-area">
          <svg viewBox="0 0 500 360" fill="none" className="ra-mcp-hub-svg">
            {/* MCP Server — central hub */}
            <g className="ra-mcp-hub-center">
              <rect x="200" y="150" width="100" height="60" fill="var(--accent)" />
              <text x="250" y="178" textAnchor="middle" fontSize="16" fontFamily="var(--font-mono)" fill="var(--surface)" fontWeight="700">MCP</text>
              <text x="250" y="196" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--surface)" opacity="0.7">Server</text>
            </g>
            {/* MCP Client label on left */}
            <g className="ra-mcp-client">
              <rect x="40" y="160" width="80" height="40" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent-soft)" />
              <text x="80" y="178" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill="var(--accent)" fontWeight="600">MCP</text>
              <text x="80" y="192" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--accent)">Client</text>
              {/* Clean single line from client to hub */}
              <line x1="120" y1="180" x2="200" y2="180" stroke="var(--accent)" strokeWidth="1.5" className="ra-mcp-clean-line" style={{ animationDelay: "0.3s" }} />
            </g>
            {/* Tools connected via standard interface */}
            {tools.map((tool, i) => {
              const rad = (tool.angle * Math.PI) / 180;
              const cx = 250 + Math.cos(rad) * 160;
              const cy = 180 + Math.sin(rad) * 120;
              const lineStartX = 250 + Math.cos(rad) * 55;
              const lineStartY = 180 + Math.sin(rad) * 35;
              return (
                <g key={i}>
                  {/* Clean radiating line */}
                  <line
                    x1={lineStartX}
                    y1={lineStartY}
                    x2={cx}
                    y2={cy}
                    stroke="var(--accent)"
                    strokeWidth="1"
                    opacity="0.5"
                    className="ra-mcp-spoke"
                    style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                  />
                  {/* Tool node */}
                  <g className="ra-mcp-tool" style={{ animationDelay: `${0.7 + i * 0.1}s` }}>
                    <rect
                      x={cx - 40}
                      y={cy - 16}
                      width="80"
                      height="32"
                      stroke="var(--accent)"
                      strokeWidth="1"
                      fill="var(--surface)"
                    />
                    <text
                      x={cx}
                      y={cy + 1}
                      textAnchor="middle"
                      fontSize="11"
                      fontFamily="var(--font-display-cn)"
                      fill="var(--text)"
                    >
                      {tool.label}
                    </text>
                    <text
                      x={cx}
                      y={cy + 12}
                      textAnchor="middle"
                      fontSize="8"
                      fontFamily="var(--font-mono)"
                      fill="var(--text-mute)"
                    >
                      {tool.en}
                    </text>
                  </g>
                  {/* Standard connector dot */}
                  <circle
                    cx={lineStartX}
                    cy={lineStartY}
                    r="3"
                    fill="var(--accent)"
                    className="ra-mcp-connector-dot"
                    style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                  />
                </g>
              );
            })}
          </svg>
        </div>
        {/* Frameworks */}
        <div className="ra-mcp-frameworks">
          <span className="ra-mcp-fw-label">已支持</span>
          <div className="ra-mcp-fw-list">
            {frameworks.map((fw, i) => (
              <span
                className="ra-mcp-fw"
                key={i}
                style={{ animationDelay: `${1.5 + i * 0.2}s` }}
              >
                {fw}
              </span>
            ))}
          </div>
        </div>
        <p className="ra-mcp-solution-caption">统一协议 · 一接即用</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Flow icons for RAG solution (step 1)
 * ═══════════════════════════════════════════════════════════════════ */
function FlowIcon({ kind }: { kind: string }) {
  const s = "var(--accent)";
  const sw = 1.5;
  switch (kind) {
    case "user":
      return (
        <svg viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="12" r="6" stroke={s} strokeWidth={sw} />
          <path d="M6 32 Q 18 20 30 32" stroke={s} strokeWidth={sw} fill="none" />
        </svg>
      );
    case "docs":
      return (
        <svg viewBox="0 0 36 36" fill="none">
          <rect x="6" y="4" width="24" height="28" stroke={s} strokeWidth={sw} fill="var(--accent-soft)" />
          <line x1="10" y1="12" x2="26" y2="12" stroke={s} strokeWidth="1" opacity="0.5" />
          <line x1="10" y1="18" x2="26" y2="18" stroke={s} strokeWidth="1" opacity="0.5" />
          <line x1="10" y1="24" x2="20" y2="24" stroke={s} strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case "bundle":
      return (
        <svg viewBox="0 0 36 36" fill="none">
          <rect x="6" y="8" width="24" height="20" stroke={s} strokeWidth={sw} />
          <line x1="6" y1="16" x2="30" y2="16" stroke={s} strokeWidth="1" opacity="0.5" />
          <text x="18" y="14" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill={s} fontWeight="600">Q</text>
          <text x="18" y="24" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill={s} fontWeight="600">+</text>
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 36 36" fill="none">
          <rect x="8" y="6" width="20" height="24" stroke={s} strokeWidth={sw} fill="var(--accent-soft)" />
          <circle cx="14" cy="14" r="2.5" fill={s} />
          <circle cx="22" cy="14" r="2.5" fill={s} />
          <line x1="14" y1="14" x2="22" y2="14" stroke={s} strokeWidth="0.8" />
          <rect x="12" y="20" width="12" height="5" fill={s} opacity="0.3" />
        </svg>
      );
    default:
      return null;
  }
}
