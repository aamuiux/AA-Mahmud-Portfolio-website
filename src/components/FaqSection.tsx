import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-16 lg:py-24 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Title */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Recruiter &amp; Client FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink)] mb-4">
              Common questions &amp; working models.
            </h2>
            <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
              Transparent answers about my design methodologies, engineering collaboration, and availability for lead UI/UX roles and strategic engagements.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-sm border border-[var(--border)] bg-[var(--surface-card)] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[var(--surface-grey)]/40 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-sm sm:text-base text-[var(--ink)]">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-xs bg-[var(--surface-grey)] border border-[var(--border)] text-[var(--ink-muted)] shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[var(--ink-muted)] leading-relaxed border-t border-dashed border-[var(--border)]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
