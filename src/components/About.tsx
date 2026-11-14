import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, GraduationCap, Calendar, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import profileImg from '../assets/images/profile.jpg';
import { focusAreas } from '../data/skills';

const INFO_DETAILS = [
  {
    label: 'DEGREE',
    value: 'B.Tech CSE',
    icon: GraduationCap,
  },
  {
    label: 'INSTITUTION',
    value: 'FISAT, Angamaly',
    icon: BookOpen,
  },
  {
    label: 'GRADUATION',
    value: 'Expected 2029',
    icon: Calendar,
  },
  {
    label: 'LOCATION',
    value: 'Kerala, India',
    icon: MapPin,
  },
];

export const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full py-24 sm:py-32 border-b border-border/40 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header: Label & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur-sm text-accent text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>01 / ABOUT</span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-text leading-tight max-w-2xl"
          >
            Curious by nature. Driven to build.
          </h2>
        </motion.div>

        {/* Asymmetric 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column (5 cols): Editorial Photo Frame & Academic Meta */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Editorial Frame with Viewfinder Accents */}
            <div className="relative group w-full max-w-[420px] mx-auto lg:max-w-none rounded-xl overflow-hidden border border-border bg-card shadow-2xl">
              {/* Top Meta Bar */}
              <div className="px-4 py-2.5 border-b border-border bg-secondary-bg/80 flex items-center justify-between text-[11px] font-mono text-secondary-text">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent/80" />
                  FIG. 01 — IDENTITY
                </span>
                <span className="text-[10px] uppercase tracking-wider text-secondary-text/80">
                  FISAT // CSE
                </span>
              </div>

              {/* Image Frame */}
              <div className="relative aspect-[4/5] bg-secondary-bg flex items-center justify-center p-3 sm:p-4">
                <img
                  src={profileImg}
                  alt="Portrait of Vishnu G Pai"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-[center_20%] rounded-lg border border-border/60 transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />

                {/* Corner Focal Brackets */}
                <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-accent pointer-events-none" />
                <div className="absolute top-6 right-6 w-3 h-3 border-t-2 border-r-2 border-accent pointer-events-none" />
                <div className="absolute bottom-6 left-6 w-3 h-3 border-b-2 border-l-2 border-accent pointer-events-none" />
                <div className="absolute bottom-6 right-6 w-3 h-3 border-b-2 border-r-2 border-accent pointer-events-none" />
              </div>

              {/* Bottom Frame Caption */}
              <div className="p-3.5 bg-secondary-bg/60 border-t border-border flex items-center justify-between text-xs font-mono text-secondary-text">
                <span>VISHNU G PAI</span>
                <span className="text-accent text-[11px]">B.TECH CSE '29</span>
              </div>
            </div>

            {/* Subtle Editorial Tag Pill */}
            <div className="p-4 rounded-lg border border-border/80 bg-secondary-bg/30 text-xs font-mono text-secondary-text leading-relaxed">
              <span className="text-text font-semibold block mb-1">
                // ACADEMIC FOCUS
              </span>
              Undergraduate coursework at FISAT emphasizing computational thinking, data structures, and foundational engineering principles.
            </div>
          </motion.div>

          {/* Right Column (7 cols): Narrative Text & Info Details */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Editorial Storytelling Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-secondary-text font-body">
              <p className="text-text font-medium text-lg sm:text-xl leading-relaxed">
                I'm Vishnu G Pai, a second-year Computer Science and Engineering student at Federal Institute of Science and Technology (FISAT), Angamaly.
              </p>

              <p>
                I'm passionate about software development, technology and problem-solving. I enjoy exploring new technologies, developing practical applications and turning ideas into solutions that can make everyday tasks easier.
              </p>

              <p>
                My technical interests include full-stack web development, frontend development, backend systems and database management.
              </p>

              <p>
                I believe the best way to learn technology is by building things. Every project gives me an opportunity to experiment, solve problems and improve my understanding of software development.
              </p>

              <p className="text-text/90 font-medium">
                I'm continuously learning and working towards becoming a skilled full-stack developer.
              </p>
            </div>

            {/* Quick Info Grid (No fake statistics, honest metadata) */}
            <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4">
              {INFO_DETAILS.map((info) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={info.label}
                    className="p-3.5 rounded-lg border border-border bg-card/60 flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-secondary-text mb-2">
                      <IconComponent className="w-3.5 h-3.5 text-accent" />
                      <span>{info.label}</span>
                    </div>
                    <div className="font-heading font-semibold text-text text-sm sm:text-base">
                      {info.value}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* "More About Me" Expand Interaction */}
            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                aria-controls="about-more-content"
                className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-border bg-card hover:bg-secondary-bg hover:border-accent/60 text-xs font-mono text-text transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>{isExpanded ? 'Show Less Details' : 'More About My Focus & Foundation'}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-secondary-text transition-transform duration-200 ${
                    isExpanded ? 'rotate-180 text-accent' : 'group-hover:translate-y-0.5'
                  }`}
                />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    id="about-more-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 p-5 rounded-xl border border-border bg-card/70 backdrop-blur-sm space-y-5 text-sm font-body">
                      {/* Certified Foundation */}
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                          <span>Certification</span>
                        </div>
                        <p className="text-text font-medium">
                          HTML5 Application Development
                        </p>
                        <p className="text-xs text-secondary-text mt-0.5">
                          Certified by Certiport (Pearson VUE) in semantic web markup and application development.
                        </p>
                      </div>

                      {/* Core Interest Areas */}
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-secondary-text mb-2.5">
                          Key Areas of Interest
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {focusAreas.map((area) => (
                            <span
                              key={area}
                              className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary-bg border border-border text-text"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
