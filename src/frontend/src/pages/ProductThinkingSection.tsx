import { PRODUCT_THINKING } from "@/data/portfolio";
import {
  Brain,
  Cpu,
  GitBranch,
  Layers,
  Scale,
  Target,
  Timer,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const ICON_MAP: Record<string, React.ReactNode> = {
  "👤": <Users className="w-5 h-5" />,
  "🔄": <GitBranch className="w-5 h-5" />,
  "🤝": <Brain className="w-5 h-5" />,
  "⚖️": <Scale className="w-5 h-5" />,
  "🎯": <Target className="w-5 h-5" />,
  "📈": <TrendingUp className="w-5 h-5" />,
};

const PRINCIPLES = [
  { icon: <Users className="w-3.5 h-3.5" />, label: "User-First Design" },
  { icon: <GitBranch className="w-3.5 h-3.5" />, label: "Rapid Iteration" },
  {
    icon: <Scale className="w-3.5 h-3.5" />,
    label: "UX + Engineering Balance",
  },
  { icon: <Cpu className="w-3.5 h-3.5" />, label: "AI Reliability" },
  { icon: <Timer className="w-3.5 h-3.5" />, label: "Latency Optimization" },
  { icon: <Zap className="w-3.5 h-3.5" />, label: "Human-AI Interaction" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function ProductThinkingSection() {
  return (
    <section
      id="product-thinking"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-4">
            Product Thinking
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-5">
            How I Think About <span className="gradient-text">AI Products</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Strategy, execution, and taste. I approach product development from
            both sides of the table — user empathy and engineering rigor — to
            build AI systems that actually ship and matter.
          </p>
        </motion.div>

        {/* Hero philosophy statement */}
        <motion.div
          className="glass rounded-2xl p-8 sm:p-12 mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Decorative corner accent */}
          <div
            aria-hidden
            className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary/10 blur-3xl -translate-y-1/2 translate-x-1/2"
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-accent/8 blur-2xl translate-y-1/2 -translate-x-1/4"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/15 text-primary">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-primary text-sm font-mono tracking-wider uppercase">
                  Philosophy
                </span>
              </div>
              <p className="font-display text-2xl sm:text-3xl font-semibold text-foreground leading-tight mb-4">
                Building AI products people{" "}
                <span className="gradient-text">actually enjoy using</span>
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                The best AI system is one that earns trust through reliability,
                communicates its reasoning, and disappears into the background —
                letting users stay in flow. I build for delight, not demos.
              </p>
            </div>

            {/* Stats column */}
            <div className="flex lg:flex-col gap-6 lg:gap-4 flex-wrap">
              {[
                { label: "Products shipped", value: "4+" },
                { label: "User research cycles", value: "10+" },
                { label: "AI agents architected", value: "8+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center lg:text-right min-w-[120px]"
                >
                  <div className="font-display text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PRODUCT_THINKING.map((card, index) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              data-ocid={`product-thinking.card.${index + 1}`}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4 group cursor-default transition-smooth hover:border-primary/30 hover:shadow-elevated"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-smooth">
                {ICON_MAP[card.icon] ?? <Target className="w-5 h-5" />}
              </div>

              {/* Title + description */}
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold text-foreground mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Blockquote */}
        <motion.blockquote
          className="relative text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            aria-hidden
            className="text-primary/20 font-display text-8xl font-black leading-none select-none absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-none"
          >
            &#8220;
          </div>
          <div className="relative z-10 pt-4 px-8 sm:px-16">
            <p className="font-display text-xl sm:text-2xl font-medium text-foreground/90 leading-relaxed max-w-3xl mx-auto">
              The goal is not to build an AI that impresses engineers — it's to
              build one that{" "}
              <span className="gradient-text font-semibold">
                disappears into daily life and makes it measurably better.
              </span>
            </p>
            <footer className="mt-5 text-sm text-muted-foreground font-mono tracking-wider uppercase">
              — Kaif Jamadar
            </footer>
          </div>
        </motion.blockquote>

        {/* Principles pills row */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={pillVariants}
            className="w-full text-center text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1"
          >
            Core Principles
          </motion.p>
          {PRINCIPLES.map((principle) => (
            <motion.div
              key={principle.label}
              variants={pillVariants}
              data-ocid={`product-thinking.principle.${principle.label.toLowerCase().replace(/\s+/g, "-")}`}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm text-foreground/80 hover:border-primary/50 hover:text-primary transition-smooth cursor-default"
            >
              <span className="text-primary">{principle.icon}</span>
              {principle.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
