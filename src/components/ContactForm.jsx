import { useState } from 'react';

export default function ContactForm({ onClose, dopamineMode }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const mailtoHref = `mailto:hola@tojoprojectstudio.com?subject=${encodeURIComponent(
    `Nuevo contacto de ${form.name || 'web Tojo'}`
  )}&body=${encodeURIComponent(
    `Nombre: ${form.name}\nEmail: ${form.email}\nEmpresa: ${form.company}\n\nMensaje:\n${form.message}`
  )}`;

  return (
    <div
      className={
        dopamineMode
          ? 'relative mt-10 overflow-hidden rounded-[1.75rem] border border-[#111827] bg-white/90 p-6 shadow-[0_18px_50px_rgba(17,24,39,0.06)] md:p-8'
          : 'relative mt-10 rounded-[1.75rem] border border-zinc-200 bg-stone-50/90 p-6 md:p-8'
      }
    >
      {dopamineMode ? (
        <>
          <div className="absolute left-0 top-0 h-3 w-24 bg-[#F97316]" />
          <div className="absolute right-0 bottom-0 h-3 w-20 bg-[#EC4899]" />
        </>
      ) : null}

      <div className="mb-8 flex items-center justify-between">
        <p
          className={
            dopamineMode
              ? 'inline-block bg-[#111827] px-3 py-2 text-[11px] uppercase tracking-[0.34em] text-white'
              : 'text-[11px] uppercase tracking-[0.38em] text-zinc-500'
          }
        >
          Formulario
        </p>

        <button
          type="button"
          onClick={onClose}
          className={
            dopamineMode
              ? 'text-sm text-zinc-700 hover:text-zinc-900'
              : 'text-sm text-zinc-500 hover:text-zinc-900'
          }
        >
          Cerrar ✕
        </button>
      </div>

      <form className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-zinc-700">Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={
              dopamineMode
                ? 'w-full rounded-2xl border border-[#111827]/15 bg-[#FFFBF3] px-4 py-3 text-zinc-900 outline-none transition focus:border-[#2563EB]'
                : 'w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-zinc-500'
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className={
              dopamineMode
                ? 'w-full rounded-2xl border border-[#111827]/15 bg-[#FFFBF3] px-4 py-3 text-zinc-900 outline-none transition focus:border-[#EC4899]'
                : 'w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-zinc-500'
            }
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm text-zinc-700">Empresa o proyecto</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Nombre de tu proyecto"
            className={
              dopamineMode
                ? 'w-full rounded-2xl border border-[#111827]/15 bg-[#FFFBF3] px-4 py-3 text-zinc-900 outline-none transition focus:border-[#F97316]'
                : 'w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-zinc-500'
            }
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm text-zinc-700">Mensaje</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="6"
            placeholder="Cuéntanos qué necesitas"
            className={
              dopamineMode
                ? 'w-full rounded-2xl border border-[#111827]/15 bg-[#FFFBF3] px-4 py-3 text-zinc-900 outline-none transition focus:border-[#14B8A6]'
                : 'w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-zinc-500'
            }
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row">
          <a
            href={mailtoHref}
            className={
              dopamineMode
                ? 'inline-flex items-center justify-center rounded-2xl border border-[#111827] bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px]'
                : 'inline-flex items-center justify-center rounded-2xl border border-zinc-900 bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px]'
            }
          >
            Enviar
          </a>

          <button
            type="button"
            onClick={onClose}
            className={
              dopamineMode
                ? 'inline-flex items-center justify-center rounded-2xl border border-[#111827]/20 bg-[#FFFBF3] px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-[#111827]'
                : 'inline-flex items-center justify-center rounded-2xl border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-400'
            }
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}