import { ExternalLink, FileText, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

const CONTACT_CARDS = [
  {
    id: "linkedin",
    icon: Linkedin,
    platform: "LinkedIn",
    handle: "kaif-jamadar-0385a2258",
    description: "Connect professionally",
    href: "https://www.linkedin.com/in/kaif-jamadar-0385a2258",
    external: true,
  },
  {
    id: "github",
    icon: Github,
    platform: "GitHub",
    handle: "kaifjamadar7622",
    description: "Explore the code",
    href: "https://github.com/kaifjamadar7622",
    external: true,
  },
  {
    id: "email",
    icon: Mail,
    platform: "Email",
    handle: "kaifjamadar7622@gmail.com",
    description: "Shoot me a message",
    href: "mailto:kaifjamadar7622@gmail.com",
    external: false,
  },
  {
    id: "resume",
    icon: FileText,
    platform: "Resume",
    handle: "View on Google Drive",
    description: "Download my latest resume PDF",
    href: "https://drive.google.com/file/d/16r1f9jnSDvmj_T3LPh0ytvlvwnMDtB1w/view?usp=drive_link",
    external: true,
    isPrimary: true,
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Section ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headingVariants}
        >
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">
            Get in touch
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 leading-tight">
            Let's Build <span className="gradient-text">Something</span>
            <br />
            Remarkable.
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-md mx-auto leading-relaxed">
            Open to AI product roles, internships, and high-impact
            collaborations. If you're building something ambitious — let's talk.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          data-ocid="contact.cards_list"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {CONTACT_CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isPrimary = "isPrimary" in card && card.isPrimary;

            return (
              <motion.a
                key={card.id}
                data-ocid={`contact.${card.id}_card`}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className={`group relative flex items-start gap-4 p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isPrimary
                    ? "glass border-primary/30 hover:border-primary/60 btn-glow"
                    : "glass border-border/30 hover:border-primary/30"
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                    isPrimary
                      ? "bg-primary/15 border border-primary/30 group-hover:bg-primary/25"
                      : "bg-muted/40 border border-border/30 group-hover:bg-primary/10 group-hover:border-primary/30"
                  }`}
                >
                  <Icon
                    size={22}
                    className={`transition-colors duration-200 ${
                      isPrimary
                        ? "text-primary"
                        : "text-muted-foreground group-hover:text-primary"
                    }`}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`font-display font-semibold text-sm ${
                        isPrimary ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {card.platform}
                    </span>
                    {card.external && (
                      <ExternalLink
                        size={12}
                        className="text-muted-foreground/50 group-hover:text-primary/60 transition-colors duration-200"
                      />
                    )}
                  </div>
                  <p className="text-foreground font-mono text-xs truncate mb-1">
                    {card.handle}
                  </p>
                  <p className="text-muted-foreground text-xs font-body">
                    {card.description}
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0">
                  <span className="text-primary/70 text-sm font-mono">→</span>
                </div>

                {idx === 0 && (
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at top left, oklch(0.7 0.18 195 / 0.04) 0%, transparent 60%)",
                    }}
                  />
                )}
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom hint */}
        <motion.p
          className="text-center text-muted-foreground/40 text-xs font-mono mt-10 tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Response within 24 hours · Currently open to opportunities
        </motion.p>
      </div>
    </section>
  );
}
