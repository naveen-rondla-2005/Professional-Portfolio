"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Octahedron, MeshWobbleMaterial, Dodecahedron, Html } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";
import { RotateCcw, Zap, MousePointer2 } from "lucide-react";

// The "Mecha-Neural" Central Core
function MechaCore({ isFlipped, isPulse }: { isFlipped: boolean, isPulse: boolean }) {
  const coreRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  
  const colors = useMemo(() => {
    if (!mounted) return { cyan: "#00ffff", turquoise: "#40e0d0" };
    return {
      cyan: theme === 'light' ? "#00ccd6" : "#00ffff",
      turquoise: theme === 'light' ? "#30b0a0" : "#40e0d0"
    };
  }, [theme, mounted]);

  useFrame((state) => {
    if (coreRef.current) {
      // Base rotation
      const baseRotation = state.clock.elapsedTime * 0.2;
      // Target rotation based on flip
      const targetFlip = isFlipped ? Math.PI : 0;
      
      // Smoothly interpolate to target
      coreRef.current.rotation.y = THREE.MathUtils.lerp(coreRef.current.rotation.y, baseRotation + targetFlip, 0.05);
      coreRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Mouse following (subtle)
      const mouseX = (state.mouse.x * Math.PI) / 10;
      const mouseY = (state.mouse.y * Math.PI) / 10;
      coreRef.current.rotation.x = THREE.MathUtils.lerp(coreRef.current.rotation.x, -mouseY, 0.1);
      coreRef.current.rotation.y = THREE.MathUtils.lerp(coreRef.current.rotation.y, coreRef.current.rotation.y + mouseX, 0.1);
    }
  });

  return (
    <group ref={coreRef}>
      {/* Central Pulsing Heart */}
      <Float speed={2} rotationIntensity={isPulse ? 10 : 2} floatIntensity={1}>
        <Octahedron args={[1, 0]}>
          <MeshWobbleMaterial 
            color={isPulse ? "#ffffff" : colors.cyan} 
            emissive={isPulse ? "#ffffff" : colors.cyan} 
            emissiveIntensity={isPulse ? 10 : 2}
            factor={isPulse ? 2 : 0.4} 
            speed={isPulse ? 10 : 2} 
            transparent
            opacity={0.9}
          />
        </Octahedron>
      </Float>

      {/* Robotic outer rings / plates */}
      {Array.from({ length: 6 }).map((_, i) => (
        <group key={i} rotation={[i * Math.PI / 3, 0, 0]}>
          <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
            <mesh position={[0, 2.5, 0]}>
              <boxGeometry args={[2, 0.05, 0.5]} />
              <meshStandardMaterial 
                color={isPulse ? colors.cyan : "#ffffff"} 
                emissive={colors.turquoise} 
                emissiveIntensity={isPulse ? 2 : 0.5} 
                metalness={1} 
                roughness={0} 
              />
            </mesh>
          </Float>
        </group>
      ))}

      {/* Neural Core Label (Visible on Back) */}
      <Html position={[0, -2, 0]} center style={{ pointerEvents: 'none' }}>
         <div className={`transition-opacity duration-1000 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-[var(--color-cyan-pulse)] font-mono text-[10px] tracking-[0.5em] uppercase whitespace-nowrap bg-black/80 px-4 py-1 rounded-full border border-[var(--color-cyan-pulse)]/30 backdrop-blur-md">
              NEURAL CORE REAR_SYNC
            </span>
         </div>
      </Html>
    </group>
  );
}

// Drifting mechanical debris
function MechanicalDebris() {
  const debris = useMemo(() => {
    return Array.from({ length: 12 }).map(() => ({
      pos: [(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10] as [number, number, number],
      scale: 0.1 + Math.random() * 0.4,
      speed: 0.5 + Math.random()
    }));
  }, []);

  return (
    <>
      {debris.map((item, i) => (
        <Float key={i} speed={item.speed} rotationIntensity={2} floatIntensity={1} position={item.pos}>
          <Dodecahedron args={[item.scale, 0]}>
            <meshStandardMaterial color="#1f1f1f" emissive="#00ffff" emissiveIntensity={0.2} metalness={0.9} roughness={0.1} />
          </Dodecahedron>
        </Float>
      ))}
    </>
  );
}

// Ambient Star/Dust Field
function StarField() {
  const count = 300; // Reduced from 800
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      p[i] = (Math.random() - 0.5) * 30;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={true}>
      <PointMaterial 
        transparent 
        color="#ffffff" 
        size={0.08} 
        sizeAttenuation={true} 
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export function AntiGravityHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPulse, setIsPulse] = useState(false);

  useEffect(() => setMounted(true), []);

  const gridColor = useMemo(() => {
    if (!mounted) return "#00ffff";
    return theme === 'light' ? "#00ccd6" : "#00ffff";
  }, [theme, mounted]);

  const handlePulse = () => {
    setIsPulse(true);
    setTimeout(() => setIsPulse(false), 500);
  };

  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-[var(--color-obsidian)]">
      {/* Professional Dashboard Controls overlayed on the 3D scene */}
      <div className="absolute top-24 right-8 z-50 flex flex-col gap-4 pointer-events-auto">
         <button 
           onClick={() => setIsFlipped(!isFlipped)}
           className="p-4 rounded-2xl bg-black/50 border border-[var(--color-cyan-pulse)]/30 text-[var(--color-cyan-pulse)] hover:bg-[var(--color-cyan-pulse)]/20 transition-all backdrop-blur-md group"
           title="Rotate Neural Core"
         >
           <RotateCcw className={`transition-transform duration-700 ${isFlipped ? 'rotate-180' : 'rotate-0'}`} size={20} />
         </button>
         <button 
           onClick={handlePulse}
           className="p-4 rounded-2xl bg-black/50 border border-[var(--violet-glow)]/30 text-[var(--violet-glow)] hover:bg-[var(--violet-glow)]/20 transition-all backdrop-blur-md active:scale-90"
           title="Init Neural Pulse"
         >
           <Zap size={20} className={isPulse ? 'animate-ping' : ''} />
         </button>
         <div className="p-4 rounded-2xl bg-black/20 border border-white/5 text-gray-500 backdrop-blur-sm flex flex-col items-center">
            <MousePointer2 size={16} className="animate-bounce mb-1" />
            <span className="text-[8px] font-mono tracking-widest uppercase writing-mode-vertical">Interact</span>
         </div>
      </div>

      <Canvas 
        camera={{ position: [0, 0, 12], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        shadows={false}
        onClick={handlePulse}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#40e0d0" />
        
        <MechaCore isFlipped={isFlipped} isPulse={isPulse} />
        <MechanicalDebris />
        <StarField />
        
        {/* Subtle grid in background */}
        <group position={[0, -5, 0]}>
          <gridHelper args={[50, 50, gridColor, gridColor]}>
            <meshBasicMaterial attach="material" transparent opacity={0.1} />
          </gridHelper>
        </group>
        
        <fog attach="fog" args={['#0a0a0a', 8, 25]} />
      </Canvas>
    </div>
  );
}
