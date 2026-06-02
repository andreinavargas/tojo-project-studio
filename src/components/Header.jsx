import { useState } from 'react';
import Logo from './Logo';
import ModeToggle from './ModeToggle';

export default function Header({ dopamineMode, setDopamineMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = dopamineMode
    ? 'rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-[#111111]'
    : 'rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-900 transition hover:bg-zinc-950 hover:text-white';

  return (
    <header className="absolute left-0 top-0 z-30 w-full">
      <div className="mx-auto flex max-w-[1680px] items-center justify-between px-8 py-8 lg:px-16">
        <Logo />

        <div
          className={
            dopamineMode
              ? 'hidden items-center rounded-full border border-[#111111] bg-[#111111] p-1 shadow-[0_16px_45px_rgba(17,17,17,0.22)] md:flex'
              : 'hidden items-center rounded-full border border-zinc-300 bg-white/80 p-1 shadow-[0_12px_40px_rgba(17,24,39,0.05)] backdrop-blur-md md:flex'
          }
        >
          <nav className="flex items-center gap-1">
            <a href="#services" className={linkClass}>Services</a>
            <a href="#approach" className={linkClass}>Approach</a>
            <a href="#contact" className={linkClass}>Contact</a>
          </nav>

          <div className={dopamineMode ? 'mx-2 h-8 w-px bg-white/25' : 'mx-2 h-8 w-px bg-zinc-200'} />

          <ModeToggle
            dopamineMode={dopamineMode}
            setDopamineMode={setDopamineMode}
            variant="desktop"
          />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Open menu"
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-px w-6 bg-zinc-950" />
            <span className="h-px w-6 bg-zinc-950" />
            <span className="h-px w-6 bg-zinc-950" />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="mx-6 rounded-3xl border border-zinc-300 bg-white/95 p-4 shadow-[0_18px_50px_rgba(17,24,39,0.12)] backdrop-blur-md md:hidden">
          <nav className="grid gap-2">
            <a onClick={() => setMenuOpen(false)} href="#services" className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-900">
              Services
            </a>
            <a onClick={() => setMenuOpen(false)} href="#approach" className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-900">
              Approach
            </a>
            <a onClick={() => setMenuOpen(false)} href="#contact" className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-900">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}