import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { DEVELOPER_PROFILE } from '../../data/portfolioContent';
import { useTheme } from '../../context/ThemeContext';

interface HeroSectionProps {
  onOpenTerminal?: () => void;
  onAddToast: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onAddToast }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DEVELOPER_PROFILE.socialLinks.email);
      setCopiedEmail(true);
      onAddToast('success', 'Email Copied', `${DEVELOPER_PROFILE.socialLinks.email} copied to clipboard.`);
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch {
      onAddToast('info', 'Developer Email', DEVELOPER_PROFILE.socialLinks.email);
    }
  };

  return (
    <section id="hero" className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors ${
      isDark ? 'bg-tech-grid-dark' : 'bg-tech-grid-light'
    }`}>
      {/* Subtle ambient lighting */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[130px] pointer-events-none ${
        isDark ? 'bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-transparent' : 'bg-gradient-to-tr from-blue-200/40 via-indigo-200/30 to-transparent'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Branding & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Identity Profile Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full border backdrop-blur-md shadow-sm ${
                isDark ? 'bg-slate-900/90 border-slate-700/80' : 'bg-white border-slate-200'
              }`}>
                <img
                  src={DEVELOPER_PROFILE.avatarUrl}
                  alt={DEVELOPER_PROFILE.name}
                  className="w-7 h-7 rounded-full object-cover ring-2 ring-blue-500/80 shadow-inner"
                />
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{DEVELOPER_PROFILE.name}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-blue-500 font-semibold">{DEVELOPER_PROFILE.age} y/o</span>
                  <span className="text-slate-500">•</span>
                  <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>Kalagutay, Base Camp</span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Engineering{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400">
                Scalable Systems
              </span>{' '}
              with a Sharp Business Mindset.
            </h1>

            {/* Sub-headline */}
            <p className={`text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {DEVELOPER_PROFILE.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.35)] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm border transition-all active:scale-[0.98] ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-500'
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-sm'
                }`}
              >
                <span>Let&apos;s Connect</span>
                <ChevronRight className="w-4 h-4 text-blue-500" />
              </a>
            </div>

            {/* Social Links & Verified Developer Handles */}
            <div className="flex items-center gap-3 pt-6 border-t w-full border-slate-800/60 dark:border-slate-800/80">
              <span className={`text-xs font-mono font-medium mr-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                CONNECT:
              </span>

              <a
                href={DEVELOPER_PROFILE.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm'
                }`}
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={DEVELOPER_PROFILE.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-blue-400 hover:text-blue-300 hover:border-slate-700'
                    : 'bg-white border-slate-200 text-blue-600 hover:text-blue-700 hover:border-slate-300 shadow-sm'
                }`}
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-mono transition-all active:scale-95 ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm'
                }`}
                title="Copy developer email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-blue-500" />}
                <span>{copiedEmail ? 'Copied' : DEVELOPER_PROFILE.socialLinks.email}</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Tristan Dave Plaza Portrait (Whole Face) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              {/* Subtle ambient lighting behind picture */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-sky-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

              {/* Portrait Frame */}
              <div className={`relative rounded-3xl overflow-hidden border-2 shadow-2xl aspect-[3/4] transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-700/80 shadow-black/60 ring-1 ring-white/10'
                  : 'bg-white border-slate-200 shadow-slate-300'
              }`}>
                <img
                  src={DEVELOPER_PROFILE.avatarUrl}
                  alt={DEVELOPER_PROFILE.name}
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
