export default function Hero() {
  return (
    <section className="border-b border-zinc-200 bg-[#fbfaf7]">
      <div className="mx-auto grid min-h-[760px] max-w-[1680px] items-center gap-16 px-8 pb-20 pt-40 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
        <div className="max-w-[580px]">
          <p className="mb-12 text-[11px] uppercase tracking-[0.42em] text-zinc-500">
            Frontend systems · Software architecture · Digital interfaces
          </p>

          <h1 className="text-[64px] font-light leading-[0.96] tracking-[-0.055em] text-zinc-950 md:text-[82px] lg:text-[88px]">
            Visual structure
            <br />
            for digital
            <br />
            systems.
          </h1>

          <div className="mt-8 h-px w-12 bg-zinc-950" />

          <p className="mt-8 max-w-[460px] text-[17px] leading-8 text-zinc-700">
            Software architecture, frontend development and content strategy for
            products that are clear, scalable and well built.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex justify-center rounded-lg border border-zinc-950 bg-zinc-950 px-9 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white"
            >
              Let&apos;s talk
            </a>

            <a
              href="#services"
              className="inline-flex justify-center rounded-lg border border-zinc-500 bg-white/70 px-9 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-950"
            >
              Services
            </a>
          </div>
        </div>

        <div className="relative h-[430px] overflow-hidden rounded-[1.4rem] border border-zinc-300 bg-white/30">
          <div className="absolute left-1/2 top-0 h-full w-px bg-zinc-200" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-zinc-200" />

          <div className="absolute left-[11%] top-[16%] h-[150px] w-[150px] border border-zinc-500/60" />
          <div className="absolute left-[16%] top-[22%] h-[105px] w-[105px] border border-zinc-300" />
          <div className="absolute left-[23%] top-[35%] h-4 w-4 rounded-full bg-zinc-950" />

          <div className="absolute right-[21%] top-[14%] h-[160px] w-[160px] rotate-45 border border-zinc-500/60" />
          <div className="absolute right-[34%] top-[36%] h-px w-12 bg-zinc-300" />
          <div className="absolute right-[38%] top-[30%] h-12 w-px bg-zinc-300" />

          <div className="absolute bottom-[11%] right-[7%] h-[112px] w-[112px] border border-zinc-500/60" />
          <div className="absolute bottom-[23%] right-[15%] h-4 w-4 rounded-full bg-zinc-950" />

          <div className="absolute left-[-8px] top-[50%] h-3 w-3 -translate-y-1/2 rounded-full bg-zinc-950" />
        </div>
      </div>
    </section>
  );
}