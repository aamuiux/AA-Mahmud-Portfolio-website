import React from 'react';
import { ArrowRight, Layers, UserCheck, Calendar, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onExploreShowcase: () => void;
  onViewProfile: () => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreShowcase,
  onViewProfile,
  onOpenConsultation
}) => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[var(--surface-grey)] border border-[var(--border)] text-xs text-[var(--ink-muted)] mb-6 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Lead UI/UX Designer &amp; Product Strategist · 12+ Years Enterprise Record</span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[var(--ink)] max-w-5xl leading-[1.08] mb-6">
          Designing high-margin clarity from deep-tech complexity.
        </h1>

        {/* Narrative Description */}
        <p className="text-base sm:text-xl text-[var(--ink-muted)] max-w-3xl leading-relaxed mb-10">
          I help founders, engineering leads, and enterprise organizations turn complex problems into intuitive, quantifiable digital experiences. From multi-million dollar fintech gateways and AI-native copilots to enterprise ERP cockpits, I engineer interfaces that people actually finish using.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <button
            onClick={onExploreShowcase}
            className="px-6 py-3.5 rounded-sm bg-[var(--surface-dark)] text-[var(--canvas)] text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <Layers className="w-4 h-4" />
            <span>Explore All Works (26)</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>

          <button
            onClick={onViewProfile}
            className="px-6 py-3.5 rounded-sm bg-[var(--surface-grey)] text-[var(--ink)] border border-[var(--border)] text-xs font-semibold uppercase tracking-wider hover:bg-[var(--border)]/30 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <UserCheck className="w-4 h-4" />
            <span>View Career &amp; Resume</span>
          </button>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] hover:text-[var(--ink)] flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule 20-Min Call ↗</span>
          </button>
        </div>

        {/* Key Enterprise Stat Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-dashed border-[var(--border)]">
          <div className="p-4 rounded-sm bg-[var(--surface-grey)]/60 border border-[var(--border)]">
            <span className="block font-mono text-3xl sm:text-4xl font-bold text-[var(--ink)] mb-1">
              12+
            </span>
            <span className="text-xs text-[var(--ink-muted)] uppercase tracking-wider font-medium">
              Years Experience
            </span>
          </div>

          <div className="p-4 rounded-sm bg-[var(--surface-grey)]/60 border border-[var(--border)]">
            <span className="block font-mono text-3xl sm:text-4xl font-bold text-[var(--ink)] mb-1">
              40+
            </span>
            <span className="text-xs text-[var(--ink-muted)] uppercase tracking-wider font-medium">
              Shipped Platforms
            </span>
          </div>

          <div className="p-4 rounded-sm bg-[var(--surface-grey)]/60 border border-[var(--border)]">
            <span className="block font-mono text-3xl sm:text-4xl font-bold text-[var(--ink)] mb-1">
              18k+
            </span>
            <span className="text-xs text-[var(--ink-muted)] uppercase tracking-wider font-medium">
              Active Merchants Scaled
            </span>
          </div>

          <div className="p-4 rounded-sm bg-[var(--surface-grey)]/60 border border-[var(--border)]">
            <span className="block font-mono text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
              98%
            </span>
            <span className="text-xs text-[var(--ink-muted)] uppercase tracking-wider font-medium">
              On-Time Velocity &amp; CSAT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
