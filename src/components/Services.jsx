export default function Services() {
  const services = [
    {
      title: 'Frontend Development',
      text: 'Fast, accessible interfaces designed to evolve.',
      icon: 'squares',
    },
    {
      title: 'Software Architecture',
      text: 'Solid foundations, modular systems and long-term maintainability.',
      icon: 'layers',
    },
    {
      title: 'Design Systems',
      text: 'Reusable components and consistent product experiences.',
      icon: 'circle',
    },
    {
      title: 'Content Strategy',
      text: 'Writing, storytelling and digital presence with clarity and purpose.',
      icon: 'lines',
    },
  ];

  return (
    <section
      id="services"
      className="border-b border-zinc-200 bg-[#f7f5f0]"
    >
      <div className="mx-auto grid max-w-[1680px] gap-14 px-8 py-20 lg:grid-cols-[0.55fr_1.45fr] lg:px-16">
        <div>
          <div className="inline-flex items-center rounded-full border border-zinc-300 bg-white/60 px-4 py-2">
            <p className="text-[10px] uppercase tracking-[0.32em] text-zinc-700">
              Services
            </p>
          </div>
          <div className="mt-5 h-px w-10 bg-zinc-950" />
          <h2 className="mt-8 max-w-[360px] text-[40px] font-light leading-[1.04] tracking-[-0.04em]">
            Systems that support products that scale.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="border-l border-zinc-200 pl-8">
              <Icon type={service.icon} />
              <h3 className="mt-8 text-sm font-semibold">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icon({ type }) {
  if (type === 'squares') {
    return (
      <div className="relative h-9 w-9">
        <div className="absolute left-0 top-0 h-5 w-5 border border-zinc-950" />
        <div className="absolute bottom-0 right-0 h-5 w-5 border border-zinc-950" />
      </div>
    );
  }

  if (type === 'layers') {
    return (
      <div className="relative h-9 w-9">
        <div className="absolute left-1 top-0 h-5 w-5 rotate-45 border border-zinc-950" />
        <div className="absolute left-1 top-2 h-5 w-5 rotate-45 border border-zinc-950" />
        <div className="absolute left-1 top-4 h-5 w-5 rotate-45 border border-zinc-950" />
      </div>
    );
  }

  if (type === 'circle') {
    return <div className="h-9 w-9 rounded-full border border-zinc-950" />;
  }

  return (
    <div className="space-y-2 pt-1">
      <div className="h-px w-9 bg-zinc-950" />
      <div className="h-px w-6 bg-zinc-950" />
      <div className="h-px w-4 bg-zinc-950" />
    </div>
  );
}