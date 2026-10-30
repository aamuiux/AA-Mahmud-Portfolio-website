import React, { useState } from 'react';
import { X, Calendar, Mail, Check, Copy, Clock, Globe, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const email = 'saikat.wp@gmail.com';

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-[var(--canvas)] rounded-sm border border-[var(--border)] shadow-2xl p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-500" />
            <h3 className="font-bold text-lg sm:text-xl text-[var(--ink)]">
              Schedule 20-Min Product Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[var(--ink-muted)] hover:text-[var(--ink)] rounded-sm hover:bg-[var(--surface-grey)] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6 text-sm text-[var(--ink)]">
          <p className="text-[var(--ink-muted)] leading-relaxed">
            Let&apos;s discuss your product goals, team structure, design systems, or AI roadmap. I can provide feedback on existing interfaces, heuristic friction points, or role alignment.
          </p>

          {/* Quick details */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-sm bg-[var(--surface-grey)]/60 border border-[var(--border)] flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>20 Minutes via Google Meet</span>
            </div>
            <div className="p-3 rounded-sm bg-[var(--surface-grey)]/60 border border-[var(--border)] flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Global Timezones Friendly</span>
            </div>
          </div>

          {/* Action 1: Calendly */}
          <div className="p-5 rounded-sm bg-[var(--surface-grey)]/40 border border-[var(--border)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-[var(--ink)]">Option 1: Direct Calendar Booking</span>
              <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">Recommended</span>
            </div>
            <p className="text-xs text-[var(--ink-muted)]">
              Select an instant slot that works directly with your Google Calendar.
            </p>
            <a
              href="https://calendly.com/aamsaikat-ux/20min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-sm bg-[var(--surface-dark)] text-[var(--canvas)] text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Open Calendly Slot Picker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Action 2: Direct Email Inquiry */}
          <div className="p-5 rounded-sm bg-[var(--surface-grey)]/40 border border-[var(--border)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-[var(--ink)]">Option 2: Email Strategic Brief</span>
            </div>
            <div className="flex items-center justify-between gap-2 bg-[var(--canvas)] border border-[var(--border)] p-2 rounded-xs">
              <span className="font-mono text-xs text-[var(--ink)] px-2 select-all truncate">{email}</span>
              <button
                onClick={copyEmail}
                className="px-2.5 py-1 text-xs rounded-xs bg-[var(--surface-grey)] hover:bg-[var(--border)]/30 text-[var(--ink)] border border-[var(--border)] flex items-center gap-1 font-medium transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[var(--border)] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
