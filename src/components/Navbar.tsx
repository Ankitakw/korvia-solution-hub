import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Brand } from "./Brand";
import { NAV_LINKS } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isLight
          ? "border-b border-border/80 bg-background/92 backdrop-blur-xl shadow-[0_8px_32px_-12px_oklch(0.195_0.065_262/25%)]"
          : "border-b border-primary-foreground/8 bg-navy/30 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3.5 sm:px-6 lg:py-4"
      >
        <a href="#home" className="min-w-0">
          <Brand inverted={!isLight} />
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-0.5 xl:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isLight
                      ? "text-muted-foreground hover:bg-secondary hover:text-navy"
                      : "text-primary-foreground/75 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn-primary btn-shimmer hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            Get Free Consultation
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors xl:hidden ${
              isLight
                ? "border-border text-navy hover:bg-secondary"
                : "border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/98 backdrop-blur-xl xl:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-navy transition-colors hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 pb-1">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary block w-full py-3.5 text-center text-base"
              >
                Get Free Consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
