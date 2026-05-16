import KJAvatar from "@/components/KJAvatar";
import { STATS } from "@/data/portfolio";
import type { Stat } from "@/types";
import { Activity, ArrowRight, Brain, Sparkles, Zap } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

// Floating AI metric card
interface FloatingCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
  x: string;
  y: string;
}

function FloatingCard({ icon, label, value, delay, x, y }: FloatingCardProps) {
  return (
    <motion.div
      className="absolute hidden lg:flex glass-dark rounded-xl px-4 py-3 border border-primary/20 items-center gap-3 shadow-elevated pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: {
          duration: 4 + delay,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
          delay: delay + 0.6,
        },
      }}
    >
      <div className="text-primary w-5 h-5 flex-shrink-0">{icon}</div>
      <div>
        <p className="text-xs text-muted-foreground font-mono leading-none mb-0.5">
          {label}
        </p>
        <p className="text-sm font-semibold text-foreground font-display leading-none">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  return (
    <motion.div
      className="glass rounded-xl px-5 py-4 border border-border/30 hover:border-primary/30 transition-smooth group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
      data-ocid={`hero.stat.${index + 1}`}
    >
      <p className="text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
        {stat.value}
        {stat.suffix && <span className="text-primary">{stat.suffix}</span>}
      </p>
      <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-1">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    const el = containerRef.current;
    el?.addEventListener("mousemove", handleMouseMove);
    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Gradient mesh background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Hero image layer */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-mesh.dim_1400x900.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.7 0.18 195 / 0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.6 0.14 210 / 0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Grid mesh pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.7 0.18 195) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.18 195) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Cursor glow */}
      {mounted && (
        <motion.div
          className="fixed w-[350px] h-[350px] rounded-full pointer-events-none z-[1] mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, oklch(0.7 0.18 195 / 0.05) 0%, transparent 70%)",
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          aria-hidden="true"
        />
      )}

      {/* Floating AI cards */}
      <FloatingCard
        icon={<Brain size={16} />}
        label="Model Accuracy"
        value="99.2% uptime"
        delay={1.2}
        x="72%"
        y="18%"
      />
      <FloatingCard
        icon={<Zap size={16} />}
        label="Response Latency"
        value="< 300ms"
        delay={1.5}
        x="68%"
        y="55%"
      />
      <FloatingCard
        icon={<Activity size={16} />}
        label="AI Pipelines"
        value="10K+ records/day"
        delay={1.8}
        x="75%"
        y="72%"
      />
      <FloatingCard
        icon={<Sparkles size={16} />}
        label="Token Reduction"
        value="35% optimized"
        delay={2.0}
        x="2%"
        y="30%"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-24 text-center">
        {/* Avatar */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          data-ocid="hero.avatar"
        >
          <KJAvatar size="lg" withGlow />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/25 mb-8"
          data-ocid="hero.badge"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            AI Engineer × Product Builder
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.04] tracking-tight text-foreground mb-6"
          data-ocid="hero.heading"
        >
          Building AI-first products
          <br />
          <span className="gradient-text">with real-world impact.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-muted-foreground font-body text-lg md:text-xl leading-relaxed mb-10"
          data-ocid="hero.subheading"
        >
          AI Engineer + Product Builder focused on GenAI systems, intelligent
          automation, and human-centered AI experiences — shipping products that
          people actually love to use.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            type="button"
            data-ocid="hero.view_projects_button"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-smooth hover:bg-primary/90 shadow-elevated btn-glow"
          >
            View Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>
          <button
            type="button"
            data-ocid="hero.contact_button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl glass border border-border/40 text-foreground font-semibold text-sm transition-smooth hover:border-primary/50 hover:text-primary"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Stats grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          data-ocid="hero.stats_grid"
        >
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.145 0.014 260 / 0.6))",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
