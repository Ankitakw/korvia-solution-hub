import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/data/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-3">
        <a
          href="#contact"
          className="flex-1 rounded-full bg-accent px-5 py-3.5 text-center text-sm font-bold text-accent-foreground"
        >
          Tell Us Your Problem
        </a>
        <a
          href={CONTACT.whatsappUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Chat with Korvia Partners on WhatsApp"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-primary-foreground"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
