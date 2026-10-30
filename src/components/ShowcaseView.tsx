import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types/portfolio';
import { 
  Search, 
  Sparkles, 
  ExternalLink, 
  FileText, 
  ArrowLeft, 
  Filter, 
  Layers, 
  LayoutDashboard, 
  CreditCard, 
  ShoppingBag, 
  Smartphone, 
  HeartPulse 
} from 'lucide-react';

interface ShowcaseViewProps {
  projects: Project[];
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  onOpenCaseBrief: (project: Project) => void;
  onBackToHome: () => void;
  categoryCounts: Record<ProjectCategory, number>;
}

export const ShowcaseView: React.FC<ShowcaseViewProps> = ({
  projects,
  activeCategory,
  onSelectCategory,
  onOpenCaseBrief,
  onBackToHome,
  categoryCounts
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: ProjectCategory; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: 'All Works', icon: <Layers className="w-3.5 h-3.5" /> },
    { key: 'saas', label: 'SaaS Platforms', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { key: 'dashboard', label: 'Dashboards', icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
    { key: 'fintech', label: 'Fintech & Banking', icon: <CreditCard className="w-3.5 h-3.5" /> },
    { key: 'ecommerce', label: 'E-Commerce', icon: <ShoppingBag className="w-3.5 h-3.5" /> },
    { key: 'app-design', label: 'App Design', icon: <Smartphone className="w-3.5 h-3.5" /> },
    { key: 'healthcare', label: 'Health Care', icon: <HeartPulse className="w-3.5 h-3.5" /> },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        project.title.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        project.heading.toLowerCase().includes(q) ||
        project.solution.toLowerCase().includes(q) ||
        project.techStack.toLowerCase().includes(q) ||
        project.categoryLabel.toLowerCase().includes(q)
      );
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Return to Home */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border)]">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home Overview</span>
          </button>

          <span className="text-xs font-mono text-[var(--ink-muted)]">
            Showing {filteredProjects.length} of {projects.length} Works
          </span>
        </div>

        {/* View Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
            <span className="w-8 h-px bg-[var(--ink-muted)]"></span>
            <span>Comprehensive Portfolio Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] mb-4">
            Showcase Archetypes &amp; Shipped Systems
          </h1>
          <p className="text-base text-[var(--ink-muted)] max-w-3xl leading-relaxed">
            Exploration across 26 enterprise systems, high-density AI cockpits, national fintech infrastructure, and conversion-engineered consumer apps.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between mb-10 pb-6 border-b border-[var(--border)]">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => onSelectCategory(cat.key)}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xs text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--surface-dark)] text-[var(--canvas)] font-semibold shadow-xs'
                      : 'bg-[var(--surface-grey)] text-[var(--ink)] hover:bg-[var(--border)]/30 border border-[var(--border)]'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-[var(--canvas)]/20' : 'bg-[var(--border)] text-[var(--ink-muted)]'
                  }`}>
                    {categoryCounts[cat.key] || 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ink-muted)]" />
            <input
              type="text"
              placeholder="Search works, clients, stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-sm bg-[var(--surface-grey)] border border-[var(--border)] text-[var(--ink)] placeholder-[var(--ink-muted)] focus:outline-hidden focus:border-[var(--border-strong)] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[var(--ink-muted)] hover:text-[var(--ink)]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Projects Feed */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center rounded-sm border border-dashed border-[var(--border)] bg-[var(--surface-grey)]/40 p-8">
            <Filter className="w-8 h-8 mx-auto text-[var(--ink-muted)] mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-[var(--ink)] mb-2">No projects found</h3>
            <p className="text-xs text-[var(--ink-muted)] max-w-md mx-auto mb-6">
              We couldn&apos;t find any works matching your search &ldquo;{searchQuery}&rdquo;. Try clearing your query or switching categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="px-4 py-2 rounded-sm bg-[var(--surface-dark)] text-[var(--canvas)] text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group rounded-sm border border-[var(--border)] bg-[var(--surface-card)] overflow-hidden flex flex-col justify-between hover:border-[var(--border-strong)] transition-all shadow-xs"
              >
                <div>
                  {/* Image Cover */}
                  <div className="relative aspect-16/10 overflow-hidden bg-[var(--surface-grey)] border-b border-[var(--border)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-xs bg-[var(--surface-dark)]/90 text-[var(--canvas)] text-[11px] font-mono font-medium backdrop-blur-xs shadow-xs">
                        {project.roi}
                      </span>
                      <span className="px-2 py-1 rounded-xs bg-[var(--canvas)]/90 text-[var(--ink)] text-[11px] font-mono uppercase tracking-wider backdrop-blur-xs border border-[var(--border)]">
                        {project.category}
                      </span>
                    </div>
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-xs bg-[var(--canvas)]/90 text-[var(--ink-muted)] text-[11px] font-mono border border-[var(--border)]">
                      {project.year}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="text-xs text-[var(--ink-muted)] mb-1 font-mono uppercase tracking-wider">
                      {project.client}
                    </div>
                    <h2 className="text-xl font-bold text-[var(--ink)] mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.heading}
                    </h2>
                    <p className="text-xs text-[var(--ink-muted)] mb-3 font-medium">
                      {project.medium}
                    </p>
                    <p className="text-sm text-[var(--ink-muted)] line-clamp-3 mb-5 leading-relaxed">
                      {project.solution}
                    </p>

                    {/* Metric Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.pills.map((pill, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-0.5 rounded-xs bg-[var(--surface-grey)] text-[var(--ink-muted)] border border-[var(--border)] font-medium"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-6 py-4 border-t border-[var(--border)] bg-[var(--surface-grey)]/40 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenCaseBrief(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--ink)] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Case Brief</span>
                    <span aria-hidden="true">→</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.links.prototype && (
                      <a
                        href={project.links.prototype}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="px-2.5 py-1 text-xs rounded-xs bg-[var(--canvas)] border border-[var(--border)] text-[var(--ink)] hover:bg-[var(--border)]/30 transition-colors font-medium flex items-center gap-1"
                        title="Open Interactive Prototype"
                      >
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>Prototype</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}

                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="px-2.5 py-1 text-xs rounded-xs bg-[var(--canvas)] border border-[var(--border)] text-[var(--ink)] hover:bg-[var(--border)]/30 transition-colors font-medium flex items-center gap-1"
                        title="Visit Live Site"
                      >
                        <span>Live</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}

                    {project.links.figma && (
                      <a
                        href={project.links.figma}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="p-1 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors font-mono text-[11px] font-bold"
                        title="Figma Source"
                      >
                        FIGMA ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex justify-between items-center">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink)] hover:opacity-80 transition-opacity cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Overview</span>
          </button>

          <span className="text-xs text-[var(--ink-muted)]">
            End of Showcase Catalog
          </span>
        </div>
      </div>
    </div>
  );
};
