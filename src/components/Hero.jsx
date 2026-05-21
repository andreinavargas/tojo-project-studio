export default function Hero({ dopamineMode }) {
  return (
    <section
      className={
        dopamineMode
          ? 'relative overflow-hidden border-b border-[#E7D9C7]'
          : 'relative overflow-hidden border-b border-zinc-200'
      }
    >
      <div
        className={
          dopamineMode
            ? 'absolute inset-0 bg-[#FFFBF3]'
            : 'absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,167,196,0.10),transparent_38%)]'
        }
      />

      <div
        className={
          dopamineMode
            ? 'absolute inset-0 opacity-45 [background-image:linear-gradient(to_right,rgba(17,24,39,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.06)_1px,transparent_1px)] [background-size:48px_48px]'
            : 'absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(24,24,27,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.05)_1px,transparent_1px)] [background-size:48px_48px]'
        }
      />

      {dopamineMode && (
        <>
          <div className="absolute left-[-6%] top-[8%] h-[220px] w-[220px] rounded-full bg-[#EC4899]/10 blur-3xl" />
          <div className="absolute right-[-4%] top-[14%] h-[240px] w-[240px] rounded-full bg-[#2563EB]/10 blur-3xl" />
          <div className="absolute bottom-[4%] left-[28%] h-[220px] w-[220px] rounded-full bg-[#F97316]/8 blur-3xl" />
        </>
      )}

      <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-center px-6 pb-12 pt-24 md:px-10 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <p
              className={
                dopamineMode
                  ? 'mb-8 inline-block border border-[#111827] bg-[#FACC15] px-3 py-2 text-[11px] uppercase tracking-[0.34em] text-[#111827] md:text-xs'
                  : 'mb-8 text-[11px] uppercase tracking-[0.42em] text-zinc-500 md:text-xs'
              }
            >
              Frontend systems · software architecture · digital interfaces
            </p>

            <h1
              className={
                dopamineMode
                  ? 'max-w-4xl text-5xl font-light leading-[0.9] tracking-[-0.05em] text-[#111827] md:text-7xl lg:text-[94px]'
                  : 'max-w-3xl text-5xl font-light leading-[0.95] tracking-[-0.04em] text-zinc-900 md:text-7xl lg:text-[88px]'
              }
            >
              {dopamineMode ? (
                <>
                  Forma,
                  <br />
                  estructura
                  <br />
                  y composición
                  digital.
                </>
              ) : (
                <>
                  Estructura visual
                  <br />
                  para sistemas
                  <br />
                  digitales.
                </>
              )}
            </h1>

            <p
              className={
                dopamineMode
                  ? 'mt-8 max-w-xl text-base leading-8 text-[#374151]'
                  : 'mt-8 max-w-xl text-base leading-8 text-zinc-600'
              }
            >
              {dopamineMode
                ? 'Arquitectura de software y desarrollo frontend con claridad técnica, lenguaje visual y carácter.'
                : 'Arquitectura de software y desarrollo frontend para productos claros, escalables y bien construidos.'}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className={
                  dopamineMode
                    ? 'inline-flex rounded-2xl border border-[#111827] bg-[#111827] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(17,24,39,0.18)] transition hover:translate-y-[-1px]'
                    : 'inline-flex rounded-2xl border border-zinc-900 bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px]'
                }
              >
                Hablemos
              </a>

              <a
                href="#servicios"
                className={
                  dopamineMode
                    ? 'inline-flex rounded-2xl border border-[#111827] bg-white px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#EC4899] hover:text-white hover:border-[#EC4899]'
                    : 'inline-flex rounded-2xl border border-zinc-300 bg-white/70 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-400'
                }
              >
                Servicios
              </a>
            </div>
          </div>

          <div className="relative h-[470px]">
            <div
              className={
                dopamineMode
                  ? 'absolute inset-0 rounded-[2rem] border border-[#111827] bg-white/80 shadow-[0_24px_80px_rgba(17,24,39,0.10)] backdrop-blur-sm'
                  : 'absolute inset-0 rounded-[2rem] border border-zinc-300 bg-white/70 backdrop-blur-sm'
              }
            />

            <div
              className={
                dopamineMode
                  ? 'absolute inset-6 border border-[#111827]/10'
                  : 'absolute inset-6 border border-zinc-200'
              }
            />

            {dopamineMode ? (
              <>
                {/* bandas verticales tipo Soto */}
                <div className="absolute left-[60px] top-[40px] bottom-[40px] w-[2px] bg-[#111827]" />
                <div className="absolute left-[72px] top-[40px] bottom-[40px] w-[2px] bg-[#EC4899]" />
                <div className="absolute left-[84px] top-[40px] bottom-[40px] w-[2px] bg-[#2563EB]" />
                <div className="absolute left-[96px] top-[40px] bottom-[40px] w-[2px] bg-[#F97316]" />
                <div className="absolute left-[108px] top-[40px] bottom-[40px] w-[2px] bg-[#111827]" />

                {/* bloques tipo Mondrian */}
                <div className="absolute left-[140px] top-[60px] h-[120px] w-[120px] bg-[#FACC15]" />
                <div className="absolute left-[270px] top-[60px] h-[60px] w-[140px] bg-[#2563EB]" />
                <div className="absolute left-[270px] top-[140px] h-[100px] w-[60px] bg-[#EC4899]" />
                <div className="absolute left-[350px] top-[140px] h-[100px] w-[120px] border-2 border-[#111827]" />

                {/* líneas estructurales fuertes */}
                <div className="absolute left-[140px] top-[200px] h-[6px] w-[200px] bg-[#111827]" />
                <div className="absolute left-[140px] top-[200px] h-[140px] w-[6px] bg-[#111827]" />

                {/* bloques inferiores */}
                <div className="absolute left-[170px] bottom-[60px] h-[80px] w-[120px] bg-[#F97316]" />
                <div className="absolute left-[310px] bottom-[60px] h-[80px] w-[60px] bg-[#14B8A6]" />

                {/* nodos asimétricos */}
                <div className="absolute left-[120px] top-[260px] h-3 w-3 bg-[#111827]" />
                <div className="absolute left-[320px] top-[90px] h-3 w-3 bg-[#111827]" />
                <div className="absolute left-[380px] bottom-[120px] h-3 w-3 bg-[#111827]" />

                {/* etiquetas editoriales */}
                <div className="absolute left-6 top-6 bg-[#111827] px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-white">
                  Composition
                </div>
                <div className="absolute right-6 bottom-6 bg-[#2563EB] px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-white">
                  Grid study
                </div>
              </>
            ) : (
              <>
                {/* composición normal arquitectónica */}
                <div className="absolute inset-10 rounded-[1.4rem] border border-zinc-200/90" />
                <div className="absolute left-1/2 top-12 bottom-12 w-px -translate-x-1/2 bg-zinc-200" />
                <div className="absolute top-1/2 left-12 right-12 h-px -translate-y-1/2 bg-zinc-200" />

                <div className="absolute left-16 top-16 h-[300px] w-[300px] border border-zinc-200/90" />
                <div className="absolute left-16 top-16 h-[300px] w-px bg-zinc-200/80" />
                <div className="absolute left-[196px] top-16 h-[300px] w-px bg-zinc-200/80" />
                <div className="absolute left-[316px] top-16 h-[300px] w-px bg-zinc-200/80" />
                <div className="absolute left-16 top-[136px] h-px w-[300px] bg-zinc-200/80" />
                <div className="absolute left-16 top-[226px] h-px w-[300px] bg-zinc-200/80" />
                <div className="absolute left-16 top-[316px] h-px w-[300px] bg-zinc-200/80" />

                <div className="absolute left-20 top-24 h-40 w-40 border border-[#8FA7C4]/40" />
                <div className="absolute left-24 top-28 h-32 w-32 border border-zinc-400/50" />
                <div className="absolute left-40 top-24 h-40 w-px bg-[#8FA7C4]/45" />
                <div className="absolute left-20 top-44 h-40 w-px rotate-90 origin-top-left bg-[#8FA7C4]/45" />

                <div className="absolute left-[290px] top-[92px] h-[130px] w-[130px] rotate-45 border border-[#8FA7C4]/35" />
                <div className="absolute left-[318px] top-[120px] h-[74px] w-[74px] rotate-45 border border-zinc-400/50" />
                <div className="absolute left-[270px] top-[155px] h-px w-[170px] bg-zinc-300" />

                <div className="absolute right-14 bottom-14 h-28 w-28 border border-[#8FA7C4]/30" />
                <div className="absolute right-[74px] bottom-[74px] h-16 w-16 border border-zinc-400/50" />

                <div className="absolute left-10 top-[88px] h-px w-20 bg-zinc-300" />
                <div className="absolute left-10 top-[88px] h-2 w-2 -translate-y-1/2 rounded-full bg-zinc-400" />
                <div className="absolute right-10 top-[182px] h-px w-24 bg-zinc-300" />
                <div className="absolute right-10 top-[182px] h-2 w-2 -translate-y-1/2 translate-x-full rounded-full bg-zinc-400" />
                <div className="absolute left-[120px] bottom-10 h-px w-28 bg-zinc-300" />
                <div className="absolute left-[248px] bottom-10 h-2 w-2 -translate-y-1/2 rounded-full bg-zinc-400" />

                <div className="absolute left-[148px] top-[148px] h-2.5 w-2.5 rounded-full bg-[#8FA7C4]" />
                <div className="absolute left-[342px] top-[214px] h-2.5 w-2.5 rounded-full bg-[#8FA7C4]" />
                <div className="absolute right-[112px] bottom-[112px] h-2.5 w-2.5 rounded-full bg-[#8FA7C4]" />
                <div className="absolute left-[260px] bottom-[102px] h-2.5 w-2.5 rounded-full bg-zinc-500" />

                <div className="absolute left-[92px] top-[290px] h-10 w-24 border-l border-t border-zinc-300" />
                <div className="absolute right-[84px] top-[72px] h-8 w-20 border-r border-t border-zinc-300" />
                <div className="absolute left-[230px] bottom-[72px] h-12 w-20 border-b border-l border-zinc-300" />

                <div className="absolute left-8 top-8 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                  Section A-A
                </div>
                <div className="absolute right-8 top-8 text-[10px] uppercase tracking-[0.35em] text-[#6F87A3]">
                  Module study
                </div>
                <div className="absolute left-8 bottom-8 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                  Tojo / grid 01
                </div>
                <div className="absolute right-8 bottom-8 text-[10px] uppercase tracking-[0.35em] text-zinc-400">
                  Scale 1:1
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}