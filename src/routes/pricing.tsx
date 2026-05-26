import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — AI Agents & Automation Packages | PentaOx AI" },
      { name: "description", content: "Productized AI agent pricing for real estate, marketing agencies, e-commerce and SMBs. Pilot, Growth and Enterprise tiers." },
      { property: "og:title", content: "PentaOx AI — Pricing" },
      { property: "og:description", content: "Three tiers. Fixed scope, fixed price, 14-day delivery. KPI-backed." },
      { property: "og:url", content: "https://pentaox-solutions-hub.lovable.app/pricing" },
    ],
    links: [{ rel: "canonical", href: "https://pentaox-solutions-hub.lovable.app/pricing" }],
  }),
  component: PricingPage,
});

const TIERS = [
  {
    name: "Pilot",
    tag: "Starter",
    price: "$1,500",
    unit: "one-time",
    blurb: "Land an agent in one channel, fast. Perfect to test the waters.",
    features: [
      "1 AI agent on 1 channel (WhatsApp or web)",
      "Trained on your FAQs",
      "Calendar booking integration",
      "Basic analytics dashboard",
      "14-day delivery · 30-day support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    tag: "Most teams pick this",
    price: "$5,000",
    unit: "+ $700/mo",
    blurb: "The flagship stack. Multi-channel agent, CRM-wired, KPI-guaranteed.",
    features: [
      "Web + WhatsApp + Voice agent",
      "Trained on your data, products, policies",
      "CRM integration (HubSpot, Pipedrive, GHL)",
      "Lead scoring + smart routing",
      "Monthly tuning included for 3 months",
      "30-day KPI guarantee or rebuild free",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    tag: "Scale",
    price: "$15K+",
    unit: "custom build",
    blurb: "Custom architecture, dedicated infra, multi-agent systems with SLA.",
    features: [
      "Full audit + custom architecture",
      "Multi-agent system + custom Node.js apps",
      "Dedicated infrastructure",
      "SLA-backed support",
      "Quarterly optimization sprints",
    ],
    featured: false,
  },
];

const VERTICALS = [
  { name: "Real Estate Lead Engine", price: "$6,000 + $900/mo", body: "WhatsApp + voice agent, lead qualification, viewing booking, CRM sync." },
  { name: "Marketing Agency White-label", price: "$5,000 + $499/mo per workspace", body: "Resell PentaOx's stack to your clients under your brand." },
  { name: "E-commerce Support Stack", price: "$5,500 + $800/mo", body: "Order status, returns, sizing — 70% ticket deflection on autopilot." },
  { name: "SMB Starter Bundle", price: "$2,500 + $400/mo", body: "Lean WhatsApp agent + automation for small business owners." },
];

function PricingPage() {
  return (
    <SiteShell>
      <section className="pt-16 pb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <Sparkles size={14} className="text-[oklch(0.82_0.18_155)]" />
          Productized · Predictable · KPI-backed
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold sm:text-6xl">
          Pricing that <span className="text-aurora">earns its keep.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Fixed scope. Fixed price. 14-day delivery. If the agreed KPI isn't hit in 30 days live, we rebuild free.
        </p>
      </section>

      <section className="grid gap-5 pb-16 lg:grid-cols-3">
        {TIERS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`glass relative rounded-3xl p-7 ${t.featured ? "border-[oklch(0.82_0.18_155)] glow-primary" : ""}`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[oklch(0.82_0.18_155)] to-[oklch(0.72_0.18_295)] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-background">
                Most popular
              </span>
            )}
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.tag}</div>
            <h2 className="mt-2 font-display text-3xl font-bold">{t.name}</h2>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-bold">{t.price}</span>
              <span className="text-sm text-muted-foreground">{t.unit}</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{t.blurb}</p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[oklch(0.82_0.18_155)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                t.featured
                  ? "bg-gradient-to-r from-[oklch(0.82_0.18_155)] to-[oklch(0.72_0.18_295)] text-background glow-primary"
                  : "border border-border bg-background/40 text-foreground hover:bg-card"
              }`}
            >
              Get started <ArrowRight size={16} />
            </Link>
          </motion.div>
        ))}
      </section>

      <section className="pb-20">
        <div className="mb-8 text-center">
          <span className="text-[10px] uppercase tracking-widest text-[oklch(0.72_0.18_295)] sm:text-xs">Vertical bundles</span>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Built for your industry</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {VERTICALS.map((v) => (
            <div key={v.name} className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold">{v.name}</h3>
              <div className="mt-1 text-sm text-[oklch(0.82_0.18_155)]">{v.price}</div>
              <p className="mt-3 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.82_0.18_155)] to-[oklch(0.72_0.18_295)] px-8 py-4 font-medium text-background glow-primary transition-transform hover:scale-105"
        >
          Talk to us about pricing <ArrowRight size={18} />
        </Link>
      </section>
    </SiteShell>
  );
}