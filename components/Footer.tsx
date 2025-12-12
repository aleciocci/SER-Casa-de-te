import React from 'react';
import { Coffee, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tea-dark text-tea-cream pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 border border-tea-cream rounded-full">
                <Coffee className="w-6 h-6" />
              </div>
              <span className="font-serif text-2xl font-bold">S.E.R.</span>
            </div>
            <p className="text-tea-cream/60 text-sm leading-relaxed">
              Sabores, Emociones, Recuerdos. Un santuario elegante para los amantes del té y la pastelería.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-tea-gold hover:text-tea-dark transition-colors"><Instagram className="w-5 h-5"/></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-tea-gold hover:text-tea-dark transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-tea-gold hover:text-tea-dark transition-colors"><Mail className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6">Visítanos</h4>
            <ul className="space-y-4 text-tea-cream/70 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tea-gold shrink-0" />
                <span>Av. Artesanal 123,<br/>Ciudad de México, CDMX</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-tea-gold shrink-0" />
                <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-tea-gold shrink-0" />
                <span>hola@ser-teahouse.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl mb-6">Horarios</h4>
            <ul className="space-y-2 text-tea-cream/70 text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Lunes</span>
                <span>Cerrado</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mar - Vie</span>
                <span>9:00 - 19:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sábado</span>
                <span>10:00 - 20:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Domingo</span>
                <span>10:00 - 18:00</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl mb-6">Boletín</h4>
            <p className="text-tea-cream/60 text-xs mb-4">Suscríbete para actualizaciones de temporada y eventos de cata exclusivos.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-white/5 border border-white/10 p-3 rounded text-sm focus:outline-none focus:border-tea-gold text-tea-cream placeholder:text-tea-cream/30"
              />
              <button className="bg-tea-gold text-tea-dark font-bold text-xs uppercase tracking-widest py-3 rounded hover:bg-white transition-colors">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-tea-cream/40">
          <p>&copy; 2024 S.E.R. Casa de Té. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-tea-gold transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-tea-gold transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;