export const coreSkills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Go",
  "FastAPI",
];

export const workingSkills = [
  "JavaScript",
  "Python",
  "PHP",
  "React Native",
  "Tailwind CSS",
  "REST APIs",
  "Supabase",
  "pgvector",
  "Concurrency",
  "Distributed Systems",
  "Caching",
  "API Optimization",
  "Git",
  "Linux",
  "Jest",
  "Cypress",
  "Stripe",
  "PayPal",
  "Observability",
  "Logging",
];

export const experience = [
  {
    role: "Software Engineer",
    company: "rtCamp",
    location: "Remote",
    period: "2024 - Present",
    bullets: [
      "Architected and deployed a decoupled checkout system using React and TypeScript, integrating WooCommerce APIs and custom backend services.",
      "Migrated legacy WordPress checkout to a modern React architecture, improving checkout load performance by ~6x.",
      "Built a concurrent image processing service in Go, replacing a PHP pipeline and improving throughput by ~12x.",
      "Reduced API calls by 25-35% through request optimization and improved backend response design.",
      "Diagnosed and resolved production issues across payments, cart synchronization, and API failures, improving system reliability.",
      "Collaborated directly with clients to gather requirements and deliver production-ready features aligned with business goals.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-employed",
    location: "Remote",
    period: "2022 - Present",
    bullets: [
      "Delivered multiple end-to-end web and mobile applications using React Native, Next.js, and Shopify, deployed on AWS.",
      "Owned the full development lifecycle from requirement gathering to deployment, working directly with clients.",
      "Translated ambiguous client requirements into structured technical solutions, reducing back-and-forth and speeding up delivery.",
      "Built production-ready systems supporting real business workflows and customer interactions.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "ScopeX",
    location: "Remote",
    period: "2022 - 2024",
    bullets: [
      "Engineered a cross-platform mobile application using React Native, contributing to core architecture and feature design for production use.",
      "Built and shipped fintech modules including onboarding, KYC workflows, and real-time dashboards using React and Node.js.",
      "Diagnosed and resolved 25+ production issues across APIs, state management, and UI flows, significantly improving system stability.",
      "Collaborated in a fast-paced startup environment, working across the stack to deliver features under tight deadlines.",
    ],
  },
];

export const projects = [
  {
    name: "OTT Scout",
    stack: "FastAPI, React, Supabase",
    link: "https://ottscout.vercel.app",
    blurb: "Streaming Discovery Platform",
    outcome:
      "Improved discovery quality with semantic search plus a ranking + evaluation pipeline.",
    challenge:
      "Hybrid recommendation using vector search, collaborative filtering, and pgvector.",
    bullets: [
      "Built a hybrid recommendation system combining vector search, collaborative filtering, and ranking logic.",
      "Developed semantic search for intent-based content discovery using pgvector embeddings.",
      "Implemented subscription-aware filtering to ensure recommendations are immediately actionable.",
      "Designed an evaluation pipeline to improve recommendation quality and reduce irrelevant results.",
      "Integrated analytics to monitor latency, cache performance, and system health.",
    ],
  },
];
