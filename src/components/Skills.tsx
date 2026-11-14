import React from 'react';
import { motion } from 'framer-motion';
import { SiC, SiPython, SiJavascript, SiHtml5, SiAngular } from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';
import { Compass, Lightbulb, Code2 } from 'lucide-react';
import { skillCategories, interestAreas, SkillItem } from '../data/skills';

// Real icon mapping dictionary
const ICON_MAP: Record<string, React.ReactElement> = {
  c: <SiC className="w-6 h-6 text-[#7599FF]" />,
  python: <SiPython className="w-6 h-6 text-[#7599FF]" />,
  java: <FaJava className="w-6 h-6 text-[#7599FF]" />,
  html5: <SiHtml5 className="w-6 h-6 text-[#7599FF]" />,
  css3: <FaCss3Alt className="w-6 h-6 text-[#7599FF]" />,
  javascript: <SiJavascript className="w-6 h-6 text-[#7599FF]" />,
  angularjs: <SiAngular className="w-6 h-6 text-[#7599FF]" />,
  sql: <TbSql className="w-6 h-6 text-[#7599FF]" />,
};

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative w-full py-24 sm:py-32 border-b border-border/40 scroll-mt-20 overflow-hidden bg-bg"
    >
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-fine opacity-25 pointer-events-none" />

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
            <span>03 / TOOLKIT</span>
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-text leading-tight max-w-2xl"
          >
            Tools I use. Technologies I explore.
          </h2>
          <p className="mt-4 text-secondary-text max-w-xl text-base sm:text-lg font-body">
            A genuine survey of languages, frontend technologies, and database fundamentals practiced through academic coursework and practical projects.
          </p>
        </motion.div>

        {/* Technical Categories Stack */}
        <div className="space-y-12">
          {skillCategories.map((categoryGroup, groupIdx) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm"
            >
              {/* Category Sub-Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-4 border-b border-border/80">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent font-semibold px-2 py-0.5 rounded bg-secondary-bg border border-border">
                    {categoryGroup.tag}
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-text tracking-tight">
                    {categoryGroup.category}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-secondary-text font-mono max-w-md">
                  {categoryGroup.description}
                </p>
              </div>

              {/* Skills Interactive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryGroup.skills.map((skill: SkillItem) => (
                  <div
                    key={skill.name}
                    className="group relative p-4 rounded-xl border border-border bg-secondary-bg/50 hover:bg-secondary-bg hover:border-accent/50 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="p-2.5 rounded-lg border border-border bg-card text-accent transition-transform duration-200 group-hover:scale-110">
                        {ICON_MAP[skill.iconId] || <Code2 className="w-6 h-6 text-accent" />}
                      </div>
                      <div>
                        <span className="font-heading font-bold text-text text-base group-hover:text-accent transition-colors">
                          {skill.name}
                        </span>
                        <div className="text-[10px] font-mono text-secondary-text uppercase tracking-wider">
                          Verified Tool
                        </div>
                      </div>
                    </div>

                    <p className="text-xs font-mono text-secondary-text/90 leading-relaxed border-t border-border/40 pt-2.5">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visually Separate "Areas of Interest" Group */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-2xl border border-dashed border-accent/40 bg-secondary-bg/40 relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          {/* Explicit Differentiation Callout */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>ASPIRATIONS &amp; HORIZONS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text tracking-tight">
                Areas of Interest
              </h3>
            </div>
            <div className="p-3 rounded-lg border border-border bg-card/80 text-xs font-mono text-secondary-text max-w-md">
              <span className="text-accent font-semibold block mb-0.5">
                // Note on Distinction:
              </span>
              These reflect engineering domains and career interests I am actively exploring and learning—not claimed proficiencies.
            </div>
          </div>

          {/* Interactive Interest Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {interestAreas.map((interest, idx) => (
              <div
                key={interest.title}
                className="group p-5 rounded-xl border border-border bg-card/70 hover:bg-card hover:border-accent/60 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-secondary-text group-hover:text-accent transition-colors">
                    <span className="font-mono text-xs font-bold text-accent">0{idx + 1}</span>
                    <Lightbulb className="w-4 h-4 opacity-75 group-hover:opacity-100" />
                  </div>
                  <h4 className="font-heading font-semibold text-text text-base sm:text-lg mb-2 group-hover:text-accent transition-colors">
                    {interest.title}
                  </h4>
                </div>
                <p className="text-xs font-body text-secondary-text leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
