import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/site";

export function Faq() {
  return (
    <Accordion.Root type="single" collapsible className="mx-auto max-w-3xl space-y-3">
      {FAQS.map((item, i) => (
        <Accordion.Item
          key={item.q}
          value={`item-${i}`}
          className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-colors data-[state=open]:border-accent/30 data-[state=open]:shadow-[var(--shadow-lift)]"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-secondary/50 sm:px-6">
              <span className="font-display text-base font-bold text-navy sm:text-lg">
                {item.q}
              </span>
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-data-[state=open]:bg-accent group-data-[state=open]:text-accent-foreground">
                <ChevronDown
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180"
                />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="border-t border-border/60 px-5 pt-4 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:text-base">
              {item.a}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
