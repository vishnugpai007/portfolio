import { MotionConfig } from 'framer-motion';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-bg text-text bg-grid-texture flex flex-col font-body selection:bg-accent selection:text-bg">
        {/* Quick refined top loading indicator */}
        <PageLoader />

        {/* Skip to Main Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-bg focus:font-mono focus:font-bold focus:rounded-md focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Main Semantic Content Area */}
        <main id="main-content" className="flex-1 w-full flex flex-col">
          {/* 01: Hero Section */}
          <Hero />

          {/* 02: About Section */}
          <About />

          {/* 03: Projects Section */}
          <Projects />

          {/* 04: Skills & Toolkit Section */}
          <Skills />

          {/* 05: Academic & Dev Journey Section */}
          <Journey />

          {/* 06: Certifications Section */}
          <Certifications />

          {/* 07: Contact & Messaging Section */}
          <Contact />
        </main>

        {/* Global Semantic Footer */}
        <Footer />
      </div>
    </MotionConfig>
  );
}
