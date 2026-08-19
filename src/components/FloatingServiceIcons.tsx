import type { CSSProperties } from "react";
import { Bot, Cloud, Code2, Globe, Sparkles, Workflow } from "lucide-react";

const FLOATERS = [
  { icon: Globe, top: "6%", left: "-4%", delay: "0s", size: "h-11 w-11" },
  { icon: Bot, top: "18%", right: "-6%", delay: "0.8s", size: "h-12 w-12" },
  { icon: Code2, bottom: "32%", left: "-8%", delay: "1.4s", size: "h-10 w-10" },
  { icon: Workflow, bottom: "12%", right: "-4%", delay: "0.4s", size: "h-11 w-11" },
  { icon: Cloud, top: "42%", right: "-10%", delay: "1.8s", size: "h-9 w-9" },
  { icon: Sparkles, top: "8%", left: "38%", delay: "2.2s", size: "h-8 w-8" },
];

export function FloatingServiceIcons() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
      {FLOATERS.map((item, i) => {
        const Icon = item.icon;
        const style: CSSProperties = {
          top: item.top,
          left: item.left,
          right: item.right,
          animationDelay: item.delay,
        };
        return (
          <div
            key={i}
            style={style}
            className={`animate-orbit absolute ${item.size} flex items-center justify-center rounded-xl border border-accent/25 bg-primary-foreground/10 text-accent shadow-[0_8px_24px_oklch(0_0_0/25%)] backdrop-blur-md`}
          >
            <Icon className="h-[45%] w-[45%]" />
          </div>
        );
      })}
    </div>
  );
}
