import Link from "next/link";

// ─── Shared helpers ────────────────────────────────────────────────────────────

function Pill({
  variant,
  children,
}: {
  variant: "best" | "good" | "mid" | "hard";
  children: React.ReactNode;
}) {
  const styles = {
    best: "bg-[rgba(86,229,100,0.12)] text-[#56e564]",
    good: "bg-[rgba(56,229,196,0.12)] text-[#38e5c4]",
    mid: "bg-[rgba(240,162,59,0.12)] text-[#f0a23b]",
    hard: "bg-[rgba(240,91,91,0.12)] text-[#f05b5b]",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-[family-name:var(--font-ibm-mono)] ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

function Badge({
  variant,
  children,
}: {
  variant: "blue" | "teal" | "amber" | "red" | "green";
  children: React.ReactNode;
}) {
  const styles = {
    blue: "bg-[rgba(91,106,240,0.18)] text-[#8b98f8] border border-[rgba(91,106,240,0.3)]",
    teal: "bg-[rgba(56,229,196,0.12)] text-[#38e5c4] border border-[rgba(56,229,196,0.25)]",
    amber: "bg-[rgba(240,162,59,0.14)] text-[#f0a23b] border border-[rgba(240,162,59,0.3)]",
    red: "bg-[rgba(240,91,91,0.12)] text-[#f08b8b] border border-[rgba(240,91,91,0.25)]",
    green: "bg-[rgba(56,229,100,0.12)] text-[#56e564] border border-[rgba(56,229,100,0.25)]",
  };
  return (
    <span
      className={`text-[10px] font-[family-name:var(--font-ibm-mono)] px-2 py-0.5 rounded-[3px] uppercase tracking-[0.05em] ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-[family-name:var(--font-ibm-mono)] text-xs px-2 py-1 rounded bg-[#1c1f27] text-zinc-300 border border-zinc-600 m-0.5">
      {children}
    </span>
  );
}

function SectionHead({
  index,
  title,
  id,
}: {
  index: string;
  title: string;
  id: string;
}) {
  return (
    <div
      id={id}
      className="flex items-baseline gap-3 mb-7 pb-3 border-b border-[#2a2d38] scroll-mt-16"
    >
      <span className="font-[family-name:var(--font-ibm-mono)] text-[11px] text-[#5b6af0] bg-[rgba(91,106,240,0.12)] px-[7px] py-[2px] rounded-[3px]">
        {index}
      </span>
      <h2 className="font-[family-name:var(--font-syne)] text-[22px] font-bold tracking-[-0.01em] text-[#e8eaf0]">
        {title}
      </h2>
    </div>
  );
}

function ArchCard({
  badge,
  badgeVariant,
  title,
  children,
}: {
  badge: string;
  badgeVariant: "blue" | "teal" | "amber" | "red" | "green";
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#13151a] border border-[#2a2d38] rounded-[10px] p-5 hover:border-[#3d4158] transition-colors">
      <div className="flex items-center gap-2.5 mb-3.5">
        <Badge variant={badgeVariant}>{badge}</Badge>
        <h3 className="font-[family-name:var(--font-syne)] text-[15px] font-bold text-[#e8eaf0]">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

function FlowBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0c0d10] border border-[#2a2d38] rounded-lg px-4 py-3.5 font-[family-name:var(--font-ibm-mono)] text-[13px] leading-loose text-zinc-300">
      {children}
    </div>
  );
}

function FlowArrow() {
  return <span className="text-zinc-500 block">{"  ↓"}</span>;
}

function Hl({ children }: { children: React.ReactNode }) {
  return <span className="text-[#38e5c4]">{children}</span>;
}
function Hl2({ children }: { children: React.ReactNode }) {
  return <span className="text-[#5b6af0]">{children}</span>;
}
function Hl3({ children }: { children: React.ReactNode }) {
  return <span className="text-[#f0a23b]">{children}</span>;
}
function Dim({ children }: { children: React.ReactNode }) {
  return <span className="text-zinc-400">{children}</span>;
}

function TableWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-[10px] border border-[#2a2d38]">
      <table className="w-full border-collapse">{children}</table>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 font-[family-name:var(--font-ibm-mono)] text-xs uppercase tracking-widest text-zinc-300 text-left border-b border-[#2a2d38] whitespace-nowrap bg-[#1c1f27]">
      {children}
    </th>
  );
}

function Td({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: "default" | "muted" | "best" | "good" | "mid" | "bad" | "first";
}) {
  const styles: Record<string, string> = {
    default: "text-[#e8eaf0]",
    muted: "text-zinc-300",
    best: "text-[#56e564] font-[family-name:var(--font-ibm-mono)] font-semibold",
    good: "text-[#38e5c4] font-[family-name:var(--font-ibm-mono)]",
    mid: "text-[#f0a23b] font-[family-name:var(--font-ibm-mono)]",
    bad: "text-[#f05b5b] font-[family-name:var(--font-ibm-mono)]",
    first:
      "font-[family-name:var(--font-ibm-mono)] text-[13px] font-medium whitespace-nowrap text-[#e8eaf0]",
  };
  return (
    <td
      className={`px-4 py-[11px] text-[15px] align-middle ${styles[variant ?? "default"]}`}
    >
      {children}
    </td>
  );
}

function Tr({ children }: { children: React.ReactNode }) {
  return (
    <tr className="border-b border-[#2a2d38] last:border-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
      {children}
    </tr>
  );
}

function FeatureBlock({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#13151a] border border-[#2a2d38] rounded-[10px] p-5">
      <h3 className="font-[family-name:var(--font-syne)] text-[14px] font-bold text-[#e8eaf0] mb-3.5 flex items-center gap-2">
        {title}
      </h3>
      {children}
    </div>
  );
}

function FiItem({
  dot,
  children,
}: {
  dot: "blue" | "teal" | "amber";
  children: React.ReactNode;
}) {
  const dotColor = {
    blue: "bg-[#5b6af0]",
    teal: "bg-[#38e5c4]",
    amber: "bg-[#f0a23b]",
  };
  return (
    <div className="flex items-start gap-2 mb-2.5 text-[15px] text-zinc-300 leading-relaxed">
      <div
        className={`w-1.5 h-1.5 rounded-full mt-[7px] shrink-0 ${dotColor[dot]}`}
      />
      <span>{children}</span>
    </div>
  );
}

function PipelineNode({
  icon,
  label,
  sub,
  color,
}: {
  icon: string;
  label: string;
  sub?: string;
  color: "blue" | "teal" | "amber";
}) {
  const iconStyles = {
    blue: "bg-[rgba(91,106,240,0.15)] border-[rgba(91,106,240,0.4)]",
    teal: "bg-[rgba(56,229,196,0.10)] border-[rgba(56,229,196,0.35)]",
    amber: "bg-[rgba(240,162,59,0.12)] border-[rgba(240,162,59,0.35)]",
  };
  return (
    <div className="flex flex-col items-center text-center min-w-[110px] shrink-0">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-[22px] mb-2.5 border ${iconStyles[color]}`}
      >
        {icon}
      </div>
      <div className="font-[family-name:var(--font-ibm-mono)] text-xs text-zinc-300 uppercase tracking-[0.05em] leading-snug text-center">
        {label}
        {sub && <div className="text-xs text-zinc-400 mt-0.5 normal-case">{sub}</div>}
      </div>
    </div>
  );
}

function PipeArrow() {
  return (
    <div className="text-zinc-500 text-lg px-1 mb-6 shrink-0">→</div>
  );
}

function CostBar({
  label,
  width,
  color,
  value,
  labelWidth = "200px",
}: {
  label: string;
  width: string;
  color: string;
  value: string;
  labelWidth?: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-2.5">
      <div
        className="font-[family-name:var(--font-ibm-mono)] text-[11px] text-[#e8eaf0] whitespace-nowrap shrink-0"
        style={{ minWidth: labelWidth }}
      >
        {label}
      </div>
      <div className="flex-1 h-2 bg-[#1c1f27] rounded overflow-hidden">
        <div
          className="h-full rounded"
          style={{ width, backgroundColor: color }}
        />
      </div>
      <div className="font-[family-name:var(--font-ibm-mono)] text-[11px] text-[#7a7f96] min-w-[60px] text-right">
        {value}
      </div>
    </div>
  );
}

function CostCard({
  label,
  value,
  valueColor,
  desc,
}: {
  label: string;
  value: string;
  valueColor: string;
  desc: string;
}) {
  return (
    <div className="bg-[#13151a] border border-[#2a2d38] rounded-[10px] p-[18px_20px]">
      <div className="font-[family-name:var(--font-ibm-mono)] text-[10px] text-[#7a7f96] uppercase tracking-widest mb-1.5">
        {label}
      </div>
      <div
        className="font-[family-name:var(--font-syne)] text-[28px] font-extrabold leading-none mb-1"
        style={{ color: valueColor }}
      >
        {value}
      </div>
      <div className="text-sm text-zinc-300">{desc}</div>
    </div>
  );
}

function RecCard({
  phase,
  phaseLabel,
  title,
  desc,
  stack,
  variant,
}: {
  phase: string;
  phaseLabel: string;
  title: string;
  desc: string;
  stack: string;
  variant: 1 | 2 | 3;
}) {
  const styles = {
    1: {
      card: "bg-[rgba(91,106,240,0.07)] border border-[rgba(91,106,240,0.3)]",
      phase: "text-[#5b6af0]",
    },
    2: {
      card: "bg-[rgba(56,229,196,0.07)] border border-[rgba(56,229,196,0.3)]",
      phase: "text-[#38e5c4]",
    },
    3: {
      card: "bg-[rgba(240,162,59,0.07)] border border-[rgba(240,162,59,0.3)]",
      phase: "text-[#f0a23b]",
    },
  };
  return (
    <div className={`${styles[variant].card} rounded-[10px] p-5`}>
      <div
        className={`font-[family-name:var(--font-ibm-mono)] text-[10px] uppercase tracking-widest mb-1.5 ${styles[variant].phase}`}
      >
        {phaseLabel}
      </div>
      <h3 className="font-[family-name:var(--font-syne)] text-[15px] font-bold text-[#e8eaf0] mb-2">
        {title}
      </h3>
      <p className="text-sm text-zinc-300 leading-relaxed mb-3">{desc}</p>
      <div className="mt-3 p-[10px_12px] bg-[rgba(0,0,0,0.25)] rounded font-[family-name:var(--font-ibm-mono)] text-[11px] text-[#e8eaf0] leading-[1.8] whitespace-pre-line">
        {stack}
      </div>
    </div>
  );
}

function ToolStep({
  label,
  sub,
}: {
  label: string;
  sub: string;
}) {
  return (
    <div className="bg-[#0c0d10] border border-[#2a2d38] rounded-lg px-3.5 py-2.5 font-[family-name:var(--font-ibm-mono)] text-[11px] text-[#7a7f96] whitespace-nowrap shrink-0">
      <span className="text-[#e8eaf0] block mb-0.5 text-[12px]">{label}</span>
      {sub}
    </div>
  );
}

function ToolArrow() {
  return <div className="text-zinc-500 text-base px-1.5 shrink-0">→</div>;
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0c0d10] border border-[#2a2d38] rounded-lg px-[18px] py-4 font-[family-name:var(--font-ibm-mono)] text-[13px] leading-[1.8] text-zinc-400 overflow-x-auto mt-3">
      {children}
    </div>
  );
}

function CK({ children }: { children: React.ReactNode }) {
  return <span className="text-[#8b98f8]">{children}</span>;
}
function CS({ children }: { children: React.ReactNode }) {
  return <span className="text-[#38e5c4]">{children}</span>;
}
function CN({ children }: { children: React.ReactNode }) {
  return <span className="text-[#f0a23b]">{children}</span>;
}
function CC({ children }: { children: React.ReactNode }) {
  return <span className="text-zinc-400">{children}</span>;
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function VoiceAgentsPage() {
  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#e8eaf0] font-sans text-[14px] leading-[1.6]">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[rgba(12,13,16,0.92)] backdrop-blur-md border-b border-[#2a2d38] h-[52px] flex items-center px-8 gap-2 overflow-x-auto">
        <span className="font-[family-name:var(--font-ibm-mono)] text-[11px] text-[#38e5c4] uppercase tracking-widest whitespace-nowrap mr-4">
          Voice Agent Blueprint
        </span>
        {[
          ["#pipeline", "Pipeline"],
          ["#options", "Options"],
          ["#outbound", "Outbound"],
          ["#observability", "Observability"],
          ["#tools-memory", "Tools & Memory"],
          ["#costs", "Costs"],
          ["#rec", "Recommendation"],
          ["#ux-concerns", "UX & Edge Cases"],
          ["#voice-cloning", "Voice Cloning"],
          ["#checklist", "Checklist"],
          ["#summary", "Summary"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="font-[family-name:var(--font-ibm-mono)] text-xs text-zinc-300 hover:text-white px-2.5 py-1 rounded hover:bg-[#1c1f27] whitespace-nowrap transition-colors"
          >
            {label}
          </a>
        ))}
        <Link
          href="/resources"
          className="font-[family-name:var(--font-ibm-mono)] text-xs text-[#38e5c4] px-2.5 py-1 rounded hover:bg-[#1c1f27] whitespace-nowrap transition-colors ml-auto"
        >
          ← Back
        </Link>
      </nav>

      <div className="max-w-[1100px] mx-auto px-6 pb-20">

        {/* Hero */}
        <div className="py-16 border-b border-[#2a2d38] mb-14">
          <p className="font-[family-name:var(--font-ibm-mono)] text-[11px] text-[#38e5c4] uppercase tracking-[0.15em] mb-4">
            Architecture Reference · 2026
          </p>
          <h1 className="font-[family-name:var(--font-syne)] text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-5">
            Voice Agent<br />
            <span className="text-[#5b6af0]">Blueprint</span>
          </h1>
          <p className="text-zinc-300 text-lg max-w-[600px] leading-relaxed">
            Everything you need to add a voice AI to your portfolio or build a full outbound call agent — from browser mic to phone calls, tool use, memory, observability, and real cost numbers.
          </p>
        </div>

        {/* ── 01 Pipeline ─────────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHead index="01" title="How a Voice Agent Works" id="pipeline" />

          <div className="bg-[#13151a] border border-[#2a2d38] rounded-xl p-8 flex items-center overflow-x-auto mb-6 gap-0">
            <PipelineNode icon="🎤" label="User Speaks" color="blue" />
            <PipeArrow />
            <PipelineNode icon="📝" label="STT" sub="Deepgram Flux" color="teal" />
            <PipeArrow />
            <PipelineNode icon="🧠" label="LLM" sub="GPT-4o / Claude" color="blue" />
            <PipeArrow />
            <PipelineNode icon="🔧" label="Tool Call" sub="Optional" color="amber" />
            <PipeArrow />
            <PipelineNode icon="🔊" label="TTS" sub="Deepgram Aura-2" color="teal" />
            <PipeArrow />
            <PipelineNode icon="👂" label="User Hears" color="blue" />
          </div>

          <p className="text-zinc-300 text-base leading-relaxed">
            All 4 layers run over a single WebSocket to{" "}
            <code className="font-[family-name:var(--font-ibm-mono)] text-[#38e5c4] text-[12px]">
              wss://agent.deepgram.com/v1/agent/converse
            </code>{" "}
            when using Deepgram&apos;s Voice Agent API. The connection stays open for the full conversation duration.
          </p>
        </section>

        {/* ── 02 Options ──────────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHead index="02" title="Voice Agent Options Compared" id="options" />

          <div className="mb-6">
            <TableWrap>
              <thead>
                <tr>
                  <Th>Provider</Th>
                  <Th>Ease of Setup</Th>
                  <Th>Control</Th>
                  <Th>Voice Quality</Th>
                  <Th>Cost (est.)</Th>
                  <Th>Best For</Th>
                </tr>
              </thead>
              <tbody>
                <Tr>
                  <Td variant="first">ElevenLabs</Td>
                  <Td><Pill variant="best">Easiest</Pill></Td>
                  <Td><Pill variant="hard">Low</Pill></Td>
                  <Td><Pill variant="best">Best</Pill></Td>
                  <Td variant="muted">Paid, premium</Td>
                  <Td variant="muted">Quick voice demo, no code</Td>
                </Tr>
                <Tr>
                  <Td variant="first">Vapi.ai</Td>
                  <Td><Pill variant="good">Easy</Pill></Td>
                  <Td><Pill variant="mid">Medium</Pill></Td>
                  <Td><Pill variant="good">Good</Pill></Td>
                  <Td variant="muted">Paid, ~$0.08–0.10/min</Td>
                  <Td variant="muted">Outbound calling, fast MVP</Td>
                </Tr>
                <Tr>
                  <Td variant="first">Deepgram Voice Agent</Td>
                  <Td><Pill variant="mid">Medium</Pill></Td>
                  <Td><Pill variant="best">High</Pill></Td>
                  <Td><Pill variant="good">Good</Pill></Td>
                  <Td variant="best">$0.075/min (agent)</Td>
                  <Td variant="muted">Portfolio, full control, cheapest AI</Td>
                </Tr>
                <Tr>
                  <Td variant="first">OpenAI Realtime API</Td>
                  <Td><Pill variant="hard">Hard</Pill></Td>
                  <Td><Pill variant="best">High</Pill></Td>
                  <Td><Pill variant="best">Best LLM</Pill></Td>
                  <Td variant="muted">Moderate</Td>
                  <Td variant="muted">GPT-4o native voice quality</Td>
                </Tr>
                <Tr>
                  <Td variant="first">Retell AI</Td>
                  <Td><Pill variant="good">Easy</Pill></Td>
                  <Td><Pill variant="mid">Medium</Pill></Td>
                  <Td><Pill variant="mid">Good</Pill></Td>
                  <Td variant="muted">Paid</Td>
                  <Td variant="muted">Prototyping, similar to Vapi</Td>
                </Tr>
              </tbody>
            </TableWrap>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ArchCard badge="Browser Voice Bot" badgeVariant="teal" title="Portfolio Agent">
              <FlowBlock>
                <div><Hl>Your Site</Hl></div>
                <FlowArrow />
                <div><Hl2>VoiceChat.tsx</Hl2> <Dim>component</Dim></div>
                <FlowArrow />
                <div><Hl3>Next.js API Route</Hl3> <Dim>(token)</Dim></div>
                <FlowArrow />
                <div><Hl>Deepgram WebSocket</Hl></div>
                <FlowArrow />
                <div><Hl2>~150 lines · Free tier</Hl2></div>
              </FlowBlock>
            </ArchCard>

            <ArchCard badge="Key Requirement" badgeVariant="amber" title="System Prompt = Your Persona">
              <FlowBlock>
                <div><Hl2>&quot;You are Vinay&apos;s portfolio</Hl2></div>
                <div><Hl2> assistant. Answer questions</Hl2></div>
                <div><Hl2> about his experience,</Hl2></div>
                <div><Hl2> projects, and skills...&quot;</Hl2></div>
                <FlowArrow />
                <div><Hl>Skills: React, Next.js,</Hl></div>
                <div><Hl> AI/LLM, DesiQuant, BJJ AI</Hl></div>
              </FlowBlock>
            </ArchCard>
          </div>
        </section>

        {/* ── 03 Outbound ─────────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHead index="03" title="Outbound Calling Architecture" id="outbound" />

          <p className="text-zinc-300 text-base leading-relaxed mb-5">
            You cannot call a real phone number without PSTN connectivity. The question is who owns that connection — you or a managed provider.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <ArchCard badge="Path 1 — Recommended" badgeVariant="teal" title="Managed API (No SIP Trunk)">
              <FlowBlock>
                <div><Hl2>Form Submitted</Hl2></div>
                <FlowArrow />
                <div><Hl>Next.js API Route</Hl></div>
                <FlowArrow />
                <div><Hl3>POST → Twilio / SignalWire</Hl3></div>
                <div><Dim>  (they own the SIP)</Dim></div>
                <FlowArrow />
                <div><Hl>Call connects</Hl></div>
                <FlowArrow />
                <div><Hl2>Audio WebSocket → Your server</Hl2></div>
                <FlowArrow />
                <div><Hl>Deepgram Voice Agent</Hl></div>
                <FlowArrow />
                <div><Hl2>User hears the bot</Hl2></div>
              </FlowBlock>
              <div className="mt-3.5 flex flex-wrap gap-1">
                <Tag>Hours to setup</Tag>
                <Tag>No telephony knowledge</Tag>
                <Tag>Serverless OK</Tag>
                <Tag>~$1–2/mo number</Tag>
              </div>
            </ArchCard>

            <ArchCard badge="Path 2 — Production Scale" badgeVariant="amber" title="Own SIP Trunk">
              <FlowBlock>
                <div><Hl2>Form Submitted</Hl2></div>
                <FlowArrow />
                <div><Hl3>Asterisk / FreeSWITCH</Hl3></div>
                <div><Dim>  (runs on your VPS)</Dim></div>
                <FlowArrow />
                <div><Hl>SIP Trunk → Tata/Airtel/Plivo</Hl></div>
                <FlowArrow />
                <div><Hl2>PSTN → User&apos;s phone</Hl2></div>
                <FlowArrow />
                <div><Hl>Audio piped ↔ Deepgram</Hl></div>
              </FlowBlock>
              <div className="mt-3.5 flex flex-wrap gap-1">
                <Tag>Days to setup</Tag>
                <Tag>Dedicated VPS required</Tag>
                <Tag>Max control</Tag>
                <Tag>Cheapest at scale</Tag>
              </div>
            </ArchCard>
          </div>

          <div className="mb-4">
            <TableWrap>
              <thead>
                <tr>
                  <Th>Comparison</Th>
                  <Th>Managed API (Path 1)</Th>
                  <Th>Own SIP Trunk (Path 2)</Th>
                </tr>
              </thead>
              <tbody>
                <Tr><Td variant="first">Setup Time</Td><Td variant="muted">Hours</Td><Td variant="muted">Days / Weeks</Td></Tr>
                <Tr><Td variant="first">Server Type</Td><Td variant="muted">Serverless (Vercel)</Td><Td variant="muted">Dedicated VPS 24/7</Td></Tr>
                <Tr><Td variant="first">Telephony Knowledge</Td><Td variant="muted">None needed</Td><Td variant="muted">Asterisk/FreeSWITCH config</Td></Tr>
                <Tr><Td variant="first">Indian Numbers</Td><Td variant="muted">Via Plivo/Twilio</Td><Td variant="muted">Direct from any carrier</Td></Tr>
                <Tr><Td variant="first">Cost Model</Td><Td variant="muted">Per-minute + number fee</Td><Td variant="muted">SIP trunk + server hosting</Td></Tr>
                <Tr><Td variant="first">Best For</Td><Td variant="muted">Experiments, MVPs, portfolio</Td><Td variant="muted">Production, scale, custom routing</Td></Tr>
              </tbody>
            </TableWrap>
          </div>

          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-4 mt-7">
            Telephony Providers — Managed Options
          </h3>
          <TableWrap>
            <thead>
              <tr>
                <Th>Provider</Th>
                <Th>Type</Th>
                <Th>WebSocket Streaming</Th>
                <Th>Indian Numbers</Th>
                <Th>Outbound/min</Th>
                <Th>Number/mo</Th>
              </tr>
            </thead>
            <tbody>
              <Tr>
                <Td variant="first">Twilio</Td>
                <Td variant="muted">Managed</Td>
                <Td variant="best">✅ Yes</Td>
                <Td variant="best">✅ Yes</Td>
                <Td variant="mid">$0.0140</Td>
                <Td variant="muted">$1.15</Td>
              </Tr>
              <Tr>
                <Td variant="first">SignalWire</Td>
                <Td variant="muted">Managed (OSS roots)</Td>
                <Td variant="best">✅ Yes</Td>
                <Td variant="muted">⚠️ Limited</Td>
                <Td variant="good">$0.0080</Td>
                <Td variant="muted">$0.50</Td>
              </Tr>
              <Tr>
                <Td variant="first">SignalWire SIP</Td>
                <Td variant="muted">Semi-managed</Td>
                <Td variant="best">✅ Yes</Td>
                <Td variant="muted">⚠️ Limited</Td>
                <Td variant="best">$0.0030</Td>
                <Td variant="muted">$0.50</Td>
              </Tr>
              <Tr>
                <Td variant="first">Plivo</Td>
                <Td variant="muted">Managed</Td>
                <Td variant="best">✅ Yes</Td>
                <Td variant="best">✅ Yes</Td>
                <Td variant="mid">$0.0115</Td>
                <Td variant="muted">~$0.80</Td>
              </Tr>
              <Tr>
                <Td variant="first">Telnyx</Td>
                <Td variant="muted">Managed</Td>
                <Td variant="best">✅ Good</Td>
                <Td variant="best">✅ Yes</Td>
                <Td variant="good">$0.0070</Td>
                <Td variant="muted">~$1.00</Td>
              </Tr>
              <Tr>
                <Td variant="first">Exotel (India)</Td>
                <Td variant="muted">Indian IVR</Td>
                <Td variant="bad">❌ No realtime</Td>
                <Td variant="best">✅ Yes</Td>
                <Td variant="mid">~₹0.40/min</Td>
                <Td variant="muted">₹500+</Td>
              </Tr>
              <Tr>
                <Td variant="first">SIP Trunk (Tata/Airtel)</Td>
                <Td variant="muted">Self-managed</Td>
                <Td variant="best">✅ With Asterisk</Td>
                <Td variant="best">✅ Native</Td>
                <Td variant="best">$0.002–0.005</Td>
                <Td variant="muted">₹500–1500</Td>
              </Tr>
            </tbody>
          </TableWrap>
          <p className="mt-2.5 text-sm text-zinc-500">
            ⚠️ Indian providers like Exotel lack real-time WebSocket audio streaming — they&apos;re built for IVR, not live AI conversation.
          </p>
        </section>

        {/* ── 04 Observability ────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHead index="04" title="Observability Stack" id="observability" />

          <p className="text-zinc-300 text-base leading-relaxed mb-5">
            LangSmith covers only the LLM layer. A voice bot has 4 distinct layers — each needs its own monitoring strategy.
          </p>

          <div className="bg-[#13151a] border border-[#2a2d38] rounded-xl p-6 mb-5">
            <TableWrap>
              <thead>
                <tr>
                  <Th>Layer</Th>
                  <Th>What to Monitor</Th>
                  <Th>Best Tool</Th>
                  <Th>LangSmith Covers?</Th>
                </tr>
              </thead>
              <tbody>
                <Tr>
                  <Td variant="first">🎤 STT (Deepgram)</Td>
                  <Td variant="muted">Transcription accuracy, confidence scores, latency</Td>
                  <Td variant="muted">Deepgram dashboard + custom logs</Td>
                  <Td variant="bad">❌ No</Td>
                </Tr>
                <Tr>
                  <Td variant="first">🧠 LLM Layer</Td>
                  <Td variant="muted">Prompts, responses, tokens, cost, latency</Td>
                  <Td variant="good">Langfuse (OSS) or LangSmith</Td>
                  <Td variant="best">✅ Yes</Td>
                </Tr>
                <Tr>
                  <Td variant="first">🔊 TTS (Deepgram Aura)</Td>
                  <Td variant="muted">Audio generation latency, quality</Td>
                  <Td variant="muted">Custom logs</Td>
                  <Td variant="bad">❌ No</Td>
                </Tr>
                <Tr>
                  <Td variant="first">📞 Call / Session</Td>
                  <Td variant="muted">Duration, drop rate, user sentiment, recordings</Td>
                  <Td variant="muted">Custom DB + Deepgram logs</Td>
                  <Td variant="bad">❌ No</Td>
                </Tr>
                <Tr>
                  <Td variant="first">🖥️ Infrastructure</Td>
                  <Td variant="muted">WebSocket stability, errors, server health</Td>
                  <Td variant="muted">Sentry / Datadog / Grafana</Td>
                  <Td variant="bad">❌ No</Td>
                </Tr>
              </tbody>
            </TableWrap>
          </div>

          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            LangSmith vs Langfuse (LLM Layer)
          </h3>
          <div className="mb-6">
            <TableWrap>
              <thead>
                <tr>
                  <Th>Feature</Th>
                  <Th>LangSmith</Th>
                  <Th>Langfuse</Th>
                </tr>
              </thead>
              <tbody>
                <Tr><Td variant="first">Open Source</Td><Td variant="bad">❌ No</Td><Td variant="best">✅ Yes</Td></Tr>
                <Tr><Td variant="first">Self-hostable</Td><Td variant="muted">BYOC (paid)</Td><Td variant="best">✅ Free on your server</Td></Tr>
                <Tr><Td variant="first">Free Tier</Td><Td variant="muted">Limited</Td><Td variant="best">Generous</Td></Tr>
                <Tr><Td variant="first">LLM Tracing</Td><Td variant="good">Excellent</Td><Td variant="good">Excellent</Td></Tr>
                <Tr><Td variant="first">Framework Agnostic</Td><Td variant="best">✅ Yes</Td><Td variant="best">✅ Yes</Td></Tr>
                <Tr><Td variant="first">Voice Agent Support</Td><Td variant="bad">❌ No</Td><Td variant="bad">❌ No</Td></Tr>
              </tbody>
            </TableWrap>
          </div>

          <ArchCard badge="Recommended Obs Stack" badgeVariant="teal" title="What to actually build">
            <FlowBlock>
              <div><Hl2>Voice call completes</Hl2></div>
              <FlowArrow />
              <div><Hl>Log to DB:</Hl> <Dim>callId, userId, transcript, sttLatency, llmLatency, ttsLatency, duration</Dim></div>
              <FlowArrow />
              <div><Hl3>LLM calls instrumented</Hl3> <Dim>→ Langfuse (open source)</Dim></div>
              <FlowArrow />
              <div><Hl2>Errors</Hl2> <Dim>→ Sentry</Dim></div>
              <FlowArrow />
              <div><Hl>Dashboards</Hl> <Dim>→ Grafana or query your DB directly</Dim></div>
            </FlowBlock>
          </ArchCard>
        </section>

        {/* ── 05 Tools & Memory ───────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHead index="05" title="Tool Calling & Memory" id="tools-memory" />

          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            Tool Calling in Deepgram Voice Agent
          </h3>

          <div className="bg-[#13151a] border border-[#2a2d38] rounded-[10px] p-6 mb-5 overflow-x-auto">
            <div className="flex items-center flex-wrap gap-0">
              <ToolStep label="User Speaks" sub='"Book 3pm tomorrow"' />
              <ToolArrow />
              <ToolStep label="LLM Decides" sub="check_calendar()" />
              <ToolArrow />
              <ToolStep label="WebSocket Event" sub="tool_call fired" />
              <ToolArrow />
              <ToolStep label="Your Server" sub="hits Calendar API" />
              <ToolArrow />
              <ToolStep label="Result Sent Back" sub='"3pm available"' />
              <ToolArrow />
              <ToolStep label="Agent Continues" sub='"Shall I book it?"' />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-[family-name:var(--font-ibm-mono)] text-[11px] text-zinc-500 uppercase tracking-widest mb-2.5">
                Receptionist Tool Examples
              </h4>
              <FeatureBlock title="">
                <FiItem dot="teal">Check calendar availability</FiItem>
                <FiItem dot="teal">Book / cancel appointment</FiItem>
                <FiItem dot="teal">Look up customer in CRM</FiItem>
                <FiItem dot="teal">Send confirmation SMS</FiItem>
                <FiItem dot="teal">Check order status</FiItem>
                <FiItem dot="amber">Transfer to human agent</FiItem>
                <FiItem dot="amber">Take a message</FiItem>
              </FeatureBlock>
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-ibm-mono)] text-[11px] text-zinc-500 uppercase tracking-widest mb-2.5">
                Latency Warning
              </h4>
              <FeatureBlock title="">
                <FiItem dot="amber">If your tool takes 3s, user hears dead silence.</FiItem>
                <FiItem dot="teal">Keep tools under 500ms ideally.</FiItem>
                <FiItem dot="teal">Have agent say: <em>&quot;Let me check that...&quot;</em> as filler.</FiItem>
                <FiItem dot="blue">Deepgram supports injecting filler audio during tool execution.</FiItem>
              </FeatureBlock>
            </div>
          </div>

          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            Memory — 3 Types You Need
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-6">
            <FeatureBlock
              title={<><span className="text-[#38e5c4]">①</span> In-Session Memory</>}
            >
              <FiItem dot="teal"><strong className="text-[#e8eaf0]">FREE — Automatic.</strong></FiItem>
              <FiItem dot="teal">Conversation history within one call is managed automatically by Deepgram. No work needed.</FiItem>
              <div className="mt-2">
                <Tag>Zero effort</Tag>
                <Tag>Single call scope</Tag>
              </div>
            </FeatureBlock>

            <FeatureBlock
              title={<><span className="text-[#5b6af0]">②</span> Cross-Session Memory</>}
            >
              <FiItem dot="blue">What happened in previous calls — you need to build this.</FiItem>
              <div className="bg-[#0c0d10] border border-[#2a2d38] rounded-lg px-3 py-2 font-[family-name:var(--font-ibm-mono)] text-[12px] text-zinc-300 leading-loose mt-2">
                <div>Call ends → LLM summarizes</div>
                <div className="text-zinc-500">  ↓</div>
                <div>Store in DB by phone number</div>
                <div className="text-zinc-500">  ↓</div>
                <div>Next call: fetch + inject into prompt</div>
              </div>
              <div className="mt-2">
                <Tag>Most important</Tag>
                <Tag>Your DB</Tag>
              </div>
            </FeatureBlock>

            <FeatureBlock
              title={<><span className="text-[#f0a23b]">③</span> Entity / Fact Memory</>}
            >
              <FiItem dot="amber">Extracted facts from calls: name, preferences, objections, decisions.</FiItem>
              <CodeBlock>
                <div><CK>{"{"}</CK></div>
                <div>&nbsp;&nbsp;<CN>userId</CN>: <CS>&quot;+91XXXXXXXXXX&quot;</CS>,</div>
                <div>&nbsp;&nbsp;<CN>interested_in</CN>: <CS>&quot;Plan B&quot;</CS>,</div>
                <div>&nbsp;&nbsp;<CN>objection</CN>: <CS>&quot;price&quot;</CS>,</div>
                <div>&nbsp;&nbsp;<CN>call_count</CN>: <CS>2</CS></div>
                <div><CK>{"}"}</CK></div>
              </CodeBlock>
              <div className="mt-2">
                <Tag>Mem0</Tag>
                <Tag>Postgres+pgvector</Tag>
              </div>
            </FeatureBlock>
          </div>

          <div className="mt-5">
            <h4 className="font-[family-name:var(--font-ibm-mono)] text-[11px] text-zinc-500 uppercase tracking-widest mb-3">
              Memory Tool Options
            </h4>
            <TableWrap>
              <thead>
                <tr>
                  <Th>Tool</Th>
                  <Th>What it does</Th>
                  <Th>Open Source</Th>
                  <Th>Self-hostable</Th>
                </tr>
              </thead>
              <tbody>
                <Tr>
                  <Td variant="first">Mem0</Td>
                  <Td variant="muted">AI memory layer — auto-extracts facts from conversations</Td>
                  <Td variant="best">✅ Yes</Td>
                  <Td variant="best">✅ Yes</Td>
                </Tr>
                <Tr>
                  <Td variant="first">Zep</Td>
                  <Td variant="muted">Long-term memory + semantic search over history</Td>
                  <Td variant="best">✅ Yes</Td>
                  <Td variant="best">✅ Yes</Td>
                </Tr>
                <Tr>
                  <Td variant="first">Custom Postgres + pgvector</Td>
                  <Td variant="muted">Store summaries, semantic search for retrieval</Td>
                  <Td variant="best">✅ Full control</Td>
                  <Td variant="best">✅ Yes</Td>
                </Tr>
              </tbody>
            </TableWrap>
          </div>

          <div className="mt-6">
            <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
              Full AI Receptionist Architecture
            </h3>
            <ArchCard badge="Complete Flow" badgeVariant="blue" title="">
              <FlowBlock>
                <div><Hl2>Outbound call triggered</Hl2></div>
                <FlowArrow />
                <div><Hl>Fetch user history</Hl> <Dim>from Mem0/DB</Dim></div>
                <FlowArrow />
                <div><Hl3>Build system prompt</Hl3></div>
                <div><Dim>  &quot;You are Vinay&apos;s receptionist. About this user: {"{"}"memory{"}"}. Tools: {"{"}"tools{"}"}&quot;</Dim></div>
                <FlowArrow />
                <div><Hl>Call starts</Hl> <Dim>via SignalWire</Dim></div>
                <FlowArrow />
                <div><Hl2>Deepgram Voice Agent handles conversation</Hl2></div>
                <div><Dim>  → calls tools when needed → streams back responses</Dim></div>
                <FlowArrow />
                <div><Hl3>Call ends → Summarize → store in memory</Hl3></div>
                <div><Dim>  + Log full transcript (Langfuse)</Dim></div>
              </FlowBlock>
            </ArchCard>
          </div>
        </section>

        {/* ── 06 Costs ────────────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHead index="06" title="Real Cost Breakdown" id="costs" />

          <div className="bg-[rgba(86,229,100,0.08)] border border-[rgba(86,229,100,0.25)] rounded-[10px] p-4 mb-5 flex items-center gap-3.5 flex-wrap">
            <div className="text-[28px]">🎁</div>
            <div>
              <h4 className="font-[family-name:var(--font-syne)] text-[15px] font-bold text-[#56e564] mb-0.5">
                Start for $0 — Free Tiers Available
              </h4>
              <p className="text-sm text-zinc-300">
                Deepgram&apos;s $200 credit alone = ~2,200 minutes on Voice Agent Standard tier. Twilio gives $15 trial. Vapi gives 60 minutes free.
              </p>
            </div>
          </div>

          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            Setup &amp; Monthly Fixed Costs
          </h3>
          <div className="mb-7">
            <TableWrap>
              <thead>
                <tr>
                  <Th>Provider</Th>
                  <Th>Setup Fee</Th>
                  <Th>Monthly Number</Th>
                  <Th>Free Credits</Th>
                </tr>
              </thead>
              <tbody>
                <Tr><Td variant="first">Deepgram</Td><Td variant="best">$0</Td><Td variant="muted">N/A (no numbers)</Td><Td variant="best">$200 credit</Td></Tr>
                <Tr><Td variant="first">Twilio</Td><Td variant="best">$0</Td><Td variant="mid">$1.15/mo (US)</Td><Td variant="muted">$15 trial</Td></Tr>
                <Tr><Td variant="first">SignalWire</Td><Td variant="best">$0</Td><Td variant="best">$0.50/mo (US)</Td><Td variant="muted">Free tier</Td></Tr>
                <Tr><Td variant="first">Plivo</Td><Td variant="best">$0</Td><Td variant="good">~$0.80/mo (US)</Td><Td variant="muted">$10 free</Td></Tr>
                <Tr><Td variant="first">Vapi</Td><Td variant="best">$0</Td><Td variant="best">Included</Td><Td variant="muted">60 min free</Td></Tr>
                <Tr><Td variant="first">SIP Trunk (Tata/Airtel)</Td><Td variant="bad">$50–200 setup</Td><Td variant="mid">₹500–1500/mo</Td><Td variant="muted">None</Td></Tr>
                <Tr><Td variant="first">Fonoster (self-hosted)</Td><Td variant="muted">VPS cost only</Td><Td variant="best">$0</Td><Td variant="muted">None</Td></Tr>
              </tbody>
            </TableWrap>
          </div>

          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            Per-Minute Costs — Deepgram Audio
          </h3>
          <div className="mb-7">
            <TableWrap>
              <thead>
                <tr>
                  <Th>Component</Th>
                  <Th>Cost per Minute</Th>
                  <Th>Notes</Th>
                </tr>
              </thead>
              <tbody>
                <Tr><Td variant="first">Voice Agent API (standard)</Td><Td variant="mid">$0.075</Td><Td variant="muted">All-in: STT + LLM routing + TTS</Td></Tr>
                <Tr><Td variant="first">Voice Agent API (advanced)</Td><Td variant="bad">$0.163</Td><Td variant="muted">Better models</Td></Tr>
                <Tr><Td variant="first">DIY: STT only (Flux streaming)</Td><Td variant="best">$0.0065</Td><Td variant="muted">Just transcription</Td></Tr>
                <Tr><Td variant="first">DIY: TTS Aura-2 (~750 chars/min)</Td><Td variant="best">~$0.022</Td><Td variant="muted">Just speech synthesis</Td></Tr>
              </tbody>
            </TableWrap>
          </div>

          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            Full Stack Cost Per Minute (with GPT-4o mini ~$0.005/min)
          </h3>
          <div className="bg-[#13151a] border border-[#2a2d38] rounded-xl p-6 mb-5">
            <CostBar label="Vapi (all-in-one)" width="100%" color="#f05b5b" value="~$0.10" />
            <CostBar label="Deepgram Agent + Twilio" width="94%" color="#5b6af0" value="~$0.094" />
            <CostBar label="Deepgram Agent + SignalWire" width="88%" color="#5b6af0" value="~$0.088" />
            <CostBar label="DIY STT/TTS + Twilio" width="48%" color="#38e5c4" value="~$0.048" />
            <CostBar label="DIY STT/TTS + SignalWire" width="42%" color="#38e5c4" value="~$0.042" />
            <CostBar label="DIY STT/TTS + SIP trunk" width="37%" color="#56e564" value="~$0.037" />
            <CostBar label="Self-hosted + SIP trunk" width="35%" color="#56e564" value="~$0.035" />
          </div>

          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            1,000 Minutes of Outbound Calls — Total Cost
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5 mb-6">
            <CostCard label="Vapi All-in-One" value="$80–100" valueColor="#f0a23b" desc="Quickest to experiment" />
            <CostCard label="Deepgram + Twilio" value="~$94" valueColor="#5b6af0" desc="Standard setup" />
            <CostCard label="Deepgram + SignalWire" value="~$88" valueColor="#5b6af0" desc="Balanced" />
            <CostCard label="DIY + Twilio" value="~$48" valueColor="#38e5c4" desc="Good savings, more code" />
            <CostCard label="DIY + SignalWire" value="~$42" valueColor="#38e5c4" desc="Best balance" />
            <CostCard label="DIY + SIP trunk" value="~$35" valueColor="#56e564" desc="Cheapest, most complex" />
          </div>
        </section>

        {/* ── 07 Recommendation ───────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHead index="07" title="Recommended Path for You" id="rec" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-7">
            <RecCard
              phase="1"
              phaseLabel="Phase 1 — Now"
              title="Experiment"
              desc="Zero upfront cost. Deepgram's $200 credit covers ~2,200 minutes of testing. Perfect for building the portfolio voice bot."
              stack={`Deepgram (free $200)\n+ SignalWire (free tier)\n+ Vercel (serverless)\n─────────────────\nCost: $0 to start`}
              variant={1}
            />
            <RecCard
              phase="2"
              phaseLabel="Phase 2 — MVP"
              title="Portfolio + Outbound"
              desc="DIY STT/TTS with SignalWire saves ~55% vs Vapi while giving full control over the code and persona."
              stack={`Deepgram DIY STT/TTS\n+ SignalWire ($0.008/min)\n+ GPT-4o mini ($0.005/min)\n─────────────────\n~$0.042/min total`}
              variant={2}
            />
            <RecCard
              phase="3"
              phaseLabel="Phase 3 — Production"
              title="India Scale"
              desc="Self-hosted with Indian SIP trunk is the cheapest per-minute at scale, worth the setup complexity."
              stack={`Deepgram DIY STT/TTS\n+ Tata/Airtel SIP trunk\n+ Asterisk on VPS\n─────────────────\n~$0.035/min total`}
              variant={3}
            />
          </div>

          <div className="bg-[#13151a] border border-[#2a2d38] rounded-xl p-6">
            <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-4">
              Suggested Build Order
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "STEP 1", bg: "rgba(91,106,240,0.2)", color: "#5b6af0", text: <>Build the <strong className="text-[#e8eaf0]">browser voice bot</strong> on your portfolio using Deepgram Voice Agent API. ~150 lines. Uses free $200 credit.</> },
                { label: "STEP 2", bg: "rgba(56,229,196,0.15)", color: "#38e5c4", text: <>Add <strong className="text-[#e8eaf0]">outbound calling</strong> via SignalWire. Build the form → API route → call trigger → WebSocket bridge flow.</> },
                { label: "STEP 3", bg: "rgba(240,162,59,0.15)", color: "#f0a23b", text: <>Add <strong className="text-[#e8eaf0]">tool calling</strong> — start with one tool like calendar check. Validate latency stays under 500ms.</> },
                { label: "STEP 4", bg: "rgba(86,229,100,0.12)", color: "#56e564", text: <>Add <strong className="text-[#e8eaf0]">memory</strong> using Mem0 or custom Postgres. Inject prior call summaries into system prompt for follow-ups.</> },
                { label: "STEP 5", bg: "rgba(240,91,91,0.12)", color: "#f05b5b", text: <>Set up <strong className="text-[#e8eaf0]">observability</strong>: Langfuse for LLM traces, Sentry for errors, custom DB logs for call sessions.</> },
              ].map(({ label, bg, color, text }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <div
                    className="font-[family-name:var(--font-ibm-mono)] text-[11px] px-2.5 py-1 rounded-md whitespace-nowrap shrink-0"
                    style={{ background: bg, color }}
                  >
                    {label}
                  </div>
                  <div className="text-[15px] text-zinc-300 leading-relaxed">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 08 UX & Edge Cases ──────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHead index="08" title="UX, Edge Cases & Production Concerns" id="ux-concerns" />

          {/* ① Latency */}
          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            ① Latency — The Biggest UX Problem
          </h3>
          <p className="text-zinc-300 text-base leading-relaxed mb-4">
            End-to-end delay = STT + LLM thinking + TTS generation. Anything above ~1.5s feels unnatural on a call.
          </p>
          <div className="bg-[#13151a] border border-[#2a2d38] rounded-xl p-6 mb-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <CostBar label="Deepgram Voice Agent API" width="53%" color="#38e5c4" value="~800ms" labelWidth="160px" />
                <CostBar label="DIY (optimized)" width="80%" color="#f0a23b" value="~1.2s" labelWidth="160px" />
                <CostBar label="DIY (unoptimized)" width="100%" color="#f05b5b" value="2–3s ❌" labelWidth="160px" />
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-ibm-mono)] text-[10px] uppercase text-zinc-500 tracking-widest mb-2.5">
                  Latency Reduction Tips
                </h4>
                <FiItem dot="teal">Use <strong className="text-[#e8eaf0]">streaming TTS</strong> — play audio before full response is generated</FiItem>
                <FiItem dot="teal"><strong className="text-[#e8eaf0]">Prompt engineering</strong> — instruct LLM to keep responses short</FiItem>
                <FiItem dot="teal">Pick <strong className="text-[#e8eaf0]">GPT-4o mini</strong> over GPT-4o for faster responses</FiItem>
                <FiItem dot="amber">Deploy server in same region as Deepgram endpoint</FiItem>
              </div>
            </div>
          </div>

          {/* ② Barge-In */}
          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            ② Barge-In / Interruption Handling
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <ArchCard badge="Problem" badgeVariant="red" title="Without Barge-In">
              <p className="text-[15px] text-zinc-300 leading-relaxed">
                Bot keeps talking even when user tries to speak. Results in the bot talking over the user — terrible call UX. Users feel unheard and hang up.
              </p>
            </ArchCard>
            <ArchCard badge="Solution" badgeVariant="teal" title="How to Handle It">
              <FiItem dot="teal"><strong className="text-[#e8eaf0]">Deepgram Voice Agent</strong> — handles natively, built-in</FiItem>
              <FiItem dot="amber"><strong className="text-[#e8eaf0]">DIY stack</strong> — needs VAD (Voice Activity Detection) to detect user speaking → stop TTS playback immediately</FiItem>
            </ArchCard>
          </div>

          {/* ③ AMD */}
          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            ③ Answering Machine Detection (AMD)
          </h3>
          <div className="bg-[rgba(240,162,59,0.07)] border border-[rgba(240,162,59,0.3)] rounded-[10px] p-[18px_20px] mb-4">
            <p className="text-[13px] text-[#e8eaf0]">
              ⚠️ <strong>~30–40% of outbound calls go to voicemail.</strong> Without AMD, your bot will happily have a full conversation with a voicemail recording.
            </p>
          </div>
          <div className="mb-5">
            <TableWrap>
              <thead>
                <tr>
                  <Th>Provider</Th>
                  <Th>AMD Support</Th>
                  <Th>Config</Th>
                  <Th>Options on Voicemail Detected</Th>
                </tr>
              </thead>
              <tbody>
                <Tr>
                  <Td variant="first">Twilio</Td>
                  <Td variant="best">✅ Built-in</Td>
                  <Td variant="muted"><code className="font-[family-name:var(--font-ibm-mono)] text-[11px]">machineDetection: &quot;Enable&quot;</code></Td>
                  <Td variant="muted">Leave voicemail / Hang up / Retry later</Td>
                </Tr>
                <Tr>
                  <Td variant="first">SignalWire</Td>
                  <Td variant="best">✅ Built-in</Td>
                  <Td variant="muted">Similar to Twilio</Td>
                  <Td variant="muted">Leave voicemail / Hang up / Retry later</Td>
                </Tr>
                <Tr>
                  <Td variant="first">Plivo</Td>
                  <Td variant="good">✅ Available</Td>
                  <Td variant="muted"><code className="font-[family-name:var(--font-ibm-mono)] text-[11px]">amd parameter</code></Td>
                  <Td variant="muted">Leave voicemail / Hang up</Td>
                </Tr>
                <Tr>
                  <Td variant="first">DIY SIP</Td>
                  <Td variant="muted">Manual</Td>
                  <Td variant="muted">Custom audio analysis</Td>
                  <Td variant="muted">Complex to implement</Td>
                </Tr>
              </tbody>
            </TableWrap>
          </div>

          {/* ④ Retry Logic */}
          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            ④ Retry Logic for Outbound
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <FeatureBlock title="Retry Scenarios">
              <FiItem dot="amber"><strong className="text-[#e8eaf0]">User busy</strong> → retry after X hours</FiItem>
              <FiItem dot="amber"><strong className="text-[#e8eaf0]">No answer</strong> → retry next day</FiItem>
              <FiItem dot="amber"><strong className="text-[#e8eaf0]">Voicemail</strong> → leave message or skip</FiItem>
              <FiItem dot="blue"><strong className="text-[#e8eaf0]">Max retry count</strong> → stop to avoid spamming</FiItem>
            </FeatureBlock>
            <FeatureBlock title="Tech Stack for Retries">
              <FiItem dot="teal"><strong className="text-[#e8eaf0]">BullMQ + Redis</strong> — job queue for scheduling delayed retries</FiItem>
              <FiItem dot="teal">Store attempt count + last result in DB</FiItem>
              <FiItem dot="teal">Exponential backoff — space retries further apart each time</FiItem>
            </FeatureBlock>
          </div>

          {/* ⑤ Human Handoff */}
          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            ⑤ Human Handoff
          </h3>
          <div className="mb-5">
            <ArchCard badge="Required for Production" badgeVariant="blue" title="Graceful Transfer Flow">
              <FlowBlock>
                <div><Hl2>Bot can&apos;t handle query / User asks for human</Hl2></div>
                <FlowArrow />
                <div><Hl3>Tool call: transfer_to_human(reason)</Hl3></div>
                <FlowArrow />
                <div><Hl>Twilio/SignalWire warm transfer</Hl></div>
                <FlowArrow />
                <div><Hl2>Human agent picks up with context</Hl2></div>
                <div><Dim>  (bot briefs the agent: &quot;User asked about X, already verified Y&quot;)</Dim></div>
                <FlowArrow />
                <div><Hl3>If no human available</Hl3> <Dim>→ queue + callback promise</Dim></div>
              </FlowBlock>
              <div className="mt-3 flex flex-wrap gap-1">
                <Tag>Warm transfer</Tag>
                <Tag>Cold transfer</Tag>
                <Tag>Queue management</Tag>
                <Tag>Context handoff</Tag>
              </div>
            </ArchCard>
          </div>

          {/* ⑥ Prompt Engineering */}
          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            ⑥ Prompt Engineering for Voice
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <h4 className="font-[family-name:var(--font-ibm-mono)] text-[10px] uppercase text-[#f05b5b] tracking-widest mb-2.5">
                ❌ Don&apos;t Do This
              </h4>
              <CodeBlock>
                <div><CC># This will be read aloud literally:</CC></div>
                <div><CK>Here are your options:</CK></div>
                <div><CS>- Option 1: Book appointment</CS></div>
                <div><CS>- Option 2: Check status</CS></div>
                <div><CS>- Option 3: Speak to human</CS></div>
                <div><CC># → Sounds robotic and weird</CC></div>
              </CodeBlock>
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-ibm-mono)] text-[10px] uppercase text-[#38e5c4] tracking-widest mb-2.5">
                ✅ Do This Instead
              </h4>
              <CodeBlock>
                <div><CC># Natural, spoken language:</CC></div>
                <div><CK>No markdown or bullet points.</CK></div>
                <div><CS>Keep sentences short.</CS></div>
                <div><CS>Use filler: &quot;Sure, let me check</CS></div>
                <div><CS>that for you...&quot;</CS></div>
                <div><CS>Handle mishearing: &quot;I didn&apos;t</CS></div>
                <div><CS>catch that, could you repeat?&quot;</CS></div>
              </CodeBlock>
            </div>
          </div>

          {/* ⑦ Legal */}
          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            ⑦ Legal &amp; Compliance — Critical for India
          </h3>
          <div className="bg-[rgba(240,91,91,0.07)] border border-[rgba(240,91,91,0.3)] rounded-[10px] p-[14px_18px] mb-3.5">
            <p className="text-[13px] text-[#f05b5b] font-[family-name:var(--font-ibm-mono)]">
              Ignoring TRAI rules = heavy fines + number blacklisting.
            </p>
          </div>
          <div className="mb-5">
            <TableWrap>
              <thead>
                <tr>
                  <Th>Rule</Th>
                  <Th>India (TRAI)</Th>
                  <Th>US (TCPA/FTC)</Th>
                </tr>
              </thead>
              <tbody>
                <Tr><Td variant="first">DND / No-Call Registry</Td><Td variant="muted">Must check NDNC before calling</Td><Td variant="muted">TCPA equivalent</Td></Tr>
                <Tr><Td variant="first">Caller Consent</Td><Td variant="mid">Required for commercial calls</Td><Td variant="mid">Required</Td></Tr>
                <Tr><Td variant="first">Recording Consent</Td><Td variant="muted">Must inform the caller</Td><Td variant="muted">Two-party in some states</Td></Tr>
                <Tr><Td variant="first">Caller ID</Td><Td variant="muted">Must display registered number</Td><Td variant="muted">STIR/SHAKEN</Td></Tr>
                <Tr><Td variant="first">Calling Hours</Td><Td variant="mid">9am–9pm only (TRAI)</Td><Td variant="mid">8am–9pm local (TCPA)</Td></Tr>
                <Tr><Td variant="first">Bot Disclosure</Td><Td variant="best">Must identify as AI/bot</Td><Td variant="best">FTC guidelines</Td></Tr>
              </tbody>
            </TableWrap>
          </div>

          {/* ⑧ Testing */}
          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            ⑧ Testing Strategy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <FeatureBlock title="🧪 Unit Testing">
              <FiItem dot="teal"><strong className="text-[#e8eaf0]">Test credentials</strong> from Twilio/SignalWire — simulate calls without making real ones (free)</FiItem>
              <FiItem dot="teal"><strong className="text-[#e8eaf0]">Deepgram playground</strong> — test your prompts and voices before writing code</FiItem>
            </FeatureBlock>
            <FeatureBlock title="📋 Scenario Testing">
              <FiItem dot="blue">Happy path — user books, confirms, hangs up</FiItem>
              <FiItem dot="blue">Mishear loop — user repeats 3x</FiItem>
              <FiItem dot="blue">Tool timeout — calendar API is slow</FiItem>
              <FiItem dot="blue">Voicemail hit — AMD triggers</FiItem>
            </FeatureBlock>
            <FeatureBlock title="⚡ Load Testing">
              <FiItem dot="amber">What happens with 10 simultaneous calls?</FiItem>
              <FiItem dot="amber">WebSocket connection limits on your server</FiItem>
              <FiItem dot="amber">Deepgram concurrent connection limits per tier</FiItem>
            </FeatureBlock>
          </div>
        </section>

        {/* ── 09 Voice Cloning ────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHead index="09" title="Voice Cloning — Use Your Own Voice" id="voice-cloning" />

          <p className="text-zinc-300 text-base leading-relaxed mb-5">
            Replace any preset TTS voice with a clone of your own voice (or someone you know, with consent). The telephony stack stays identical — you just swap the TTS provider.
          </p>

          <div className="bg-[#13151a] border border-[#2a2d38] rounded-xl p-8 flex items-center overflow-x-auto mb-6 gap-0">
            <PipelineNode icon="🎙️" label="Record" sub="Clean audio" color="blue" />
            <PipeArrow />
            <PipelineNode icon="☁️" label="Upload" sub="to service" color="teal" />
            <PipeArrow />
            <PipelineNode icon="🧬" label="Model" sub="trained on voice" color="amber" />
            <PipeArrow />
            <PipelineNode icon="🪪" label="Voice ID" sub="generated" color="teal" />
            <PipeArrow />
            <PipelineNode icon="🔊" label="Use in" sub="TTS API calls" color="blue" />
          </div>

          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            Managed Services (Cloned Voice TTS)
          </h3>
          <div className="mb-7">
            <TableWrap>
              <thead>
                <tr>
                  <Th>Service</Th>
                  <Th>Clone Type</Th>
                  <Th>Audio Needed</Th>
                  <Th>Streaming</Th>
                  <Th>Monthly Cost</Th>
                  <Th>TTS Cost/min</Th>
                </tr>
              </thead>
              <tbody>
                <Tr>
                  <Td variant="first">ElevenLabs (Starter)</Td>
                  <Td variant="muted">Instant Voice Clone</Td>
                  <Td variant="muted">1 min</Td>
                  <Td variant="best">✅ Real-time</Td>
                  <Td variant="good">$6/mo</Td>
                  <Td variant="mid">$0.18 (overage)</Td>
                </Tr>
                <Tr>
                  <Td variant="first">ElevenLabs (Creator)</Td>
                  <Td variant="muted">Instant + Professional</Td>
                  <Td variant="muted">30+ min for pro</Td>
                  <Td variant="best">✅ Real-time</Td>
                  <Td variant="good">$11/mo</Td>
                  <Td variant="muted">Included (160 min)</Td>
                </Tr>
                <Tr>
                  <Td variant="first">PlayHT</Td>
                  <Td variant="muted">Instant clone</Td>
                  <Td variant="muted">~1 min</Td>
                  <Td variant="best">✅ Ultra-low latency</Td>
                  <Td variant="mid">~$31/mo</Td>
                  <Td variant="muted">Plan included</Td>
                </Tr>
                <Tr>
                  <Td variant="first">Resemble AI (TTS)</Td>
                  <Td variant="muted">Rapid / Professional</Td>
                  <Td variant="muted">Varies</Td>
                  <Td variant="best">✅ Streaming</Td>
                  <Td variant="muted">$2–5/mo per voice</Td>
                  <Td variant="best">$0.03/min</Td>
                </Tr>
                <Tr>
                  <Td variant="first">Resemble AI (Agent)</Td>
                  <Td variant="muted">Real-time agent mode</Td>
                  <Td variant="muted">Varies</Td>
                  <Td variant="best">✅ Streaming</Td>
                  <Td variant="muted">$2–5/mo per voice</Td>
                  <Td variant="good">$0.06/min</Td>
                </Tr>
              </tbody>
            </TableWrap>
          </div>

          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            Open Source — Self-Hosted (Free per call)
          </h3>
          <div className="mb-6">
            <TableWrap>
              <thead>
                <tr>
                  <Th>Model</Th>
                  <Th>Clone Audio Needed</Th>
                  <Th>Latency</Th>
                  <Th>Quality</Th>
                  <Th>Good for Agents?</Th>
                </tr>
              </thead>
              <tbody>
                <Tr><Td variant="first">XTTS v2 (Coqui)</Td><Td variant="muted">~6 seconds</Td><Td variant="mid">Medium</Td><Td variant="good">Very good</Td><Td variant="best">✅ Yes</Td></Tr>
                <Tr><Td variant="first">OpenVoice</Td><Td variant="muted">~5 seconds</Td><Td variant="best">Fast</Td><Td variant="mid">Good</Td><Td variant="good">✅ Yes</Td></Tr>
                <Tr><Td variant="first">Fish Speech</Td><Td variant="muted">~10 seconds</Td><Td variant="best">Fast</Td><Td variant="good">Very good</Td><Td variant="best">✅ Yes</Td></Tr>
                <Tr><Td variant="first">Tortoise TTS</Td><Td variant="muted">5–10 clips</Td><Td variant="bad">~30s ❌</Td><Td variant="best">Excellent</Td><Td variant="bad">❌ Too slow</Td></Tr>
                <Tr><Td variant="first">StyleTTS2</Td><Td variant="muted">Small dataset</Td><Td variant="best">Fast</Td><Td variant="best">Excellent</Td><Td variant="best">✅ Yes</Td></Tr>
              </tbody>
            </TableWrap>
          </div>
          <p className="text-sm text-zinc-500 mb-6">
            GPU VPS to run self-hosted models: ~$20–50/mo on RunPod or Vast.ai → amortized cost ~$0.003–0.008/min.
          </p>

          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            Full Cost Per Minute — With Your Cloned Voice
          </h3>
          <p className="text-zinc-300 text-sm mb-3.5">
            Including telephony (SignalWire $0.008/min) + LLM ($0.005/min)
          </p>
          <div className="bg-[#13151a] border border-[#2a2d38] rounded-xl p-6 mb-6">
            <CostBar label="ElevenLabs (overage rate)" width="100%" color="#f05b5b" value="~$0.19" labelWidth="240px" />
            <CostBar label="Resemble AI (agent mode)" width="38%" color="#5b6af0" value="~$0.073" labelWidth="240px" />
            <CostBar label="Resemble AI (TTS mode)" width="22%" color="#38e5c4" value="~$0.043" labelWidth="240px" />
            <CostBar label="XTTS v2 self-hosted" width="15%" color="#56e564" value="~$0.018" labelWidth="240px" />
          </div>

          <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold text-[#e8eaf0] mb-3.5">
            Legal &amp; Consent for Voice Cloning
          </h3>
          <div className="mb-6">
            <TableWrap>
              <thead>
                <tr>
                  <Th>Scenario</Th>
                  <Th>Legal Status</Th>
                  <Th>Notes</Th>
                </tr>
              </thead>
              <tbody>
                <Tr><Td variant="first">Cloning your own voice</Td><Td variant="best">✅ Fine</Td><Td variant="muted">No issues anywhere</Td></Tr>
                <Tr><Td variant="first">Cloning someone you know</Td><Td variant="mid">⚠️ Need written consent</Td><Td variant="muted">Get it in writing before upload</Td></Tr>
                <Tr><Td variant="first">Cloning a public figure</Td><Td variant="bad">❌ Illegal</Td><Td variant="muted">Most jurisdictions prohibit</Td></Tr>
                <Tr><Td variant="first">India context</Td><Td variant="mid">IT Act + DPDP Act</Td><Td variant="muted">Consent + disclosure required</Td></Tr>
                <Tr><Td variant="first">US context</Td><Td variant="mid">State-level laws</Td><Td variant="muted">Several states have cloning consent laws</Td></Tr>
              </tbody>
            </TableWrap>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <RecCard
              phase="1"
              phaseLabel="Quick Experiment"
              title="ElevenLabs Starter"
              desc="Record 2–3 mins naturally, upload, get your voice ID instantly. Free within 40 min/mo, then $0.18/min."
              stack={`$6/mo plan\nInstant Voice Clone\nBest quality output`}
              variant={1}
            />
            <RecCard
              phase="2"
              phaseLabel="Portfolio Production"
              title="ElevenLabs Creator"
              desc="160 mins/mo included. Professional clone available. Sweet spot for a portfolio voice bot."
              stack={`$11/mo plan\n~$0.013/min effective\nPro + Instant clone`}
              variant={2}
            />
            <RecCard
              phase="3"
              phaseLabel="Zero Recurring Cost"
              title="Self-hosted XTTS v2"
              desc="6 seconds of audio to clone. Run on RunPod GPU. $0 per call beyond the GPU server fee."
              stack={`~$20–50/mo GPU\n~$0.018/min total\nFull control`}
              variant={3}
            />
          </div>
        </section>

        {/* ── 10 Checklist ────────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHead index="10" title="Complete Coverage Checklist" id="checklist" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[
              {
                label: "Core Architecture",
                color: "#38e5c4",
                items: [
                  "Voice pipeline (STT + LLM + TTS)",
                  "Telephony providers (Twilio, SignalWire, Plivo, SIP)",
                  "Browser voice bot (portfolio)",
                  "Outbound calling architecture",
                  "SIP trunk vs managed API paths",
                  "Indian providers & limitations",
                ],
              },
              {
                label: "Intelligence Layer",
                color: "#5b6af0",
                items: [
                  "Tool calling with latency guidance",
                  "In-session, cross-session & entity memory",
                  "Mem0, Zep, pgvector options",
                  "Full AI receptionist architecture",
                  "Prompt engineering for voice",
                  "Human handoff flow",
                ],
              },
              {
                label: "Operations",
                color: "#f0a23b",
                items: [
                  "Observability (Langfuse + Sentry + custom logs)",
                  "Latency benchmarks & optimization",
                  "Barge-in / interruption handling",
                  "AMD / voicemail detection",
                  "Retry logic (BullMQ + Redis)",
                  "Testing strategy (unit, scenario, load)",
                ],
              },
              {
                label: "Voice & Compliance",
                color: "#56e564",
                items: [
                  "Voice cloning (ElevenLabs, PlayHT, Resemble AI)",
                  "Open source cloning (XTTS v2, Fish Speech, StyleTTS2)",
                  "Cloning cost & per-minute breakdown",
                  "TRAI compliance (India) + TCPA (US)",
                  "Voice cloning legal & consent rules",
                  "Full cost breakdown — all stacks",
                ],
              },
            ].map(({ label, color, items }) => (
              <div
                key={label}
                className="bg-[#13151a] border border-[#2a2d38] rounded-[10px] p-5"
              >
                <h4
                  className="font-[family-name:var(--font-ibm-mono)] text-[10px] uppercase tracking-widest mb-3.5"
                  style={{ color }}
                >
                  {label}
                </h4>
                {items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 mb-2.5 text-[15px] text-zinc-300 leading-relaxed"
                  >
                    <span className="text-[#56e564] shrink-0 text-[13px]">✅</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── 11 Summary Comparison ───────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHead index="11" title="Full Stack Comparison — At a Glance" id="summary" />

          <p className="text-zinc-300 text-base leading-relaxed mb-6">
            Every approach side by side — what the caller experiences, what the agent can do, and what you pay. Own voice cost uses Resemble AI TTS for managed stacks and self-hosted XTTS v2 for DIY+SIP.
          </p>

          <div className="overflow-x-auto rounded-[10px] border border-[#2a2d38]">
            <table className="w-full border-collapse" style={{ minWidth: "960px" }}>
              <thead>
                <tr>
                  {[
                    "Approach",
                    "Response Speed",
                    "Voice Quality",
                    "Tool Use",
                    "Caller Memory",
                    "Monitoring",
                    "Base Cost/min",
                    "+ Own Voice",
                    "Total Cost/min",
                    "Best For",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 font-[family-name:var(--font-ibm-mono)] text-xs uppercase tracking-widest text-zinc-300 text-left border-b border-[#2a2d38] whitespace-nowrap bg-[#1c1f27]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    approach: "Vapi",
                    highlight: false,
                    speed: { label: "~800ms", variant: "best" },
                    quality: { label: "Good", variant: "good" },
                    tools: { label: "✅ Built-in UI", variant: "best" },
                    memory: { label: "⚠️ Basic only", variant: "mid" },
                    monitoring: { label: "⚠️ Dashboard", variant: "mid" },
                    base: { label: "$0.10", variant: "bad" },
                    voice: { label: "+$0.06", variant: "mid" },
                    total: { label: "~$0.16", variant: "bad" },
                    bestFor: "Fastest launch, no code",
                  },
                  {
                    approach: "Deepgram Agent + Twilio",
                    highlight: false,
                    speed: { label: "~800ms", variant: "best" },
                    quality: { label: "Good", variant: "good" },
                    tools: { label: "✅ Full control", variant: "best" },
                    memory: { label: "✅ You build it", variant: "best" },
                    monitoring: { label: "✅ Langfuse + Sentry", variant: "best" },
                    base: { label: "$0.094", variant: "mid" },
                    voice: { label: "+$0.03", variant: "good" },
                    total: { label: "~$0.124", variant: "mid" },
                    bestFor: "Full control, quick setup",
                  },
                  {
                    approach: "Deepgram Agent + SignalWire",
                    highlight: true,
                    speed: { label: "~800ms", variant: "best" },
                    quality: { label: "Good", variant: "good" },
                    tools: { label: "✅ Full control", variant: "best" },
                    memory: { label: "✅ You build it", variant: "best" },
                    monitoring: { label: "✅ Langfuse + Sentry", variant: "best" },
                    base: { label: "$0.088", variant: "mid" },
                    voice: { label: "+$0.03", variant: "good" },
                    total: { label: "~$0.118", variant: "mid" },
                    bestFor: "⭐ Best balance of cost & control",
                  },
                  {
                    approach: "DIY STT/TTS + SignalWire",
                    highlight: false,
                    speed: { label: "~1.2s", variant: "mid" },
                    quality: { label: "Good", variant: "good" },
                    tools: { label: "✅ Full control", variant: "best" },
                    memory: { label: "✅ You build it", variant: "best" },
                    monitoring: { label: "✅ Full stack", variant: "best" },
                    base: { label: "$0.042", variant: "good" },
                    voice: { label: "+$0.03", variant: "good" },
                    total: { label: "~$0.072", variant: "good" },
                    bestFor: "Max control, 55% cheaper than Vapi",
                  },
                  {
                    approach: "DIY STT/TTS + SIP Trunk",
                    highlight: false,
                    speed: { label: "~1.2s", variant: "mid" },
                    quality: { label: "Good", variant: "good" },
                    tools: { label: "✅ Full control", variant: "best" },
                    memory: { label: "✅ You build it", variant: "best" },
                    monitoring: { label: "✅ Full stack", variant: "best" },
                    base: { label: "$0.037", variant: "best" },
                    voice: { label: "+$0.005", variant: "best" },
                    total: { label: "~$0.042", variant: "best" },
                    bestFor: "India scale, cheapest per call",
                  },
                  {
                    approach: "Self-hosted AI + SIP Trunk",
                    highlight: false,
                    speed: { label: "~1.2s", variant: "mid" },
                    quality: { label: "Custom", variant: "good" },
                    tools: { label: "✅ Full control", variant: "best" },
                    memory: { label: "✅ You build it", variant: "best" },
                    monitoring: { label: "✅ Full stack", variant: "best" },
                    base: { label: "$0.035", variant: "best" },
                    voice: { label: "+$0.005", variant: "best" },
                    total: { label: "~$0.040", variant: "best" },
                    bestFor: "Absolute lowest cost at volume",
                  },
                ].map((row) => {
                  const cellColor: Record<string, string> = {
                    best: "text-[#56e564] font-[family-name:var(--font-ibm-mono)] font-semibold",
                    good: "text-[#38e5c4] font-[family-name:var(--font-ibm-mono)]",
                    mid: "text-[#f0a23b] font-[family-name:var(--font-ibm-mono)]",
                    bad: "text-[#f05b5b] font-[family-name:var(--font-ibm-mono)]",
                  };
                  const rowBg = row.highlight
                    ? "bg-[rgba(91,106,240,0.07)] border-b border-[rgba(91,106,240,0.2)]"
                    : "border-b border-[#2a2d38] last:border-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors";
                  return (
                    <tr key={row.approach} className={rowBg}>
                      <td className="px-4 py-3 text-[15px] font-semibold text-[#e8eaf0] whitespace-nowrap align-middle">
                        {row.approach}
                        {row.highlight && (
                          <span className="ml-2 text-[10px] font-[family-name:var(--font-ibm-mono)] bg-[rgba(91,106,240,0.18)] text-[#8b98f8] border border-[rgba(91,106,240,0.3)] px-1.5 py-0.5 rounded-[3px] uppercase tracking-widest align-middle">
                            Recommended
                          </span>
                        )}
                      </td>
                      {[row.speed, row.quality, row.tools, row.memory, row.monitoring, row.base, row.voice, row.total].map((cell, i) => (
                        <td key={i} className={`px-4 py-3 text-[15px] align-middle whitespace-nowrap ${cellColor[cell.variant]}`}>
                          {cell.label}
                        </td>
                      ))}
                      <td className="px-4 py-3 text-[14px] text-zinc-300 align-middle">{row.bestFor}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-zinc-500 mt-3">
            * &quot;Own Voice&quot; cost: Resemble AI TTS mode ($0.03/min) for managed stacks · XTTS v2 self-hosted (~$0.005/min) for DIY+SIP · Memory and monitoring require custom integration across all approaches.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center pt-8 pb-12 border-t border-[#2a2d38] font-[family-name:var(--font-ibm-mono)] text-[11px] text-[#3d4158] tracking-[0.05em]">
        Voice Agent Blueprint · Built with Deepgram, SignalWire, Langfuse · vinaybajjuri.tech
      </footer>
    </div>
  );
}
