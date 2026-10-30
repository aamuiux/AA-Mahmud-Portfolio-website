import React, { useState } from 'react';
import { Mail, Copy, Check, Calendar, ArrowRight, Linkedin, Github, Globe, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  const [copied, setCopied] = useState(false);
  const email = 'saikat.wp@gmail.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 border-b border-[var(--border)] bg-[var(--surface-grey)]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-sm border border-[var(--border)] bg-[var(--surface-card)] p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-4">
              <span className="w-8 h-px bg-[var(--ink-muted)]"></span>
              <span>Direct Engagement</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] mb-4 leading-tight">
              Hiring a lead designer or fixing a high-friction product? Let&apos;s talk.
            </h2>

            <p className="text-base sm:text-lg text-[var(--ink-muted)] leading-relaxed mb-8">
              I take on 2 to 3 selective engagements per cycle: as an embedded Lead UI/UX Designer directing core product teams or as a Strategic Advisor conducting intensive UX audits and design token migrations.
            </p>

            {/* Email Copy Card & Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="flex items-center rounded-sm border border-[var(--border)] bg-[var(--surface-grey)] p-1.5 shadow-xs">
                <span className="font-mono text-xs sm:text-sm px-3 text-[var(--ink)] font-medium select-all">
                  {email}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-xs bg-[var(--canvas)] border border-[var(--border)] text-xs font-medium text-[var(--ink)] hover:bg-[var(--border)]/20 transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${email}?subject=Lead%20UI/UX%20Role%20Inquiry%20-%20AA%20Mahmud`}
                className="px-5 py-3 rounded-sm bg-[var(--surface-dark)] text-[var(--canvas)] text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2 shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenConsultation}
                className="px-5 py-3 rounded-sm bg-[var(--surface-grey)] text-[var(--ink)] border border-[var(--border)] text-xs font-semibold uppercase tracking-wider hover:bg-[var(--border)]/30 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 20-Min Call ↗</span>
              </button>
            </div>

            {/* Additional Channels */}
            <div className="pt-8 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Location: Dhaka, Bangladesh · Open to Remote (PST, EST, GMT, CET)</span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/aamuiux/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-[var(--ink)] transition-colors flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/aamuiux/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-[var(--ink)] transition-colors flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.figma.com/@aam_uiux"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-[var(--ink)] transition-colors flex items-center gap-1 font-mono font-bold"
                >
                  <span>Figma</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
