import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { useTheme } from '../../context/ThemeContext';
import type { ProjectDetail } from '../../types';

interface ProjectCardProps {
  project: ProjectDetail;
  onViewDetails: (project: ProjectDetail) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
        isDark
          ? 'bg-slate-900/80 border-slate-800 hover:border-blue-500/50 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.2)]'
          : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-xl'
      }`}
    >
      <div>
        {/* Project Header / Simulated Visual Graphic */}
        <div className={`relative h-48 w-full bg-gradient-to-br ${project.imagePlaceholderGradient} border-b p-5 flex flex-col justify-between overflow-hidden ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          {/* Subtle grid in thumbnail */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          <div className="flex items-center justify-between relative z-10">
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-slate-950/70 backdrop-blur-md text-blue-400 border border-blue-500/30">
              {project.category}
            </span>

            {project.stats && (
              <div className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700 text-right font-mono">
                <span className="text-xs font-bold text-amber-400 block">{project.stats.metric}</span>
                <span className="text-[9px] text-slate-400 block">{project.stats.label}</span>
              </div>
            )}
          </div>

          <div className="relative z-10">
            <span className="text-xs font-mono text-emerald-400 font-semibold block mb-1">
              {project.status.toUpperCase()}
            </span>
            <div className="text-lg font-bold text-white tracking-tight drop-shadow-sm line-clamp-1">
              {project.title}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <p className={`text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
                  isDark
                    ? 'bg-slate-950 text-slate-300 border-slate-800'
                    : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className={`p-4 sm:px-6 sm:pb-6 pt-4 border-t flex items-center justify-between gap-2 ${
        isDark ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-100 bg-slate-50/50'
      }`}>
        {/* View Details Primary Action */}
        <button
          onClick={() => onViewDetails(project)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm active:scale-95"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View Details</span>
        </button>

        {/* External Links */}
        <div className="flex items-center gap-1.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm'
              }`}
              title="View GitHub Repository"
              aria-label={`GitHub repo for ${project.title}`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-blue-400 hover:text-blue-300 hover:border-slate-700'
                  : 'bg-white border-slate-200 text-blue-600 hover:text-blue-700 shadow-sm'
              }`}
              title="Live Demo"
              aria-label={`Live Demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
