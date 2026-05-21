export default function ModeToggle({ dopamineMode, setDopamineMode }) {
  return (
    <button
      type="button"
      onClick={() => setDopamineMode((prev) => !prev)}
      className={
        dopamineMode
          ? 'fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full border border-[#111827] bg-white/90 px-4 py-3 text-sm font-medium text-[#111827] shadow-[0_14px_40px_rgba(17,24,39,0.14)] backdrop-blur-md transition hover:scale-[1.02]'
          : 'fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full border border-zinc-300 bg-white/85 px-4 py-3 text-sm font-medium text-zinc-700 shadow-[0_14px_40px_rgba(17,24,39,0.08)] backdrop-blur-md transition hover:scale-[1.02] hover:border-zinc-400 hover:text-zinc-900'
      }
      aria-label={dopamineMode ? 'Volver al modo blueprint' : 'Activar modo dopamina'}
    >
      <span
        className={
          dopamineMode
            ? 'relative flex h-3 w-3'
            : 'relative flex h-3 w-3'
        }
      >
        <span
          className={
            dopamineMode
              ? 'absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EC4899] opacity-70'
              : 'absolute inline-flex h-full w-full animate-pulse rounded-full bg-[#8FA7C4] opacity-60'
          }
        />
        <span
          className={
            dopamineMode
              ? 'relative inline-flex h-3 w-3 rounded-full bg-[#F97316]'
              : 'relative inline-flex h-3 w-3 rounded-full bg-[#8FA7C4]'
          }
        />
      </span>

      <span className="whitespace-nowrap">
        {dopamineMode ? 'Back to blueprint' : 'Need some dopamine?'}
      </span>
    </button>
  );
}