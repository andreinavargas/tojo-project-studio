export default function Approach({ dopamineMode }) {
  return (
    <section id="enfoque" className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div
          className={
            dopamineMode
              ? 'relative overflow-hidden rounded-[2rem] border border-[#111827] bg-white/80 p-8 shadow-[0_20px_70px_rgba(17,24,39,0.06)] md:p-10'
              : 'relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/70 p-8 md:p-10'
          }
        >
          {dopamineMode ? (
            <>
              <div className="absolute left-0 top-0 h-3 w-24 bg-[#FACC15]" />
              <div className="absolute left-0 top-0 h-28 w-[6px] bg-[#111827]" />
            </>
          ) : (
            <>
              <div className="absolute left-0 top-0 h-px w-20 bg-[#8FA7C4]/45" />
              <div className="absolute left-0 top-0 h-20 w-px bg-[#8FA7C4]/45" />
            </>
          )}

          <p
            className={
              dopamineMode
                ? 'inline-block bg-[#EC4899] px-3 py-2 text-[11px] uppercase tracking-[0.34em] text-white'
                : 'text-[11px] uppercase tracking-[0.38em] text-zinc-500'
            }
          >
            Enfoque
          </p>

          <h2 className="mt-6 text-3xl font-light tracking-tight text-zinc-900 md:text-4xl">
            Menos ruido.
            <br />
            Más sistema.
          </h2>

          <div className="mt-10 space-y-5 text-sm leading-7 text-zinc-600">
            <p>
              El objetivo no es solo que una web se vea bien, sino que tenga una estructura clara,
              una lógica sólida y una presencia visual precisa.
            </p>
            <p>
              Tojo une arquitectura de software, frontend y sensibilidad gráfica para construir
              productos sobrios, útiles y bien resueltos.
            </p>
          </div>
        </div>

        <div
          className={
            dopamineMode
              ? 'relative min-h-[380px] overflow-hidden rounded-[2rem] border border-[#111827] bg-white/80'
              : 'relative min-h-[360px] overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/60'
          }
        >
          {dopamineMode ? (
            <>
              <div className="absolute inset-8 border border-[#111827]/10" />

              <div className="absolute left-12 top-12 bottom-12 w-[3px] bg-[#111827]" />
              <div className="absolute left-12 top-12 h-[90px] w-[140px] bg-[#2563EB]" />
              <div className="absolute left-[180px] top-[120px] h-[70px] w-[70px] bg-[#FACC15]" />
              <div className="absolute right-[70px] top-[70px] h-[120px] w-[120px] border-[3px] border-[#EC4899]" />
              <div className="absolute left-[120px] bottom-[70px] h-[90px] w-[180px] bg-[#F97316]" />
              <div className="absolute right-[80px] bottom-[70px] h-[70px] w-[70px] bg-[#14B8A6]" />

              <div className="absolute left-6 top-6 bg-[#111827] px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-white">
                Structure
              </div>
              <div className="absolute right-6 bottom-6 bg-[#2563EB] px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-white">
                Study 02
              </div>
            </>
          ) : (
            <>
              <div className="absolute inset-8 border border-zinc-200" />
              <div className="absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-zinc-200" />
              <div className="absolute left-8 right-8 top-1/2 h-px -translate-y-1/2 bg-zinc-200" />

              <div className="absolute left-16 top-16 h-28 w-28 border border-[#8FA7C4]/25" />
              <div className="absolute right-16 top-16 h-24 w-24 rotate-45 border border-zinc-300" />
              <div className="absolute left-24 bottom-16 h-20 w-20 rounded-full border border-zinc-300" />
              <div className="absolute right-20 bottom-20 h-32 w-32 border border-[#8FA7C4]/20" />

              <div className="absolute left-[24%] top-[30%] h-2.5 w-2.5 rounded-full bg-[#8FA7C4]" />
              <div className="absolute right-[28%] top-[56%] h-2.5 w-2.5 rounded-full bg-[#8FA7C4]" />
              <div className="absolute left-[48%] bottom-[22%] h-2.5 w-2.5 rounded-full bg-zinc-500" />

              <div className="absolute left-8 top-8 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                Section / logic
              </div>
              <div className="absolute right-8 bottom-8 text-[10px] uppercase tracking-[0.35em] text-zinc-400">
                Study 02
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}