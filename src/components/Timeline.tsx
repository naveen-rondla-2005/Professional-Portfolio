"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description: string[];
  type: "work" | "education";
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto py-12 px-4">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-cyan-pulse)]/30 to-transparent transform -translate-x-1/2 hidden md:block" />
      
      <div className="space-y-16">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={`relative flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 top-0 md:top-6 w-8 h-8 rounded-full bg-[var(--background)] border-2 border-[var(--color-cyan-pulse)] flex items-center justify-center z-10 transform -translate-x-1/2 shadow-[0_0_15px_var(--color-cyan-pulse)]">
              {item.type === "work" ? (
                <Briefcase size={14} className="text-[var(--color-cyan-pulse)]" />
              ) : (
                <GraduationCap size={14} className="text-[var(--color-cyan-pulse)]" />
              )}
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-[45%] group`}>
              <div className="glass-panel p-6 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-cyan-pulse)]/50 transition-all duration-500 hover:shadow-[var(--card-shadow)]">
                <div className="flex items-center gap-3 mb-3 text-[var(--color-cyan-pulse)] font-mono text-xs">
                  <Calendar size={12} />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-1 group-hover:text-[var(--color-cyan-pulse)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[var(--color-electric-turquoise)] text-sm mb-4 font-medium italic">
                  {item.subtitle}
                </p>
                
                <ul className="space-y-2">
                  {item.description.map((point, pIdx) => (
                    <li key={pIdx} className="text-[var(--foreground)] opacity-70 text-xs leading-relaxed flex gap-2">
                      <span className="text-[var(--color-cyan-pulse)]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Spacer for MD screens */}
            <div className="hidden md:block w-[45%]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
