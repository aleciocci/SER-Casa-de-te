export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'pastry' | 'tea' | 'savory';
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface CateringPackage {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  size: 'small' | 'large' | 'tall' | 'wide';
}
