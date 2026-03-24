"use client";

import { motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { PreviewModal } from "./PreviewModal";

const certs = [
  {
    title: "AI Primer",
    issuer: "Infosys Springboard",
    date: "Dec 2025",
    description: "Foundational certification covering the core principles of Artificial Intelligence and neural network architectures.",
    link: "/assets/AIPrimerCertification.pdf"
  },
  {
    title: "Generative AI",
    issuer: "Infosys Springboard",
    date: "Dec 2025",
    description: "Advanced course on Generative models, focusing on LLM orchestration and prompt engineering.",
    link: "/assets/PrinciplesOfGenAICertification.pdf"
  },
  {
    title: "Data Science",
    issuer: "Cisco (Netacad)",
    date: "Nov 2025",
    description: "Comprehensive data science certification involving rigorous statistical analysis and predictive modeling.",
    image: "/assets/IntrotoDataScience.png",
    link: "/assets/IntrotoDataScience.png"
  },
  {
    title: "Python Developer",
    issuer: "Udemy",
    date: "May 2024",
    description: "End-to-end Python mastery course covering advanced topics such as concurrency and system-level programming.",
    link: "/assets/Udemy_python_certificate.pdf"
  },
  {
    title: "Software Engineer",
    issuer: "Hacker Rank",
    date: "Aug 2025",
    description: "Certified proficiency in software engineering best practices and algorithmic efficiency.",
    image: "/assets/software_engineer_intern_certificate.png",
    link: "/assets/software_engineer_intern_certificate.png"
  },
  {
    title: "Agile Scrum",
    issuer: "Infosys Springboard",
    date: "Dec 2025",
    description: "Practical implementation of Agile and Scrum methodologies in production software environments.",
    link: "/assets/AgileScrumInPractice.pdf"
  },
  {
    title: "Computer Vision 101",
    issuer: "Infosys Springboard",
    date: "Dec 2025",
    description: "Foundations of digital image processing and feature extraction using OpenCV.",
    link: "/assets/ComputerVision101.pdf"
  },
  {
    title: "Deep Learning",
    issuer: "Infosys Springboard",
    date: "Dec 2025",
    description: "Deep dive into backpropagation, convolutional layers, and recurrent neural networks.",
    link: "/assets/DeepLearningForDevelopers.pdf"
  },
  {
    title: "GenAI Unleashed",
    issuer: "Infosys Springboard",
    date: "Dec 2025",
    description: "Strategic implementation of Generative AI for enterprise-scale problem solving.",
    link: "/assets/GenAIUnleashing.pdf"
  },
  {
    title: "GPT-3 Developer",
    issuer: "Infosys Springboard",
    date: "Dec 2025",
    description: "Building applications on top of the GPT-3 API with optimized token management.",
    link: "/assets/OpenAI GPT-3 for developers.pdf"
  },
  {
    title: "ML Training",
    issuer: "LPU",
    date: "2025",
    description: "Intensive 6-week summer training program focused on Applied Machine Learning.",
    link: "/assets/SummerTraining(ML)LPU.pdf"
  }
];

export function CertificateCarousel() {
  const [selectedCert, setSelectedCert] = useState<typeof certs[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full py-10 relative group px-12">
      {/* Navigation Arrows */}
      <button 
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-[var(--background)]/80 backdrop-blur-md border border-[var(--glass-border)] text-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-all hover:bg-[var(--color-cyan-pulse)] hover:text-white shadow-[var(--card-shadow)]"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-[var(--background)]/80 backdrop-blur-md border border-[var(--glass-border)] text-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-all hover:bg-[var(--color-cyan-pulse)] hover:text-white shadow-[var(--card-shadow)]"
      >
        <ChevronRight size={24} />
      </button>

      {/* Cinematic Fades for Edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>

      {/* Scrollable Track */}
      <div 
        ref={containerRef}
        className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth px-20 pb-10"
      >
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            className="glass-panel group/cert rounded-2xl border border-[var(--glass-border)] overflow-hidden flex flex-col w-80 shrink-0 hover:border-[var(--color-cyan-pulse)]/40 transition-all duration-500 hover:shadow-[var(--card-shadow)] cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            {/* Preview Image Area */}
            <div className="relative h-44 bg-[var(--foreground)]/5 overflow-hidden">
              <img 
                src={cert.image || "/assets/cert_placeholder_springboard.png"} 
                alt={cert.title}
                className="w-full h-full object-cover group-hover/cert:scale-110 transition-transform duration-700 brightness-110"
              />
              <div className="absolute top-4 right-4 z-20">
                <div className="p-2 rounded-lg bg-[var(--background)]/60 backdrop-blur-md border border-[var(--glass-border)] text-[var(--color-cyan-pulse)]">
                  <Award size={16} />
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col gap-3 relative z-20">
              <div className="space-y-1">
                <h4 className="text-[var(--foreground)] font-black text-sm uppercase tracking-tight leading-tight group-hover/cert:text-[var(--color-cyan-pulse)] transition-colors">
                  {cert.title}
                </h4>
                <div className="w-8 h-0.5 bg-[var(--color-cyan-pulse)] rounded-full group-hover/cert:w-16 transition-all duration-500"></div>
              </div>

              <div className="flex justify-between items-end">
                <div className="space-y-0.5">
                  <p className="text-[var(--color-electric-turquoise)] text-[9px] font-mono uppercase tracking-[0.2em]">{cert.issuer}</p>
                  <p className="text-[var(--foreground)] opacity-50 text-[8px] font-medium uppercase tracking-widest">{cert.date}</p>
                </div>
                <span className="text-[7px] text-[var(--color-cyan-pulse)] opacity-40 font-mono uppercase tracking-tighter italic">Preview Available</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <PreviewModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        type="certificate"
        title={selectedCert?.title || ""}
        subtitle={selectedCert?.issuer}
        description={selectedCert?.description || ""}
        image={selectedCert?.image}
        link={selectedCert?.link}
        date={selectedCert?.date}
        tech={["Certified", "Verified"]}
      />
    </div>
  );
}


