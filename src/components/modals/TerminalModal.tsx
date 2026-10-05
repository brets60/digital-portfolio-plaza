import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CornerDownLeft } from 'lucide-react';
import { DEVELOPER_PROFILE, FEATURED_PROJECTS, SKILL_GROUPS } from '../../data/portfolioContent';
import { useTheme } from '../../context/ThemeContext';
import type { SkillItem } from '../../types';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-blue-400 font-bold">
            Tristan Dave Plaza — Interactive Developer Console v2.6.0
          </div>
          <div className="text-slate-400 text-xs">
            Type <span className="text-amber-400 font-bold">&apos;help&apos;</span> to see available commands or explore the portfolio via CLI.
          </div>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="text-blue-400 font-bold">Available System Commands:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              <div><strong className="text-amber-400">about</strong> : Bio &amp; philosophy</div>
              <div><strong className="text-amber-400">skills</strong> : List technical stack</div>
              <div><strong className="text-amber-400">projects</strong> : Featured systems</div>
              <div><strong className="text-amber-400">experience</strong> : Timeline milestones</div>
              <div><strong className="text-amber-400">contact</strong> : Reach out info</div>
              <div><strong className="text-amber-400">github</strong> : Open GitHub link</div>
              <div><strong className="text-amber-400">theme</strong> : Toggle dark/light</div>
              <div><strong className="text-amber-400">resume</strong> : Open formatted CV</div>
              <div><strong className="text-amber-400">clear</strong> : Clear terminal logs</div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="text-xs text-slate-300 space-y-1">
            <div className="font-bold text-white">
              {DEVELOPER_PROFILE.name} ({DEVELOPER_PROFILE.age} y/o) — {DEVELOPER_PROFILE.role}
            </div>
            <div><span className="text-blue-400 font-semibold">Location:</span> {DEVELOPER_PROFILE.exactLocation}</div>
            <div><span className="text-blue-400 font-semibold">Mindset:</span> {DEVELOPER_PROFILE.mindset}</div>
            <div><span className="text-blue-400 font-semibold">Focus:</span> {DEVELOPER_PROFILE.focus}</div>
            <div className="text-slate-400 italic mt-1">&ldquo;{DEVELOPER_PROFILE.philosophy}&rdquo;</div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs text-slate-300">
            {SKILL_GROUPS.map((g) => (
              <div key={g.id}>
                <span className="text-blue-400 font-bold">[{g.categoryName}]:</span>{' '}
                <span className="text-slate-200">{g.skills.map((s: SkillItem) => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs text-slate-300">
            {FEATURED_PROJECTS.map((p, i) => (
              <div key={p.id} className="p-1.5 rounded bg-slate-900 border border-slate-800">
                <div className="font-bold text-white">{i + 1}. {p.title} <span className="text-[10px] text-blue-400 font-mono">[{p.category}]</span></div>
                <div className="text-slate-400 text-[11px]">{p.shortDescription}</div>
                <div className="text-amber-400 text-[10px] font-mono">Stack: {p.technologies.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-xs text-slate-300 space-y-1">
            <div>Email: <a href={`mailto:${DEVELOPER_PROFILE.socialLinks.email}`} className="text-blue-400 underline">{DEVELOPER_PROFILE.socialLinks.email}</a></div>
            <div>GitHub: <a href={DEVELOPER_PROFILE.socialLinks.github} target="_blank" rel="noreferrer" className="text-blue-400 underline">{DEVELOPER_PROFILE.socialLinks.github}</a></div>
            <div>LinkedIn: <a href={DEVELOPER_PROFILE.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">{DEVELOPER_PROFILE.socialLinks.linkedin}</a></div>
          </div>
        );
        break;

      case 'github':
        window.open(DEVELOPER_PROFILE.socialLinks.github, '_blank');
        outputNode = <div className="text-xs text-emerald-400">Opening GitHub profile in a new tab...</div>;
        break;

      case 'theme':
        toggleTheme();
        outputNode = <div className="text-xs text-amber-400">Theme switched. Current mode: {theme === 'dark' ? 'light' : 'dark'}</div>;
        break;

      case 'resume':
      case 'cat resume':
        if (onOpenResume) onOpenResume();
        outputNode = <div className="text-xs text-emerald-400">Opening full curriculum vitae preview...</div>;
        break;

      case 'clear':
        setLogs([]);
        setInputVal('');
        return;

      case 'sudo':
      case 'sudo su':
        outputNode = <div className="text-xs text-rose-400 font-mono">Permission denied: Tristan Dave Plaza is already root system administrator.</div>;
        break;

      default:
        outputNode = (
          <div className="text-xs text-rose-400">
            Command not recognized: &apos;{cmd}&apos;. Type <span className="font-bold text-amber-300">&apos;help&apos;</span> for commands.
          </div>
        );
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: inputVal,
        output: outputNode,
      },
    ]);
    setInputVal('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-3xl h-[550px] rounded-2xl bg-[#090D16] border border-slate-700/80 shadow-2xl overflow-hidden z-10 flex flex-col my-auto font-mono text-xs text-slate-200"
        >
          {/* Terminal Titlebar */}
          <div className="px-4 py-3 bg-[#0F1422] border-b border-slate-800 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-slate-400 text-xs ml-2 font-medium">tristan@tdp-machine: ~</span>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white transition-colors"
              aria-label="Close Terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Output Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {logs.map((log) => (
              <div key={log.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">tristan@tdp-machine:~$</span>
                  <span className="text-white">{log.command}</span>
                </div>
                <div className="pl-4">{log.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Interactive Command Input Form */}
          <form onSubmit={handleCommand} className="p-3 bg-[#0F1422] border-t border-slate-800 flex items-center gap-2">
            <span className="text-emerald-400 font-bold shrink-0">tristan@tdp-machine:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help'..."
              className="w-full bg-transparent text-white focus:outline-none placeholder:text-slate-600 font-mono text-xs"
              autoFocus
            />
            <button
              type="submit"
              className="p-1.5 rounded text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="Run command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
