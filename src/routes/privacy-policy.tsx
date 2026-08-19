import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Korvia Partners" },
      {
        name: "description",
        content:
          "How Korvia Partners collects, uses and protects the information you share through our website and consultation enquiries.",
      },
      { property: "og:title", content: "Privacy Policy | Korvia Partners" },
      {
        property: "og:description",
        content: "How Korvia Partners handles and protects your business enquiry information.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" sections={sections} />;
}

const sections = [
  {
    heading: "Information We Collect",
    body: "When you submit a consultation enquiry we collect the details you provide: your name, business name, phone number, email address, business type, budget range and the description of the problem you want solved.",
  },
  {
    heading: "How We Use It",
    body: "We use your information only to understand your requirement, respond to your enquiry, and propose a suitable solution. We do not sell your information to third parties.",
  },
  {
    heading: "Communication",
    body: "We contact you using the method you select — phone, WhatsApp or email. You can ask us to stop contacting you at any time.",
  },
  {
    heading: "Data Retention",
    body: "Enquiry details are retained only as long as needed to serve your requirement and meet legitimate business or legal obligations.",
  },
  {
    heading: "Contact",
    body: "For any question about this policy, or to request removal of your data, write to korviapartners@gmail.com.",
  },
];

export function LegalPage({
  title,
  sections: items,
}: {
  title: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <main className="min-h-screen bg-surface px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="text-sm font-semibold text-accent">
          ← Back to Korvia Partners
        </Link>
        <h1 className="font-display mt-6 text-4xl font-extrabold text-navy sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: January 2026</p>
        <div className="mt-10 space-y-8">
          {items.map((item) => (
            <section key={item.heading}>
              <h2 className="font-display text-xl font-bold text-navy">{item.heading}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
