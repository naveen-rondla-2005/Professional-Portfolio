"use client";

import { motion } from "framer-motion";
import { 
  Terminal, 
  Binary, 
  Library, 
  Wrench, 
  Brain, 
  Zap, 
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Terminal className="text-blue-400" size={20} />,
    skills: [
      { name: "Python" },
      { name: "C++" },
      { name: "C" },
      { name: "Java" },
    ]
  },
  {
    title: "Core CS",
    icon: <Binary className="text-emerald-400" size={20} />,
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "Problem-Solving" },
    ]
  },
  {
    title: "AIML",
    icon: <Brain className="text-purple-400" size={20} />,
    skills: [
      { name: "Machine Learning" },
      { name: "Computer Vision" },
      { name: "NLP" },
      { name: "GenAI" },
      { name: "LLM Orchestration" },
      { name: "Model Optimization" },
      { name: "Streamlit" },
      { name: "Reflex" },
      { name: "OpenCV" },
      { name: "LangChain" },
      { name: "Groq API" },
      { name: "PyTorch" },
    ]
  },
  {
    title: "Tools",
    icon: <Wrench className="text-sky-400" size={20} />,
    skills: [
      { name: "VS Code" },
      { name: "Jupyter Notebook" },
      { name: "Anaconda" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "SQLite" },
    ]
  },
  {
    title: "Soft Skills",
    icon: <Zap className="text-yellow-400" size={20} />,
    skills: [
      { name: "Good Listener" },
      { name: "Adaptability" },
    ]
  }
];

export function SkillIcons() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-16 py-10">
      {/* 1. Categorized Skill Tags */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border border-[var(--glass-border)] flex flex-col gap-6 group hover:border-[var(--color-cyan-pulse)]/20 transition-all shadow-[var(--card-shadow)]"
          >
            <div className="flex items-center gap-3 border-b border-[var(--glass-border)] pb-6">
              <div className="p-2.5 rounded-xl bg-[var(--foreground)]/5 shadow-inner">
                {category.icon}
              </div>
              <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tighter italic">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="px-4 py-2 rounded-xl bg-[var(--foreground)]/5 border border-[var(--glass-border)] text-[10px] font-mono text-[var(--foreground)] opacity-80 hover:opacity-100 hover:text-[var(--color-cyan-pulse)] hover:border-[var(--color-cyan-pulse)]/30 transition-all cursor-default hover:bg-[var(--foreground)]/10 shadow-sm"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
