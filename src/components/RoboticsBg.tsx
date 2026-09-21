"use client";

export function RoboticsBg() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft dot texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="soft-dot-pattern" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="24" cy="24" r="0.8" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#soft-dot-pattern)" className="text-cyan-400" />
      </svg>

      {/* Animated scan lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500 to-transparent h-40 animate-scan" />
      </div>
      
      {/* Top right decorative circuit */}
      <svg className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-[0.08] text-cyan-500" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.3" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.3" />
        <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="10" fill="currentColor" fillOpacity="0.3" />
        <path d="M100 10v180M10 100h180" stroke="currentColor" strokeWidth="0.5" />
        <path d="M30 30l140 140M170 30l-140 140" stroke="currentColor" strokeWidth="0.3" />
        {/* Corner brackets */}
        <path d="M20 20h30v10M20 20v30h10" stroke="currentColor" strokeWidth="1" />
        <path d="M180 20h-30v10M180 20v30h-10" stroke="currentColor" strokeWidth="1" />
        <path d="M20 180h30v-10M20 180v-30h10" stroke="currentColor" strokeWidth="1" />
        <path d="M180 180h-30v-10M180 180v-30h-10" stroke="currentColor" strokeWidth="1" />
        {/* Nodes */}
        <circle cx="100" cy="30" r="4" fill="currentColor" />
        <circle cx="100" cy="170" r="4" fill="currentColor" />
        <circle cx="30" cy="100" r="4" fill="currentColor" />
        <circle cx="170" cy="100" r="4" fill="currentColor" />
      </svg>

      {/* Bottom left hex grid */}
      <svg className="absolute -bottom-20 -left-20 w-[400px] h-[400px] opacity-[0.07] text-blue-500" viewBox="0 0 200 200" fill="none">
        <polygon points="100,20 140,45 140,95 100,120 60,95 60,45" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <polygon points="100,40 125,55 125,85 100,100 75,85 75,55" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="70" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="70" r="5" fill="currentColor" fillOpacity="0.5" />
        <path d="M100 120v60M60 95l-40 30M140 95l40 30" stroke="currentColor" strokeWidth="0.5" />
        <path d="M100 20v-20M60 45l-30-25M140 45l30-25" stroke="currentColor" strokeWidth="0.5" />
        <rect x="150" y="130" width="30" height="20" fill="none" stroke="currentColor" strokeWidth="0.3" />
        <rect x="20" y="130" width="30" height="20" fill="none" stroke="currentColor" strokeWidth="0.3" />
        <circle cx="100" cy="180" r="4" fill="currentColor" />
        <circle cx="20" cy="125" r="3" fill="currentColor" />
        <circle cx="180" cy="125" r="3" fill="currentColor" />
      </svg>

      {/* Side vertical circuit lines */}
      <div className="absolute left-4 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute right-4 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
      
      {/* Corner accents */}
      <svg className="absolute top-4 left-4 w-20 h-20 opacity-[0.14] text-cyan-500" viewBox="0 0 50 50" fill="none">
        <path d="M0 0h20l5 5v20" stroke="currentColor" strokeWidth="1" />
        <circle cx="20" cy="0" r="3" fill="currentColor" />
        <circle cx="25" cy="25" r="2" fill="currentColor" />
      </svg>
      <svg className="absolute top-4 right-4 w-20 h-20 opacity-[0.14] text-cyan-500 rotate-90" viewBox="0 0 50 50" fill="none">
        <path d="M0 0h20l5 5v20" stroke="currentColor" strokeWidth="1" />
        <circle cx="20" cy="0" r="3" fill="currentColor" />
        <circle cx="25" cy="25" r="2" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-4 left-4 w-20 h-20 opacity-[0.14] text-cyan-500 -rotate-90" viewBox="0 0 50 50" fill="none">
        <path d="M0 0h20l5 5v20" stroke="currentColor" strokeWidth="1" />
        <circle cx="20" cy="0" r="3" fill="currentColor" />
        <circle cx="25" cy="25" r="2" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-4 right-4 w-20 h-20 opacity-[0.14] text-cyan-500 rotate-180" viewBox="0 0 50 50" fill="none">
        <path d="M0 0h20l5 5v20" stroke="currentColor" strokeWidth="1" />
        <circle cx="20" cy="0" r="3" fill="currentColor" />
        <circle cx="25" cy="25" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}
