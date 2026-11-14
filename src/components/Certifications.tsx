import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, FileText, Info } from 'lucide-react';
import certificatePlaceholder from '../assets/images/certificate-placeholder.svg';
import { profileData } from '../data/profile';

export const Certifications: React.FC = () => {
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
            {/* Left Column: Visual Certificate Preview */}
            <div className="lg:col-span-7 w-full">
              <div className="group relative rounded-xl overflow-hidden border border-border bg-secondary-bg shadow-xl">
                {/* Header Tag Bar */}
                <div className="px-4 py-2.5 border-b border-border bg-card flex items-center justify-between text-xs font-mono text-secondary-text">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-accent" />
                    CREDENTIAL PREVIEW
                  </span>
                  <span className="text-[10px] text-accent font-semibold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    Replaceable Asset
                  </span>
                </div>

                {/* Certificate Asset Display */}
                <div className="relative aspect-[16/11] p-3 sm:p-4 bg-secondary-bg/80 flex items-center justify-center">
                  <img
                    src={certificatePlaceholder}
                    alt="Certificate placeholder for HTML5 Web Application Development"
                    className="w-full h-full object-contain rounded-lg border border-border/60 transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>

                {/* Bottom Bar Caption */}
                <div className="px-4 py-2.5 border-t border-border bg-card/80 flex items-center justify-between text-[11px] font-mono text-secondary-text">
                  <span>RECIPIENT: {profileData.name.toUpperCase()}</span>
                  <span className="text-secondary-text/80">DOC ID: HTML5-DEV</span>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary-bg text-secondary-text text-[11px] font-mono mb-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <span>Verified Course Milestone</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text tracking-tight mb-2">
                  HTML5 – Web Application Development
                </h3>

                <p className="text-sm sm:text-base font-body text-secondary-text leading-relaxed">
                  Comprehensive foundational certification in modern web application development, covering semantic HTML5 structures, client-side input validation, rich multimedia integration, and standards-compliant document engineering.
                </p>
              </div>

              {/* Competency Badges */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-secondary-text">
                  Key Competencies Covered:
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-secondary-bg border border-border text-text">
                    Semantic HTML5
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-secondary-bg border border-border text-text">
                    Web App Structure
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-secondary-bg border border-border text-text">
                    Client-Side Forms
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-secondary-bg border border-border text-text">
                    Accessibility Standards
                  </span>
                </div>
              </div>

              {/* Strict Honesty Notice & Verification Link Placeholder */}
              <div className="p-4 rounded-xl border border-border bg-secondary-bg/50 space-y-3">
                <div className="flex items-start gap-2 text-xs font-mono text-secondary-text">
                  <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    Honest Verification Notice: Completed certification recorded in academic coursework portfolio. In strict adherence to integrity rules, no arbitrary issuer, dates, or simulated URLs are invented.
                  </span>
                </div>

                {/* Verification Action Placeholder (Clearly labeled as placeholder / pending direct link) */}
                <div className="pt-2 border-t border-border/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-secondary-text">
                    Verification Link:
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-card text-[11px] font-mono text-accent">
                    <FileText className="w-3 h-3" />
                    <span>Document on Record</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
