import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

const CONTACT_CHANNELS = [
  {
    id: 'email',
    name: 'Email',
    subLabel: 'Send a mail to vishnugpai007@gmail.com',
    handle: profileData.contact.email,
    href: `mailto:${profileData.contact.email}`,
    icon: Mail,
    isExternal: false,
    description: 'Direct communication for project inquiries, collaboration, and questions.',
    actionText: 'Compose Email',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    subLabel: 'Professional Network & Profile',
    handle: 'vishnu-g-pai',
    href: profileData.contact.linkedIn,
    icon: Linkedin,
    isExternal: true,
    description: 'Connect with me professionally, explore background, and discuss software development.',
    actionText: 'Connect on LinkedIn',
  },
  {
    id: 'github',
    name: 'GitHub',
    subLabel: 'Source Repositories & Code',
    handle: 'vishnugpai007',
    href: profileData.contact.github,
    icon: Github,
    isExternal: true,
    description: 'Explore my open source repositories, commit history, and active project builds.',
    actionText: 'View GitHub Profile',
  },
];

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full py-24 sm:py-32 scroll-mt-20 overflow-hidden bg-bg"
    >
      {/* Background Subtle Gradient & Geometry */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-radial-glow from-accent/10 via-transparent to-transparent opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
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
            <span>06 / CONTACT</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-text leading-tight max-w-3xl"
          >
            Have an idea? Let's build something.
          </h2>
          <p className="mt-4 text-secondary-text max-w-2xl text-base sm:text-lg font-body leading-relaxed">
            I'm always interested in connecting with developers, collaborating on projects, exploring opportunities and learning from new challenges.
          </p>
        </motion.div>

        {/* 3 Channel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTACT_CHANNELS.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <motion.a
                key={channel.id}
                href={channel.href}
                target={channel.isExternal ? '_blank' : undefined}
                rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:bg-card/90 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div>
                  {/* Top Bar with Icon & Action Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl border border-border bg-secondary-bg/80 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:border-accent/40">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="p-2 rounded-full border border-border/80 bg-secondary-bg/40 text-secondary-text group-hover:text-accent group-hover:border-accent/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Label & Handle */}
                  <div className="space-y-1 mb-3">
                    <div className="text-[11px] font-mono text-secondary-text uppercase tracking-wider">
                      {channel.name}
                    </div>
                    <div className="text-lg sm:text-xl font-heading font-bold text-text group-hover:text-accent transition-colors break-all">
                      {channel.handle}
                    </div>
                  </div>

                  {/* SubLabel / Action Hint */}
                  <p className="text-xs font-mono text-accent/90 mb-3 font-medium">
                    {channel.subLabel}
                  </p>

                  {/* Context description */}
                  <p className="text-xs sm:text-sm font-body text-secondary-text leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-secondary-text group-hover:text-text transition-colors">
                  <span>{channel.actionText}</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
