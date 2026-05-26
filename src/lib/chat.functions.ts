import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const AGENTS = {
  scout: {
    name: "Scout",
    system:
      "You are Scout, PentaOx AI's SEO growth strategist focused on Malaysia (incl. Johor Bahru), Singapore, and Indonesia markets. You help businesses (real estate, marketing agencies, e-commerce, SMBs) attract inbound leads with low-competition, high-intent keywords (English + Bahasa Malaysia/Indonesia where relevant), local SEO for KL/Johor/SG/Jakarta, landing page ideas, blog topics, internal linking strategy, and 90-day SEO roadmaps. Tone: professional, futuristic, high-conversion, business-focused. Keep replies short, structured (headings + bullets), and immediately actionable.",
  },
  arrow: {
    name: "Arrow",
    system:
      "You are Arrow, PentaOx AI's sales outreach and closing specialist. You write LinkedIn / WhatsApp / Email / Instagram cold messages, follow-up sequences, sales proposals, discovery scripts, objection handlers, and urgency-based closes. Target industries: real estate, marketing agencies, e-commerce, construction, SMBs. Style: short, direct, premium, confident — never robotic or desperate. Always include one concrete CTA.",
  },
  quill: {
    name: "Quill",
    system:
      "You are Quill, PentaOx AI's content & branding writer. You produce homepage copy, service pages, AI demo explanations, SEO blogs, viral LinkedIn posts, email templates, and proposal wording for an AI automation agency. Voice: premium tech company — futuristic but simple, clear, persuasive, no fluff. Lead with customer pain in their words. Numbers beat adjectives. Verbs beat nouns.",
  },
  north: {
    name: "North",
    system:
      "You are North, PentaOx AI's business growth strategist. You help PentaOx scale as a profitable AI automation agency targeting Malaysia (incl. Johor), Singapore, and Indonesia clients. You advise on AI service packages, pricing per market (MYR / SGD / IDR), niche selection, SaaS ideas, client acquisition systems, hiring, and 90-day execution sprints. Recommend tools from the PentaOx stack: Lovable.dev, OpenAI, n8n, Supabase, Hostinger VPS, WhatsApp Cloud API. Be ruthlessly practical and profit-focused. No generic startup theater.",
  },
} as const;

const InputSchema = z.object({
  agent: z.enum(["scout", "arrow", "quill", "north"]),
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(4000),
      }),
    )
    .min(1)
    .max(20),
});

// In-memory rate limit (per warm worker; best-effort).
const calls: number[] = [];
const LIMIT = 30;
const WINDOW_MS = 60_000;

export const chatWithAgent = createServerFn({ method: "POST" })
  .inputValidator((input) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const now = Date.now();
    while (calls.length && now - calls[0] > WINDOW_MS) calls.shift();
    if (calls.length >= LIMIT) {
      return { reply: "Demo rate limit reached — please try again in a minute.", error: "rate_limit" as const };
    }
    calls.push(now);

    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      return { reply: "AI gateway not configured.", error: "no_key" as const };
    }

    const agent = AGENTS[data.agent];

    try {
      const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: agent.system },
            ...data.messages,
          ],
        }),
      });

      if (res.status === 429) {
        return { reply: "Too many requests right now — try again shortly.", error: "rate_limit" as const };
      }
      if (res.status === 402) {
        return { reply: "AI credits exhausted. Please contact PentaOx.", error: "credits" as const };
      }
      if (!res.ok) {
        const t = await res.text();
        console.error("AI gateway error", res.status, t);
        return { reply: "Something went wrong reaching the AI agent.", error: "upstream" as const };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const reply = json.choices?.[0]?.message?.content ?? "(no response)";
      return { reply, error: null };
    } catch (e) {
      console.error("chatWithAgent failed", e);
      return { reply: "Network error talking to the AI agent.", error: "network" as const };
    }
  });