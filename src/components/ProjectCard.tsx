import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { ProjectItem } from '../data/projects';
import { ProjectMockup } from './ProjectMockup';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenDetails }) => {
  const isReversed = index % 2 !== 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-accent/40 hover:bg-card/80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Editorial Text Content */}
        <div
          className={`lg:col-span-6 flex flex-col justify-between ${
            isReversed ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          {/* Header Metadata: Number & Category */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-accent/90 tracking-tighter">
              {project.projectNumber}
            </span>
            <div className="h-4 w-px bg-border" />
            <span className="font-mono text-xs text-secondary-text uppercase tracking-widest">
              {project.category}
            </span>
            {project.isFlagship && (
              <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-mono text-accent bg-accent/10 border border-accent/30 px-2.5 py-0.5 rounded-full">
                <Sparkles className="w-2.5 h-2.5" />
                Flagship
              </span>
            )}
          </div>

          {/* Project Title & Subtitle */}
          <div className="space-y-1.5 mb-4">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text tracking-tight group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base font-body font-medium text-secondary-text">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-secondary-text text-sm sm:text-base leading-relaxed mb-6 font-body">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary-bg border border-border text-secondary-text group-hover:border-border/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/80">
            {/* View Details Modal Trigger */}
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-text text-bg font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Details</span>
            </button>

            {/* GitHub Source Code Button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card/70 hover:bg-secondary-bg hover:border-accent/50 text-text font-mono text-xs uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>

            {/* Live Demo: ONLY if verified working URL exists */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-accent/40 bg-accent/10 hover:bg-accent/20 text-accent font-mono text-xs uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Interactive Preview Area with Hover Zoom */}
        <div
          className={`lg:col-span-6 w-full ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div
            onClick={() => onOpenDetails(project)}
            className="cursor-pointer group/preview relative rounded-xl overflow-hidden border border-border shadow-xl transition-all duration-500 transform group-hover:scale-[1.01] group-hover:border-accent/40"
          >
            <ProjectMockup projectId={project.id} />

            {/* Subtle Overlay on Hover */}
            <div className="absolute inset-0 bg-bg/40 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-accent text-accent font-mono text-xs font-semibold shadow-lg">
                <Eye className="w-3.5 h-3.5" />
                Click to inspect details
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
