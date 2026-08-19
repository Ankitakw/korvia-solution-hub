import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { Brand } from "./Brand";
import { CONTACT } from "@/data/site";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Why Korvia", href: "#why-korvia" },
      { label: "How We Work", href: "#how-we-work" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "Software", href: "#services" },
      { label: "AI", href: "#services" },
      { label: "Automation", href: "#services" },
      { label: "Marketing", href: "#services" },
      { label: "Consulting", href: "#services" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "SEO", href: "#services" },
      { label: "Digital Marketing", href: "#services" },
      { label: "CRM", href: "#services" },
      { label: "Cloud", href: "#services" },
      { label: "Analytics", href: "#services" },
      { label: "IT Support", href: "#services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="surface-navy relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-80 w-80 rounded-full bg-accent/8 blur-[100px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(4,minmax(0,1fr))]">
          <div className="max-w-sm">
            <Brand inverted />
            <p className="mt-5 text-lg font-semibold text-primary-foreground">
              Your Problem. <span className="text-accent">Our Solution.</span>
            </p>
            <p className="mt-3 text-sm text-primary-foreground/70">
              You focus on your business. We handle the technology.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold tracking-[0.18em] text-accent uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={col.title + link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/75 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-bold tracking-[0.18em] text-accent uppercase">Connect</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" /> Email
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone1}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> {CONTACT.phone1}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-primary-foreground/60">
            © 2026 Korvia Partners. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/70">
            <Link to="/privacy-policy" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-accent">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
