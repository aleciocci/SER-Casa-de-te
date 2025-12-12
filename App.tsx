import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { About, MenuSection, Reservations, FaqSection, Gallery } from './components/Sections';
import Catering from './components/Catering';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-tea-cream selection:bg-tea-brown selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Reservations />
        <Catering />
        <Gallery />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
