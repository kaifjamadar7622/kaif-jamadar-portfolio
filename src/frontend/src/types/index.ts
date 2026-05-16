export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
  stack: string[];
  category: string;
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  color: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
  logo?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: "expert" | "advanced" | "intermediate";
}

export interface ProductThinkingCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}
