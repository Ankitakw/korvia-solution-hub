export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="animate-gradient-shift absolute inset-0 opacity-80" />

      {/* Grid overlay */}
      <div
        className="animate-grid-drift absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 60%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 60%) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating 3D orbs */}
      <div className="orb orb-1 animate-float-slow absolute top-[8%] left-[5%] h-64 w-64 rounded-full bg-accent/25 blur-[80px]" />
      <div className="orb orb-2 animate-float-medium absolute top-[20%] right-[8%] h-80 w-80 rounded-full bg-[oklch(0.55_0.15_280/20%)] blur-[90px]" />
      <div className="orb orb-3 animate-float-fast absolute bottom-[15%] left-[30%] h-56 w-56 rounded-full bg-accent-2/20 blur-[70px]" />

      {/* 3D geometric shapes */}
      <div className="animate-spin-slow absolute top-[18%] right-[18%] h-24 w-24 rounded-2xl border border-accent/20 bg-accent/5 backdrop-blur-sm [transform:rotateX(45deg)_rotateZ(30deg)]" />
      <div className="animate-spin-reverse absolute bottom-[28%] left-[8%] h-16 w-16 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm" />
      <div className="animate-float-medium absolute top-[55%] right-[5%] h-20 w-20 rotate-45 border border-accent/15 bg-gradient-to-br from-accent/10 to-transparent backdrop-blur-sm" />

      {/* Particle dots */}
      {[
        { top: "12%", left: "42%", delay: "0s" },
        { top: "35%", left: "78%", delay: "1.2s" },
        { top: "68%", left: "15%", delay: "0.6s" },
        { top: "82%", left: "55%", delay: "1.8s" },
        { top: "45%", left: "92%", delay: "0.3s" },
      ].map((p, i) => (
        <span
          key={i}
          className="animate-particle absolute h-1.5 w-1.5 rounded-full bg-accent/60 shadow-[0_0_12px_oklch(0.72_0.185_52/80%)]"
          style={{ top: p.top, left: p.left, animationDelay: p.delay }}
        />
      ))}
    </div>
  );
}
