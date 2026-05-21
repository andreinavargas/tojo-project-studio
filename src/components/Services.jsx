export default function Services({ dopamineMode }) {
  const services = [
    {
      number: '01',
      title: 'Arquitectura de software',
      description:
        'Diseño de sistemas claros, escalables y mantenibles, con una base técnica sólida.',
      color: '#F97316',
      label: 'System',
    },
    {
      number: '02',
      title: 'Frontend',
      description:
        'Interfaces limpias, precisas y bien construidas, con foco en estructura, consistencia y detalle.',
      color: '#2563EB',
      label: 'Interface',
    },
    {
      number: '03',
      title: 'Diseño web',
      description:
        'Presencias digitales sobrias y contemporáneas, con una identidad visual clara.',
      color: '#EC4899',
      label: 'Presence',
    },
  ];

  return (
    <section
      id="servicios"
      className={
        dopamineMode
          ? 'relative overflow-hidden bg-[#FFFBF3]'
          : 'relative overflow-hidden bg-stone-50'
      }
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
        <div className="mb-14 flex items-end justify-between gap-8">
          <div>
            <p
              className={
                dopamineMode
                  ? 'inline-block bg-[#111827] px-3 py-2 text-[11px] uppercase tracking-[0.34em] text-white'
                  : 'text-[11px] uppercase tracking-[0.38em] text-zinc-500'
              }
            >
              Servicios
            </p>

            <h2 className="mt-5 max-w-2xl text-3xl font-light tracking-tight text-zinc-900 md:text-4xl">
              Arquitectura, frontend y claridad visual.
            </h2>
          </div>
        </div>

        <div className="grid gap-6">
          {services.map((service) => (
            <article
              key={service.number}
              className={
                dopamineMode
                  ? 'relative overflow-hidden rounded-[1.75rem] border border-[#111827] bg-white/80 p-7'
                  : 'relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white/70 p-7 backdrop-blur-sm'
              }
            >
              {dopamineMode ? (
                <>
                  <div
                    className="absolute left-0 top-0 h-3 w-28"
                    style={{ backgroundColor: service.color }}
                  />
                  <div className="absolute left-0 top-0 h-24 w-[6px] bg-[#111827]" />
                  <div
                    className="absolute right-0 bottom-0 h-3 w-20"
                    style={{ backgroundColor: service.color }}
                  />
                </>
              ) : (
                <>
                  {/* 🔴 TU DISEÑO ORIGINAL */}
                  <div className="absolute left-0 top-0 h-px w-20 bg-[#8FA7C4]/40" />
                  <div className="absolute left-0 top-0 h-20 w-px bg-[#8FA7C4]/40" />
                  <div className="absolute right-0 bottom-0 h-px w-20 bg-zinc-300" />
                  <div className="absolute right-0 bottom-0 h-20 w-px bg-zinc-300" />
                </>
              )}

              <div className="mb-8 flex items-start justify-between gap-6">
                <span
                  className={
                    dopamineMode
                      ? 'text-[42px] font-light tracking-[-0.06em] text-[#111827]'
                      : 'text-[32px] font-light tracking-[-0.04em] text-zinc-400'
                  }
                >
                  {service.number}
                </span>

                <span
                  className={
                    dopamineMode
                      ? 'px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-white'
                      : 'text-[10px] uppercase tracking-[0.35em] text-[#6F87A3]'
                  }
                  style={dopamineMode ? { backgroundColor: service.color } : {}}
                >
                  {service.label}
                </span>
              </div>

              <h3 className="text-xl font-light text-zinc-900 md:text-2xl">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                {service.description}
              </p>

              <div className="mt-8 flex items-center gap-3">
                {dopamineMode ? (
                  <>
                    <span className="h-[3px] w-16 bg-[#111827]" />
                    <span
                      className="h-3 w-3"
                      style={{ backgroundColor: service.color }}
                    />
                    <span className="h-[3px] w-24 bg-[#111827]/20" />
                  </>
                ) : (
                  <>
                    {/* 🔴 ORIGINAL */}
                    <span className="h-px w-16 bg-zinc-300" />
                    <span className="h-2 w-2 rounded-full bg-[#8FA7C4]" />
                    <span className="h-px w-24 bg-zinc-200" />
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}