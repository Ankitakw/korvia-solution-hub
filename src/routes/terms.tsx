import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "./privacy-policy";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Korvia Partners" },
      {
        name: "description",
        content:
          "The terms that apply to the use of the Korvia Partners website and to business solution engagements.",
      },
      { property: "og:title", content: "Terms & Conditions | Korvia Partners" },
      {
        property: "og:description",
        content: "Terms that apply to Korvia Partners website use and client engagements.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    heading: "Website Use",
    body: "The content on this website is provided for general information about Korvia Partners services. It does not form a binding offer or guarantee of a specific outcome.",
  },
  {
    heading: "Engagements & Proposals",
    body: "Every engagement begins with an understanding of your requirement, followed by a written proposal covering scope, timeline and commercials. Work starts only after that proposal is accepted.",
  },
  {
    heading: "Deliverables & Ownership",
    body: "Unless agreed otherwise in writing, ownership of delivered custom work transfers to the client on completion of the agreed payments. Third-party licences and subscriptions remain governed by their respective providers.",
  },
  {
    heading: "Support",
    body: "Post-launch support, maintenance and improvement terms are defined per engagement in the accepted proposal.",
  },
  {
    heading: "Contact",
    body: "Questions about these terms can be sent to korviapartners@gmail.com.",
  },
];

function TermsPage() {
  return <LegalPage title="Terms & Conditions" sections={sections} />;
}
