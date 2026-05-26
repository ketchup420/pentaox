import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  problem: z.string().trim().min(10, "Tell us a bit more").max(4000),
  pain_points: z.string().trim().max(4000).optional().or(z.literal("")),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  preferred_contact: z.string().trim().max(80).optional().or(z.literal("")),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("leads").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      problem: data.problem,
      pain_points: data.pain_points || null,
      budget: data.budget || null,
      preferred_contact: data.preferred_contact || null,
    });
    if (error) {
      console.error("lead insert failed", error);
      return { ok: false as const, message: "Could not submit. Please try again." };
    }
    return { ok: true as const, message: "Got it — we'll be in touch within 24 hours." };
  });