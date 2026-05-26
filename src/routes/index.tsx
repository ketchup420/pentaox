import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Megaphone,
  Magnet,
  Workflow,
  Bot,
  Star,
  CheckCircle2,
  CalendarClock,
  Sparkles,
  LineChart,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { SiteShell } from "@/components/SiteShell";
import { AGENTS } from "@/lib/agents";
import { submitLead } from "@/lib/leads.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PentaOx AI — Futuristic AI Agents & Automation for Business" },
      {
        name: "description",
        content:
          "PentaOx AI builds AI agents, WhatsApp & voice automations, and lead-gen systems for real estate, marketing agencies, e-commerce and SMBs. Live in 14 days.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PentaOx AI" },
      { property: "og:title", content: "PentaOx AI — AI Agents & Automation" },
      {
        property: "og:description",
        content:
          "Meet Scout, Arrow, Quill & North. Custom AI agents and automations that actually do the work.",
      },
      { property: "og:url", content: "https://pentaox-solutions-hub.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PentaOx AI — AI Agents & Automation" },
      {
        name: "twitter:description",
        content: "Custom AI agents that qualify leads, book appointments and run support 24/7.",
      },
    ],
    links: [{ rel: "canonical", href: "https://pentaox-solutions-hub.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PentaOx AI",
          url: "https://pentaox-solutions-hub.lovable.app/",
          description:
            "AI agents, automation systems and lead-generation for businesses worldwide.",
        }),
      },
    ],
  }),
  component: Index,
});

const PROBLEMS = [
  { p: "Leads die after 6pm", s: "WhatsApp AI agent · 24/7" },
  { p: "Cold outbound is dead", s: "AI lead-gen system on autopilot" },
  { p: "Agents waste hours qualifying", s: "AI scoring + booking" },
  { p: "Two systems don't talk", s: "Custom Node.js integration" },
  { p: "You bought AI, ROI is zero", s: "Diagnosis + the right workflow" },
];

function Ticker() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % PROBLEMS.length), 3200);
    return () => clearInterval(t);
  }, []);
  const cur = PROBLEMS[i];
  return (
    <div className="glass mx-auto flex w-full max-w-[92vw] flex-col items-center gap-2 rounded-2xl p-4 text-center sm:max-w-none sm:flex-row sm:justify-center sm:gap-6 sm:p-5 sm:text-left">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">Pain</span>
      <motion.span
        key={`p-${i}`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display"
        style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.05rem)" }}
      >
        {cur.p}
      </motion.span>
      <ArrowRight className="hidden text-muted-foreground sm:block" size={18} />
      <span className="text-[10px] uppercase tracking-widest text-[oklch(0.82_0.18_155)] sm:text-xs">Fix</span>
      <motion.span
        key={`s-${i}`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-aurora"
        style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.05rem)" }}
      >
        {cur.s}
      </motion.span>
    </div>
  );
}

const SERVICES = [
  { icon: Building2, title: "AI for Real Estate", desc: "WhatsApp + voice agents that qualify buyers and book viewings 24/7." },
  { icon: Megaphone, title: "AI for Marketing Agencies", desc: "White-label AI agent stack you resell to your clients on retainer." },
  { icon: Magnet, title: "AI Lead Generation", desc: "From cold ICP data to booked sales calls — multichannel and on autopilot." },
  { icon: Workflow, title: "Custom AI Automation", desc: "Node.js apps, webhooks and integrations that connect your stack." },
  { icon: Bot, title: "Custom AI Agents", desc: "Trained on your data, your tone, your stack. Real LLM, not a flowchart." },
];

const TESTIMONIALS = [
  {
    name: "Faisal R.",
    role: "Real Estate Broker · Johor Bahru",
    body: "Our WhatsApp agent booked 47 viewings in month one. Our top human agent does 30. Game over.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Founder · Marketing Agency, Singapore",
    body: "We white-labeled PentaOx's stack. Added $14K MRR in 90 days without hiring.",
    rating: 5,
  },
  {
    name: "Daniyal A.",
    role: "E-commerce Owner · Jakarta",
    body: "60% of after-hours support is now solved by the agent. CSAT actually went up.",
    rating: 5,
  },
];

function Index() {
  return (
    <SiteShell>
      {/* HERO ===================================================== */}
      <section className="relative -mx-6 mb-10 overflow-hidden">
        <div className="relative h-[78vh] min-h-[520px] w-screen sm:h-[88vh] sm:min-h-[600px]">
          <video
            src="/ox-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/ox-logo.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-background/70 via-transparent to-background/30 sm:block" />

          <div
            className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6"
            style={{
              paddingTop: "max(env(safe-area-inset-top), 1rem)",
              paddingBottom: "max(env(safe-area-inset-bottom), 1rem)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-[10px] text-muted-foreground backdrop-blur sm:px-4 sm:py-1.5 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.82_0.18_155)] animate-pulse" />
                PentaOx AI · London · Kuala Lumpur · Singapore · Jakarta
              </span>
              <h1
                className="mt-5 font-display font-bold leading-[1.05] sm:mt-6"
                style={{ fontSize: "clamp(1.6rem, 5vw, 3.25rem)" }}
              >
                AI agents that <span className="text-aurora">do the work.</span>
                <br />
                Not chatbots. Not demos.
              </h1>
              <p
                className="mt-4 max-w-xl text-muted-foreground"
                style={{ fontSize: "clamp(0.78rem, 1.2vw, 0.95rem)" }}
              >
                We build custom AI agents and automations that qualify leads, book appointments,
                and run sales & support 24/7 — for real estate, marketing agencies, e-commerce
                and SMBs.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <Link
                  to="/agents"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.82_0.18_155)] to-[oklch(0.72_0.18_295)] px-5 py-3 font-medium text-background glow-primary transition-transform hover:scale-105 sm:px-7 sm:py-3.5"
                  style={{ fontSize: "clamp(0.8rem, 1.4vw, 0.95rem)" }}
                >
                  Try our agents <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#book"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-5 py-3 font-medium backdrop-blur transition-colors hover:bg-card sm:px-7 sm:py-3.5"
                  style={{ fontSize: "clamp(0.8rem, 1.4vw, 0.95rem)" }}
                >
                  Book a call <CalendarClock size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="relative z-10 -mt-2 px-4 pb-6 sm:absolute sm:bottom-6 sm:left-1/2 sm:mt-0 sm:-translate-x-1/2 sm:px-0 sm:pb-0">
            <Ticker />
          </div>
        </div>
      </section>

      {/* AGENTS PREVIEW (Scout / Arrow / Quill / North) ============== */}
      <section id="agents" className="scroll-mt-24 py-12 sm:py-16">
        <div className="mb-10 text-center">
          <span className="text-[10px] uppercase tracking-widest text-[oklch(0.72_0.18_295)] sm:text-xs">Meet the roster</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.5rem)" }}>
            Four agents. <span className="text-aurora">One mission.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground" style={{ fontSize: "clamp(0.8rem, 1.4vw, 0.95rem)" }}>
            Specialist AI agents you can deploy instantly. Click any to chat live.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {AGENTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass group relative overflow-hidden rounded-2xl p-5"
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `color-mix(in oklab, ${a.color} 18%, transparent)` }}
                >
                  <Icon size={22} style={{ color: a.color }} />
                </div>
                <div className="mt-4 text-[10px] uppercase tracking-widest text-muted-foreground">{a.tag}</div>
                <h3 className="mt-1 font-display text-xl font-bold">{a.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.blurb}</p>
                <Link
                  to="/agents"
                  className="mt-4 inline-flex items-center gap-1 text-sm hover:underline"
                  style={{ color: a.color }}
                >
                  Talk to {a.name} <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SERVICES =================================================== */}
      <section id="services" className="scroll-mt-24 py-12 sm:py-16">
        <div className="mb-10 text-center">
          <span className="text-[10px] uppercase tracking-widest text-[oklch(0.82_0.18_155)] sm:text-xs">What we build</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.5rem)" }}>
            Five engines. One growth stack.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 sm:p-6"
            >
              <s.icon className="text-[oklch(0.82_0.18_155)]" size={26} />
              <h3 className="mt-4 font-display font-semibold" style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)" }}>{s.title}</h3>
              <p className="mt-2 text-muted-foreground" style={{ fontSize: "clamp(0.78rem, 1.3vw, 0.875rem)" }}>{s.desc}</p>
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-60"
                style={{ background: "var(--gradient-aurora)" }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* DASHBOARD UI PREVIEW ======================================== */}
      <DashboardPreview />

      {/* PRICING SNAPSHOT ============================================ */}
      <section className="py-12 sm:py-16">
        <div className="mb-10 text-center">
          <span className="text-[10px] uppercase tracking-widest text-[oklch(0.82_0.18_155)] sm:text-xs">Plans</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.5rem)" }}>
            Productized. Predictable.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`glass relative rounded-2xl p-6 ${p.featured ? "border-[oklch(0.82_0.18_155)] glow-primary" : ""}`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[oklch(0.82_0.18_155)] to-[oklch(0.72_0.18_295)] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-background">
                  Most popular
                </span>
              )}
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</div>
              <h3 className="mt-2 font-display text-2xl font-bold">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.unit}</span>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[oklch(0.82_0.18_155)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/pricing"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
              >
                See full pricing <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS =============================================== */}
      <section className="py-12 sm:py-16">
        <div className="mb-10 text-center">
          <span className="text-[10px] uppercase tracking-widest text-[oklch(0.72_0.18_295)] sm:text-xs">Proof</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.5rem)" }}>
            What our clients say
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-5"
            >
              <div className="flex gap-0.5 text-[oklch(0.82_0.18_85)]">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-3 text-sm text-foreground">"{t.body}"</p>
              <div className="mt-4 border-t border-border pt-3">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOOKING + LEAD CAPTURE ====================================== */}
      <BookingAndLead />

      {/* CONTACT BAND =============================================== */}
      <section id="contact" className="scroll-mt-24 py-14 sm:py-20">
        <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-14">
          <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "var(--gradient-aurora)" }} />
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display font-bold" style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.75rem)" }}>
                Ready to ship your AI agent?
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground" style={{ fontSize: "clamp(0.85rem, 1.4vw, 1rem)" }}>
                Tell us your problem. We come back in 24 hours with a real plan and a real price.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-transform hover:scale-105"
                >
                  Start the conversation <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/447877199472"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3 font-medium backdrop-blur transition-colors hover:bg-card"
                >
                  <MessageSquare size={18} /> WhatsApp
                </a>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="glass flex items-center gap-3 rounded-xl p-4">
                <Mail size={18} className="text-[oklch(0.82_0.18_155)]" />
                <span>hello@pentaox.com</span>
              </div>
              <div className="glass flex items-center gap-3 rounded-xl p-4">
                <Phone size={18} className="text-[oklch(0.82_0.18_155)]" />
                <span>+44 787 719 9472</span>
              </div>
              <div className="glass flex items-center gap-3 rounded-xl p-4">
                <Building2 size={18} className="text-[oklch(0.82_0.18_155)]" />
                <span>100 Christian St, London E1 1RS, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

/* =================== Sub-components =================== */

const PLANS = [
  {
    name: "Pilot",
    tag: "Starter",
    price: "$1,500",
    unit: "one-time",
    featured: false,
    features: ["1 AI agent on 1 channel", "Calendar booking", "Basic analytics", "14-day delivery"],
  },
  {
    name: "Growth",
    tag: "Most teams pick this",
    price: "$5,000",
    unit: "+ $700/mo",
    featured: true,
    features: ["Web + WhatsApp + Voice agent", "CRM integration & lead scoring", "Monthly tuning", "30-day KPI guarantee"],
  },
  {
    name: "Enterprise",
    tag: "Scale",
    price: "$15K+",
    unit: "custom",
    featured: false,
    features: ["Multi-agent system", "Custom Node.js apps", "Dedicated infra & SLA", "Quarterly optimization"],
  },
];

function DashboardPreview() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mb-10 text-center">
        <span className="text-[10px] uppercase tracking-widest text-[oklch(0.65_0.20_220)] sm:text-xs">Live dashboard</span>
        <h2 className="mt-2 font-display font-bold" style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.5rem)" }}>
          Watch your agent earn its keep.
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass relative overflow-hidden rounded-3xl p-4 sm:p-6"
      >
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            { label: "Conversations", value: "12,847", delta: "+18%" },
            { label: "Leads qualified", value: "1,432", delta: "+24%" },
            { label: "Bookings", value: "318", delta: "+31%" },
            { label: "Revenue impact", value: "$84K", delta: "+42%" },
          ].map((k) => (
            <div key={k.label} className="rounded-xl border border-border bg-background/40 p-4">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k.label}</div>
              <div className="mt-2 font-display text-2xl font-bold">{k.value}</div>
              <div className="mt-1 text-xs text-[oklch(0.82_0.18_155)]">{k.delta} vs last month</div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-xl border border-border bg-background/40 p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Conversations · last 14d</div>
                <div className="mt-1 font-display text-lg font-semibold">Volume trend</div>
              </div>
              <LineChart size={18} className="text-[oklch(0.82_0.18_155)]" />
            </div>
            <FakeChart />
          </div>

          <div className="rounded-xl border border-border bg-background/40 p-5">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Live agent activity</div>
            <ul className="mt-3 space-y-2.5 text-xs">
              {[
                { who: "Scout", what: "Found 12 new SEO targets", time: "2m ago", color: "oklch(0.82 0.18 155)" },
                { who: "Arrow", what: "Sent 47 LinkedIn DMs", time: "8m ago", color: "oklch(0.72 0.18 295)" },
                { who: "Quill", what: "Drafted 3 LinkedIn posts", time: "21m ago", color: "oklch(0.65 0.20 220)" },
                { who: "North", what: "Updated 90-day plan", time: "1h ago", color: "oklch(0.78 0.16 75)" },
              ].map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: a.color }} />
                  <div className="flex-1">
                    <div>
                      <span className="font-semibold" style={{ color: a.color }}>{a.who}</span>
                      <span className="text-muted-foreground"> · {a.what}</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground">{a.time}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-25 blur-3xl" style={{ background: "var(--gradient-aurora)" }} />
      </motion.div>
    </section>
  );
}

function FakeChart() {
  const points = [22, 28, 24, 35, 31, 42, 38, 50, 47, 58, 64, 61, 72, 80];
  const max = Math.max(...points);
  const w = 100, h = 36;
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - (p / max) * h;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-4 h-28 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.18 155)" />
          <stop offset="100%" stopColor="oklch(0.72 0.18 295)" />
        </linearGradient>
        <linearGradient id="fillGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.18 155)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="oklch(0.82 0.18 155)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill="url(#fillGrad)" />
      <path d={path} stroke="url(#lineGrad)" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookingAndLead() {
  const submit = useServerFn(submitLead);
  const [form, setForm] = useState({ name: "", email: "", company: "", problem: "" });
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");
  const [slot, setSlot] = useState<string | null>(null);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await submit({
        data: {
          ...form,
          pain_points: slot ? `Booked slot: ${slot}` : "",
          budget: "",
          preferred_contact: slot ? "Video call" : "Email",
        },
      });
      if (res.ok) {
        setState("ok");
        setMsg(res.message);
      } else {
        setState("err");
        setMsg(res.message);
      }
    } catch (err) {
      console.error(err);
      setState("err");
      setMsg("Something went wrong. Try again.");
    }
  };

  // generate next 6 weekday slots, 11:00 / 14:00 / 17:00 PKT
  const slots = (() => {
    const out: { id: string; label: string }[] = [];
    const d = new Date();
    let added = 0;
    while (added < 6) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() === 0 || d.getDay() === 6) continue;
      const dayLabel = d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
      ["11:00", "14:00", "17:00"].forEach((time) => {
        out.push({ id: `${dayLabel} · ${time}`, label: `${dayLabel} · ${time}` });
      });
      added++;
    }
    return out.slice(0, 9);
  })();

  return (
    <section id="book" className="scroll-mt-24 py-12 sm:py-16">
      <div className="mb-10 text-center">
        <span className="text-[10px] uppercase tracking-widest text-[oklch(0.78_0.16_75)] sm:text-xs">Book · Capture</span>
        <h2 className="mt-2 font-display font-bold" style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.5rem)" }}>
          Pick a slot. Tell us what's broken.
        </h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {/* Booking */}
        <div className="glass rounded-2xl p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <CalendarClock size={18} className="text-[oklch(0.82_0.18_155)]" />
            <h3 className="font-display text-lg font-semibold">20-min Diagnosis Call</h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Free, no pitch. Pick a time that works (SGT / MYT · GMT+8).</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {slots.map((s) => (
              <button
                key={s.id}
                onClick={() => setSlot(s.id)}
                className={`rounded-lg border p-2 text-[11px] transition-all ${
                  slot === s.id
                    ? "border-[oklch(0.82_0.18_155)] bg-card text-foreground glow-primary"
                    : "border-border bg-background/30 text-muted-foreground hover:bg-card hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
          {slot && (
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-[oklch(0.82_0.18_155)]/40 bg-[oklch(0.82_0.18_155)]/10 px-3 py-2 text-xs">
              <CheckCircle2 size={14} className="text-[oklch(0.82_0.18_155)]" /> Selected: <span className="font-semibold">{slot}</span>
            </div>
          )}
        </div>

        {/* Lead capture */}
        <form onSubmit={onSubmit} className="glass space-y-3 rounded-2xl p-5 sm:p-6">
          {state === "ok" ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 size={40} className="text-[oklch(0.82_0.18_155)]" />
              <h3 className="font-display text-xl font-bold">You're in.</h3>
              <p className="max-w-xs text-sm text-muted-foreground">{msg}</p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-[oklch(0.72_0.18_295)]" />
                <h3 className="font-display text-lg font-semibold">Tell us your problem</h3>
              </div>
              <input required placeholder="Your name" value={form.name} onChange={update("name")} className={leadInput} maxLength={120} />
              <input required type="email" placeholder="Email" value={form.email} onChange={update("email")} className={leadInput} maxLength={255} />
              <input placeholder="Company (optional)" value={form.company} onChange={update("company")} className={leadInput} maxLength={160} />
              <textarea
                required
                rows={3}
                minLength={10}
                maxLength={2000}
                placeholder="What's broken? Be specific. e.g. 'Leads die after 6pm and we lose 30% of inbound.'"
                value={form.problem}
                onChange={update("problem")}
                className={leadInput}
              />
              {state === "err" && <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">{msg}</div>}
              <button
                type="submit"
                disabled={state === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.82_0.18_155)] to-[oklch(0.72_0.18_295)] px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {state === "loading" ? "Sending…" : slot ? `Book ${slot}` : "Send it"} <ArrowRight size={16} />
              </button>
              <p className="text-center text-[11px] text-muted-foreground">We reply within 24 hours · No sales pressure</p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

const leadInput =
  "w-full rounded-xl border border-border bg-background/40 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-[oklch(0.82_0.18_155)] focus:outline-none";