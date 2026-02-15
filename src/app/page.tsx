'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import {
  Globe,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Square,
  Waves,
  Home,
  Building2,
  TreePine,
  Wine,
  Dumbbell,
  Film,
  Sparkles,
  Shield,
  Thermometer,
  Lock,
  Volume2,
  Wind,
  TrendingUp,
  BarChart3,
  PieChart,
  MapPinned,
  Anchor,
  Compass,
  CheckCircle2,
  ArrowRight,
  Menu,
  ExternalLink
} from 'lucide-react';

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  es: {
    nav: {
      investment: 'Inversión',
      features: 'Características',
      gallery: 'Galería',
      residences: 'Residencias',
      location: 'Ubicación',
      faqs: 'FAQ',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Edición Limitada',
      title: 'La Cúspide del',
      titleAccent: 'Mediterráneo',
      subtitle: 'Una colección exclusiva de residencias de lujo en Port d\'Andratx, Mallorca. Donde la sofisticación encuentra el mar.',
      cta: 'Descubrir Residencias',
      ctaSecondary: 'Solicitar Información',
      scrollText: 'Descubrir más',
    },
    investment: {
      badge: 'Oportunidad de Inversión',
      title: 'El Dashboard del',
      titleAccent: 'Inversor',
      subtitle: 'Datos de mercado y proyecciones que demuestran el excepcional potencial de inversión en Port d\'Andratx.',
      capitalAppreciation: 'Apreciación de Capital',
      capitalAppreciationDesc: 'Proyección de crecimiento a 5 años',
      rentalYield: 'Rentabilidad del Alquiler',
      rentalYieldDesc: 'Rendimiento neto anual comparado',
      marketBenchmark: 'Comparativa de Mercado',
      marketBenchmarkDesc: 'Precio por m² en el Mediterráneo',
      years: 'Años',
      percentGrowth: '+28%',
      growth: 'Crecimiento',
      longTerm: 'Largo Plazo',
      seasonal: 'Temporal',
      netYield: 'Rendimiento Neto',
      price: 'Precio',
      locations: {
        andratx: 'Port d\'Andratx',
        ibiza: 'Ibiza',
        marbella: 'Marbella',
        stTropez: 'Saint-Tropez',
      },
    },
    features: {
      badge: 'Amenidades Exclusivas',
      title: 'Diseñado para la',
      titleAccent: 'Excelencia',
      subtitle: 'Cada detalle ha sido meticulosamente seleccionado para ofrecer una experiencia de vida sin igual.',
      categories: {
        smart: 'Domótica Inteligente',
        wellness: 'Bienestar & Ocio',
        security: 'Seguridad Premium',
      },
      smartHome: {
        title: 'KNX Home Automation',
        desc: 'Sistema de domótica de primer nivel que controla iluminación, clima, persianas y multimedia desde cualquier dispositivo.',
      },
      infinityPool: {
        title: 'Piscina Infinita en Azotea',
        desc: 'Piscina de borde infinito con vistas panorámicas al mar Mediterráneo y puesta de sol.',
      },
      spa: {
        title: 'Spa & Wellness Privado',
        desc: 'Sauna finlandesa, baño turco y zona de relajación con vistas al mar.',
      },
      wineCellar: {
        title: 'Bodega Climatizada',
        desc: 'Espacio de almacenamiento y cata para su colección de vinos Premium.',
      },
      gym: {
        title: 'Gimnasio Equipado',
        desc: 'Equipamiento Technogym con vistas al mar y conexión a aplicaciones de fitness.',
      },
      cinema: {
        title: 'Cine Privado',
        desc: 'Sala de proyección con sistema Dolby Atmos y capacidad para 8 personas.',
      },
      security24: {
        title: 'Seguridad 24/7',
        desc: 'Vigilancia continua, control de acceso biométrico y sistema de videovigilancia.',
      },
      smartClimate: {
        title: 'Climatización Inteligente',
        desc: 'Sistema de climatización por zonas con control individual y eficiencia energética.',
      },
      smartLock: {
        title: 'Cerraduras Inteligentes',
        desc: 'Acceso sin llaves mediante código, tarjeta o aplicación móvil.',
      },
      audioSystem: {
        title: 'Audio Multi-zona',
        desc: 'Sistema de sonido integrado Sonos con control por habitaciones.',
      },
      airPurification: {
        title: 'Purificación de Aire',
        desc: 'Sistema de filtración HEPA para aire puro en todas las estancias.',
      },
    },
    gallery: {
      badge: 'Galería Visual',
      title: 'Descubra la',
      titleAccent: 'Experiencia',
      subtitle: 'Imágenes que capturan la esencia del lujo mediterráneo.',
      categories: {
        all: 'Todas',
        interiors: 'Interiores',
        exteriors: 'Exteriores',
        lifestyle: 'Lifestyle',
        details: 'Detalles',
      },
    },
    residences: {
      badge: 'Nuestras Residencias',
      title: 'Seleccione su',
      titleAccent: 'Hogar',
      subtitle: 'Una colección limitada de residencias diseñadas para los más exigentes.',
      floor: 'Planta',
      sqm: 'm²',
      from: 'Desde',
      bedrooms: 'Dormitorios',
      bathrooms: 'Baños',
      terrace: 'Terraza',
      seaView: 'Vista al Mar',
      mountainView: 'Vista a la Montaña',
      privatePool: 'Piscina Privada',
      solarium: 'Solarium',
      parking: 'Parking',
      storage: 'Trastero',
      requestInfo: 'Solicitar Información',
      units: {
        penthouse: {
          name: 'Penthouse Azure',
          desc: 'La residencia insignia con terraza panorámica y piscina privada.',
        },
        garden: {
          name: 'Garden Villa',
          desc: 'Villa con jardín privado y acceso directo a la zona de piscina.',
        },
        seaView: {
          name: 'Sea View Residence',
          desc: 'Vistas despejadas al Mediterráneo desde todas las estancias.',
        },
        family: {
          name: 'Family Suite',
          desc: 'Diseñada para familias, con espacios amplios y funcionales.',
        },
      },
    },
    location: {
      badge: 'Ubicación Privilegiada',
      title: 'Port d\'Andratx,',
      titleAccent: 'Mallorca',
      subtitle: 'Uno de los puertos más exclusivos del Mediterráneo, donde converge la naturaleza virgen con el lujo refinado.',
      highlights: {
        marina: 'Club de Vela',
        marinaDesc: 'Puerto deportivo con 500 amarres',
        restaurants: 'Gastronomía Michelin',
        restaurantsDesc: '5 restaurantes con estrella Michelin a 15 min',
        beach: 'Calas Prístinas',
        beachDesc: 'Playas vírgenes a 5 minutos en barco',
        golf: 'Campos de Golf',
        golfDesc: '3 campos de golf championship cercanos',
        airport: 'Aeropuerto',
        airportDesc: '30 minutos al Aeropuerto de Palma',
      },
    },
    faqs: {
      badge: 'Preguntas Frecuentes',
      title: 'Resolvemos sus',
      titleAccent: 'Dudas',
      subtitle: 'Información esencial para inversores internacionales.',
      q1: '¿Cuál es el proceso de compra para extranjeros?',
      a1: 'Los compradores extranjeros pueden adquirir propiedades en España sin restricciones. El proceso requiere NIE (Número de Identificación de Extranjero), cuenta bancaria española y se realiza ante notario. Nuestro equipo legal facilita todo el proceso en su idioma.',
      q2: '¿Qué impuestos aplican a la compra?',
      a2: 'Para compradores de la UE: ITP (Impuesto de Transmisiones Patrimoniales) del 8-10%. Para no residentes de la UE: IVA del 10% más AJD del 1.5%. Ofrecemos asesoramiento fiscal personalizado para optimizar la estructura de compra.',
      q3: '¿Puedo obtener residencia española?',
      a3: 'Sí, inversiones superiores a €500,000 cualifican para el Visado de Inversor (Golden Visa), permitiendo residencia en España y libre circulación por el espacio Schengen.',
      q4: '¿Existe servicio de gestión de alquiler?',
      a4: 'Ofrecemos un servicio completo de property management que incluye marketing, reservas, mantenimiento y limpieza. Esto permite maximizar la rentabilidad sin complicaciones para el propietario.',
      q5: '¿Cuál es la política de garantía?',
      a5: 'Todas las residencias incluyen garantía decenal estructural, garantía bienal de instalaciones y garantía anual de acabados. Además, ofrecemos contrato de mantenimiento preventivo opcional.',
    },
    contact: {
      badge: 'Contacto Exclusivo',
      title: 'Solicite su',
      titleAccent: 'Consulta Privada',
      subtitle: 'Nuestro equipo de asesores le atenderá con la máxima discreción y profesionalidad.',
      form: {
        name: 'Nombre completo',
        namePlaceholder: 'Su nombre',
        email: 'Correo electrónico',
        emailPlaceholder: 'su@email.com',
        phone: 'Teléfono',
        phonePlaceholder: '+34 XXX XXX XXX',
        budget: 'Presupuesto de inversión',
        interest: 'Interés principal',
        interests: {
          investment: 'Inversión',
          residence: 'Residencia habitual',
          vacation: 'Segunda residencia',
        },
        message: 'Mensaje (opcional)',
        messagePlaceholder: 'Cuéntenos sobre sus necesidades...',
        submit: 'Enviar Solicitud',
        submitting: 'Enviando...',
        success: '¡Solicitud enviada!',
        successMessage: 'Nos pondremos en contacto en menos de 24 horas.',
      },
      privacy: 'Sus datos están protegidos según RGPD. Solo serán utilizados para esta consulta.',
    },
    footer: {
      tagline: 'El cenit del vivir mediterráneo.',
      address: 'Passeig de la Pau, 42',
      city: 'Port d\'Andratx, Mallorca',
      postcode: '07157',
      spain: 'España',
      phone: '+34 971 234 567',
      email: 'residencias@anclora-estates.com',
      rights: '© 2024 Anclora Private Estates. Todos los derechos reservados.',
      legal: 'Aviso Legal',
      privacy: 'Privacidad',
      cookies: 'Cookies',
    },
  },
  en: {
    nav: {
      investment: 'Investment',
      features: 'Features',
      gallery: 'Gallery',
      residences: 'Residences',
      location: 'Location',
      faqs: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      badge: 'Limited Edition',
      title: 'The Zenith of',
      titleAccent: 'Mediterranean Living',
      subtitle: 'An exclusive collection of luxury residences in Port d\'Andratx, Mallorca. Where sophistication meets the sea.',
      cta: 'Discover Residences',
      ctaSecondary: 'Request Information',
      scrollText: 'Discover more',
    },
    investment: {
      badge: 'Investment Opportunity',
      title: 'The Investor\'s',
      titleAccent: 'Dashboard',
      subtitle: 'Market data and projections demonstrating the exceptional investment potential in Port d\'Andratx.',
      capitalAppreciation: 'Capital Appreciation',
      capitalAppreciationDesc: '5-year growth projection',
      rentalYield: 'Rental Yield',
      rentalYieldDesc: 'Annual net return comparison',
      marketBenchmark: 'Market Benchmark',
      marketBenchmarkDesc: 'Price per m² across Mediterranean',
      years: 'Years',
      percentGrowth: '+28%',
      growth: 'Growth',
      longTerm: 'Long-term',
      seasonal: 'Seasonal',
      netYield: 'Net Yield',
      price: 'Price',
      locations: {
        andratx: 'Port d\'Andratx',
        ibiza: 'Ibiza',
        marbella: 'Marbella',
        stTropez: 'Saint-Tropez',
      },
    },
    features: {
      badge: 'Exclusive Amenities',
      title: 'Designed for',
      titleAccent: 'Excellence',
      subtitle: 'Every detail has been meticulously selected to offer an unparalleled living experience.',
      categories: {
        smart: 'Smart Home',
        wellness: 'Wellness & Leisure',
        security: 'Premium Security',
      },
      smartHome: {
        title: 'KNX Home Automation',
        desc: 'Top-tier home automation system controlling lighting, climate, blinds, and multimedia from any device.',
      },
      infinityPool: {
        title: 'Rooftop Infinity Pool',
        desc: 'Infinity pool with panoramic views of the Mediterranean Sea and sunset.',
      },
      spa: {
        title: 'Private Spa & Wellness',
        desc: 'Finnish sauna, Turkish bath, and relaxation area with sea views.',
      },
      wineCellar: {
        title: 'Climate-Controlled Wine Cellar',
        desc: 'Storage and tasting space for your premium wine collection.',
      },
      gym: {
        title: 'Equipped Gym',
        desc: 'Technogym equipment with sea views and fitness app connectivity.',
      },
      cinema: {
        title: 'Private Cinema',
        desc: 'Projection room with Dolby Atmos system and 8-person capacity.',
      },
      security24: {
        title: '24/7 Security',
        desc: 'Continuous surveillance, biometric access control, and video monitoring.',
      },
      smartClimate: {
        title: 'Smart Climate Control',
        desc: 'Zone-based climate system with individual control and energy efficiency.',
      },
      smartLock: {
        title: 'Smart Locks',
        desc: 'Keyless access via code, card, or mobile application.',
      },
      audioSystem: {
        title: 'Multi-zone Audio',
        desc: 'Integrated Sonos sound system with room-by-room control.',
      },
      airPurification: {
        title: 'Air Purification',
        desc: 'HEPA filtration system for pure air in all rooms.',
      },
    },
    gallery: {
      badge: 'Visual Gallery',
      title: 'Discover the',
      titleAccent: 'Experience',
      subtitle: 'Images capturing the essence of Mediterranean luxury.',
      categories: {
        all: 'All',
        interiors: 'Interiors',
        exteriors: 'Exteriors',
        lifestyle: 'Lifestyle',
        details: 'Details',
      },
    },
    residences: {
      badge: 'Our Residences',
      title: 'Select Your',
      titleAccent: 'Home',
      subtitle: 'A limited collection of residences designed for the most discerning.',
      floor: 'Floor',
      sqm: 'sqm',
      from: 'From',
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
      terrace: 'Terrace',
      seaView: 'Sea View',
      mountainView: 'Mountain View',
      privatePool: 'Private Pool',
      solarium: 'Solarium',
      parking: 'Parking',
      storage: 'Storage',
      requestInfo: 'Request Information',
      units: {
        penthouse: {
          name: 'Penthouse Azure',
          desc: 'The flagship residence with panoramic terrace and private pool.',
        },
        garden: {
          name: 'Garden Villa',
          desc: 'Villa with private garden and direct access to the pool area.',
        },
        seaView: {
          name: 'Sea View Residence',
          desc: 'Unobstructed Mediterranean views from all rooms.',
        },
        family: {
          name: 'Family Suite',
          desc: 'Designed for families, with spacious and functional areas.',
        },
      },
    },
    location: {
      badge: 'Prime Location',
      title: 'Port d\'Andratx,',
      titleAccent: 'Mallorca',
      subtitle: 'One of the most exclusive ports in the Mediterranean, where pristine nature meets refined luxury.',
      highlights: {
        marina: 'Club de Vela',
        marinaDesc: 'Marina with 500 moorings',
        restaurants: 'Michelin Gastronomy',
        restaurantsDesc: '5 Michelin-starred restaurants within 15 min',
        beach: 'Pristine Coves',
        beachDesc: 'Virgin beaches 5 minutes by boat',
        golf: 'Golf Courses',
        golfDesc: '3 championship golf courses nearby',
        airport: 'Airport',
        airportDesc: '30 minutes to Palma Airport',
      },
    },
    faqs: {
      badge: 'FAQs',
      title: 'We Answer Your',
      titleAccent: 'Questions',
      subtitle: 'Essential information for international investors.',
      q1: 'What is the purchase process for foreigners?',
      a1: 'Foreign buyers can acquire properties in Spain without restrictions. The process requires NIE (Foreigner Identification Number), Spanish bank account, and is conducted before a notary. Our legal team facilitates the entire process in your language.',
      q2: 'What taxes apply to the purchase?',
      a2: 'For EU buyers: ITP (Property Transfer Tax) 8-10%. For non-EU residents: VAT 10% plus AJD 1.5%. We offer personalized tax advice to optimize the purchase structure.',
      q3: 'Can I obtain Spanish residency?',
      a3: 'Yes, investments over €500,000 qualify for the Investor Visa (Golden Visa), allowing residence in Spain and free movement within the Schengen area.',
      q4: 'Is there a rental management service?',
      a4: 'We offer a complete property management service including marketing, bookings, maintenance, and cleaning. This maximizes profitability without complications for the owner.',
      q5: 'What is the warranty policy?',
      a5: 'All residences include 10-year structural warranty, 2-year installation warranty, and 1-year finish warranty. We also offer optional preventive maintenance contracts.',
    },
    contact: {
      badge: 'Exclusive Contact',
      title: 'Request Your',
      titleAccent: 'Private Consultation',
      subtitle: 'Our advisory team will assist you with maximum discretion and professionalism.',
      form: {
        name: 'Full name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        phone: 'Phone',
        phonePlaceholder: '+34 XXX XXX XXX',
        budget: 'Investment budget',
        interest: 'Main interest',
        interests: {
          investment: 'Investment',
          residence: 'Primary residence',
          vacation: 'Vacation home',
        },
        message: 'Message (optional)',
        messagePlaceholder: 'Tell us about your needs...',
        submit: 'Submit Request',
        submitting: 'Submitting...',
        success: 'Request sent!',
        successMessage: 'We will contact you within 24 hours.',
      },
      privacy: 'Your data is protected under GDPR. It will only be used for this inquiry.',
    },
    footer: {
      tagline: 'The zenith of Mediterranean living.',
      address: 'Passeig de la Pau, 42',
      city: 'Port d\'Andratx, Mallorca',
      postcode: '07157',
      spain: 'Spain',
      phone: '+34 971 234 567',
      email: 'residencias@anclora-estates.com',
      rights: '© 2024 Anclora Private Estates. All rights reserved.',
      legal: 'Legal Notice',
      privacy: 'Privacy',
      cookies: 'Cookies',
    },
  },
};

// ============================================
// TYPES
// ============================================
type Language = 'es' | 'en';
type GalleryCategory = 'all' | 'interiors' | 'exteriors' | 'lifestyle' | 'details';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  budget: number;
  interest: string;
  message: string;
  timestamp: string;
}

// ============================================
// IMAGE DATA (using generated images)
// ============================================
const galleryImages = [
  { src: '/images/hero/hero-main.png', category: 'exteriors', alt: 'Hero view' },
  { src: '/images/interiors/living-room.png', category: 'interiors', alt: 'Living room' },
  { src: '/images/interiors/kitchen.png', category: 'interiors', alt: 'Kitchen' },
  { src: '/images/interiors/master-bedroom.png', category: 'interiors', alt: 'Master bedroom' },
  { src: '/images/interiors/bathroom.png', category: 'interiors', alt: 'Bathroom' },
  { src: '/images/lifestyle/yacht.png', category: 'lifestyle', alt: 'Yacht lifestyle' },
  { src: '/images/lifestyle/dining-terrace.png', category: 'lifestyle', alt: 'Terrace dining' },
  { src: '/images/lifestyle/cove.png', category: 'lifestyle', alt: 'Cove beach' },
  { src: '/images/lifestyle/marina.png', category: 'lifestyle', alt: 'Marina' },
  { src: '/images/exteriors/rooftop-pool.png', category: 'exteriors', alt: 'Rooftop pool' },
  { src: '/images/exteriors/night-view.png', category: 'exteriors', alt: 'Night view' },
  { src: '/images/exteriors/garden-terrace.png', category: 'exteriors', alt: 'Garden terrace' },
  { src: '/images/amenities/spa.png', category: 'details', alt: 'Spa' },
  { src: '/images/amenities/wine-cellar.png', category: 'details', alt: 'Wine cellar' },
  { src: '/images/location/aerial.png', category: 'lifestyle', alt: 'Aerial view' },
  { src: '/images/details/stone-detail.png', category: 'details', alt: 'Stone detail' },
];

const residenceUnits = [
  {
    id: 'penthouse',
    floor: 4,
    sqm: 380,
    price: 12500000,
    bedrooms: 4,
    bathrooms: 4,
    terrace: 120,
    features: ['seaView', 'privatePool', 'solarium', 'parking', 'storage'],
    image: '/images/exteriors/rooftop-pool.png',
  },
  {
    id: 'garden',
    floor: 0,
    sqm: 320,
    price: 8900000,
    bedrooms: 3,
    bathrooms: 3,
    terrace: 85,
    features: ['mountainView', 'privatePool', 'parking', 'storage'],
    image: '/images/exteriors/garden-terrace.png',
  },
  {
    id: 'seaView',
    floor: 3,
    sqm: 280,
    price: 7500000,
    bedrooms: 3,
    bathrooms: 3,
    terrace: 60,
    features: ['seaView', 'parking', 'storage'],
    image: '/images/interiors/living-room.png',
  },
  {
    id: 'family',
    floor: 2,
    sqm: 250,
    price: 6200000,
    bedrooms: 4,
    bathrooms: 3,
    terrace: 45,
    features: ['seaView', 'mountainView', 'parking'],
    image: '/images/interiors/dining-room.png',
  },
];

// ============================================
// UTILITY COMPONENTS
// ============================================

// Animated Counter
const AnimatedCounter: React.FC<{ value: number; prefix?: string; suffix?: string; duration?: number }> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// SVG Line Chart - Elegant Investment Visualization
const LineChart: React.FC<{ data: number[]; width?: number; height?: number; color?: string }> = ({
  data,
  width = 400,
  height = 200,
  color = '#C5A059',
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const areaRef = useRef<SVGPathElement>(null);
  const isInView = useInView(pathRef, { once: true });

  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue || 1;
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const points = data.map((value, index) => {
    const x = padding.left + (index / (data.length - 1)) * chartWidth;
    const y = padding.top + chartHeight - ((value - minValue) / range) * chartHeight;
    return { x, y };
  });

  const linePath = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
  const areaPath = `M ${points[0].x},${padding.top + chartHeight} L ${points.map(p => `${p.x},${p.y}`).join(' L ')} L ${points[points.length - 1].x},${padding.top + chartHeight} Z`;

  // Y-axis labels
  const yLabels = [maxValue, Math.round((maxValue + minValue) / 2), minValue];
  
  // X-axis labels (years)
  const years = ['2020', '2021', '2022', '2023', '2024', '2025'];

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <defs>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Subtle grid lines */}
      {[0, 0.5, 1].map((ratio, i) => (
        <line
          key={i}
          x1={padding.left}
          y1={padding.top + chartHeight * ratio}
          x2={width - padding.right}
          y2={padding.top + chartHeight * ratio}
          stroke="#E8E4E0"
          strokeWidth="0.5"
          strokeDasharray={ratio === 0.5 ? "4 4" : "none"}
        />
      ))}
      
      {/* Y-axis labels */}
      {yLabels.map((label, i) => (
        <text
          key={i}
          x={padding.left - 8}
          y={padding.top + chartHeight * (i / 2) + 4}
          textAnchor="end"
          fontSize="9"
          fill="#94A3B8"
          fontFamily="var(--font-montserrat)"
        >
          {label}
        </text>
      ))}
      
      {/* X-axis labels */}
      {years.map((year, i) => (
        <text
          key={i}
          x={padding.left + (i / (years.length - 1)) * chartWidth}
          y={height - 8}
          textAnchor="middle"
          fontSize="9"
          fill="#94A3B8"
          fontFamily="var(--font-montserrat)"
        >
          {year}
        </text>
      ))}
      
      {/* Area fill */}
      <motion.path
        ref={areaRef}
        d={areaPath}
        fill="url(#areaGradient)"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      
      {/* Main line */}
      <motion.path
        ref={pathRef}
        d={linePath}
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* Data points */}
      {points.map((point, index) => (
        <g key={index}>
          {/* Outer glow ring */}
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="8"
            fill="transparent"
            stroke={color}
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: index * 0.1 + 1.8, duration: 0.4 }}
          />
          {/* Main point */}
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#FAF9F6"
            stroke={color}
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: index * 0.1 + 1.5, duration: 0.3 }}
          />
        </g>
      ))}
    </svg>
  );
};

// SVG Bar Chart - Elegant Horizontal Comparison
const BarChart: React.FC<{ data: { label: string; value: number }[]; width?: number; height?: number }> = ({
  data,
  width = 400,
  height = 200,
}) => {
  const ref = useRef<SVGGElement>(null);
  const isInView = useInView(ref, { once: true });
  const maxValue = Math.max(...data.map(d => d.value));
  const numBars = data.length;
  const labelHeight = 16;
  const barGap = 6;
  const barHeight = Math.max(16, (height - (numBars * labelHeight) - ((numBars - 1) * barGap)) / numBars);
  
  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <defs>
        <linearGradient id="barGradientGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="barGradientNavy" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#334155" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g ref={ref}>
        {data.map((item, index) => {
          const y = index * (barHeight + labelHeight + barGap);
          const barWidth = (item.value / maxValue) * (width - 70);
          const isSelected = index === 0;
          const displayValue = `€${(item.value / 1000).toFixed(0)}k`;
          
          return (
            <g key={index}>
              {/* Label above bar */}
              <text
                x={0}
                y={y + 11}
                fontSize="10"
                fontWeight={isSelected ? "600" : "400"}
                fill={isSelected ? "#C5A059" : "#64748B"}
                fontFamily="var(--font-montserrat)"
              >
                {item.label}
              </text>
              
              {/* Background track */}
              <rect
                x={0}
                y={y + labelHeight}
                width={width - 45}
                height={barHeight}
                rx="3"
                fill="#F8F5F2"
              />
              
              {/* Animated bar */}
              <motion.rect
                x={0}
                y={y + labelHeight}
                width={0}
                height={barHeight}
                rx="3"
                fill={isSelected ? "url(#barGradientGold)" : "url(#barGradientNavy)"}
                initial={{ width: 0 }}
                animate={isInView ? { width: barWidth } : { width: 0 }}
                transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              />
              
              {/* Value label at end of bar */}
              <motion.text
                x={width - 40}
                y={y + labelHeight + barHeight / 2 + 4}
                fontSize="10"
                fontWeight="600"
                fill={isSelected ? "#C5A059" : "#1E293B"}
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.15 + 0.8, duration: 0.4 }}
              >
                {displayValue}
              </motion.text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};

// ============================================
// MAIN APP COMPONENT
// ============================================
export default function AndratxAzureResidencies() {
  const [lang, setLang] = useState<Language>('es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null);
  const [galleryCategory, setGalleryCategory] = useState<GalleryCategory>('all');
  const [selectedUnit, setSelectedUnit] = useState(residenceUnits[0]);
  const [budgetValue, setBudgetValue] = useState([5000000]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<'top' | 'middle' | 'bottom'>('top');

  const { toast } = useToast();

  const t = translations[lang];

  // Track scroll position for smart scroll buttons
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      if (scrollTop < 100) {
        setScrollPosition('top');
      } else if (scrollTop + windowHeight >= docHeight - 100) {
        setScrollPosition('bottom');
      } else {
        setScrollPosition('middle');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load saved lead data on mount using lazy initialization
  const getInitialFormData = useCallback(() => {
    const defaults = {
      name: '',
      email: '',
      phone: '',
      interest: 'investment' as const,
      message: '',
    };
    if (typeof window === 'undefined') return defaults;
    const savedData = localStorage.getItem('anclora_lead_data');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        return {
          name: parsed.name || '',
          email: parsed.email || '',
          phone: parsed.phone || '',
          interest: parsed.interest || 'investment',
          message: parsed.message || '',
        };
      } catch {
        return defaults;
      }
    }
    return defaults;
  }, []);

  const [formData, setFormData] = useState(getInitialFormData);

  // Form validation
  const validateForm = () => {
    if (!formData.name.trim()) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false;
    if (!formData.phone.trim()) return false;
    return true;
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: lang === 'es' ? 'Error de validación' : 'Validation error',
        description: lang === 'es' ? 'Por favor complete todos los campos correctamente.' : 'Please complete all fields correctly.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Save to localStorage
    const leadData: LeadData = {
      ...formData,
      budget: budgetValue[0],
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('anclora_lead_data', JSON.stringify(leadData));

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: t.contact.form.success,
      description: t.contact.form.successMessage,
      className: 'bg-[#0F172A] text-[#F8F5F2] border-[#C5A059]',
    });
  };

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Scroll up/down functions
  const scrollUp = () => {
    window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(lang === 'es' ? 'es-ES' : 'en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Filter gallery images
  const filteredImages = galleryCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === galleryCategory);

  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#0F172A] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[rgba(15,23,42,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="/logo.png" 
                alt="Anclora Private Estates" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="font-serif text-xl font-semibold tracking-tight">Anclora</span>
                <span className="font-script text-[#C5A059] text-base ml-1">Private Estates</span>
              </div>
            </motion.div>

            {/* Right Side: Contact Button & Menu */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="flex items-center gap-1.5 text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{lang.toUpperCase()}</span>
              </button>
              
              {/* Contact Button */}
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-[#C5A059] hover:bg-[#A8893D] text-[#0F172A] font-medium"
              >
                {t.nav.contact}
              </Button>
              
              {/* Menu Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F172A] text-[#F8F5F2] hover:bg-[#1E293B] transition-colors"
                >
                  <span className="text-sm font-medium">{lang === 'es' ? 'Menú' : 'Menu'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Elegant Dropdown Menu */}
                <AnimatePresence>
                  {mobileMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-56 py-2 bg-[#FAF9F6] rounded-xl shadow-xl border border-[rgba(15,23,42,0.08)] overflow-hidden"
                    >
                      {Object.entries(t.nav).filter(([key]) => key !== 'contact').map(([key, label], index) => (
                        <motion.button
                          key={key}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => scrollToSection(key)}
                          className="w-full text-left px-5 py-3 text-sm font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-[rgba(197,160,89,0.08)] transition-colors flex items-center justify-between group"
                        >
                          <span>{label}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all text-[#C5A059]" />
                        </motion.button>
                      ))}
                      <div className="mt-2 pt-2 border-t border-[rgba(15,23,42,0.05)]">
                        <button
                          onClick={() => scrollToSection('contact')}
                          className="w-full text-left px-5 py-3 text-sm font-semibold text-[#C5A059] hover:bg-[rgba(197,160,89,0.1)] transition-colors"
                        >
                          {t.nav.contact}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur-to-Clear Animation */}
        <motion.div
          initial={{ filter: 'blur(20px)', scale: 1.05 }}
          animate={{ filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/hero/hero-daylight.jpg"
            alt="Anclora Private Estates"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Dark Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[rgba(15,23,42,0.5)] via-[rgba(15,23,42,0.4)] to-[rgba(15,23,42,0.7)]" />
        
        {/* Subtle Vignette Effect */}
        <div className="absolute inset-0 z-10" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15,23,42,0.3) 100%)'
        }} />

        {/* Content - Appears after 2s delay */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold leading-tight tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            {t.hero.title}
            <br />
            <span className="text-[#C5A059] drop-shadow-[0_2px_10px_rgba(197,160,89,0.3)]">{t.hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="mt-8 text-lg sm:text-xl text-[rgba(248,245,242,0.9)] max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('residences')}
              className="bg-[#C5A059] hover:bg-[#D4B77A] text-[#0F172A] px-8 py-6 text-lg font-semibold shadow-[0_4px_30px_rgba(197,160,89,0.4)] transition-all hover:shadow-[0_6px_40px_rgba(197,160,89,0.5)]"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-[rgba(248,245,242,0.6)] text-[#F8F5F2] hover:bg-[rgba(248,245,242,0.1)] hover:border-[#F8F5F2] px-8 py-6 text-lg font-medium backdrop-blur-sm bg-[rgba(15,23,42,0.3)] transition-all"
            >
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <button
            onClick={() => scrollToSection('investment')}
            className="flex flex-col items-center gap-2 text-[rgba(248,245,242,0.7)] hover:text-[#F8F5F2] transition-colors"
          >
            <span className="text-sm font-medium text-[rgba(248,245,242,0.7)]">{t.hero.scrollText}</span>
            <ChevronDown className="w-5 h-5 animate-bounce text-[#C5A059]" />
          </button>
        </motion.div>
      </section>

      {/* Fixed Right Sidebar - Follow Us & Smart Scroll */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-6">
        {/* Follow Us Section */}
        <div className="flex flex-col items-center gap-4">
          <span 
            className="text-xs font-medium tracking-widest uppercase writing-mode-vertical text-[#64748B] hover:text-[#C5A059] transition-colors cursor-default"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            {lang === 'es' ? 'Síguenos' : 'Follow Us'}
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#C5A059] to-transparent" />
          <div className="flex flex-col gap-3">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#C5A059' }}
              className="text-[#64748B] hover:text-[#C5A059] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#C5A059' }}
              className="text-[#64748B] hover:text-[#C5A059] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#C5A059' }}
              className="text-[#64748B] hover:text-[#C5A059] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gradient-to-b from-transparent via-[#C5A059] to-transparent" />

        {/* Smart Scroll Buttons */}
        <div className="flex flex-col gap-2">
          {/* Scroll Up - Hidden at top */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: scrollPosition === 'top' ? 0 : 1, 
              scale: scrollPosition === 'top' ? 0.8 : 1 
            }}
            transition={{ duration: 0.2 }}
            onClick={scrollUp}
            className={`w-10 h-10 rounded-full border border-[rgba(197,160,89,0.3)] bg-[rgba(248,245,242,0.9)] backdrop-blur-sm flex items-center justify-center text-[#64748B] hover:text-[#C5A059] hover:border-[#C5A059] transition-all shadow-lg ${scrollPosition === 'top' ? 'pointer-events-none' : 'cursor-pointer'}`}
          >
            <ChevronLeft className="w-5 h-5 rotate-90" />
          </motion.button>
          
          {/* Scroll Down - Hidden at bottom */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: scrollPosition === 'bottom' ? 0 : 1, 
              scale: scrollPosition === 'bottom' ? 0.8 : 1 
            }}
            transition={{ duration: 0.2 }}
            onClick={scrollDown}
            className={`w-10 h-10 rounded-full border border-[rgba(197,160,89,0.3)] bg-[rgba(248,245,242,0.9)] backdrop-blur-sm flex items-center justify-center text-[#64748B] hover:text-[#C5A059] hover:border-[#C5A059] transition-all shadow-lg ${scrollPosition === 'bottom' ? 'pointer-events-none' : 'cursor-pointer'}`}
          >
            <ChevronLeft className="w-5 h-5 -rotate-90" />
          </motion.button>
        </div>
      </div>

      {/* Investment Section */}
      <section id="investment" className="py-20 lg:py-32 bg-[#F8F5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-[rgba(197,160,89,0.1)] text-[#C5A059] text-sm font-medium mb-4"
            >
              {t.investment.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-serif font-semibold"
            >
              {t.investment.title} <span className="text-[#C5A059]">{t.investment.titleAccent}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-[#64748B] max-w-2xl mx-auto"
            >
              {t.investment.subtitle}
            </motion.p>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Capital Appreciation Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FAF9F6] rounded-2xl p-8 border border-[rgba(15,23,42,0.05)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold">{t.investment.capitalAppreciation}</h3>
                  <p className="text-sm text-[#64748B]">{t.investment.capitalAppreciationDesc}</p>
                </div>
              </div>
              
              <div className="h-48">
                <LineChart data={[100, 108, 115, 122, 128, 135]} width={300} height={180} />
              </div>
              
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <span className="text-3xl font-serif font-semibold text-[#C5A059]">{t.investment.percentGrowth}</span>
                  <p className="text-sm text-[#64748B] mt-1">{t.investment.growth}</p>
                </div>
                <div className="text-right text-sm text-[#64748B]">
                  <span>2020</span>
                  <span className="mx-2">→</span>
                  <span>2025</span>
                </div>
              </div>
            </motion.div>

            {/* Rental Yield Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#FAF9F6] rounded-2xl p-8 border border-[rgba(15,23,42,0.05)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center">
                  <PieChart className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold">{t.investment.rentalYield}</h3>
                  <p className="text-sm text-[#64748B]">{t.investment.rentalYieldDesc}</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Long-term yield */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{t.investment.longTerm}</span>
                    <span className="text-sm font-semibold text-[#C5A059]">4.2%</span>
                  </div>
                  <div className="h-3 bg-[#E8E4E0] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '42%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-[#1E293B] rounded-full"
                    />
                  </div>
                </div>

                {/* Seasonal yield */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{t.investment.seasonal}</span>
                    <span className="text-sm font-semibold text-[#C5A059]">8.5%</span>
                  </div>
                  <div className="h-3 bg-[#E8E4E0] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-[#C5A059] rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[rgba(15,23,42,0.05)]">
                <p className="text-sm text-[#64748B]">
                  {t.investment.netYield} • {lang === 'es' ? 'Promedio 2023' : 'Average 2023'}
                </p>
              </div>
            </motion.div>

            {/* Market Benchmark Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#FAF9F6] rounded-2xl p-8 border border-[rgba(15,23,42,0.05)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold">{t.investment.marketBenchmark}</h3>
                  <p className="text-sm text-[#64748B]">{t.investment.marketBenchmarkDesc}</p>
                </div>
              </div>

              <div className="h-48">
                <BarChart
                  data={[
                    { label: t.investment.locations.andratx, value: 8500 },
                    { label: t.investment.locations.ibiza, value: 12000 },
                    { label: t.investment.locations.marbella, value: 9800 },
                    { label: t.investment.locations.stTropez, value: 15000 },
                  ]}
                  width={300}
                  height={180}
                />
              </div>

              <div className="mt-4 text-sm text-[#64748B]">
                {t.investment.price}/m² • {lang === 'es' ? 'Q4 2024' : 'Q4 2024'}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-[rgba(197,160,89,0.1)] text-[#C5A059] text-sm font-medium mb-4"
            >
              {t.features.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-serif font-semibold"
            >
              {t.features.title} <span className="text-[#C5A059]">{t.features.titleAccent}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-[#64748B] max-w-2xl mx-auto"
            >
              {t.features.subtitle}
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Home Features */}
            <div className="lg:col-span-1">
              <h3 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
                {t.features.categories.smart}
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Home, title: t.features.smartHome.title, desc: t.features.smartHome.desc },
                  { icon: Thermometer, title: t.features.smartClimate.title, desc: t.features.smartClimate.desc },
                  { icon: Lock, title: t.features.smartLock.title, desc: t.features.smartLock.desc },
                  { icon: Volume2, title: t.features.audioSystem.title, desc: t.features.audioSystem.desc },
                  { icon: Wind, title: t.features.airPurification.title, desc: t.features.airPurification.desc },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-[#F8F5F2] rounded-xl border border-[rgba(15,23,42,0.05)] hover:border-[#C5A059] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059] transition-colors">
                      <feature.icon className="w-5 h-5 text-[#C5A059] group-hover:text-[#0F172A] transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-[#64748B] mt-1">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Wellness & Leisure */}
            <div className="lg:col-span-1">
              <h3 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-[#C5A059]" />
                {t.features.categories.wellness}
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Waves, title: t.features.infinityPool.title, desc: t.features.infinityPool.desc },
                  { icon: TreePine, title: t.features.spa.title, desc: t.features.spa.desc },
                  { icon: Wine, title: t.features.wineCellar.title, desc: t.features.wineCellar.desc },
                  { icon: Dumbbell, title: t.features.gym.title, desc: t.features.gym.desc },
                  { icon: Film, title: t.features.cinema.title, desc: t.features.cinema.desc },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex gap-4 p-4 bg-[#F8F5F2] rounded-xl border border-[rgba(15,23,42,0.05)] hover:border-[#C5A059] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059] transition-colors">
                      <feature.icon className="w-5 h-5 text-[#C5A059] group-hover:text-[#0F172A] transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-[#64748B] mt-1">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="lg:col-span-1">
              <h3 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#C5A059]" />
                {t.features.categories.security}
              </h3>
              <div className="space-y-4">
                {[t.features.security24].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="flex gap-4 p-4 bg-[#F8F5F2] rounded-xl border border-[rgba(15,23,42,0.05)] hover:border-[#C5A059] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059] transition-colors">
                      <Shield className="w-5 h-5 text-[#C5A059] group-hover:text-[#0F172A] transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-[#64748B] mt-1">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
                {/* Additional security visualization */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative h-64 rounded-xl overflow-hidden"
                >
                  <img
                    src="/images/amenities/security.png"
                    alt="Security"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
                      <span className="text-sm font-medium">
                        {lang === 'es' ? 'Protegido 24/7' : 'Protected 24/7'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 lg:py-32 bg-[#0F172A] text-[#F8F5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-[rgba(197,160,89,0.2)] text-[#C5A059] text-sm font-medium mb-4"
            >
              {t.gallery.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-serif font-semibold"
            >
              {t.gallery.title} <span className="text-[#C5A059]">{t.gallery.titleAccent}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-[#94A3B8] max-w-2xl mx-auto"
            >
              {t.gallery.subtitle}
            </motion.p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(Object.entries(t.gallery.categories) as [GalleryCategory, string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setGalleryCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  galleryCategory === key
                    ? 'bg-[#C5A059] text-[#0F172A]'
                    : 'bg-[rgba(248,245,242,0.1)] text-[#94A3B8] hover:text-[#F8F5F2]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                    index === 0 || index === 5 ? 'col-span-2 row-span-2' : ''
                  }`}
                  onClick={() => setSelectedGalleryImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full min-h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4">
                      <ExternalLink className="w-5 h-5 text-[#C5A059]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedGalleryImage !== null} onOpenChange={() => setSelectedGalleryImage(null)}>
        <DialogContent className="max-w-5xl w-full bg-[#0F172A] border-[rgba(197,160,89,0.2)]">
          <DialogHeader>
            <DialogTitle className="text-[#C5A059] font-serif">
              {selectedGalleryImage !== null && filteredImages[selectedGalleryImage]?.alt}
            </DialogTitle>
          </DialogHeader>
          {selectedGalleryImage !== null && (
            <div className="relative">
              <img
                src={filteredImages[selectedGalleryImage]?.src}
                alt={filteredImages[selectedGalleryImage]?.alt}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedGalleryImage(selectedGalleryImage > 0 ? selectedGalleryImage - 1 : filteredImages.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(15,23,42,0.8)] flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0F172A] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setSelectedGalleryImage(selectedGalleryImage < filteredImages.length - 1 ? selectedGalleryImage + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(15,23,42,0.8)] flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0F172A] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Residences Section */}
      <section id="residences" className="py-20 lg:py-32 bg-[#F8F5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-[rgba(197,160,89,0.1)] text-[#C5A059] text-sm font-medium mb-4"
            >
              {t.residences.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-serif font-semibold"
            >
              {t.residences.title} <span className="text-[#C5A059]">{t.residences.titleAccent}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-[#64748B] max-w-2xl mx-auto"
            >
              {t.residences.subtitle}
            </motion.p>
          </div>

          {/* Unit Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Unit List */}
            <div className="space-y-4">
              {residenceUnits.map((unit) => (
                <motion.button
                  key={unit.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedUnit(unit)}
                  className={`w-full text-left p-6 rounded-xl border transition-all ${
                    selectedUnit.id === unit.id
                      ? 'bg-[#0F172A] text-[#F8F5F2] border-[#C5A059]'
                      : 'bg-[#FAF9F6] border-[rgba(15,23,42,0.05)] hover:border-[#C5A059]'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className={`font-serif text-xl font-semibold ${selectedUnit.id === unit.id ? 'text-[#F8F5F2]' : 'text-[#0F172A]'}`}>
                        {t.residences.units[unit.id as keyof typeof t.residences.units].name}
                      </h3>
                      <p className={`text-sm ${selectedUnit.id === unit.id ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                        {t.residences.units[unit.id as keyof typeof t.residences.units].desc}
                      </p>
                    </div>
                    <span className={`text-xl font-serif font-semibold ${selectedUnit.id === unit.id ? 'text-[#C5A059]' : 'text-[#C5A059]'}`}>
                      {formatPrice(unit.price)}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className={selectedUnit.id === unit.id ? 'text-[#94A3B8]' : 'text-[#64748B]'}>
                      {unit.sqm} {t.residences.sqm}
                    </span>
                    <span className={selectedUnit.id === unit.id ? 'text-[#94A3B8]' : 'text-[#64748B]'}>
                      {unit.bedrooms} {t.residences.bedrooms}
                    </span>
                    <span className={selectedUnit.id === unit.id ? 'text-[#94A3B8]' : 'text-[#64748B]'}>
                      {unit.bathrooms} {t.residences.bathrooms}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Selected Unit Detail */}
            <motion.div
              key={selectedUnit.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#FAF9F6] rounded-2xl border border-[rgba(15,23,42,0.05)] overflow-hidden"
            >
              <div className="relative h-64 lg:h-80">
                <img
                  src={selectedUnit.image}
                  alt={t.residences.units[selectedUnit.id as keyof typeof t.residences.units].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#C5A059] text-[#0F172A] text-sm font-medium">
                    {t.residences.floor} {selectedUnit.floor}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold">
                      {t.residences.units[selectedUnit.id as keyof typeof t.residences.units].name}
                    </h3>
                    <p className="text-[#64748B] mt-1">
                      {t.residences.units[selectedUnit.id as keyof typeof t.residences.units].desc}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-[#64748B]">{t.residences.from}</span>
                    <p className="text-2xl font-serif font-semibold text-[#C5A059]">
                      {formatPrice(selectedUnit.price)}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-[#F8F5F2] rounded-lg">
                    <span className="text-sm text-[#64748B]">{t.residences.sqm}</span>
                    <p className="text-xl font-semibold">{selectedUnit.sqm}</p>
                  </div>
                  <div className="p-4 bg-[#F8F5F2] rounded-lg">
                    <span className="text-sm text-[#64748B]">{t.residences.terrace}</span>
                    <p className="text-xl font-semibold">{selectedUnit.terrace} {t.residences.sqm}</p>
                  </div>
                  <div className="p-4 bg-[#F8F5F2] rounded-lg">
                    <span className="text-sm text-[#64748B]">{t.residences.bedrooms}</span>
                    <p className="text-xl font-semibold">{selectedUnit.bedrooms}</p>
                  </div>
                  <div className="p-4 bg-[#F8F5F2] rounded-lg">
                    <span className="text-sm text-[#64748B]">{t.residences.bathrooms}</span>
                    <p className="text-xl font-semibold">{selectedUnit.bathrooms}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedUnit.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[rgba(197,160,89,0.1)] text-[#C5A059] text-sm"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {t.residences[feature as keyof typeof t.residences]}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-[#C5A059] hover:bg-[#A8893D] text-[#0F172A] font-medium"
                >
                  {t.residences.requestInfo}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 lg:py-32 bg-[#0F172A] text-[#F8F5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-[rgba(197,160,89,0.2)] text-[#C5A059] text-sm font-medium mb-4"
            >
              {t.location.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-serif font-semibold"
            >
              {t.location.title} <span className="text-[#C5A059]">{t.location.titleAccent}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-[#94A3B8] max-w-2xl mx-auto"
            >
              {t.location.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden"
            >
              <img
                src="/images/location/aerial.png"
                alt="Port d'Andratx"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
              
              {/* Location markers */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <div className="w-8 h-8 rounded-full bg-[#C5A059] flex items-center justify-center animate-pulse" />
                  <div className="absolute inset-0 w-8 h-8 rounded-full bg-[#C5A059] animate-ping opacity-30" />
                </motion.div>
              </div>
            </motion.div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Anchor, title: t.location.highlights.marina, desc: t.location.highlights.marinaDesc },
                { icon: Wine, title: t.location.highlights.restaurants, desc: t.location.highlights.restaurantsDesc },
                { icon: Compass, title: t.location.highlights.beach, desc: t.location.highlights.beachDesc },
                { icon: MapPinned, title: t.location.highlights.airport, desc: t.location.highlights.airportDesc },
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-[#1E293B] rounded-xl border border-[rgba(197,160,89,0.1)]"
                >
                  <highlight.icon className="w-8 h-8 text-[#C5A059] mb-4" />
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-[#94A3B8]">{highlight.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 lg:py-32 bg-[#F8F5F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-[rgba(197,160,89,0.1)] text-[#C5A059] text-sm font-medium mb-4"
            >
              {t.faqs.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-serif font-semibold"
            >
              {t.faqs.title} <span className="text-[#C5A059]">{t.faqs.titleAccent}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-[#64748B] max-w-2xl mx-auto"
            >
              {t.faqs.subtitle}
            </motion.p>
          </div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <AccordionItem
                  key={num}
                  value={`item-${num}`}
                  className="bg-[#FAF9F6] rounded-xl border border-[rgba(15,23,42,0.05)] px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-[#C5A059]">
                    {t.faqs[`q${num}` as keyof typeof t.faqs] as string}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#64748B] leading-relaxed">
                    {t.faqs[`a${num}` as keyof typeof t.faqs] as string}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 rounded-full bg-[rgba(197,160,89,0.1)] text-[#C5A059] text-sm font-medium mb-4"
              >
                {t.contact.badge}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-5xl font-serif font-semibold"
              >
                {t.contact.title} <span className="text-[#C5A059]">{t.contact.titleAccent}</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-[#64748B] max-w-lg"
              >
                {t.contact.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-10 space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t.footer.address}</h4>
                    <p className="text-[#64748B]">{t.footer.city}, {t.footer.postcode}</p>
                    <p className="text-[#64748B]">{t.footer.spain}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t.footer.phone}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t.footer.email}</h4>
                  </div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-10 relative h-64 rounded-xl overflow-hidden"
              >
                <img
                  src="/images/lifestyle/marina.png"
                  alt="Port d'Andratx Marina"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="font-script text-2xl text-[#C5A059]">{t.footer.tagline}</span>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#F8F5F2] rounded-2xl p-8 border border-[rgba(15,23,42,0.05)]"
            >
              {isSuccess ? (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 rounded-full bg-[rgba(197,160,89,0.1)] flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-[#C5A059]" />
                  </motion.div>
                  <h3 className="font-serif text-2xl font-semibold mb-2">{t.contact.form.success}</h3>
                  <p className="text-[#64748B]">{t.contact.form.successMessage}</p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="mt-6 border-[#C5A059] text-[#C5A059]"
                  >
                    {lang === 'es' ? 'Enviar otra solicitud' : 'Send another request'}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">{t.contact.form.name}</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.form.namePlaceholder}
                        className="mt-2 bg-[#FAF9F6] border-[rgba(15,23,42,0.1)]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t.contact.form.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="mt-2 bg-[#FAF9F6] border-[rgba(15,23,42,0.1)]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">{t.contact.form.phone}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contact.form.phonePlaceholder}
                      className="mt-2 bg-[#FAF9F6] border-[rgba(15,23,42,0.1)]"
                      required
                    />
                  </div>

                  <div>
                    <Label>{t.contact.form.budget}</Label>
                    <div className="mt-4 px-2">
                      <Slider
                        value={budgetValue}
                        onValueChange={setBudgetValue}
                        min={2000000}
                        max={15000000}
                        step={500000}
                        className="w-full"
                      />
                      <div className="flex justify-between mt-2 text-sm text-[#64748B]">
                        <span>€2M</span>
                        <span className="font-semibold text-[#C5A059]">{formatPrice(budgetValue[0])}</span>
                        <span>€15M</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="interest">{t.contact.form.interest}</Label>
                    <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                      <SelectTrigger className="mt-2 bg-[#FAF9F6] border-[rgba(15,23,42,0.1)]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="investment">{t.contact.form.interests.investment}</SelectItem>
                        <SelectItem value="residence">{t.contact.form.interests.residence}</SelectItem>
                        <SelectItem value="vacation">{t.contact.form.interests.vacation}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">{t.contact.form.message}</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="mt-2 bg-[#FAF9F6] border-[rgba(15,23,42,0.1)] min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C5A059] hover:bg-[#A8893D] text-[#0F172A] font-medium py-6"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-[#0F172A] border-t-transparent rounded-full mr-2"
                        />
                        {t.contact.form.submitting}
                      </>
                    ) : (
                      <>
                        {t.contact.form.submit}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-[#64748B] text-center">{t.contact.privacy}</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-[#F8F5F2] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Tagline */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Anclora Private Estates" 
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <span className="font-serif text-xl font-semibold">Anclora</span>
                  <span className="font-script text-[#C5A059] text-base ml-1">Private Estates</span>
                </div>
              </div>
              <p className="text-[#94A3B8] max-w-md">{t.footer.tagline}</p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">{lang === 'es' ? 'Contacto' : 'Contact'}</h4>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p>{t.footer.address}</p>
                <p>{t.footer.city}, {t.footer.postcode}</p>
                <p>{t.footer.phone}</p>
                <p>{t.footer.email}</p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">{lang === 'es' ? 'Legal' : 'Legal'}</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-[#94A3B8] hover:text-[#C5A059] transition-colors">{t.footer.legal}</a>
                <a href="#" className="block text-[#94A3B8] hover:text-[#C5A059] transition-colors">{t.footer.privacy}</a>
                <a href="#" className="block text-[#94A3B8] hover:text-[#C5A059] transition-colors">{t.footer.cookies}</a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[rgba(248,245,242,0.1)] text-center text-sm text-[#64748B]">
            {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}
