import {
  Bot,
  Cloud,
  Code2,
  Globe,
  Megaphone,
  MessageCircle,
  Search,
  Smartphone,
  Workflow,
} from "lucide-react";

const ITEMS = [
  { icon: Globe, label: "Websites" },
  { icon: Code2, label: "Software" },
  { icon: Bot, label: "AI Solutions" },
  { icon: Workflow, label: "Automation" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Megaphone, label: "Marketing" },
  { icon: Search, label: "SEO" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Cloud, label: "Cloud" },
];

export function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="relative border-y border-primary-foreground/10 bg-primary-foreground/[0.04] py-4 backdrop-blur-sm">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[oklch(0.14_0.075_266)] to-transparent sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[oklch(0.14_0.075_266)] to-transparent sm:w-24"
      />
      <div className="marquee-track flex w-max gap-8">
        {doubled.map((item, i) => (
          <span
            key={`${item.label}-${i}`}
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-primary-foreground/10 bg-primary-foreground/[0.06] px-5 py-2 text-sm font-semibold text-primary-foreground/80"
          >
            <item.icon className="h-4 w-4 text-accent" aria-hidden="true" />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
