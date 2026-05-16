import type {
  Experience,
  NavLink,
  ProductThinkingCard,
  Project,
  SkillCategory,
  Stat,
} from "../types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Thinking", href: "#thinking" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Design", href: "#design" },
  { label: "Contact", href: "#contact" },
];

export const STATS: Stat[] = [
  { label: "GATE Qualified", value: "2025 & 2026" },
  { label: "AI Systems Built", value: "4", suffix: "+" },
  { label: "GenAI Experience", value: "Agentic AI" },
  { label: "Shipping", value: "Real-Time AI" },
];

export const PROJECTS: Project[] = [
  {
    id: "mindwell-ai",
    title: "MindWell AI",
    tagline: "Mental Health Assistant",
    description:
      "Real-time conversational AI assistant with voice interaction, emotional support, crisis detection, and NLP pipelines — built with deep empathy for the user.",
    problem:
      "Mental health support is inaccessible, expensive, and stigmatized. People in crisis lack immediate, private, and non-judgmental support.",
    solution:
      "An empathetic AI companion with real-time streaming responses, voice interaction, emotional tone analysis, crisis escalation protocols, and private journaling.",
    impact:
      "Reduced response latency to under 300ms. Implemented multi-turn emotional context preservation. Built AI safety guardrails for crisis scenarios.",
    tags: ["Empathy-Driven UX", "Voice AI", "Crisis Detection"],
    stack: [
      "Python",
      "LangChain",
      "OpenAI GPT-4",
      "WebRTC",
      "FastAPI",
      "PostgreSQL",
    ],
    category: "Healthcare AI",
    featured: true,
    color: "from-cyan-500/10 to-blue-500/10",
    githubUrl: "https://github.com/kaifjamadar",
  },
  {
    id: "acoustic-artistry",
    title: "Acoustic Artistry AI Studio",
    tagline: "GenAI Multimodal Pipeline",
    description:
      "Production-grade GenAI system converting speech to visuals and structured research using LLM pipelines, Stable Diffusion, LangChain, and multi-agent workflows.",
    problem:
      "Content creators waste hours manually converting spoken ideas into visual assets and research documents. Existing tools handle only one modality.",
    solution:
      "A multi-agent AI pipeline that transcribes speech, generates visual art via Stable Diffusion, synthesizes research with a self-evaluation loop, and delivers structured outputs.",
    impact:
      "Automated 4-step multimodal pipeline end-to-end. Prompt optimization reduced generation artifacts by 60%. Self-evaluation loop increased output quality consistency.",
    tags: ["Multi-Agent AI", "Stable Diffusion", "Prompt Engineering"],
    stack: [
      "Python",
      "LangChain",
      "Stable Diffusion",
      "Whisper",
      "FastAPI",
      "Redis",
    ],
    category: "Generative AI",
    featured: true,
    color: "from-violet-500/10 to-purple-500/10",
    githubUrl: "https://github.com/kaifjamadar",
  },
  {
    id: "civillink",
    title: "CivilLink Platform",
    tagline: "AI-Assisted Civil Project Marketplace",
    description:
      "AI-assisted contractor-landowner bidding platform solving inefficiencies in civil project management with smart evaluation, trust systems, and automated workflows.",
    problem:
      "Civil project procurement is opaque, slow, and prone to fraud. Landowners struggle to evaluate contractors fairly, and contractors waste time on unqualified bids.",
    solution:
      "A marketplace with AI-powered bid evaluation, automated contractor scoring, smart contract-based trust verification, and workflow optimization for all stakeholders.",
    impact:
      "Reduced bid evaluation time by 70%. Implemented real-time bid scoring. Built trust score system with fraud detection heuristics.",
    tags: ["Marketplace UX", "Smart Evaluation", "Workflow Automation"],
    stack: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Python",
      "TensorFlow",
      "Docker",
    ],
    category: "B2B Platform",
    featured: true,
    color: "from-emerald-500/10 to-teal-500/10",
    githubUrl: "https://github.com/kaifjamadar",
  },
  {
    id: "biometric-payroll",
    title: "Biometric Attendance & Payroll",
    tagline: "AI-Enabled Workforce Intelligence",
    description:
      "AI-enabled attendance and payroll system with biometric integration, intelligent overtime calculation, real-time dashboards, and predictive workforce analytics.",
    problem:
      "Manual attendance and payroll processes are error-prone, time-consuming, and lack real-time visibility for managers and HR teams.",
    solution:
      "Integrated biometric hardware with an AI-powered backend for automated attendance tracking, smart payroll computation, anomaly detection, and live analytics dashboards.",
    impact:
      "Eliminated manual payroll errors. Reduced HR processing time by 80%. Real-time dashboard with daily/weekly/monthly drill-downs.",
    tags: ["Biometric Integration", "Dashboard UX", "Automation"],
    stack: ["Python", "OpenCV", "Flask", "PostgreSQL", "React.js", "Chart.js"],
    category: "HR Tech",
    featured: false,
    color: "from-amber-500/10 to-orange-500/10",
    githubUrl: "https://github.com/kaifjamadar",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "infosys-genai",
    company: "Infosys Springboard",
    role: "GenAI Intern",
    period: "Jan 2025 – Present",
    location: "Remote",
    type: "Internship",
    description:
      "Building production-grade GenAI systems and intelligent automation pipelines using LangChain, OpenAI APIs, and agentic workflow architectures.",
    highlights: [
      "Designed multi-agent LangChain pipelines for automated document processing and synthesis",
      "Built RAG (Retrieval-Augmented Generation) systems with vector database integration",
      "Optimized prompt engineering strategies reducing token consumption by 35%",
      "Contributed to AI safety evaluation frameworks for enterprise deployment",
    ],
    technologies: [
      "LangChain",
      "OpenAI GPT-4",
      "Python",
      "Pinecone",
      "FastAPI",
    ],
  },
  {
    id: "itkars-agentic",
    company: "Itkars Technologies",
    role: "Agentic AI Intern",
    period: "Jun 2024 – Dec 2024",
    location: "Hybrid",
    type: "Internship",
    description:
      "Architected and deployed autonomous AI agents for business process automation, integrating real-time data pipelines and intelligent decision systems.",
    highlights: [
      "Built autonomous web-scraping agents with intelligent retry and error recovery logic",
      "Implemented real-time AI pipelines processing 10K+ records daily with 99.2% uptime",
      "Designed AI-assisted reporting dashboards with natural language query interface",
      "Reduced manual data entry workload by 75% through intelligent automation",
    ],
    technologies: [
      "Python",
      "LangChain",
      "Selenium",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },
  {
    id: "tecspeak-web",
    company: "Tecspeak",
    role: "Web Development Intern",
    period: "Jan 2024 – May 2024",
    location: "Remote",
    type: "Internship",
    description:
      "Developed responsive web applications and RESTful APIs, focusing on performance optimization and modern frontend architecture patterns.",
    highlights: [
      "Built 4 client-facing web applications with React.js and Node.js",
      "Improved page load performance by 45% through code splitting and lazy loading",
      "Implemented CI/CD pipelines reducing deployment time from hours to minutes",
      "Mentored 2 junior developers on React best practices and component architecture",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
    ],
  },
  {
    id: "codsoft-react",
    company: "CodSoft",
    role: "ReactJS Developer Intern",
    period: "Dec 2023 – Jan 2024",
    location: "Remote",
    type: "Internship",
    description:
      "Built modular React component libraries and feature-rich UI modules, establishing strong foundations in component architecture, responsive design, and front-end performance optimization.",
    highlights: [
      "Engineered reusable React component library improving team development velocity by 30%",
      "Implemented responsive layouts with mobile-first design principles across 3 projects",
      "Optimized React rendering performance via memoization and lazy loading strategies",
      "Collaborated on Git-based workflows with structured code reviews and branching conventions",
    ],
    technologies: ["React.js", "JavaScript", "CSS", "Git"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-ml",
    label: "AI / ML",
    icon: "🧠",
    skills: [
      { name: "Python", level: "expert" },
      { name: "TensorFlow", level: "advanced" },
      { name: "PyTorch", level: "advanced" },
      { name: "OpenCV", level: "advanced" },
      { name: "NLP / Transformers", level: "advanced" },
    ],
  },
  {
    id: "genai",
    label: "GenAI",
    icon: "✨",
    skills: [
      { name: "LangChain", level: "expert" },
      { name: "LLMs (GPT-4, Claude)", level: "expert" },
      { name: "Stable Diffusion", level: "advanced" },
      { name: "Prompt Engineering", level: "expert" },
      { name: "RAG Systems", level: "advanced" },
      { name: "Multi-Agent AI", level: "advanced" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Flask / FastAPI", level: "expert" },
      { name: "Node.js", level: "advanced" },
      { name: "REST APIs", level: "expert" },
      { name: "WebSockets", level: "intermediate" },
      { name: "Microservices", level: "intermediate" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", level: "expert" },
      { name: "TypeScript", level: "advanced" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Framer Motion", level: "advanced" },
      { name: "Next.js", level: "advanced" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: "advanced" },
      { name: "MongoDB", level: "advanced" },
      { name: "Redis", level: "intermediate" },
      { name: "Pinecone (Vector DB)", level: "intermediate" },
    ],
  },
  {
    id: "product-design",
    label: "Product & Design",
    icon: "📐",
    skills: [
      { name: "Product Thinking", level: "expert" },
      { name: "UX Research", level: "advanced" },
      { name: "Figma / Wireframing", level: "advanced" },
      { name: "PRD Writing", level: "advanced" },
      { name: "User Journey Mapping", level: "advanced" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    icon: "🔧",
    skills: [
      { name: "Docker", level: "advanced" },
      { name: "Git / GitHub", level: "expert" },
      { name: "Linux / Bash", level: "advanced" },
      { name: "CI/CD Pipelines", level: "intermediate" },
    ],
  },
];

export const PRODUCT_THINKING: ProductThinkingCard[] = [
  {
    id: "user-first",
    title: "User-First, Always",
    description:
      "Every product decision starts with a real user pain point. I map user journeys before writing a single line of code, ensuring features solve genuine problems — not engineering exercises.",
    icon: "👤",
    tags: ["User Research", "Journey Maps", "Empathy"],
  },
  {
    id: "rapid-iteration",
    title: "Rapid Iteration",
    description:
      "Ship fast, learn faster. I believe in building the smallest functional version first, validating assumptions with real users, then iterating with data — not opinions.",
    icon: "🔄",
    tags: ["MVP Thinking", "A/B Testing", "Feedback Loops"],
  },
  {
    id: "ai-ux",
    title: "Human-AI Interaction",
    description:
      "AI products must feel trustworthy and transparent. I design for explainability, latency expectations, error recovery, and moments of delight — not just raw model capability.",
    icon: "🤝",
    tags: ["AI Safety", "Explainability", "Trust Design"],
  },
  {
    id: "engineering-balance",
    title: "Balancing UX & Engineering",
    description:
      "Great products live at the intersection of what users want and what engineers can ship reliably. I speak both languages fluently and bridge the gap in every team I join.",
    icon: "⚖️",
    tags: ["Technical PM", "Trade-offs", "Feasibility"],
  },
  {
    id: "prioritization",
    title: "Ruthless Prioritization",
    description:
      "Using RICE, MoSCoW, and impact-effort matrices, I cut scope without cutting value. The best product is one that does fewer things extraordinarily well.",
    icon: "🎯",
    tags: ["RICE Framework", "MoSCoW", "Focus"],
  },
  {
    id: "metrics",
    title: "Metrics & Impact",
    description:
      "I define success metrics before building, track leading indicators, and connect product outcomes to business goals. Shipping is not success — impact is.",
    icon: "📈",
    tags: ["OKRs", "KPIs", "Data-Driven"],
  },
];
