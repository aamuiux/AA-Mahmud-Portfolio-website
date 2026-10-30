import React from 'react';
import { ProjectCategory } from '../types/portfolio';
import { 
  Sparkles, 
  Layers, 
  LayoutDashboard, 
  CreditCard, 
  ShoppingBag, 
  Smartphone, 
  HeartPulse, 
  UserCheck, 
  Calendar, 
  Linkedin, 
  Github, 
  Mail,
  X,
  Compass
} from 'lucide-react';

interface SidebarProps {
  activeView: 'home' | 'showcase' | 'profile';
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  onViewProfile: () => void;
  onOpenConsultation: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  categoryCounts: Record<ProjectCategory, number>;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  activeCategory,
  onSelectCategory,
  onViewProfile,
  onOpenConsultation,
  isOpenMobile,
  onCloseMobile,
  categoryCounts
}) => {
  const categories: { key: ProjectCategory; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: 'All Works', icon: <Layers className="w-4 h-4" /> },
    { key: 'saas', label: 'SaaS Platforms', icon: <Sparkles className="w-4 h-4" /> },
    { key: 'dashboard', label: 'Dashboards', icon: <LayoutDashboard className="w-4 h-4" /> },
    { key: 'fintech', label: 'Fintech & Banking', icon: <CreditCard className="w-4 h-4" /> },
    { key: 'ecommerce', label: 'E-Commerce', icon: <ShoppingBag className="w-4 h-4" /> },
    { key: 'app-design', label: 'App Design', icon: <Smartphone className="w-4 h-4" /> },
    { key: 'healthcare', label: 'Health Care', icon: <HeartPulse className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      {/* Main Persistent Sidebar */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 w-72 lg:w-80 bg-[var(--canvas)] border-r border-[var(--border)] z-50 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top Header */}
        <div className="p-6 border-b border-[var(--border)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[var(--surface-dark)] text-[var(--canvas)] flex items-center justify-center font-bold font-mono text-sm tracking-wider shadow-xs">
                AAM
              </div>
              <div>
                <h1 className="font-semibold text-base leading-tight tracking-tight">AA Mahmud</h1>
                <p className="text-xs text-[var(--ink-muted)]">Lead UI/UX Designer &amp; Strategist</p>
              </div>
            </div>

            <button 
              onClick={onCloseMobile}
              className="lg:hidden p-1.5 text-[var(--ink-muted)] hover:text-[var(--ink)] rounded-md hover:bg-[var(--surface-grey)] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Status Pill */}
          <div className="mt-4 px-3 py-2 rounded-sm bg-[var(--surface-grey)] border border-[var(--border)] flex items-center gap-2.5 text-xs text-[var(--ink-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="truncate">Open to new roles &amp; remote</span>
          </div>
        </div>

        {/* Center Archetypes Nav */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
          <div className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--ink-muted)] flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            <span>Showcase Archetypes</span>
          </div>

          <div className="space-y-1">
            {categories.map((cat) => {
              const isSelected = activeView === 'showcase' && activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    onSelectCategory(cat.key);
                    onCloseMobile();
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-medium transition-all group ${
                    isSelected 
                      ? 'bg-[var(--surface-dark)] text-[var(--canvas)] font-semibold shadow-xs' 
                      : 'text-[var(--ink)] hover:bg-[var(--surface-grey)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isSelected ? 'text-[var(--canvas)]' : 'text-[var(--ink-muted)] group-hover:text-[var(--ink)]'}>
                      {cat.icon}
                    </span>
                    <span>{cat.label}</span>
                  </div>
                  <span 
                    className={`text-xs px-2 py-0.5 rounded-full font-mono text-[11px] ${
                      isSelected 
                        ? 'bg-[var(--canvas)]/20 text-[var(--canvas)]' 
                        : 'bg-[var(--surface-grey)] text-[var(--ink-muted)] group-hover:bg-[var(--canvas)]'
                    }`}
                  >
                    {categoryCounts[cat.key] || 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Profile CTA Nav Item */}
          <div className="pt-4 mt-3 border-t border-[var(--border)]">
            <button
              onClick={() => {
                onViewProfile();
                onCloseMobile();
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-medium transition-all group ${
                activeView === 'profile'
                  ? 'bg-[var(--surface-dark)] text-[var(--canvas)] font-semibold shadow-xs'
                  : 'text-[var(--ink)] hover:bg-[var(--surface-grey)] border border-dashed border-[var(--border)]'
              }`}
            >
              <div className="flex items-center gap-3">
                <UserCheck className={`w-4 h-4 ${activeView === 'profile' ? 'text-[var(--canvas)]' : 'text-[var(--ink-muted)]'}`} />
                <span>Executive Profile</span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider opacity-70">12+ Yrs</span>
            </button>
          </div>
        </div>

        {/* Bottom Actions & Socials */}
        <div className="p-4 border-t border-[var(--border)] space-y-3 bg-[var(--surface-grey)]/40">
          <button
            onClick={() => {
              onOpenConsultation();
              onCloseMobile();
            }}
            className="w-full py-2.5 px-4 rounded-sm bg-[var(--surface-dark)] text-[var(--canvas)] text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule Consultation</span>
          </button>

          <div className="flex items-center justify-between px-2 pt-1 text-[var(--ink-muted)]">
            <a 
              href="https://www.linkedin.com/in/aamuiux/" 
              target="_blank" 
              rel="noreferrer noopener"
              className="p-1.5 hover:text-[var(--ink)] transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/aamuiux/" 
              target="_blank" 
              rel="noreferrer noopener"
              className="p-1.5 hover:text-[var(--ink)] transition-colors"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.figma.com/@aam_uiux" 
              target="_blank" 
              rel="noreferrer noopener"
              className="p-1.5 hover:text-[var(--ink)] transition-colors font-mono text-xs font-bold"
              title="Figma"
              aria-label="Figma"
            >
              FIGMA
            </a>
            <a 
              href="mailto:saikat.wp@gmail.com" 
              className="p-1.5 hover:text-[var(--ink)] transition-colors"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
