import React from 'react';
import { Menu, Sun, Moon, ArrowRight, Briefcase, User, Home, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeView: 'home' | 'showcase' | 'profile';
  onNavigateHome: () => void;
  onNavigateShowcase: () => void;
  onNavigateProfile: () => void;
  onOpenConsultation: () => void;
  onToggleMobileMenu: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onNavigateHome,
  onNavigateShowcase,
  onNavigateProfile,
  onOpenConsultation,
  onToggleMobileMenu,
  theme,
  onToggleTheme
}) => {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-[var(--canvas)]/85 border-b border-[var(--border)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Mobile Toggle & Brand indicator */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMobileMenu}
            className="lg:hidden p-2 rounded-sm text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-grey)] transition-colors"
            aria-label="Open sidebar menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 group text-left"
          >
            <span className="font-mono font-bold text-sm tracking-wider px-2 py-0.5 rounded-xs bg-[var(--surface-grey)] border border-[var(--border)]">
              AAM
            </span>
            <span className="font-semibold text-sm tracking-tight hidden sm:inline">
              AA Mahmud
            </span>
          </button>

          {/* Active View Pill */}
          <div className="hidden md:flex items-center gap-1.5 pl-3 border-l border-[var(--border)] text-xs text-[var(--ink-muted)]">
            <span className="text-[10px] uppercase tracking-wider font-mono opacity-60">View:</span>
            <span className="font-medium text-[var(--ink)] capitalize">
              {activeView === 'home' && 'Overview'}
              {activeView === 'showcase' && 'Portfolio Showcase'}
              {activeView === 'profile' && 'Executive Profile'}
            </span>
          </div>
        </div>

        {/* Center / Right: Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={onNavigateHome}
            className={`flex items-center gap-1.5 transition-colors ${
              activeView === 'home' 
                ? 'text-[var(--ink)] font-semibold' 
                : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Overview</span>
          </button>

          <button
            onClick={onNavigateShowcase}
            className={`flex items-center gap-1.5 transition-colors ${
              activeView === 'showcase' 
                ? 'text-[var(--ink)] font-semibold' 
                : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Showcase (26)</span>
          </button>

          <button
            onClick={onNavigateProfile}
            className={`flex items-center gap-1.5 transition-colors ${
              activeView === 'profile' 
                ? 'text-[var(--ink)] font-semibold' 
                : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profile &amp; Career</span>
          </button>
        </nav>

        {/* Right Actions: Theme Toggle & Book Intro CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-sm text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-grey)] transition-colors border border-[var(--border)]"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={onOpenConsultation}
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold uppercase tracking-wider rounded-sm bg-[var(--surface-dark)] text-[var(--canvas)] hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <span>Book Intro</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
