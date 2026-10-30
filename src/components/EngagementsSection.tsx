import React from 'react';
import { PARTNERS } from '../data/portfolioData';
import { Building2 } from 'lucide-react';

export const EngagementsSection: React.FC = () => {
  return (
    <section className="py-14 border-b border-[var(--border)] bg-[var(--surface-grey)]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-2">
            <Building2 className="w-3.5 h-3.5 text-[var(--ink-muted)]" />
            <span>Selected Engagements &amp; Enterprise Impact</span>
          </div>
          <p className="text-xs text-[var(--ink-muted)] max-w-xl mx-auto">
            Trusted by venture-backed startups, Fortune enterprises, and tier-1 financial clearinghouses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-sm bg-[var(--surface-card)] border border-[var(--border)] text-center flex flex-col justify-center items-center hover:border-[var(--border-strong)] transition-all"
            >
              <span className="font-bold text-xs sm:text-sm text-[var(--ink)] block mb-0.5">
                {partner.name}
              </span>
              <span className="text-[10px] text-[var(--ink-muted)] block truncate max-w-[140px]">
                {partner.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
