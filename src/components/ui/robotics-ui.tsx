"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RoboCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glow" | "circuit";
  cornerCut?: "tl" | "tr" | "bl" | "br" | "both" | "all";
}

export function RoboCard({ children, className, variant = "default", cornerCut = "both" }: RoboCardProps) {
  const clipPaths = {
    tl: "polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)",
    tr: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
    bl: "polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
    br: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
    both: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
    all: "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)",
  };

  return (
    <div className={cn("relative group", className)}>
      <div
        className={cn(
          "relative h-full bg-gray-800/80 backdrop-blur-sm transition-all duration-300",
          variant === "glow" && "shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]",
        )}
        style={{ clipPath: clipPaths[cornerCut] }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 pointer-events-none" />
        <div className="relative z-10 h-full">{children}</div>
      </div>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(6,182,212)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="rgb(59,130,246)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(6,182,212)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {cornerCut === "both" && (
          <path
            d="M 20 0 L 100% 0 L 100% calc(100% - 20px) L calc(100% - 20px) 100% L 0 100% L 0 20 Z"
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            className="group-hover:stroke-cyan-400/80 transition-all"
          />
        )}
        {cornerCut === "all" && (
          <path
            d="M 20 0 L calc(100% - 20px) 0 L 100% 20 L 100% calc(100% - 20px) L calc(100% - 20px) 100% L 20 100% L 0 calc(100% - 20px) L 0 20 Z"
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            className="group-hover:stroke-cyan-400/80 transition-all"
          />
        )}
      </svg>
      {variant === "circuit" && (
        <>
          <div className="absolute top-0 left-5 w-8 h-px bg-gradient-to-r from-cyan-500/60 to-transparent" />
          <div className="absolute top-5 left-0 h-8 w-px bg-gradient-to-b from-cyan-500/60 to-transparent" />
          <div className="absolute bottom-0 right-5 w-8 h-px bg-gradient-to-l from-cyan-500/60 to-transparent" />
          <div className="absolute bottom-5 right-0 h-8 w-px bg-gradient-to-t from-cyan-500/60 to-transparent" />
          <div className="absolute top-0 left-5 w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-60" />
          <div className="absolute bottom-0 right-5 w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-60" />
        </>
      )}
    </div>
  );
}

interface RoboButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit";
}

export function RoboButton({ 
  children, 
  className, 
  variant = "primary", 
  size = "md",
  onClick,
  disabled,
  type = "button"
}: RoboButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5",
    lg: "px-8 py-3 text-lg",
  };

  const baseClasses = cn(
    "relative font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
    sizeClasses[size],
    className
  );

  if (variant === "primary") {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(baseClasses, "group")}
        style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all group-hover:from-cyan-400 group-hover:to-blue-500" 
          style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }} 
        />
        <span className="relative z-10 flex items-center justify-center gap-2 text-white">{children}</span>
        <div className="absolute top-0 left-3 w-4 h-px bg-white/30" />
        <div className="absolute bottom-0 right-3 w-4 h-px bg-white/30" />
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(baseClasses, "group bg-transparent")}
        style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
      >
        <span className="absolute inset-0 border border-cyan-500/50 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 transition-all"
          style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
        />
        <span className="relative z-10 flex items-center justify-center gap-2 text-cyan-400">{children}</span>
        <div className="absolute top-0 left-3 w-2 h-px bg-cyan-500/50 group-hover:w-4 transition-all" />
        <div className="absolute bottom-0 right-3 w-2 h-px bg-cyan-500/50 group-hover:w-4 transition-all" />
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseClasses, "text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10")}
    >
      {children}
    </button>
  );
}

export function CircuitCorner({ position, className }: { position: "tl" | "tr" | "bl" | "br"; className?: string }) {
  const rotations = { tl: "", tr: "rotate-90", bl: "-rotate-90", br: "rotate-180" };
  
  return (
    <svg className={cn("w-12 h-12 pointer-events-none", rotations[position], className)} viewBox="0 0 50 50" fill="none">
      <path d="M0 0h20l5 5v20" stroke="currentColor" strokeWidth="1" className="text-cyan-500/40" />
      <path d="M0 10h10v10" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500/30" />
      <circle cx="20" cy="0" r="2" fill="currentColor" className="text-cyan-500/60" />
      <circle cx="25" cy="25" r="2" fill="currentColor" className="text-cyan-500/60" />
      <rect x="5" y="5" width="4" height="4" fill="currentColor" className="text-cyan-500/30" />
    </svg>
  );
}

export function HexBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
        <polygon
          points="8,0 92,0 100,15 92,30 8,30 0,15"
          fill="currentColor"
          className="text-cyan-500/20"
        />
        <polygon
          points="8,0 92,0 100,15 92,30 8,30 0,15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-cyan-500/60"
        />
      </svg>
      <span className="relative z-10 px-4 py-1 text-sm font-medium text-cyan-400">{children}</span>
    </div>
  );
}

export function CircuitLine({ className = "", variant = "default" }: { className?: string; variant?: "default" | "thick" | "dashed" }) {
  if (variant === "thick") {
    return (
      <svg className={`w-full h-1 ${className}`} viewBox="0 0 400 4" fill="none" preserveAspectRatio="none">
        <path d="M0 2h100l5-1.5 10 3 5-1.5h80l5 1.5 10-3 5 1.5h80l5-1.5 10 3 5-1.5h80" stroke="currentColor" strokeWidth="1" className="text-cyan-500/40" />
        <circle cx="50" cy="2" r="3" fill="currentColor" className="text-cyan-500/60" />
        <circle cx="200" cy="2" r="3" fill="currentColor" className="text-cyan-500/60" />
        <circle cx="350" cy="2" r="3" fill="currentColor" className="text-cyan-500/60" />
      </svg>
    );
  }
  
  if (variant === "dashed") {
    return (
      <svg className={`w-full h-px ${className}`} viewBox="0 0 400 2" fill="none" preserveAspectRatio="none">
        <path d="M0 1h400" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 4" className="text-cyan-500/30" />
        <circle cx="100" cy="1" r="2" fill="currentColor" className="text-cyan-500/50" />
        <circle cx="200" cy="1" r="2" fill="currentColor" className="text-cyan-500/50" />
        <circle cx="300" cy="1" r="2" fill="currentColor" className="text-cyan-500/50" />
      </svg>
    );
  }

  return (
    <svg className={`w-full h-px ${className}`} viewBox="0 0 400 2" fill="none" preserveAspectRatio="none">
      <path d="M0 1h80l5-0.5 10 1 5-0.5h100l5 0.5 10-1 5 0.5h80l5-0.5 10 1 5-0.5h80" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500/30" />
      <circle cx="100" cy="1" r="2" fill="currentColor" className="text-cyan-500/50" />
      <circle cx="200" cy="1" r="2" fill="currentColor" className="text-cyan-500/50" />
      <circle cx="300" cy="1" r="2" fill="currentColor" className="text-cyan-500/50" />
    </svg>
  );
}

export function ScanLine({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-20 animate-scan" />
    </div>
  );
}

export function TechFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <CircuitCorner position="tl" className="absolute -top-1 -left-1" />
      <CircuitCorner position="tr" className="absolute -top-1 -right-1" />
      <CircuitCorner position="bl" className="absolute -bottom-1 -left-1" />
      <CircuitCorner position="br" className="absolute -bottom-1 -right-1" />
      {children}
    </div>
  );
}
