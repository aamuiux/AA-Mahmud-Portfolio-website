import React from 'react';
import { Project } from '../types/portfolio';
import { ArrowRight, ExternalLink, Sparkles, FileText } from 'lucide-react';

interface FeaturedWorksProps {
  projects: Project[];
  onOpenCaseBrief: (project: Project) => void;
  onExploreAll: () => void;
}

export const FeaturedWorks: React.FC<FeaturedWorksProps> = ({
  projects,
  onOpenCaseBrief,
  onExploreAll
}) => {
  // Select 4 diverse flagship projects: Collablly (SaaS), Docomate (AI), SSLCOMMERZ (Fintech), eBuddy (Dashboard)
  const featured = projects.filter(p => 
    p.title.includes('Collablly') || 
    p.title.includes('Docomate') || 
    p.title.includes('SSLCOMMERZ Payment') || 
    p.title.includes('eBuddy')
  ).slice(0, 4);

  return (
    <section className="py-16 lg:py-24 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
              <span className="w-8 h-px bg-[var(--ink-muted)]"></span>
              <span>Featured Engagements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink)]">
              Flagship case studies &amp; proven ROI.
            </h2>
          </div>

          <button
            onClick={onExploreAll}
            className="self-start md:self-auto px-5 py-2.5 rounded-sm bg-[var(--surface-grey)] text-[var(--ink)] border border-[var(--border)] text-xs font-semibold uppercase tracking-wider hover:bg-[var(--border)]/40 transition-colors flex items-center gap-2"
          >
            <span>View All 26 Works</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featured.map((project) => (
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
                    <span className="px-2.5 py-1 rounded-xs bg-[var(--surface-dark)]/90 text-[var(--canvas)] text-[11px] font-mono font-medium backdrop-blur-xs">
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
                  <h3 className="text-xl font-bold text-[var(--ink)] mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.heading}
                  </h3>
                  <p className="text-sm text-[var(--ink-muted)] line-clamp-2 mb-4 leading-relaxed">
                    {project.solution}
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.pills.slice(0, 3).map((pill, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded-xs bg-[var(--surface-grey)] text-[var(--ink-muted)] border border-[var(--border)]"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-4 border-t border-[var(--border)] bg-[var(--surface-grey)]/40 flex items-center justify-between">
                <button
                  onClick={() => onOpenCaseBrief(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--ink)] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Read Case Brief</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <div className="flex items-center gap-2">
                  {project.links.prototype && (
                    <a
                      href={project.links.prototype}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-1.5 text-[var(--ink-muted)] hover:text-[var(--ink)] rounded-xs hover:bg-[var(--surface-grey)] transition-colors text-xs flex items-center gap-1 font-medium"
                      title="View Prototype"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Prototype</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
