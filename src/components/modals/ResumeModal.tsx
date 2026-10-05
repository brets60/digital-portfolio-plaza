import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, MapPin, Globe } from 'lucide-react';
import { DEVELOPER_PROFILE, FEATURED_PROJECTS, SKILL_GROUPS } from '../../data/portfolioContent';
import { useTheme } from '../../context/ThemeContext';
import type { SkillItem } from '../../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0 print:m-0 print:static">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className={`relative w-full max-w-4xl max-h-[92vh] rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col my-auto border print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black ${
            isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Action Bar */}
          <div className={`sticky top-0 z-20 backdrop-blur-xl border-b p-4 sm:p-6 flex items-center justify-between print:hidden ${
            isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'
          }`}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-mono text-xs font-semibold">
                CURRICULUM VITAE // TRISTAN DAVE PLAZA
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-sm"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className={`p-1.5 rounded-xl border transition-colors ${
                  isDark ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
                aria-label="Close Resume"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Formatted Resume Body */}
          <div className="p-8 sm:p-12 space-y-8 print:text-black">
            
            {/* Header Identity */}
            <div className="border-b pb-6 border-slate-800/60 dark:border-slate-800 print:border-black flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <img
                src={DEVELOPER_PROFILE.avatarUrl}
                alt={DEVELOPER_PROFILE.name}
                className="w-24 h-28 sm:w-28 sm:h-32 rounded-xl object-cover border-2 border-slate-700 shadow-md shrink-0 print:border-black"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {DEVELOPER_PROFILE.name}
                  </h1>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-blue-500/15 border border-blue-500/30 text-blue-500">
                    {DEVELOPER_PROFILE.age} Y/O
                  </span>
                </div>
                <div className="text-sm sm:text-base font-mono text-blue-500 font-semibold mb-2">
                  {DEVELOPER_PROFILE.role}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-slate-400 print:text-gray-700">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {DEVELOPER_PROFILE.exactLocation}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" /> {DEVELOPER_PROFILE.socialLinks.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> github.com/tristandaveplaza
                  </span>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <h2 className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest mb-2">
                // EXECUTIVE PROFILE
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {DEVELOPER_PROFILE.shortBio.join(' ')}
              </p>
            </div>

            {/* Technical Stack */}
            <div>
              <h2 className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest mb-3">
                // TECHNICAL STACK
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                {SKILL_GROUPS.map((g) => (
                  <div key={g.id} className={`p-3 rounded-lg border ${
                    isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <strong className="block mb-1 font-bold text-blue-500">[{g.categoryName}]</strong>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                      {g.skills.map((s: SkillItem) => s.name).join(' • ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Systems & Engineering Implementations */}
            <div>
              <h2 className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest mb-4">
                // FEATURED SYSTEM IMPLEMENTATIONS
              </h2>
              <div className="space-y-6">
                {FEATURED_PROJECTS.slice(0, 3).map((proj) => (
                  <div key={proj.id} className="border-l-2 border-blue-500 pl-4 space-y-1.5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold">{proj.title}</h3>
                      <span className="text-[11px] font-mono text-slate-400 font-semibold">{proj.category}</span>
                    </div>
                    <div className="text-[11px] font-mono text-blue-500">
                      Technologies: {proj.technologies.join(', ')}
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {proj.overview}
                    </p>
                    <ul className="text-xs space-y-1 pt-1 list-disc list-inside text-slate-400">
                      {proj.features.slice(0, 3).map((feat: string, fIdx: number) => (
                        <li key={fIdx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-widest mb-2">
                // EDUCATION &amp; CREDENTIALS
              </h2>
              <div className={`p-4 rounded-xl border text-xs ${
                isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="font-bold text-sm">{DEVELOPER_PROFILE.education.degree}</div>
                <div className="text-slate-400 mt-0.5">{DEVELOPER_PROFILE.education.institution} • {DEVELOPER_PROFILE.education.period}</div>
                <div className="text-blue-500 font-mono mt-1">{DEVELOPER_PROFILE.education.details}</div>
              </div>
            </div>

          </div>

          <div className="p-4 bg-slate-950/40 border-t border-slate-800 text-center text-[11px] font-mono text-slate-500 print:hidden">
            Document generated from live portfolio system • Tristan Dave Plaza
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
