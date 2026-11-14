import React from 'react';
import { ShoppingBag, Search } from 'lucide-react';
import campusfixImg from '../assets/images/campusfix.png';

interface ProjectMockupProps {
  projectId: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ projectId }) => {
  if (projectId === 'campusfix') {
    return (
      <div className="relative w-full h-full min-h-[260px] sm:min-h-[340px] bg-secondary-bg/95 rounded-xl border border-border overflow-hidden flex flex-col font-mono text-xs select-none">
        {/* Browser Chrome Header */}
        <div className="px-4 py-3 border-b border-border bg-card/90 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="text-[11px] text-secondary-text font-mono ml-2">campusfix.local/portal</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-accent border border-accent/30 bg-accent/10 px-2 py-0.5 rounded">
            Live Preview
          </span>
        </div>

        {/* Real Screenshot with Transition Effects */}
        <div className="relative flex-1 bg-black/40 overflow-hidden aspect-[16/10] sm:aspect-auto flex items-center justify-center">
          <img
            src={campusfixImg}
            alt="CampusFix campus maintenance portal dashboard screenshot showing issue reporting options and login buttons"
            width={1440}
            height={900}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/preview:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    );
  }

  // Project 02: AngularJS Bike Store Mockup
  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-secondary-bg/95 rounded-xl border border-border overflow-hidden flex flex-col font-mono text-xs select-none">
      {/* Mock Browser Header */}
      <div className="px-4 py-3 border-b border-border bg-card/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-[11px] text-secondary-text font-mono ml-2">bikestore.local/catalog</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-secondary-text">
          ng-app="bikeStore"
        </span>
      </div>

      {/* Mockup Store Interface */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col gap-3.5 bg-bg/40">
        {/* Search Input Filter */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card text-secondary-text text-[11px]">
          <Search className="w-3.5 h-3.5 text-accent" />
          <span>ng-model="searchBike" | Royal Enfield</span>
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-2 gap-3 flex-1">
          <div className="p-3 rounded-lg border border-border bg-card/90 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-accent uppercase">350cc Cruiser</div>
              <div className="text-text font-semibold text-xs mt-1">Classic 350</div>
              <div className="text-[10px] text-secondary-text mt-1">Retro styling, ABS</div>
            </div>
            <div className="mt-3 pt-2 border-t border-border/60 flex items-center justify-between">
              <span className="font-bold text-text text-xs">₹2,20,000</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-accent/20 text-accent">10% OFF</span>
            </div>
          </div>

          <div className="p-3 rounded-lg border border-border bg-card/90 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-accent uppercase">Sports Performance</div>
              <div className="text-text font-semibold text-xs mt-1">Duke 390</div>
              <div className="text-[10px] text-secondary-text mt-1">Liquid-cooled DOHC</div>
            </div>
            <div className="mt-3 pt-2 border-t border-border/60 flex items-center justify-between">
              <span className="font-bold text-text text-xs">₹3,10,000</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-accent/20 text-accent">8% OFF</span>
            </div>
          </div>
        </div>

        {/* Active Cart Footer Bar */}
        <div className="p-2.5 rounded-lg border border-border bg-card/70 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 text-text">
            <ShoppingBag className="w-3.5 h-3.5 text-accent" />
            <span>Active Cart: 1 item</span>
          </div>
          <span className="text-accent font-semibold">Total: ₹1,98,000</span>
        </div>
      </div>
    </div>
  );
};
