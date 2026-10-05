export type ProjectCategory = 'ALL' | 'WEB' | 'FULL-STACK' | 'AI' | 'SYSTEMS' | 'ACADEMIC';

export interface ProjectDetail {
  id: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  status: 'Production' | 'Prototype' | 'Academic Defense' | 'Active Development';
  stats?: {
    metric: string;
    label: string;
  };
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architectureNotes: string[];
  challenges: string[];
  results: string[];
  imagePlaceholderGradient: string;
}

export interface SkillItem {
  name: string;
  iconName: string;
  description: string;
  proficiencyLevel: 'Expert' | 'Advanced' | 'Proficient';
  keyStack?: string[];
}

export interface SkillGroup {
  id: string;
  categoryName: 'FRONTEND' | 'BACKEND' | 'DATABASE' | 'TOOLS' | 'OTHER';
  description: string;
  skills: SkillItem[];
}

export interface TimelineMilestone {
  year: string;
  period: string;
  title: string;
  organization: string;
  category: 'Education' | 'Projects' | 'Development' | 'Internships' | 'Certifications' | 'Achievements';
  description: string;
  highlights: string[];
  tags: string[];
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  shortExplanation: string;
  deliverables: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badgeType: 'Award' | 'Academic' | 'Certification' | 'Competition';
  verified: boolean;
}

export interface CurrentlyBuildingItem {
  projectName: string;
  status: 'Planning' | 'In Development' | 'Testing' | 'Completed';
  technologies: string[];
  progressPercent: number;
  shortDescription: string;
  targetRelease: string;
  milestones: { name: string; completed: boolean }[];
}

export interface DeveloperProfile {
  name: string;
  monogram: string;
  role: string;
  age: number;
  avatarUrl: string;
  exactLocation: string;
  mindset: string;
  status: string;
  headline: string;
  subheadline: string;
  shortBio: string[];
  philosophy: string;
  location: string;
  basedIn: string;
  focus: string;
  careerInterests: string[];
  education: {
    degree: string;
    institution: string;
    period: string;
    details: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}
