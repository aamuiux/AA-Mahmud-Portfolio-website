import React from 'react';
import { Target, Cpu, LineChart } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'User-Validated Discovery & ROI',
      icon: <Target className="w-5 h-5 text-amber-500" />,
      desc: 'Every design decision starts with real user behavior and commercial targets. By combining stakeholder interviews, qualitative research, and heuristic audits, I identify high-friction bottlenecks and anchor design to measurable retention and conversion metrics.'
    },
    {
      num: '02',
      title: 'Scalable Token Systems & Velocity',
      icon: <Cpu className="w-5 h-5 text-emerald-500" />,
      desc: 'Building living design systems governed by W3C design tokens and strict component state matrices. This creates zero-drift parity between Figma and production codebases, eliminating design ambiguity and accelerating frontend sprint velocity.'
    },
    {
      num: '03',
      title: 'Cognitive Ergonomics & AI Telemetry',
      icon: <LineChart className="w-5 h-5 text-blue-500" />,
      desc: 'Designing intuitive mental models for complex data visualizations, high-density enterprise tables, and probabilistic AI workflows. By providing human-in-the-loop safeguards and sub-second feedback, interfaces feel responsive and trustworthy.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 border-b border-[var(--border)] bg-[var(--surface-grey)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
            <span className="w-8 h-px bg-[var(--ink-muted)]"></span>
            <span>Core Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink)]">
            Three pillars of high-impact product design.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((item) => (
            <div 
              key={item.num}
              className="p-6 sm:p-8 rounded-sm bg-[var(--surface-card)] border border-[var(--border)] flex flex-col justify-between hover:border-[var(--border-strong)] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[var(--ink-muted)] px-2.5 py-1 rounded-xs bg-[var(--surface-grey)] border border-[var(--border)]">
                    {item.num}
                  </span>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)] mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
