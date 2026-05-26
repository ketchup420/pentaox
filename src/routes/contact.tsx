import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, Clock, MessageSquare } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { submitLead } from "@/lib/leads.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PentaOx — Tell us your problem" },
      { name: "description", content: "Describe your pain points. We'll come back within 24 hours with a real plan and a price — not a sales pitch." },
      { property: "og:title", content: "Tell PentaOx your problem" },
      { property: "og:description", content: "Pain-point intake — diagnosis first, pricing after." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const submit = useServerFn(submitLead);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    problem: "",
    pain_points: "",
    budget: "",
    preferred_contact: "Email",
  });
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setMsg("");
    try {
      const res = await submit({ data: form });
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
      setMsg("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <SiteShell>
      <section className="pt-20 pb-12 text-center">
        <h1 className="font-display text-5xl font-bold sm:text-6xl">
          Tell us what's <span className="text-aurora">broken</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          The more pain you describe, the better the diagnosis. We reply within 24 hours with a
          plan and price — not a sales call.
        </p>
      </section>

      <section aria-labelledby="contact-intake" className="grid gap-8 pb-24 lg:grid-cols-[1.4fr_1fr]">
        <h2 id="contact-intake" className="sr-only">Project intake</h2>
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={onSubmit}
          className="glass space-y-5 rounded-2xl p-6 sm:p-8"
        >
          {state === "ok" ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle2 size={48} className="text-[oklch(0.82_0.18_155)]" />
              <h2 className="font-display text-2xl font-bold">Message received</h2>
              <p className="max-w-sm text-muted-foreground">{msg}</p>
              <button
                type="button"
                onClick={() => {
                  setState("idle");
                  setForm({ name: "", email: "", company: "", problem: "", pain_points: "", budget: "", preferred_contact: "Email" });
                }}
                className="mt-2 rounded-full border border-border bg-background/40 px-5 py-2 text-sm hover:bg-card"
              >
                Send another
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name *">
                  <input required value={form.name} onChange={update("name")} className={inputCls} />
                </Field>
                <Field label="Email *">
                  <input required type="email" value={form.email} onChange={update("email")} className={inputCls} />
                </Field>
              </div>
              <Field label="Company">
                <input value={form.company} onChange={update("company")} className={inputCls} />
              </Field>
              <Field label="What problem are you trying to solve? *">
                <textarea
                  required
                  rows={4}
                  minLength={10}
                  value={form.problem}
                  onChange={update("problem")}
                  placeholder="The more concrete, the better. e.g. 'Our team manually updates an Excel report every Monday and it takes 4 hours.'"
                  className={inputCls}
                />
              </Field>
              <Field label="Where does it hurt most? (pain points)">
                <textarea
                  rows={3}
                  value={form.pain_points}
                  onChange={update("pain_points")}
                  placeholder="Time wasted, customer complaints, missed revenue, errors…"
                  className={inputCls}
                />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Budget range">
                  <select value={form.budget} onChange={update("budget")} className={inputCls}>
                    <option value="">Not sure yet</option>
                    <option>Under $2k</option>
                    <option>$2k – $10k</option>
                    <option>$10k – $30k</option>
                    <option>$30k+</option>
                  </select>
                </Field>
                <Field label="Preferred contact">
                  <select value={form.preferred_contact} onChange={update("preferred_contact")} className={inputCls}>
                    <option>Email</option>
                    <option>Video call</option>
                    <option>WhatsApp</option>
                  </select>
                </Field>
              </div>

              {state === "err" && (
                <div className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  {msg}
                </div>
              )}

              <button
                type="submit"
                disabled={state === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.82_0.18_155)] to-[oklch(0.72_0.18_295)] px-6 py-3.5 font-medium text-background glow-primary transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {state === "loading" ? "Sending…" : (<>Send it <Send size={16} /></>)}
              </button>
            </>
          )}
        </motion.form>

        {/* Side info */}
        <aside className="space-y-4">
          {[
            { icon: Clock, title: "24-hour reply", body: "Every form goes straight to a human. We respond within one business day." },
            { icon: MessageSquare, title: "Diagnosis first", body: "We'll ask questions before quoting. Sometimes the fix is smaller than you think." },
            { icon: Mail, title: "No sales pressure", body: "If we're not the right team for the job, we'll say so — and point you somewhere better." },
          ].map((c) => (
            <div key={c.title} className="glass rounded-2xl p-5">
              <c.icon size={20} className="text-[oklch(0.82_0.18_155)]" />
              <h3 className="mt-3 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </aside>
      </section>
    </SiteShell>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background/40 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-[oklch(0.82_0.18_155)] focus:outline-none";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}