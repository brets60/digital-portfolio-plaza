import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';
import { TIMELINE_EXPERIENCE } from '../../data/portfolioContent';
import { useTheme } from '../../context/ThemeContext';
import type { TimelineMilestone } from '../../types';

export const ExperienceSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [filter, setFilter] = useState<string>('ALL');

  const filterCategories = ['ALL', 'Achievements', 'Projects', 'Development', 'Internships', 'Education'];

  const filteredItems = filter === 'ALL'
    ? TIMELINE_EXPERIENCE
    : TIMELINE_EXPERIENCE.filter((item) => item.category === filter);

  const getCategoryBadge = (cat: TimelineMilestone['category']) => {
    switch (cat) {
      case 'Achievements':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-500 border border-amber-500/30">
            <Award className="w-3 h-3" />
            <span>Achievement</span>
          </span>
        );
      case 'Education':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
            <GraduationCap className="w-3 h-3" />
            <span>Education</span>
          </span>
        );
      case 'Projects':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-500 border border-blue-500/30">
            <Code2 className="w-3 h-3" />
            <span>Project Launch</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-500 border border-indigo-500/30">
            <Briefcase className="w-3 h-3" />
            <span>{cat}</span>
          </span>
        );
    }
  };

  return (
    <section id="experience" className={`py-24 border-t transition-colors ${
      isDark ? 'bg-[#0B0F19] border-slate-800/80' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-800/60 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Experience &amp; Development Journey
            </h2>
          </div>
          <p className={`text-sm max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Chronological engineering milestones, system prototype defenses, academic credentials, and project deliveries.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-14">
          {filterCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                filter === c
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : isDark
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 dark:border-slate-800 ml-3 sm:ml-28 space-y-10">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Left Date / Period (Desktop) */}
              <div className="hidden sm:block absolute -left-28 top-1 w-20 text-right">
                <span className={`font-mono text-sm font-bold block ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.year}
                </span>
                <span className={`font-mono text-[11px] block ${
                  isDark ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  {item.period}
                </span>
              </div>

              {/* Node Marker */}
              <div className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 transition-all ${
                isDark
                  ? 'bg-[#0B0F19] border-blue-500 group-hover:scale-125 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                  : 'bg-white border-blue-600 group-hover:scale-125 shadow-sm'
              }`} />

              {/* Card Container */}
              <div className={`rounded-2xl border p-6 transition-all ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                  : 'bg-white border-slate-200 hover:border-blue-200 shadow-sm'
              }`}>
                {/* Mobile Period & Category Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="sm:hidden font-mono text-xs font-bold text-blue-500">
                    {item.year} ({item.period})
                  </span>
                  {getCategoryBadge(item.category)}
                </div>

                <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-0.5 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-blue-500 font-semibold mb-3">
                  {item.organization}
                </div>

                <p className={`text-sm leading-relaxed mb-4 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>

                {/* Outcome Highlights */}
                {item.highlights.length > 0 && (
                  <div className="space-y-1.5 mb-4">
                    {item.highlights.map((highlight: string, hIdx: number) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/40 dark:border-slate-800/60">
                  {item.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        isDark
                          ? 'bg-slate-950 text-slate-400 border-slate-800'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
