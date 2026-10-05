import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { FEATURED_PROJECTS } from '../../data/portfolioContent';
import { useTheme } from '../../context/ThemeContext';
import type { ProjectCategory, ProjectDetail } from '../../types';

interface ProjectsSectionProps {
  onViewDetails: (project: ProjectDetail) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onViewDetails }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');

  const categories: ProjectCategory[] = ['ALL', 'WEB', 'FULL-STACK', 'AI', 'SYSTEMS', 'ACADEMIC'];

  const filteredProjects = activeCategory === 'ALL'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className={`py-24 border-t transition-colors ${
      isDark ? 'bg-[#0B0F19] border-slate-800/80' : 'bg-slate-50/50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-800/60 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Featured Projects &amp; Systems
            </h2>
          </div>
          <p className={`text-sm max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Real-world software engineered for performance, verified by real stakeholders, and architected for maintainability.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.35)]'
                  : isDark
                  ? 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
