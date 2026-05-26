import { useState, useRef, useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import ReactMarkdown from "react-markdown";
import { Send, Sparkles } from "lucide-react";
import { chatWithAgent } from "@/lib/chat.functions";

export type AgentKey = "scout" | "arrow" | "quill" | "north";

type Msg = { role: "user" | "assistant"; content: string };

export function AgentChat({
  agent,
  agentName,
  intro,
  suggestions,
  primer,
  onPrimerHandled,
}: {
  agent: AgentKey;
  agentName: string;
  intro: string;
  suggestions: string[];
  primer?: string | null;
  onPrimerHandled?: () => void;
}) {
  const callChat = useServerFn(chatWithAgent);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: intro },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (primer && !loading) {
      send(primer);
      onPrimerHandled?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primer]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await callChat({ data: { agent, messages: next } });
      setMessages([...next, { role: "assistant", content: res.reply }]);
    } catch (e) {
      console.error(e);
      setMessages([...next, { role: "assistant", content: "Something went wrong. Try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass rounded-2xl p-4 sm:p-6">
      <div
        ref={scrollRef}
        className="h-[420px] overflow-y-auto rounded-xl bg-background/40 p-4"
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-3 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                m.role === "user"
                  ? "bg-gradient-to-br from-[oklch(0.82_0.18_155)] to-[oklch(0.72_0.18_295)] text-background"
                  : "bg-card text-foreground border border-border"
              }`}
            >
              {m.role === "assistant" ? (
                <div className="prose prose-sm prose-invert max-w-none [&_p]:my-1 [&_ul]:my-2 [&_ol]:my-2">
                  <ReactMarkdown>{m.content}</ReactMarkdown>
                </div>
              ) : (
                m.content
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles size={14} className="animate-pulse text-[oklch(0.82_0.18_155)]" />
            {agentName} is thinking…
          </div>
        )}
      </div>

      {messages.length <= 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="mt-3 flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask ${agentName}…`}
          maxLength={1000}
          className="flex-1 rounded-xl border border-border bg-background/40 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-[oklch(0.82_0.18_155)] focus:outline-none"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="rounded-xl bg-gradient-to-r from-[oklch(0.82_0.18_155)] to-[oklch(0.72_0.18_295)] px-4 text-background transition-opacity disabled:opacity-50"
          aria-label="Send"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}