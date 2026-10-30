import React from 'react';
import { CheckCircle2, Award, Zap, Code2 } from 'lucide-react';

interface AboutSectionProps {
  onViewProfile: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onViewProfile }) => {
  return (
    <section id="about" className="py-16 lg:py-24 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Quick Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--surface-grey)] shadow-md group">
              <img
                src="/assets/abdullah-al-mahmud.jpg"
                alt="AA Mahmud — Lead UI/UX Designer & Product Strategist"
                className="w-full aspect-4/5 object-cover object-top transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xs bg-[var(--canvas)]/90 backdrop-blur-md border border-[var(--border)] flex items-center gap-2.5 text-xs font-medium text-[var(--ink)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Active Lead UI/UX Designer · Available for Global Engagements</span>
              </div>
            </div>

            {/* Quick credentials card */}
            <div className="p-5 rounded-sm bg-[var(--surface-grey)]/60 border border-[var(--border)] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Executive Accreditations</span>
              </div>
              <ul className="text-xs text-[var(--ink-muted)] space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>CUA (Certified Usability Analyst) candidate · HFI principles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Lead UX Architect for Bangladesh&apos;s #1 Payment Gateway (SSLCOMMERZ)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Google Developer Group Speaker on Design Thinking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Bio & Strategic Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
              <span className="w-8 h-px bg-[var(--ink-muted)]"></span>
              <span>About AA Mahmud</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
              12+ years designing products that people actually finish using.
            </h2>

            <div className="prose text-[var(--ink-muted)] text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                I am a Lead UI/UX Designer, Team Lead, and Product Strategist currently heading design initiatives at Astha IT, and previously spending 8+ years scaling the product design department at SSL Wireless.
              </p>
              <p>
                My work centers on the intersection of deep-tech engineering and human cognitive ergonomics: unravelling dense financial databases, multi-tier supply chain workflows, high-frequency payment gateways, and probabilistic AI systems into elegant, sub-second user journeys.
              </p>
              <p>
                I bridge the gap between Figma design systems and production code. By maintaining zero-drift token architectures and partnering directly with engineering managers, I help teams reduce frontend rework by up to 30% and ship measurable business outcomes.
              </p>
            </div>

            {/* Strategic Pillars preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-sm bg-[var(--surface-grey)]/40 border border-[var(--border)]">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--ink)] mb-1">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Commercial &amp; Metric Focus</span>
                </div>
                <p className="text-xs text-[var(--ink-muted)]">
                  Anchoring every screen to ARR growth, funnel conversion rates, and retention loops.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[var(--surface-grey)]/40 border border-[var(--border)]">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--ink)] mb-1">
                  <Code2 className="w-4 h-4 text-emerald-500" />
                  <span>Design-to-Code Fluency</span>
                </div>
                <p className="text-xs text-[var(--ink-muted)]">
                  Token specifications, WCAG 2.1 AA accessibility matrices, and clean component states.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onViewProfile}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink)] hover:opacity-80 transition-opacity border-b-2 border-[var(--ink)] pb-1"
              >
                <span>Read Full Career Biography &amp; Recommendations</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
