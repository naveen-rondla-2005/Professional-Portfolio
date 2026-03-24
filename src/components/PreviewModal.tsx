"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Award, Terminal } from "lucide-react";
import { useEffect } from "react";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  tech?: string[];
  link?: string;
  type: "project" | "certificate";
  date?: string;
}

export function PreviewModal({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  image,
  tech,
  link,
  type,
  date
}: PreviewModalProps) {
  // Prevent scrolling when modal is open and handle Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-zoom-out"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-[var(--color-obsidian)] border border-[var(--color-cyan-pulse)]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.2)] flex flex-col md:flex-row max-h-[90vh] z-10"
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-4 right-4 z-[110] p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-all border border-white/10"
            >
              <X size={20} />
            </button>

            {/* Media Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-black/40 flex items-center justify-center overflow-hidden">
              {image ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)] to-transparent z-10 opacity-60"></div>
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                </>
              ) : (
                <div className="flex flex-col items-center gap-4 text-[var(--color-cyan-pulse)]/40">
                  {type === "certificate" ? <Award size={120} strokeWidth={0.5} /> : <Terminal size={120} strokeWidth={0.5} />}
                  <span className="font-mono text-[10px] tracking-widest uppercase">Visual Preview Pending</span>
                </div>
              )}

              {/* Holographic Scan Effect */}
              <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                <div className="w-full h-[2px] bg-[var(--color-cyan-pulse)]/50 absolute top-0 left-0 animate-[scan_3s_linear_infinite] shadow-[0_0_15px_var(--color-cyan-pulse)]"></div>
              </div>
            </div>

            {/* Info Section */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center overflow-y-auto">
              <div className="mb-6">
                <span className="text-[var(--color-cyan-pulse)] font-mono text-[10px] tracking-[0.4em] uppercase mb-2 block">
                  {type} // {date}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2 italic">
                  {title}
                </h2>
                {subtitle && <p className="text-[var(--color-electric-turquoise)] font-mono text-xs">{subtitle}</p>}
              </div>

              <div className="space-y-6">
                <p className="text-gray-400 text-sm leading-relaxed font-mono italic">
                  {description}
                </p>

                {tech && (
                  <div className="flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-[var(--color-cyan-pulse)]/5 border border-[var(--color-cyan-pulse)]/20 text-[10px] text-[var(--color-cyan-pulse)] font-mono uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-6 flex gap-4">
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-cyan-pulse)] text-obsidian font-bold rounded-xl hover:shadow-[0_0_20px_var(--color-cyan-pulse)] transition-all"
                    >
                      {type === "certificate" ? "VERIFY CREDENTIAL" : "VIEW SOURCE"} <ExternalLink size={18} />
                    </a>
                  )}
                {type === "project" && link && (
                   <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                  >
                    GITHUB <Github size={18} />
                  </a>
                )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
