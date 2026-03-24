'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-[var(--obsidian)] relative overflow-hidden border border-[var(--glass-border)] dark:border-[var(--color-cyan-pulse)]/20 shadow-[0_0_50px_rgba(0,255,255,0.05)] transition-colors duration-300">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="var(--color-cyan-pulse)"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[var(--foreground)] to-[var(--foreground)] opacity-90 uppercase tracking-tighter">
            Interactive 3D
          </h1>
          <p className="mt-4 text-[var(--foreground)] opacity-60 max-w-lg font-mono text-sm leading-relaxed">
            Experience the next dimension of digital interaction. These immersive neural environments 
            are built to capture complex architectural patterns and enhance the user's journey through data.
          </p>
          <div className="mt-8 flex gap-4">
             <div className="h-[2px] w-12 bg-[var(--color-cyan-pulse)]"></div>
             <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-cyan-pulse)] font-bold">Neural Sync Active</span>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[300px]">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
