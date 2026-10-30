import React, { useState, useEffect, useMemo } from 'react';
import { Project, ProjectCategory } from './types/portfolio';
import { PROJECTS } from './data/portfolioData';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { FeaturedWorks } from './components/FeaturedWorks';
import { EndorsementsSection } from './components/EndorsementsSection';
import { EngagementsSection } from './components/EngagementsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { ShowcaseView } from './components/ShowcaseView';
import { ProfileView } from './components/ProfileView';
import { CaseBriefModal } from './components/CaseBriefModal';
import { ConsultationModal } from './components/ConsultationModal';
import { BackToTop } from './components/BackToTop';

export default function App() {
  // Theme State
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('saikat_theme');
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  // Apply theme to document
  useEffect(() => {
    try {
      localStorage.setItem('saikat_theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
      }
    } catch {
      // fallback
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // View & Filter State
  const [activeView, setActiveView] = useState<'home' | 'showcase' | 'profile'>('home');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Category counts calculation
  const categoryCounts = useMemo(() => {
    const counts: Record<ProjectCategory, number> = {
      'all': PROJECTS.length,
      'saas': 0,
      'dashboard': 0,
      'fintech': 0,
      'ecommerce': 0,
      'app-design': 0,
      'healthcare': 0
    };
    PROJECTS.forEach(p => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });
    return counts;
  }, []);

  const handleSelectCategory = (cat: ProjectCategory) => {
    setActiveCategory(cat);
    setActiveView('showcase');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateShowcase = () => {
    setActiveCategory('all');
    setActiveView('showcase');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateProfile = () => {
    setActiveView('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--canvas)] text-[var(--ink)] flex flex-col font-sans selection:bg-[var(--ink)] selection:text-[var(--canvas)]">
      {/* Persistent Left Sidebar (Desktop + Mobile Drawer) */}
      <Sidebar
        activeView={activeView}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onViewProfile={handleNavigateProfile}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        isOpenMobile={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
        categoryCounts={categoryCounts}
      />

      {/* Main Container offset by sidebar width on desktop */}
      <div className="lg:pl-80 flex-1 flex flex-col min-w-0 transition-[padding] duration-300">
        {/* Header Navigation */}
        <Header
          activeView={activeView}
          onNavigateHome={handleNavigateHome}
          onNavigateShowcase={handleNavigateShowcase}
          onNavigateProfile={handleNavigateProfile}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onToggleMobileMenu={() => setIsMobileSidebarOpen(prev => !prev)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* View Router */}
        <main className="flex-1">
          {activeView === 'home' && (
            <div className="animate-in fade-in duration-300">
              <HeroSection
                onExploreShowcase={handleNavigateShowcase}
                onViewProfile={handleNavigateProfile}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
              <FeaturedWorks
                projects={PROJECTS}
                onOpenCaseBrief={(project) => setSelectedProject(project)}
                onExploreAll={handleNavigateShowcase}
              />
              <AboutSection onViewProfile={handleNavigateProfile} />
              <PrinciplesSection />
              <EndorsementsSection />
              <EngagementsSection />
              <FaqSection />
              <ContactSection onOpenConsultation={() => setIsConsultationOpen(true)} />
            </div>
          )}

          {activeView === 'showcase' && (
            <div className="animate-in fade-in duration-300">
              <ShowcaseView
                projects={PROJECTS}
                activeCategory={activeCategory}
                onSelectCategory={(cat) => setActiveCategory(cat)}
                onOpenCaseBrief={(project) => setSelectedProject(project)}
                onBackToHome={handleNavigateHome}
                categoryCounts={categoryCounts}
              />
            </div>
          )}

          {activeView === 'profile' && (
            <div className="animate-in fade-in duration-300">
              <ProfileView
                onBackToHome={handleNavigateHome}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            </div>
          )}
        </main>

        {/* Global Footer */}
        <footer className="border-t border-[var(--border)] py-8 px-4 sm:px-8 bg-[var(--surface-grey)]/40 text-xs text-[var(--ink-muted)]">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[var(--ink)]">AA Mahmud</span>
              <span>— Lead UI/UX Designer &amp; Systems Architect</span>
            </div>
            <div>
              <span>Designed &amp; Built with React &amp; Tailwind CSS · © {new Date().getFullYear()}</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Case Brief Modal */}
      <CaseBriefModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Back to top button */}
      <BackToTop />
    </div>
  );
}
