import { IndustryPageInfo } from '../types';
import { RETAIL_INDUSTRIES } from './industries/retailData';
import { HOSPITALITY_INDUSTRIES } from './industries/hospitalityData';
import { CORPORATE_INDUSTRIES } from './industries/corporateData';
import { HEALTHCARE_INDUSTRIES } from './industries/healthcareData';
import { EDUCATION_INDUSTRIES } from './industries/educationData';
import { FAITH_INDUSTRIES } from './industries/faithData';
import { INDUSTRIAL_INDUSTRIES } from './industries/industrialData';
import { AUTOMOTIVE_INDUSTRIES } from './industries/automotiveData';
import { RESIDENTIAL_INDUSTRIES } from './industries/residentialData';
import { FINANCIAL_INDUSTRIES } from './industries/financialData';

export interface IndustryCategoryInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
  industrySlugs: string[];
}

export const INDUSTRY_CATEGORIES: IndustryCategoryInfo[] = [
  {
    id: 'retail',
    name: 'Retail & Shopping',
    description: 'Security camera systems for stores, boutiques, shopping centers, and retail outlets to prevent shrinkage and monitor POS transactions.',
    icon: 'ShoppingBag',
    industrySlugs: [
      'security-cameras-retail-stores',
      'security-cameras-convenience-stores',
      'security-cameras-grocery-stores',
      'security-cameras-supermarkets',
      'security-cameras-liquor-stores',
      'security-cameras-smoke-shops',
      'security-cameras-jewelry-stores',
      'security-cameras-clothing-boutiques',
      'security-cameras-shoe-stores',
      'security-cameras-pawn-shops',
      'security-cameras-pharmacies',
      'security-cameras-shopping-centers',
      'security-cameras-malls',
      'security-cameras-wholesale-showrooms',
      'security-cameras-furniture-stores',
      'security-cameras-electronics-stores',
      'security-cameras-hardware-stores',
      'security-cameras-farm-ranch-supply'
    ]
  },
  {
    id: 'hospitality',
    name: 'Hospitality, Dining & Venues',
    description: 'Surveillance solutions for restaurants, bars, hotels, cafes, and event spaces to manage liability, staff, and guest safety.',
    icon: 'Utensils',
    industrySlugs: [
      'security-cameras-restaurants',
      'security-cameras-fast-food-restaurants',
      'security-cameras-cafes-coffee-shops',
      'security-cameras-bars-nightclubs',
      'security-cameras-food-trucks-commissaries',
      'security-cameras-hotels',
      'security-cameras-motels',
      'security-cameras-event-venues',
      'security-cameras-wedding-venues'
    ]
  },
  {
    id: 'corporate',
    name: 'Corporate & Commercial Offices',
    description: 'Access control and HD surveillance for office complexes, law firms, print shops, and multi-tenant commercial towers.',
    icon: 'Building2',
    industrySlugs: [
      'security-cameras-office-buildings',
      'security-cameras-law-offices',
      'security-cameras-multi-tenant-properties',
      'security-cameras-printing-shops',
      'security-cameras-co-working-spaces'
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Personal Services',
    description: 'Privacy-aware security cameras for hospitals, medical clinics, dental practices, pharmacies, spas, and pet care facilities.',
    icon: 'Stethoscope',
    industrySlugs: [
      'security-cameras-medical-offices',
      'security-cameras-dental-offices',
      'security-cameras-chiropractor-offices',
      'security-cameras-clinics',
      'security-cameras-hospitals',
      'security-cameras-urgent-care',
      'security-cameras-nursing-homes',
      'security-cameras-assisted-living',
      'security-cameras-gyms-fitness-centers',
      'security-cameras-salons-barber-shops',
      'security-cameras-spas',
      'security-cameras-pet-boarding',
      'security-cameras-veterinary-clinics',
      'security-cameras-animal-shelters'
    ]
  },
  {
    id: 'education',
    name: 'Education & Childcare',
    description: 'Comprehensive campus security camera coverage for daycares, private schools, public K-12 campuses, and universities.',
    icon: 'GraduationCap',
    industrySlugs: [
      'security-cameras-daycares',
      'security-cameras-private-schools',
      'security-cameras-public-schools',
      'security-cameras-colleges',
      'security-cameras-universities'
    ]
  },
  {
    id: 'faith',
    name: 'Faith & Community Nonprofits',
    description: 'Respectful, discreet surveillance for churches, mosques, temples, community centers, and nonprofit headquarters.',
    icon: 'Heart',
    industrySlugs: [
      'security-cameras-churches',
      'security-cameras-mosques',
      'security-cameras-temples',
      'security-cameras-nonprofit-buildings',
      'security-cameras-community-centers',
      'security-cameras-senior-centers',
      'security-cameras-recreation-centers',
      'security-cameras-food-banks',
      'security-cameras-homeless-shelters'
    ]
  },
  {
    id: 'industrial',
    name: 'Industrial, Warehousing & Construction',
    description: 'Rugged 4K PoE security systems for warehouses, distribution hubs, manufacturing plants, data centers, and construction yards.',
    icon: 'Factory',
    industrySlugs: [
      'security-cameras-warehouses',
      'security-cameras-distribution-centers',
      'security-cameras-manufacturing-plants',
      'security-cameras-machine-shops',
      'security-cameras-construction-sites',
      'security-cameras-equipment-yards',
      'security-cameras-storage-facilities',
      'security-cameras-self-storage-offices',
      'security-cameras-data-centers',
      'security-cameras-telecom-sites',
      'security-cameras-chemical-plants',
      'security-cameras-food-processing-plants',
      'security-cameras-recycling-scrap-yards',
      'security-cameras-lumber-yards',
      'security-cameras-quarries-gravel-pits',
      'security-cameras-solar-farms',
      'security-cameras-substations-utility-yards',
      'security-cameras-water-treatment-plants'
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive, Fleet & Logistics',
    description: 'High-definition perimeter defense and License Plate Recognition (LPR) for auto dealers, repair bays, truck yards, and gas stations.',
    icon: 'Car',
    industrySlugs: [
      'security-cameras-car-dealerships',
      'security-cameras-auto-repair-shops',
      'security-cameras-tire-shops',
      'security-cameras-car-washes',
      'security-cameras-parking-garages'
    ]
  },
  {
    id: 'residential',
    name: 'Multi-Family & Residential Properties',
    description: 'Perimeter and entrance surveillance for apartment complexes, HOAs, gated communities, Airbnbs, and private residential estates.',
    icon: 'Home',
    industrySlugs: [
      'security-cameras-apartment-complexes',
      'security-cameras-condos',
      'security-cameras-hoas',
      'security-cameras-gated-communities',
      'security-cameras-mobile-home-parks',
      'security-cameras-senior-living-communities',
      'security-cameras-student-housing',
      'security-cameras-single-family-homes',
      'security-cameras-luxury-estates',
      'security-cameras-vacation-rentals',
      'security-cameras-short-term-rentals',
      'security-cameras-townhomes'
    ]
  },
  {
    id: 'financial',
    name: 'Financial, High-Security & Specialized',
    description: 'Ultra-secure video monitoring for banks, credit unions, government facilities, utility grids, dispensaries, laundromats, and funeral homes.',
    icon: 'ShieldAlert',
    industrySlugs: [
      'security-cameras-banks',
      'security-cameras-credit-unions',
      'security-cameras-atm-kiosks',
      'security-cameras-diamond-dealers',
      'security-cameras-gold-buyers',
      'security-cameras-check-cashing-stores',
      'security-cameras-gun-shops'
    ]
  }
];

// Combine all industry data files into master 100 industries array
export const ALL_INDUSTRIES_DATA: IndustryPageInfo[] = [
  ...RETAIL_INDUSTRIES,
  ...HOSPITALITY_INDUSTRIES,
  ...CORPORATE_INDUSTRIES,
  ...HEALTHCARE_INDUSTRIES,
  ...EDUCATION_INDUSTRIES,
  ...FAITH_INDUSTRIES,
  ...INDUSTRIAL_INDUSTRIES,
  ...AUTOMOTIVE_INDUSTRIES,
  ...RESIDENTIAL_INDUSTRIES,
  ...FINANCIAL_INDUSTRIES
];

// Helper functions for easy access
export function getIndustryBySlug(slug: string): IndustryPageInfo | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.replace(/^\//, '').replace(/\/$/, '');
  if (!cleanSlug) return undefined;
  
  // 1. Direct exact match
  const direct = ALL_INDUSTRIES_DATA.find((ind) => ind.slug === cleanSlug);
  if (direct) return direct;

  // 2. Prefixed match (e.g. user visits /pawn-shops -> matches security-cameras-pawn-shops)
  const prefixed = ALL_INDUSTRIES_DATA.find((ind) => ind.slug === `security-cameras-${cleanSlug}`);
  if (prefixed) return prefixed;

  // 3. Shortened match (e.g. cleanSlug is security-cameras-pawn-shops -> matches pawn-shops)
  const shortened = ALL_INDUSTRIES_DATA.find((ind) => ind.slug.replace(/^security-cameras-/, '') === cleanSlug);
  if (shortened) return shortened;

  return undefined;
}

export function getIndustriesByCategory(categoryId: string): IndustryPageInfo[] {
  const cat = INDUSTRY_CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) return [];
  return ALL_INDUSTRIES_DATA.filter((ind) => cat.industrySlugs.includes(ind.slug));
}

export function searchIndustries(query: string): IndustryPageInfo[] {
  if (!query || !query.trim()) return ALL_INDUSTRIES_DATA;
  const q = query.toLowerCase().trim();
  return ALL_INDUSTRIES_DATA.filter(
    (ind) =>
      ind.name.toLowerCase().includes(q) ||
      ind.category.toLowerCase().includes(q) ||
      ind.metaDescription?.toLowerCase().includes(q) ||
      ind.whyNeedsCameras.toLowerCase().includes(q)
  );
}

export interface ServiceRegistryItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  badge?: string;
  category: 'commercial' | 'residential' | 'both';
}

export const SERVICE_REGISTRY: ServiceRegistryItem[] = [
  {
    id: 'commercial-cctv',
    title: 'Commercial Security Camera Systems',
    slug: '/commercial-security-camera-installation-fort-worth',
    description: 'Custom-engineered 4K PoE commercial video surveillance systems with encrypted NVR local storage, AI smart analytics, and zero monthly fees.',
    iconName: 'Camera',
    badge: 'Popular',
    category: 'commercial',
  },
  {
    id: 'network-cabling',
    title: 'Cat6 & Fiber Network Cabling',
    slug: '/network-cable-installation-fort-worth',
    description: 'Licensed Cat6, Cat6A, and fiber optic structured cabling installation, server rack wire management, and patch panel certification.',
    iconName: 'Network',
    badge: 'Infrastructure',
    category: 'commercial',
  },
  {
    id: 'residential-cctv',
    title: 'Residential Security Camera Installation',
    slug: '/residential-security-camera-installation-fort-worth',
    description: 'Pro-grade home security camera systems with concealed soffit wiring, crystal-clear 4K infrared night vision, and mobile phone live access.',
    iconName: 'Home',
    badge: 'Home Protection',
    category: 'residential',
  },
  {
    id: 'tv-mounting',
    title: 'Commercial TV & Display Mounting',
    slug: '/tv-wall-mounting-installation-fort-worth',
    description: 'Heavy-duty commercial TV wall and ceiling mounting for conference rooms, restaurant menu boards, lobby displays, and sports bars.',
    iconName: 'Tv',
    badge: 'Audio/Visual',
    category: 'both',
  },
  {
    id: 'ring-doorbell',
    title: 'Video Doorbell & Smart Access',
    slug: '/ring-video-doorbell-installation-fort-worth',
    description: 'Hardwired Ring and PoE video doorbell installation providing instant motion notifications, 2-way audio, and front entry monitoring.',
    iconName: 'Bell',
    badge: 'Smart Access',
    category: 'residential',
  },
  {
    id: 'business-comm',
    title: 'Business VoIP & Telecom Systems',
    slug: '/business-communications-fort-worth',
    description: 'Cloud-based business phone systems, SIP trunking, overhead paging, door intercoms, and unified office communications.',
    iconName: 'PhoneCall',
    badge: 'Telecom',
    category: 'commercial',
  },
  {
    id: 'web-design',
    title: 'Business Website Design & Local SEO',
    slug: '/business-website-design-fort-worth',
    description: 'High-performing, mobile-optimized business websites designed for Fort Worth businesses to maximize local Google search rankings.',
    iconName: 'Globe',
    badge: 'Digital Marketing',
    category: 'commercial',
  },
  {
    id: 'fort-worth-cctv',
    title: 'Fort Worth Camera Installation Hub',
    slug: '/fort-worth-security-camera-system-installation',
    description: 'Dedicated Fort Worth local security camera installers serving Tarrant County businesses and homeowners with expert 4K CCTV.',
    iconName: 'ShieldCheck',
    badge: 'Local Service',
    category: 'both',
  }
];

export function getRelatedServicesForIndustry(industry: IndustryPageInfo): ServiceRegistryItem[] {
  const cat = industry.category ? industry.category.toLowerCase() : '';
  const slug = industry.slug ? industry.slug.toLowerCase() : '';

  if (cat.includes('residential') || slug.includes('home') || slug.includes('apartment') || slug.includes('condo') || slug.includes('vacation') || slug.includes('estate')) {
    return [
      SERVICE_REGISTRY.find((s) => s.id === 'residential-cctv')!,
      SERVICE_REGISTRY.find((s) => s.id === 'ring-doorbell')!,
      SERVICE_REGISTRY.find((s) => s.id === 'tv-mounting')!,
    ];
  }

  if (cat.includes('industrial') || cat.includes('automotive') || slug.includes('warehouse') || slug.includes('construction')) {
    return [
      SERVICE_REGISTRY.find((s) => s.id === 'commercial-cctv')!,
      SERVICE_REGISTRY.find((s) => s.id === 'network-cabling')!,
      SERVICE_REGISTRY.find((s) => s.id === 'fort-worth-cctv')!,
    ];
  }

  if (cat.includes('hospitality') || cat.includes('retail') || cat.includes('corporate') || cat.includes('financial') || cat.includes('healthcare') || cat.includes('education') || cat.includes('faith')) {
    return [
      SERVICE_REGISTRY.find((s) => s.id === 'commercial-cctv')!,
      SERVICE_REGISTRY.find((s) => s.id === 'network-cabling')!,
      SERVICE_REGISTRY.find((s) => s.id === 'business-comm')!,
    ];
  }

  return [
    SERVICE_REGISTRY.find((s) => s.id === 'commercial-cctv')!,
    SERVICE_REGISTRY.find((s) => s.id === 'network-cabling')!,
    SERVICE_REGISTRY.find((s) => s.id === 'fort-worth-cctv')!,
  ];
}

