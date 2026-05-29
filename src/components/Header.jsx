import Logo from './Logo';
import ModeToggle from './ModeToggle';

export default function Header({ dopamineMode, setDopamineMode }) {
  return (
    <header className="absolute left-0 top-0 z-30 w-full">
      <div className="mx-auto flex max-w-[1680px] items-start justify-between px-8 py-10 lg:px-16">
        <Logo />

        <div className="hidden items-center rounded-full border border-zinc-300 bg-white/80 p-1 shadow-[0_12px_40px_rgba(17,24,39,0.05)] backdrop-blur-md md:flex">
          <nav className="flex items-center gap-1">
            <a href="#services" className="rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-900 transition hover:bg-zinc-950 hover:text-white">
              Services
            </a>
            <a href="#services" className="rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-900 transition hover:bg-zinc-950 hover:text-white">
              Approach
            </a>
            <a href="#contact" className="rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-900 transition hover:bg-zinc-950 hover:text-white">
              Contact
            </a>
          </nav>

          <div className="mx-2 h-8 w-px bg-zinc-200" />

          <ModeToggle
            dopamineMode={dopamineMode}
            setDopamineMode={setDopamineMode}
            variant="desktop"
          />
        </div>

        <button className="mt-1 flex h-10 w-10 items-center justify-center md:hidden">
          <span className="flex flex-col gap-1.5">
            <span className="h-px w-6 bg-zinc-950" />
            <span className="h-px w-6 bg-zinc-950" />
            <span className="h-px w-6 bg-zinc-950" />
          </span>
        </button>
      </div>
    </header>
  );
}