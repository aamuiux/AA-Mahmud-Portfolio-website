import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, Linkedin } from 'lucide-react';

export const EndorsementsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
            <span className="w-8 h-px bg-[var(--ink-muted)]"></span>
            <span>Executive Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink)]">
            What CTOs, Founders &amp; Engineering Leaders say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="p-6 sm:p-8 rounded-sm bg-[var(--surface-card)] border border-[var(--border)] flex flex-col justify-between hover:border-[var(--border-strong)] transition-all shadow-xs"
            >
              <div>
                <Quote className="w-8 h-8 text-emerald-500/30 mb-4" />
                <blockquote className="text-sm sm:text-base text-[var(--ink)] leading-relaxed italic mb-8">
                  &ldquo;{t.quote.replace(/^“|”$/g, '')}&rdquo;
                </blockquote>
              </div>

              <figcaption className="pt-6 border-t border-[var(--border)] flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[var(--border)] shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-[var(--ink)] truncate">
                      {t.name}
                    </span>
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-[#0a66c2] hover:opacity-80 transition-opacity shrink-0"
                      title={`${t.name} on LinkedIn`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-xs text-[var(--ink-muted)] truncate">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
