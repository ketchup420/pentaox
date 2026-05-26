import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bot, Code2, Wrench, Plug, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI Agents, Node.js Apps, Integrations | PentaOx" },
      { name: "description", content: "PentaOx ships AI agents, Node.js applications, troubleshooting, and system integration. We diagnose first — AI is just one of our tools." },
      { property: "og:title", content: "PentaOx Services — Solutions, not just AI" },
      { property: "og:description", content: "AI agents, Node.js apps, troubleshooting, and integrations." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    body: "Domain-specific agents (like OpenClaw & Hermes) wired into your data and workflows. Not a generic chatbot — an agent that actually does something.",
    bullets: ["System-prompted for your business", "Tools & function calling", "Live on your site or Slack"],
  },
  {
    icon: Code2,
    title: "Node.js Applications",
    body: "Production APIs, dashboards, internal tools. Real code, not no-code stuck together with hope.",
    bullets: ["TypeScript + clean architecture", "Auth, payments, dashboards", "Deployed on your infra or ours"],
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    body: "Something is broken, slow, or expensive — and nobody can tell you why. We diagnose root causes before touching code.",
    bullets: ["Performance audits", "Cost & infra review", "Codebase rescue"],
  },
  {
    icon: Plug,
    title: "System Integration",
    body: "Two tools that don't talk to each other? Webhooks, APIs, ETL — we bridge them cleanly.",
    bullets: ["CRM ↔ website ↔ email", "Custom webhooks & cron", "Data sync & ETL pipelines"],
  },
];

const PROCESS = [
  { n: "01", title: "Diagnose", body: "We listen. You describe pain points; we ask the sharp questions." },
  { n: "02", title: "Design", body: "We propose the smallest fix that actually solves it — code, AI, or both." },
  { n: "03", title: "Build", body: "We ship in iterations. You see progress weekly." },
  { n: "04", title: "Hand off", body: "Documented, tested, yours to own. No vendor lock-in." },
];

function ServicesPage() {
  return (
    <SiteShell>
      <section className="pt-20 pb-12 text-center">
        <h1 className="font-display text-5xl font-bold sm:text-6xl">
          Services that <span className="text-aurora">solve problems</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Four things we do well. We pick the right one — or combine them — once we understand
          what's actually broken.
        </p>
      </section>

      <section className="grid gap-6 pb-16 sm:grid-cols-2">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-7"
          >
            <s.icon size={28} className="text-[oklch(0.82_0.18_155)]" />
            <h2 className="mt-4 font-display text-2xl font-bold">{s.title}</h2>
            <p className="mt-2 text-muted-foreground">{s.body}</p>
            <ul className="mt-4 space-y-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[oklch(0.82_0.18_155)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* Manifesto */}
      <section className="py-16">
        <div className="glass relative overflow-hidden rounded-3xl p-10 sm:p-16">
          <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "var(--gradient-aurora)" }} />
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Our manifesto</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl leading-tight">
            AI is <span className="text-aurora">not the solution</span>.
            <br />
            Solving your problem is.
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Most agencies sell you AI because AI is hot. We start by asking what's broken. Sometimes
            the answer is a smart agent. Sometimes it's a 30-line cron script. We'll tell you which
            one — even when it costs us a bigger invoice.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">How we work</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <div key={p.n} className="glass rounded-2xl p-6">
              <div className="font-display text-3xl text-aurora">{p.n}</div>
              <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 pt-10 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.82_0.18_155)] to-[oklch(0.72_0.18_295)] px-8 py-4 font-medium text-background glow-primary transition-transform hover:scale-105"
        >
          Tell us what's broken <ArrowRight size={18} />
        </Link>
      </section>
    </SiteShell>
  );
}