import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

interface SectionPlaceholderProps {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
}

const SectionPlaceholder: React.FC<SectionPlaceholderProps> = ({ id, title, subtitle, tag }) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="min-h-[70vh] flex flex-col justify-center px-4 sm:px-6 md:px-8 py-20 border-b border-border/50 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-accent text-xs font-mono mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>{tag}</span>
        </div>
        <h2
          id={`${id}-heading`}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-text mb-3"
        >
          {title}
        </h2>
        <p className="text-secondary-text max-w-xl text-base sm:text-lg font-body">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text bg-grid-texture flex flex-col font-body selection:bg-accent selection:text-bg">
      {/* Skip to Main Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-bg focus:font-mono focus:font-bold focus:rounded-md focus:shadow-xl focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Semantic Content Area with Section Placeholders */}
      <main id="main-content" className="flex-1 w-full flex flex-col">
        <SectionPlaceholder
          id="home"
          tag="01 // HERO"
          title="Home"
          subtitle="Cinematic Hero & Builder Identity section placeholder."
        />
        <SectionPlaceholder
          id="about"
          tag="02 // PROFILE"
          title="About"
          subtitle="Editorial background, education at FISAT, and personal focus placeholder."
        />
        <SectionPlaceholder
          id="projects"
          tag="03 // WORK"
          title="Projects"
          subtitle="Genuine project showcases: CampusFix and First Project – AngularJS placeholder."
        />
        <SectionPlaceholder
          id="skills"
          tag="04 // CAPABILITIES"
          title="Skills"
          subtitle="Core programming, frontend, and database fundamentals placeholder."
        />
        <SectionPlaceholder
          id="journey"
          tag="05 // TIMELINE"
          title="Journey"
          subtitle="Second-year CS student academic & development timeline placeholder."
        />
        <SectionPlaceholder
          id="contact"
          tag="06 // CONNECT"
          title="Contact"
          subtitle="Get in touch via email, LinkedIn, or GitHub placeholder."
        />
      </main>

      {/* Global Semantic Footer */}
      <Footer />
    </div>
  );
}
