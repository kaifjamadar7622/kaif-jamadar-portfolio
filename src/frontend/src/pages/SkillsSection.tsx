import { SKILL_CATEGORIES } from "@/data/portfolio";
import type { SkillCategory } from "@/types";
import {
  Brain,
  Compass,
  Database,
  Monitor,
  Server,
  Settings,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const CATEGORY_ICONS: Record<string, typeof Brain> = {
  "ai-ml": Brain,
  genai: Sparkles,
  backend: Server,
  frontend: Monitor,
  databases: Database,
  "product-design": Compass,
  devops: Settings,
};

const LEVEL_COLORS: Record<string, string> = {
  expert: "text-primary border-primary/30 bg-primary/8",
  advanced: "text-foreground/80 border-border/40 bg-muted/50",
  intermediate: "text-muted-foreground border-border/30 bg-muted/30",
};

function CategoryCard({ cat, index }: { cat: SkillCategory; index: number }) {
  const Icon = CATEGORY_ICONS[cat.id] ?? Brain;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="glass rounded-2xl p-6 border border-border/30 hover:border-primary/25 transition-smooth group shadow-subtle hover:shadow-elevated flex flex-col gap-5"
      data-ocid={`skills.category.${index + 1}`}
    >
      {/* Category header */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-smooth">
          <Icon size={16} className="text-primary" />
        </div>
        <h3 className="font-display font-semibold text-base text-foreground">
          {cat.label}
        </h3>
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill) => (
          <motion.span
            key={skill.name}
            whileHover={{ scale: 1.04 }}
            className={`text-xs font-mono px-2.5 py-1 rounded-full border cursor-default transition-smooth hover:border-primary/40 hover:text-primary ${LEVEL_COLORS[skill.level]}`}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative bg-muted/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
            Skills & Expertise
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-3">
            Tools, frameworks,
            <br />
            <span className="gradient-text">and systems I work with.</span>
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-md">
            From model training to production deployment — full-stack fluency
            across the AI product lifecycle.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-muted-foreground/50 font-mono mt-10"
        >
          Skill depth indicator — expert · advanced · intermediate
        </motion.p>
      </div>
    </section>
  );
}
