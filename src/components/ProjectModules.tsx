"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useState } from "react";
import { PreviewModal } from "./PreviewModal";

const projects = [
  {
    title: "Neural Compile",
    description: "A high-performance multi-language compiler leveraging LLMs for autonomous debugging, PEP8 compliance, and logical code optimization. Features internal CFG analysis and real-time suggestion workflows.",
    tech: ["Python", "Reflex", "LangChain", "Groq API", "PyTorch", "SQLite"],
    codeSnippet: "@rx.page()\ndef index():\n    return rx.vstack(\n        rx.heading('Neural Compiler'),\n        rx.text_area(id='code_input'),\n        rx.button('Compile & Debug', on_click=process_code)\n    )",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    delay: 0,
    xOffset: -250,
    yOffset: -80,
    link: "https://github.com/naveen-rondla-2005/Neural-Compile"
  },
  {
    title: "Face Recognition",
    description: "CNN-based facial verification application utilizing Dlib and OpenCV for real-time authentication. Achieves 95%+ accuracy in live evaluation environments with robust lighting compensation.",
    tech: ["OpenCV", "Streamlit", "Dlib", "CNN", "Python"],
    codeSnippet: "import cv2\nfrom dlib import get_frontal_face_detector\ndetector = get_frontal_face_detector()\nfaces = detector(gray_img)\nfor face in faces:\n    draw_neural_bbox(img, face)",
    image: "/assets/face_recognition_ui.png",
    delay: 0.3,
    xOffset: 250,
    yOffset: 60,
    link: "https://github.com/naveen-rondla-2005/face-recognition-app"
  },
  {
    title: "Snake Water Gun",
    description: "Interactive game implementation of the classic Snake-Water-Gun logic. Features a clean, responsive interface with real-time score tracking and specialized game state animations.",
    tech: ["Python", "Game Logic", "UI/UX"],
    codeSnippet: "import random\nchoices = ['Snake', 'Water', 'Gun']\nuser_choice = input('Enter S, W, or G: ')\ncomputer_choice = random.choice(choices)\n# Neural matching logic...",
    image: "/assets/snake_water_gun.png",
    delay: 0.6,
    xOffset: 0,
    yOffset: 80,
    link: "https://github.com/naveen-rondla-2005/Snake-Water-Gun-Game"
  },
];

export function ProjectModules() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative glass-panel rounded-3xl overflow-hidden border border-[var(--glass-border)] hover:border-[var(--color-cyan-pulse)]/30 transition-all flex flex-col h-full shadow-[var(--card-shadow)]"
          >
            {/* Project Image/Preview Area */}
            <div className="relative h-48 overflow-hidden bg-[var(--color-obsidian)]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 brightness-110"
              />
              <div className="absolute top-4 right-4 z-20">
                <div className="p-2 rounded-lg bg-[var(--background)]/60 backdrop-blur-md border border-[var(--glass-border)] group-hover:border-[var(--color-cyan-pulse)]/50 transition-colors">
                  <Terminal size={16} className="text-[var(--color-cyan-pulse)]" />
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex-1 flex flex-col gap-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-[var(--foreground)] uppercase italic tracking-tighter leading-none group-hover:text-[var(--color-cyan-pulse)] transition-colors">
                  {project.title}
                </h3>
                <div className="w-12 h-0.5 bg-[var(--color-cyan-pulse)] rounded-full group-hover:w-20 transition-all duration-500"></div>
              </div>

              <p className="text-[var(--foreground)] opacity-90 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-[var(--foreground)]/5 border border-[var(--glass-border)] text-[9px] font-mono text-[var(--foreground)] opacity-70 uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 pt-0 flex gap-4">
              <button
                onClick={() => setSelectedProject(project)}
                className="flex-1 py-3 rounded-xl bg-[var(--foreground)]/5 border border-[var(--glass-border)] text-[var(--foreground)] font-bold text-[10px] uppercase tracking-widest hover:bg-[var(--foreground)]/10 transition-all"
              >
                Deep Dive
              </button>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[var(--color-electric-turquoise)]/20 to-[var(--color-cyan-pulse)]/20 border border-[var(--color-cyan-pulse)]/30 text-[var(--color-cyan-pulse)] font-bold text-[10px] uppercase tracking-widest hover:shadow-[0_0_20px_var(--color-cyan-pulse)]/30 transition-all text-center"
              >
                Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <PreviewModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        type="project"
        title={selectedProject?.title || ""}
        description={selectedProject?.description || ""}
        image={selectedProject?.image}
        tech={selectedProject?.tech}
        link={selectedProject?.link}
        date="Active Project"
      />
    </div>
  );
}

