export type ProjectCategory = 'all' | 'saas' | 'dashboard' | 'fintech' | 'ecommerce' | 'app-design' | 'healthcare';

export interface ProjectLinks {
  caseStudy?: string;
  prototype?: string;
  live?: string;
  figma?: string;
}

export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  heading: string;
  medium: string;
  client: string;
  year: string;
  roi: string;
  categoryLabel: string;
  challenge: string;
  solution: string;
  techStack: string;
  image: string;
  pills: string[];
  links: ProjectLinks;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar: string;
  linkedin: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ExperienceSubrole {
  title: string;
  dates: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  tenureBadge?: string;
  isCurrent?: boolean;
  growthNotice?: string;
  highlights?: string[];
  subroles?: ExperienceSubrole[];
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  institute: string;
  year: string;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
}
