import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { DEVELOPER_PROFILE } from '../../data/portfolioContent';
import { useTheme } from '../../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeStr(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={`border-t py-12 transition-colors ${
      isDark ? 'bg-[#080C14] border-slate-800/80 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/40 dark:border-slate-800/60">
          
          {/* Left: Monogram and Tagline */}
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl border flex items-center justify-center font-mono font-bold text-xs ${
              isDark ? 'bg-slate-900 border-slate-700 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
            }`}>
              {DEVELOPER_PROFILE.monogram}
            </div>
            <div>
              <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {DEVELOPER_PROFILE.name}
              </div>
              <div className="text-xs font-mono text-slate-500">
                Designed &amp; Built with passion for technology.
              </div>
            </div>
          </div>

          {/* Center: Location & Time Telemetry */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
            }`}>
              <Terminal className="w-3 h-3 text-blue-500" />
              <span>Kalagutay, Base Camp • UTC+8: {timeStr || '02:30:00'}</span>
            </div>
          </div>

          {/* Right: Social Handles & Back To Top */}
          <div className="flex items-center gap-2">
            <a
              href={DEVELOPER_PROFILE.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={`p-2 rounded-lg border transition-colors ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={DEVELOPER_PROFILE.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={`p-2 rounded-lg border transition-colors ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-blue-400' : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-blue-600'
              }`}
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className={`p-2 rounded-lg border transition-colors ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-blue-400' : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-blue-600'
              }`}
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {DEVELOPER_PROFILE.name}. All rights reserved.
          </div>
          <div>
            React 19 • TypeScript • Tailwind CSS • Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
};
