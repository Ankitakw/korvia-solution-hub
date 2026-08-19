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
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6">
              <span className="font-display text-base font-bold text-navy sm:text-lg">
                {item.q}
              </span>
              <ChevronDown
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:text-base">
              {item.a}
            </p>
          </Accordion.Content>
          </Accordion.Content>
        </Accordion.Item>

      ))}
    </Accordion.Root>
  );
}
