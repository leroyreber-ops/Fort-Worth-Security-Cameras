export interface KeywordPageInfo {
  slug: string;
  keyword: string;
  h1: string;
  title: string;
  metaDescription: string;
  category: 'primary' | 'service' | 'feature' | 'type';
  heroHeadline: string;
  heroSubheadline: string;
  keyBenefits: string[];
  faqs: { question: string; answer: string }[];
  overviewContent: string;
  technicalSpecs: { title: string; detail: string }[];
  // Optional sitemap controls
  lastModified?: string;
  sitemapInclude?: boolean;
  sitemapPriority?: number; // 0.0 – 1.0
}

export interface CityInfo {
  slug: string;
  cityName: string;
  county: string;
  population: string;
  lat: number;
  lng: number;
  description: string;
  highlights: string[];
  zipCodes: string[];
  neighborhoods: string[];
  historicalContext: string;
  architecturalDetails: string;
  crimeContext: string;
  regulations: string;
  commercialHubs: string[];
  faqs: { question: string; answer: string }[];
  heroImage?: string;
  galleryImages?: {
    rightCard?: string;
    gallery1?: string;
    gallery2?: string;
    gallery3?: string;
    gallery4?: string;
  };
  // Extended unique content fields for SEO & 100% unique city pages
  metaTitle?: string;
  metaDescription?: string;
  localOverview?: string;
  residentialSolutions?: string;
  commercialSolutions?: string;
  localCaseStudy?: {
    title: string;
    location: string;
    challenge: string;
    solution: string;
    result: string;
  };
  installationProcessSteps?: {
    step: string;
    title: string;
    detail: string;
  }[];
  localPricingContext?: string;
  localTestimonials?: {
    quote: string;
    author: string;
    location: string;
    rating: number;
    projectType: string;
  }[];
  // Custom SEO Headings & Subheadings for 100% Unique Page Architecture
  heroH1?: string;
  heroSubheadline?: string;
  section2H2?: string;
  solutionsH2?: string;
  processH2?: string;
  packagesH2?: string;
  faqH2?: string;
  // Freshness + sitemap
  lastModified?: string; // ISO date string, e.g. "2026-07-25"
  sitemapInclude?: boolean;
  sitemapPriority?: number; // 0.0 – 1.0
}

export interface ServiceInfo {
  slug: string;
  title: string;
  h1: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  useCases: string[];
  // Optional sitemap controls
  sitemapInclude?: boolean;
  sitemapPriority?: number; // 0.0 – 1.0
}

export interface IndustryInfo {
  slug: string;
  name: string;
  description: string;
  recommendedSetup: string;
  keyConcerns: string[];
  // Optional sitemap controls
  sitemapInclude?: boolean;
  sitemapPriority?: number; // 0.0 – 1.0
}

export interface IndustryPageInfo {
  slug: string;
  name: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubheadline: string;
  title?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  whyNeedsCameras: string;
  commonRisks: { title: string; desc: string }[];
  bestPlacements: { location: string; desc: string }[];
  recommendedFeatures: { feature: string; desc: string }[];
  whyProfessionalInstall: string;
  fortWorthRelevance: string;
  faqs: { question: string; answer: string }[];
  imageGuidance: string;
  imageUrl?: string;
  heroImage?: string;
  canonicalUrl?: string;
  lastModified?: string;
  sitemapInclude?: boolean;
  sitemapPriority?: number;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  serviceType: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyType: 'home' | 'business' | 'commercial' | 'industrial';
  cameraCount: number;
  preferredType: string;
  resolution?: '4K' | '2K';
  addDvrLockBox?: boolean;
  addRingDoorbell?: boolean;
  city: string;
  address?: string;
  comments: string;
  contactMethod: 'text' | 'call' | 'email';
  interestArea?: string;
  industryName?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  publishDate: string;
  lastModified?: string; // ISO date string for schema / sitemap
  author: string;
  readTime: string;
  category: string;
  summary: string;
  heroImage: string;
  heroImageAlt: string;
  targetServicePath?: string;
  targetServiceName?: string;
  targetCityPath?: string;
  targetCityName?: string;
  sections: {
    heading: string;
    content: string[];
  }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs?: string[];
  // Optional sitemap controls
  sitemapInclude?: boolean;
  sitemapPriority?: number; // 0.0 – 1.0
}