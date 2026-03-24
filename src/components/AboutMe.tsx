"use client";

import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto py-20 px-6 space-y-20">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-black text-[var(--foreground)] italic tracking-tighter uppercase leading-none">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan-pulse)] to-[var(--color-electric-turquoise)]">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-cyan-pulse)] to-transparent rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Profile Terminal */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-3xl border border-[var(--color-cyan-pulse)]/20 relative group"
        >
          <div className="absolute top-4 right-4 flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[var(--color-cyan-pulse)] animate-pulse"></div>
          </div>

          <div className="font-mono space-y-4 text-sm">
            <div className="text-[var(--color-cyan-pulse)] flex items-center gap-2">
              <span className="opacity-50">•</span> profile.data
            </div>

            <div className="space-y-3 pl-4 border-l border-[var(--glass-border)]">
              <p><span className="text-[var(--foreground)] opacity-60">Name:</span> <span className="font-medium">Naveen</span></p>
              <p><span className="text-[var(--foreground)] opacity-60">Role:</span> <span className="font-medium">AI/ML Student</span></p>
              <p><span className="text-[var(--foreground)] opacity-60">University:</span> <span className="font-medium">LPU</span></p>
              <p><span className="text-[var(--color-electric-turquoise)] font-bold">Status:</span> <span className="text-[var(--color-electric-turquoise)] font-bold">Building things</span></p>
            </div>

            <div className="flex gap-2 pt-4">
              <div className="w-1.5 h-6 bg-[var(--color-cyan-pulse)] rounded-full animate-pulse"></div>
              <div className="w-1.5 h-6 bg-[var(--color-electric-turquoise)] rounded-full animate-bounce delay-75"></div>
              <div className="w-1.5 h-6 bg-orange-500 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </motion.div>

        {/* Right: Narrative & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="glass-panel p-8 rounded-3xl border border-[var(--glass-border)]">
            <p className="text-[var(--foreground)] leading-relaxed text-lg font-medium">
              3rd-year AIML Student @ LPU | AI Engineer Intern @ Infosys Springboard. Creator of 'Neural-Compile'—an Autonomous Agentic Framework specializing in NLP, LLM Orchestration, and Computer Vision. Architecting scalable, production-grade AI solutions for tomorrow's challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "DSA Problems", value: "150+", sub: "LeetCode / GFG" },
              { label: "Projects", value: "3+", sub: "Live / Research" },
            ].map((stat, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl border border-[var(--glass-border)] text-center group hover:border-[var(--color-cyan-pulse)]/30 transition-all">
                <div className="text-3xl font-black text-[var(--color-cyan-pulse)] mb-1 group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-[10px] font-mono text-[var(--foreground)] opacity-60 uppercase tracking-widest">{stat.label}</div>
                <div className="text-[8px] font-mono text-[var(--foreground)] opacity-40 mt-2 uppercase">{stat.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
