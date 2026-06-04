import ContactForm from './ContactForm';
export default function Contact({ dopamineMode }) {
  if (dopamineMode) return <DopamineContact />;
  return <BlueprintContact />;
}

function BlueprintContact() {
  return (
    <section id="contact" className="bg-[#fbfaf7]">
      <div className="mx-auto max-w-[1680px] px-8 py-24 lg:px-16">
        <div className="grid gap-12  border-zinc-200 pt-20 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.38em] text-zinc-600">
              Contact
            </p>

            <div className="mt-5 h-px w-10 bg-zinc-950" />

            <h2 className="mt-8 max-w-[420px] text-[48px] font-light leading-[1.02] tracking-[-0.04em]">
              Let&apos;s build something useful.
            </h2>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function DopamineContact() {
  return (
    <section id="contact" className="bg-[#FFF3D6]">
      <div className="mx-auto grid max-w-[1680px] border-2 border-[#111111] lg:grid-cols-[0.16fr_0.18fr_0.66fr]">
        <div className="min-h-[460px] px-10 py-12 lg:px-16">
          <div className="inline-flex bg-[#111111] px-4 py-2">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white">
              Contact
            </p>
          </div>

          <h2 className="mt-8 text-[46px] font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#111111] md:text-[60px] lg:text-[66px] xl:text-[78px]">
            Let&apos;s build
            <br />
            something
            <br />
            <span className="text-[#F4362F]">awesome.</span>
          </h2>

          <div className="mt-8 text-4xl text-[#111111]">✦</div>
        </div>

        <div className="flex min-h-[460px] items-center justify-center border-r-2 border-[#111111] px-8 py-12">
          <div className="flex h-[270px] w-[270px] items-center justify-center rounded-full border-2 border-[#111111] bg-[#FFD400] p-8 text-center text-base font-black leading-7 text-[#111111]">
            Tell us about
            <br />
            your project,
            <br />
            challenge or idea.
            <br />
            We&apos;ll get back
            <br />
            to you soon!
          </div>
        </div>

        <div className="min-h-[460px] px-8 py-12 lg:px-12">
          <ContactForm dopamine />
        </div>
      </div>
    </section>
  );
}

