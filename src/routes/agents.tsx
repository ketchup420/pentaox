import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { AgentChat, type AgentKey } from "@/components/AgentChat";
import { AGENTS } from "@/lib/agents";

export const Route = createFileRoute("/agents")({
  head: () => ({
    meta: [
      { title: "AI Agents — Scout · Arrow · Quill · North | PentaOx" },
      { name: "description", content: "Talk to PentaOx AI's four specialist agents: Scout (SEO), Arrow (sales), Quill (content) and North (strategy). Real AI, live demos." },
      { property: "og:title", content: "Meet Scout, Arrow, Quill & North — PentaOx AI Agents" },
      { property: "og:description", content: "Four specialist AI agents for SEO, sales, content and strategy. Try them live." },
      { property: "og:url", content: "https://pentaox-solutions-hub.lovable.app/agents" },
    ],
    links: [{ rel: "canonical", href: "https://pentaox-solutions-hub.lovable.app/agents" }],
  }),
  component: AgentsPage,
});

function AgentsPage() {
  const [active, setActive] = useState<AgentKey>("scout");
  const meta = AGENTS.find((a) => a.key === active)!;

  return (
    <SiteShell>
      <section className="pt-16 pb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <Sparkles size={14} className="text-[oklch(0.82_0.18_155)]" />
          Live AI Agents · Powered by OpenAI + Lovable AI
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold sm:text-6xl">
          Four agents. <span className="text-aurora">One mission.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Each PentaOx agent is a specialist. Pick a tab. Ask anything. Real LLM under the hood —
          ready to plug into your workflows.
        </p>
      </section>

      {/* Tabs */}
      <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        {AGENTS.map((a) => {
          const Icon = a.icon;
          const isActive = a.key === active;
          return (
            <button
              key={a.key}
              onClick={() => setActive(a.key)}
              className={`group relative overflow-hidden rounded-2xl border p-3 text-left transition-all sm:p-4 ${
                isActive
                  ? "border-[oklch(0.82_0.18_155)] bg-card glow-primary"
                  : "border-border bg-card/40 hover:bg-card"
              }`}
            >
              <Icon size={20} style={{ color: a.color }} />
              <div className="mt-2 font-display text-base font-bold sm:text-lg">{a.name}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                {a.tag}
              </div>
              {isActive && (
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-40 blur-2xl"
                  style={{ background: a.color }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active agent panel */}
      <section className="grid gap-6 pb-20 lg:grid-cols-[1fr_320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <AgentChat
              key={`chat-${active}`}
              agent={meta.key}
              agentName={meta.name}
              intro={meta.intro}
              suggestions={meta.suggestions}
            />
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Real-time responses · Backend ready for OpenAI API integration
            </p>
          </motion.div>
        </AnimatePresence>

        <aside className="glass rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ background: `${meta.color} / 0.15`, backgroundColor: `color-mix(in oklab, ${meta.color} 18%, transparent)` }}
            >
              <meta.icon size={20} style={{ color: meta.color }} />
            </div>
            <div>
              <div className="font-display text-lg font-bold">{meta.name}</div>
              <div className="text-xs text-muted-foreground">{meta.tag}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{meta.blurb}</p>

          <div className="mt-5 border-t border-border pt-4">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Try asking
            </div>
            <ul className="mt-2 space-y-2">
              {meta.suggestions.map((s) => (
                <li key={s} className="rounded-lg bg-background/30 px-3 py-2 text-xs text-muted-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 border-t border-border pt-4">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              The roster
            </div>
            <ul className="mt-2 space-y-1.5 text-xs">
              {AGENTS.map((a) => (
                <li key={a.key} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: a.color }} />
                  <span className="font-medium">{a.name}</span>
                  <span className="text-muted-foreground">— {a.tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </SiteShell>
  );
}