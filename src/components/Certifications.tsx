import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, ArrowUpRight, X, ZoomIn, Calendar, Clock, Copy, Check } from 'lucide-react';
import certificateImg from '../assets/images/certificate.jpg';
import { profileData } from '../data/profile';

export const Certifications: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const cert = profileData.certification;
  const verificationCode = cert.verificationCode || 'ybmT-DkTL';
  const verificationUrl = cert.verificationUrl || 'https://verify.certiport.com';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(verificationCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Keyboard accessibility: Escape key and focus trap for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }

      if (e.key === 'Tab' && lightboxRef.current) {
        const focusableElements = lightboxRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isLightboxOpen]);

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative w-full py-24 sm:py-32 border-b border-border/40 scroll-mt-20 overflow-hidden bg-bg"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/70 backdrop-blur-sm text-accent text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>05 / CERTIFICATIONS</span>
          </div>
          <h2
            id="certifications-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-text leading-tight max-w-2xl"
          >
            Learning beyond the classroom.
          </h2>
          <p className="mt-4 text-secondary-text max-w-xl text-base sm:text-lg font-body">
            Independent certifications and verified skill milestones strengthening foundational software and web competencies.
          </p>
        </motion.div>

        {/* Premium Certificate Editorial Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Visual Certificate Preview & Lightbox Trigger */}
            <div className="lg:col-span-7 w-full">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setIsLightboxOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsLightboxOpen(true);
                  }
                }}
                aria-label="Click to enlarge HTML5 Application Development Certificate in lightbox"
                className="group cursor-pointer relative rounded-xl overflow-hidden border border-border bg-secondary-bg shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all duration-300 hover:border-accent/50"
              >
                {/* Header Tag Bar */}
                <div className="px-4 py-2.5 border-b border-border bg-card flex items-center justify-between text-xs font-mono text-secondary-text">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-accent" />
                    CERTIFICATE OF RECOGNITION
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-accent font-semibold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    <ZoomIn className="w-3 h-3" />
                    Click to Enlarge
                  </span>
                </div>

                {/* Certificate Asset Display */}
                <div className="relative aspect-[16/11] p-3 sm:p-4 bg-secondary-bg/90 flex items-center justify-center overflow-hidden">
                  <img
                    src={certificateImg}
                    alt="Certiport Information Technology Specialist HTML5 Application Development Certificate awarded to Vishnu G Pai"
                    width={2339}
                    height={1654}
                    className="w-full h-full object-contain rounded-lg border border-border/60 transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-bg/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 border border-accent text-accent font-mono text-xs font-semibold shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                      View High-Resolution Certificate
                    </span>
                  </div>
                </div>

                {/* Bottom Bar Caption */}
                <div className="px-4 py-2.5 border-t border-border bg-card/80 flex items-center justify-between text-[11px] font-mono text-secondary-text">
                  <span>RECIPIENT: {profileData.name.toUpperCase()}</span>
                  <span className="text-secondary-text/80">VERIFICATION: {verificationCode}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Editorial Details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary-bg text-secondary-text text-[11px] font-mono mb-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <span>Officially Verified Credential</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text tracking-tight mb-2">
                  {cert.title}
                </h3>

                <p className="text-sm sm:text-base font-body text-secondary-text leading-relaxed">
                  Earned through Certiport, this credential validates proficiency in modern web application engineering, covering semantic document architecture, rich client interactions, and accessible multimedia markup.
                </p>
              </div>

              {/* Verified Metadata Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl border border-border bg-secondary-bg/60">
                  <div className="text-[10px] text-secondary-text uppercase flex items-center gap-1.5 mb-1">
                    <Calendar className="w-3 h-3 text-accent" />
                    Date Awarded
                  </div>
                  <div className="text-text font-semibold">{cert.dateAwarded}</div>
                </div>

                <div className="p-3 rounded-xl border border-border bg-secondary-bg/60">
                  <div className="text-[10px] text-secondary-text uppercase flex items-center gap-1.5 mb-1">
                    <Clock className="w-3 h-3 text-accent" />
                    Validity Period
                  </div>
                  <div className="text-text font-semibold">{cert.validity}</div>
                </div>
              </div>

              {/* Issuer Specification */}
              <div className="p-3.5 rounded-xl border border-border bg-secondary-bg/40 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-secondary-text">
                  Issuing Organization:
                </div>
                <div className="text-xs sm:text-sm font-mono text-text font-medium">
                  {cert.issuer}
                </div>
              </div>

              {/* Verified Verification Module */}
              <div className="p-4 rounded-xl border border-accent/30 bg-accent/5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-text font-semibold">
                    Verification Code:
                  </span>
                  <div className="flex items-center gap-1.5">
                    <code className="px-2.5 py-1 rounded bg-card border border-border text-accent font-mono text-xs font-bold tracking-wider">
                      {verificationCode}
                    </code>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      aria-label="Copy verification code"
                      className="p-1.5 rounded bg-card border border-border text-secondary-text hover:text-text hover:border-accent/40 transition-colors"
                    >
                      {copiedCode ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-[11px] font-mono text-secondary-text leading-relaxed">
                  Enter code <span className="text-text font-semibold">{verificationCode}</span> on the official Certiport verification portal to authenticate this credential.
                </p>

                <a
                  href={verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-bg font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>Verify on Certiport</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Accessible Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div
            ref={lightboxRef}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate Image Lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 bg-bg/90 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col my-auto"
            >
              {/* Header Bar */}
              <div className="px-5 py-4 border-b border-border bg-card/95 flex items-center justify-between text-xs font-mono text-secondary-text">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-text font-semibold">HTML5 Application Development — Credential View</span>
                </div>

                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label="Close certificate lightbox"
                  className="p-2 rounded-lg border border-border bg-secondary-bg text-secondary-text hover:text-text hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Full Certificate Image */}
              <div className="p-3 sm:p-6 bg-secondary-bg/80 flex items-center justify-center max-h-[75vh] overflow-auto">
                <img
                  src={certificateImg}
                  alt="Full-size Certiport Certificate for HTML5 Application Development"
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg border border-border shadow-lg"
                />
              </div>

              {/* Footer Bar */}
              <div className="px-5 py-3.5 border-t border-border bg-card/90 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-secondary-text">
                <span>Code: <strong className="text-text">{verificationCode}</strong></span>
                <a
                  href={verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:underline"
                >
                  <span>Open verify.certiport.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
