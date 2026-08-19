import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/data/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/95 p-3 shadow-[0_-8px_32px_-8px_oklch(0.195_0.065_262/20%)] backdrop-blur-xl lg:hidden">
      <div className="flex items-center gap-3">
        <a href="#contact" className="btn-primary flex-1 py-3.5 text-center text-sm">
          Tell Us Your Problem
        </a>
        <a
          href={CONTACT.whatsappUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Chat with Korvia Partners on WhatsApp"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
