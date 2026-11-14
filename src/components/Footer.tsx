import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';

const FOOTER_NAV = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <footer className="w-full border-t border-border bg-secondary-bg/40 backdrop-blur-sm text-text font-body transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Brand & Subtitle */}
          <div className="space-y-3 max-w-sm">
            <div className="text-xl font-heading font-bold tracking-tight text-text uppercase">
              {profileData.name}
            </div>
            <p className="text-sm text-secondary-text leading-relaxed">
              Designed and built with curiosity.
            </p>
            <p className="text-xs text-secondary-text font-mono">
              B.Tech CSE student at FISAT, Angamaly, Kerala.
            </p>
          </div>

          {/* Navigation Shortcuts */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-secondary-text">
              Navigation
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-xs font-mono">
              {FOOTER_NAV.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-secondary-text hover:text-text hover:text-accent transition-colors duration-150 inline-block py-1"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-secondary-text">
              Connect
            </div>
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <div className="relative group">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                  className="p-2.5 rounded-lg border border-border bg-card text-secondary-text hover:text-text hover:border-accent/60 hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent flex items-center justify-center"
                >
                  <Github className="w-4 h-4" />
                </a>
                <span
                  role="tooltip"
                  className="pointer-events-none absolute -top-8 left-0 sm:left-1/2 sm:-translate-x-1/2 px-2.5 py-1 rounded bg-card border border-border text-[11px] font-mono text-text whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 shadow-lg z-20"
                >
                  Visit GitHub profile
                </span>
              </div>

              {/* LinkedIn */}
              <div className="relative group">
                <a
                  href={profileData.contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn profile"
                  className="p-2.5 rounded-lg border border-border bg-card text-secondary-text hover:text-text hover:border-accent/60 hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent flex items-center justify-center"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <span
                  role="tooltip"
                  className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-card border border-border text-[11px] font-mono text-text whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 shadow-lg z-20"
                >
                  Visit LinkedIn profile
                </span>
              </div>

              {/* Email */}
              <div className="relative group">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  aria-label="Send a mail to vishnugpai007@gmail.com"
                  className="p-2.5 rounded-lg border border-border bg-card text-secondary-text hover:text-text hover:border-accent/60 hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent flex items-center justify-center"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <span
                  role="tooltip"
                  className="pointer-events-none absolute -top-8 right-0 px-2.5 py-1 rounded bg-card border border-border text-[11px] font-mono text-text whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 shadow-lg z-20"
                >
                  Send a mail to vishnugpai007@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs font-mono text-secondary-text">
          <div className="text-center sm:text-left">
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card hover:bg-secondary-bg hover:border-accent/50 text-text transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
