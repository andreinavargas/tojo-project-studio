import { useState } from 'react';
import ContactForm from './ContactForm';

export default function Contact({ dopamineMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="contacto"
      className={
        dopamineMode
          ? 'relative overflow-hidden bg-[#FFFBF3]'
          : 'relative overflow-hidden bg-stone-50'
      }
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
        <div
          className={
            dopamineMode
              ? 'relative overflow-hidden rounded-[2rem] border border-[#111827] bg-white/80 p-8 shadow-[0_22px_70px_rgba(17,24,39,0.06)] md:p-10 lg:p-12'
              : 'relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/70 p-8 backdrop-blur-sm md:p-10 lg:p-12'
          }
        >
          {dopamineMode ? (
            <>
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(17,24,39,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
              <div className="absolute left-0 top-0 h-3 w-24 bg-[#EC4899]" />
              <div className="absolute left-0 top-0 h-24 w-[6px] bg-[#111827]" />
              <div className="absolute right-0 bottom-0 h-3 w-24 bg-[#2563EB]" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(24,24,27,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />
              <div className="absolute left-0 top-0 h-px w-24 bg-[#8FA7C4]/45" />
              <div className="absolute left-0 top-0 h-24 w-px bg-[#8FA7C4]/45" />
              <div className="absolute right-0 bottom-0 h-px w-24 bg-zinc-300" />
              <div className="absolute right-0 bottom-0 h-24 w-px bg-zinc-300" />
            </>
          )}

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <p
                className={
                  dopamineMode
                    ? 'inline-block bg-[#111827] px-3 py-2 text-[11px] uppercase tracking-[0.34em] text-white'
                    : 'text-[11px] uppercase tracking-[0.38em] text-zinc-500'
                }
              >
                Contacto
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-light tracking-tight text-zinc-900 md:text-4xl">
                Hablemos de tu proyecto.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600">
                Arquitectura, frontend o diseño web. Cuéntanos qué necesitas y vemos cómo ayudarte.
              </p>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className={
                    dopamineMode
                      ? 'inline-flex items-center justify-center rounded-2xl border border-[#111827] bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px]'
                      : 'inline-flex items-center justify-center rounded-2xl border border-zinc-900 bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px]'
                  }
                >
                  Contáctanos
                </button>
              </div>
            </div>

            <div
              className={
                dopamineMode
                  ? 'relative min-h-[260px] overflow-hidden rounded-[1.5rem] border border-[#111827] bg-[#FFFBF3]'
                  : 'relative min-h-[260px] rounded-[1.5rem] border border-zinc-200 bg-stone-50/80'
              }
            >
              {dopamineMode ? (
                <>
                  <div className="absolute inset-6 border border-[#111827]/10" />
                  <div className="absolute left-10 top-10 h-[80px] w-[80px] bg-[#F97316]" />
                  <div className="absolute right-10 top-12 h-[60px] w-[100px] bg-[#2563EB]" />
                  <div className="absolute left-1/2 top-1/2 h-[6px] w-28 -translate-x-1/2 bg-[#111827]" />
                  <div className="absolute left-1/2 top-1/2 h-28 w-[6px] -translate-y-1/2 bg-[#111827]" />
                  <div className="absolute bottom-10 left-10 h-6 w-6 bg-[#EC4899]" />
                  <div className="absolute right-10 bottom-10 bg-[#111827] px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-white">
                    Contact node
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-6 border border-zinc-200" />
                  <div className="absolute left-1/2 top-6 bottom-6 w-px -translate-x-1/2 bg-zinc-200" />
                  <div className="absolute left-6 right-6 top-1/2 h-px -translate-y-1/2 bg-zinc-200" />
                  <div className="absolute left-10 top-10 h-20 w-20 rounded-full border border-[#8FA7C4]/35" />
                  <div className="absolute right-10 top-12 h-16 w-16 border border-zinc-300" />
                  <div className="absolute bottom-10 left-10 h-2.5 w-2.5 rounded-full bg-[#8FA7C4]" />
                  <div className="absolute right-10 bottom-10 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                    Contact node
                  </div>
                </>
              )}
            </div>
          </div>

          {isOpen && (
            <ContactForm
              onClose={() => setIsOpen(false)}
              dopamineMode={dopamineMode}
            />
          )}
        </div>
      </div>
    </section>
  );
}