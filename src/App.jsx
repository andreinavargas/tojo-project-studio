import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
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
          ? 'min-h-screen bg-[#FFF3D6] text-[#111111] transition-colors duration-700'
          : 'min-h-screen bg-[#fbfaf7] text-zinc-950 transition-colors duration-700'
      }
    >
      <Header dopamineMode={dopamineMode} setDopamineMode={setDopamineMode} />
      <Hero dopamineMode={dopamineMode} />
      <Services dopamineMode={dopamineMode} />
      <Approach dopamineMode={dopamineMode} />
      <Contact dopamineMode={dopamineMode} />
      <Footer dopamineMode={dopamineMode} />

      <ModeToggle
        dopamineMode={dopamineMode}
        setDopamineMode={setDopamineMode}
      />
    </main>
  );
}