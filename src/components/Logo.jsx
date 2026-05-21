export default function Logo({ dopamineMode }) {
  return (
    <a href="/" className="group inline-flex items-start gap-4">
      <div
        className={
          dopamineMode
            ? 'mt-1 h-10 w-[6px] bg-[#111827]'
            : 'mt-1 h-10 w-px bg-[#8FA7C4]/45'
        }
      />

      <div className="leading-none">
        <p
          className={
            dopamineMode
              ? 'text-[26px] font-light tracking-[0.18em] text-[#111827] md:text-[30px]'
              : 'text-[26px] font-light tracking-[0.18em] text-zinc-900 md:text-[30px]'
          }
        >
          TOJO
        </p>

        <div className="mt-2 flex items-center gap-3">
          <span
            className={
              dopamineMode
                ? 'h-[3px] w-10 bg-[#2563EB]'
                : 'h-px w-10 bg-zinc-300'
            }
          />
          <p
            className={
              dopamineMode
                ? 'text-[10px] uppercase tracking-[0.42em] text-[#111827]'
                : 'text-[10px] uppercase tracking-[0.42em] text-zinc-500'
            }
          >
            Project Studio
          </p>
        </div>
      </div>
    </a>
  );
}