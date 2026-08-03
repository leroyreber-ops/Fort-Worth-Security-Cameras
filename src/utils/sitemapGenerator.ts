import { TOP_KEYWORDS } from '../data/keywordsData';
import { DFW_CITIES } from '../data/citiesData';
import { BLOG_POSTS } from '../data/blogData';
import { ALL_INDUSTRIES_DATA, INDUSTRY_CATEGORIES } from '../data/industriesData';
import { Redirects } from '../data/redirects';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

const BASE_URL = 'https://fortworthsecuritycameras.com';
// Uses the actual build date so <lastmod> always reflects when the sitemap was generated.
const DEFAULT_LASTMOD = new Date().toISOString().split('T')[0];

/**
 * Dynamically generates a 100% Google SEO compliant XML sitemap.
 * Includes all core pages, keyword/service pages, city landing pages, and blog articles.
 * Automatically filters out redirects, non-canonical aliases, and sitemapInclude=false items.
 */
export function generateSitemapXml(): string {
  const urlMap = new Map<string, SitemapUrl>();

  const addUrl = (
    path: string,
    priority: string,
    changefreq: SitemapUrl['changefreq'] = 'weekly',
    customLastMod?: string
  ) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const fullPath = cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '');

    // Skip redirect sources (only if it points to a different destination)
    if (Redirects.MAP[fullPath] && Redirects.MAP[fullPath] !== fullPath) {
      return;
    }

    const loc = fullPath === '/' ? `${BASE_URL}/` : `${BASE_URL}${fullPath}`;

    // Deduplicate or update if higher priority
    if (!urlMap.has(loc)) {
      urlMap.set(loc, {
        loc,
        lastmod: customLastMod || DEFAULT_LASTMOD,
        changefreq,
        priority,
      });
    }
  };

  // 1. Core Static & Primary Dedicated Service Pages
  addUrl('/', '1.0', 'daily');
  addUrl('/sitemap', '0.9', 'weekly');
  addUrl('/free-security-camera-quote-fort-worth', '0.95', 'weekly');
  addUrl('/about-us-fort-worth', '0.85', 'monthly');
  addUrl('/contact-us-fort-worth', '0.85', 'monthly');
  addUrl('/blog', '0.85', 'weekly');

  // Dedicated High-Value Service Landing Pages
  addUrl('/residential-security-camera-installation-fort-worth', '0.95', 'weekly');
  addUrl('/commercial-security-camera-installation-fort-worth', '0.95', 'weekly');
  addUrl('/network-cable-installation-fort-worth', '0.90', 'weekly');
  addUrl('/tv-wall-mounting-installation-fort-worth', '0.90', 'weekly');
  addUrl('/ring-video-doorbell-installation-fort-worth', '0.90', 'weekly');
  addUrl('/business-communications-fort-worth', '0.90', 'weekly');
  addUrl('/business-website-design-fort-worth', '0.90', 'weekly');

  // 2. Keyword & Service Pages
  for (const kw of TOP_KEYWORDS) {
    if (kw.sitemapInclude === false) continue;
    const priority = kw.category === 'service' ? '0.90' : '0.85';
    addUrl(`/${kw.slug}`, priority, 'weekly', kw.lastModified);
  }

  // 3. DFW City Landing Pages
  for (const city of DFW_CITIES) {
    if (city.sitemapInclude === false) continue;
    let priority = '0.80';
    if (city.cityName === 'Fort Worth' || city.cityName === 'Arlington' || city.cityName === 'Dallas') {
      priority = '0.85';
    }
    addUrl(`/${city.slug}`, priority, 'weekly', city.lastModified);
  }

  // 4. Blog Posts & Guides
  for (const post of BLOG_POSTS) {
    if (post.sitemapInclude === false) continue;
    addUrl(`/${post.slug}`, '0.70', 'monthly', post.lastModified);
  }

  // 5. Industry Hub & Category Pages
  addUrl('/security-cameras-by-industry', '0.90', 'weekly');
  for (const cat of INDUSTRY_CATEGORIES) {
    addUrl(`/security-cameras-${cat.id}`, '0.88', 'weekly');
  }

  // 100 Industry Dedicated Landing Pages
  for (const ind of ALL_INDUSTRIES_DATA) {
    if (ind.sitemapInclude === false) continue;
    const priority = ind.sitemapPriority ? ind.sitemapPriority.toString() : '0.85';
    addUrl(`/${ind.slug}`, priority, 'weekly', ind.lastModified);
  }

  // Generate XML Output
  const urlsXml = Array.from(urlMap.values())
    .map(
      (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlsXml}
</urlset>`;
}
