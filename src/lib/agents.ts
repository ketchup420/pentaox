import { Search, Target, PenTool, Compass, type LucideIcon } from "lucide-react";
import type { AgentKey } from "@/components/AgentChat";

export type AgentMeta = {
  key: AgentKey;
  name: string;
  tag: string;
  blurb: string;
  intro: string;
  icon: LucideIcon;
  color: string;
  suggestions: string[];
};

export const AGENTS: AgentMeta[] = [
  {
    key: "scout",
    name: "Scout",
    tag: "SEO & Lead Attraction",
    blurb: "Finds low-competition keywords, plans landing pages and 90-day SEO roadmaps that pull qualified inbound leads.",
    intro: "I'm Scout. Tell me your business + target market and I'll map keywords, content, and a 90-day SEO plan that brings inbound leads.",
    icon: Search,
    color: "oklch(0.82 0.18 155)",
    suggestions: [
      "I run a real estate brokerage in Dubai. Where should I rank?",
      "Plan SEO for an AI marketing agency targeting Malaysia & Singapore SMBs.",
      "Suggest 10 blog titles for an AI automation company.",
    ],
  },
  {
    key: "arrow",
    name: "Arrow",
    tag: "Sales Outreach & Closing",
    blurb: "Writes cold DMs, emails, follow-ups, discovery scripts, objection handlers and high-converting closes.",
    intro: "I'm Arrow. Give me your offer and ICP and I'll write outreach that books calls — LinkedIn, WhatsApp, email, IG.",
    icon: Target,
    color: "oklch(0.72 0.18 295)",
    suggestions: [
      "Write a LinkedIn cold DM to a Dubai real estate broker.",
      "Draft a 5-touch follow-up sequence for marketing agencies.",
      "Handle the objection: 'we already use ChatGPT.'",
    ],
  },
  {
    key: "quill",
    name: "Quill",
    tag: "Content & Branding",
    blurb: "Writes homepage copy, service pages, SEO blogs, viral LinkedIn posts and email campaigns in our premium voice.",
    intro: "I'm Quill. Tell me what to write — page, post, blog, email — and I'll deliver in PentaOx's premium futuristic voice.",
    icon: PenTool,
    color: "oklch(0.65 0.20 220)",
    suggestions: [
      "Write hero copy for a WhatsApp AI agent landing page.",
      "Draft a viral LinkedIn post about AI lead generation.",
      "Write a 3-email welcome sequence for new clients.",
    ],
  },
  {
    key: "north",
    name: "North",
    tag: "Strategy & Scaling",
    blurb: "Plans pricing, packages, niches, hiring, SaaS bets and the 90-day sprint to grow PentaOx into a profitable agency.",
    intro: "I'm North. Ask me about pricing, packaging, niche selection, hiring, or the 90-day growth sprint.",
    icon: Compass,
    color: "oklch(0.78 0.16 75)",
    suggestions: [
      "What niche should PentaOx target first?",
      "Price an AI WhatsApp agent for Singapore vs Indonesia clients.",
      "Build me a 12-month revenue plan from $0.",
    ],
  },
];