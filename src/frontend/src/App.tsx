import AboutSection from "@/pages/AboutSection";
import ContactSection from "@/pages/ContactSection";
import DesignPhilosophySection from "@/pages/DesignPhilosophySection";
import ExperienceSection from "@/pages/ExperienceSection";
import HeroSection from "@/pages/HeroSection";
import ProductThinkingSection from "@/pages/ProductThinkingSection";
import ProjectsSection from "@/pages/ProjectsSection";
import SkillsSection from "@/pages/SkillsSection";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";

// Placeholder section wrapper
function Section({
  id,
  children,
  className = "",
}: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {loaded && (
        <div className="relative min-h-screen bg-background noise-overlay">
          {/* Ambient background orbs */}
          <div
            className="fixed inset-0 overflow-hidden pointer-events-none z-0"
            aria-hidden="true"
          >
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px]" />
            <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-accent/3 blur-[80px]" />
          </div>

          <Navbar />

          <main className="relative z-10">
            {/* Hero Section */}
            <Section id="hero" className="">
              <HeroSection />
            </Section>

            {/* About Section */}
            <Section id="about" className="">
              <AboutSection />
            </Section>

            {/* Projects Section */}
            <Section id="projects" className="">
              <ProjectsSection />
            </Section>

            {/* Product Thinking Section */}
            <Section id="thinking" className="">
              <ProductThinkingSection />
            </Section>

            {/* Experience Section */}
            <Section id="experience">
              <ExperienceSection />
            </Section>

            {/* Skills Section */}
            <Section id="skills">
              <SkillsSection />
            </Section>

            {/* Design Philosophy Section */}
            <Section id="design">
              <DesignPhilosophySection />
            </Section>

            {/* Contact Section */}
            <Section id="contact">
              <ContactSection />
            </Section>
          </main>

          {/* Footer */}
          <footer className="relative z-10 border-t border-border/20 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Kaif Jamadar. Built with love
                using{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                  className="text-primary/70 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  caffeine.ai
                </a>
              </p>
              <p className="text-xs text-muted-foreground/50 font-mono tracking-wider">
                kaifjamadar.ai
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
