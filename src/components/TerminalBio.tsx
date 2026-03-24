"use client";

import { motion } from "framer-motion";

export function TerminalBio() {
  return (
    <div className="w-full max-w-md bg-[var(--obsidian)] border border-[var(--glass-border)] dark:border-[var(--color-cyan-pulse)]/30 rounded-lg overflow-hidden shadow-[var(--card-shadow)] font-mono text-xs transition-all duration-300">
      {/* Terminal Header */}
      <div className="bg-[var(--matte-gray)] px-4 py-2 flex items-center gap-2 border-b border-[var(--glass-border)]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex-1 text-center text-[var(--foreground)] opacity-40 text-[10px] tracking-widest uppercase">
          bash — naveen@ai-core
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 space-y-4 leading-relaxed">
        <div className="flex gap-2 text-[var(--foreground)]">
          <span className="text-[var(--color-cyan-pulse)]">➜</span>
          <span className="font-bold">cat profile.json</span>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[var(--foreground)] opacity-70 pl-4"
        >
          <p>{"{"}</p>
          <div className="pl-4 space-y-1">
            <p>"name": <span className="text-[var(--color-electric-turquoise)]">"Rondla Naveen"</span>,</p>
            <p>"role": <span className="text-[var(--color-electric-turquoise)]">"AI Engineer Intern"</span>,</p>
            <p>"location": <span className="text-[var(--color-electric-turquoise)]">"India"</span>,</p>
            <p>"specialties": [</p>
            <div className="pl-4">
              <p>"NLP",</p>
              <p>"LLM Orchestration",</p>
              <p>"Computer Vision"</p>
            </div>
            <p>]</p>
          </div>
          <p>{"}"}</p>
        </motion.div>

        <div className="flex gap-2">
          <span className="text-[var(--color-cyan-pulse)]">➜</span>
          <motion.span 
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 2, delay: 1 }}
            className="text-[var(--foreground)] font-bold overflow-hidden whitespace-nowrap border-r-2 border-[var(--color-cyan-pulse)] animate-pulse"
          >
            initializing_neural_sync...
          </motion.span>
        </div>
      </div>
    </div>
  );
}
