import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-tea-cream bg-paper-texture opacity-50 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-8 animate-fade-in-up">
          <div className="inline-block border-b-2 border-tea-gold pb-1">
             <span className="font-sans text-tea-brown uppercase tracking-[0.3em] text-sm font-semibold">Est. 2024</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-tea-dark leading-[0.9]">
            Saborea el <br/>
            <span className="italic text-tea-gold pr-2">Momento</span>
            <br/>
            Disfruta la Vida.
          </h1>
          
          <p className="font-sans text-tea-brown/80 text-lg md:text-xl max-w-md leading-relaxed">
            Experimenta la armonía de tés artesanales y pastelería británica hecha a mano en un ambiente cálido y romántico diseñado para tu alma.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#menu" 
              className="group px-8 py-4 bg-tea-brown text-tea-cream font-serif italic text-lg rounded-none hover:bg-tea-dark transition-all duration-300 flex items-center justify-center gap-2"
            >
              Ver Menú
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#reservations" 
              className="px-8 py-4 border border-tea-brown text-tea-brown font-sans uppercase tracking-widest text-xs font-bold rounded-none hover:bg-tea-brown hover:text-tea-cream transition-all duration-300 flex items-center justify-center"
            >
              Reservar Mesa
            </a>
          </div>
        </div>

        {/* Hero Image Composition */}
        <div className="order-1 md:order-2 relative h-[50vh] md:h-[80vh] w-full">
           <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-[#EAE0D5] rounded-tl-[100px] rounded-br-[40px] -z-10 transform translate-x-4 -translate-y-4"></div>
           <img 
            src="https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=800&q=80" 
            alt="Artisanal Pastry" 
            className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[40px] shadow-2xl"
           />
           
           {/* Floating Badge */}
           <div className="absolute bottom-10 -left-6 md:left-10 bg-tea-cream p-6 shadow-xl max-w-[220px] hidden sm:block">
              <p className="font-serif text-2xl text-tea-brown italic leading-tight">"Mejor Casa de Té 2024"</p>
              <p className="font-sans text-xs text-tea-brown/60 mt-2 uppercase tracking-wide">— Guía de la Ciudad</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;