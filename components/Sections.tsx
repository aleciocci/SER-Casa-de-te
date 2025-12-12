import React, { useState } from 'react';
import { MENU_ITEMS, FAQS, GALLERY_IMAGES } from '../constants';
import { Star, Clock, Heart, Calendar, ChevronDown, ChevronUp, Users, CheckCircle } from 'lucide-react';
import { MenuItem, FaqItem, GalleryImage } from '../types';

// --- About Section ---
export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-tea-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1587241321921-91a834d6d191?auto=format&fit=crop&w=400&q=80" alt="Pastelero" className="w-full h-64 object-cover rounded-t-full mt-12 shadow-lg" />
             <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80" alt="Interior" className="w-full h-64 object-cover rounded-b-full shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-tea-dark">Nuestra Historia y <br/> <span className="text-tea-gold italic">Filosofía</span></h2>
            <p className="text-tea-brown/80 leading-relaxed font-sans text-lg">
              S.E.R. significa Sabores, Emociones, Recuerdos. Fundado con pasión por el arte lento del té, traemos un toque de elegancia británica a su rutina diaria. Cada pastel se hornea fresco, cada hoja de té se selecciona con cuidado.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {[
                { icon: Star, title: "Artesanal", desc: "Hecho a mano diariamente con ingredientes premium" },
                { icon: Clock, title: "Vida Lenta", desc: "Un espacio diseñado para pausar el tiempo" },
                { icon: Heart, title: "Pasión", desc: "Hecho con amor en cada bocado" },
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-tea-brown/10 rounded-full text-tea-brown">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm text-tea-brown/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Menu Section ---
export const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-tea-gold font-sans uppercase tracking-widest text-sm font-bold">Delicias</span>
          <h2 className="font-serif text-4xl md:text-5xl text-tea-dark mt-2">Destacados del Menú</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item: MenuItem) => (
            <div key={item.id} className="group bg-tea-cream/30 hover:bg-tea-cream transition-colors duration-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-tea-brown/5">
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-xl font-bold text-tea-dark">{item.name}</h3>
                  <span className="font-sans font-bold text-tea-gold">{item.price}</span>
                </div>
                <p className="text-tea-brown/70 text-sm mb-4">{item.description}</p>
                <span className="text-xs font-bold uppercase tracking-wider text-tea-brown/50 border border-tea-brown/20 px-2 py-1 rounded-sm">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-block border-b border-tea-brown text-tea-brown hover:text-tea-gold transition-colors pb-1 font-serif italic text-lg">Ver Menú Completo PDF</a>
        </div>
      </div>
    </section>
  );
};

// --- Reservations Section ---
export const Reservations: React.FC = () => {
  return (
    <section id="reservations" className="py-24 bg-tea-brown text-tea-cream relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="font-serif text-4xl md:text-6xl text-white">Reserva Tu <br/><span className="italic text-tea-gold">Experiencia</span></h2>
            <p className="text-tea-cream/80 text-lg font-sans">
              Ya sea una cita romántica, una reunión amistosa o un momento de paz solitario, tenemos la mesa perfecta para ti.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-tea-gold/20 rounded-full shrink-0"><Calendar className="w-5 h-5 text-tea-gold" /></div>
                <div>
                  <h4 className="font-serif text-xl font-bold mb-1">1. Seleccionar Fecha y Hora</h4>
                  <p className="text-sm text-tea-cream/60">Abrimos de Mar-Dom, 9am - 7pm.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-tea-gold/20 rounded-full shrink-0"><Users className="w-5 h-5 text-tea-gold" /></div>
                <div>
                  <h4 className="font-serif text-xl font-bold mb-1">2. Elegir Tamaño del Grupo</h4>
                  <p className="text-sm text-tea-cream/60">Para grupos de más de 8, use nuestro formulario de catering.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-tea-gold/20 rounded-full shrink-0"><CheckCircle className="w-5 h-5 text-tea-gold" /></div>
                <div>
                  <h4 className="font-serif text-xl font-bold mb-1">3. Confirmación y Ubicación</h4>
                  <p className="text-sm text-tea-cream/60">Reciba la confirmación y nuestra dirección secreta por WhatsApp.</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/1234567890" className="inline-block mt-8 bg-tea-gold text-tea-dark font-bold font-sans uppercase tracking-widest px-10 py-4 hover:bg-white transition-colors duration-300">
              Reservar por WhatsApp
            </a>
          </div>

          <div className="w-full lg:w-1/2 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            {/* Visual Representation of a Calendar/Form (Static Mockup) */}
            <div className="bg-white rounded-lg p-6 shadow-2xl text-tea-brown">
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <span className="font-serif font-bold text-xl">Octubre 2024</span>
                <div className="flex gap-2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">{'<'}</span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">{'>'}</span>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-sm font-sans mb-2 font-bold text-gray-400">
                <span>Do</span><span>Lu</span><span>Ma</span><span>Mi</span><span>Ju</span><span>Vi</span><span>Sa</span>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center font-sans">
                 {[...Array(31)].map((_, i) => (
                   <div key={i} className={`p-2 rounded-full cursor-pointer hover:bg-tea-cream ${i === 14 ? 'bg-tea-brown text-white hover:bg-tea-brown' : ''}`}>
                     {i + 1}
                   </div>
                 ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Horarios Disponibles</p>
                <div className="flex flex-wrap gap-2">
                  {['10:00 AM', '1:00 PM', '3:30 PM', '5:00 PM'].map(time => (
                    <span key={time} className="px-3 py-1 border border-tea-brown/20 rounded-full text-xs font-semibold cursor-pointer hover:bg-tea-brown hover:text-white transition-colors">
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- FAQ Section ---
export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-tea-cream/50">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-serif text-4xl text-tea-dark text-center mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {FAQS.map((faq: FaqItem, index: number) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-tea-brown/5">
              <button 
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-tea-cream/30 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-serif font-semibold text-lg text-tea-dark">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-tea-gold" /> : <ChevronDown className="w-5 h-5 text-tea-gold" />}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-tea-brown/80 font-sans leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Gallery Section ---
export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-tea-gold font-sans uppercase tracking-widest text-sm font-bold">Atmósfera</span>
            <h2 className="font-serif text-4xl text-tea-dark">Un Viaje Visual</h2>
          </div>
          <a href="https://instagram.com" className="text-tea-brown font-serif italic border-b border-tea-brown hover:text-tea-gold transition-colors">Síguenos @ser.casadete</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
           {GALLERY_IMAGES.map((img: GalleryImage, i) => (
             <div 
               key={img.id} 
               className={`relative group overflow-hidden rounded-lg shadow-sm ${
                 img.size === 'tall' ? 'row-span-2' : 
                 img.size === 'wide' ? 'col-span-2' : 
                 img.size === 'large' ? 'col-span-2 row-span-2' : ''
               }`}
             >
               <img 
                 src={img.src} 
                 alt={img.alt} 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-serif italic text-xl">{img.alt}</span>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};