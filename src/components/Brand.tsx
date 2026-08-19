import logoLight from "@/assets/korvia-logo-1.jpeg";

export function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span
        className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl transition-all duration-300 ${
          inverted
            ? "bg-white p-1 shadow-[0_8px_32px_oklch(0_0_0/35%),0_0_0_2px_oklch(0.72_0.185_52/50%)] ring-2 ring-accent/60"
            : "bg-white p-1 shadow-md ring-1 ring-border"
        }`}
      >
        {inverted && (
          <span
            aria-hidden="true"
            className="absolute -inset-1 animate-pulse-glow rounded-xl bg-accent/20 blur-md"
          />
        )}
        <img
          src={logoLight}
          alt="Korvia Partners logo"
          width={48}
          height={48}
          className="relative h-full w-full rounded-lg object-contain"
        />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-display truncate text-base font-extrabold tracking-tight sm:text-lg ${
            inverted ? "text-white drop-shadow-sm" : "text-navy"
          }`}
        >
          KORVIA
        </span>
        <span className="text-[0.58rem] font-bold tracking-[0.32em] text-accent">PARTNERS</span>
      </span>
    </span>
  );
}
