export type Project = {
  name: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  repo?: string;
  language: string;
  featured?: boolean;
};

export type Category = {
  id: string;
  label: string;
  blurb: string;
  projects: Project[];
};

export const GITHUB = "https://github.com/brathod1432";
export const LINKEDIN = "https://www.linkedin.com/in/rbrijesh07/";
export const EMAIL = "bgrathod00@gmail.com";
export const SITE_URL = "https://brathod1432.github.io";

// Two CV variants are published. The short one is the default download; the
// detailed one is offered alongside it everywhere the CV is linked.
export const CV_SHORT_PATH = "/brijesh_rathod.pdf";
export const CV_DETAILED_PATH = "/brijesh_rathod_202608_Detailed.pdf";

export type CvVariant = {
  href: string;
  label: string;
  /** Used for the download filename and the accessible label. */
  fileName: string;
  description: string;
};

export const cvVariants: CvVariant[] = [
  {
    href: CV_SHORT_PATH,
    label: "Download CV",
    fileName: "brijesh-rathod-cv.pdf",
    description: "Short CV (PDF)",
  },
  {
    href: CV_DETAILED_PATH,
    label: "Detailed",
    fileName: "brijesh-rathod-cv-detailed.pdf",
    description: "Detailed CV (PDF)",
  },
];

export const siteConfig = {
  name: "Brijesh Rathod",
  url: SITE_URL,
  // Paste your free Web3Forms access key (get one in ~30s at https://web3forms.com,
  // no signup — just verify your email). Until set, the contact form gracefully
  // falls back to email + LinkedIn buttons.
  web3formsKey: "",
  // Set to your verified domain to enable cookieless, GDPR-friendly Plausible
  // analytics (e.g. "brathod1432.github.io"). Empty = analytics disabled.
  plausibleDomain: "",
};

export const metrics: { value: string; label: string }[] = [
  { value: "10+", label: "Businesses supported" },
  { value: "6+ yrs", label: "Quality & automation engineering" },
  { value: "48", label: "Agent runbooks in one open-source library" },
  { value: "1,016", label: "Tests passing in that runbook library" },
  { value: "396", label: "Automated tests in the robotics design toolkit" },
  { value: "1,050+", label: "Reusable AI assets indexed" },
];

export type CaseStudy = {
  title: string;
  context: string;
  problem: string;
  approach: string[];
  result: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Cutting enterprise regression from ~4 weeks to 5 days",
    context: "Dell Technologies · Enterprise storage QA",
    problem:
      "Full regression across Linux, VMware ESXi, storage, and networking took roughly four weeks — a bottleneck that slowed every release and delayed feedback to engineering.",
    approach: [
      "Designed a test-orchestration framework that auto-selects sanity / regression / full coverage by software version, release type, and technical risk",
      "Built Jenkins + Groovy CI/CD so GitHub changes trigger standardized validation pipelines",
      "Added parallel, infrastructure-aware scheduling and qTest-synced reporting for live release visibility",
    ],
    result:
      "End-to-end regression dropped from ~4 weeks to ~5 working days, with reliable release-readiness reporting and far faster feedback to engineering.",
    tags: ["Python", "Jenkins/Groovy", "CI/CD", "Test Orchestration"],
  },
];

// Anonymized freelance / client engagements. Client names are withheld
// deliberately — each entry describes the type of work delivered, not a
// named account. Keep these factual: no invented figures or outcomes.
export type ClientEngagement = {
  sector: string;
  engagement: string;
  summary: string;
  tags: string[];
};

export const clientWork: ClientEngagement[] = [
  {
    sector: "Game studios",
    engagement: "Pre-release QA",
    summary:
      "Functional, exploratory and regression passes across pre-release builds — covering core gameplay flows, interface behaviour and edge cases, with every defect written up to be reproducible: exact steps, expected vs. actual behaviour and supporting evidence.",
    tags: ["Functional QA", "Exploratory Testing", "Defect Reporting"],
  },
  {
    sector: "Web application teams",
    engagement: "UI & user-flow validation",
    summary:
      "End-to-end validation of web application journeys — sign-up, navigation, forms and error states — checking interface behaviour against intent across browsers, and reporting issues in a form engineering could act on without a follow-up call.",
    tags: ["Web Testing", "User Flows", "Cross-Browser"],
  },
  {
    sector: "Small business & product sites",
    engagement: "Usability & quality review",
    summary:
      "Structured usability and product-quality reviews of live sites and web UIs, surfacing broken flows, confusing interactions and interface inconsistencies, prioritised so the highest-impact fixes could ship first.",
    tags: ["Usability", "UI Review", "Quality Audit"],
  },
];

// Real quotes only. Add entries here as clients and colleagues provide them
// (Fiverr reviews, email replies, LinkedIn recommendations) — quote them
// verbatim and attribute them accurately. The section stays hidden while this
// array is empty, so the site never shows placeholder or invented praise.
export type Testimonial = { quote: string; name: string; role: string };
export const testimonials: Testimonial[] = [];

export const categories: Category[] = [
  {
    id: "ai",
    label: "AI & LLM Engineering",
    blurb:
      "Production-minded tooling for building, evaluating, securing, and serving LLM systems.",
    projects: [
      {
        name: "GroundedAI",
        title: "GroundedAI",
        tagline: "Grounded verification for LLM outputs",
        description:
          "A local-first suite for trustworthy LLMs: measure hallucination behaviour, extract claims and retrieve evidence over an API, shield prompts from PII and injection, then auto-correct hallucinated answers.",
        highlights: [
          "truthbench: hallucination-verification evaluation toolkit",
          "truthguard-ai: FastAPI claim extraction + evidence retrieval",
          "prompt-shield: PII scrubbing & prompt-injection detection",
          "auto-grounder: automated remediation pipeline",
        ],
        tech: ["Python", "FastAPI", "RAG", "AI Safety"],
        repo: "GroundedAI",
        language: "Python",
        featured: true,
      },
      {
        name: "agent-eval-optimizer",
        title: "Agent Eval Optimizer",
        tagline: "Make LLM agents measurable and optimizable",
        description:
          "An evaluation-driven optimization framework that adds the missing quality layer to LLM agents: trajectory scoring, prompt comparison, regression gates, and CI-ready reports — without requiring any paid API.",
        highlights: [
          "YAML-defined task suites with expected behaviour",
          "Trajectory scoring & hallucinated tool-call detection",
          "Prompt A/B comparison and latency regression gates",
          "CI-ready quality reports (no live LLM needed)",
        ],
        tech: ["Python", "Evaluation", "Prompt Eng", "CI/CD"],
        repo: "agent-eval-optimizer",
        language: "Python",
        featured: true,
      },
      {
        name: "NvidiaModelBridge",
        title: "Nvidia Model Bridge",
        tagline: "Production FastAPI gateway for NVIDIA models",
        description:
          "An OpenAI-compatible gateway for NVIDIA-hosted models with intelligent task-based routing, multi-level fallback, caching, circuit breakers, rate limiting, and full Prometheus observability.",
        highlights: [
          "Task-aware routing with automatic failover",
          "Token-bucket rate limiting & API-key auth",
          "Circuit breakers, TTL caching, async job queue",
          "Prometheus metrics + analytics dashboard",
        ],
        tech: ["Python", "FastAPI", "Observability", "OpenAI API"],
        repo: "NvidiaModelBridge",
        language: "Python",
        featured: true,
      },
    ],
  },
  {
    id: "agents",
    label: "AI Agents & Operations",
    blurb:
      "Runbooks, playbooks, skills, and orchestration that make autonomous agents operable, governed, and repeatable.",
    projects: [
      {
        name: "ai-runbooks",
        title: "awesome-ai-runbooks",
        tagline: "Operational runbooks for autonomous AI agents",
        description:
          "An open-source library of vendor-neutral operational runbooks for autonomous AI agents — SRE-style discipline applied to agents, with every runbook written as a complete operational contract: objective, context, validation, and reporting.",
        highlights: [
          "48 runbooks with a quality-scored validation framework",
          "1,016 automated tests keep the library honest",
          "Vendor-neutral: Devin, AutoGen, LangGraph, MCP-enabled agents and more",
          "Governance, security scoring, and enterprise-readiness reporting built in",
        ],
        tech: ["AI Agents", "Runbooks", "MCP", "Validation"],
        repo: "ai-runbooks",
        language: "Markdown",
        featured: true,
      },
      {
        name: "ai-agent-playbooks",
        title: "AI Agent Playbooks",
        tagline: "Evidence-first playbooks for coding agents",
        description:
          "Named, repeatable procedures that AI coding agents follow to solve real engineering problems — evidence-first, verification-mandatory, and safe by default, so the same request gets the same quality of investigation every run.",
        highlights: [
          "11 playbooks, each with per-agent instructions",
          "Works with Claude Code, Devin, Cursor, OpenAI Codex, and Gemini CLI",
          "Every fix proven against a baseline; rollback and escalation defined",
          "Validated in CI against a published playbook standard (v1.0)",
        ],
        tech: ["AI Agents", "Playbooks", "Developer Tools", "CI/CD"],
        repo: "ai-agent-playbooks",
        language: "Markdown",
      },
      {
        name: "oc_toolkit",
        title: "oc-toolkit",
        tagline: "Multi-agent toolkit with an intelligent orchestrator",
        description:
          "Ready-to-use agents, sub-agents, and skills for Open Code. Copy the folders in, restart, and everything is auto-discovered — coordinated by RBG_Runner, an orchestrator that maps agent dependencies and triggers them on schedules or conditions.",
        highlights: [
          "12 agents: planning, strategy, research, outreach, support, finance, code, and deployment",
          "RBG_Runner: discovery, dependency graph, and conditional triggering",
          "Hybrid scheduling: self-triggering agents or user-defined cron",
          "Copy-and-go setup — no package installation",
        ],
        tech: ["AI Agents", "Orchestration", "Open Code", "Automation"],
        repo: "oc_toolkit",
        language: "Markdown",
      },
      {
        name: "agent-studio",
        title: "Agent Studio",
        tagline: "Local-first, provider-agnostic agent workspace",
        description:
          "Configure an LLM provider — NVIDIA, OpenAI, Ollama, or any OpenAI-compatible endpoint — and chat with an agent whose history is remembered and stored locally. In early development: provider setup and the conversational runtime are implemented and tested.",
        highlights: [
          "Runs fully offline against local models; no telemetry",
          "API keys stored by reference — never written, logged, or serialized",
          "Conversations saved as human-readable, resumable JSON",
          "Pure Node.js with zero runtime dependencies",
        ],
        tech: ["TypeScript", "Node.js", "LLM Providers", "Local-first"],
        repo: "agent-studio",
        language: "TypeScript",
      },
      {
        name: "ai-command-center",
        title: "Helm — AI Command Center",
        tagline: "Governed AI business-operations platform",
        description:
          "An AI business-operations platform that unifies the tools a company runs on into one explainable, governed picture. AI recommends; humans decide — every consequential action passes an approval gate and leaves an immutable audit record.",
        highlights: [
          "Ten specialist agents with cited, confidence-scored insights",
          "Immutable, hash-chained audit trail; dual control for high-risk actions",
          "RBAC, CSRF protection, rate limiting, and Zod-validated APIs",
          "WCAG 2.1 AA targets with automated axe checks",
        ],
        tech: ["Next.js", "TypeScript", "RBAC", "AI Governance"],
        repo: "ai-command-center",
        language: "TypeScript",
        featured: true,
      },
      {
        name: "ai-control-core",
        title: "AI Operations Core",
        tagline: "Reusable, model-agnostic AI ops assets",
        description:
          "A model-agnostic library of reusable AI operations assets — skills, agent guidance, rules, templates, and standards — indexed for fast navigation and safe by default.",
        highlights: [
          "1,050+ indexed skill-like assets",
          "Model-agnostic guidance, rules & templates",
          "Local-first: no external data transmission by default",
        ],
        tech: ["AI Agents", "Prompt Eng", "MCP", "Automation"],
        repo: "ai-control-core",
        language: "Python",
      },
      {
        name: "skill-stack",
        title: "SkillStack",
        tagline: "Agent-agnostic engineering skill library",
        description:
          "A clean, standalone library of agent-agnostic developer and automation skills — frontend, backend, Python, DevOps, security, QA, and browser/document automation — as portable Markdown/JSON guidance.",
        highlights: [
          "Root-level skill sets (frontend, backend, DevOps, QA…)",
          "SKILL.md + examples + validation per skill",
          "Local-first safety model built in",
        ],
        tech: ["AI Agents", "Developer Tools", "Automation"],
        repo: "skill-stack",
        language: "Markdown",
      },
    ],
  },
  {
    id: "robotics",
    label: "Robotics",
    blurb:
      "Kinematics, motion planning, and design automation for serial-link manipulators — pure Python, no ROS required.",
    projects: [
      {
        name: "roboarm-ai-toolkit",
        title: "RoboArm AI Toolkit",
        tagline: "Robot-arm kinematics with an AI interface",
        description:
          "A modular robot-arm toolkit covering the full manipulator pipeline: SE(3)/SO(3) math, prebuilt arm models, five IK solvers, Jacobian and manipulability analysis, trajectory planning, and natural-language AI agents.",
        highlights: [
          "Forward & inverse kinematics (5 IK solvers)",
          "Jacobian analysis, manipulability & singularity detection",
          "Joint-space trajectory planning (LSPB profiles)",
          "Natural-language agent interface — no ROS required",
        ],
        tech: ["Python", "Kinematics", "Motion Planning", "AI Agents"],
        repo: "roboarm-ai-toolkit",
        language: "Python",
        featured: true,
      },
      {
        name: "parametric-robot-design-automation",
        title: "Parametric Robot Design Automation",
        tagline: "CAD-agnostic parametric design pipeline",
        description:
          "A CAD-backend-agnostic toolkit for programmatically generating, validating, and documenting robotics components — grippers, brackets, base plates — with export to URDF, OpenSCAD, BOM, and DXF.",
        highlights: [
          "CAD-backend-agnostic architecture (mock + Fusion 360 skeleton)",
          "URDF / OpenSCAD / BOM / DXF export",
          "Parameter validation & structural analysis",
          "396 tests passing in CI",
        ],
        tech: ["Python", "CAD", "URDF", "Design Automation"],
        repo: "parametric-robot-design-automation",
        language: "Python",
      },
    ],
  },
  {
    id: "web",
    label: "Web & SaaS Platforms",
    blurb:
      "Production-quality, security-first web starters and dashboards built with Next.js, TypeScript, and Tailwind.",
    projects: [
      {
        name: "saas-dashboard-demo",
        title: "Nexus Ops — SaaS Dashboard",
        tagline: "Enterprise operations dashboard & starter",
        description:
          "A production-quality business operations platform and reusable SaaS starter demonstrating how modern software should be built: security-first, accessible, observable, and production-ready.",
        highlights: [
          "3-layer RBAC (route + page + service) with audit trail",
          "KPIs & charts, enterprise data tables, CSV export",
          "Command palette (⌘K) global search",
          "WCAG AA target — jest-axe + Playwright checks",
        ],
        tech: ["Next.js", "TypeScript", "Tailwind", "RBAC"],
        repo: "saas-dashboard-demo",
        language: "TypeScript",
        featured: true,
      },
      {
        name: "business-website-starter",
        title: "Business Website Starter",
        tagline: "Re-brandable marketing site in two files",
        description:
          "A production-grade marketing website starter that can be re-branded by editing two files. Conversion-focused, SEO-heavy, accessible, and CMS-ready behind a typed content layer.",
        highlights: [
          "10+ composable homepage sections",
          "Strong SEO: sitemap, OG images, JSON-LD",
          "Accessibility verified with jest-axe",
          "Lean ~103 kB shared JS, static generation",
        ],
        tech: ["Next.js", "TypeScript", "Tailwind", "SEO"],
        repo: "business-website-starter",
        language: "TypeScript",
      },
      {
        name: "client-portal-starter",
        title: "Client Portal Starter",
        tagline: "Secure enterprise client portal kit",
        description:
          "A secure, accessible client-portal starter with 12 working modules and real interactions — tickets, messages, invoices, documents — designed so the mock backend swaps for a real one with minimal churn.",
        highlights: [
          "12 modules: projects, tickets, invoices, documents…",
          "Central RBAC (4 roles), hardened headers & CSP",
          "Command palette, charts, sortable/filterable tables",
          "Strict TS, ESLint/Prettier, Jest + Playwright",
        ],
        tech: ["Next.js", "TypeScript", "Tailwind v4", "shadcn/ui"],
        repo: "client-portal-starter",
        language: "TypeScript",
      },
    ],
  },
  {
    id: "quality",
    label: "Quality Engineering & Automation",
    blurb:
      "Test strategy, automation harnesses, and privacy-first tooling — the quality discipline behind everything else I build.",
    projects: [
      {
        name: "Sporty_Test",
        title: "Sporty Test Harness",
        tagline: "Risk-based QA and automation for a betting flow",
        description:
          "A test strategy and automation suite for a single-bet placement flow: prioritised manual scenarios, 42 automated checks across API and UI, and a vault of documented defects with reproduction steps and evidence.",
        highlights: [
          "42 tests: 16 API, 1 end-to-end UI journey, 25 UI regression",
          "Latest free run: 28 passed, 5 skipped, 9 expected failures, 0 failed",
          "10 documented test cases with priority, risk, and cost",
          "22 filed defects (15 bugs, 7 epics) with evidence",
        ],
        tech: ["Python", "pytest", "Selenium", "API Testing"],
        repo: "Sporty_Test",
        language: "Python",
      },
      {
        name: "RBG_Candidate",
        title: "RBG Candidate",
        tagline: "Privacy-first AI form-filling extension",
        description:
          "A Chrome/Edge (MV3) extension that fills job applications with NVIDIA AI through a stateless FastAPI proxy — private by design, with manual review before anything is filled.",
        highlights: [
          "A coordinator splits each form across 15 parallel AI workers",
          "Local-only encrypted storage (WebCrypto PBKDF2 + AES-GCM)",
          "Field-by-field preview — no auto-submit",
          "Handles multi-step application flows; bring your own API key",
        ],
        tech: ["Chrome MV3", "TypeScript", "FastAPI", "Privacy"],
        repo: "RBG_Candidate",
        language: "TypeScript",
      },
      {
        name: "linkedin_automation",
        title: "LinkedIn Automation",
        tagline: "Personal LinkedIn intelligence, safety-first",
        description:
          "Operates your own logged-in LinkedIn session to digest your feed, search people and jobs, score job fit, and schedule posts — with a provider-agnostic LLM and review-only defaults for anything that writes.",
        highlights: [
          "NVIDIA, Ollama, or OpenAI through one OpenAI-compatible client",
          "Attach to your Chrome over CDP or run headless with Playwright",
          "YAML workflows with a cron-based scheduler daemon",
          "Safety layer: kill switch, arm toggle, working hours, daily quotas",
        ],
        tech: ["Python", "Playwright", "LLM", "Docker"],
        repo: "linkedin_automation",
        language: "Python",
      },
    ],
  },
  {
    id: "ml",
    label: "Machine Learning Foundations",
    blurb:
      "Transparent, from-scratch implementations that build deep intuition — no black boxes.",
    projects: [
      {
        name: "mlp-study-kit",
        title: "MLP Study Kit",
        tagline: "Neural networks from scratch in NumPy",
        description:
          "A structured study kit for building a Multi-Layer Perceptron from scratch in pure NumPy — progressing from a single neuron all the way to TensorFlow/Keras, with every component kept transparent.",
        highlights: [
          "Pure-NumPy neural net core (activations, losses, backprop)",
          "Step-by-step exercises from neuron → Keras",
          "Backprop debugger for exam prep",
          "Headless/CI friendly (MPLBACKEND=Agg)",
        ],
        tech: ["Python", "NumPy", "Deep Learning", "Education"],
        repo: "mlp-study-kit",
        language: "Python",
      },
    ],
  },
];

export type PrivateWork = {
  title: string;
  description: string;
  tech: string[];
};

export const about = {
  role: "Senior Full-Stack Engineer · Capgemini (Neo)",
  location: "Warsaw, Poland",
  paragraphs: [
    "My path started in hardware and motion. I studied Mechatronics and then Robotics at the Warsaw University of Technology — living in kinematics, control systems, computer vision, and embedded design. That engineering foundation still shapes how I think: model the system, respect the constraints, and prove it works.",
    "I moved into software through quality. I began testing games and web applications, then grew from junior to senior QA — owning test strategy, defect lifecycles, and release readiness. Breaking software taught me exactly what it takes to build it so it doesn't break.",
    "Today I'm a Senior Full-Stack Engineer at Capgemini, on the Neo project, developing and integrating AI solutions. Before that, at Dell Technologies, I led automation and quality engineering for enterprise storage — architecting Python frameworks and Jenkins CI/CD pipelines, and cutting end-to-end regression from roughly four weeks to five days. Outside work I build open-source tooling for AI agents — runbooks, playbooks, orchestration, and evaluation: the same instinct for reliability, now applied to LLMs and autonomous workflows.",
  ],
};

export const quickFacts: { value: string; label: string }[] = [
  { value: "6+ yrs", label: "Quality & automation" },
  { value: "M.Sc.", label: "Robotics — WUT" },
  { value: "Warsaw", label: "Poland (C2 English)" },
  { value: "Capgemini", label: "Senior Full-Stack Engineer · Neo" },
];

export type TimelineItem = {
  period: string;
  role: string;
  org: string;
  summary: string;
  // Substrings of `summary` to visually emphasise.
  highlights?: string[];
  current?: boolean;
};

export const experience: TimelineItem[] = [
  {
    period: "Nov 2026 — Present",
    role: "Senior Full-Stack Engineer",
    org: "Capgemini · Neo project",
    summary:
      "Develop and integrate AI solutions on the Neo project — building full-stack features end to end and bringing LLM and agent capabilities into production, with the testing and quality discipline from my automation background.",
    highlights: ["develop and integrate AI solutions", "Neo project"],
    current: true,
  },
  {
    period: "Jan 2023 — Oct 2026",
    role: "Automation Team Lead & Senior Software Automation Engineer",
    org: "Dell Technologies",
    summary:
      "Led automation and quality engineering for enterprise storage. Built a test-orchestration framework and AI-assisted multi-agent quality workflows, and cut end-to-end regression from ~4 weeks to 5 days. Mentored engineers and owned delivery from requirements to release.",
    highlights: [
      "test-orchestration framework",
      "AI-assisted multi-agent quality workflows",
      "~4 weeks to 5 days",
    ],
  },
  {
    period: "Mar 2022 — Jan 2023",
    role: "Senior Quality Assurance Technician",
    org: "Testronic",
    summary:
      "Owned test planning, execution, and release readiness across functional, regression, smoke, and exploratory testing — driving defect investigation with engineering and design.",
    highlights: ["test planning, execution, and release readiness"],
  },
  {
    period: "Mar 2020 — Feb 2022",
    role: "Junior Functionality QA Technician",
    org: "Testronic",
    summary:
      "Executed functional, regression, and exploratory testing, tracked defects in Jira, and introduced selective automation to cut repetitive manual effort.",
    highlights: ["selective automation"],
  },
  {
    period: "Mar 2020 — Feb 2022",
    role: "Freelance Software & Web Tester",
    org: "Fiverr",
    summary:
      "Tested games, web UIs, and applications for global clients — covering functionality, usability, and user flows with clear, evidence-backed defect reports.",
    highlights: ["global clients"],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period?: string;
  focus: string;
};

export const education: EducationItem[] = [
  {
    degree: "M.Sc. in Robotics",
    school: "Warsaw University of Technology",
    focus:
      "AI & machine learning, computer vision, robot kinematics, Kalman filtering, autonomous systems, and AI planning.",
  },
  {
    degree: "B.Sc. in Mechatronics Engineering",
    school: "Warsaw University of Technology",
    period: "2020 — 2023",
    focus:
      "Mechatronic systems, industrial diagnostics, metrology, precision devices, modelling & simulation, and 3D CAD.",
  },
];

export const languages: { name: string; level: string }[] = [
  { name: "English", level: "C2" },
  { name: "German", level: "A2" },
  { name: "Polish", level: "A2" },
];

export type Service = {
  icon: "ai" | "robot" | "web" | "quality";
  title: string;
  // One-line client outcome — the benefit, not the activity.
  outcome: string;
  pitch: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: "ai",
    title: "AI & LLM Systems",
    outcome: "Ship AI features you can trust in production",
    pitch:
      "Most LLM demos never survive contact with real users. I build the evaluation, guardrails, and infrastructure that make them dependable.",
    points: [
      "RAG, agents & workflow automation",
      "Evaluation harnesses & regression gates",
      "Hallucination, PII & prompt-injection defense",
      "Model gateways with caching & observability",
    ],
  },
  {
    icon: "robot",
    title: "Robotics & Automation",
    outcome: "Turn manual engineering work into repeatable code",
    pitch:
      "Repetitive mechanical and robotics tasks become tested, version-controlled tooling — from kinematics to automated design pipelines.",
    points: [
      "Forward/inverse kinematics & motion planning",
      "Parametric design automation (URDF, CAD export)",
      "Simulation & analysis tooling",
      "Pure-Python, no heavy ROS setup required",
    ],
  },
  {
    icon: "web",
    title: "Full-Stack Products",
    outcome: "Go from prototype to production without rewrites",
    pitch:
      "Security-first, accessible web apps and dashboards, architected so the first version is one you can actually keep building on.",
    points: [
      "Next.js + TypeScript apps & dashboards",
      "RBAC, auth, audit trails & hardened headers",
      "Accessible (WCAG AA) and SEO-ready",
      "Reusable, brandable starters",
    ],
  },
  {
    icon: "quality",
    title: "Engineering Rigor",
    outcome: "Keep quality high as the system grows",
    pitch:
      "The part most projects skip: making systems measurably good, then keeping them that way as the team and codebase scale.",
    points: [
      "CI/CD pipelines & automated quality gates",
      "Testing, type-safety & code review",
      "Observability, metrics & structured logging",
      "Documentation that stays useful",
    ],
  },
];

// How an engagement typically runs — reassures clients on process.
export type ProcessStep = { title: string; description: string };
export const process: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "We align on the problem, constraints, and what “done well” actually means before any code is written.",
  },
  {
    title: "Design & build",
    description:
      "I architect the solution and ship in small, reviewable increments you can follow the whole way.",
  },
  {
    title: "Harden",
    description:
      "Tests, CI/CD, observability, and security so it holds up under real-world use — not just the demo.",
  },
  {
    title: "Hand off",
    description:
      "Clear documentation and a maintainable codebase your team can own with confidence.",
  },
];

export type EngagementType = {
  label: string;
  tagline: string;
  description: string;
  format: string;
  // Text dropped into the contact message / mailto body when selected.
  prefill: string;
};

export const engagements: EngagementType[] = [
  {
    label: "Advisory",
    tagline: "A senior sounding board",
    description:
      "Ongoing guidance on architecture, AI strategy, and quality — design reviews, direction, and mentoring for your team.",
    format: "Retainer · ongoing",
    prefill:
      "Hi Brijesh — I'm interested in an Advisory engagement. Here's what my team is working on and where I'd like your input:\n\n",
  },
  {
    label: "Build Sprint",
    tagline: "Ship a defined deliverable",
    description:
      "A focused, time-boxed sprint to design and build a specific feature, prototype, or automation — end to end.",
    format: "Fixed scope · 1–4 weeks",
    prefill:
      "Hi Brijesh — I'd like to scope a Build Sprint. The deliverable I have in mind is:\n\n",
  },
  {
    label: "Audit & Review",
    tagline: "De-risk before you scale",
    description:
      "A deep review of your codebase, AI system, or CI/CD pipeline, delivered as a prioritized report with concrete fixes.",
    format: "One-off · fixed fee",
    prefill:
      "Hi Brijesh — I'd like an Audit & Review. The system I'd like assessed is:\n\n",
  },
];

export const valueProps: string[] = [
  "Production-minded from day one",
  "Measurable quality, not vibes",
  "Clear, documented handoffs",
  "Security & accessibility by default",
];

export const privateWork: PrivateWork[] = [
  {
    title: "ApexAssist",
    description:
      "A desktop on-screen task assistant: one hotkey captures what's on screen, local OCR reads it, and an AI model streams step-by-step help into a lightweight overlay. Voice notes are transcribed and answered the same way.",
    tech: ["Tauri", "Rust", "React", "OCR"],
  },
  {
    title: "OpsPilot",
    description:
      "An AI-powered engineering and workflow co-pilot that automates repetitive developer and operations tasks across the toolchain.",
    tech: ["PowerShell", "AI Agents", "Automation"],
  },
  {
    title: "Robotics Reference Library",
    description:
      "A large MATLAB reference and simulation collection covering robotics fundamentals — kinematics, dynamics, and control experiments.",
    tech: ["MATLAB", "Robotics", "Control"],
  },
  {
    title: "Workflow Automation Suite",
    description:
      "Private Python automation tooling that streamlines recurring professional workflows and data pipelines end to end.",
    tech: ["Python", "Automation", "Pipelines"],
  },
];
