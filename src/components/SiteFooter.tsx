import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-display text-lg font-bold">
            Penta<span className="text-aurora">Ox</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            AI solutions provider · Troubleshooting experts
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/agents" className="hover:text-foreground">Agents</Link>
          <Link to="/services" className="hover:text-foreground">Services</Link>
          <Link to="/pricing" className="hover:text-foreground">Pricing</Link>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} PentaOx. All rights reserved.
        </p>
      </div>
    </footer>
  );
}