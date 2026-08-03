import { getIndustryBySlug } from '../data/industriesData';
import { CATEGORY_HUB_MAPPING } from './breadcrumbs';
import { DFW_CITIES } from '../data/citiesData';
import { TOP_KEYWORDS } from '../data/keywordsData';

export interface PageContextDetails {
  interestArea: string;
  industryName?: string;
  categoryName?: string;
  pageType: 'industry_specific' | 'industry_hub' | 'city' | 'keyword_service' | 'general';
}

export function detectPageInterestArea(pathname?: string): PageContextDetails {
  const currentPath =
    pathname || (typeof window !== 'undefined' ? window.location.pathname : '/');

  const cleanPath = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
  const slug = cleanPath.slice(1).toLowerCase();

  if (!slug || cleanPath === '/') {
    return {
      interestArea: 'General Security Cameras (Fort Worth)',
      pageType: 'general',
    };
  }

  // 1. Check if it's an industry-specific page (100+ pages)
  const industry = getIndustryBySlug(slug);
  if (industry) {
    const category = industry.category || 'Commercial Security';
    const name = industry.name || industry.title;
    return {
      interestArea: `${name} (${category})`,
      industryName: name,
      categoryName: category,
      pageType: 'industry_specific',
    };
  }

  // 2. Check if it's an Industry Category Hub Page (e.g. /retail-security-cameras)
  for (const catName of Object.keys(CATEGORY_HUB_MAPPING)) {
    const cat = CATEGORY_HUB_MAPPING[catName];
    if (cleanPath === cat.path) {
      return {
        interestArea: `${cat.label} (${catName})`,
        categoryName: catName,
        pageType: 'industry_hub',
      };
    }
  }

  if (cleanPath === '/security-cameras-by-industry') {
    return {
      interestArea: 'Security Cameras by Industry Hub',
      pageType: 'industry_hub',
    };
  }

  // 3. Check Keyword / Service Landing Pages
  const kw = TOP_KEYWORDS.find((k) => `/${k.slug}` === cleanPath);
  if (kw) {
    return {
      interestArea: kw.h1 || kw.term,
      pageType: 'keyword_service',
    };
  }

  // 4. Check City Landing Pages
  const city = DFW_CITIES.find((c) => `/${c.slug}` === cleanPath);
  if (city) {
    return {
      interestArea: `${city.cityName}, TX Local Security Cameras`,
      pageType: 'city',
    };
  }

  // 5. Core Services Static Paths
  if (cleanPath.includes('commercial')) {
    return { interestArea: 'Commercial Security Camera Systems', pageType: 'keyword_service' };
  }
  if (cleanPath.includes('residential')) {
    return { interestArea: 'Residential Security Camera Systems', pageType: 'keyword_service' };
  }
  if (cleanPath.includes('network-cable') || cleanPath.includes('cabling')) {
    return { interestArea: 'Structured Network Cabling', pageType: 'keyword_service' };
  }
  if (cleanPath.includes('tv-wall') || cleanPath.includes('tv-mounting')) {
    return { interestArea: 'TV Wall Mounting & Display Setup', pageType: 'keyword_service' };
  }
  if (cleanPath.includes('ring-video') || cleanPath.includes('ring-doorbell')) {
    return { interestArea: 'Ring Video Doorbell Installation', pageType: 'keyword_service' };
  }
  if (cleanPath.includes('business-communications')) {
    return { interestArea: 'Business Telecom & Phone Systems', pageType: 'keyword_service' };
  }
  if (cleanPath.includes('business-website')) {
    return { interestArea: 'Business Website Design', pageType: 'keyword_service' };
  }

  // Fallback formatted slug
  const formattedSlug = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    interestArea: formattedSlug,
    pageType: 'general',
  };
}
