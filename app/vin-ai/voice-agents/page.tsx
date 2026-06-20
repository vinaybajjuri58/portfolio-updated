import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Agent Blueprint | @vin.ai_",
  description:
    "Complete voice agent architecture reference — pipelines, outbound calling, tools, memory, observability, costs, and voice cloning.",
};

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Syne:wght@400;600;700;800&family=Inter:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:        #0c0d10;
    --surface:   #13151a;
    --surface2:  #1c1f27;
    --border:    #2a2d38;
    --accent:    #5b6af0;
    --accent2:   #38e5c4;
    --accent3:   #f0a23b;
    --warn:      #f05b5b;
    --text:      #e8eaf0;
    --muted:     #7a7f96;
    --dim:       #3d4158;
    --font-head: 'Syne', sans-serif;
    --font-body: 'Inter', sans-serif;
    --font-mono: 'IBM Plex Mono', monospace;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 14px;
    line-height: 1.6;
  }

  nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(12,13,16,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    padding: 0 32px;
    display: flex; align-items: center; gap: 8px;
    height: 52px;
    overflow-x: auto;
  }
  .nav-label {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent2);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
    margin-right: 16px;
  }
  nav a {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--muted);
    text-decoration: none;
    padding: 4px 10px;
    border-radius: 4px;
    white-space: nowrap;
    transition: color 0.15s, background 0.15s;
  }
  nav a:hover { color: var(--text); background: var(--surface2); }

  .page { max-width: 1100px; margin: 0 auto; padding: 0 24px 80px; }

  .hero {
    padding: 64px 0 48px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 56px;
  }
  .hero-eyebrow {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent2);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .hero h1 {
    font-family: var(--font-head);
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
  }
  .hero h1 span { color: var(--accent); }
  .hero p {
    color: var(--muted);
    font-size: 15px;
    max-width: 600px;
    line-height: 1.7;
  }

  section { margin-bottom: 64px; }
  .section-head {
    display: flex; align-items: baseline; gap: 12px;
    margin-bottom: 28px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
  }
  .section-index {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent);
    background: rgba(91,106,240,0.12);
    padding: 2px 7px;
    border-radius: 3px;
    letter-spacing: 0.05em;
  }
  .section-head h2 {
    font-family: var(--font-head);
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .pipeline {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 32px;
    display: flex;
    align-items: center;
    gap: 0;
    overflow-x: auto;
    margin-bottom: 24px;
  }
  .pipe-node {
    display: flex; flex-direction: column;
    align-items: center; text-align: center;
    min-width: 110px;
    flex-shrink: 0;
  }
  .pipe-icon {
    width: 48px; height: 48px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 22px;
    margin-bottom: 10px;
    border: 1px solid;
  }
  .pipe-icon.blue  { background: rgba(91,106,240,0.15); border-color: rgba(91,106,240,0.4); }
  .pipe-icon.teal  { background: rgba(56,229,196,0.10); border-color: rgba(56,229,196,0.35); }
  .pipe-icon.amber { background: rgba(240,162,59,0.12); border-color: rgba(240,162,59,0.35); }
  .pipe-icon.red   { background: rgba(240,91,91,0.12);  border-color: rgba(240,91,91,0.35); }
  .pipe-label {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--muted);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1.3;
  }
  .pipe-sub {
    font-size: 11px;
    color: var(--dim);
    margin-top: 3px;
    text-transform: none;
  }
  .pipe-arrow {
    flex: 1; min-width: 24px;
    display: flex; align-items: center; justify-content: center;
    padding: 0 4px;
    margin-bottom: 24px;
    color: var(--dim);
    font-size: 18px;
    flex-shrink: 0;
  }

  .arch-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media(max-width:700px){ .arch-grid { grid-template-columns: 1fr; } }

  .arch-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
    transition: border-color 0.2s;
  }
  .arch-card:hover { border-color: var(--dim); }
  .arch-card-head {
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 14px;
  }
  .arch-badge {
    font-family: var(--font-mono);
    font-size: 10px;
    padding: 2px 8px; border-radius: 3px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .badge-blue   { background: rgba(91,106,240,0.18); color: #8b98f8; border: 1px solid rgba(91,106,240,0.3); }
  .badge-teal   { background: rgba(56,229,196,0.12); color: #38e5c4; border: 1px solid rgba(56,229,196,0.25); }
  .badge-amber  { background: rgba(240,162,59,0.14); color: #f0a23b; border: 1px solid rgba(240,162,59,0.3); }
  .badge-red    { background: rgba(240,91,91,0.12);  color: #f08b8b; border: 1px solid rgba(240,91,91,0.25); }
  .badge-green  { background: rgba(56,229,100,0.12); color: #56e564; border: 1px solid rgba(56,229,100,0.25); }

  .arch-card h3 {
    font-family: var(--font-head);
    font-size: 15px;
    font-weight: 700;
  }
  .flow-block {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 14px 16px;
    font-family: var(--font-mono);
    font-size: 12px;
    line-height: 2;
    color: var(--muted);
  }
  .flow-block .hl { color: var(--accent2); }
  .flow-block .hl2 { color: var(--accent); }
  .flow-block .hl3 { color: var(--accent3); }
  .flow-arrow { color: var(--dim); display: block; }

  .tbl-wrap { overflow-x: auto; border-radius: 10px; border: 1px solid var(--border); }
  table { width: 100%; border-collapse: collapse; }
  thead tr { background: var(--surface2); }
  thead th {
    padding: 12px 16px;
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    text-align: left;
    white-space: nowrap;
    border-bottom: 1px solid var(--border);
  }
  tbody tr { border-bottom: 1px solid var(--border); transition: background 0.12s; }
  tbody tr:last-child { border-bottom: none; }
  tbody tr:hover { background: rgba(255,255,255,0.02); }
  td {
    padding: 11px 16px;
    font-size: 13px;
    vertical-align: middle;
  }
  td:first-child {
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 500;
    color: var(--text);
    white-space: nowrap;
  }
  .td-muted { color: var(--muted); }
  .val-best  { color: #56e564; font-family: var(--font-mono); font-weight: 600; }
  .val-good  { color: var(--accent2); font-family: var(--font-mono); }
  .val-mid   { color: var(--accent3); font-family: var(--font-mono); }
  .val-bad   { color: var(--warn); font-family: var(--font-mono); }

  .cost-cards { display: grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap: 14px; margin-bottom: 24px; }
  .cost-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 18px 20px;
  }
  .cost-card-label { font-family: var(--font-mono); font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; }
  .cost-card-val { font-family: var(--font-head); font-size: 28px; font-weight: 800; line-height: 1; margin-bottom: 4px; }
  .cost-card-desc { font-size: 12px; color: var(--muted); }
  .cost-blue  { color: var(--accent); }
  .cost-teal  { color: var(--accent2); }
  .cost-amber { color: var(--accent3); }
  .cost-green { color: #56e564; }

  .feature-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
  @media(max-width:800px){ .feature-grid { grid-template-columns: 1fr; } }

  .feature-block {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
  }
  .feature-block h3 {
    font-family: var(--font-head);
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 14px;
    display: flex; align-items: center; gap: 8px;
  }
  .feature-item {
    display: flex; align-items: flex-start; gap: 8px;
    margin-bottom: 10px;
    font-size: 13px;
    color: var(--muted);
    line-height: 1.5;
  }
  .fi-dot {
    width: 6px; height: 6px; border-radius: 50%;
    margin-top: 6px; flex-shrink: 0;
  }
  .dot-blue  { background: var(--accent); }
  .dot-teal  { background: var(--accent2); }
  .dot-amber { background: var(--accent3); }

  .tool-flow {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 24px;
    margin-bottom: 20px;
  }
  .tool-steps { display: flex; align-items: center; flex-wrap: wrap; gap: 0; }
  .tool-step {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 10px 14px;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--muted);
    white-space: nowrap;
    flex-shrink: 0;
  }
  .tool-step .ts-label { color: var(--text); display: block; margin-bottom: 2px; font-size: 12px; }
  .tool-step-arrow {
    color: var(--dim); font-size: 16px; padding: 0 6px; flex-shrink: 0;
  }

  .rec-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
  @media(max-width:700px){ .rec-grid { grid-template-columns: 1fr; } }

  .rec-card {
    border-radius: 10px;
    padding: 20px;
    border: 1px solid;
  }
  .rec-card.phase1 { background: rgba(91,106,240,0.07); border-color: rgba(91,106,240,0.3); }
  .rec-card.phase2 { background: rgba(56,229,196,0.07); border-color: rgba(56,229,196,0.3); }
  .rec-card.phase3 { background: rgba(240,162,59,0.07); border-color: rgba(240,162,59,0.3); }
  .rec-phase { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; }
  .rec-card.phase1 .rec-phase { color: var(--accent); }
  .rec-card.phase2 .rec-phase { color: var(--accent2); }
  .rec-card.phase3 .rec-phase { color: var(--accent3); }
  .rec-card h3 { font-family: var(--font-head); font-size: 15px; font-weight: 700; margin-bottom: 8px; }
  .rec-card p { font-size: 12px; color: var(--muted); line-height: 1.6; }
  .rec-stack {
    margin-top: 12px;
    padding: 10px 12px;
    background: rgba(0,0,0,0.25);
    border-radius: 6px;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text);
    line-height: 1.8;
  }

  .compare-pill {
    display: inline-flex; align-items: center; gap: 4px;
    padding: 2px 8px; border-radius: 99px; font-size: 11px; font-family: var(--font-mono);
  }
  .pill-best  { background: rgba(86,229,100,0.12); color: #56e564; }
  .pill-good  { background: rgba(56,229,196,0.12); color: var(--accent2); }
  .pill-mid   { background: rgba(240,162,59,0.12); color: var(--accent3); }
  .pill-hard  { background: rgba(240,91,91,0.12);  color: var(--warn); }

  .code-block {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 16px 18px;
    font-family: var(--font-mono);
    font-size: 12px;
    line-height: 1.8;
    color: var(--muted);
    overflow-x: auto;
    margin-top: 12px;
  }
  .code-block .k  { color: #8b98f8; }
  .code-block .s  { color: var(--accent2); }
  .code-block .n  { color: var(--accent3); }
  .code-block .c  { color: var(--dim); }

  .tag {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 10px;
    padding: 2px 7px; border-radius: 4px;
    background: var(--surface2);
    color: var(--muted);
    border: 1px solid var(--border);
    margin: 2px;
  }

  .free-banner {
    background: rgba(86,229,100,0.08);
    border: 1px solid rgba(86,229,100,0.25);
    border-radius: 10px;
    padding: 16px 20px;
    margin-bottom: 20px;
    display: flex; align-items: center; gap: 14px;
    flex-wrap: wrap;
  }
  .free-banner-icon { font-size: 28px; }
  .free-banner-text h4 { font-family: var(--font-head); font-size: 15px; font-weight: 700; color: #56e564; margin-bottom: 2px; }
  .free-banner-text p { font-size: 12px; color: var(--muted); }

  .cost-bar-row { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
  .cost-bar-label { font-family: var(--font-mono); font-size: 11px; color: var(--text); min-width: 200px; white-space: nowrap; }
  .cost-bar-track { flex: 1; height: 8px; background: var(--surface2); border-radius: 4px; overflow: hidden; }
  .cost-bar-fill  { height: 100%; border-radius: 4px; }
  .cost-bar-val { font-family: var(--font-mono); font-size: 11px; color: var(--muted); min-width: 60px; text-align: right; }

  footer {
    text-align: center;
    padding: 32px 0 48px;
    border-top: 1px solid var(--border);
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--dim);
    letter-spacing: 0.05em;
  }
`;

const CONTENT = `
<nav>
  <span class="nav-label">Voice Agent Blueprint</span>
  <a href="#pipeline">Pipeline</a>
  <a href="#options">Options</a>
  <a href="#outbound">Outbound</a>
  <a href="#observability">Observability</a>
  <a href="#tools-memory">Tools &amp; Memory</a>
  <a href="#costs">Costs</a>
  <a href="#ux-concerns">UX &amp; Edge Cases</a>
  <a href="#voice-cloning">Voice Cloning</a>
  <a href="#checklist">Checklist</a>
  <a href="#rec">Recommendation</a>
  <a href="/vin-ai" style="margin-left:auto;color:var(--accent2);">&#8592; Back</a>
</nav>

<div class="page">

  <div class="hero">
    <p class="hero-eyebrow">Architecture Reference · 2026</p>
    <h1>Voice Agent<br><span>Blueprint</span></h1>
    <p>Everything you need to add a voice AI to your portfolio or build a full outbound call agent — from browser mic to phone calls, tool use, memory, observability, and real cost numbers.</p>
  </div>

  <!-- 01: PIPELINE -->
  <section id="pipeline">
    <div class="section-head">
      <span class="section-index">01</span>
      <h2>How a Voice Agent Works</h2>
    </div>

    <div class="pipeline">
      <div class="pipe-node">
        <div class="pipe-icon blue">🎤</div>
        <div class="pipe-label">User<br>Speaks</div>
      </div>
      <div class="pipe-arrow">→</div>
      <div class="pipe-node">
        <div class="pipe-icon teal">📝</div>
        <div class="pipe-label">STT<br><span class="pipe-sub">Deepgram Flux</span></div>
      </div>
      <div class="pipe-arrow">→</div>
      <div class="pipe-node">
        <div class="pipe-icon blue">🧠</div>
        <div class="pipe-label">LLM<br><span class="pipe-sub">GPT-4o / Claude</span></div>
      </div>
      <div class="pipe-arrow">→</div>
      <div class="pipe-node">
        <div class="pipe-icon amber">🔧</div>
        <div class="pipe-label">Tool Call<br><span class="pipe-sub">Optional</span></div>
      </div>
      <div class="pipe-arrow">→</div>
      <div class="pipe-node">
        <div class="pipe-icon teal">🔊</div>
        <div class="pipe-label">TTS<br><span class="pipe-sub">Deepgram Aura-2</span></div>
      </div>
      <div class="pipe-arrow">→</div>
      <div class="pipe-node">
        <div class="pipe-icon blue">👂</div>
        <div class="pipe-label">User<br>Hears</div>
      </div>
    </div>

    <p style="color:var(--muted); font-size:13px;">All 4 layers run over a single WebSocket to <code style="font-family:var(--font-mono);color:var(--accent2);font-size:12px;">wss://agent.deepgram.com/v1/agent/converse</code> when using Deepgram's Voice Agent API. The connection stays open for the full conversation duration.</p>
  </section>

  <!-- 02: OPTIONS -->
  <section id="options">
    <div class="section-head">
      <span class="section-index">02</span>
      <h2>Voice Agent Options Compared</h2>
    </div>

    <div class="tbl-wrap" style="margin-bottom:24px;">
      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Ease of Setup</th>
            <th>Control</th>
            <th>Voice Quality</th>
            <th>Cost (est.)</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ElevenLabs</td>
            <td><span class="compare-pill pill-best">Easiest</span></td>
            <td><span class="compare-pill pill-hard">Low</span></td>
            <td><span class="compare-pill pill-best">Best</span></td>
            <td class="td-muted">Paid, premium</td>
            <td class="td-muted">Quick voice demo, no code</td>
          </tr>
          <tr>
            <td>Vapi.ai</td>
            <td><span class="compare-pill pill-good">Easy</span></td>
            <td><span class="compare-pill pill-mid">Medium</span></td>
            <td><span class="compare-pill pill-good">Good</span></td>
            <td class="td-muted">Paid, ~$0.08–0.10/min</td>
            <td class="td-muted">Outbound calling, fast MVP</td>
          </tr>
          <tr>
            <td>Deepgram Voice Agent</td>
            <td><span class="compare-pill pill-mid">Medium</span></td>
            <td><span class="compare-pill pill-best">High</span></td>
            <td><span class="compare-pill pill-good">Good</span></td>
            <td class="val-best">$0.075/min (agent)</td>
            <td class="td-muted">Portfolio, full control, cheapest AI</td>
          </tr>
          <tr>
            <td>OpenAI Realtime API</td>
            <td><span class="compare-pill pill-hard">Hard</span></td>
            <td><span class="compare-pill pill-best">High</span></td>
            <td><span class="compare-pill pill-best">Best LLM</span></td>
            <td class="td-muted">Moderate</td>
            <td class="td-muted">GPT-4o native voice quality</td>
          </tr>
          <tr>
            <td>Retell AI</td>
            <td><span class="compare-pill pill-good">Easy</span></td>
            <td><span class="compare-pill pill-mid">Medium</span></td>
            <td><span class="compare-pill pill-mid">Good</span></td>
            <td class="td-muted">Paid</td>
            <td class="td-muted">Prototyping, similar to Vapi</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="arch-grid">
      <div class="arch-card">
        <div class="arch-card-head">
          <span class="arch-badge badge-teal">Browser Voice Bot</span>
          <h3>Portfolio Agent</h3>
        </div>
        <div class="flow-block">
          <span class="hl">Your Site</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl2">VoiceChat.tsx</span> <span style="color:var(--dim)">component</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl3">Next.js API Route</span> <span style="color:var(--dim)">(token)</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl">Deepgram WebSocket</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl2">~150 lines · Free tier</span>
        </div>
      </div>
      <div class="arch-card">
        <div class="arch-card-head">
          <span class="arch-badge badge-amber">Key Requirement</span>
          <h3>System Prompt = Your Persona</h3>
        </div>
        <div class="flow-block">
          <span class="hl2">"You are Vinay's portfolio</span>
          <span class="hl2"> assistant. Answer questions</span>
          <span class="hl2"> about his experience,</span>
          <span class="hl2"> projects, and skills..."</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl">Skills: React, Next.js,</span>
          <span class="hl"> AI/LLM, DesiQuant, BJJ AI</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 03: OUTBOUND -->
  <section id="outbound">
    <div class="section-head">
      <span class="section-index">03</span>
      <h2>Outbound Calling Architecture</h2>
    </div>

    <p style="color:var(--muted);font-size:13px;margin-bottom:20px;">You cannot call a real phone number without PSTN connectivity. The question is who owns that connection — you or a managed provider.</p>

    <div class="arch-grid">
      <div class="arch-card">
        <div class="arch-card-head">
          <span class="arch-badge badge-teal">Path 1 — Recommended</span>
          <h3>Managed API (No SIP Trunk)</h3>
        </div>
        <div class="flow-block">
          <span class="hl2">Form Submitted</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl">Next.js API Route</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl3">POST → Twilio / SignalWire</span>
          <span class="flow-arrow">  ↓  </span><span style="color:var(--dim)">(they own the SIP)</span>
          <span class="hl">Call connects</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl2">Audio WebSocket → Your server</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl">Deepgram Voice Agent</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl2">User hears the bot</span>
        </div>
        <div style="margin-top:14px; display:flex; flex-wrap:wrap; gap:4px;">
          <span class="tag">Hours to setup</span>
          <span class="tag">No telephony knowledge</span>
          <span class="tag">Serverless OK</span>
          <span class="tag">~$1–2/mo number</span>
        </div>
      </div>

      <div class="arch-card">
        <div class="arch-card-head">
          <span class="arch-badge badge-amber">Path 2 — Production Scale</span>
          <h3>Own SIP Trunk</h3>
        </div>
        <div class="flow-block">
          <span class="hl2">Form Submitted</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl3">Asterisk / FreeSWITCH</span>
          <span class="flow-arrow">  ↓  </span><span style="color:var(--dim)">(runs on your VPS)</span>
          <span class="hl">SIP Trunk → Tata/Airtel/Plivo</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl2">PSTN → User's phone</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl">Audio piped ↔ Deepgram</span>
        </div>
        <div style="margin-top:14px; display:flex; flex-wrap:wrap; gap:4px;">
          <span class="tag">Days to setup</span>
          <span class="tag">Dedicated VPS required</span>
          <span class="tag">Max control</span>
          <span class="tag">Cheapest at scale</span>
        </div>
      </div>
    </div>

    <div style="margin-top:20px;">
      <div class="tbl-wrap" style="margin-bottom:16px;">
        <table>
          <thead>
            <tr><th>Comparison</th><th>Managed API (Path 1)</th><th>Own SIP Trunk (Path 2)</th></tr>
          </thead>
          <tbody>
            <tr><td>Setup Time</td><td class="td-muted">Hours</td><td class="td-muted">Days / Weeks</td></tr>
            <tr><td>Server Type</td><td class="td-muted">Serverless (Vercel)</td><td class="td-muted">Dedicated VPS 24/7</td></tr>
            <tr><td>Telephony Knowledge</td><td class="td-muted">None needed</td><td class="td-muted">Asterisk/FreeSWITCH config</td></tr>
            <tr><td>Indian Numbers</td><td class="td-muted">Via Plivo/Twilio</td><td class="td-muted">Direct from any carrier</td></tr>
            <tr><td>Cost Model</td><td class="td-muted">Per-minute + number fee</td><td class="td-muted">SIP trunk + server hosting</td></tr>
            <tr><td>Best For</td><td class="td-muted">Experiments, MVPs, portfolio</td><td class="td-muted">Production, scale, custom routing</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div style="margin-top:28px;">
      <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:16px;color:var(--text);">Telephony Providers — Managed Options</h3>
      <div class="tbl-wrap">
        <table>
          <thead>
            <tr><th>Provider</th><th>Type</th><th>WebSocket Streaming</th><th>Indian Numbers</th><th>Outbound/min</th><th>Number/mo</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Twilio</td>
              <td class="td-muted">Managed</td>
              <td class="val-best">✅ Yes</td>
              <td class="val-best">✅ Yes</td>
              <td class="val-mid">$0.0140</td>
              <td class="td-muted">$1.15</td>
            </tr>
            <tr>
              <td>SignalWire</td>
              <td class="td-muted">Managed (OSS roots)</td>
              <td class="val-best">✅ Yes</td>
              <td class="td-muted">⚠️ Limited</td>
              <td class="val-good">$0.0080</td>
              <td class="td-muted">$0.50</td>
            </tr>
            <tr>
              <td>SignalWire SIP</td>
              <td class="td-muted">Semi-managed</td>
              <td class="val-best">✅ Yes</td>
              <td class="td-muted">⚠️ Limited</td>
              <td class="val-best">$0.0030</td>
              <td class="td-muted">$0.50</td>
            </tr>
            <tr>
              <td>Plivo</td>
              <td class="td-muted">Managed</td>
              <td class="val-best">✅ Yes</td>
              <td class="val-best">✅ Yes</td>
              <td class="val-mid">$0.0115</td>
              <td class="td-muted">~$0.80</td>
            </tr>
            <tr>
              <td>Telnyx</td>
              <td class="td-muted">Managed</td>
              <td class="val-best">✅ Good</td>
              <td class="val-best">✅ Yes</td>
              <td class="val-good">$0.0070</td>
              <td class="td-muted">~$1.00</td>
            </tr>
            <tr>
              <td>Exotel (India)</td>
              <td class="td-muted">Indian IVR</td>
              <td class="val-bad">❌ No realtime</td>
              <td class="val-best">✅ Yes</td>
              <td class="val-mid">~₹0.40/min</td>
              <td class="td-muted">₹500+</td>
            </tr>
            <tr>
              <td>SIP Trunk (Tata/Airtel)</td>
              <td class="td-muted">Self-managed</td>
              <td class="val-best">✅ With Asterisk</td>
              <td class="val-best">✅ Native</td>
              <td class="val-best">$0.002–0.005</td>
              <td class="td-muted">₹500–1500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top:10px;font-size:12px;color:var(--dim);">⚠️ Indian providers like Exotel lack real-time WebSocket audio streaming — they're built for IVR, not live AI conversation.</p>
    </div>
  </section>

  <!-- 04: OBSERVABILITY -->
  <section id="observability">
    <div class="section-head">
      <span class="section-index">04</span>
      <h2>Observability Stack</h2>
    </div>

    <p style="color:var(--muted);font-size:13px;margin-bottom:20px;">LangSmith covers only the LLM layer. A voice bot has 4 distinct layers — each needs its own monitoring strategy.</p>

    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:20px;">
      <div class="tbl-wrap">
        <table>
          <thead>
            <tr><th>Layer</th><th>What to Monitor</th><th>Best Tool</th><th>LangSmith Covers?</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>🎤 STT (Deepgram)</td>
              <td class="td-muted">Transcription accuracy, confidence scores, latency</td>
              <td class="td-muted">Deepgram dashboard + custom logs</td>
              <td class="val-bad">❌ No</td>
            </tr>
            <tr>
              <td>🧠 LLM Layer</td>
              <td class="td-muted">Prompts, responses, tokens, cost, latency</td>
              <td class="val-good">Langfuse (OSS) or LangSmith</td>
              <td class="val-best">✅ Yes</td>
            </tr>
            <tr>
              <td>🔊 TTS (Deepgram Aura)</td>
              <td class="td-muted">Audio generation latency, quality</td>
              <td class="td-muted">Custom logs</td>
              <td class="val-bad">❌ No</td>
            </tr>
            <tr>
              <td>📞 Call / Session</td>
              <td class="td-muted">Duration, drop rate, user sentiment, recordings</td>
              <td class="td-muted">Custom DB + Deepgram logs</td>
              <td class="val-bad">❌ No</td>
            </tr>
            <tr>
              <td>🖥️ Infrastructure</td>
              <td class="td-muted">WebSocket stability, errors, server health</td>
              <td class="td-muted">Sentry / Datadog / Grafana</td>
              <td class="val-bad">❌ No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">LangSmith vs Langfuse (LLM Layer)</h3>
    <div class="tbl-wrap" style="margin-bottom:24px;">
      <table>
        <thead><tr><th>Feature</th><th>LangSmith</th><th>Langfuse</th></tr></thead>
        <tbody>
          <tr><td>Open Source</td><td class="val-bad">❌ No</td><td class="val-best">✅ Yes</td></tr>
          <tr><td>Self-hostable</td><td class="td-muted">BYOC (paid)</td><td class="val-best">✅ Free on your server</td></tr>
          <tr><td>Free Tier</td><td class="td-muted">Limited</td><td class="val-best">Generous</td></tr>
          <tr><td>LLM Tracing</td><td class="val-good">Excellent</td><td class="val-good">Excellent</td></tr>
          <tr><td>Framework Agnostic</td><td class="val-best">✅ Yes</td><td class="val-best">✅ Yes</td></tr>
          <tr><td>Voice Agent Support</td><td class="val-bad">❌ No</td><td class="val-bad">❌ No</td></tr>
        </tbody>
      </table>
    </div>

    <div class="arch-card">
      <div class="arch-card-head">
        <span class="arch-badge badge-teal">Recommended Obs Stack</span>
        <h3>What to actually build</h3>
      </div>
      <div class="flow-block">
        <span class="hl2">Voice call completes</span>
        <span class="flow-arrow">  ↓</span>
        <span class="hl">Log to DB:</span> <span style="color:var(--dim)">callId, userId, transcript, sttLatency, llmLatency, ttsLatency, duration</span>
        <span class="flow-arrow">  ↓</span>
        <span class="hl3">LLM calls instrumented</span> <span style="color:var(--dim)">→ Langfuse (open source)</span>
        <span class="flow-arrow">  ↓</span>
        <span class="hl2">Errors</span> <span style="color:var(--dim)">→ Sentry</span>
        <span class="flow-arrow">  ↓</span>
        <span class="hl">Dashboards</span> <span style="color:var(--dim)">→ Grafana or query your DB directly</span>
      </div>
    </div>
  </section>

  <!-- 05: TOOLS + MEMORY -->
  <section id="tools-memory">
    <div class="section-head">
      <span class="section-index">05</span>
      <h2>Tool Calling &amp; Memory</h2>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">Tool Calling in Deepgram Voice Agent</h3>

    <div class="tool-flow">
      <div class="tool-steps">
        <div class="tool-step">
          <span class="ts-label">User Speaks</span>
          "Book 3pm tomorrow"
        </div>
        <div class="tool-step-arrow">→</div>
        <div class="tool-step">
          <span class="ts-label">LLM Decides</span>
          check_calendar()
        </div>
        <div class="tool-step-arrow">→</div>
        <div class="tool-step">
          <span class="ts-label">WebSocket Event</span>
          tool_call fired
        </div>
        <div class="tool-step-arrow">→</div>
        <div class="tool-step">
          <span class="ts-label">Your Server</span>
          hits Calendar API
        </div>
        <div class="tool-step-arrow">→</div>
        <div class="tool-step">
          <span class="ts-label">Result Sent Back</span>
          "3pm available"
        </div>
        <div class="tool-step-arrow">→</div>
        <div class="tool-step">
          <span class="ts-label">Agent Continues</span>
          "Shall I book it?"
        </div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;">
      <div>
        <h4 style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">Receptionist Tool Examples</h4>
        <div class="feature-block" style="gap:0;">
          <div class="feature-item"><div class="fi-dot dot-teal"></div>Check calendar availability</div>
          <div class="feature-item"><div class="fi-dot dot-teal"></div>Book / cancel appointment</div>
          <div class="feature-item"><div class="fi-dot dot-teal"></div>Look up customer in CRM</div>
          <div class="feature-item"><div class="fi-dot dot-teal"></div>Send confirmation SMS</div>
          <div class="feature-item"><div class="fi-dot dot-teal"></div>Check order status</div>
          <div class="feature-item"><div class="fi-dot dot-amber"></div>Transfer to human agent</div>
          <div class="feature-item"><div class="fi-dot dot-amber"></div>Take a message</div>
        </div>
      </div>
      <div>
        <h4 style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">Latency Warning</h4>
        <div class="feature-block">
          <div class="feature-item"><div class="fi-dot dot-amber"></div>If your tool takes 3s, user hears dead silence.</div>
          <div class="feature-item"><div class="fi-dot dot-teal"></div>Keep tools under 500ms ideally.</div>
          <div class="feature-item"><div class="fi-dot dot-teal"></div>Have agent say: <em>"Let me check that..."</em> as filler.</div>
          <div class="feature-item"><div class="fi-dot dot-blue"></div>Deepgram supports injecting filler audio during tool execution.</div>
        </div>
      </div>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">Memory — 3 Types You Need</h3>

    <div class="feature-grid">
      <div class="feature-block">
        <h3><span style="color:var(--accent2);">①</span> In-Session Memory</h3>
        <div class="feature-item"><div class="fi-dot dot-teal"></div><strong style="color:var(--text)">FREE — Automatic.</strong></div>
        <div class="feature-item"><div class="fi-dot dot-teal"></div>Conversation history within one call is managed automatically by Deepgram. No work needed.</div>
        <span class="tag">Zero effort</span>
        <span class="tag">Single call scope</span>
      </div>
      <div class="feature-block">
        <h3><span style="color:var(--accent);">②</span> Cross-Session Memory</h3>
        <div class="feature-item"><div class="fi-dot dot-blue"></div>What happened in previous calls — you need to build this.</div>
        <div class="flow-block" style="margin-top:8px;font-size:11px;">
          Call ends → LLM summarizes
          <span class="flow-arrow">  ↓</span>
          Store in DB by phone number
          <span class="flow-arrow">  ↓</span>
          Next call: fetch + inject into prompt
        </div>
        <span class="tag">Most important</span>
        <span class="tag">Your DB</span>
      </div>
      <div class="feature-block">
        <h3><span style="color:var(--accent3);">③</span> Entity / Fact Memory</h3>
        <div class="feature-item"><div class="fi-dot dot-amber"></div>Extracted facts from calls: name, preferences, objections, decisions.</div>
        <div class="code-block" style="margin-top:8px;font-size:11px;">
<span class="k">{</span><br>
&nbsp;&nbsp;<span class="n">userId</span>: <span class="s">"+91XXXXXXXXXX"</span>,<br>
&nbsp;&nbsp;<span class="n">interested_in</span>: <span class="s">"Plan B"</span>,<br>
&nbsp;&nbsp;<span class="n">objection</span>: <span class="s">"price"</span>,<br>
&nbsp;&nbsp;<span class="n">call_count</span>: <span class="s">2</span><br>
<span class="k">}</span>
        </div>
        <span class="tag">Mem0</span>
        <span class="tag">Postgres+pgvector</span>
      </div>
    </div>

    <div style="margin-top:20px;">
      <h4 style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;">Memory Tool Options</h4>
      <div class="tbl-wrap">
        <table>
          <thead>
            <tr><th>Tool</th><th>What it does</th><th>Open Source</th><th>Self-hostable</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Mem0</td>
              <td class="td-muted">AI memory layer — auto-extracts facts from conversations</td>
              <td class="val-best">✅ Yes</td>
              <td class="val-best">✅ Yes</td>
            </tr>
            <tr>
              <td>Zep</td>
              <td class="td-muted">Long-term memory + semantic search over history</td>
              <td class="val-best">✅ Yes</td>
              <td class="val-best">✅ Yes</td>
            </tr>
            <tr>
              <td>Custom Postgres + pgvector</td>
              <td class="td-muted">Store summaries, semantic search for retrieval</td>
              <td class="val-best">✅ Full control</td>
              <td class="val-best">✅ Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div style="margin-top:24px;">
      <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">Full AI Receptionist Architecture</h3>
      <div class="arch-card">
        <div class="flow-block">
          <span class="hl2">Outbound call triggered</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl">Fetch user history</span> <span style="color:var(--dim)">from Mem0/DB</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl3">Build system prompt</span>
          <span style="color:var(--dim)">  "You are Vinay's receptionist. About this user: {memory}. Tools: {tools}"</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl">Call starts</span> <span style="color:var(--dim)">via SignalWire</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl2">Deepgram Voice Agent handles conversation</span>
          <span style="color:var(--dim)">  → calls tools when needed → streams back responses</span>
          <span class="flow-arrow">  ↓</span>
          <span class="hl3">Call ends → Summarize → store in memory</span>
          <span style="color:var(--dim)">  + Log full transcript (Langfuse)</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 06: COSTS -->
  <section id="costs">
    <div class="section-head">
      <span class="section-index">06</span>
      <h2>Real Cost Breakdown</h2>
    </div>

    <div class="free-banner">
      <div class="free-banner-icon">🎁</div>
      <div class="free-banner-text">
        <h4>Start for $0 — Free Tiers Available</h4>
        <p>Deepgram's $200 credit alone = ~2,200 minutes on Voice Agent Standard tier. Twilio gives $15 trial. Vapi gives 60 minutes free.</p>
      </div>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">Setup &amp; Monthly Fixed Costs</h3>
    <div class="tbl-wrap" style="margin-bottom:28px;">
      <table>
        <thead><tr><th>Provider</th><th>Setup Fee</th><th>Monthly Number</th><th>Free Credits</th></tr></thead>
        <tbody>
          <tr><td>Deepgram</td><td class="val-best">$0</td><td class="td-muted">N/A (no numbers)</td><td class="val-best">$200 credit</td></tr>
          <tr><td>Twilio</td><td class="val-best">$0</td><td class="val-mid">$1.15/mo (US)</td><td class="td-muted">$15 trial</td></tr>
          <tr><td>SignalWire</td><td class="val-best">$0</td><td class="val-best">$0.50/mo (US)</td><td class="td-muted">Free tier</td></tr>
          <tr><td>Plivo</td><td class="val-best">$0</td><td class="val-good">~$0.80/mo (US)</td><td class="td-muted">$10 free</td></tr>
          <tr><td>Vapi</td><td class="val-best">$0</td><td class="val-best">Included</td><td class="td-muted">60 min free</td></tr>
          <tr><td>SIP Trunk (Tata/Airtel)</td><td class="val-bad">$50–200 setup</td><td class="val-mid">₹500–1500/mo</td><td class="td-muted">None</td></tr>
          <tr><td>Fonoster (self-hosted)</td><td class="td-muted">VPS cost only</td><td class="val-best">$0</td><td class="td-muted">None</td></tr>
        </tbody>
      </table>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">Per-Minute Costs — Deepgram Audio</h3>
    <div class="tbl-wrap" style="margin-bottom:28px;">
      <table>
        <thead><tr><th>Component</th><th>Cost per Minute</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>Voice Agent API (standard)</td><td class="val-mid">$0.075</td><td class="td-muted">All-in: STT + LLM routing + TTS</td></tr>
          <tr><td>Voice Agent API (advanced)</td><td class="val-bad">$0.163</td><td class="td-muted">Better models</td></tr>
          <tr><td>DIY: STT only (Flux streaming)</td><td class="val-best">$0.0065</td><td class="td-muted">Just transcription</td></tr>
          <tr><td>DIY: TTS Aura-2 (~750 chars/min)</td><td class="val-best">~$0.022</td><td class="td-muted">Just speech synthesis</td></tr>
        </tbody>
      </table>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">Full Stack Cost Per Minute (with GPT-4o mini ~$0.005/min)</h3>

    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:20px;">
      <div class="cost-bar-row">
        <div class="cost-bar-label">Vapi (all-in-one)</div>
        <div class="cost-bar-track"><div class="cost-bar-fill" style="width:100%;background:var(--warn);"></div></div>
        <div class="cost-bar-val" style="color:var(--warn);">~$0.10</div>
      </div>
      <div class="cost-bar-row">
        <div class="cost-bar-label">Deepgram Agent + Twilio</div>
        <div class="cost-bar-track"><div class="cost-bar-fill" style="width:94%;background:var(--accent);"></div></div>
        <div class="cost-bar-val" style="color:var(--accent);">~$0.094</div>
      </div>
      <div class="cost-bar-row">
        <div class="cost-bar-label">Deepgram Agent + SignalWire</div>
        <div class="cost-bar-track"><div class="cost-bar-fill" style="width:88%;background:var(--accent);"></div></div>
        <div class="cost-bar-val" style="color:var(--accent);">~$0.088</div>
      </div>
      <div class="cost-bar-row">
        <div class="cost-bar-label">DIY STT/TTS + Twilio</div>
        <div class="cost-bar-track"><div class="cost-bar-fill" style="width:48%;background:var(--accent2);"></div></div>
        <div class="cost-bar-val" style="color:var(--accent2);">~$0.048</div>
      </div>
      <div class="cost-bar-row">
        <div class="cost-bar-label">DIY STT/TTS + SignalWire</div>
        <div class="cost-bar-track"><div class="cost-bar-fill" style="width:42%;background:var(--accent2);"></div></div>
        <div class="cost-bar-val" style="color:var(--accent2);">~$0.042</div>
      </div>
      <div class="cost-bar-row">
        <div class="cost-bar-label">DIY STT/TTS + SIP trunk</div>
        <div class="cost-bar-track"><div class="cost-bar-fill" style="width:37%;background:#56e564;"></div></div>
        <div class="cost-bar-val" style="color:#56e564;">~$0.037</div>
      </div>
      <div class="cost-bar-row">
        <div class="cost-bar-label">Self-hosted + SIP trunk</div>
        <div class="cost-bar-track"><div class="cost-bar-fill" style="width:35%;background:#56e564;"></div></div>
        <div class="cost-bar-val" style="color:#56e564;">~$0.035</div>
      </div>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">1,000 Minutes of Outbound Calls — Total Cost</h3>
    <div class="cost-cards">
      <div class="cost-card">
        <div class="cost-card-label">Vapi All-in-One</div>
        <div class="cost-card-val cost-amber">$80–100</div>
        <div class="cost-card-desc">Quickest to experiment</div>
      </div>
      <div class="cost-card">
        <div class="cost-card-label">Deepgram + Twilio</div>
        <div class="cost-card-val cost-blue">~$94</div>
        <div class="cost-card-desc">Standard setup</div>
      </div>
      <div class="cost-card">
        <div class="cost-card-label">Deepgram + SignalWire</div>
        <div class="cost-card-val cost-blue">~$88</div>
        <div class="cost-card-desc">Balanced</div>
      </div>
      <div class="cost-card">
        <div class="cost-card-label">DIY + Twilio</div>
        <div class="cost-card-val cost-teal">~$48</div>
        <div class="cost-card-desc">Good savings, more code</div>
      </div>
      <div class="cost-card">
        <div class="cost-card-label">DIY + SignalWire</div>
        <div class="cost-card-val cost-teal">~$42</div>
        <div class="cost-card-desc">Best balance</div>
      </div>
      <div class="cost-card">
        <div class="cost-card-label">DIY + SIP trunk</div>
        <div class="cost-card-val cost-green">~$35</div>
        <div class="cost-card-desc">Cheapest, most complex</div>
      </div>
    </div>
  </section>

  <!-- 07: RECOMMENDATION -->
  <section id="rec">
    <div class="section-head">
      <span class="section-index">07</span>
      <h2>Recommended Path for You</h2>
    </div>

    <div class="rec-grid">
      <div class="rec-card phase1">
        <div class="rec-phase">Phase 1 — Now</div>
        <h3>Experiment</h3>
        <p>Zero upfront cost. Deepgram's $200 credit covers ~2,200 minutes of testing. Perfect for building the portfolio voice bot.</p>
        <div class="rec-stack">
          Deepgram (free $200)<br>
          + SignalWire (free tier)<br>
          + Vercel (serverless)<br>
          ─────────────────<br>
          Cost: $0 to start
        </div>
      </div>
      <div class="rec-card phase2">
        <div class="rec-phase">Phase 2 — MVP</div>
        <h3>Portfolio + Outbound</h3>
        <p>DIY STT/TTS with SignalWire saves ~55% vs Vapi while giving full control over the code and persona.</p>
        <div class="rec-stack">
          Deepgram DIY STT/TTS<br>
          + SignalWire ($0.008/min)<br>
          + GPT-4o mini ($0.005/min)<br>
          ─────────────────<br>
          ~$0.042/min total
        </div>
      </div>
      <div class="rec-card phase3">
        <div class="rec-phase">Phase 3 — Production</div>
        <h3>India Scale</h3>
        <p>Self-hosted with Indian SIP trunk is the cheapest per-minute at scale, worth the setup complexity.</p>
        <div class="rec-stack">
          Deepgram DIY STT/TTS<br>
          + Tata/Airtel SIP trunk<br>
          + Asterisk on VPS<br>
          ─────────────────<br>
          ~$0.035/min total
        </div>
      </div>
    </div>

    <div style="margin-top:28px;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;">
      <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:16px;">Suggested Build Order</h3>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;align-items:flex-start;gap:14px;">
          <div style="background:rgba(91,106,240,0.2);color:var(--accent);font-family:var(--font-mono);font-size:11px;padding:4px 10px;border-radius:6px;white-space:nowrap;flex-shrink:0;">STEP 1</div>
          <div style="font-size:13px;color:var(--muted);">Build the <strong style="color:var(--text)">browser voice bot</strong> on your portfolio using Deepgram Voice Agent API. ~150 lines. Uses free $200 credit.</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:14px;">
          <div style="background:rgba(56,229,196,0.15);color:var(--accent2);font-family:var(--font-mono);font-size:11px;padding:4px 10px;border-radius:6px;white-space:nowrap;flex-shrink:0;">STEP 2</div>
          <div style="font-size:13px;color:var(--muted);">Add <strong style="color:var(--text)">outbound calling</strong> via SignalWire. Build the form → API route → call trigger → WebSocket bridge flow.</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:14px;">
          <div style="background:rgba(240,162,59,0.15);color:var(--accent3);font-family:var(--font-mono);font-size:11px;padding:4px 10px;border-radius:6px;white-space:nowrap;flex-shrink:0;">STEP 3</div>
          <div style="font-size:13px;color:var(--muted);">Add <strong style="color:var(--text)">tool calling</strong> — start with one tool like calendar check. Validate latency stays under 500ms.</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:14px;">
          <div style="background:rgba(86,229,100,0.12);color:#56e564;font-family:var(--font-mono);font-size:11px;padding:4px 10px;border-radius:6px;white-space:nowrap;flex-shrink:0;">STEP 4</div>
          <div style="font-size:13px;color:var(--muted);">Add <strong style="color:var(--text)">memory</strong> using Mem0 or custom Postgres. Inject prior call summaries into system prompt for follow-ups.</div>
        </div>
        <div style="display:flex;align-items:flex-start;gap:14px;">
          <div style="background:rgba(240,91,91,0.12);color:var(--warn);font-family:var(--font-mono);font-size:11px;padding:4px 10px;border-radius:6px;white-space:nowrap;flex-shrink:0;">STEP 5</div>
          <div style="font-size:13px;color:var(--muted);">Set up <strong style="color:var(--text)">observability</strong>: Langfuse for LLM traces, Sentry for errors, custom DB logs for call sessions.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- 08: UX & EDGE CASES -->
  <section id="ux-concerns">
    <div class="section-head">
      <span class="section-index">08</span>
      <h2>UX, Edge Cases &amp; Production Concerns</h2>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">① Latency — The Biggest UX Problem</h3>
    <p style="color:var(--muted);font-size:13px;margin-bottom:16px;">End-to-end delay = STT + LLM thinking + TTS generation. Anything above ~1.5s feels unnatural on a call.</p>

    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:20px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
        <div>
          <div class="cost-bar-row" style="margin-bottom:14px;">
            <div class="cost-bar-label" style="min-width:160px;">Deepgram Voice Agent API</div>
            <div class="cost-bar-track"><div class="cost-bar-fill" style="width:53%;background:var(--accent2);"></div></div>
            <div class="cost-bar-val" style="color:var(--accent2);">~800ms</div>
          </div>
          <div class="cost-bar-row" style="margin-bottom:14px;">
            <div class="cost-bar-label" style="min-width:160px;">DIY (optimized)</div>
            <div class="cost-bar-track"><div class="cost-bar-fill" style="width:80%;background:var(--accent3);"></div></div>
            <div class="cost-bar-val" style="color:var(--accent3);">~1.2s</div>
          </div>
          <div class="cost-bar-row">
            <div class="cost-bar-label" style="min-width:160px;">DIY (unoptimized)</div>
            <div class="cost-bar-track"><div class="cost-bar-fill" style="width:100%;background:var(--warn);"></div></div>
            <div class="cost-bar-val" style="color:var(--warn);">2–3s ❌</div>
          </div>
        </div>
        <div>
          <h4 style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--muted);letter-spacing:0.1em;margin-bottom:10px;">Latency Reduction Tips</h4>
          <div class="feature-item"><div class="fi-dot dot-teal"></div>Use <strong style="color:var(--text)">streaming TTS</strong> — play audio before full response is generated</div>
          <div class="feature-item"><div class="fi-dot dot-teal"></div><strong style="color:var(--text)">Prompt engineering</strong> — instruct LLM to keep responses short</div>
          <div class="feature-item"><div class="fi-dot dot-teal"></div>Pick <strong style="color:var(--text)">GPT-4o mini</strong> over GPT-4o for faster responses</div>
          <div class="feature-item"><div class="fi-dot dot-amber"></div>Deploy server in same region as Deepgram endpoint</div>
        </div>
      </div>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">② Barge-In / Interruption Handling</h3>
    <div class="arch-grid" style="margin-bottom:20px;">
      <div class="arch-card">
        <div class="arch-card-head">
          <span class="arch-badge badge-red">Problem</span>
          <h3>Without Barge-In</h3>
        </div>
        <div style="font-size:13px;color:var(--muted);line-height:1.8;">Bot keeps talking even when user tries to speak. Results in the bot talking over the user — terrible call UX. Users feel unheard and hang up.</div>
      </div>
      <div class="arch-card">
        <div class="arch-card-head">
          <span class="arch-badge badge-teal">Solution</span>
          <h3>How to Handle It</h3>
        </div>
        <div class="feature-item"><div class="fi-dot dot-teal"></div><strong style="color:var(--text)">Deepgram Voice Agent</strong> — handles natively, built-in</div>
        <div class="feature-item"><div class="fi-dot dot-amber"></div><strong style="color:var(--text)">DIY stack</strong> — needs VAD (Voice Activity Detection) to detect user speaking → stop TTS playback immediately</div>
      </div>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">③ Answering Machine Detection (AMD)</h3>
    <div style="background:rgba(240,162,59,0.07);border:1px solid rgba(240,162,59,0.3);border-radius:10px;padding:18px 20px;margin-bottom:16px;">
      <p style="font-size:13px;color:var(--text);">⚠️ <strong>~30–40% of outbound calls go to voicemail.</strong> Without AMD, your bot will happily have a full conversation with a voicemail recording.</p>
    </div>
    <div class="tbl-wrap" style="margin-bottom:20px;">
      <table>
        <thead><tr><th>Provider</th><th>AMD Support</th><th>Config</th><th>Options on Voicemail Detected</th></tr></thead>
        <tbody>
          <tr><td>Twilio</td><td class="val-best">✅ Built-in</td><td class="td-muted"><code style="font-family:var(--font-mono);font-size:11px;">machineDetection: "Enable"</code></td><td class="td-muted">Leave voicemail / Hang up / Retry later</td></tr>
          <tr><td>SignalWire</td><td class="val-best">✅ Built-in</td><td class="td-muted">Similar to Twilio</td><td class="td-muted">Leave voicemail / Hang up / Retry later</td></tr>
          <tr><td>Plivo</td><td class="val-good">✅ Available</td><td class="td-muted">amd parameter</td><td class="td-muted">Leave voicemail / Hang up</td></tr>
          <tr><td>DIY SIP</td><td class="td-muted">Manual</td><td class="td-muted">Custom audio analysis</td><td class="td-muted">Complex to implement</td></tr>
        </tbody>
      </table>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">④ Retry Logic for Outbound</h3>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">
      <div class="feature-block">
        <h3>Retry Scenarios</h3>
        <div class="feature-item"><div class="fi-dot dot-amber"></div><strong style="color:var(--text)">User busy</strong> → retry after X hours</div>
        <div class="feature-item"><div class="fi-dot dot-amber"></div><strong style="color:var(--text)">No answer</strong> → retry next day</div>
        <div class="feature-item"><div class="fi-dot dot-amber"></div><strong style="color:var(--text)">Voicemail</strong> → leave message or skip</div>
        <div class="feature-item"><div class="fi-dot dot-blue"></div><strong style="color:var(--text)">Max retry count</strong> → stop to avoid spamming</div>
      </div>
      <div class="feature-block">
        <h3>Tech Stack for Retries</h3>
        <div class="feature-item"><div class="fi-dot dot-teal"></div><strong style="color:var(--text)">BullMQ + Redis</strong> — job queue for scheduling delayed retries</div>
        <div class="feature-item"><div class="fi-dot dot-teal"></div>Store attempt count + last result in DB</div>
        <div class="feature-item"><div class="fi-dot dot-teal"></div>Exponential backoff — space retries further apart each time</div>
      </div>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">⑤ Human Handoff</h3>
    <div class="arch-card" style="margin-bottom:20px;">
      <div class="arch-card-head">
        <span class="arch-badge badge-blue">Required for Production</span>
        <h3>Graceful Transfer Flow</h3>
      </div>
      <div class="flow-block">
        <span class="hl2">Bot can't handle query / User asks for human</span>
        <span class="flow-arrow">  ↓</span>
        <span class="hl3">Tool call: transfer_to_human(reason)</span>
        <span class="flow-arrow">  ↓</span>
        <span class="hl">Twilio/SignalWire warm transfer</span>
        <span class="flow-arrow">  ↓</span>
        <span class="hl2">Human agent picks up with context</span>
        <span style="color:var(--dim);">  (bot briefs the agent: "User asked about X, already verified Y")</span>
        <span class="flow-arrow">  ↓</span>
        <span class="hl3">If no human available</span> <span style="color:var(--dim);">→ queue + callback promise</span>
      </div>
      <div style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap;">
        <span class="tag">Warm transfer</span>
        <span class="tag">Cold transfer</span>
        <span class="tag">Queue management</span>
        <span class="tag">Context handoff</span>
      </div>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">⑥ Prompt Engineering for Voice</h3>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">
      <div>
        <h4 style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--warn);letter-spacing:0.1em;margin-bottom:10px;">❌ Don't Do This</h4>
        <div class="code-block">
<span class="c"># This will be read aloud literally:</span><br>
<span class="k">Here are your options:</span><br>
<span class="s">- Option 1: Book appointment</span><br>
<span class="s">- Option 2: Check status</span><br>
<span class="s">- Option 3: Speak to human</span><br>
<span class="c"># → Sounds robotic and weird</span>
        </div>
      </div>
      <div>
        <h4 style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--accent2);letter-spacing:0.1em;margin-bottom:10px;">✅ Do This Instead</h4>
        <div class="code-block">
<span class="c"># Natural, spoken language:</span><br>
<span class="k">No markdown or bullet points.</span><br>
<span class="s">Keep sentences short.</span><br>
<span class="s">Use filler: "Sure, let me check</span><br>
<span class="s">that for you..."</span><br>
<span class="s">Handle mishearing: "I didn't</span><br>
<span class="s">catch that, could you repeat?"</span>
        </div>
      </div>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">⑦ Legal &amp; Compliance — Critical for India</h3>
    <div style="background:rgba(240,91,91,0.07);border:1px solid rgba(240,91,91,0.3);border-radius:10px;padding:14px 18px;margin-bottom:14px;">
      <p style="font-size:13px;color:var(--warn);font-family:var(--font-mono);">Ignoring TRAI rules = heavy fines + number blacklisting.</p>
    </div>
    <div class="tbl-wrap" style="margin-bottom:20px;">
      <table>
        <thead><tr><th>Rule</th><th>India (TRAI)</th><th>US (TCPA/FTC)</th></tr></thead>
        <tbody>
          <tr><td>DND / No-Call Registry</td><td class="td-muted">Must check NDNC before calling</td><td class="td-muted">TCPA equivalent</td></tr>
          <tr><td>Caller Consent</td><td class="val-mid">Required for commercial calls</td><td class="val-mid">Required</td></tr>
          <tr><td>Recording Consent</td><td class="td-muted">Must inform the caller</td><td class="td-muted">Two-party in some states</td></tr>
          <tr><td>Caller ID</td><td class="td-muted">Must display registered number</td><td class="td-muted">STIR/SHAKEN</td></tr>
          <tr><td>Calling Hours</td><td class="val-mid">9am–9pm only (TRAI)</td><td class="val-mid">8am–9pm local (TCPA)</td></tr>
          <tr><td>Bot Disclosure</td><td class="val-best">Must identify as AI/bot</td><td class="val-best">FTC guidelines</td></tr>
        </tbody>
      </table>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">⑧ Testing Strategy</h3>
    <div class="feature-grid">
      <div class="feature-block">
        <h3>🧪 Unit Testing</h3>
        <div class="feature-item"><div class="fi-dot dot-teal"></div><strong style="color:var(--text)">Test credentials</strong> from Twilio/SignalWire — simulate calls without making real ones (free)</div>
        <div class="feature-item"><div class="fi-dot dot-teal"></div><strong style="color:var(--text)">Deepgram playground</strong> — test your prompts and voices before writing code</div>
      </div>
      <div class="feature-block">
        <h3>📋 Scenario Testing</h3>
        <div class="feature-item"><div class="fi-dot dot-blue"></div>Happy path — user books, confirms, hangs up</div>
        <div class="feature-item"><div class="fi-dot dot-blue"></div>Mishear loop — user repeats 3x</div>
        <div class="feature-item"><div class="fi-dot dot-blue"></div>Tool timeout — calendar API is slow</div>
        <div class="feature-item"><div class="fi-dot dot-blue"></div>Voicemail hit — AMD triggers</div>
      </div>
      <div class="feature-block">
        <h3>⚡ Load Testing</h3>
        <div class="feature-item"><div class="fi-dot dot-amber"></div>What happens with 10 simultaneous calls?</div>
        <div class="feature-item"><div class="fi-dot dot-amber"></div>WebSocket connection limits on your server</div>
        <div class="feature-item"><div class="fi-dot dot-amber"></div>Deepgram concurrent connection limits per tier</div>
      </div>
    </div>
  </section>

  <!-- 09: VOICE CLONING -->
  <section id="voice-cloning">
    <div class="section-head">
      <span class="section-index">09</span>
      <h2>Voice Cloning — Use Your Own Voice</h2>
    </div>

    <p style="color:var(--muted);font-size:13px;margin-bottom:20px;">Replace any preset TTS voice with a clone of your own voice (or someone you know, with consent). The telephony stack stays identical — you just swap the TTS provider.</p>

    <div class="pipeline" style="margin-bottom:24px;">
      <div class="pipe-node">
        <div class="pipe-icon blue">🎙️</div>
        <div class="pipe-label">Record<br><span class="pipe-sub">Clean audio</span></div>
      </div>
      <div class="pipe-arrow">→</div>
      <div class="pipe-node">
        <div class="pipe-icon teal">☁️</div>
        <div class="pipe-label">Upload<br><span class="pipe-sub">to service</span></div>
      </div>
      <div class="pipe-arrow">→</div>
      <div class="pipe-node">
        <div class="pipe-icon amber">🧬</div>
        <div class="pipe-label">Model<br><span class="pipe-sub">trained on voice</span></div>
      </div>
      <div class="pipe-arrow">→</div>
      <div class="pipe-node">
        <div class="pipe-icon teal">🪪</div>
        <div class="pipe-label">Voice ID<br><span class="pipe-sub">generated</span></div>
      </div>
      <div class="pipe-arrow">→</div>
      <div class="pipe-node">
        <div class="pipe-icon blue">🔊</div>
        <div class="pipe-label">Use in<br><span class="pipe-sub">TTS API calls</span></div>
      </div>
    </div>

    <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:20px;margin-bottom:24px;">
      <h4 style="font-family:var(--font-mono);font-size:11px;text-transform:uppercase;color:var(--muted);letter-spacing:0.1em;margin-bottom:14px;">How Much Audio Do You Need?</h4>
      <div class="tbl-wrap">
        <table>
          <thead><tr><th>Quality Level</th><th>Audio Duration</th><th>Best For</th></tr></thead>
          <tbody>
            <tr><td>Decent</td><td class="val-good">1–3 minutes</td><td class="td-muted">Portfolio demos, experiments</td></tr>
            <tr><td>Good</td><td class="val-mid">10–15 minutes</td><td class="td-muted">Production use</td></tr>
            <tr><td>Excellent</td><td class="val-best">30+ minutes</td><td class="td-muted">Professional / commercial grade</td></tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top:10px;font-size:12px;color:var(--dim);">Requirements: Clean audio only — no background noise, no music, just speech. Read naturally, vary your sentences.</p>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">Managed Services (Easiest)</h3>
    <div class="tbl-wrap" style="margin-bottom:24px;">
      <table>
        <thead><tr><th>Service</th><th>Clone Type</th><th>Audio Needed</th><th>Streaming</th><th>Monthly Cost</th><th>TTS Cost/min</th></tr></thead>
        <tbody>
          <tr>
            <td>ElevenLabs (Starter)</td>
            <td class="td-muted">Instant Voice Clone</td>
            <td class="td-muted">1 min</td>
            <td class="val-best">✅ Real-time</td>
            <td class="val-good">$6/mo</td>
            <td class="val-mid">$0.18 (overage)</td>
          </tr>
          <tr>
            <td>ElevenLabs (Creator)</td>
            <td class="td-muted">Instant + Professional</td>
            <td class="td-muted">30+ min for pro</td>
            <td class="val-best">✅ Real-time</td>
            <td class="val-good">$11/mo</td>
            <td class="td-muted">Included (160 min)</td>
          </tr>
          <tr>
            <td>PlayHT</td>
            <td class="td-muted">Instant clone</td>
            <td class="td-muted">~1 min</td>
            <td class="val-best">✅ Ultra-low latency</td>
            <td class="val-mid">~$31/mo</td>
            <td class="td-muted">Plan included</td>
          </tr>
          <tr>
            <td>Resemble AI (TTS)</td>
            <td class="td-muted">Rapid / Professional</td>
            <td class="td-muted">Varies</td>
            <td class="val-best">✅ Streaming</td>
            <td class="td-muted">$2–5/mo per voice</td>
            <td class="val-best">$0.03/min</td>
          </tr>
          <tr>
            <td>Resemble AI (Agent)</td>
            <td class="td-muted">Real-time agent mode</td>
            <td class="td-muted">Varies</td>
            <td class="val-best">✅ Streaming</td>
            <td class="td-muted">$2–5/mo per voice</td>
            <td class="val-good">$0.06/min</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">Open Source — Self-Hosted (Free per call)</h3>
    <div class="tbl-wrap" style="margin-bottom:24px;">
      <table>
        <thead><tr><th>Model</th><th>Clone Audio Needed</th><th>Latency</th><th>Quality</th><th>Good for Agents?</th></tr></thead>
        <tbody>
          <tr><td>XTTS v2 (Coqui)</td><td class="td-muted">~6 seconds</td><td class="val-mid">Medium</td><td class="val-good">Very good</td><td class="val-best">✅ Yes</td></tr>
          <tr><td>OpenVoice</td><td class="td-muted">~5 seconds</td><td class="val-best">Fast</td><td class="val-mid">Good</td><td class="val-good">✅ Yes</td></tr>
          <tr><td>Fish Speech</td><td class="td-muted">~10 seconds</td><td class="val-best">Fast</td><td class="val-good">Very good</td><td class="val-best">✅ Yes</td></tr>
          <tr><td>Tortoise TTS</td><td class="td-muted">5–10 clips</td><td class="val-bad">~30s ❌</td><td class="val-best">Excellent</td><td class="val-bad">❌ Too slow</td></tr>
          <tr><td>StyleTTS2</td><td class="td-muted">Small dataset</td><td class="val-best">Fast</td><td class="val-best">Excellent</td><td class="val-best">✅ Yes</td></tr>
        </tbody>
      </table>
    </div>
    <p style="font-size:12px;color:var(--dim);margin-bottom:24px;">GPU VPS to run self-hosted models: ~$20–50/mo on RunPod or Vast.ai → amortized cost ~$0.003–0.008/min.</p>

    <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">Full Cost Per Minute — With Your Cloned Voice</h3>
    <p style="color:var(--muted);font-size:12px;margin-bottom:14px;">Including telephony (SignalWire $0.008/min) + LLM ($0.005/min)</p>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:20px;">
      <div class="cost-bar-row">
        <div class="cost-bar-label" style="min-width:240px;">ElevenLabs (overage rate)</div>
        <div class="cost-bar-track"><div class="cost-bar-fill" style="width:100%;background:var(--warn);"></div></div>
        <div class="cost-bar-val" style="color:var(--warn);">~$0.19</div>
      </div>
      <div class="cost-bar-row">
        <div class="cost-bar-label" style="min-width:240px;">Resemble AI (agent mode)</div>
        <div class="cost-bar-track"><div class="cost-bar-fill" style="width:38%;background:var(--accent);"></div></div>
        <div class="cost-bar-val" style="color:var(--accent);">~$0.073</div>
      </div>
      <div class="cost-bar-row">
        <div class="cost-bar-label" style="min-width:240px;">Resemble AI (TTS mode)</div>
        <div class="cost-bar-track"><div class="cost-bar-fill" style="width:22%;background:var(--accent2);"></div></div>
        <div class="cost-bar-val" style="color:var(--accent2);">~$0.043</div>
      </div>
      <div class="cost-bar-row">
        <div class="cost-bar-label" style="min-width:240px;">ElevenLabs Creator (within plan)</div>
        <div class="cost-bar-track"><div class="cost-bar-fill" style="width:7%;background:var(--accent2);"></div></div>
        <div class="cost-bar-val" style="color:var(--accent2);">~$0.013</div>
      </div>
      <div class="cost-bar-row">
        <div class="cost-bar-label" style="min-width:240px;">Self-hosted XTTS / Fish Speech</div>
        <div class="cost-bar-track"><div class="cost-bar-fill" style="width:10%;background:#56e564;"></div></div>
        <div class="cost-bar-val" style="color:#56e564;">~$0.018</div>
      </div>
    </div>

    <div class="arch-card">
      <div class="arch-card-head">
        <span class="arch-badge badge-teal">Integration</span>
        <h3>Swapping TTS in Your Pipeline</h3>
      </div>
      <div class="flow-block">
        <span class="hl2">Deepgram STT</span>
        <span class="flow-arrow">  ↓</span>
        <span class="hl">LLM (GPT-4o mini / Claude)</span>
        <span class="flow-arrow">  ↓</span>
        <span class="hl3">ElevenLabs TTS</span> <span style="color:var(--dim);">← your cloned voice ID here</span>
        <span class="flow-arrow">  ↓</span>
        <span class="hl2">Stream audio back to call</span>
        <span style="color:var(--dim);">  Telephony layer (Twilio/SignalWire) is unchanged. Only the TTS call changes.</span>
      </div>
    </div>

    <div style="margin-top:20px;">
      <h3 style="font-family:var(--font-head);font-size:16px;font-weight:700;margin-bottom:14px;">Legal &amp; Consent for Voice Cloning</h3>
      <div class="tbl-wrap" style="margin-bottom:20px;">
        <table>
          <thead><tr><th>Scenario</th><th>Legal Status</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td>Cloning your own voice</td><td class="val-best">✅ Fine</td><td class="td-muted">No issues anywhere</td></tr>
            <tr><td>Cloning someone you know</td><td class="val-mid">⚠️ Need written consent</td><td class="td-muted">Get it in writing before upload</td></tr>
            <tr><td>Cloning a public figure</td><td class="val-bad">❌ Illegal</td><td class="td-muted">Most jurisdictions prohibit</td></tr>
            <tr><td>India context</td><td class="val-mid">IT Act + DPDP Act</td><td class="td-muted">Consent + disclosure required</td></tr>
            <tr><td>US context</td><td class="val-mid">State-level laws</td><td class="td-muted">Several states have cloning consent laws</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="rec-grid">
      <div class="rec-card phase1">
        <div class="rec-phase">Quick Experiment</div>
        <h3>ElevenLabs Starter</h3>
        <p>Record 2–3 mins naturally, upload, get your voice ID instantly. Free within 40 min/mo, then $0.18/min.</p>
        <div class="rec-stack">$6/mo plan<br>Instant Voice Clone<br>Best quality output</div>
      </div>
      <div class="rec-card phase2">
        <div class="rec-phase">Portfolio Production</div>
        <h3>ElevenLabs Creator</h3>
        <p>160 mins/mo included. Professional clone available. Sweet spot for a portfolio voice bot.</p>
        <div class="rec-stack">$11/mo plan<br>~$0.013/min effective<br>Pro + Instant clone</div>
      </div>
      <div class="rec-card phase3">
        <div class="rec-phase">Zero Recurring Cost</div>
        <h3>Self-hosted XTTS v2</h3>
        <p>6 seconds of audio to clone. Run on RunPod GPU. $0 per call beyond the GPU server fee.</p>
        <div class="rec-stack">~$20–50/mo GPU<br>~$0.018/min total<br>Full control</div>
      </div>
    </div>
  </section>

  <!-- 10: CHECKLIST -->
  <section id="checklist">
    <div class="section-head">
      <span class="section-index">10</span>
      <h2>Complete Coverage Checklist</h2>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:20px;">
        <h4 style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--accent2);letter-spacing:0.1em;margin-bottom:14px;">Core Architecture</h4>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Voice pipeline (STT + LLM + TTS)</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Telephony providers (Twilio, SignalWire, Plivo, SIP)</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Browser voice bot (portfolio)</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Outbound calling architecture</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>SIP trunk vs managed API paths</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Indian providers &amp; limitations</div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:20px;">
        <h4 style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--accent);letter-spacing:0.1em;margin-bottom:14px;">Intelligence Layer</h4>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Tool calling with latency guidance</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>In-session, cross-session &amp; entity memory</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Mem0, Zep, pgvector options</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Full AI receptionist architecture</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Prompt engineering for voice</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Human handoff flow</div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:20px;">
        <h4 style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--accent3);letter-spacing:0.1em;margin-bottom:14px;">Operations</h4>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Observability (Langfuse + Sentry + custom logs)</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Latency benchmarks &amp; optimization</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Barge-in / interruption handling</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>AMD / voicemail detection</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Retry logic (BullMQ + Redis)</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Testing strategy (unit, scenario, load)</div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:20px;">
        <h4 style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:#56e564;letter-spacing:0.1em;margin-bottom:14px;">Voice &amp; Compliance</h4>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Voice cloning (ElevenLabs, PlayHT, Resemble AI)</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Open source cloning (XTTS v2, Fish Speech, StyleTTS2)</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Cloning cost &amp; per-minute breakdown</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>TRAI compliance (India) + TCPA (US)</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Voice cloning legal &amp; consent rules</div>
        <div class="feature-item"><div style="color:#56e564;flex-shrink:0;font-size:13px;">✅</div>Full cost breakdown — all stacks</div>
      </div>
    </div>
  </section>

</div>

<footer>
  Voice Agent Blueprint · Built with Deepgram, SignalWire, Langfuse · vinaybajjuri.tech
</footer>
`;

export default function VoiceAgentsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </>
  );
}
