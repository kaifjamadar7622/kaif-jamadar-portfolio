import { ProjectCard, ProjectModal } from "@/components/ProjectCard";
import { PROJECTS } from "@/data/portfolio";
import type { Project } from "@/types";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<Project | null>(null);

  const handleExpand = useCallback((project: Project) => {
    setExpanded(project);
  }, []);

  const handleClose = useCallback(() => {
    setExpanded(null);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!expanded) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [expanded, handleClose]);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden"
      data-ocid="projects.section"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-violet-500/3 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
          data-ocid="projects.header"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-xs font-mono text-primary">
                Featured Work
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-3">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                Premium case studies in AI product development — from problem
                discovery to shipped impact.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{PROJECTS.length} case studies</span>
                <ArrowRight className="w-4 h-4 text-primary" />
                <span className="text-primary">Click to explore</span>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onExpand={handleExpand}
            />
          ))}
        </div>

        {/* Bottom hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-muted-foreground/50 font-mono">
            Click any card to view the full case study
          </p>
        </motion.div>
      </div>

      {/* Expanded modal */}
      <AnimatePresence>
        {expanded && (
          <ProjectModal
            key={expanded.id}
            project={expanded}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
