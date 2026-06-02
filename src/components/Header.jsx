import Logo from './Logo';
import ModeToggle from './ModeToggle';

export default function Header({ dopamineMode, setDopamineMode }) {
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
            {[
              ['Services', '#services'],
              ['Approach', '#approach'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={
                  dopamineMode
                    ? 'rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-[#111111]'
                    : 'rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-900 transition hover:bg-zinc-950 hover:text-white'
                }
              >
                {label}
              </a>
            ))}
          </nav>

          <div
            className={
              dopamineMode
                ? 'mx-2 h-8 w-px bg-white/25'
                : 'mx-2 h-8 w-px bg-zinc-200'
            }
          />

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