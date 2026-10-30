import React from 'react';
import { EXPERIENCES, SKILL_CATEGORIES, CERTIFICATIONS, AWARDS } from '../data/portfolioData';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  Layers, 
  Briefcase, 
  Building2, 
  MapPin, 
  Clock, 
  Mail, 
  Linkedin, 
  Github 
} from 'lucide-react';

interface ProfileViewProps {
  onBackToHome: () => void;
  onOpenConsultation: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ onBackToHome, onOpenConsultation }) => {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb */}
        <div className="mb-8 pb-4 border-b border-[var(--border)] flex justify-between items-center">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home Overview</span>
          </button>

          <span className="text-xs font-mono text-[var(--ink-muted)]">
            Verified Career Record · 12+ Years
          </span>
        </div>

        {/* Executive Biography Header */}
        <section className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-4">
            <span className="w-8 h-px bg-[var(--ink-muted)]"></span>
            <span>Executive Biography &amp; Practice</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--ink)]">
                AA Mahmud
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-[var(--ink)] leading-snug">
                12+ years designing high-margin clarity from deep-tech complexity.
              </p>
              <div className="prose text-[var(--ink-muted)] text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  I help founders, startups, and growing enterprises turn complex problems and ambitious technical capabilities into intuitive, meaningful digital experiences. From multi-billion dollar payment gateways (SSLCOMMERZ) and agentic AI copilots to mobile wallets and enterprise ERP systems, I bring together user needs, commercial strategy, and engineering realities.
                </p>
                <p>
                  My philosophy is simple: good design is not decorative ornamentation; it is the fundamental architecture of how a product delivers utility, builds trust, and compounds user retention over time.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 rounded-sm bg-[var(--surface-dark)] text-[var(--canvas)] text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a 20-Min Strategy Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="mailto:saikat.wp@gmail.com?subject=Strategic%20Engagement%20Briefing"
                  className="px-6 py-3 rounded-sm bg-[var(--surface-grey)] text-[var(--ink)] border border-[var(--border)] text-xs font-semibold uppercase tracking-wider hover:bg-[var(--border)]/30 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Briefing</span>
                </a>
              </div>
            </div>

            {/* Portrait Card with Pulse status */}
            <div className="lg:col-span-4">
              <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--surface-grey)] shadow-md">
                <img
                  src="/assets/abdullah-al-mahmud.jpg"
                  alt="AA Mahmud Portrait"
                  className="w-full aspect-4/5 object-cover object-top"
                />
                <div className="p-4 bg-[var(--surface-card)] border-t border-[var(--border)]">
                  <div className="flex items-center gap-2 text-xs font-medium text-[var(--ink)] mb-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Team Lead · Lead UI/UX Designer</span>
                  </div>
                  <p className="text-[11px] text-[var(--ink-muted)]">
                    Astha IT (Present) · Ex-SSL Wireless (8+ yrs)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quantitative Impact Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-dashed border-[var(--border)]">
            <div className="p-4 rounded-sm bg-[var(--surface-grey)]/60 border border-[var(--border)]">
              <span className="block font-mono text-3xl font-bold text-[var(--ink)]">12+</span>
              <span className="text-xs text-[var(--ink-muted)] uppercase tracking-wider">Years Total Experience</span>
            </div>
            <div className="p-4 rounded-sm bg-[var(--surface-grey)]/60 border border-[var(--border)]">
              <span className="block font-mono text-3xl font-bold text-[var(--ink)]">500+</span>
              <span className="text-xs text-[var(--ink-muted)] uppercase tracking-wider">Product Connections</span>
            </div>
            <div className="p-4 rounded-sm bg-[var(--surface-grey)]/60 border border-[var(--border)]">
              <span className="block font-mono text-3xl font-bold text-[var(--ink)]">13+</span>
              <span className="text-xs text-[var(--ink-muted)] uppercase tracking-wider">Executive Recommendations</span>
            </div>
            <div className="p-4 rounded-sm bg-[var(--surface-grey)]/60 border border-[var(--border)]">
              <span className="block font-mono text-3xl font-bold text-emerald-600 dark:text-emerald-400">9+</span>
              <span className="text-xs text-[var(--ink-muted)] uppercase tracking-wider">Countries Impacted</span>
            </div>
          </div>
        </section>

        {/* Career Timeline Section */}
        <section className="mb-16 pt-12 border-t border-[var(--border)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Career Record</span>
              </div>
              <h2 className="text-3xl font-bold text-[var(--ink)]">
                Job Experience &amp; Leadership
              </h2>
            </div>
            <p className="text-xs text-[var(--ink-muted)] max-w-sm">
              Continuous track record in lead UI/UX design, systems governance, and quantifiable enterprise ROI.
            </p>
          </div>

          <div className="space-y-8">
            {EXPERIENCES.map((exp) => (
              <article
                key={exp.id}
                className={`p-6 sm:p-8 rounded-sm border transition-all ${
                  exp.isCurrent 
                    ? 'border-emerald-500/40 bg-[var(--surface-card)] shadow-xs' 
                    : 'border-[var(--border)] bg-[var(--surface-card)]'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Meta Column */}
                  <div className="lg:col-span-4 space-y-2">
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Current Position
                      </span>
                    )}

                    <div className="font-mono text-xs font-semibold text-[var(--ink)]">
                      {exp.dates}
                    </div>

                    <div className="space-y-0.5">
                      <h4 className="font-bold text-base text-[var(--ink)]">{exp.company}</h4>
                      <p className="text-xs text-[var(--ink-muted)] flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </p>
                    </div>

                    {exp.tenureBadge && (
                      <span className="inline-block px-2 py-0.5 rounded-xs bg-[var(--surface-grey)] text-[var(--ink-muted)] text-[11px] font-mono border border-[var(--border)]">
                        {exp.tenureBadge}
                      </span>
                    )}
                  </div>

                  {/* Body Column */}
                  <div className="lg:col-span-8 space-y-4">
                    <h3 className="text-xl font-bold text-[var(--ink)]">
                      {exp.role}
                    </h3>

                    {exp.growthNotice && (
                      <div className="px-3 py-1.5 rounded-xs bg-[var(--surface-grey)] border border-[var(--border)] text-xs text-[var(--ink)] font-medium flex items-center gap-2">
                        <span className="text-emerald-500">↗</span>
                        <span>{exp.growthNotice}</span>
                      </div>
                    )}

                    {/* Standard highlights */}
                    {exp.highlights && (
                      <ul className="space-y-2 text-sm text-[var(--ink-muted)] leading-relaxed">
                        {exp.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Subroles if applicable (SSL Wireless) */}
                    {exp.subroles && (
                      <div className="space-y-4 pt-2">
                        {exp.subroles.map((sub, sidx) => (
                          <div key={sidx} className="p-4 rounded-xs bg-[var(--surface-grey)]/40 border border-[var(--border)] space-y-2">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h5 className="font-bold text-sm text-[var(--ink)]">{sub.title}</h5>
                              <span className="font-mono text-xs text-[var(--ink-muted)]">{sub.dates}</span>
                            </div>
                            <ul className="space-y-1.5 text-xs text-[var(--ink-muted)] leading-relaxed">
                              {sub.highlights.map((h, hidx) => (
                                <li key={hidx} className="flex items-start gap-2">
                                  <span className="text-emerald-500 font-bold shrink-0">•</span>
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.tags.map((tag, tidx) => (
                        <span
                          key={tidx}
                          className="text-[11px] px-2 py-0.5 rounded-xs bg-[var(--surface-grey)] text-[var(--ink-muted)] border border-[var(--border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills Matrix Section */}
        <section className="mb-16 pt-12 border-t border-[var(--border)]">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Capabilities Matrix</span>
            </div>
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-3">
              Core Skills &amp; Domain Expertise
            </h2>
            <p className="text-sm text-[var(--ink-muted)] max-w-2xl leading-relaxed">
              Holistic mastery spanning algorithmic AI interfaces, zero-drift production frontend handoff, and strategic business metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="p-6 rounded-sm bg-[var(--surface-card)] border border-[var(--border)] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[var(--ink)] mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[var(--ink-muted)] leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="text-xs px-2.5 py-1 rounded-xs bg-[var(--surface-grey)] text-[var(--ink)] border border-[var(--border)] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Awards Section */}
        <section className="mb-16 pt-12 border-t border-[var(--border)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Credentials</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--ink)] mb-6">
                Certifications &amp; Masteries
              </h3>

              <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="py-3.5 flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      <span className="font-semibold text-[var(--ink)]">{cert.title}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--ink-muted)] font-mono text-xs">
                      <span>{cert.institute}</span>
                      <span>·</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-2">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Industry Recognition</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--ink)] mb-6">
                Awards &amp; Achievements
              </h3>

              <div className="space-y-4">
                {AWARDS.map((award) => (
                  <div key={award.id} className="p-4 rounded-sm bg-[var(--surface-card)] border border-[var(--border)] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-[var(--ink)]">{award.title}</h4>
                      <span className="font-mono text-xs text-[var(--ink-muted)]">{award.organization} · {award.year}</span>
                    </div>
                    <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Profile Engagement CTA */}
        <section className="p-8 sm:p-12 rounded-sm border border-[var(--border)] bg-[var(--surface-card)] text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--ink)] mb-3">
            Ready to engineer high-margin clarity for your product?
          </h3>
          <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-6">
            I take on 2 to 3 selective engagements per cycle: as an embedded Lead UI/UX Designer directing core product design or as a Strategic Advisor conducting high-intensity product sprints.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-sm bg-[var(--surface-dark)] text-[var(--canvas)] text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategic Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onBackToHome}
              className="px-6 py-3 rounded-sm bg-[var(--surface-grey)] text-[var(--ink)] border border-[var(--border)] text-xs font-semibold uppercase tracking-wider hover:bg-[var(--border)]/30 transition-colors cursor-pointer"
            >
              Return to Portfolio Overview
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
