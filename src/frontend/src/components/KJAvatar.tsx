import { motion } from "motion/react";

interface KJAvatarProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  withGlow?: boolean;
}

const SIZE_MAP = {
  sm: { container: "w-16 h-16", text: "text-lg", ring: "p-[2px]" },
  md: { container: "w-24 h-24", text: "text-2xl", ring: "p-[2px]" },
  lg: { container: "w-28 h-28", text: "text-3xl", ring: "p-[3px]" },
};

export default function KJAvatar({
  size = "md",
  className = "",
  withGlow = false,
}: KJAvatarProps) {
  const s = SIZE_MAP[size];

  return (
    <motion.div
      className={`relative flex-shrink-0 ${className}`}
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.05,
      }}
    >
      {/* Outer gradient ring */}
      <motion.div
        className={`rounded-full ${s.ring}`}
        style={{
          background:
            "linear-gradient(135deg, oklch(0.7 0.18 195 / 0.8) 0%, oklch(0.55 0.14 210 / 0.4) 50%, oklch(0.28 0.02 260 / 0.6) 100%)",
        }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        {/* Inner glass circle */}
        <div
          className={`relative rounded-full ${s.container} flex items-center justify-center overflow-hidden`}
          style={{
            background:
              "linear-gradient(145deg, oklch(0.22 0.02 260 / 0.95) 0%, oklch(0.18 0.014 260 / 0.98) 100%)",
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, oklch(0.7 0.18 195 / 0.12) 0%, transparent 65%)",
            }}
          />
          {/* Initials */}
          <span
            className={`relative z-10 font-display font-bold ${s.text} tracking-tight select-none`}
            style={{
              background:
                "linear-gradient(135deg, oklch(0.75 0.18 195), oklch(0.95 0.01 260))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            KJ
          </span>
        </div>
      </motion.div>

      {/* Outer ambient glow ring (optional) */}
      {withGlow && (
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.7 0.18 195 / 0.18) 0%, transparent 70%)",
            filter: "blur(8px)",
            transform: "scale(1.35)",
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}
