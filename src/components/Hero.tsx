import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, ChevronDown } from 'lucide-react';
import { profileData } from '../data/profile';
import { OrbitalScene } from './OrbitalScene';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden pt-8 pb-14 md:py-20 scroll-mt-20 border-b border-border/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Editorial Content (7 cols on desktop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Active Status Indicator */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border bg-card/70 backdrop-blur-sm text-xs font-mono mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-secondary-text">
              Currently learning, experimenting and building.
            </span>
          </motion.div>

          {/* Small Category Kicker */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-3"
          >
            COMPUTER SCIENCE STUDENT / DEVELOPER IN PROGRESS
          </motion.p>

          {/* Prominent Name & Role */}
          <motion.div variants={itemVariants} className="space-y-1 mb-4">
            <h1
              id="hero-title"
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-text uppercase"
            >
              {profileData.name}
            </h1>
            <p className="text-xl sm:text-2xl font-heading font-medium text-secondary-text">
              Aspiring Full-Stack Developer
            </p>
          </motion.div>

          {/* Main Cinematic Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-text/95 tracking-tight leading-tight mb-5"
          >
            Building ideas. Creating digital experiences.
          </motion.h2>

          {/* Genuine Student Description */}
          <motion.p
            variants={itemVariants}
            className="text-secondary-text text-base sm:text-lg max-w-xl leading-relaxed mb-8"
          >
            I'm a Computer Science student passionate about technology, problem-solving and building practical digital products.
          </motion.p>

          {/* Call-to-Actions & Social Icon Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
          >
            {/* Primary Button */}
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-text text-bg font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border bg-card/60 hover:bg-secondary-bg hover:border-accent/60 text-text font-mono text-xs uppercase tracking-wider font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Let's Connect</span>
            </a>

            {/* Divider on larger screens */}
            <span className="hidden sm:inline-block w-px h-6 bg-border mx-1" />

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-full border border-border bg-card/60 hover:bg-secondary-bg hover:border-accent/60 text-secondary-text hover:text-text hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-full border border-border bg-card/60 hover:bg-secondary-bg hover:border-accent/60 text-secondary-text hover:text-text hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Orbital Visual (5 cols on desktop, responsive) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center relative w-full"
        >
          <OrbitalScene />
        </motion.div>
      </div>

      {/* Editorial Scroll Prompt Indicator */}
      <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center w-full relative z-10">
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, '#about')}
          aria-label="Scroll to About section"
          className="group inline-flex flex-col items-center gap-1.5 text-secondary-text hover:text-text transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-2"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase opacity-75 group-hover:opacity-100">
            Scroll to Explore
          </span>
          <ChevronDown className="w-4 h-4 text-accent animate-bounce" />
        </a>
      </div>
    </section>
  );
};
