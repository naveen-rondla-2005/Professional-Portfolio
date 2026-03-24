export function SectionHeading({ title, id }: { title: string, id: string }) {
  return (
    <div id={id} className="w-full flex flex-col items-center justify-center pt-32 pb-12 z-20">
      <h2 className="text-2xl md:text-4xl font-black text-white mb-2 tracking-[0.1em] text-neon text-center uppercase drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
        {title}
      </h2>
      <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-cyan-pulse)] to-transparent opacity-70 mt-2"></div>
    </div>
  );
}
