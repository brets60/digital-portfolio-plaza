import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Cpu, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { useTheme } from '../../context/ThemeContext';
import type { ProjectDetail } from '../../types';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetail | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col my-auto border transition-colors ${
            isDark ? 'bg-[#0F172A] border-slate-700/80 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Header */}
          <div className={`sticky top-0 z-20 backdrop-blur-xl border-b p-6 flex items-start justify-between ${
            isDark ? 'bg-[#0F172A]/95 border-slate-800' : 'bg-white/95 border-slate-200'
          }`}>
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-blue-500 uppercase tracking-wider mb-1">
                <span>// PROJECT SPECIFICATION • {project.category}</span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-500 font-bold">{project.status}</span>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-colors ${
                isDark ? 'bg-slate-800 text-slate-400 hover:text-white border-slate-700' : 'bg-slate-100 text-slate-600 hover:text-slate-900 border-slate-200'
              }`}
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Visual Graphic Banner */}
            <div className={`relative h-44 sm:h-52 w-full rounded-xl bg-gradient-to-r ${project.imagePlaceholderGradient} border p-6 flex flex-col justify-end overflow-hidden ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((t: string) => (
                    <span key={t} className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-950/80 text-white border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-slate-300 font-mono">
                  Production-grade deployment ready architecture
                </div>
              </div>
            </div>

            {/* Overview & Problem / Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-5 rounded-xl border ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <h4 className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Problem</span>
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.problem}
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <h4 className="text-xs font-mono font-bold text-blue-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Engineering Solution</span>
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Executive Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-blue-500 uppercase tracking-wider">
                // EXECUTIVE OVERVIEW
              </h4>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {project.overview}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-indigo-500 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Key System Features</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature: string, fIdx: number) => (
                  <div key={fIdx} className={`p-3 rounded-lg border flex items-start gap-2.5 text-xs ${
                    isDark ? 'bg-slate-900/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Notes */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-blue-500 uppercase tracking-wider flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                <span>System Architecture &amp; Data Flow</span>
              </h4>
              <ul className="space-y-2">
                {project.architectureNotes.map((note: string, nIdx: number) => (
                  <li key={nIdx} className={`text-xs flex items-start gap-2 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Technical Challenges Overcome
                </h4>
                <ul className="space-y-1.5 text-xs">
                  {project.challenges.map((c: string, cIdx: number) => (
                    <li key={cIdx} className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                      • {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider">
                  Measurable Results &amp; Impact
                </h4>
                <ul className="space-y-1.5 text-xs">
                  {project.results.map((r: string, rIdx: number) => (
                    <li key={rIdx} className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                      ✓ {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className={`sticky bottom-0 backdrop-blur-xl border-t p-4 sm:p-6 flex flex-wrap items-center justify-between gap-3 ${
            isDark ? 'bg-[#0F172A]/95 border-slate-800' : 'bg-white/95 border-slate-200'
          }`}>
            <span className="text-xs font-mono text-slate-500">
              Verified by Tristan Dave Plaza
            </span>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border transition-colors ${
                    isDark ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}

              <button
                onClick={onClose}
                className={`px-4 py-2 rounded-xl text-xs font-medium border transition-colors ${
                  isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
