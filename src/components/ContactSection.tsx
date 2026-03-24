"use client";

import { useState } from "react";
import { FileText, Github, Mail, Linkedin, CalendarDays } from "lucide-react";
import { CalendarDemo } from "./calendar-demo";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section className={cn(
        "mx-auto glass-panel p-10 rounded-3xl flex flex-col items-center relative overflow-hidden group transition-all duration-700",
        isBookingOpen ? "max-w-6xl" : "max-w-2xl"
      )}>
        {/* Holographic background glow */}
        <div className="absolute -inset-20 bg-gradient-to-r from-[var(--color-cyan-pulse)]/0 via-[var(--color-electric-turquoise)]/10 to-[var(--color-cyan-pulse)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl pointer-events-none"></div>
        
        <p className="text-[var(--foreground)] opacity-70 text-center mb-10 text-sm font-mono tracking-wider leading-relaxed z-10">
          My schedule is open to discussing academic research, NLP collaborations, and machine learning roles. 
          <br/>
          <span className="text-[var(--color-cyan-pulse)] mt-2 block font-bold">Sync your calendar to initiate a secure connection.</span>
        </p>

        {/* Animated Synching Button */}
        <motion.button
          onClick={() => setIsBookingOpen(!isBookingOpen)}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 flex items-center gap-3 px-8 py-4 mb-10 bg-transparent border-2 border-[var(--color-cyan-pulse)] text-[var(--color-cyan-pulse)] font-black tracking-widest uppercase rounded-lg hover:bg-[var(--color-cyan-pulse)]/10 overflow-hidden"
        >
          <CalendarDays size={22} className="animate-pulse" />
          <span className="relative z-10 text-neon">{isBookingOpen ? "Close Calendar" : "Schedule Meeting"}</span>
          <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-[var(--color-electric-turquoise)]/40 to-transparent skew-x-[-45deg] group-hover:animate-[scan_1.5s_ease-in-out_infinite]"></div>
        </motion.button>

        <div className="flex gap-4 mb-10 z-10 w-full justify-center">
          {[
            { icon: <Mail size={20} />, href: "mailto:naveenrondla@hotmail.com" },
            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/naveen-rondla/" },
            { icon: <Github size={20} />, href: "https://github.com/naveen-rondla-2005" },
            { icon: <span className="font-bold text-xs">+91</span>, href: "tel:+916302783303" }
          ].map((item, i) => (
            <a 
              key={i}
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 rounded-2xl bg-[var(--background)]/80 border border-[var(--glass-border)] text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--color-cyan-pulse)] hover:bg-[var(--background)] hover:border-[var(--color-cyan-pulse)]/30 transition-all shadow-[var(--card-shadow)]"
            >
              {item.icon}
            </a>
          ))}
        </div>
        
        <a 
          href="/assets/R.N.V.Naveen_AI_Engineer.pdf" 
          download="Rondla_Naveen_AI_Engineer_CV.pdf"
          className="z-10 group/btn flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--color-electric-turquoise)] to-[var(--color-cyan-pulse)] text-[var(--background)] font-bold rounded-xl hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] hover:scale-105 transition-all w-full justify-center overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
          <FileText size={20} className="group-hover/btn:-mt-1 transition-all" />
          DOWNLOAD CV (PDF)
        </a>

        {/* Inline Booking Expansion */}
        <AnimatePresence>
          {isBookingOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 40 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="w-full overflow-hidden z-20"
            >
              <div className="w-full pt-10 border-t border-[var(--color-cyan-pulse)]/20">
                <CalendarDemo />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
