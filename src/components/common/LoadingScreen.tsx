import React, { useState, useEffect } from 'react';

export const LoadingScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 150);
          return 100;
        }
        return prev + 25;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0F19] text-white transition-opacity duration-300">
      <div className="flex flex-col items-center space-y-4">
        {/* Monogram */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-500/40 flex items-center justify-center font-mono font-bold text-2xl text-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
          TDP
        </div>

        <div className="text-xs font-mono text-slate-400 tracking-wider">
          INITIALIZING PORTFOLIO ENGINE... {progress}%
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
