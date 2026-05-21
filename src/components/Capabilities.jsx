export default function Capabilities({ dopamineMode }) {
  const items = [
    'Sistemas frontend escalables',
    'Arquitecturas claras y mantenibles',
    'Interfaces consistentes',
    'Diseño visual sobrio',
    'Componentes reutilizables',
    'Presencia digital con criterio',
  ];

  const colors = ['#2563EB', '#EC4899', '#F97316', '#14B8A6', '#FACC15', '#111827'];

  return (
    <section
      className={
        dopamineMode
          ? 'relative overflow-hidden border-y border-[#E7D9C7] bg-[#FFFBF3]'
          : 'relative overflow-hidden border-y border-zinc-200 bg-white/30'
      }
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
        <div className="mb-12">
          <p
            className={
              dopamineMode
                ? 'inline-block bg-[#2563EB] px-3 py-2 text-[11px] uppercase tracking-[0.34em] text-white'
                : 'text-[11px] uppercase tracking-[0.38em] text-zinc-500'
            }
          >
            Capacidades
          </p>

          <h2 className="mt-5 max-w-2xl text-3xl font-light tracking-tight text-zinc-900 md:text-4xl">
            Una lógica técnica con forma propia.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item}
              className={
                dopamineMode
                  ? 'relative min-h-[180px] overflow-hidden rounded-[1.5rem] border border-[#111827] bg-white/80 p-5'
                  : 'relative min-h-[170px] overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white/70 p-5'
              }
            >
              {dopamineMode ? (
                <>
                  <div
                    className="absolute left-0 top-0 h-full w-[6px]"
                    style={{ backgroundColor: colors[index] }}
                  />
                  <div
                    className="absolute right-5 top-5 h-10 w-10"
                    style={{ backgroundColor: colors[index] }}
                  />
                </>
              ) : (
                <>
                  {/* 🔴 ORIGINAL */}
                  <div className="absolute right-5 top-5 h-10 w-10 rounded-full border border-[#8FA7C4]/25" />
                  <div className="absolute bottom-5 right-5 h-px w-16 bg-zinc-300" />
                  <div className="absolute bottom-5 right-5 h-16 w-px bg-zinc-300" />
                  <div className="absolute left-5 bottom-5 h-2 w-2 rounded-full bg-[#8FA7C4]" />
                </>
              )}

              <div
                className={
                  dopamineMode
                    ? 'absolute left-5 top-5 bg-[#111827] px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-white'
                    : 'absolute left-5 top-5 text-[10px] uppercase tracking-[0.35em] text-zinc-500'
                }
              >
                0{index + 1}
              </div>

              <p className="relative mt-14 text-base leading-7 text-zinc-900">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}