"use client";

import { InlineWidget } from "react-calendly";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function CalendarDemo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full min-h-[700px] rounded-2xl overflow-hidden bg-[var(--obsidian)] border border-[var(--glass-border)] transition-colors duration-300">
      <InlineWidget 
        url="https://calendly.com/naveenrondla" 
        styles={{
          height: '700px',
          borderRadius: '16px'
        }}
        pageSettings={{
          backgroundColor: theme === 'dark' ? '0a0a0a' : 'f8fafc',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '06b6d4',
          textColor: theme === 'dark' ? 'ffffff' : '0f172a'
        }}
      />
    </div>
  );
}
