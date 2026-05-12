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
    name: "Postmate",
    stack: "Next.js, Prisma, NextAuth, Groq, Paddle",
    link: "https://postmate.arkocodes.dev",
    blurb: "GitHub-to-social content engine for developers",
    outcome:
      "Turned real GitHub shipping activity into LinkedIn and X drafts with voice-aware generation, publishing, and scheduling flows.",
    challenge:
      "Connected repo sync, commit-level AI generation, voice memory, social publishing, and Pro-gated automation inside one product.",
    bullets: [
      "GitHub OAuth and repo sync pipeline with recent commits, changed files, and patch snippets for richer post context.",
      "Generates LinkedIn and X drafts from single commits, clustered commits, repo showcases, journey arcs, and trend/news inputs.",
      "Includes saved tone preferences and an auto-generated voice fingerprint built from GitHub profile, commit history, and README context.",
      "Supports draft editing, scoring, regeneration, LinkedIn posting, and LinkedIn scheduling from the app dashboard.",
      "Implements Free vs Pro access control with Paddle billing, trial handling, and server-side feature gating.",
    ],
  },
  {
    name: "Learn TCP Proxy, Load Balancer & Rate Limiter",
    stack: "Go, TCP, Observability Dashboard",
    link: "https://edge.arkocodes.dev/",
    blurb: "High-performance TCP proxy + load balancer",
    outcome:
      "Delivered a low-latency TCP proxy with real-time observability and sliding-window rate limiting.",
    challenge:
      "Built round-robin balancing, live metrics, and rate-limited traffic handling at the TCP layer.",
    bullets: [
      "Round-robin load balancing across multiple backend instances for high availability.",
      "Low-latency TCP proxying from port 8080 to the backend pool.",
      "Sliding-window rate limiting (5 reqs / 10s) to protect against bursts.",
      "Real-time observability dashboard with live logs, IP heatmaps, and RPS sparklines.",
      "Integrated tooling to trigger test bursts directly from the dashboard.",
    ],
  },
  {
    name: "OTT Scout",
    stack: "FastAPI, React, Supabase",
    link: "https://www.ottscout.arkocodes.dev/",
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
