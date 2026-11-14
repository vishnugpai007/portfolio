import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';

interface TimelineStep {
  period: string;
  badge: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  focusItems: string[];
  isCurrent?: boolean;
  isFuture?: boolean;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    period: '2029',
    badge: 'TARGET MILESTONE',
    title: 'B.Tech in Computer Science & Engineering',
    institution: profileData.education.institution,
    location: profileData.education.location,
    description:
      'Expected graduation as a well-rounded Computer Science graduate prepared for software engineering, modern web applications, and collaborative engineering environments.',
    focusItems: ['Full-Stack Engineering', 'Advanced Software Systems', 'Industry Contribution'],
    isFuture: true,
  },
  {
    period: 'CURRENT',
    badge: 'STAGE 02 // IN PROGRESS',
    title: 'Second-Year CSE Student & Practical Building',
    institution: profileData.education.institution,
    location: profileData.education.location,
    description:
      'Actively exploring full-stack web applications, database management, and object-oriented programming. Building hands-on projects like CampusFix to solve practical campus problems and enhance real-world coding ability.',
    focusItems: [
      'Full-Stack Web Development',
      'Database Modeling & SQL',
      'Object-Oriented Programming (Java, Python)',
      'Practical Project Architecture',
    ],
    isCurrent: true,
  },
  {
    period: 'FOUNDATION',
    badge: 'STAGE 01 // CORE',
    title: 'Computer Science Fundamentals & Web Discovery',
    institution: 'Academic Coursework & Self-Directed Practice',
    location: profileData.location,
    description:
      'Developed foundational programming intuition in C, algorithmic logic, computer organization, and completed HTML5 Web Application Development fundamentals while experimenting with modern frontend interfaces.',
    focusItems: [
      'C Programming & Logic',
      'HTML5 Application Development (Certiport)',
      'Frontend Exploration (AngularJS, JS, CSS)',
      'Algorithmic Problem Solving',
    ],
  },
];

export const Journey: React.FC = () => {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
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
            <span>04 / JOURNEY</span>
          </div>
          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-text leading-tight max-w-2xl"
          >
            Learning today. Building for tomorrow.
          </h2>
          <p className="mt-4 text-secondary-text max-w-xl text-base sm:text-lg font-body">
            A modest, honest timeline reflecting my ongoing undergraduate education and deliberate steps toward full-stack engineering proficiency.
          </p>
        </motion.div>

        {/* Minimalist Vertical Timeline Rail */}
        <div className="relative border-l border-border/80 ml-3 sm:ml-6 md:ml-36 space-y-12 sm:space-y-16">
          {TIMELINE_STEPS.map((step, idx) => (
            <motion.div
              key={step.period}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-7 sm:pl-10"
            >
              {/* Timeline Node Point on the Rail */}
              <div
                className={`absolute -left-[9px] top-1.5 w-[17px] h-[17px] rounded-full border-2 flex items-center justify-center transition-transform ${
                  step.isCurrent
                    ? 'border-accent bg-bg shadow-[0_0_12px_rgba(117,153,255,0.6)]'
                    : step.isFuture
                    ? 'border-border bg-secondary-bg'
                    : 'border-border bg-card'
                }`}
              >
                {step.isCurrent && (
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                )}
              </div>

              {/* Year Label (Positioned to the left on desktop, inline on mobile) */}
              <div className="md:absolute md:-left-36 md:top-0 md:w-28 md:text-right mb-2 md:mb-0">
                <span
                  className={`font-mono font-bold tracking-tight text-xl sm:text-2xl ${
                    step.isCurrent
                      ? 'text-accent'
                      : step.isFuture
                      ? 'text-text'
                      : 'text-secondary-text'
                  }`}
                >
                  {step.period}
                </span>
              </div>

              {/* Content Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  step.isCurrent
                    ? 'border-accent/40 bg-card/80 shadow-lg'
                    : 'border-border bg-card/50 hover:bg-card/70'
                }`}
              >
                {/* Badge & Stage Metadata */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                      step.isCurrent
                        ? 'border-accent/40 bg-accent/10 text-accent font-semibold'
                        : 'border-border bg-secondary-bg text-secondary-text'
                    }`}
                  >
                    {step.badge}
                  </span>
                  {step.isCurrent && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-accent">
                      <Sparkles className="w-3 h-3" />
                      Active Stage
                    </span>
                  )}
                </div>

                {/* Milestone Heading */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-text tracking-tight mb-1.5">
                  {step.title}
                </h3>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-secondary-text mb-4">
                  <span className="flex items-center gap-1.5 text-text">
                    <GraduationCap className="w-3.5 h-3.5 text-accent" />
                    {step.institution}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-secondary-text" />
                    {step.location}
                  </span>
                </div>

                {/* Narrative Description */}
                <p className="text-secondary-text text-sm sm:text-base leading-relaxed mb-6 font-body">
                  {step.description}
                </p>

                {/* Focus Areas Tags */}
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-secondary-text mb-2.5">
                    Core Learning &amp; Focus Domains:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {step.focusItems.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary-bg border border-border text-text"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
