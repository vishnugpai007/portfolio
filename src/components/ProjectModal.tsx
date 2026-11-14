import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Github, ArrowUpRight, CheckCircle2, Layers, AlertCircle, Compass, Sparkles } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Keyboard accessibility: Escape key and focus trap
  useEffect(() => {
    if (!project) return;

    // Lock background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button initially
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      // Simple focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-bg/85 backdrop-blur-md"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl overflow-y-auto z-10 font-body flex flex-col"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 px-6 py-5 border-b border-border bg-card/95 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent px-2.5 py-1 rounded-md border border-border bg-secondary-bg">
              {project.projectNumber} // {project.category}
            </span>
            {project.isFlagship && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 rounded-full">
                <Sparkles className="w-2.5 h-2.5" />
                Flagship Project
              </span>
            )}
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="p-2 rounded-lg border border-border bg-secondary-bg text-secondary-text hover:text-text hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          {/* Title & Subtitle */}
          <div>
            <h3
              id="modal-title"
              className="text-2xl sm:text-3xl font-heading font-bold text-text tracking-tight mb-2"
            >
              {project.title}
            </h3>
            <p className="text-secondary-text text-base sm:text-lg">
              {project.subtitle}
            </p>
          </div>

          {/* Project Screenshot / Visual Preview */}
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-border bg-secondary-bg/80 shadow-lg">
              <div className="px-4 py-2.5 border-b border-border bg-card/80 flex items-center justify-between text-xs font-mono text-secondary-text">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="ml-1 text-[11px] text-secondary-text">
                    {project.id === 'campusfix' ? 'campusfix.app / portal' : `${project.id}.local`}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-accent uppercase tracking-wider">
                  Verified Screenshot
                </span>
              </div>
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.imageAlt || `${project.title} screenshot`}
                  width={1440}
                  height={900}
                  className="w-full h-full object-contain sm:object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          )}

          {/* Overview */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent font-semibold flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Project Overview</span>
            </h4>
            <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem Statement & Proposed Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.problemStatement && (
              <div className="p-4 rounded-xl border border-border bg-secondary-bg/60 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-yellow-400/90 font-semibold flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Problem Statement</span>
                </div>
                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
            )}

            {project.proposedSolution && (
              <div className="p-4 rounded-xl border border-border bg-secondary-bg/60 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400/90 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Proposed Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                  {project.proposedSolution}
                </p>
              </div>
            )}
          </div>

          {/* Main Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              Key Features & Capabilities
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-lg border border-border/80 bg-secondary-bg/40 text-xs sm:text-sm text-secondary-text flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used (Verified Only) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent font-semibold flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Technologies Used (Verified Stack)</span>
            </h4>
            <div className="space-y-2.5 text-xs font-mono">
              {project.techStack.frontend && (
                <div className="p-3 rounded-lg border border-border bg-secondary-bg/50">
                  <span className="text-text font-bold block mb-1.5">Frontend:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.frontend.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-card border border-border text-secondary-text">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.backend && (
                <div className="p-3 rounded-lg border border-border bg-secondary-bg/50">
                  <span className="text-text font-bold block mb-1.5">Backend:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.backend.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-card border border-border text-secondary-text">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.database && (
                <div className="p-3 rounded-lg border border-border bg-secondary-bg/50">
                  <span className="text-text font-bold block mb-1.5">Database:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.database.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-card border border-border text-secondary-text">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Challenges & Learnings */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              Challenges & Learnings
            </h4>
            <ul className="space-y-2">
              {project.challengesAndLearnings.map((item, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-lg border border-border/80 bg-secondary-bg/30 text-xs sm:text-sm text-secondary-text leading-relaxed flex items-start gap-2.5"
                >
                  <span className="font-mono text-accent font-bold mt-0.5">//</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-border bg-secondary-bg/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-secondary-text">
            {project.liveUrl ? 'Active deployment available' : 'Repository available on GitHub'}
          </div>

          <div className="flex items-center gap-3">
            {/* Live Demo button: ONLY if project.liveUrl exists */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-bg font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {/* GitHub repository button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-secondary-bg hover:border-accent/50 text-text font-mono text-xs uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
