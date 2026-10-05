import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <aside aria-label="Notifications" className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => {
          const isSuccess = toast.type === 'success';
          const isError = toast.type === 'error';

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              role="status"
              aria-live="polite"
              className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-2xl backdrop-blur-md transition-all ${
                isDark
                  ? isSuccess
                    ? 'bg-slate-900/95 border-blue-500/40 text-slate-100 shadow-blue-950/40'
                    : isError
                    ? 'bg-slate-900/95 border-rose-500/40 text-slate-100 shadow-rose-950/40'
                    : 'bg-slate-900/95 border-amber-500/40 text-slate-100 shadow-amber-950/40'
                  : isSuccess
                  ? 'bg-white/95 border-blue-300 text-slate-900 shadow-slate-200'
                  : isError
                  ? 'bg-white/95 border-rose-300 text-slate-900 shadow-slate-200'
                  : 'bg-white/95 border-amber-300 text-slate-900 shadow-slate-200'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isSuccess && <CheckCircle2 className="w-5 h-5 text-blue-500" />}
                {isError && <AlertCircle className="w-5 h-5 text-rose-500" />}
                {!isSuccess && !isError && <Info className="w-5 h-5 text-amber-500" />}
              </div>

              <div className="flex-1 min-w-0">
                <h4 className={`text-sm font-semibold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {toast.title}
                </h4>
                <p className={`text-xs mt-0.5 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {toast.message}
                </p>
              </div>

              <button
                onClick={() => onDismiss(toast.id)}
                className={`p-1 -mr-1 -mt-1 rounded-lg transition-colors ${
                  isDark ? 'text-slate-500 hover:text-slate-300 hover:bg-slate-800' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                }`}
                aria-label="Dismiss notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </aside>
  );
};
