import Logo from './Logo';

export default function Header({ dopamineMode }) {
  return (
    <header className="absolute left-0 top-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-start justify-between px-6 py-8 md:px-10 lg:px-12">
        <Logo dopamineMode={dopamineMode} />

        <nav
          className={
            dopamineMode
              ? 'hidden gap-8 pt-2 text-sm text-zinc-700 md:flex'
              : 'hidden gap-8 pt-2 text-sm text-zinc-600 md:flex'
          }
        >
          <a
            href="#servicios"
            className={
              dopamineMode
                ? 'transition hover:text-[#2563EB]'
                : 'transition hover:text-zinc-900'
            }
          >
            Servicios
          </a>

          <a
            href="#enfoque"
            className={
              dopamineMode
                ? 'transition hover:text-[#EC4899]'
                : 'transition hover:text-zinc-900'
            }
          >
            Enfoquegg
          </a>

          <a
            href="#contacto"
            className={
              dopamineMode
                ? 'transition hover:text-[#F97316]'
                : 'transition hover:text-zinc-900'
            }
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}