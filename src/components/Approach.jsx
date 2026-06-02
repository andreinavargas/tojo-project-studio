import bridgeIllustration from '../assets/odaiba.png';

export default function Approach({ dopamineMode }) {
  if (dopamineMode) return <DopamineApproach />;
  return <BlueprintApproach />;
}

function BlueprintApproach() {
  return (
    <section id="approach" className="border-b border-zinc-200 bg-[#fbfaf7]">
      <div className="mx-auto grid max-w-[1680px] gap-14 px-8 py-24 lg:grid-cols-[0.55fr_1.45fr] lg:px-16">
        <div>
          <p className="text-[11px] uppercase tracking-[0.38em] text-zinc-600">
            Approach
          </p>

          <div className="mt-5 h-px w-10 bg-zinc-950" />

          <h2 className="mt-8 max-w-[360px] text-[40px] font-light leading-[1.04] tracking-[-0.04em]">
            Built with intention.
          </h2>
        </div>

        <p className="max-w-3xl text-base leading-8 text-zinc-700">
          Tojo brings together frontend development, software architecture and
          digital marketing experience. We work with precision, structure and
          human sense.
        </p>
      </div>
    </section>
  );
}

function DopamineApproach() {
  return (
    <section id="approach" className="bg-[#FFF3D6]">
      <div className="mx-auto grid max-w-[1680px] border-x-2 border-t-2 border-[#111111] lg:grid-cols-[0.30fr_0.40fr_0.30fr]">
        <div className="min-h-[460px] border-r-2 border-[#111111] px-8 py-12 lg:px-16">
          <div className="inline-flex bg-[#111111] px-4 py-2">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white">
              Approach
            </p>
          </div>

          <h2 className="mt-8 text-[52px] font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#111111] md:text-[68px] lg:text-[76px]">
            Structure.
            <br />
            Rhythm.
            <br />
            <span className="text-[#F4362F]">Character.</span>
          </h2>

          <div className="mt-8 text-4xl text-[#111111]">✦</div>
        </div>

        <div className="min-h-[460px] border-r-2 border-[#111111]">
          <img
            src={bridgeIllustration}
            alt="Architectural bridge illustration"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-h-[460px] px-8 py-12 lg:px-12">
          <p className="max-w-xl text-base font-semibold leading-8 text-[#111111]">
            We combine frontend craftsmanship, software architecture and digital
            marketing experience. We understand how brands, content and products
            come together online — and we build with precision and human sense.
          </p>

          <div className="mt-8 h-[2px] w-10 bg-[#111111]" />

          <div className="mt-8 grid gap-3 text-sm font-black uppercase leading-6">
            <p>Front end craft</p>
            <p>System thinking</p>
            <p>Digital strategy</p>
          </div>
        </div>
      </div>
    </section>
  );
}