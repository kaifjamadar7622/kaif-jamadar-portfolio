import { EXPERIENCES } from "@/data/portfolio";
import type { Experience } from "@/types";
import {
  Briefcase,
  Calendar,
  Code2,
  MapPin,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const ACCENT_COLORS: Record<
  string,
  { dot: string; ring: string; badge: string }
> = {
  "infosys-genai": {
    dot: "bg-primary",
    ring: "ring-primary/30",
    badge: "bg-primary/10 text-primary border-primary/20",
  },
  "itkars-agentic": {
    dot: "bg-violet-400",
    ring: "ring-violet-400/30",
    badge: "bg-violet-400/10 text-violet-400 border-violet-400/20",
  },
  "tecspeak-web": {
    dot: "bg-emerald-400",
    ring: "ring-emerald-400/30",
    badge: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  },
  "codsoft-react": {
    dot: "bg-sky-400",
    ring: "ring-sky-400/30",
    badge: "bg-sky-400/10 text-sky-400 border-sky-400/20",
  },
};

const ICON_MAP: Record<string, typeof Zap> = {
  "infosys-genai": Zap,
  "itkars-agentic": TrendingUp,
  "tecspeak-web": Code2,
  "codsoft-react": Code2,
};

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const colors = ACCENT_COLORS[exp.id] ?? ACCENT_COLORS["infosys-genai"];
  const Icon = ICON_MAP[exp.id] ?? Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative pl-10 md:pl-14"
      data-ocid={`experience.item.${index + 1}`}
    >
      {/* Timeline connector dot */}
      <div
        className={`absolute left-0 top-6 w-5 h-5 rounded-full ring-4 ${colors.ring} ${colors.dot} flex items-center justify-center shadow-lg z-10`}
      >
        <div className="w-2 h-2 rounded-full bg-background/70" />
      </div>

      <div className="glass rounded-2xl p-6 md:p-8 border border-border/30 hover:border-primary/25 transition-smooth group shadow-subtle hover:shadow-elevated">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colors.badge} border`}
          >
            <Icon size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-display font-bold text-xl text-foreground">
                {exp.role}
              </h3>
              <span
                className={`text-xs font-mono px-2 py-0.5 rounded-full border ${colors.badge}`}
              >
                {exp.type}
              </span>
            </div>
            <p className="font-body font-semibold text-base text-foreground/80">
              {exp.company}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 text-xs text-muted-foreground font-mono flex-shrink-0">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {exp.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground font-body mb-5 leading-relaxed">
          {exp.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2.5 mb-6">
          {exp.highlights.map((h, i) => (
            <motion.li
              key={h}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 + i * 0.06 + 0.2 }}
              className="flex items-start gap-3 text-sm text-foreground/80 font-body"
            >
              <span
                className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`}
              />
              {h}
            </motion.li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-muted/60 border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-smooth"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
            Experience
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-3">
            Building real products,
            <br />
            <span className="gradient-text">solving real problems.</span>
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-md">
            From agentic AI pipelines to full-stack platforms — shipped in
            production environments.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div
            aria-hidden="true"
            className="absolute left-2 top-6 bottom-6 w-px"
            style={{
              background:
                "linear-gradient(to bottom, oklch(var(--primary) / 0.6), oklch(var(--primary) / 0.15), transparent)",
            }}
          />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
