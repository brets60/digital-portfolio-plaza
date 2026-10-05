import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { DEVELOPER_PROFILE } from '../../data/portfolioContent';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'services', 'building', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#0B0F19]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5'
            : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Personal Monogram Logo */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            aria-label="Tristan Dave Plaza Portfolio Home"
          >
            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-mono font-bold text-sm tracking-tight transition-all duration-300 ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-blue-400 group-hover:border-blue-500/60 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'bg-blue-50 border-blue-200 text-blue-600 group-hover:border-blue-400 group-hover:shadow-sm'
            }`}>
              {DEVELOPER_PROFILE.monogram}
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className={`font-semibold tracking-tight text-sm sm:text-base transition-colors ${
                  isDark ? 'text-white group-hover:text-blue-300' : 'text-slate-900 group-hover:text-blue-600'
                }`}>
                  {DEVELOPER_PROFILE.name}
                </span>
                <span className={`hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium ${
                  isDark
                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}>
                  DEV // ARCH
                </span>
              </div>
              <span className={`text-xs font-mono tracking-wide hidden sm:block ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Full-Stack &amp; Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-md ${
            isDark
              ? 'bg-slate-900/70 border-slate-800'
              : 'bg-slate-100/80 border-slate-200'
          }`}>
            {navLinks.map((link) => {
              const isCurrent = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isCurrent
                      ? isDark
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 shadow-[0_0_12px_rgba(59,130,246,0.25)]'
                        : 'bg-white text-blue-700 border border-blue-200 shadow-sm'
                      : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Group */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-all active:scale-95 ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                  : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-sm'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>Resume</span>
            </button>

            {/* Theme Switcher Toggle */}
            <ThemeToggle />

            {/* Direct Connect CTA */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] active:scale-95"
            >
              <span>Connect</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-slate-800/90 border-slate-700 text-slate-300 hover:text-white'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 ${
          isDark
            ? 'bg-[#0B0F19]/95 backdrop-blur-2xl border-slate-800'
            : 'bg-white/95 backdrop-blur-2xl border-slate-200'
        }`}>
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-slate-200 hover:bg-slate-800 hover:text-blue-300'
                    : 'text-slate-800 hover:bg-slate-100 hover:text-blue-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border ${
                isDark ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
            >
              <FileText className="w-4 h-4 text-amber-500" />
              <span>Review Resume (PDF)</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500"
            >
              <span>Get in Touch</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
