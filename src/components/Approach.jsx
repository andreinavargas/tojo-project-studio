export default function Approach() {
  const points = [
    {
      title: 'Frontend craft',
      text: 'We build interfaces with care, structure and attention to detail.',
    },
    {
      title: 'Software architecture',
      text: 'We think in systems, not only in screens. The goal is clarity that lasts.',
    },
    {
      title: 'Digital strategy',
      text: 'We understand content, marketing and how brands need to show up online.',
    },
  ];

  return (
    <section id="approach" className="border-b border-zinc-200 bg-[#fbfaf7]">
      <div className="mx-auto grid max-w-[1680px] gap-14 px-8 py-24 lg:grid-cols-[0.65fr_1.35fr] lg:px-16">
        <div>
          <p className="text-[11px] uppercase tracking-[0.38em] text-zinc-600">
            Approach
          </p>

          <div className="mt-5 h-px w-10 bg-zinc-950" />

          <h2 className="mt-8 max-w-[440px] text-[44px] font-light leading-[1.04] tracking-[-0.04em]">
            Thoughtful digital work, built close to the ground.
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[340px] overflow-hidden rounded-[1.4rem] border border-zinc-300 bg-white/30">
            <div className="absolute left-1/2 top-0 h-full w-px bg-zinc-200" />
            <div className="absolute left-0 top-1/2 h-px w-full bg-zinc-200" />

            <div className="absolute left-[12%] top-[18%] h-[110px] w-[110px] border border-zinc-500/50" />
            <div className="absolute left-[20%] top-[28%] h-3.5 w-3.5 rounded-full bg-zinc-950" />

            <div className="absolute right-[16%] top-[18%] h-[120px] w-[120px] rotate-45 border border-zinc-500/50" />

            <div className="absolute bottom-[14%] left-[18%] h-[90px] w-[150px] border border-zinc-300" />
            <div className="absolute bottom-[22%] right-[16%] h-[80px] w-[80px] border border-zinc-500/50" />

            <div className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
              Human scale
            </div>

            <div className="absolute right-6 bottom-6 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
              Study 02
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="max-w-2xl text-[19px] leading-9 text-zinc-700">
              Tojo brings together frontend development, software architecture and
              digital marketing experience. We work with the precision of technical
              systems and the sensitivity of people who understand how brands,
              content and products live online.
            </p>

            <div className="mt-12 grid gap-8">
              {points.map((point) => (
                <article key={point.title} className="border-l border-zinc-200 pl-8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.08em]">
                    {point.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-600">
                    {point.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}