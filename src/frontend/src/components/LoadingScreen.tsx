import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"loading" | "reveal" | "exit">("loading");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"), 400);
    const t2 = setTimeout(() => setPhase("exit"), 1200);
    const t3 = setTimeout(() => onComplete(), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const letters = "Kaif Jamadar"
    .split("")
    .map((char, i) => ({ char, id: `letter-${i}` }));

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px]" />
          </div>

          <div className="relative flex flex-col items-center gap-6">
            {/* Animated logo mark */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-glow"
            >
              <span className="text-primary font-mono font-bold text-xl">
                K
              </span>
            </motion.div>

            {/* Name reveal */}
            <div className="flex gap-0 overflow-hidden" aria-hidden="true">
              {letters.map(({ char, id }, i) => (
                <motion.span
                  key={id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={phase !== "loading" ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: i * 0.03,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`font-display font-semibold text-2xl tracking-tight ${
                    char === " " ? "w-2" : "text-foreground"
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={phase !== "loading" ? { opacity: 0.5 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="text-sm text-muted-foreground font-body tracking-widest uppercase"
            >
              AI Product Builder
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: phase === "loading" ? "40%" : "100%",
                opacity: 1,
              }}
              transition={{
                duration: phase === "loading" ? 0.3 : 0.6,
                ease: "easeInOut",
              }}
              className="h-px bg-primary/60 rounded-full"
              style={{ minWidth: 80, maxWidth: 160 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
