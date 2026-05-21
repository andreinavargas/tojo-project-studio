export default function Footer({ dopamineMode }) {
  return (
    <footer
      className={
        dopamineMode
          ? 'border-t border-[#E7D9C7] bg-[#FFFBF3]'
          : 'border-t border-zinc-200 bg-stone-50'
      }
    >
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            {dopamineMode ? (
              <>
                <p className="inline-block bg-[#111827] px-3 py-2 text-[11px] uppercase tracking-[0.34em] text-white">
                  Tojo Project Studio
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                  Systems · Frontend · Structure
                </p>
              </>
            ) : (
              <>
                <p className="text-[11px] uppercase tracking-[0.42em] text-zinc-400">
                  Tojo Project Studio
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                  Systems · Frontend · Structure
                </p>
              </>
            )}
          </div>

          <div>
            {dopamineMode ? (
              <div className="flex items-center gap-2">
                <span className="h-3 w-14 bg-[#111827]" />
                <span className="h-3 w-8 bg-[#EC4899]" />
                <span className="h-3 w-6 bg-[#2563EB]" />
                <span className="h-3 w-4 bg-[#FACC15]" />
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-zinc-300" />
                <span className="h-2 w-2 rounded-full bg-[#8FA7C4]" />
                <span className="h-px w-20 bg-zinc-200" />
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}