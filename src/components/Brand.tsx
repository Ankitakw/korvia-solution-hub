import logo from "@/assets/korvia-logo.jpg.asset.json";

export function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <img
        src={logo.url}
        alt="Korvia Partners logo"
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 rounded-lg object-cover"
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-display truncate text-base font-extrabold tracking-tight sm:text-lg ${
            inverted ? "text-primary-foreground" : "text-navy"
          }`}
        >
          KORVIA
        </span>
        <span className="text-[0.6rem] font-semibold tracking-[0.28em] text-accent">
          PARTNERS
        </span>
      </span>
    </span>
  );
}
