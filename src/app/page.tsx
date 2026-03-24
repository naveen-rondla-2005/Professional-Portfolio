"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { ProjectModules } from "@/components/ProjectModules";
import { SkillIcons } from "@/components/SkillIcons";
import { CertificateCarousel } from "@/components/CertificateCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactSection } from "@/components/ContactSection";
import { Timeline } from "@/components/Timeline";
import { AboutMe } from "@/components/AboutMe";
import { TerminalBio } from "@/components/TerminalBio";
import { MousePointer2, ExternalLink, Download } from "lucide-react";
import { motion } from "framer-motion";

const AntiGravityHero = dynamic(() => import("@/components/AntiGravityHero").then(mod => mod.AntiGravityHero), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[var(--color-obsidian)]" /> 
});

const SplineSceneBasic = dynamic(() => import("@/components/ui/spline-demo").then(mod => mod.SplineSceneBasic), { 
  ssr: false,
  loading: () => <div className="w-full h-[500px] bg-white/5 rounded-3xl animate-pulse" />
});

const experienceItems = [
  {
    title: "AI Engineer Intern",
    subtitle: "Infosys Springboard",
    date: "Feb 2026 - Present",
    type: "work" as const,
    description: [
      "Automating PEP8 compliance, semantic bug detection, and dynamic Control Flow Graph (CFG) analysis using NLP and LLMs.",
      "Architecting Generative suggestion workflows and Algorithm Visualization modules to enhance code maintainability.",
      "Collaborating on production-ready AI models with a focus on logic transparency and performance optimization."
    ]
  }
];

const educationItems = [
  {
    title: "Bachelor of Technology",
    subtitle: "Lovely Professional University (LPU)",
    date: "2023 - 2027",
    type: "education" as const,
    description: [
      "Specializing in Computer Science and Artificial Intelligence.",
      "Core Coursework: Data Structures, Algorithms, Machine Learning, Computer Vision."
    ]
  },
  {
    title: "Intermediate Education",
    subtitle: "Narayana Junior College",
    date: "2021 - 2023",
    type: "education" as const,
    description: [
      "Focused on advanced mathematics and problem-solving foundations."
    ]
  },
  {
    title: "Matriculation (High School)",
    subtitle: "Sri Lakshmi High School",
    date: "2020 - 2021",
    type: "education" as const,
    description: [
      "Consistently ranked top of the class in all subjects."
    ]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] relative transition-colors duration-300">
      <Navbar />
      {/* 3D Background - High Performance Neural Core */}
      <div className="fixed inset-0 z-0">
        <AntiGravityHero />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 pointer-events-none *:pointer-events-auto">

        {/* 1. Introduction & Summary */}
        <section id="intro" className="min-h-[100vh] flex flex-col items-center justify-center pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <span className="text-[var(--color-cyan-pulse)] font-mono text-sm tracking-[0.3em] uppercase opacity-70">
                  // Hello World
                </span>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[var(--foreground)] uppercase leading-none">
                  Hi, I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric-turquoise)] via-[var(--color-cyan-pulse)] to-[var(--color-electric-turquoise)] drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                    Naveen
                  </span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-cyan-pulse)] italic tracking-tight">
                  AI Software Engineer
                </h2>
              </div>

              <p className="text-[var(--foreground)] opacity-70 font-medium text-lg max-w-xl leading-relaxed">
                I don't just build applications — I craft <span className="text-[var(--foreground)] font-bold">intelligent systems</span> that think, learn, and evolve. Specializing in NLP, LLM Orchestration, and Computer Vision.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a 
                  href="#projects" 
                  className="px-8 py-4 bg-gradient-to-r from-[var(--color-electric-turquoise)] to-[var(--color-cyan-pulse)] text-[#0a0a0a] font-bold rounded-xl hover:shadow-[0_0_30px_var(--color-cyan-pulse)] hover:scale-105 transition-all text-sm uppercase tracking-widest flex items-center gap-2"
                >
                  View Projects <ExternalLink size={16} />
                </a>
                <a 
                  href="/assets/R.N.V.Naveen_AI_Engineer.pdf" 
                  download 
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-sm uppercase tracking-widest flex items-center gap-2"
                >
                  Download CV <Download size={16} />
                </a>
              </div>

            </motion.div>

            {/* Right: Visual Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-cyan-pulse)] to-[var(--color-electric-turquoise)] rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-64 h-64 rounded-full border-4 border-[var(--color-obsidian)] overflow-hidden">
                  <img 
                    src="/assets/profile-pic.jpeg" 
                    alt="Rondla Naveen" 
                    className="w-full h-full object-cover grayscale-[0.2] contrast-125"
                  />
                </div>
              </div>
              
              <TerminalBio />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 flex flex-col items-center gap-2 text-[var(--foreground)] opacity-40 font-mono text-[10px] uppercase tracking-[0.5em]"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-cyan-pulse)] to-transparent"></div>
            Scroll to Explore
          </motion.div>
        </section>

        {/* 1.5 Professional Narrative */}
        <AboutMe />

        {/* 2. Skills & Technologies */}
        <SectionHeading title="Skills & Technologies" id="skills" />
        <section className="w-full flex justify-center py-10">
          <SkillIcons />
        </section>

        {/* 2.5 Interactive 3D Spline Scene */}
        <SectionHeading title="Interactive 3D Engine" id="spline" />
        <section className="w-full max-w-6xl mx-auto py-10 mb-20 px-4">
          <SplineSceneBasic />
        </section>

        {/* 3. Projects */}
        <SectionHeading title="Projects" id="projects" />
        <section className="w-full h-[550px] perspective-1000 mb-10">
          <ProjectModules />
        </section>

        {/* 4. Experience (Internships & Work) */}
        <SectionHeading title="Experience" id="experience" />
        <Timeline items={experienceItems} />

        {/* 5. Education */}
        <SectionHeading title="Education" id="education" />
        <Timeline items={educationItems} />

        {/* 6. Certifications & Courses */}
        <SectionHeading title="Certifications & Courses" id="certifications" />
        <section className="w-full pb-10 overflow-visible">
          <CertificateCarousel />
        </section>

        {/* 8. Research Focus */}
        <SectionHeading title="Research Focus" id="research" />
        <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20 pb-20 border-b border-[var(--color-cyan-pulse)]/10">
          <div className="glass-panel p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-cyan-pulse)] transition-all">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 uppercase tracking-widest">Neural Optimization</h3>
            <p className="text-[var(--foreground)] opacity-60 text-sm leading-relaxed">
              Focusing on low-latency model architectures and hardware-aware neural deployment for real-time vision systems.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-cyan-pulse)] transition-all">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 uppercase tracking-widest">LLM Architectures</h3>
            <p className="text-[var(--foreground)] opacity-60 text-sm leading-relaxed">
              Exploring prompt engineering and orchestration patterns to build reliable, production-grade LLM applications.
            </p>
          </div>
        </section>

        {/* 9. Research Publication/Patent */}
        <SectionHeading title="Research Publication/Patent" id="publications" />
        <section className="max-w-4xl mx-auto mb-20">
          <div className="glass-panel p-8 rounded-2xl border border-[var(--color-cyan-pulse)]/30">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">AI-Driven Code Analysis</h3>
            <p className="text-[var(--color-electric-turquoise)] text-sm mb-3 font-mono">Infosys Springboard Research</p>
            <p className="text-[var(--foreground)] opacity-80 text-sm leading-relaxed">
              Researching semantic bug detection and dynamic Control Flow Graph (CFG) analysis to automate production-grade code reviews.
            </p>
          </div>
        </section>

        {/* 11. Contact Section */}
        <SectionHeading title="Contact Section" id="contact" />
        <ContactSection />

        {/* Footer */}
        <footer className="mt-40 border-t border-[var(--color-cyan-pulse)]/20 pt-8 pb-10 flex flex-col items-center justify-center text-center text-xs font-mono text-gray-500">
          <p className="mt-8 mb-2 tracking-widest text-[var(--color-electric-turquoise)]/50 uppercase">Neural Link Established & Secure</p>
          <p>© 2026 Rondla Naga Venkata Naveen. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  );
}
