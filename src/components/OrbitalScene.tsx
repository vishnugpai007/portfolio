import React, { useEffect, useState } from 'react';

export const OrbitalScene: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Pause animation when tab is inactive/hidden
  useEffect(() => {
    const handleVisibility = () => {
      setIsVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  // Respect system prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const shouldAnimate = isVisible && !prefersReducedMotion;
  const playState = shouldAnimate ? 'running' : 'paused';

  return (
    <div
      className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] aspect-square mx-auto flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* Ambient background glow behind visual */}
      <div className="absolute inset-0 bg-radial-glow from-accent/15 via-accent/5 to-transparent rounded-full blur-3xl pointer-events-none transform -translate-y-2" />

      {/* Embedded scoped keyframes for hardware-accelerated orbital rotation */}
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes pulse-core {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.96); }
        }
        .anim-orbit-1 {
          transform-origin: 300px 300px;
          animation: orbit-cw 38s linear infinite;
        }
        .anim-orbit-2 {
          transform-origin: 300px 300px;
          animation: orbit-ccw 52s linear infinite;
        }
        .anim-orbit-3 {
          transform-origin: 300px 300px;
          animation: orbit-cw 68s linear infinite;
        }
        .anim-counter-1 {
          animation: orbit-ccw 38s linear infinite;
        }
        .anim-counter-2 {
          animation: orbit-cw 52s linear infinite;
        }
        .anim-counter-3 {
          animation: orbit-ccw 68s linear infinite;
        }
        .anim-pulse-core {
          transform-origin: 300px 300px;
          animation: pulse-core 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .anim-orbit-1,
          .anim-orbit-2,
          .anim-orbit-3,
          .anim-counter-1,
          .anim-counter-2,
          .anim-counter-3,
          .anim-pulse-core {
            animation: none !important;
          }
        }
        .animations-paused * {
          animation-play-state: paused !important;
        }
      `}</style>

      <svg
        viewBox="0 0 600 600"
        className={`w-full h-full overflow-visible drop-shadow-[0_0_25px_rgba(117,153,255,0.12)] ${
          !shouldAnimate ? 'animations-paused' : ''
        }`}
      >
        <defs>
          {/* Radial gradient for central glowing sphere */}
          <radialGradient id="centralCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7599FF" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#7599FF" stopOpacity="0.4" />
            <stop offset="75%" stopColor="#20232B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#101116" stopOpacity="1" />
          </radialGradient>

          {/* Core sphere inner lighting */}
          <linearGradient id="coreFacet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A5A7AE" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#7599FF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#101116" stopOpacity="0.8" />
          </linearGradient>

          {/* Accent particle glow filter */}
          <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ------------------------------------------------------------------ */}
        {/* BASE STRUCTURAL GRID & CELESTIAL AXES                             */}
        {/* ------------------------------------------------------------------ */}
        <g stroke="#343741" strokeWidth="0.75" strokeDasharray="3 5" opacity="0.4">
          <line x1="300" y1="40" x2="300" y2="560" />
          <line x1="40" y1="300" x2="560" y2="300" />
          <line x1="120" y1="120" x2="480" y2="480" strokeDasharray="2 6" />
          <line x1="120" y1="480" x2="480" y2="120" strokeDasharray="2 6" />
        </g>

        {/* Outer Coordinate Ring & Astrolabe Ticks */}
        <circle
          cx="300"
          cy="300"
          r="275"
          fill="none"
          stroke="#343741"
          strokeWidth="1"
          opacity="0.3"
        />
        <circle
          cx="300"
          cy="300"
          r="268"
          fill="none"
          stroke="#343741"
          strokeWidth="0.75"
          strokeDasharray="2 8"
          opacity="0.45"
        />

        {/* Technical coordinates and orientation labels */}
        <g className="font-mono text-[9px] fill-[#A5A7AE]" opacity="0.6">
          <text x="300" y="22" textAnchor="middle" letterSpacing="0.15em">
            00° // SYS.CORE
          </text>
          <text x="585" y="303" textAnchor="end" letterSpacing="0.15em">
            090°E
          </text>
          <text x="300" y="588" textAnchor="middle" letterSpacing="0.15em">
            180°S // 10.18°N FISAT
          </text>
          <text x="15" y="303" textAnchor="start" letterSpacing="0.15em">
            270°W
          </text>
        </g>

        {/* Geometric Corner Accents */}
        <g stroke="#7599FF" strokeWidth="1" opacity="0.3">
          {/* Top-Left Cross */}
          <path d="M 60 70 L 60 60 L 70 60" fill="none" />
          {/* Top-Right Cross */}
          <path d="M 530 60 L 540 60 L 540 70" fill="none" />
          {/* Bottom-Right Cross */}
          <path d="M 540 530 L 540 540 L 530 540" fill="none" />
          {/* Bottom-Left Cross */}
          <path d="M 70 540 L 60 540 L 60 530" fill="none" />
        </g>

        {/* ------------------------------------------------------------------ */}
        {/* ORBIT 3: OUTER TIER (r = 225)                                      */}
        {/* Contains: SQL, JAVA, constellation nodes                           */}
        {/* ------------------------------------------------------------------ */}
        <circle
          cx="300"
          cy="300"
          r="225"
          fill="none"
          stroke="#343741"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.4"
        />

        <g className="anim-orbit-3" style={{ animationPlayState: playState }}>
          {/* Accent arc section on Orbit 3 */}
          <circle
            cx="300"
            cy="300"
            r="225"
            fill="none"
            stroke="#7599FF"
            strokeWidth="1.5"
            strokeDasharray="45 360"
            opacity="0.75"
          />

          {/* Node: JAVA at (300, 75) -> -90 deg */}
          <g transform="translate(300, 75)">
            <circle cx="0" cy="0" r="4" fill="#7599FF" filter="url(#glowFilter)" />
            <circle cx="0" cy="0" r="12" fill="none" stroke="#7599FF" strokeWidth="0.8" opacity="0.4" />
            {/* Tech Label Container (Counter-rotated to remain upright) */}
            <g className="anim-counter-3" style={{ animationPlayState: playState }}>
              <rect
                x="14"
                y="-11"
                width="46"
                height="22"
                rx="4"
                fill="#20232B"
                stroke="#343741"
                strokeWidth="1"
              />
              <text
                x="37"
                y="4"
                textAnchor="middle"
                className="font-mono text-[10px] font-semibold fill-[#F5F3EE]"
              >
                JAVA
              </text>
            </g>
          </g>

          {/* Node: SQL at (300, 525) -> +90 deg */}
          <g transform="translate(300, 525)">
            <circle cx="0" cy="0" r="4" fill="#7599FF" filter="url(#glowFilter)" />
            <circle cx="0" cy="0" r="10" fill="none" stroke="#7599FF" strokeWidth="0.75" opacity="0.3" />
            <g className="anim-counter-3" style={{ animationPlayState: playState }}>
              <rect
                x="-58"
                y="-11"
                width="44"
                height="22"
                rx="4"
                fill="#20232B"
                stroke="#343741"
                strokeWidth="1"
              />
              <text
                x="-36"
                y="4"
                textAnchor="middle"
                className="font-mono text-[10px] font-semibold fill-[#F5F3EE]"
              >
                SQL
              </text>
            </g>
          </g>

          {/* Satellite particle dots */}
          <circle cx="140" cy="190" r="2.5" fill="#A5A7AE" opacity="0.8" />
          <circle cx="460" cy="410" r="2.5" fill="#A5A7AE" opacity="0.8" />
        </g>

        {/* ------------------------------------------------------------------ */}
        {/* ORBIT 2: MIDDLE TIER (r = 165)                                     */}
        {/* Contains: PYTHON, HTML5, secondary orbital ring                    */}
        {/* ------------------------------------------------------------------ */}
        <circle
          cx="300"
          cy="300"
          r="165"
          fill="none"
          stroke="#343741"
          strokeWidth="1"
          opacity="0.5"
        />

        <g className="anim-orbit-2" style={{ animationPlayState: playState }}>
          {/* Accent arc on Orbit 2 */}
          <circle
            cx="300"
            cy="300"
            r="165"
            fill="none"
            stroke="#7599FF"
            strokeWidth="1.75"
            strokeDasharray="60 250"
            opacity="0.8"
          />

          {/* Node: PYTHON at (465, 300) -> 0 deg */}
          <g transform="translate(465, 300)">
            <circle cx="0" cy="0" r="4.5" fill="#7599FF" filter="url(#glowFilter)" />
            <circle cx="0" cy="0" r="14" fill="none" stroke="#7599FF" strokeWidth="0.8" opacity="0.3" />
            <g className="anim-counter-2" style={{ animationPlayState: playState }}>
              <rect
                x="14"
                y="-11"
                width="62"
                height="22"
                rx="4"
                fill="#20232B"
                stroke="#343741"
                strokeWidth="1"
              />
              <text
                x="45"
                y="4"
                textAnchor="middle"
                className="font-mono text-[10px] font-semibold fill-[#F5F3EE]"
              >
                PYTHON
              </text>
            </g>
          </g>

          {/* Node: HTML5 at (135, 300) -> 180 deg */}
          <g transform="translate(135, 300)">
            <circle cx="0" cy="0" r="4.5" fill="#7599FF" filter="url(#glowFilter)" />
            <circle cx="0" cy="0" r="12" fill="none" stroke="#7599FF" strokeWidth="0.8" opacity="0.3" />
            <g className="anim-counter-2" style={{ animationPlayState: playState }}>
              <rect
                x="-72"
                y="-11"
                width="56"
                height="22"
                rx="4"
                fill="#20232B"
                stroke="#343741"
                strokeWidth="1"
              />
              <text
                x="-44"
                y="4"
                textAnchor="middle"
                className="font-mono text-[10px] font-semibold fill-[#F5F3EE]"
              >
                HTML5
              </text>
            </g>
          </g>

          {/* Orbiting particles */}
          <circle cx="300" cy="135" r="3" fill="#7599FF" opacity="0.8" filter="url(#glowFilter)" />
          <circle cx="300" cy="465" r="2" fill="#F5F3EE" opacity="0.7" />
        </g>

        {/* ------------------------------------------------------------------ */}
        {/* ORBIT 1: INNER TIER (r = 105)                                      */}
        {/* Contains: C, JAVASCRIPT / JS                                       */}
        {/* ------------------------------------------------------------------ */}
        <circle
          cx="300"
          cy="300"
          r="105"
          fill="none"
          stroke="#343741"
          strokeWidth="1"
          strokeDasharray="2 4"
          opacity="0.6"
        />

        <g className="anim-orbit-1" style={{ animationPlayState: playState }}>
          {/* Node: C Language at (226, 226) -> ~ -135 deg */}
          <g transform="translate(226, 226)">
            <circle cx="0" cy="0" r="4" fill="#7599FF" filter="url(#glowFilter)" />
            <g className="anim-counter-1" style={{ animationPlayState: playState }}>
              <rect
                x="-42"
                y="-11"
                width="30"
                height="22"
                rx="4"
                fill="#20232B"
                stroke="#343741"
                strokeWidth="1"
              />
              <text
                x="-27"
                y="4"
                textAnchor="middle"
                className="font-mono text-[11px] font-bold fill-[#F5F3EE]"
              >
                C
              </text>
            </g>
          </g>

          {/* Node: JS at (374, 374) -> ~ 45 deg */}
          <g transform="translate(374, 374)">
            <circle cx="0" cy="0" r="4" fill="#7599FF" filter="url(#glowFilter)" />
            <g className="anim-counter-1" style={{ animationPlayState: playState }}>
              <rect
                x="14"
                y="-11"
                width="34"
                height="22"
                rx="4"
                fill="#20232B"
                stroke="#343741"
                strokeWidth="1"
              />
              <text
                x="31"
                y="4"
                textAnchor="middle"
                className="font-mono text-[10px] font-bold fill-[#F5F3EE]"
              >
                JS
              </text>
            </g>
          </g>

          {/* Inner orbit particle dots */}
          <circle cx="300" cy="195" r="2.5" fill="#7599FF" opacity="0.9" />
          <circle cx="195" cy="300" r="2" fill="#A5A7AE" opacity="0.6" />
        </g>

        {/* ------------------------------------------------------------------ */}
        {/* CENTRAL GLOWING SPHERE / CORE SYSTEM                               */}
        {/* ------------------------------------------------------------------ */}
        {/* Outer subtle halo ring */}
        <circle
          cx="300"
          cy="300"
          r="54"
          fill="none"
          stroke="#7599FF"
          strokeWidth="0.75"
          opacity="0.35"
        />

        {/* Pulsing core group */}
        <g className="anim-pulse-core" style={{ animationPlayState: playState }}>
          {/* Main sphere glow */}
          <circle
            cx="300"
            cy="300"
            r="42"
            fill="url(#centralCoreGlow)"
            stroke="#7599FF"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />

          {/* Facet / Lighting Overlay */}
          <circle
            cx="300"
            cy="300"
            r="41"
            fill="url(#coreFacet)"
            opacity="0.7"
          />

          {/* Core Horizon & Equatorial Line */}
          <ellipse
            cx="300"
            cy="300"
            rx="42"
            ry="14"
            fill="none"
            stroke="#7599FF"
            strokeWidth="0.8"
            opacity="0.5"
          />
          <ellipse
            cx="300"
            cy="300"
            rx="14"
            ry="42"
            fill="none"
            stroke="#7599FF"
            strokeWidth="0.8"
            opacity="0.4"
          />

          {/* Center pinpoint */}
          <circle cx="300" cy="300" r="3.5" fill="#F5F3EE" filter="url(#glowFilter)" />
        </g>

        {/* Dynamic decorative badge on the core */}
        <g transform="translate(300, 360)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            className="font-mono text-[8px] tracking-[0.2em] fill-[#A5A7AE] uppercase"
          >
            SYSTEM ACTIVE
          </text>
        </g>
      </svg>
    </div>
  );
};
