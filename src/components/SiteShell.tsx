import { ReactNode } from "react";
import { AuroraBackground } from "./AuroraBackground";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <AuroraBackground />
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6">{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}