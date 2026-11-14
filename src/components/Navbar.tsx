import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Journey', href: '#journey', id: 'journey' },
  { name: 'Certifications', href: '#certifications', id: 'certifications' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for glass/blur background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const sectionElements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Keyboard accessibility: Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');

    if (isMobileMenuOpen) {
      document.body.style.overflow = '';
      setIsMobileMenuOpen(false);
    }

    // Small delay ensures body overflow lock is cleared before triggering smooth scroll
    setTimeout(() => {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
        window.history.pushState(null, '', href);
      }
    }, 20);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-border shadow-sm py-3'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Left: Brand / Name */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="group inline-flex items-center gap-2 text-text font-heading font-bold text-sm tracking-wider uppercase transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
        >
          <span className="w-2 h-2 rounded-full bg-accent transition-transform group-hover:scale-125" />
          <span>{profileData.name}</span>
        </a>

        {/* Center: Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border border-border/80 bg-secondary-bg/60 backdrop-blur-sm"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-3.5 py-1 text-xs font-mono transition-colors rounded-full duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? 'text-text font-medium'
                    : 'text-secondary-text hover:text-text'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="desktop-active-pill"
                    className="absolute inset-0 bg-card rounded-full border border-border -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Small CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-text bg-card hover:bg-secondary-bg border border-border hover:border-accent/60 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md border border-border bg-card text-text hover:text-accent hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-border bg-bg/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-secondary-text mb-1">
                Navigation
              </span>
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-mono transition-colors ${
                      isActive
                        ? 'bg-card text-accent border border-border font-medium'
                        : 'text-secondary-text hover:text-text hover:bg-secondary-bg'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-border flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-mono uppercase tracking-wider bg-accent text-bg font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
