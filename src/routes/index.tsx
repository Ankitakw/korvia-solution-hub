import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeIndianRupee,
  BarChart3,
  Bot,
  Briefcase,
  Building2,
  Clock,
  Cloud,
  Code2,
  Globe,
  Handshake,
  Headphones,
  Mail,
  Megaphone,
  MessageCircle,
  Palette,
  Phone,
  Search,
  Share2,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

import heroImage from "@/assets/hero-professionals.jpg";
import teamImage from "@/assets/team-office.jpg";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import {
  CASE_STUDIES,
  CONTACT,
  INDUSTRIES,
  PROBLEMS,
  PROCESS_FLOW,
  SERVICES,
  SOLUTION_TIERS,
  STEPS,
  WHY_KORVIA,
} from "@/data/site";

const TITLE = "Korvia Partners | Business Solutions, Technology, AI & Automation";
const DESCRIPTION =
  "Korvia Partners helps businesses solve problems through technology, software, AI, automation, digital marketing and business solutions. From small businesses to enterprises.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "business solutions, business technology solutions, website development, custom software development, AI solutions, business automation, WhatsApp automation, digital marketing, SEO services, CRM development, business consulting, IT solutions, software development",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Korvia Partners",
          slogan: "Your Problem. Our Solution.",
          description: DESCRIPTION,
          email: CONTACT.email,
          telephone: [`+91${CONTACT.phone1}`, `+91${CONTACT.phone2}`],
          sameAs: [CONTACT.instagram],
          areaServed: "IN",
        }),
      },
    ],
  }),
  component: HomePage,
});

const ICONS: Record<string, LucideIcon> = {
  Globe,
  Code2,
  Smartphone,
  Bot,
  Workflow,
  MessageCircle,
  Users,
  Megaphone,
  Search,
  Target,
  Share2,
  Palette,
  Cloud,
  Wrench,
  Briefcase,
  Building2,
  BarChart3,
  BadgeIndianRupee,
  TrendingUp,
  Zap,
  Headphones,
  Handshake,
};

const HERO_CARDS = [
  { icon: Users, label: "More Customers" },
  { icon: TrendingUp, label: "More Growth" },
  { icon: Clock, label: "Save Time" },
  { icon: Target, label: "Increase Profits" },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  inverted = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  inverted?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`mt-3 text-3xl leading-[1.1] font-extrabold sm:text-4xl lg:text-5xl ${
          inverted ? "text-primary-foreground" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            inverted ? "text-primary-foreground/75" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main id="home">
        {/* HERO */}
        <section className="relative overflow-hidden bg-navy pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "linear-gradient(oklch(1 0 0 / 40%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 40%) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(70% 60% at 30% 20%, black, transparent)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Business Problems. Smarter Solutions.</p>
              <h1 className="mt-4 text-4xl leading-[1.05] font-extrabold text-primary-foreground sm:text-5xl lg:text-6xl">
                Your Problem.
                <br />
                <span className="text-accent">Our Solution.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg font-semibold text-primary-foreground/90 sm:text-xl">
                From Small Businesses to Large Enterprises, We Build. We Grow. We Automate. We
                Scale.
              </p>
              <p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/70">
                Tell us what is slowing your business down. We'll understand the problem, recommend
                the right approach, and build a practical solution that fits your business and
                budget.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-bold text-accent-foreground shadow-accent-glow transition-transform hover:-translate-y-0.5"
                >
                  Tell Us Your Problem <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/25 px-7 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Explore Our Solutions
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-primary-foreground/10 shadow-[var(--shadow-lift)]">
                <img
                  src={heroImage}
                  alt="A small business owner, a doctor, a startup founder and an industrial business owner standing together"
                  width={1200}
                  height={1104}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 lg:absolute lg:-bottom-8 lg:-left-8 lg:mt-0 lg:w-[78%] lg:grid-cols-2">
                {HERO_CARDS.map((card, i) => (
                  <Reveal key={card.label} delay={i * 90}>
                    <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)]">
                      <card.icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                      <span className="truncate text-xs font-bold text-navy sm:text-sm">
                        {card.label}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:mt-24">
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-primary-foreground/12 bg-primary-foreground/[0.04] px-6 py-6 text-center">
              <p className="font-display text-xl font-extrabold text-primary-foreground sm:text-2xl">
                One Partner. <span className="text-accent">All Solutions.</span>
              </p>
              <p className="text-sm text-primary-foreground/65">
                You focus on your business. We handle the technology.
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section id="problems" className="bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="The Real Starting Point"
                title="What's Holding Your Business Back?"
                subtitle="Most businesses don't need a list of services. They need a specific problem solved. Find yours below."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROBLEMS.map((item, i) => (
                <Reveal key={item.problem} delay={i * 60}>
                  <article className="card-premium group h-full p-6">
                    <h3 className="font-display text-lg font-bold text-navy">{item.problem}</h3>
                    <div className="mt-4 flex items-start gap-2 rounded-xl bg-secondary px-4 py-3">
                      <ArrowRight
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold text-navy-2">{item.solution}</span>
                    </div>
                  </article>
                </Reveal>
              ))}
              <Reveal delay={PROBLEMS.length * 60}>
                <a
                  href="#contact"
                  className="surface-navy flex h-full flex-col justify-between rounded-2xl p-6 transition-transform hover:-translate-y-1"
                >
                  <h3 className="font-display text-lg font-bold">
                    Something else slowing you down?
                  </h3>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent">
                    Tell us your problem <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SOLUTION APPROACH */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Our Approach"
                title={
                  <>
                    We Don't Sell One Service.
                    <br />
                    We Build the Right Solution.
                  </>
                }
                subtitle="Every business is different. Instead of forcing your business into a predefined package, Korvia first understands your problem and then recommends the right combination of technology, automation, marketing and business solutions."
              />
            </Reveal>

            <Reveal delay={120}>
              <ol className="mt-14 flex flex-col gap-3 lg:flex-row lg:items-stretch">
                {PROCESS_FLOW.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 lg:flex-1 lg:flex-col">
                    <div
                      className={`flex w-full items-center justify-center rounded-2xl border px-4 py-4 text-center text-sm font-bold ${
                        i === 0
                          ? "border-transparent bg-accent text-accent-foreground"
                          : "border-border bg-card text-navy shadow-[var(--shadow-card)]"
                      }`}
                    >
                      {step}
                    </div>
                    {i < PROCESS_FLOW.length - 1 && (
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 rotate-90 text-accent lg:hidden"
                      />
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* SOLUTIONS BY BUSINESS SIZE */}
        <section id="solutions" className="bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Right-Sized Solutions"
                title="Solutions for Every Business"
                subtitle="The same partner, whether you run a single shop or a multi-location enterprise."
              />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {SOLUTION_TIERS.map((tier, i) => (
                <Reveal key={tier.tier} delay={i * 90} className="h-full">
                  <article
                    className={`flex h-full flex-col rounded-3xl p-8 transition-transform hover:-translate-y-1.5 ${
                      tier.featured
                        ? "surface-navy shadow-[var(--shadow-lift)]"
                        : "border border-border bg-card shadow-[var(--shadow-card)]"
                    }`}
                  >
                    <p className="eyebrow">{tier.tier}</p>
                    <h3
                      className={`mt-3 text-2xl font-extrabold ${
                        tier.featured ? "text-primary-foreground" : "text-navy"
                      }`}
                    >
                      {tier.headline}
                    </h3>
                    <p
                      className={`mt-3 text-sm ${
                        tier.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {tier.blurb}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {tier.items.map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-2.5 text-sm ${
                            tier.featured ? "text-primary-foreground/85" : "text-navy-2"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-bold text-accent-foreground shadow-accent-glow transition-transform hover:-translate-y-0.5"
              >
                Find the Right Solution <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Capabilities"
                title="Everything Your Business Needs"
                subtitle="One team covering technology, software, AI, automation, marketing and consulting."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {SERVICES.map((service, i) => {
                const Icon = ICONS[service.icon] ?? Globe;
                return (
                  <Reveal key={service.title} delay={(i % 4) * 60} className="h-full">
                    <article className="card-premium group flex h-full flex-col p-6">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-navy transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="font-display mt-5 text-base font-bold text-navy">
                        {service.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {service.desc}
                      </p>
                      <a
                        href="#contact"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-accent"
                      >
                        Learn More <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY KORVIA */}
        <section id="why-korvia" className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Why Korvia"
                title="Why Businesses Choose Korvia"
                inverted
                subtitle="Practical technology decisions, delivered by a team that stays accountable after launch."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_KORVIA.map((item, i) => {
                const Icon = ICONS[item.icon] ?? Users;
                return (
                  <Reveal key={item.title} delay={i * 70} className="h-full">
                    <article className="h-full rounded-2xl border border-primary-foreground/12 bg-primary-foreground/[0.04] p-6 transition-colors hover:border-accent/50">
                      <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                      <h3 className="font-display mt-4 text-lg font-bold tracking-wide text-primary-foreground uppercase">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-primary-foreground/70">{item.desc}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section id="how-we-work" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="How We Work"
                title="Simple Process. Powerful Results."
                subtitle="A clear path from your first conversation to long-term growth."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {STEPS.map((step, i) => (
                <Reveal key={step.no} delay={i * 70} className="h-full">
                  <article className="card-premium h-full p-7">
                    <span className="font-display text-4xl font-extrabold text-accent/25">
                      {step.no}
                    </span>
                    <h3 className="font-display mt-2 text-xl font-bold tracking-wide text-navy uppercase">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Industries"
                title="Built for Different Businesses"
                subtitle="We work across industries — these are simply some of the businesses we regularly support."
              />
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {INDUSTRIES.map((industry, i) => (
                <Reveal key={industry} delay={(i % 4) * 50}>
                  <div className="card-premium flex items-center gap-2.5 p-5">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 rounded-full bg-accent"
                    />
                    <span className="text-sm font-bold text-navy">{industry}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={150}>
              <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-extrabold text-navy sm:text-2xl">
                  Don't see your industry? Tell us what you need.
                </h3>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-accent-glow"
                >
                  Start the conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Case Studies"
                title="Problems We've Helped Solve"
                subtitle="Real business situations, and the practical approach we took."
              />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {CASE_STUDIES.map((study, i) => (
                <Reveal key={study.label} delay={i * 90} className="h-full">
                  <article className="card-premium h-full p-8">
                    <p className="eyebrow">{study.label}</p>
                    <h3 className="font-display mt-3 text-2xl font-extrabold text-navy">
                      {study.title}
                    </h3>
                    <dl className="mt-6 space-y-4">
                      {[
                        { term: "Problem", value: study.problem },
                        { term: "Solution", value: study.solution },
                        { term: "Result", value: study.result },
                      ].map((row) => (
                        <div
                          key={row.term}
                          className="rounded-xl border-l-2 border-accent bg-secondary px-4 py-3"
                        >
                          <dt className="text-xs font-bold tracking-[0.16em] text-accent uppercase">
                            {row.term}
                          </dt>
                          <dd className="mt-1 text-sm text-navy-2">{row.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-surface py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="eyebrow">About Korvia</p>
                <h2 className="mt-3 text-3xl leading-[1.1] font-extrabold text-navy sm:text-4xl lg:text-5xl">
                  More Than a Service Provider.
                  <br />
                  <span className="text-accent">Your Business Partner.</span>
                </h2>
                <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                  <p>
                    Korvia Partners was built around a simple idea: businesses shouldn't have to
                    search for five different vendors to solve five different problems.
                  </p>
                  <p>
                    We bring technology, software, AI, automation, marketing and business expertise
                    together under one roof.
                  </p>
                </div>
                <div className="mt-7 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-sm font-bold tracking-[0.16em] text-accent uppercase">
                    Our goal is simple
                  </h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {[
                      "Understand the problem.",
                      "Build the right solution.",
                      "Create measurable value.",
                      "Grow together.",
                    ].map((goal) => (
                      <li key={goal} className="text-sm font-semibold text-navy">
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-lift)]">
                <img
                  src={teamImage}
                  alt="The Korvia Partners team collaborating in a modern office"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FREE CONSULTATION CTA */}
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Reveal>
              <p className="eyebrow">Free Consultation</p>
              <h2 className="mt-3 text-3xl font-extrabold text-primary-foreground sm:text-4xl">
                Have a Business Problem?
              </h2>
              <p className="font-display mt-3 text-4xl leading-tight font-extrabold text-accent sm:text-6xl">
                Let's Find the Solution.
              </p>
              <p className="mx-auto mt-6 max-w-xl text-primary-foreground/75">
                You don't need to know what technology you need. Just tell us what isn't working.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-bold tracking-wide text-accent-foreground uppercase shadow-accent-glow transition-transform hover:-translate-y-0.5"
                >
                  Book a Free Consultation
                </a>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/25 px-8 py-4 text-sm font-bold tracking-wide text-primary-foreground uppercase transition-colors hover:bg-primary-foreground/10"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp Us
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Let's Talk About Your Business"
                subtitle="Share the problem in your own words. We'll take it from there."
              />
            </Reveal>
            <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
              <Reveal>
                <ContactForm />
              </Reveal>
              <Reveal delay={120}>
                <div className="flex h-full flex-col gap-4">
                  {[
                    {
                      icon: Phone,
                      label: "Phone",
                      value: CONTACT.phone1,
                      href: `tel:${CONTACT.phone1}`,
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: CONTACT.phone2,
                      href: `tel:${CONTACT.phone2}`,
                    },
                    {
                      icon: MessageCircle,
                      label: "WhatsApp",
                      value: CONTACT.whatsapp,
                      href: CONTACT.whatsappUrl,
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: CONTACT.email,
                      href: `mailto:${CONTACT.email}`,
                    },
                  ].map((item) => (
                    <a
                      key={item.label + item.value}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="card-premium flex min-w-0 items-center gap-4 p-5"
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
                          {item.label}
                        </span>
                        <span className="block truncate text-sm font-bold text-navy">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  ))}
                  <div className="surface-navy rounded-2xl p-6">
                    <p className="font-display text-lg font-extrabold">
                      You Focus On Your Business.
                    </p>
                    <p className="font-display text-lg font-extrabold text-accent">
                      We Handle The Technology.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading eyebrow="FAQ" title="Questions Businesses Ask Us" />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-12">
                <Faq />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <div className="h-20 lg:hidden" />
      <MobileCtaBar />
    </>
  );
}
