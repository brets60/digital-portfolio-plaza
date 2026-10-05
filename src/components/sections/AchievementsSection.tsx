import React from 'react';
import { CheckCircle2, ShieldAlert, Calendar } from 'lucide-react';
import { ACHIEVEMENTS_LIST } from '../../data/portfolioContent';
import { useTheme } from '../../context/ThemeContext';
import type { AchievementItem } from '../../types';

export const AchievementsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="achievements" className={`py-24 border-t transition-colors ${
      isDark ? 'bg-[#0B0F19] border-slate-800/80' : 'bg-slate-50/50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-800/60 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Achievements &amp; Certifications
            </h2>
          </div>
          <p className={`text-sm max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Recognitions from academic defense juries, collegiate engineering competitions, and verified technical programs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS_LIST.map((item: AchievementItem) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-blue-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider font-semibold ${
                    item.badgeType === 'Award'
                      ? 'bg-amber-500/10 text-amber-500 border-amber-500/30'
                      : item.badgeType === 'Academic'
                      ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30'
                      : item.badgeType === 'Competition'
                      ? 'bg-blue-500/10 text-blue-500 border-blue-500/30'
                      : 'bg-slate-500/10 text-slate-400 border-slate-500/30'
                  }`}>
                    {item.badgeType}
                  </span>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className={`text-base font-bold tracking-tight mb-1 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-blue-500 mb-3">
                  {item.issuer}
                </div>

                <p className={`text-xs leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>

              {/* Verified or Placeholder Notice */}
              <div className="mt-6 pt-3 border-t border-slate-800/40 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-mono">
                {item.verified ? (
                  <span className="text-emerald-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>VERIFIED RECORD</span>
                  </span>
                ) : (
                  <span className="text-slate-500 flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3" />
                    <span>IN-PROGRESS TRACK</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
