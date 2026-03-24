"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-8 px-4 pointer-events-none">
      <nav className="glass-panel px-8 py-3 rounded-full flex items-center gap-8 pointer-events-auto border border-[var(--glass-border)] dark:border-[var(--color-cyan-pulse)]/30 backdrop-blur-md shadow-[var(--card-shadow)] relative overflow-hidden group/nav">
        {/* Chromatic Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-cyan-pulse)]/5 to-transparent -translate-x-full group-hover/nav:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
        <Link href="/" className="flex items-center gap-3 group/logo select-none">
          <div className="w-10 h-10 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.3)] group-hover/logo:scale-110 transition-transform duration-300">
            <img 
              src="/assets/logo.png" 
              alt="NR Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[var(--foreground)] font-black tracking-tighter text-lg leading-tight uppercase">Rondla</span>
            <span className="text-[var(--color-cyan-pulse)] font-mono text-[10px] tracking-[0.3em] leading-tight uppercase">Naveen</span>
          </div>
        </Link>

        <div className="w-[1px] h-6 bg-gradient-to-b from-transparent via-[var(--color-cyan-pulse)] to-transparent opacity-50"></div>

        <div className="flex items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase">
          <Link href="#about" className="text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--color-cyan-pulse)] transition-all">ABOUT</Link>
          <Link href="#experience" className="text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--color-cyan-pulse)] transition-all">WORK</Link>
          <Link href="#skills" className="text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--color-cyan-pulse)] transition-all">SKILLS</Link>
          <Link href="#certifications" className="text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--color-cyan-pulse)] transition-all">CERTIFICATES</Link>
          <Link href="#contact" className="text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--color-cyan-pulse)] transition-all">CONTACT</Link>
        </div>

        <div className="w-[1px] h-6 bg-gradient-to-b from-transparent via-[var(--color-cyan-pulse)] to-transparent opacity-50"></div>

        <div className="flex items-center gap-4">
          <a 
            href="/assets/R.N.V.Naveen_AI_Engineer.pdf" 
            download="Rondla_Naveen_AI_Engineer_CV.pdf"
            className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[var(--color-electric-turquoise)] to-[var(--color-cyan-pulse)] text-[#0a0a0a] font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_var(--color-cyan-pulse)] transition-all"
          >
            Download CV
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
