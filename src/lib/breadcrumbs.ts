import { BreadcrumbItem } from '../components/Breadcrumb';
import { getIndustryBySlug } from '../data/industriesData';
import { DFW_CITIES } from '../data/citiesData';
import { BLOG_POSTS } from '../data/blogData';
import { TOP_KEYWORDS } from '../data/keywordsData';

export const CATEGORY_HUB_MAPPING: Record<string, { path: string; label: string }> = {
  'Retail & Shopping': { path: '/retail-security-cameras', label: 'Retail Security' },
  'Hospitality, Dining & Venues': { path: '/hospitality-security-cameras', label: 'Hospitality Security' },
  'Corporate & Commercial Offices': { path: '/corporate-security-cameras', label: 'Corporate Offices' },
  'Healthcare & Personal Services': { path: '/healthcare-security-cameras', label: 'Healthcare Security' },
  'Education & Childcare': { path: '/education-security-cameras', label: 'Education & Schools' },
  'Faith & Community Nonprofits': { path: '/faith-security-cameras', label: 'Faith & Community' },
  'Industrial, Warehousing & Construction': { path: '/industrial-security-cameras', label: 'Industrial & Warehouses' },
  'Automotive, Fleet & Logistics': { path: '/automotive-security-cameras', label: 'Automotive & Fleet' },
  'Residential & Property Management': { path: '/residential-security-camera-installation-fort-worth', label: 'Residential Security' },
  'Financial, High-Security & Specialized': { path: '/financial-security-cameras', label: 'Financial Security' },
};

export function getDynamicBreadcrumbs(
  pathname: string,
  overrides?: { title?: string; category?: string; categoryPath?: string }
): BreadcrumbItem[] {
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (cleanPath === '/' || cleanPath === '') {
    return [];
  }

  const items: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];

  // 1. Check if it's an Industry Page (100+ pages)
  const slugWithoutSlash = cleanPath.slice(1);
  const industry = getIndustryBySlug(slugWithoutSlash);

  if (industry) {
    items.push({ label: 'Industries', path: '/security-cameras-by-industry' });

    const catInfo = CATEGORY_HUB_MAPPING[industry.category];
    if (catInfo) {
      items.push({ label: catInfo.label, path: catInfo.path });
    } else if (industry.category) {
      items.push({ label: industry.category, path: '/security-cameras-by-industry' });
    }

    items.push({
      label: overrides?.title || industry.name || industry.title,
      path: `/${industry.slug}`,
    });
    return items;
  }

  // 2. Industry Category Hub Pages
  if (cleanPath === '/security-cameras-by-industry') {
    items.push({ label: 'Security Cameras by Industry', path: '/security-cameras-by-industry' });
    return items;
  }

  for (const catName of Object.keys(CATEGORY_HUB_MAPPING)) {
    const cat = CATEGORY_HUB_MAPPING[catName];
    if (cleanPath === cat.path) {
      items.push({ label: 'Industries', path: '/security-cameras-by-industry' });
      items.push({ label: cat.label, path: cat.path });
      return items;
    }
  }

  // 3. Blog pages
  if (cleanPath === '/blog') {
    items.push({ label: 'Blog', path: '/blog' });
    return items;
  }

  if (cleanPath.startsWith('/blog/')) {
    items.push({ label: 'Blog', path: '/blog' });
    const blogSlug = cleanPath.replace('/blog/', '');
    const post = BLOG_POSTS.find((p) => p.slug === blogSlug);
    items.push({
      label: overrides?.title || post?.title || 'Article',
      path: cleanPath,
    });
    return items;
  }

  // 4. City Landing Pages
  const city = DFW_CITIES.find((c) => `/${c.slug}` === cleanPath);
  if (city) {
    items.push({ label: 'Service Areas', path: '/sitemap' });
    items.push({
      label: `${city.cityName}, TX Security Cameras`,
      path: `/${city.slug}`,
    });
    return items;
  }

  // 5. Keyword Landing Pages
  const kw = TOP_KEYWORDS.find((k) => `/${k.slug}` === cleanPath);
  if (kw) {
    items.push({ label: 'Services', path: '/commercial-security-camera-installation-fort-worth' });
    items.push({
      label: overrides?.title || kw.h1 || kw.term,
      path: `/${kw.slug}`,
    });
    return items;
  }

  // 6. Core Static Pages
  const staticPages: Record<string, { label: string; parent?: { label: string; path: string } }> = {
    '/about-us-fort-worth': { label: 'About Us' },
    '/contact-us-fort-worth': { label: 'Contact Us' },
    '/free-security-camera-quote-fort-worth': { label: 'Get Free Quote' },
    '/sitemap': { label: 'HTML Sitemap' },
    '/admin': { label: 'Admin Analytics Dashboard' },
    '/commercial-security-camera-installation-fort-worth': { label: 'Commercial Security Cameras' },
    '/residential-security-camera-installation-fort-worth': { label: 'Residential Security Cameras' },
    '/network-cable-installation-fort-worth': { label: 'Network Cabling Services' },
    '/tv-wall-mounting-installation-fort-worth': { label: 'TV Wall Mounting Services' },
    '/ring-video-doorbell-installation-fort-worth': { label: 'Ring Doorbell Installation' },
    '/business-communications-fort-worth': { label: 'Business Telecom Systems' },
    '/business-website-design-fort-worth': { label: 'Business Website Design' },
    '/security-camera-installation-fort-worth-tx': { label: 'Fort Worth, TX' },
    '/security-camera-installation-burleson-tx': { label: 'Burleson, TX' },
  };

  if (staticPages[cleanPath]) {
    const sp = staticPages[cleanPath];
    if (sp.parent) {
      items.push(sp.parent);
    }
    items.push({ label: overrides?.title || sp.label, path: cleanPath });
    return items;
  }

  // Fallback for any unlisted path
  const formattedLabel = overrides?.title || slugWithoutSlash
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  items.push({ label: formattedLabel || 'Page', path: cleanPath });
  return items;
}
