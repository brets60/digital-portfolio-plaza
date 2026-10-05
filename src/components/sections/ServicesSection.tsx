import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Building2,
  Database,
  Layout,
  Server,
  Sparkles,
  Workflow,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES_LIST } from '../../data/portfolioContent';
import { useTheme } from '../../context/ThemeContext';
import type { ServiceItem } from '../../types';

export const ServicesSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getServiceIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-blue-500' };
    switch (iconName) {
      case 'Globe': return <Globe {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Workflow': return <Workflow {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      default: return <Cpu {...props} />;
    }
  };

  return (
    <section id="services" className={`py-24 border-t transition-colors ${
      isDark ? 'bg-[#0B0F19] border-slate-800/80' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-800/60 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Engineering Services
            </h2>
          </div>
          <p className={`text-sm max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            End-to-end technical execution tailored for enterprises, organizations, startups, and research institutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service: ServiceItem) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 hover:border-blue-500/40 hover:bg-slate-900'
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg shadow-sm'
              }`}
            >
              <div>
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${
                  isDark ? 'bg-slate-950 border-slate-800' : 'bg-blue-50 border-blue-100'
                }`}>
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className={`text-base font-bold tracking-tight mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {service.title}
                </h3>

                <p className={`text-xs leading-relaxed mb-6 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {service.shortExplanation}
                </p>
              </div>

              {/* Deliverables List */}
              <div className={`pt-4 border-t space-y-1.5 ${
                isDark ? 'border-slate-800/80' : 'border-slate-100'
              }`}>
                {service.deliverables.map((del: string, dIdx: number) => (
                  <div key={dIdx} className="flex items-center gap-2 text-[11px]">
                    <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0" />
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{del}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
