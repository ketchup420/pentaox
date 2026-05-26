import { MessageCircle } from "lucide-react";

const PHONE = "447877199472"; // PentaOx WhatsApp Business number (+44 787 719 9472)
const TEXT = encodeURIComponent("Hi PentaOx — I'd like to talk about an AI agent for my business.");

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${TEXT}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PentaOx on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[oklch(0.72_0.18_155)] px-4 py-3 text-sm font-semibold text-background shadow-[0_8px_30px_-8px_oklch(0.72_0.18_155/0.6)] transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-background opacity-60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-background" />
      </span>
      <MessageCircle size={18} />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}