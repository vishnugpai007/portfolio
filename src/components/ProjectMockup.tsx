import React from 'react';
import { Wifi, Wrench, CheckCircle, Clock, ArrowUp, ShoppingBag, Search } from 'lucide-react';

interface ProjectMockupProps {
  projectId: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ projectId }) => {
  if (projectId === 'campusfix') {
    return (
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-secondary-bg/95 rounded-xl border border-border overflow-hidden flex flex-col font-mono text-xs select-none">
        {/* Concept Watermark / Indicator */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card/90 border border-border/80 text-[10px] text-accent font-mono shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>Interface concept</span>
        </div>

        {/* Mock Browser Header */}
        <div className="px-4 py-3 border-b border-border bg-card/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="text-[11px] text-secondary-text font-mono ml-2">campusfix.local/dashboard</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-accent border border-accent/30 bg-accent/10 px-2 py-0.5 rounded">
            Role: Staff Ops
          </span>
        </div>

        {/* Dashboard Content Mockup */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col gap-3.5 bg-bg/40 overflow-hidden">
          {/* Status Metrics Strip */}
          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="p-2 rounded bg-card/70 border border-border">
              <div className="text-secondary-text">Pending</div>
              <div className="text-sm font-bold text-yellow-400 mt-0.5">8</div>
            </div>
            <div className="p-2 rounded bg-card/70 border border-border">
              <div className="text-secondary-text">In Progress</div>
              <div className="text-sm font-bold text-accent mt-0.5">4</div>
            </div>
            <div className="p-2 rounded bg-card/70 border border-border">
              <div className="text-secondary-text">Resolved</div>
              <div className="text-sm font-bold text-emerald-400 mt-0.5">31</div>
            </div>
          </div>

          {/* Simulated Ticket List */}
          <div className="space-y-2 flex-1">
            {/* Ticket 1 */}
            <div className="p-3 rounded-lg border border-border bg-card/90 flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded bg-accent/10 text-accent border border-accent/20 mt-0.5">
                  <Wrench className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-text font-semibold text-[11px] sm:text-xs">
                    Smart Board Malfunction — Hall B204
                  </div>
                  <div className="text-[10px] text-secondary-text mt-0.5">
                    Audio input failure & touch calibration offset.
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] bg-accent/15 text-accent border border-accent/30 whitespace-nowrap">
                <Clock className="w-2.5 h-2.5" />
                In Progress
              </span>
            </div>

            {/* Ticket 2 */}
            <div className="p-3 rounded-lg border border-border bg-card/90 flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mt-0.5">
                  <Wifi className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-text font-semibold text-[11px] sm:text-xs">
                    Wi-Fi Dropping Frequently — Hostel C
                  </div>
                  <div className="text-[10px] text-secondary-text mt-0.5">
                    Repeated packet drops on 3rd floor access point.
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] bg-yellow-400/15 text-yellow-300 border border-yellow-400/30 whitespace-nowrap">
                <ArrowUp className="w-2.5 h-2.5" />
                14 Upvotes
              </span>
            </div>

            {/* Ticket 3 (Resolved) */}
            <div className="p-3 rounded-lg border border-border/60 bg-card/50 flex items-start justify-between gap-3 opacity-75">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-text font-medium text-[11px] sm:text-xs">
                    Plumbing Leak — 2nd Floor Restroom
                  </div>
                  <div className="text-[10px] text-secondary-text mt-0.5">
                    Resolved by Campus Maintenance Unit.
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] bg-emerald-400/15 text-emerald-300 border border-emerald-400/30 whitespace-nowrap">
                Resolved
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Project 02: AngularJS Bike Store Mockup
  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-secondary-bg/95 rounded-xl border border-border overflow-hidden flex flex-col font-mono text-xs select-none">
      {/* Concept Watermark */}
      <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card/90 border border-border/80 text-[10px] text-accent font-mono shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span>Interface concept</span>
      </div>

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
