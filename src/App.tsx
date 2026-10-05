import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/common/ScrollProgress';
import { LoadingScreen } from './components/common/LoadingScreen';
import { Toast } from './components/common/Toast';
import type { ToastMessage } from './components/common/Toast';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { CurrentlyBuilding } from './components/sections/CurrentlyBuilding';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ProjectModal } from './components/modals/ProjectModal';
import { TerminalModal } from './components/modals/TerminalModal';
import { ResumeModal } from './components/modals/ResumeModal';
import type { ProjectDetail } from './types';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const addToast = (type: 'success' | 'error' | 'info', title: string, message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, title, message }]);

    setTimeout(() => {
      dismissToast(id);
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ThemeProvider>
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

      <div className="min-h-screen relative flex flex-col transition-colors">
        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Sticky Glassmorphic Navbar */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          <HeroSection
            onOpenTerminal={() => setIsTerminalOpen(true)}
            onAddToast={addToast}
          />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection onViewDetails={(proj) => setSelectedProject(proj)} />
          <ServicesSection />
          <AchievementsSection />
          <CurrentlyBuilding />
          <ContactSection onAddToast={addToast} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Project Case Study Deep-Dive Modal */}
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />

        {/* Interactive Developer Terminal (Easter Egg) */}
        <TerminalModal
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
          onOpenResume={() => {
            setIsTerminalOpen(false);
            setIsResumeOpen(true);
          }}
        />

        {/* Formatted Printable Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        {/* Global Toast System */}
        <Toast toasts={toasts} onDismiss={dismissToast} />
      </div>
    </ThemeProvider>
  );
}

export default App;
