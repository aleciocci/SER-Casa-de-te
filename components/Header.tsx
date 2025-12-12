import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-tea-cream/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 border border-tea-brown rounded-full group-hover:bg-tea-brown transition-colors duration-300">
             <Coffee className="w-5 h-5 text-tea-brown group-hover:text-tea-cream transition-colors duration-300" />
          </div>
          <span className={`font-serif text-2xl font-bold tracking-wide ${isScrolled || isOpen ? 'text-tea-brown' : 'text-tea-brown lg:text-tea-dark'}`}>
            S.E.R. <span className="text-sm font-sans font-normal tracking-widest ml-1 uppercase">Casa de Té</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-sans text-sm tracking-widest font-semibold text-tea-brown hover:text-tea-gold transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-tea-brown text-tea-cream font-serif italic rounded-full hover:bg-tea-gold transition-colors duration-300 shadow-md"
          >
            Reservar Mesa
          </a>
        </nav>

        {/* Mobile Burger */}
        <button 
          className="md:hidden text-tea-brown p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-tea-cream shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen border-t border-tea-brown/10' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center py-8 gap-6">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-serif text-xl text-tea-brown hover:text-tea-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
             href="https://wa.me/1234567890" 
             className="mt-4 px-8 py-3 bg-tea-brown text-tea-cream font-serif italic rounded-full hover:bg-tea-gold transition-colors shadow-md"
             onClick={() => setIsOpen(false)}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;