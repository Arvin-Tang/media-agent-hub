import type { CSSProperties } from "react";

/**
 * FourPatterns chapter — 8 steps (step 0–7)
 *   step 0: "四种核心组合模式" hero title + 1/2/3/4 numbered placeholders
 *   step 1: 模式一·流水线 — horizontal pipeline Claude→GPT-4o→Claude
 *   step 2: 模式二·投票 — one question splits to 3 models, consensus check
 *   step 3: 模式二补充 — voting boundary: facts ✓ vs creativity ✗
 *   step 4: 模式三·分工协作 — triangle role diagram PM↔Engineer↔Tester
 *   step 5: 模式三扩展 — framework names LangGraph / CrewAI / AutoGen
 *   step 6: 模式四·路由分发 — central router SVG, 4 paths to models
 *   step 7: 模式四扩展 — OpenRouter platform, "one entry, dozens of models"
 *
 * CSS prefix: .fp-
 * Theme: swiss-ikb (Klein Blue, weight 200, hairline grid, flat rectangles)
 */

export function FourPatterns({ step }: { step: number }) {
  return (
    <div className="fp-stage">
      {step === 0 && <PatternOverview />}
      {step === 1 && <PipelinePattern />}
      {step === 2 && <VotingPattern />}
      {step === 3 && <VotingBoundary />}
      {step === 4 && <CollaborationPattern />}
      {step === 5 && <CollaborationFrameworks />}
      {step === 6 && <RoutingPattern />}
      {step === 7 && <RoutingPlatform />}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Shared bits
 * ═══════════════════════════════════════════════════════════════════ */

function Kicker({ index, total, en }: { index: string; total: string; en: string }) {
  return (
    <div className="fp-kicker">
      <span className="fp-kicker-line" />
      <span className="fp-kicker-text">{index} / {total}</span>
      <span className="fp-kicker-sep">·</span>
      <span className="fp-kicker-en">{en}</span>
    </div>
  );
}

function ModelTag({ name, role }: { name: string; role?: string }) {
  return (
    <div className="fp-model-tag">
      <span className="fp-model-tag-name">{name}</span>
      {role && <span className="fp-model-tag-role">{role}</span>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 0 — 四种核心组合模式 overview
 *  Animation: hero title clip-reveal, 4 numbered cards stagger in
 * ═══════════════════════════════════════════════════════════════════ */
function PatternOverview() {
  const patterns = [
    { num: "01", name: "流水线", en: "Pipeline" },
    { num: "02", name: "投票", en: "Voting" },
    { num: "03", name: "分工协作", en: "Multi-Agent" },
    { num: "04", name: "路由分发", en: "Routing" },
  ];
  return (
    <div className="fp-overview">
      <Kicker index="03" total="多模型组合" en="Four Patterns" />
      <div className="fp-overview-body">
        <div className="fp-overview-title">
          <h2 className="fp-hero-cn">四种核心组合模式</h2>
          <p className="fp-hero-en">Four Core Combination Patterns</p>
        </div>
        <div className="fp-overview-grid">
          {patterns.map((p, i) => (
            <div
              className="fp-overview-card"
              key={i}
              style={{ animationDelay: `${0.6 + i * 0.2}s` }}
            >
              <span className="fp-overview-card-num">{p.num}</span>
              <span className="fp-overview-card-name">{p.name}</span>
              <span className="fp-overview-card-en">{p.en}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 1 — 模式一·流水线
 *  Animation: nodes draw in left-to-right, connector lines grow
 * ═══════════════════════════════════════════════════════════════════ */
function PipelinePattern() {
  const nodes = [
    { model: "Claude", task: "大纲撰写", en: "Outline", color: "accent" },
    { model: "GPT-4o", task: "代码校对", en: "Review", color: "accent" },
    { model: "Claude", task: "最终润色", en: "Polish", color: "accent" },
  ];
  return (
    <div className="fp-pipeline">
      <Kicker index="03" total="多模型组合" en="Pattern 01 · Pipeline" />
      <div className="fp-pipeline-body">
        <div className="fp-pipeline-header">
          <span className="fp-pattern-label">模式一</span>
          <h3 className="fp-pattern-title">流水线</h3>
          <span className="fp-pattern-en">Pipeline</span>
        </div>
        <div className="fp-pipeline-flow">
          {nodes.map((node, i) => (
            <div className="fp-pipeline-node-wrap" key={i}>
              {i > 0 && (
                <div className="fp-pipeline-connector">
                  <svg viewBox="0 0 80 24" preserveAspectRatio="none">
                    <line
                      x1="0" y1="12" x2="68" y2="12"
                      stroke="var(--accent)" strokeWidth="1.5"
                      className="fp-pipeline-connector-line"
                      style={{ animationDelay: `${0.3 + i * 0.3}s` }}
                    />
                    <path
                      d="M62 6 L76 12 L62 18"
                      stroke="var(--accent)" strokeWidth="1.5" fill="none"
                      className="fp-pipeline-connector-arrow"
                      style={{ animationDelay: `${0.45 + i * 0.3}s` }}
                    />
                  </svg>
                </div>
              )}
              <div
                className="fp-pipeline-node"
                style={{ animationDelay: `${0.2 + i * 0.3}s` }}
              >
                <div className="fp-pipeline-node-model">{node.model}</div>
                <div className="fp-pipeline-node-task">{node.task}</div>
                <div className="fp-pipeline-node-en">{node.en}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="fp-pipeline-principle" style={{ animationDelay: "1.4s" }}>
          <span className="fp-pipeline-principle-line" />
          <span className="fp-pipeline-principle-text">每个节点只做最擅长的事</span>
        </div>
        <div className="fp-pipeline-example" style={{ animationDelay: "1.6s" }}>
          <span className="fp-pipeline-example-label">案例</span>
          <span className="fp-pipeline-example-text">技术博客：结构清晰 + 代码准确 + 语言润色</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 2 — 模式二·投票
 *  Animation: question splits into 3 paths, answers converge, consensus badge drops
 * ═══════════════════════════════════════════════════════════════════ */
function VotingPattern() {
  const models = [
    { name: "GPT-4o", answer: "答案是 A", match: true },
    { name: "Claude", answer: "答案是 A", match: true },
    { name: "DeepSeek", answer: "答案是 B", match: false },
  ];
  return (
    <div className="fp-voting">
      <Kicker index="03" total="多模型组合" en="Pattern 02 · Voting" />
      <div className="fp-voting-body">
        <div className="fp-voting-header">
          <span className="fp-pattern-label">模式二</span>
          <h3 className="fp-pattern-title">投票法</h3>
          <span className="fp-pattern-en">Voting / Consensus</span>
        </div>
        <div className="fp-voting-diagram">
          {/* Question source */}
          <div className="fp-voting-question" style={{ animationDelay: "0.2s" }}>
            <span className="fp-voting-question-label">同一个问题</span>
            <span className="fp-voting-question-en">Same Query</span>
          </div>
          {/* Split lines SVG */}
          <svg className="fp-voting-split" viewBox="0 0 300 200" fill="none">
            {/* Three diverging lines */}
            <path d="M0 100 Q 80 100 150 30" stroke="var(--accent)" strokeWidth="1" fill="none"
              className="fp-voting-split-line" style={{ animationDelay: "0.4s" }} />
            <path d="M0 100 L 150 100" stroke="var(--accent)" strokeWidth="1" fill="none"
              className="fp-voting-split-line" style={{ animationDelay: "0.5s" }} />
            <path d="M0 100 Q 80 100 150 170" stroke="var(--accent)" strokeWidth="1" fill="none"
              className="fp-voting-split-line" style={{ animationDelay: "0.6s" }} />
          </svg>
          {/* Model answers */}
          <div className="fp-voting-answers">
            {models.map((m, i) => (
              <div
                className={`fp-voting-answer ${m.match ? "fp-voting-answer--match" : "fp-voting-answer--diff"}`}
                key={i}
                style={{ animationDelay: `${0.8 + i * 0.2}s` }}
              >
                <span className="fp-voting-answer-model">{m.name}</span>
                <span className="fp-voting-answer-text">{m.answer}</span>
                <span className={`fp-voting-answer-mark ${m.match ? "fp-voting-answer-mark--match" : ""}`}>
                  {m.match ? "✓" : "?"}
                </span>
              </div>
            ))}
          </div>
          {/* Consensus badge */}
          <div className="fp-voting-consensus" style={{ animationDelay: "1.6s" }}>
            <svg viewBox="0 0 24 24" fill="none" className="fp-voting-consensus-icon">
              <circle cx="12" cy="12" r="10" stroke="var(--accent)" strokeWidth="1.5" />
              <path d="M7 12 L11 16 L17 8" stroke="var(--accent)" strokeWidth="2" fill="none" />
            </svg>
            <span className="fp-voting-consensus-text">共识 = 大概率正确</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 3 — 模式二补充：投票法适用边界
 *  Animation: left/right comparison slides in, boundary line draws
 * ═══════════════════════════════════════════════════════════════════ */
function VotingBoundary() {
  return (
    <div className="fp-boundary">
      <Kicker index="03" total="多模型组合" en="Pattern 02 · Boundary" />
      <div className="fp-boundary-body">
        <div className="fp-boundary-header">
          <span className="fp-pattern-label">投票法</span>
          <span className="fp-boundary-subtitle">适用边界</span>
        </div>
        <div className="fp-boundary-compare">
          {/* Left: facts ✓ */}
          <div className="fp-boundary-side fp-boundary-side--yes" style={{ animationDelay: "0.3s" }}>
            <div className="fp-boundary-check">
              <svg viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="var(--accent)" strokeWidth="1.5" />
                <path d="M9 16 L14 21 L23 11" stroke="var(--accent)" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <span className="fp-boundary-side-label">适合</span>
            <div className="fp-boundary-tags">
              <span className="fp-boundary-tag">事实类</span>
              <span className="fp-boundary-tag">逻辑类</span>
              <span className="fp-boundary-tag">代码 Bug</span>
            </div>
            <p className="fp-boundary-desc">有客观标准答案，共识即正确</p>
          </div>
          {/* Divider */}
          <div className="fp-boundary-divider" />
          {/* Right: creativity ✗ */}
          <div className="fp-boundary-side fp-boundary-side--no" style={{ animationDelay: "0.5s" }}>
            <div className="fp-boundary-cross">
              <svg viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="var(--text-mute)" strokeWidth="1.5" />
                <path d="M10 10 L22 22 M22 10 L10 22" stroke="var(--text-mute)" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <span className="fp-boundary-side-label fp-boundary-side-label--mute">不适合</span>
            <div className="fp-boundary-tags">
              <span className="fp-boundary-tag fp-boundary-tag--mute">创意写作</span>
              <span className="fp-boundary-tag fp-boundary-tag--mute">头脑风暴</span>
              <span className="fp-boundary-tag fp-boundary-tag--mute">艺术创作</span>
            </div>
            <p className="fp-boundary-desc fp-boundary-desc--mute">三首诗没法取共识</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 4 — 模式三·分工协作
 *  Animation: triangle nodes scale-in, cyclic arrows draw
 * ═══════════════════════════════════════════════════════════════════ */
function CollaborationPattern() {
  const roles = [
    { role: "产品经理", model: "Claude", en: "PM", task: "需求分析", angle: -90 },
    { role: "工程师", model: "GPT-4o", en: "Engineer", task: "代码实现", angle: 30 },
    { role: "测试员", model: "DeepSeek", en: "Tester", task: "找 Bug", angle: 150 },
  ];
  return (
    <div className="fp-collab">
      <Kicker index="03" total="多模型组合" en="Pattern 03 · Multi-Agent" />
      <div className="fp-collab-body">
        <div className="fp-collab-header">
          <span className="fp-pattern-label">模式三</span>
          <h3 className="fp-pattern-title">分工协作</h3>
          <span className="fp-pattern-en">Multi-Agent</span>
        </div>
        <div className="fp-collab-diagram">
          <svg viewBox="0 0 500 400" fill="none" className="fp-collab-svg">
            {/* Cyclic arrows — triangle edges */}
            {/* PM → Engineer (top to right) */}
            <path
              d="M 290 90 Q 380 140 400 230"
              stroke="var(--accent)" strokeWidth="1.5" fill="none"
              className="fp-collab-arrow"
              style={{ animationDelay: "0.8s" }}
              markerEnd="url(#fp-arrowhead)"
            />
            {/* Engineer → Tester (right to bottom-left) */}
            <path
              d="M 360 290 Q 280 360 180 330"
              stroke="var(--accent)" strokeWidth="1.5" fill="none"
              className="fp-collab-arrow"
              style={{ animationDelay: "1.0s" }}
              markerEnd="url(#fp-arrowhead)"
            />
            {/* Tester → PM (bottom-left to top) */}
            <path
              d="M 140 270 Q 130 170 210 100"
              stroke="var(--accent)" strokeWidth="1.5" fill="none"
              className="fp-collab-arrow"
              style={{ animationDelay: "1.2s" }}
              markerEnd="url(#fp-arrowhead)"
            />
            {/* Arrow marker */}
            <defs>
              <marker id="fp-arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0 0 L8 4 L0 8" fill="var(--accent)" />
              </marker>
            </defs>
            {/* Role nodes */}
            {roles.map((r, i) => {
              const rad = (r.angle * Math.PI) / 180;
              const cx = 250 + Math.cos(rad) * 140;
              const cy = 200 + Math.sin(rad) * 140;
              return (
                <g
                  key={i}
                  className="fp-collab-node"
                  style={{ animationDelay: `${0.3 + i * 0.2}s` }}
                  transform={`translate(${cx}, ${cy})`}
                >
                  <circle cx="0" cy="0" r="56" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />
                  <text x="0" y="-14" textAnchor="middle" fontSize="16" fontFamily="var(--font-display-cn)" fill="var(--text)" fontWeight="500">{r.role}</text>
                  <text x="0" y="6" textAnchor="middle" fontSize="14" fontFamily="var(--font-mono)" fill="var(--accent)" fontWeight="600">{r.model}</text>
                  <text x="0" y="22" textAnchor="middle" fontSize="11" fontFamily="var(--font-body)" fill="var(--text-mute)">{r.task}</text>
                </g>
              );
            })}
            {/* Center label */}
            <text x="250" y="195" textAnchor="middle" fontSize="14" fontFamily="var(--font-mono)" fill="var(--text-faint)" letterSpacing="0.15em" className="fp-collab-center" style={{ animationDelay: "1.5s" }}>LOOP</text>
            <text x="250" y="212" textAnchor="middle" fontSize="11" fontFamily="var(--font-display-cn)" fill="var(--text-faint)" className="fp-collab-center" style={{ animationDelay: "1.5s" }}>自动化循环</text>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 5 — 模式三扩展：框架
 *  Animation: framework cards stagger in, auto-loop tag fades up
 * ═══════════════════════════════════════════════════════════════════ */
function CollaborationFrameworks() {
  const frameworks = [
    { name: "LangGraph", desc: "图结构编排", en: "Graph-based" },
    { name: "CrewAI", desc: "角色扮演", en: "Role-play" },
    { name: "AutoGen", desc: "对话式协作", en: "Conversational" },
  ];
  return (
    <div className="fp-frameworks">
      <Kicker index="03" total="多模型组合" en="Pattern 03 · Frameworks" />
      <div className="fp-frameworks-body">
        <div className="fp-frameworks-header" style={{ animationDelay: "0.2s" }}>
          <span className="fp-frameworks-label">Multi-Agent 框架</span>
          <span className="fp-frameworks-sub">2026 主流方案</span>
        </div>
        <div className="fp-frameworks-grid">
          {frameworks.map((fw, i) => (
            <div
              className="fp-framework-card"
              key={i}
              style={{ animationDelay: `${0.5 + i * 0.25}s` }}
            >
              <span className="fp-framework-card-name">{fw.name}</span>
              <span className="fp-framework-card-desc">{fw.desc}</span>
              <span className="fp-framework-card-en">{fw.en}</span>
            </div>
          ))}
        </div>
        <div className="fp-frameworks-tag" style={{ animationDelay: "1.4s" }}>
          <div className="fp-frameworks-tag-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 12 A 8 8 0 1 1 20 12" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
              <path d="M20 12 L16 8 M20 12 L16 16" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
              <path d="M4 12 L8 8 M4 12 L8 16" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <span className="fp-frameworks-tag-text">定义角色 · 工具 · 流程 → 自动跑</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
 *  Step 6 — 模式四·路由分发
 *  Animation: central router scales in, 4 paths draw out to model nodes
 * ═══════════════════════════════════════════════════════════════════ */
function RoutingPattern() {
  const routes = [
    { type: "画图", en: "Image", target: "Midjourney", angle: -75 },
    { type: "代码", en: "Code", target: "GPT-4o", angle: -25 },
    { type: "情书", en: "Writing", target: "Claude", angle: 25 },
    { type: "新闻", en: "News", target: "Gemini", angle: 75 },
  ];
  return (
    <div className="fp-routing">
      <Kicker index="03" total="多模型组合" en="Pattern 04 · Routing" />
      <div className="fp-routing-body">
        <div className="fp-routing-header">
          <span className="fp-pattern-label">模式四</span>
          <h3 className="fp-pattern-title">路由分发</h3>
          <span className="fp-pattern-en">Routing</span>
        </div>
        <div className="fp-routing-diagram">
          <svg viewBox="0 0 600 420" fill="none" className="fp-routing-svg">
            {/* Central router */}
            <g className="fp-routing-center" style={{ animationDelay: "0.2s" }}>
              <rect x="240" y="175" width="120" height="70" fill="var(--accent)" />
              <text x="300" y="205" textAnchor="middle" fontSize="18" fontFamily="var(--font-mono)" fill="var(--surface)" fontWeight="700">ROUTER</text>
              <text x="300" y="225" textAnchor="middle" fontSize="11" fontFamily="var(--font-display-cn)" fill="var(--surface)" opacity="0.8">路由层</text>
            </g>
            {/* User entry arrow */}
            <g className="fp-routing-entry" style={{ animationDelay: "0.4s" }}>
              <text x="80" y="205" textAnchor="middle" fontSize="14" fontFamily="var(--font-display-cn)" fill="var(--text-mute)">用户</text>
              <line x1="110" y1="210" x2="230" y2="210" stroke="var(--accent)" strokeWidth="1.5"
                className="fp-routing-entry-line" style={{ animationDelay: "0.4s" }} />
              <path d="M220 204 L234 210 L220 216" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
            </g>
            {/* Routes to models */}
            {routes.map((r, i) => {
              const rad = (r.angle * Math.PI) / 180;
              const endX = 300 + Math.cos(rad) * 240;
              const endY = 210 + Math.sin(rad) * 170;
              const startX = 300 + Math.cos(rad) * 65;
              const startY = 210 + Math.sin(rad) * 42;
              return (
                <g key={i}>
                  {/* Path line */}
                  <path
                    d={`M ${startX} ${startY} L ${endX} ${endY}`}
                    stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.5"
                    className="fp-routing-path"
                    style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                  />
                  {/* Type label on path */}
                  <text
                    x={300 + Math.cos(rad) * 120}
                    y={210 + Math.sin(rad) * 85 - 6}
                    textAnchor="middle"
                    fontSize="14"
                    fontFamily="var(--font-display-cn)"
                    fill="var(--text-mute)"
                    className="fp-routing-type"
                    style={{ animationDelay: `${0.8 + i * 0.15}s` }}
                  >
                    {r.type}
                  </text>
                  {/* Target model node */}
                  <g
                    className="fp-routing-target"
                    style={{ animationDelay: `${1.0 + i * 0.15}s` }}
                    transform={`translate(${endX}, ${endY})`}
                  >
                    <rect x="-60" y="-20" width="120" height="40" stroke="var(--accent)" strokeWidth="1" fill="var(--surface)" />
                    <text x="0" y="-2" textAnchor="middle" fontSize="15" fontFamily="var(--font-mono)" fill="var(--accent)" fontWeight="600">{r.target}</text>
                    <text x="0" y="12" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--text-mute)" letterSpacing="0.05em">{r.en.toUpperCase()}</text>
                  </g>
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
 *  Step 7 — 模式四扩展：OpenRouter
 *  Animation: platform banner slides in, model dots populate, tagline drops
 * ═══════════════════════════════════════════════════════════════════ */
function RoutingPlatform() {
  const models = [
    "GPT-4o", "Claude", "DeepSeek", "Gemini", "Midjourney",
    "Llama", "Mistral", "Qwen", "Grok", "DALL·E",
  ];
  return (
    <div className="fp-platform">
      <Kicker index="03" total="多模型组合" en="Pattern 04 · OpenRouter" />
      <div className="fp-platform-body">
        <div className="fp-platform-header" style={{ animationDelay: "0.2s" }}>
          <span className="fp-platform-name">OpenRouter</span>
          <span className="fp-platform-tag">一个入口</span>
        </div>
        <div className="fp-platform-diagram">
          {/* Single entry point */}
          <div className="fp-platform-entry" style={{ animationDelay: "0.4s" }}>
            <div className="fp-platform-entry-box">
              <span className="fp-platform-entry-text">API Request</span>
            </div>
            <div className="fp-platform-entry-arrow">
              <svg viewBox="0 0 60 8" preserveAspectRatio="none">
                <line x1="0" y1="4" x2="52" y2="4" stroke="var(--accent)" strokeWidth="1.5" className="fp-platform-arrow-line" />
                <path d="M48 1 L58 4 L48 7" stroke="var(--accent)" strokeWidth="1.5" fill="none" className="fp-platform-arrow-head" />
              </svg>
            </div>
            <div className="fp-platform-hub" style={{ animationDelay: "0.6s" }}>
              <span className="fp-platform-hub-text">OpenRouter</span>
              <span className="fp-platform-hub-sub">Routing Layer</span>
            </div>
          </div>
          {/* Fan-out to models */}
          <div className="fp-platform-fanout">
            <svg viewBox="0 0 500 120" fill="none" className="fp-platform-fanout-svg">
              {/* Lines from hub to each model */}
              {models.map((_, i) => {
                const startX = 250;
                const startY = 10;
                const endX = 50 + i * 45;
                const endY = 100;
                return (
                  <line
                    key={i}
                    x1={startX} y1={startY}
                    x2={endX} y2={endY}
                    stroke="var(--accent)" strokeWidth="0.8" opacity="0.3"
                    className="fp-platform-fanout-line"
                    style={{ animationDelay: `${0.8 + i * 0.06}s` }}
                  />
                );
              })}
            </svg>
          </div>
          {/* Model chips */}
          <div className="fp-platform-models">
            {models.map((m, i) => (
              <span
                className="fp-platform-model-chip"
                key={i}
                style={{ animationDelay: `${1.0 + i * 0.06}s` }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>
        <div className="fp-platform-tagline" style={{ animationDelay: "2.0s" }}>
          <span className="fp-platform-tagline-num">1</span>
          <span className="fp-platform-tagline-arrow">→</span>
          <span className="fp-platform-tagline-num">几十</span>
          <span className="fp-platform-tagline-text">一个入口，几十个模型</span>
        </div>
      </div>
    </div>
  );
}
