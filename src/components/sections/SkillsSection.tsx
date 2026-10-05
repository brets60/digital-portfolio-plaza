import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Palette,
  Code,
  FileCode,
  Layers,
  Wind,
  Terminal,
  Server,
  Cpu,
  Network,
  Database,
  HardDrive,
  GitBranch,
  Monitor,
  Box,
  Sparkles,
  Workflow,
  Layout,
  Boxes,
} from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { SKILL_GROUPS } from '../../data/portfolioContent';
import { useTheme } from '../../context/ThemeContext';
import type { SkillItem } from '../../types';

export const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const getSkillIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-blue-500' };
    switch (iconName) {
      case 'Globe': return <Globe {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Code': return <Code {...props} />;
      case 'FileCode': return <FileCode {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Database': return <Database {...props} />;
      case 'HardDrive': return <HardDrive {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Github': return <GithubIcon className="w-5 h-5 text-blue-500" />;
      case 'Monitor': return <Monitor {...props} />;
      case 'Box': return <Box {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Workflow': return <Workflow {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      default: return <Code {...props} />;
    }
  };

  const categories = ['ALL', 'FRONTEND', 'BACKEND', 'DATABASE', 'TOOLS', 'OTHER'];

  const filteredGroups = activeCategory === 'ALL'
    ? SKILL_GROUPS
    : SKILL_GROUPS.filter((g) => g.categoryName === activeCategory);

  return (
    <section id="skills" className={`py-24 border-t transition-colors ${
      isDark ? 'bg-[#0B0F19] border-slate-800/80' : 'bg-slate-50/50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-800/60 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Technical Skills &amp; Stack
            </h2>
          </div>
          <p className={`text-sm max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Categorized production competencies spanning client interfaces, backend microservices, relational data, and tooling.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.35)]'
                  : isDark
                  ? 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Groups Grid */}
        <div className="space-y-12">
          {filteredGroups.map((group) => (
            <div key={group.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-blue-500 uppercase tracking-wider">
                  [{group.categoryName}]
                </span>
                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  — {group.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.skills.map((skill: SkillItem) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.15 }}
                    className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                      isDark
                        ? 'bg-slate-900/70 border-slate-800 hover:border-blue-500/40 hover:bg-slate-900 shadow-md shadow-black/20'
                        : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md shadow-sm'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className={`p-2 rounded-lg border ${
                          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-100'
                        }`}>
                          {getSkillIcon(skill.iconName)}
                        </div>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          skill.proficiencyLevel === 'Expert'
                            ? 'bg-blue-500/10 text-blue-500 border-blue-500/30 font-semibold'
                            : 'bg-slate-500/10 text-slate-400 border-slate-500/20'
                        }`}>
                          {skill.proficiencyLevel}
                        </span>
                      </div>

                      <h4 className={`text-sm font-bold tracking-tight mb-1 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {skill.name}
                      </h4>

                      <p className={`text-xs leading-relaxed ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
