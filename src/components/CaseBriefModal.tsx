import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Sparkles, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface CaseBriefModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const CaseBriefModal: React.FC<CaseBriefModalProps> = ({
  project,
  onClose,
  onOpenConsultation
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--canvas)] rounded-sm border border-[var(--border)] shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[var(--border)] flex items-center justify-between bg-[var(--surface-grey)]/40">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--ink-muted)]">
                {project.client} · {project.year}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--surface-dark)] text-[var(--canvas)] font-bold">
                {project.roi}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--ink)]">
              {project.heading}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-grey)] transition-colors cursor-pointer"
            aria-label="Close case brief modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8">
          {/* Hero Image */}
          <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--surface-grey)] shadow-xs">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[460px] object-cover object-top"
            />
          </div>

          {/* Core Metrics & Pills */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-xs bg-[var(--surface-dark)] text-[var(--canvas)] text-xs font-mono font-medium">
              Impact: {project.roi}
            </span>
            {project.pills.map((pill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xs bg-[var(--surface-grey)] text-[var(--ink)] border border-[var(--border)] text-xs font-medium"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Problem / Challenge Block */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[var(--ink-muted)] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>The Product Challenge &amp; Cognitive Friction</span>
            </h4>
            <p className="text-base text-[var(--ink)] leading-relaxed bg-[var(--surface-grey)]/40 p-4 rounded-sm border border-[var(--border)]">
              {project.challenge || 'Operational friction and legacy interface fragmentation introduced significant cognitive friction, low completion rates, and high manual support overhead.'}
            </p>
          </div>

          {/* Architecture & Solution Block */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[var(--ink-muted)] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>UX Strategy &amp; Interface Solution</span>
            </h4>
            <p className="text-base text-[var(--ink)] leading-relaxed bg-[var(--surface-grey)]/40 p-4 rounded-sm border border-[var(--border)]">
              {project.solution}
            </p>
          </div>

          {/* Tech Stack & Design Tokens */}
          <div className="p-4 rounded-sm bg-[var(--surface-grey)]/60 border border-[var(--border)] space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] font-semibold flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Technology Stack &amp; Token Architecture</span>
            </div>
            <p className="text-sm font-mono text-[var(--ink)]">
              {project.techStack}
            </p>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-5 sm:p-6 border-t border-[var(--border)] bg-[var(--surface-grey)]/40 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.links.prototype && (
              <a
                href={project.links.prototype}
                target="_blank"
                rel="noreferrer noopener"
                className="px-4 py-2 rounded-sm bg-[var(--surface-dark)] text-[var(--canvas)] text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Launch Interactive Prototype</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {project.links.figma && (
              <a
                href={project.links.figma}
                target="_blank"
                rel="noreferrer noopener"
                className="px-4 py-2 rounded-sm bg-[var(--canvas)] border border-[var(--border)] text-[var(--ink)] text-xs font-semibold uppercase tracking-wider hover:bg-[var(--surface-grey)] transition-colors flex items-center gap-1.5 font-mono"
              >
                <span>Figma Tokens &amp; File</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer noopener"
                className="px-4 py-2 rounded-sm bg-[var(--canvas)] border border-[var(--border)] text-[var(--ink)] text-xs font-semibold uppercase tracking-wider hover:bg-[var(--surface-grey)] transition-colors flex items-center gap-1.5"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Inquire About Similar System</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
