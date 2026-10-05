import React from 'react';
import { User, MapPin, GraduationCap, Compass, CheckCircle2 } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../../data/portfolioContent';
import { useTheme } from '../../context/ThemeContext';

export const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`py-24 border-t transition-colors ${
      isDark ? 'bg-[#0B0F19] border-slate-800/80' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-slate-800/60 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              About Me
            </h2>
          </div>
          <p className={`text-sm max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Bridging technical precision, user-centered product design, and real-world software architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
              {DEVELOPER_PROFILE.shortBio.map((paragraph: string, idx: number) => (
                <p key={idx} className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Development Philosophy Callout */}
            <div className={`p-6 rounded-2xl border transition-all ${
              isDark
                ? 'bg-slate-900/60 border-slate-800'
                : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-500 uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" />
                <span>Development Philosophy</span>
              </div>
              <blockquote className={`text-sm sm:text-base font-medium italic leading-relaxed ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}>
                &ldquo;{DEVELOPER_PROFILE.philosophy}&rdquo;
              </blockquote>
            </div>

            {/* Education Summary */}
            <div className={`p-6 rounded-2xl border transition-all ${
              isDark
                ? 'bg-slate-900/40 border-slate-800'
                : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-indigo-500 uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Education &amp; Academic Focus</span>
              </div>
              <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {DEVELOPER_PROFILE.education.degree}
              </h3>
              <div className="text-xs font-mono text-blue-500 mt-0.5">
                {DEVELOPER_PROFILE.education.institution} • {DEVELOPER_PROFILE.education.period}
              </div>
              <p className={`text-xs mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {DEVELOPER_PROFILE.education.details}
              </p>
            </div>
          </div>

          {/* Right Column: Developer Portrait & Snapshot Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`rounded-2xl border p-6 sm:p-7 transition-all shadow-xl relative overflow-hidden ${
              isDark
                ? 'bg-[#111827] border-slate-700/80 shadow-black/40'
                : 'bg-white border-slate-200 shadow-slate-200'
            }`}>
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Header Label */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 dark:border-slate-800 mb-5">
                <span className="font-mono text-xs font-bold text-blue-500 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>Developer Identity</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-semibold">
                  AUTHENTIC PROFILE
                </span>
              </div>

              {/* Photo Showcase */}
              <div className="relative mb-6 group">
                <div className="relative aspect-[3/4] w-full max-w-[280px] sm:max-w-[320px] mx-auto overflow-hidden rounded-2xl border-2 border-slate-700/80 shadow-2xl bg-slate-900 ring-2 ring-blue-500/20">
                  <img
                    src={DEVELOPER_PROFILE.avatarUrl}
                    alt="Tristan Dave Plaza - Whole Face"
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Photo Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                    <span className="px-2 py-1 rounded-md bg-slate-900/95 backdrop-blur-md text-white border border-slate-700 font-bold">
                      {DEVELOPER_PROFILE.age} Years Old
                    </span>
                    <span className="px-2 py-1 rounded-md bg-blue-900/90 backdrop-blur-md text-blue-200 border border-blue-700/70 font-semibold">
                      Business-Minded
                    </span>
                  </div>
                </div>
              </div>

              {/* Snapshot Details Grid */}
              <div className="space-y-3.5 text-xs font-mono">
                <div>
                  <span className={`block uppercase tracking-wider text-[11px] mb-0.5 font-medium ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    FULL NAME
                  </span>
                  <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {DEVELOPER_PROFILE.name}
                  </span>
                </div>

                <div>
                  <span className={`block uppercase tracking-wider text-[11px] mb-0.5 font-medium ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    MINDSET &amp; APPROACH
                  </span>
                  <span className={`text-xs font-semibold ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
                    {DEVELOPER_PROFILE.mindset}
                  </span>
                </div>

                <div>
                  <span className={`block uppercase tracking-wider text-[11px] mb-0.5 font-medium ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    RESIDENCE &amp; LOCATION
                  </span>
                  <span className={`text-xs font-bold flex items-center gap-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{DEVELOPER_PROFILE.exactLocation}</span>
                  </span>
                </div>

                <div>
                  <span className={`block uppercase tracking-wider text-[11px] mb-0.5 font-medium ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    CORE FOCUS
                  </span>
                  <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {DEVELOPER_PROFILE.focus}
                  </span>
                </div>
              </div>

              {/* Career Interests List */}
              <div className="mt-6 pt-5 border-t border-slate-800/60 dark:border-slate-800">
                <span className={`block uppercase tracking-wider font-mono text-[11px] mb-2.5 font-semibold ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Core Competencies &amp; Focus
                </span>
                <ul className="space-y-1.5">
                  {DEVELOPER_PROFILE.careerInterests.map((interest: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{interest}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
