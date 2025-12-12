import { MenuItem, FaqItem, CateringPackage, GalleryImage } from './types';

export const NAV_LINKS = [
  { name: 'Nosotros', href: '#about' },
  { name: 'Menú', href: '#menu' },
  { name: 'Reservas', href: '#reservations' },
  { name: 'Catering', href: '#catering' },
  { name: 'Galería', href: '#gallery' },
  { name: 'Preguntas', href: '#faq' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Pastel de Earl Grey y Lavanda",
    description: "Capas de bizcocho infundido con Earl Grey y crema de mantequilla de lavanda.",
    price: "$8.50",
    category: "pastry",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Scones de la Casa",
    description: "Scones tibios y mantecosos servidos con clotted cream y mermelada de fresa casera.",
    price: "$6.00",
    category: "pastry",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Sándwich de Salmón Ahumado",
    description: "Pepino, queso crema con eneldo y salmón ahumado en pan de centeno.",
    price: "$12.00",
    category: "savory",
    image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Mezcla Real Dorada",
    description: "Nuestra exclusiva mezcla de té negro con notas de caramelo y hoja de oro.",
    price: "$5.50",
    category: "tea",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    name: "Tarta de Limón y Merengue",
    description: "Cuajada de limón cítrico cubierta con merengue italiano perfectamente tostado.",
    price: "$7.50",
    category: "pastry",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    name: "Matcha Latte",
    description: "Matcha de grado ceremonial batido con leche de avena y miel.",
    price: "$6.50",
    category: "tea",
    image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=400&q=80"
  }
];

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 1,
    name: "Fiesta de Té Petit",
    price: "$25 / persona",
    description: "Perfecto para reuniones íntimas y pequeñas celebraciones.",
    features: ["Selección de 2 Tés", "Mini Scones y Mermelada", "3 Pasteles Surtidos", "Sándwiches de Dedo"]
  },
  {
    id: 2,
    name: "Celebración Real",
    price: "$45 / persona",
    description: "Nuestra experiencia completa de té para ocasiones especiales.",
    features: ["Selección de Té Premium", "Copa de Vino Espumoso", "Nivel Salado Completo", "Selección de Pastelería de Lujo", "Servicio Privado"]
  },
  {
    id: 3,
    name: "Boda en el Jardín",
    price: "Cotización",
    description: "Catering elegante completo para bodas y grandes eventos.",
    features: ["Servicio de Personal Completo", "Diseño de Menú Personalizado", "Alquiler de Equipo", "Servicio de Corte de Pastel", "Torre de Champán"]
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "¿Necesito reserva?",
    answer: "Se recomienda reservar, especialmente los fines de semana. Aceptamos visitas sin reserva según disponibilidad, pero no se garantiza mesa."
  },
  {
    id: 2,
    question: "¿Tienen opciones sin gluten o veganas?",
    answer: "¡Sí! Tenemos una selección dedicada de pasteles sin gluten y delicias veganas. Informe a su mesero sobre cualquier restricción dietética."
  },
  {
    id: 3,
    question: "¿Puedo llevar mi propia decoración?",
    answer: "Las decoraciones pequeñas de mesa son bienvenidas. Para instalaciones más grandes, contacte a nuestro equipo de eventos con al menos 48 horas de antelación."
  },
  {
    id: 4,
    question: "¿Es accesible para sillas de ruedas?",
    answer: "Sí, nuestro salón principal de té y los baños son totalmente accesibles."
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80", alt: "Interior", size: "tall" },
  { id: 2, src: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80", alt: "Sirviendo Té", size: "wide" },
  { id: 3, src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80", alt: "Macaroons", size: "small" },
  { id: 4, src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80", alt: "Juego de Té", size: "small" },
  { id: 5, src: "https://images.unsplash.com/photo-1563114773-88405e36506d?auto=format&fit=crop&w=600&q=80", alt: "Rebanada de Pastel", size: "tall" },
  { id: 6, src: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80", alt: "Amigos", size: "wide" },
];