import {
  Accessibility,
  Eye,
  Heart,
  LayoutTemplate,
  Lightbulb,
  Minus,
  MousePointer2,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

interface Principle {
  id: string;
  title: string;
  description: string;
  Icon: typeof Minus;
}

const PRINCIPLES: Principle[] = [
  {
    id: "simplicity",
    title: "Simplicity",
    description:
      "Remove everything that doesn't serve the user. Complexity is a cost — every element must earn its place.",
    Icon: Minus,
  },
  {
    id: "usability",
    title: "Usability",
    description:
      "A feature that confuses is a feature that fails. Intuitive interaction design over clever engineering.",
    Icon: MousePointer2,
  },
  {
    id: "ai-human",
    title: "AI–Human Interaction",
    description:
      "AI should feel like a trusted collaborator, not a black box. Transparency and predictability build trust.",
    Icon: Lightbulb,
  },
  {
    id: "design-taste",
    title: "Design Taste",
    description:
      "Good taste is a discipline. Typography, spacing, motion, and hierarchy communicate before text does.",
    Icon: Eye,
  },
  {
    id: "emotional-ux",
    title: "Emotional UX",
    description:
      "Products create feelings. I design for delight, relief, confidence — the full emotional spectrum of a user's journey.",
    Icon: Heart,
  },
  {
    id: "accessibility",
    title: "Accessibility",
    description:
      "Inclusive design is better design. Constraints force clarity and benefit everyone — not just those who need it most.",
    Icon: Accessibility,
  },
  {
    id: "performance",
    title: "Performance",
    description:
      "Every 100ms matters. Speed is a feature, latency is a tax — I optimize for the experience users actually feel.",
    Icon: Zap,
  },
  {
    id: "product-clarity",
    title: "Product Clarity",
    description:
      "The best products are opinionated. Clear scope, sharp positioning, and ruthless focus on the core use case.",
    Icon: LayoutTemplate,
  },
];

export default function DesignPhilosophySection() {
  return (
    <section id="design" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section tag */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-sm font-mono text-primary uppercase tracking-widest mb-6 text-center"
        >
          Design Philosophy
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-center text-foreground mb-6 leading-tight max-w-3xl mx-auto"
        >
          Building AI products{" "}
          <span className="gradient-text">people actually enjoy</span> using.
        </motion.h2>

        {/* Manifesto quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <p className="text-base md:text-lg text-muted-foreground font-body italic leading-relaxed">
            &ldquo;I believe the best AI products are invisible in their
            complexity and obvious in their value — built at the intersection of
            empathy, engineering, and taste.&rdquo;
          </p>
          <cite className="block mt-4 text-sm font-mono text-primary/70 not-italic">
            — Kaif Jamadar
          </cite>
        </motion.blockquote>

        {/* Principles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              data-ocid={`design.principle.${i + 1}`}
              className="glass rounded-2xl p-5 border border-border/30 hover:border-primary/25 transition-smooth group shadow-subtle hover:shadow-elevated flex flex-col gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-smooth">
                <p.Icon size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm text-foreground mb-1.5">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
