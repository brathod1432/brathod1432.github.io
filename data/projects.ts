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

export type Service = {
  icon: "ai" | "robot" | "web" | "quality";
  title: string;
  pitch: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: "ai",
    title: "AI & LLM Systems",
    pitch:
      "Ship LLM features you can actually trust — with the evaluation, guardrails, and infrastructure to keep them reliable in production.",
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
    pitch:
      "Turn manual mechanical and robotics work into repeatable code — from kinematics to automated design pipelines.",
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
    pitch:
      "Security-first, accessible web apps and dashboards that go from prototype to production without rewrites.",
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
    pitch:
      "The part most projects skip: making systems measurably good and keeping them that way as they grow.",
    points: [
      "CI/CD pipelines & automated quality gates",
      "Testing, type-safety & code review",
      "Observability, metrics & structured logging",
      "Documentation that stays useful",
    ],
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
