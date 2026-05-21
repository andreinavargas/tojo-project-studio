import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ModeToggle from './components/ModeToggle';

export default function App() {
  const [dopamineMode, setDopamineMode] = useState(false);

  return (
    <main
      className={
        dopamineMode
          ? 'min-h-screen bg-[#FFFBF3] text-zinc-900 selection:bg-zinc-900 selection:text-white transition-colors duration-700'
          : 'min-h-screen bg-stone-50 text-zinc-900 selection:bg-zinc-900 selection:text-white transition-colors duration-700'
      }
    >
      <Header dopamineMode={dopamineMode} />
      <Hero dopamineMode={dopamineMode} />
      <Services dopamineMode={dopamineMode} />
      <Capabilities dopamineMode={dopamineMode} />
      <Approach dopamineMode={dopamineMode} />
      <Contact dopamineMode={dopamineMode} />
      <Footer dopamineMode={dopamineMode} />
      <ModeToggle dopamineMode={dopamineMode} setDopamineMode={setDopamineMode} />
    </main>
  );
}