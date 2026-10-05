import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Terminal } from 'lucide-react';
import { CURRENTLY_BUILDING } from '../../data/portfolioContent';
import { useTheme } from '../../context/ThemeContext';

export const CurrentlyBuilding: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="building" className={`py-24 border-t transition-colors ${
      isDark ? 'bg-[#0B0F19] border-slate-800/80' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-800/60 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Currently Building
            </h2>
          </div>
          <p className={`text-sm max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Live development initiatives in progress. See where engineering focus is actively allocated.
          </p>
        </div>

        {/* Live Project Card */}
        <div className={`p-6 sm:p-10 rounded-3xl border transition-all relative overflow-hidden ${
          isDark
            ? 'bg-[#111827] border-blue-500/30 shadow-2xl shadow-blue-950/20'
            : 'bg-white border-blue-200 shadow-xl shadow-slate-100'
        }`}>
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Summary & Progress Bar */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/15 border border-blue-500/40 text-blue-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span>{CURRENTLY_BUILDING.status.toUpperCase()}</span>
                </span>

                <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  • {CURRENTLY_BUILDING.targetRelease}
                </span>
              </div>

              <div>
                <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {CURRENTLY_BUILDING.projectName}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {CURRENTLY_BUILDING.shortDescription}
                </p>
              </div>

              {/* Progress Metric */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    Engineering Completion
                  </span>
                  <span className="font-bold text-blue-500 text-sm">
                    {CURRENTLY_BUILDING.progressPercent}%
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${CURRENTLY_BUILDING.progressPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-400"
                  />
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {CURRENTLY_BUILDING.technologies.map((t: string) => (
                  <span
                    key={t}
                    className={`text-xs font-mono px-3 py-1 rounded-lg border ${
                      isDark ? 'bg-slate-950 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Milestone Checklist */}
            <div className={`lg:col-span-5 p-6 rounded-2xl border space-y-4 ${
              isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between text-xs font-mono font-bold text-blue-500 border-b pb-3 border-slate-800/60 dark:border-slate-800">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>PHASE MILESTONES</span>
                </span>
                <span>SPRINT #04</span>
              </div>

              <div className="space-y-3">
                {CURRENTLY_BUILDING.milestones.map((milestone: { name: string; completed: boolean }, mIdx: number) => (
                  <div key={mIdx} className="flex items-center justify-between text-xs font-mono">
                    <span className={`flex items-center gap-2 ${
                      milestone.completed
                        ? isDark ? 'text-slate-200' : 'text-slate-800'
                        : isDark ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {milestone.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      ) : (
                        <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                      <span>{milestone.name}</span>
                    </span>

                    <span className={`text-[10px] px-1.5 py-0.5 rounded border ${
                      milestone.completed
                        ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                        : 'bg-slate-800/40 text-slate-500 border-slate-700/40'
                    }`}>
                      {milestone.completed ? 'DONE' : 'PENDING'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
