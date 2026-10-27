export const en = {
  meta: {
    title: "Umbral — AI support that answers before it escalates",
    description:
      "Umbral is an AI support desk for small teams: one inbox, answers with sources, clean handoffs and a weekly insight loop.",
    ogAlt: "Umbral — AI support desk",
  },
  common: {
    skip: "Skip to content",
  },
  nav: {
    label: "Main navigation",
    product: "Product",
    how: "How it works",
    channels: "Channels",
    pricing: "Pricing",
    faq: "FAQ",
    notes: "Notes",
    login: "Log in",
    cta: "Start free",
    language: "Language",
  },
  hero: {
    eyebrow: "AI support desk",
    title: {
      lead: "Answer every customer",
      emphasis: "before the queue does.",
    },
    subtitle:
      "Umbral reads your help center, drafts the reply with the source attached, and only pulls a teammate in when a human is genuinely needed.",
    primary: "Start free trial",
    secondary: "See how it works",
    note: "14 days · no card · cancel anytime",
    proofLabel: "Support teams at",
    proof: ["Halden", "Mira Labs", "Tessil", "Argo Freight", "Lumen Health"],
    imageAlt:
      "Abstract close-up of folded dark paper with a warm copper edge of light",
    stats: [
      { value: "62%", label: "of tickets closed without a human" },
      { value: "18s", label: "median first response" },
      { value: "4.8/5", label: "satisfaction after a handoff" },
    ],
  },
  features: {
    eyebrow: "Product",
    title: {
      lead: "A desk that keeps working",
      emphasis: "after you log off.",
    },
    subtitle:
      "Four moving parts, one inbox. No extra tab to babysit and no second place to look for context.",
    items: [
      {
        title: "One inbox, every channel",
        body: "Email, web chat and in-app messages land in a single timeline, grouped by customer instead of by tool.",
        points: [
          "Duplicate threads merged automatically",
          "Shared notes and mentions per customer",
          "Response targets set per plan",
        ],
      },
      {
        title: "Answers with receipts",
        body: "The assistant drafts from your own articles and past resolutions, and links the source under every claim.",
        points: [
          "Inline citations to help-center docs",
          "Stops and asks when confidence drops",
          "Drafts stay editable, never silent sends",
        ],
      },
      {
        title: "Handoffs that keep context",
        body: "When a person takes over, they inherit the summary, the history and the suggested next step.",
        points: [
          "Claim a conversation in one click",
          "Summary written in the customer's language",
          "Nobody re-asks for the order number",
        ],
      },
      {
        title: "A weekly insight loop",
        body: "Unanswered questions become article drafts, so the same gap does not cost you twice.",
        points: [
          "Gap report every Monday",
          "Questions clustered by topic",
          "Drafts ready for a human edit",
        ],
      },
    ],
    panel: {
      title: "Inbox",
      meta: "5 open · sorted by waiting time",
      rows: [
        {
          initials: "NR",
          name: "Nadia Ruiz",
          question: "Can I move my plan to annual billing?",
          tag: "Drafted",
          tone: "draft",
        },
        {
          initials: "OP",
          name: "Owen Pike",
          question: "The export is missing two invoices.",
          tag: "Needs review",
          tone: "review",
        },
        {
          initials: "SM",
          name: "Sofia Marchetti",
          question: "How do I add a second workspace?",
          tag: "Resolved",
          tone: "resolved",
        },
        {
          initials: "TL",
          name: "Theo Lindqvist",
          question: "Is there a limit on saved replies?",
          tag: "Resolved",
          tone: "resolved",
        },
      ],
      footnote: "Every draft keeps its source link.",
    },
  },
  how: {
    eyebrow: "How it works",
    title: {
      lead: "Three steps,",
      emphasis: "one afternoon.",
    },
    subtitle:
      "Most teams answer their first real ticket the same day. No migration weekend, no new help center.",
    steps: [
      {
        label: "01",
        title: "Connect",
        body: "Point Umbral at your help center and the inbox you already use. Import historical resolutions so it starts with context.",
      },
      {
        label: "02",
        title: "Teach",
        body: "Review the first drafts and correct what is off. Pin the answers you never want rewritten; each correction becomes a rule.",
      },
      {
        label: "03",
        title: "Resolve",
        body: "Umbral answers, cites and hands over when it is unsure. You watch the deflection rate climb from the dashboard.",
      },
    ],
    note: "A demo build: the connections and metrics below are illustrative.",
  },
  channels: {
    eyebrow: "Channels",
    title: {
      lead: "Connects to what you",
      emphasis: "already opened this morning.",
    },
    subtitle:
      "Read and write access is scoped per connection, and every action the assistant takes is logged.",
    groups: [
      {
        title: "Conversation",
        items: ["Email inbox", "Web chat", "In-app messages", "Call transcripts"],
      },
      {
        title: "Knowledge",
        items: ["Help center", "Internal docs", "Saved replies", "Past resolutions"],
      },
      {
        title: "Operations",
        items: ["CRM records", "Billing events", "Webhooks", "Status updates"],
      },
      {
        title: "Reporting",
        items: ["Weekly digest", "Deflection report", "CSV export", "Read-only API"],
      },
    ],
    note: "Illustrative connections. This demo ships without a backend.",
  },
  pricing: {
    eyebrow: "Pricing",
    title: {
      lead: "Priced per seat,",
      emphasis: "not per miracle.",
    },
    subtitle:
      "Every plan includes the assistant, the citations and the weekly report. Annual billing saves two months.",
    period: "/mo per seat",
    badge: "Most chosen",
    custom: "Custom",
    plans: [
      {
        name: "Base",
        price: 39,
        blurb: "For a founder answering tickets alone.",
        features: [
          "One inbox, three channels",
          "500 AI resolutions a month",
          "Citations and editable drafts",
          "Email support",
        ],
        cta: "Start free",
        featured: false,
      },
      {
        name: "Team",
        price: 99,
        blurb: "For a support team of two to ten.",
        features: [
          "Unlimited channels",
          "5,000 AI resolutions a month",
          "Handoff summaries",
          "Gap report and article drafts",
          "Priority support",
        ],
        cta: "Start free",
        featured: true,
      },
      {
        name: "Scale",
        price: null,
        blurb: "For regulated teams and custom routing.",
        features: [
          "SSO and audit log",
          "Custom routing rules",
          "Dedicated onboarding",
          "Data residency options",
        ],
        cta: "Talk to us",
        featured: false,
      },
    ],
    footnote:
      "Prices in US dollars. This is a demo: checkout is not implemented and no card is charged.",
  },
  faq: {
    eyebrow: "FAQ",
    title: {
      lead: "What teams ask",
      emphasis: "before they start.",
    },
    subtitle: "Straight answers, including what this demo does not do.",
    items: [
      {
        q: "Is there a free trial?",
        a: "Yes. Every plan starts with 14 days of the full assistant. This demo does not collect a card or create an account.",
      },
      {
        q: "How long does setup take?",
        a: "One afternoon for a single help center. Importing older resolutions takes longer only when the docs are scattered.",
      },
      {
        q: "Does it replace my help desk?",
        a: "No. Umbral sits next to the inbox you already use and takes the first reply. A person still closes the hard cases.",
      },
      {
        q: "What happens when it is unsure?",
        a: "It stops drafting, writes a short summary for the next teammate and marks the conversation for review.",
      },
      {
        q: "Can I see where an answer came from?",
        a: "Every draft keeps the article or past resolution it was built from, with a link the customer can open.",
      },
      {
        q: "Which languages are supported?",
        a: "The interface is English and Spanish. The assistant replies in the language the customer writes in.",
      },
      {
        q: "Is my data used for training?",
        a: "Not in this build. There is no backend, no inbox connection and no model call: the page is a front-end demo.",
      },
      {
        q: "Can I cancel at any time?",
        a: "Yes, from billing. Nothing is charged here because checkout is not implemented.",
      },
    ],
    more: {
      title: "Still unsure?",
      body: "Send the question and we will answer with a real reply, not a canned one.",
      cta: "hola@umbral.example",
    },
  },
  resources: {
    eyebrow: "Notes",
    title: {
      lead: "Notes from",
      emphasis: "the desk.",
    },
    subtitle: "Short reads on deflection, handoffs and answers people trust.",
    items: [
      {
        tag: "Operations",
        title: "The three tickets worth deflecting first",
        excerpt:
          "Not every conversation should be automated. A simple filter for deciding where the assistant earns its place.",
        readTime: "6 min read",
        date: "Oct 2026",
      },
      {
        tag: "Writing",
        title: "Answers with receipts: citations as a trust signal",
        excerpt:
          "Why putting the source under an AI reply changes how customers read the whole message.",
        readTime: "5 min read",
        date: "Sep 2026",
      },
      {
        tag: "Metrics",
        title: "Deflection is not the only number that matters",
        excerpt:
          "Three counters to read next to the resolution rate, and the one that predicts churn.",
        readTime: "7 min read",
        date: "Sep 2026",
      },
    ],
  },
  cta: {
    title: {
      lead: "Give your queue a quieter",
      emphasis: "Monday.",
    },
    body: "Start with the free trial and keep the inbox you already have. Nothing to migrate, nothing to unlearn.",
    primary: "Start free trial",
    note: "Demo build: no account is created.",
  },
  footer: {
    blurb:
      "Umbral is a fictional AI support desk, built as a bilingual front-end demo with Next.js and Tailwind CSS.",
    navTitle: "Sections",
    contactTitle: "Contact",
    contact: "hola@umbral.example",
    legal: "A fictional product. No real inbox, billing or customer data.",
  },
  notFound: {
    title: "This page left the queue.",
    body: "The link is broken or the page moved. The rest of the desk is still open.",
    back: "Back to home",
  },
};

export type Dictionary = typeof en;
