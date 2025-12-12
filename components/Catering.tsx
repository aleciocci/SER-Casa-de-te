import React, { useState } from 'react';
import { CATERING_PACKAGES } from '../constants';
import { CateringPackage } from '../types';
import { Check, Send, AlertCircle } from 'lucide-react';

const Catering: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    package: 'Fiesta de Té Petit',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "El nombre es obligatorio";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Correo válido requerido";
    if (!formData.date) newErrors.date = "Fecha requerida";
    if (!formData.guests || isNaN(Number(formData.guests))) newErrors.guests = "Número de invitados válido requerido";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', date: '', guests: '', package: 'Fiesta de Té Petit', message: '' });
        setErrors({});
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="catering" className="py-24 bg-tea-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-tea-gold font-sans uppercase tracking-widest text-sm font-bold">Eventos</span>
          <h2 className="font-serif text-4xl md:text-5xl text-tea-dark mt-2 mb-4">Catering y Eventos Privados</h2>
          <p className="text-tea-brown/80 font-sans">Traiga la elegancia de S.E.R. a su próxima reunión. Elija entre nuestros paquetes curados a continuación.</p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {CATERING_PACKAGES.map((pkg: CateringPackage, index) => (
            <div key={pkg.id} className={`bg-white p-8 rounded-2xl shadow-sm border-t-4 ${index === 1 ? 'border-tea-gold relative transform md:-translate-y-4 shadow-xl' : 'border-tea-brown/20'}`}>
              {index === 1 && <span className="absolute top-0 right-0 bg-tea-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</span>}
              <h3 className="font-serif text-2xl font-bold text-tea-dark mb-2">{pkg.name}</h3>
              <p className="text-tea-gold font-bold text-lg mb-4">{pkg.price}</p>
              <p className="text-sm text-tea-brown/70 mb-6 min-h-[40px]">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-tea-brown">
                    <Check className="w-4 h-4 text-tea-green" /> {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setFormData({...formData, package: pkg.name})}
                className={`w-full py-3 font-bold uppercase text-xs tracking-widest transition-colors rounded-lg ${
                  formData.package === pkg.name ? 'bg-tea-brown text-white' : 'border border-tea-brown text-tea-brown hover:bg-tea-brown/5'
                }`}
              >
                Seleccionar Paquete
              </button>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-tea-brown via-tea-gold to-tea-brown"></div>
           
           <div className="grid md:grid-cols-2 gap-12">
             <div className="space-y-6">
                <h3 className="font-serif text-3xl text-tea-dark">Solicitar Cotización</h3>
                <p className="text-tea-brown/70 text-sm leading-relaxed">
                  Complete el formulario y nuestro coordinador de eventos se pondrá en contacto con usted dentro de las 24 horas para discutir los detalles de su día especial.
                </p>
                <div className="hidden md:block">
                   <img src="https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&w=400&q=80" alt="Detalle de Catering" className="rounded-xl shadow-md" />
                </div>
             </div>

             <form onSubmit={handleSubmit} className="space-y-4">
                {isSuccess && (
                  <div className="bg-green-50 text-green-800 p-4 rounded-lg flex items-center gap-3 mb-4">
                    <Check className="w-5 h-5" />
                    <span className="font-bold">¡Solicitud enviada con éxito!</span>
                  </div>
                )}
                
                <div>
                  <label className="block text-xs font-bold text-tea-brown uppercase tracking-wider mb-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full p-3 bg-tea-cream/20 border rounded-lg focus:outline-none focus:ring-1 focus:ring-tea-gold transition-colors ${errors.name ? 'border-red-400' : 'border-tea-brown/20'}`}
                    placeholder="María Pérez"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.name}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-tea-brown uppercase tracking-wider mb-1">Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full p-3 bg-tea-cream/20 border rounded-lg focus:outline-none focus:ring-1 focus:ring-tea-gold transition-colors ${errors.email ? 'border-red-400' : 'border-tea-brown/20'}`}
                      placeholder="email@ejemplo.com"
                    />
                     {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-tea-brown uppercase tracking-wider mb-1">Teléfono</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3 bg-tea-cream/20 border border-tea-brown/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-tea-gold transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-tea-brown uppercase tracking-wider mb-1">Fecha del Evento</label>
                    <input 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className={`w-full p-3 bg-tea-cream/20 border rounded-lg focus:outline-none focus:ring-1 focus:ring-tea-gold transition-colors ${errors.date ? 'border-red-400' : 'border-tea-brown/20'}`}
                    />
                     {errors.date && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.date}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-tea-brown uppercase tracking-wider mb-1">Invitados</label>
                    <input 
                      type="number" 
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      className={`w-full p-3 bg-tea-cream/20 border rounded-lg focus:outline-none focus:ring-1 focus:ring-tea-gold transition-colors ${errors.guests ? 'border-red-400' : 'border-tea-brown/20'}`}
                      placeholder="20"
                    />
                     {errors.guests && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.guests}</p>}
                  </div>
                </div>

                <div>
                   <label className="block text-xs font-bold text-tea-brown uppercase tracking-wider mb-1">Paquete Seleccionado</label>
                   <div className="w-full p-3 bg-tea-gold/10 border border-tea-gold/30 rounded-lg text-tea-dark font-serif font-bold">
                     {formData.package}
                   </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-tea-brown uppercase tracking-wider mb-1">Notas Adicionales</label>
                  <textarea 
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3 bg-tea-cream/20 border border-tea-brown/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-tea-gold transition-colors"
                    placeholder="Restricciones dietéticas, colores temáticos, etc."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-tea-brown text-white font-serif italic text-lg rounded-lg hover:bg-tea-dark transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>
             </form>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Catering;