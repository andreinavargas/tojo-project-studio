export default function ModeToggle({ dopamineMode, setDopamineMode, variant = 'mobile' }) {
  const desktop = variant === 'desktop';

  return (
    <button
      type="button"
      onClick={() => setDopamineMode((prev) => !prev)}
      className={
        desktop
          ? 'inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-900 transition hover:bg-zinc-100'
          : 'fixed bottom-5 left-1/2 z-[9999] inline-flex -translate-x-1/2 items-center gap-3 rounded-full border border-zinc-300 bg-white/95 px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-900 shadow-[0_16px_40px_rgba(17,24,39,0.12)] backdrop-blur-md md:hidden'
      }
    >
      <span className="h-3 w-3 rounded-full bg-[#6F87A3]" />
      <span>{dopamineMode ? 'Back to blueprint' : 'Need some dopamine?'}</span>
    </button>
  );
}