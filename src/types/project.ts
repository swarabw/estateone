export interface Project {
  // Project Information
  name: string;
  builder: string;
  location: string;
  tagline: string;
  rera: string;
  possession: string;

  // Contact
  phone: string;
  alternatePhone: string;
  email: string;
  whatsapp: string;

  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroPrice: string;
  ctaPrimary: string;
  ctaSecondary: string;

  // Configurations
  configurations: {
    type: string;
    carpet: string;
    price: string;
  }[];

  // Highlights
  highlights: string[];

  // Amenities
  amenities: string[];
}