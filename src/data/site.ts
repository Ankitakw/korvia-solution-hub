export const SITE = {
  name: "Korvia Partners",
  tagline: "Your Problem. Our Solution.",
  url: (import.meta.env["VITE_SITE_URL"] as string | undefined) || "https://korviapartners.vercel.app",
  ogImagePath: "/og-image.png",
};

export const SITE_OG_IMAGE = `${SITE.url}${SITE.ogImagePath}`;

export const CONTACT = {
  phone1: "8055292935",
  phone2: "9146695836",
  whatsapp: "9552082172",
  whatsappUrl: "https://wa.me/919552082172",
  email: "korviapartners@gmail.com",
  instagram: "https://www.instagram.com/korviapartners/",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "About", href: "#about" },
  { label: "Why Korvia", href: "#why-korvia" },
  { label: "Contact", href: "#contact" },
];

export const PROBLEMS = [
  { problem: "Customers can't find you online.", solution: "Website + SEO + Google Business" },
  { problem: "Too much manual work.", solution: "Automation + AI" },
  { problem: "Customers don't respond quickly.", solution: "WhatsApp Automation + Chatbots" },
  { problem: "You're losing leads.", solution: "Lead Generation + CRM" },
  { problem: "Your business data is scattered.", solution: "Custom Software + Dashboards" },
  {
    problem: "Your current software doesn't fit your business.",
    solution: "Custom Business Software",
  },
  { problem: "Marketing isn't delivering results.", solution: "Digital Marketing + Performance Ads" },
];

export const PROCESS_FLOW = [
  "Your Problem",
  "Understand",
  "Plan",
  "Build",
  "Launch",
  "Support",
  "Grow",
];

export const SOLUTION_TIERS = [
  {
    tier: "Small Business",
    headline: "Start Smart",
    blurb: "Get found, get enquiries, and look credible from day one.",
    items: [
      "Professional Website",
      "Google Business Profile",
      "Local SEO",
      "WhatsApp Business",
      "Digital Marketing",
      "Lead Generation",
      "Online Presence",
    ],
  },
  {
    tier: "Growing Business",
    headline: "Scale Fast",
    blurb: "Remove bottlenecks and build systems that grow with you.",
    items: [
      "Custom Software",
      "CRM",
      "Business Automation",
      "AI Solutions",
      "Analytics",
      "Digital Marketing",
      "Cloud Integration",
    ],
    featured: true,
  },
  {
    tier: "Enterprise",
    headline: "Build for Scale",
    blurb: "Integrated platforms, governance and long-term support.",
    items: [
      "Enterprise Software",
      "Custom Integrations",
      "AI & Automation",
      "Cloud Solutions",
      "Data & Analytics",
      "IT Support",
      "Business Consulting",
    ],
  },
];

export const SERVICES = [
  { icon: "Globe", title: "Website Development", desc: "Business websites, landing pages and web portals." },
  { icon: "Code2", title: "Custom Software", desc: "Software designed around your actual business workflow." },
  { icon: "Smartphone", title: "Mobile Applications", desc: "Android, iOS and cross-platform applications." },
  { icon: "Bot", title: "AI Solutions", desc: "AI assistants, intelligent workflows and AI-powered business tools." },
  { icon: "Workflow", title: "Business Automation", desc: "Automate repetitive processes and reduce manual work." },
  { icon: "MessageCircle", title: "WhatsApp Automation", desc: "Automated customer communication, notifications and lead handling." },
  { icon: "Users", title: "CRM Development", desc: "Customer management, lead tracking and sales workflows." },
  { icon: "Megaphone", title: "Digital Marketing", desc: "Social media, content and digital growth strategies." },
  { icon: "Search", title: "SEO & Google Ranking", desc: "Improve online visibility and local search presence." },
  { icon: "Target", title: "Google Ads", desc: "Performance-focused paid advertising." },
  { icon: "Share2", title: "Facebook & Instagram Ads", desc: "Lead generation and customer acquisition." },
  { icon: "Palette", title: "Branding", desc: "Professional digital identity and brand presence." },
  { icon: "Cloud", title: "Cloud Solutions", desc: "Cloud deployment, integration and infrastructure." },
  { icon: "Wrench", title: "IT Support & Maintenance", desc: "Reliable ongoing technical support." },
  { icon: "Briefcase", title: "Business Consulting", desc: "Technology and digital strategy based on actual business needs." },
  { icon: "Building2", title: "ERP / Business Systems", desc: "Integrated systems for business operations." },
  { icon: "BarChart3", title: "Data Analytics", desc: "Dashboards, reports and business insights." },
] as const;

export const WHY_KORVIA = [
  { icon: "Users", title: "One Team", desc: "Everything under one roof." },
  { icon: "BadgeIndianRupee", title: "Affordable", desc: "Enterprise-quality solutions at practical prices." },
  { icon: "TrendingUp", title: "Result Driven", desc: "Focused on business outcomes, not just deliverables." },
  { icon: "Zap", title: "Faster Delivery", desc: "We value your time." },
  { icon: "Headphones", title: "Dedicated Support", desc: "We stay with you after launch." },
  { icon: "Handshake", title: "Long-Term Partner", desc: "Not just projects. Relationships." },
] as const;

export const STEPS = [
  { no: "01", title: "Listen", desc: "We understand your business and the actual problem." },
  { no: "02", title: "Analyze", desc: "We identify the best solution based on your goals and budget." },
  { no: "03", title: "Plan", desc: "We create a clear roadmap before development begins." },
  { no: "04", title: "Build", desc: "We design, develop and implement the solution." },
  { no: "05", title: "Launch", desc: "We test, deploy and help you get started." },
  { no: "06", title: "Grow", desc: "We provide support, improvements and ongoing optimization." },
];

export const INDUSTRIES = [
  "Retail",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Hospitality",
  "Professional Services",
  "Real Estate",
  "Startups",
  "Logistics",
  "Local Businesses",
  "Financial Services",
  "Other Enterprises",
];

export const CASE_STUDIES = [
  {
    label: "Case Study 01",
    title: "Local Business Growth",
    problem: "No online presence and very few enquiries.",
    solution: "Website + Google Business + Local SEO + WhatsApp.",
    result: "Better online visibility and easier customer enquiries.",
  },
  {
    label: "Case Study 02",
    title: "Manual Business Process",
    problem: "Employees spending hours on repetitive tasks.",
    solution: "Custom software + automation.",
    result: "Reduced manual effort and faster operations.",
  },
];

export const FAQS = [
  {
    q: "I don't know what technology I need. Can you still help?",
    a: "Yes. That is exactly how most of our engagements start. You describe the business problem, and we recommend the practical approach — technology, automation, marketing or a combination.",
  },
  {
    q: "Do you work with small businesses as well as large companies?",
    a: "We work with local shops, growing businesses, startups, SMEs, manufacturers, professional services and enterprises. The scope changes; the approach stays the same.",
  },
  {
    q: "How is pricing decided?",
    a: "Pricing depends on the scope of the solution. After we understand the problem, we propose an approach that fits your business and budget before any work begins.",
  },
  {
    q: "What happens after launch?",
    a: "We stay involved with support, maintenance, improvements and ongoing optimization so the solution keeps delivering value.",
  },
  {
    q: "Can you work alongside our existing team or vendors?",
    a: "Yes. We can integrate with your current systems and collaborate with in-house teams or existing partners.",
  },
];

export const BUSINESS_TYPES = [
  "Local / Small Business",
  "Growing Business",
  "Startup",
  "SME",
  "Manufacturing",
  "Professional Services",
  "Large Enterprise",
  "Other",
];

export const BUDGET_RANGES = [
  "Not sure yet",
  "Under ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹10,00,000",
  "₹10,00,000+",
];

export const CONTACT_METHODS = ["Phone Call", "WhatsApp", "Email"];
