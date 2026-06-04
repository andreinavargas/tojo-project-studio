import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqezkll';

export default function ContactForm({ dopamine = false }) {
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const inputClass = dopamine
    ? 'border-2 border-[#111111] bg-[#FFF3D6] px-4 py-4 text-sm font-semibold text-[#111111] outline-none placeholder:text-[#111111]/60'
    : 'rounded-lg border border-zinc-300 bg-white/70 px-5 py-4 outline-none focus:border-zinc-950';

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();
    const botField = data.get('_gotcha');

    if (botField) return;

    if (!name || name.length < 2) {
      setStatus('Please enter your name.');
      return;
    }

    if (!email || !email.includes('@')) {
      setStatus('Please enter a valid email.');
      return;
    }

    if (!message || message.length < 10) {
      setStatus('Please tell us a little more about your project.');
      return;
    }

    setStatus('');
    setIsSending(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Formspree error');
      }

      setStatus("Message sent. We'll get back to you soon.");
      form.reset();
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  }

  if (dopamine) {
    return (
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex h-full w-full flex-col justify-between"
      >
        <input
          type="text"
          name="_gotcha"
          tabIndex="-1"
          autoComplete="off"
          className="hidden"
        />

        <div>
          <div className="grid gap-5 md:grid-cols-3">
            <input name="name" className={inputClass} placeholder="Name" required />
            <input name="email" type="email" className={inputClass} placeholder="Email" required />
            <input name="company" className={inputClass} placeholder="Company" />
          </div>

          <textarea
            name="message"
            className={`${inputClass} mt-5 min-h-[220px] w-full resize-none`}
            placeholder="Tell us about your project"
            required
          />

          <input
            type="hidden"
            name="_subject"
            value="New message from Tojo Project Studio"
          />
        </div>

        <div className="mt-6 flex flex-col items-end gap-3">
          <button
            type="submit"
            disabled={isSending}
            className="ml-auto border-2 border-[#111111] bg-[#F4362F] px-14 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[6px_6px_0_#111111] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#111111] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {status && <p className="text-sm font-bold text-[#111111]">{status}</p>}
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        type="text"
        name="_gotcha"
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <input name="name" className={inputClass} placeholder="Name" required />
        <input name="email" type="email" className={inputClass} placeholder="Email" required />
        <input name="company" className={inputClass} placeholder="Company" />
      </div>

      <textarea
        name="message"
        className={`${inputClass} min-h-[180px] resize-none`}
        placeholder="Tell us about your project"
        required
      />

      <input
        type="hidden"
        name="_subject"
        value="New message from Tojo Project Studio"
      />

      <button
        type="submit"
        disabled={isSending}
        className="mt-3 inline-flex w-fit justify-center rounded-lg border border-zinc-950 bg-zinc-950 px-9 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSending ? 'Sending...' : 'Send message'}
      </button>

      {status && <p className="text-sm font-medium text-zinc-700">{status}</p>}
    </form>
  );
}