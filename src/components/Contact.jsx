export default function Contact() {
  return (
    <section id="contact" className="bg-[#fbfaf7]">
      <div className="mx-auto max-w-[1680px] px-8 py-24 lg:px-16">
        <div className="grid gap-12 border-t border-zinc-200 pt-20 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.38em] text-zinc-600">
              Contact
            </p>

            <div className="mt-5 h-px w-10 bg-zinc-950" />

            <h2 className="mt-8 max-w-[420px] text-[48px] font-light leading-[1.02] tracking-[-0.04em]">
              Let&apos;s build something useful.
            </h2>

            <p className="mt-8 max-w-md text-base leading-8 text-zinc-600">
              Tell us about your project, challenge or idea. We&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <form className="grid gap-5">
            <input className="rounded-lg border border-zinc-300 bg-white/70 px-5 py-4 outline-none focus:border-zinc-950" placeholder="Name" />
            <input className="rounded-lg border border-zinc-300 bg-white/70 px-5 py-4 outline-none focus:border-zinc-950" placeholder="Email" />
            <input className="rounded-lg border border-zinc-300 bg-white/70 px-5 py-4 outline-none focus:border-zinc-950" placeholder="Company" />
            <textarea className="min-h-[180px] rounded-lg border border-zinc-300 bg-white/70 px-5 py-4 outline-none focus:border-zinc-950" placeholder="Tell us about your project" />

            <button
              type="button"
              className="mt-3 inline-flex w-fit justify-center rounded-lg border border-zinc-950 bg-zinc-950 px-9 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}