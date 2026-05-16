import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";
import {
  AlertCircle,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Github,
  Layers,
  Lightbulb,
  Palette,
  Target,
  TrendingUp,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

// Static extended details per project id
const PROJECT_DETAILS: Record<
  string,
  {
    painPoints: string[];
    productThinking: string;
    whySolutionsFail: string;
    aiArchitecture: string[];
    uxDecisions: string[];
    challenges: string[];
    features: string[];
  }
> = {
  "mindwell-ai": {
    painPoints: [
      "Therapy costs $150–$300/session — inaccessible for most",
      "Weeks-long waitlists before seeing a professional",
      "Stigma prevents people from seeking help publicly",
      "No immediate support available during acute distress moments",
      "Existing chatbots feel robotic and dismissive",
    ],
    productThinking:
      "Designed as an always-available empathetic companion, not a replacement for therapy. Key insight: users need to feel heard before they want solutions. Every UX decision prioritizes emotional safety over feature density.",
    whySolutionsFail:
      "Generic chatbots lack emotional intelligence. Crisis lines are human-bottlenecked. Meditation apps don't address real-time distress. None offer the combination of conversational depth, voice, and proactive safety detection.",
    aiArchitecture: [
      "Streaming LLM responses via LangChain for <300ms perceived latency",
      "Emotion classification layer on each user utterance",
      "Crisis keyword detection with escalation protocol",
      "Multi-turn context window with emotional state tracking",
      "WebRTC voice pipeline with Whisper transcription",
    ],
    uxDecisions: [
      "Conversational UI over form-based input — reduces cognitive friction",
      "Warm color palette and soft animations to reduce anxiety",
      "Progressive disclosure: journaling only shown after trust established",
      "Clear 'talk to a human' escape hatch always visible",
    ],
    challenges: [
      "Balancing AI empathy with truthfulness — avoiding harmful reassurance",
      "Implementing crisis detection without false positives that break trust",
      "Sub-300ms streaming latency on constrained infrastructure",
      "Data privacy: end-to-end encryption for sensitive conversations",
    ],
    features: [
      "Real-time streaming conversational AI",
      "Voice interaction with Whisper transcription",
      "Emotional tone detection & adaptive responses",
      "Crisis detection & escalation protocols",
      "Private encrypted journaling",
      "Multi-turn context preservation",
    ],
  },
  "acoustic-artistry": {
    painPoints: [
      "Content creators spend 4–8 hours converting ideas into visual assets",
      "Separate tools for transcription, art generation, and research don't talk to each other",
      "Prompt engineering for Stable Diffusion requires specialist knowledge",
      "Research synthesis from spoken notes is entirely manual",
      "Output quality is inconsistent without evaluation loops",
    ],
    productThinking:
      "The insight was that spoken ideas are the most natural input, but existing AI tools all require typed prompts. Built a pipeline where speech is the primary interface, with each agent handling one transformation stage autonomously.",
    whySolutionsFail:
      "Text-to-image tools require typed prompts. Transcription tools stop at text. Research tools don't integrate with generation. No existing product closes the full loop from spoken concept to structured deliverable.",
    aiArchitecture: [
      "Stage 1: Whisper ASR for high-accuracy speech transcription",
      "Stage 2: LangChain prompt optimizer for Stable Diffusion",
      "Stage 3: Stable Diffusion XL for visual generation",
      "Stage 4: LLM-powered research synthesis agent",
      "Self-evaluation loop: LLM scores output and re-runs if below threshold",
    ],
    uxDecisions: [
      "One-button record interface — no configuration needed",
      "Real-time pipeline stage indicators for transparency",
      "Side-by-side view: transcript, visuals, research",
      "Export as structured PDF with one click",
    ],
    challenges: [
      "Orchestrating 4 agents without blocking I/O — async pipeline design",
      "Prompt optimization: translate natural speech into Stable Diffusion syntax",
      "Self-evaluation accuracy: when to re-run vs. accept output",
      "Managing generation costs within reasonable latency budgets",
    ],
    features: [
      "Speech-to-visual generation pipeline",
      "Multi-agent LangChain orchestration",
      "Stable Diffusion XL integration",
      "Self-evaluation quality loop",
      "Automated research synthesis",
      "Structured PDF export",
    ],
  },
  civillink: {
    painPoints: [
      "Bid evaluation is subjective — relies on gut feel and personal relationships",
      "Landowners have no way to verify contractor quality upfront",
      "Contractors spend 20+ hours per bid on unqualified projects",
      "No transparency in why bids are rejected",
      "Dispute resolution is slow and costly",
    ],
    productThinking:
      "Marketplace trust is the core product problem. Without objective evaluation, the marketplace devolves into whoever bids lowest. Built a scoring engine that surfaces quality signals objectively, making the platform valuable to both sides.",
    whySolutionsFail:
      "Generic procurement platforms lack domain-specific evaluation. Word-of-mouth networks exclude new contractors. Manual vetting is too slow for competitive bidding. No platform combines AI scoring with transparent trust signals.",
    aiArchitecture: [
      "Contractor scoring model: historical performance + review sentiment analysis",
      "Bid quality classifier: price vs. scope alignment detection",
      "Fraud detection: anomaly flagging on bid patterns",
      "NLP pipeline for contract clause analysis",
      "Smart matching: contractor-project fit scoring",
    ],
    uxDecisions: [
      "Landowner view: project posting wizard with AI scope assistance",
      "Contractor view: bid templates with auto-populated fields",
      "Trust score prominently displayed — builds platform confidence",
      "Milestone-based payment UX reduces risk for both parties",
    ],
    challenges: [
      "Cold-start problem: scoring new contractors with no history",
      "Preventing score gaming — adversarial contractors manipulating signals",
      "Dual-sided marketplace balance: acquisition and retention of both sides",
      "Real-time bid scoring without introducing latency into the bidding flow",
    ],
    features: [
      "AI-powered bid evaluation engine",
      "Contractor trust score system",
      "Real-time bidding interface",
      "Fraud detection & anomaly flagging",
      "Milestone-based payment system",
      "Smart contractor-project matching",
    ],
  },
  "biometric-payroll": {
    painPoints: [
      "Manual timesheets are error-prone — 15–30% discrepancy rates",
      "HR teams spend 2–3 days per month on payroll reconciliation",
      "No real-time visibility into attendance for managers",
      "Overtime calculations are complex and legally sensitive",
      "Legacy systems don't integrate biometrics with payroll",
    ],
    productThinking:
      "HR operations are a silent productivity drain. The product bet was that eliminating manual data entry — not just digitizing it — would unlock real ROI. Biometric integration as the source of truth removes the entire reconciliation problem.",
    whySolutionsFail:
      "Spreadsheet-based payroll requires manual input at every step. Basic HR software automates calculation but not capture. Biometric devices output raw data with no intelligence layer. No unified system closes the full loop.",
    aiArchitecture: [
      "OpenCV-based face recognition for attendance capture",
      "Anomaly detection: unusual clock-in/out patterns",
      "Predictive overtime alerting: flag before it happens",
      "NLP query interface for HR reports",
      "Automated payslip generation with audit trail",
    ],
    uxDecisions: [
      "Manager dashboard: at-a-glance daily attendance heatmap",
      "Drill-down from monthly view → weekly → daily → individual",
      "Employee self-service: leave requests, payslip history",
      "Mobile-responsive admin panel for on-site managers",
    ],
    challenges: [
      "Face recognition accuracy under variable lighting conditions",
      "Integrating with existing biometric hardware APIs",
      "Handling complex overtime rule sets (OT, double-OT, holidays)",
      "Real-time dashboard with 1000+ concurrent employee records",
    ],
    features: [
      "Biometric face recognition attendance",
      "Automated payroll computation",
      "Real-time analytics dashboard",
      "Anomaly detection & alerts",
      "Employee self-service portal",
      "Audit trail & compliance reports",
    ],
  },
};

const PROJECT_IMAGES: Record<string, string> = {
  "mindwell-ai": "/assets/generated/project-mindwell.dim_800x500.jpg",
  "acoustic-artistry": "/assets/generated/project-acoustic.dim_800x500.jpg",
  civillink: "/assets/generated/project-civillink.dim_800x500.jpg",
  "biometric-payroll": "/assets/generated/project-biometric.dim_800x500.jpg",
};

const CATEGORY_COLORS: Record<string, string> = {
  "Healthcare AI": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Generative AI": "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "B2B Platform": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "HR Tech": "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onExpand: (project: Project) => void;
}

export function ProjectCard({ project, index, onExpand }: ProjectCardProps) {
  const categoryColor =
    CATEGORY_COLORS[project.category] ??
    "text-primary bg-primary/10 border-primary/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative cursor-pointer"
      onClick={() => onExpand(project)}
      data-ocid={`projects.card.${index + 1}`}
    >
      {/* Card */}
      <div className="glass rounded-2xl overflow-hidden border border-border/30 shadow-elevated transition-smooth group-hover:border-primary/30 group-hover:shadow-[0_24px_60px_oklch(0.7_0.18_195/0.12)]">
        {/* Hero image */}
        <div className="relative overflow-hidden h-48">
          <img
            src={
              PROJECT_IMAGES[project.id] ??
              "/assets/generated/project-mindwell.dim_800x500.jpg"
            }
            alt={project.title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-70`}
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full border ${categoryColor}`}
            >
              {project.category}
            </span>
          </div>
          {/* Expand hint */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
            <span className="text-xs text-white/70 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
              View Case Study →
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <div className="mb-3">
            <h3 className="font-display text-xl font-semibold text-foreground leading-tight">
              {project.title}
            </h3>
            <p className="text-sm text-primary/80 font-medium mt-0.5">
              {project.tagline}
            </p>
          </div>

          {/* Problem highlight */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
            {project.problem}
          </p>

          {/* Impact metric */}
          <div className="flex items-start gap-2 mb-4 p-3 rounded-xl bg-primary/5 border border-primary/10">
            <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <p className="text-xs text-foreground/80 leading-relaxed line-clamp-2">
              {project.impact}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted-foreground bg-muted/50 border border-border/30 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs font-mono py-0 border-border/40 text-muted-foreground"
              >
                {tech}
              </Badge>
            ))}
            {project.stack.length > 4 && (
              <Badge
                variant="outline"
                className="text-xs font-mono py-0 border-border/40 text-muted-foreground"
              >
                +{project.stack.length - 4}
              </Badge>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="btn-glow flex-1 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 transition-smooth"
              onClick={(e) => {
                e.stopPropagation();
                onExpand(project);
              }}
              data-ocid={`projects.view_case_study.${index + 1}`}
            >
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              Case Study
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl ?? "#", "_blank");
              }}
              aria-label="GitHub"
              data-ocid={`projects.github.${index + 1}`}
            >
              <Github className="w-4 h-4" />
            </Button>
            {project.demoUrl && (
              <Button
                size="sm"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.demoUrl, "_blank");
                }}
                aria-label="Live Demo"
                data-ocid={`projects.demo.${index + 1}`}
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Expanded Modal ────────────────────────────────────────────────────────────

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;
  const details = PROJECT_DETAILS[project.id];
  const categoryColor =
    CATEGORY_COLORS[project.category] ??
    "text-primary bg-primary/10 border-primary/20";

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md"
            onClick={onClose}
            data-ocid="projects.modal_backdrop"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-12 xl:inset-16 z-50 flex flex-col rounded-2xl overflow-hidden"
            data-ocid="projects.dialog"
          >
            {/* Modal content */}
            <div className="flex flex-col h-full glass-dark border border-border/30 shadow-[0_40px_80px_black/60] rounded-2xl overflow-hidden">
              {/* Header image banner */}
              <div className="relative h-56 shrink-0 overflow-hidden">
                <img
                  src={
                    PROJECT_IMAGES[project.id] ??
                    "/assets/generated/project-mindwell.dim_800x500.jpg"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.145_0.014_260)] via-transparent to-transparent" />
                {/* Close */}
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-smooth"
                  aria-label="Close"
                  data-ocid="projects.close_button"
                >
                  <X className="w-5 h-5" />
                </button>
                {/* Title overlay */}
                <div className="absolute bottom-6 left-6 right-16">
                  <span
                    className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full border ${categoryColor} mb-2 inline-block`}
                  >
                    {project.category}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-sm text-white/70 mt-1">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Grid: Problem + Why solutions fail */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Problem */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-destructive" />
                      <h3 className="font-display font-semibold text-foreground">
                        The Problem
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.problem}
                    </p>
                    {details?.painPoints && (
                      <ul className="space-y-2 mt-3">
                        {details.painPoints.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Why solutions fail */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-amber-400" />
                      <h3 className="font-display font-semibold text-foreground">
                        Why Existing Solutions Fail
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {details?.whySolutionsFail ??
                        "No existing solution addresses this problem holistically."}
                    </p>
                  </div>
                </div>

                {/* Product Thinking */}
                {details?.productThinking && (
                  <div className="p-5 rounded-2xl bg-primary/5 border border-primary/15">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      <h3 className="font-display font-semibold text-foreground">
                        Product Thinking
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {details.productThinking}
                    </p>
                  </div>
                )}

                {/* Solution */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <h3 className="font-display font-semibold text-foreground">
                      The Solution
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* AI Architecture */}
                {details?.aiArchitecture && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-violet-400" />
                      <h3 className="font-display font-semibold text-foreground">
                        AI Architecture
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {details.aiArchitecture.map((step, i) => (
                        <div key={step} className="flex items-start gap-3">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-mono text-primary mt-0.5">
                            {i + 1}
                          </span>
                          <p className="text-sm text-muted-foreground">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* UX Decisions */}
                {details?.uxDecisions && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-emerald-400" />
                      <h3 className="font-display font-semibold text-foreground">
                        UX Decisions
                      </h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {details.uxDecisions.map((d) => (
                        <div
                          key={d}
                          className="flex items-start gap-2 p-3 rounded-xl bg-muted/30 border border-border/20"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span className="text-xs text-muted-foreground">
                            {d}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack + Challenges */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Stack */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <h3 className="font-display font-semibold text-foreground">
                        Tech Stack
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="font-mono text-xs border-primary/20 text-foreground/80"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  {details?.challenges && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-amber-400" />
                        <h3 className="font-display font-semibold text-foreground">
                          Challenges Solved
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {details.challenges.map((c) => (
                          <li
                            key={c}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 mt-1.5 shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Impact */}
                <div className="p-5 rounded-2xl bg-primary/5 border border-primary/15">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <h3 className="font-display font-semibold text-foreground">
                      Impact & Results
                    </h3>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                {/* Features */}
                {details?.features && (
                  <div className="space-y-3">
                    <h3 className="font-display font-semibold text-foreground">
                      Key Features
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {details.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/30 border border-border/20"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-xs text-muted-foreground">
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/20">
                  <Button
                    className="btn-glow bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 transition-smooth"
                    onClick={() =>
                      window.open(project.githubUrl ?? "#", "_blank")
                    }
                    data-ocid="projects.modal_github_button"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                  {project.demoUrl && (
                    <Button
                      variant="outline"
                      className="border-border/40 hover:border-primary/30 transition-smooth"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                      data-ocid="projects.modal_demo_button"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    className="ml-auto text-muted-foreground hover:text-foreground"
                    onClick={onClose}
                    data-ocid="projects.modal_cancel_button"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
