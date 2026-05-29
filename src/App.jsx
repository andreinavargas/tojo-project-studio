import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import Contact from './components/Contact';
import ModeToggle from './components/ModeToggle';

export default function App() {
  const [dopamineMode, setDopamineMode] = useState(false);

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-zinc-950">
      <Header dopamineMode={dopamineMode} setDopamineMode={setDopamineMode} />
      <Hero />
      <Services />
      <Approach />
      <Contact />
      <ModeToggle dopamineMode={dopamineMode} setDopamineMode={setDopamineMode} />
    </main>
  );
}