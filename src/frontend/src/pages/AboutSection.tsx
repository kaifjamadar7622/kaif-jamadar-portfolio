import KJAvatar from "@/components/KJAvatar";
import {
  Bot,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
  Trophy,
} from "lucide-react";
import { motion } from "motion/react";

const TIMELINE_ITEMS = [
  {
    year: "2022",
    title: "B.Tech CSE — Started",
    subtitle: "Computer Science & Engineering",
    description:
      "Began deep dive into software engineering fundamentals, algorithms, and systems design. Developed early interest in AI and machine learning applications.",
    icon: <GraduationCap size={16} />,
    type: "education" as const,
  },
  {
    year: "Jan 2024",
    title: "Web Development Intern",
    subtitle: "Tecspeak · Remote",
    description:
      "Built 4 client-facing web applications in React.js and Node.js. Improved page load performance by 45% through code splitting. Mentored junior developers on React best practices.",
    icon: <Code2 size={16} />,
    type: "work" as const,
  },
  {
    year: "Jun 2024",
    title: "Agentic AI Intern",
    subtitle: "Itkars Technologies · Hybrid",
    description:
      "Architected autonomous AI agents for business process automation. Built real-time pipelines processing 10K+ records/day with 99.2% uptime. Reduced manual workload by 75%.",
    icon: <Bot size={16} />,
    type: "work" as const,
  },
  {
    year: "Jan 2025",
    title: "GenAI Intern",
    subtitle: "Infosys Springboard · Remote",
    description:
      "Designing multi-agent LangChain pipelines, RAG systems with vector database integration, and contributing to AI safety evaluation frameworks for enterprise-grade deployment.",
    icon: <Sparkles size={16} />,
    type: "work" as const,
  },
  {
    year: "2025",
    title: "GATE Qualified 2025",
    subtitle: "Graduate Aptitude Test in Engineering",
    description:
      "Qualified GATE 2025 in Computer Science, demonstrating strong theoretical foundations in algorithms, operating systems, databases, and computer architecture.",
    icon: <Trophy size={16} />,
    type: "achievement" as const,
  },
  {
    year: "2026",
    title: "GATE Qualified 2026",
    subtitle: "Graduate Aptitude Test in Engineering",
    description:
      "Qualified GATE again in 2026 — consecutive qualification reflecting continued technical depth and discipline across core computer science domains.",
    icon: <Trophy size={16} />,
    type: "achievement" as const,
  },
];

const FOCUS_ITEMS = [
  "Building agentic AI systems at scale",
  "GenAI product strategy and UX design",
  "Real-time LLM pipelines & RAG architectures",
  "Human-AI interaction and AI safety",
  "AI product management and system design",
];

const TYPE_COLORS: Record<string, string> = {
  education: "bg-primary/15 text-primary border-primary/30",
  work: "bg-accent/10 text-accent-foreground border-accent/20",
  achievement: "bg-primary/20 text-primary border-primary/40",
};

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-muted/10" data-ocid="about.section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">
            About Me
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            The intersection of AI,
            <br />
            <span className="gradient-text">product, and execution.</span>
          </h2>
        </motion.div>

        {/* Intro + focus grid */}
        <div className="grid md:grid-cols-[1fr,auto] gap-10 mb-20 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-xl"
          >
            {/* Avatar + name row */}
            <div className="flex items-center gap-4 mb-2">
              <KJAvatar size="md" withGlow />
              <div>
                <p className="font-display font-bold text-xl text-foreground">
                  Kaif Jamadar
                </p>
                <p className="text-sm font-mono text-primary">
                  AI Engineer · Product Builder
                </p>
              </div>
            </div>
            <p>
              I'm{" "}
              <span className="text-foreground font-medium">Kaif Jamadar</span>{" "}
              — a B.Tech CSE student, GenAI Intern at{" "}
              <span className="text-primary">Infosys Springboard</span>, and
              Agentic AI engineer at{" "}
              <span className="text-primary">Itkars Technologies</span>. I build
              AI systems that actually ship.
            </p>
            <p>
              My work spans real-time AI pipelines, multi-agent architectures,
              voice AI, and scalable GenAI backends — the full stack from
              backend infrastructure to product experience. But I think like a
              product manager: every system starts with a user problem, not a
              technology.
            </p>
            <p>
              I care deeply about AI UX — how humans interact with, trust, and
              feel about AI products. GATE Qualified in both 2025 and 2026, I
              bring both technical rigor and product intuition to every project
              I touch.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <MapPin size={14} className="text-primary flex-shrink-0" />
              <span className="text-sm font-mono text-muted-foreground">
                India · Open to remote roles
              </span>
            </div>
          </motion.div>

          {/* Current focus card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 border border-border/30 min-w-[240px] shadow-elevated"
            data-ocid="about.focus_card"
          >
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
              Current Focus
            </p>
            <ul className="space-y-3">
              {FOCUS_ITEMS.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-2">
            Timeline
          </p>
          <h3 className="font-display font-semibold text-2xl text-foreground">
            The journey so far.
          </h3>
        </motion.div>

        <div className="relative" data-ocid="about.timeline">
          {/* Vertical line */}
          <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border/40 to-transparent" />

          <div className="space-y-2">
            {TIMELINE_ITEMS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex gap-6 pb-8"
                data-ocid={`about.timeline.item.${index + 1}`}
              >
                {/* Icon node */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-[2.25rem] h-[2.25rem] rounded-full flex items-center justify-center border ${
                      item.type === "achievement"
                        ? "bg-primary/20 border-primary/50 text-primary"
                        : "glass-dark border-border/40 text-muted-foreground"
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1 pb-2 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h4 className="font-display font-semibold text-base text-foreground">
                      {item.title}
                    </h4>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
                        TYPE_COLORS[item.type]
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-primary mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
