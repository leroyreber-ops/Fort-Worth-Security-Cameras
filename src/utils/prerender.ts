/**
 * Build-time static HTML prerender for crawlers.
 *
 * This app is a client-rendered SPA (no SSR). Historically every route served
 * the exact same generic <title>/<meta>/canonical from index.html until React
 * hydrated and SEOHead's useEffect ran client-side. That meant the FIRST HTML
 * response Googlebot (and every other crawler / social scraper) saw was
 * identical across all 69 URLs.
 *
 * This script runs after `vite build` and writes a static HTML file for every
 * canonical URL (same list used to generate sitemap.xml), each with the
 * correct <title>, meta description, canonical link, Open Graph/Twitter tags,
 * and a JSON-LD LocalBusiness/Service block already baked into the raw HTML.
 * It also server-renders <App> for each route and bakes the resulting markup
 * into <div id="root">, so the body a crawler sees without executing JS is the
 * real page rather than an empty container. The bundled JS/CSS tags are left
 * untouched; main.tsx hydrates that markup, so the SPA behaves exactly as
 * before for real visitors and in-app navigation.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import App from '../App';
import { TOP_KEYWORDS } from '../data/keywordsData';
import { DFW_CITIES } from '../data/citiesData';
import { BLOG_POSTS } from '../data/blogData';
import { ALL_INDUSTRIES_DATA } from '../data/industriesData';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../../dist');
const BASE_URL = 'https://fortworthsecuritycameras.com';
const OG_IMAGE = `${BASE_URL}/og-image-fort-worth-security.jpg`;
const PHONE = '817-231-2962';

interface RouteMeta {
  path: string; // e.g. "/about-us-fort-worth" or "/" for home
  title: string;
  description: string;
  schema?: object;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function localBusinessSchema(overrides: Partial<Record<string, unknown>> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${BASE_URL}/#business`,
    name: 'Fort Worth Security Cameras',
    alternateName: 'DFW Wholesale Security',
    telephone: '+18172312962',
    url: BASE_URL,
    image: OG_IMAGE,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2203 8th Ave',
      addressLocality: 'Fort Worth',
      addressRegion: 'TX',
      postalCode: '76110',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 32.7555, longitude: -97.3308 },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '31',
      bestRating: '5',
      worstRating: '1',
    },
    ...overrides,
  };
}

// Static / fixed routes not driven by a shared data array.
const STATIC_ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: 'Fort Worth Security Camera Installation | Fort Worth Security Cameras',
    description:
      'Fort Worth security camera installation for homes and businesses. 4K PoE IP cameras, CCTV, NVR recording and remote viewing. Free estimates: (817) 231-2962.',
    schema: localBusinessSchema(),
  },
  {
    path: '/about-us-fort-worth',
    title: 'About Fort Worth Security Cameras | Licensed Security Camera Installation in DFW (B13764)',
    description:
      'Learn about Fort Worth Security Cameras, our Fort Worth office at 2203 8th Ave, nearly 19 years in business, and licensed installation partner Jericho Security and Sound (Texas Class B License B13764) for professional security camera installation.',
  },
  {
    path: '/contact-us-fort-worth',
    title: 'Contact Fort Worth Security Cameras | (817) 231-2962 | Free Estimate',
    description:
      'Contact licensed Fort Worth security camera technicians at 2203 8th Ave, Fort Worth, TX 76110. Call (817) 231-2962 or request a free itemized estimate for residential and commercial CCTV and low-voltage installation.',
  },
  {
    path: '/free-security-camera-quote-fort-worth',
    title: 'Free Fort Worth Security Camera Quote | 4K CCTV & Installation Pricing',
    description:
      'Get a free Fort Worth security camera quote for 4K CCTV installation, IP cameras, Ring doorbells, TV mounting, network cabling, business communications, and web design. Fast local response from 2203 8th Ave, Fort Worth, TX 76110.',
  },
  {
    path: '/blog',
    title: 'Fort Worth Security Camera Blog | Service Guides & DFW CCTV News',
    description:
      'Fort Worth security camera blog with expert CCTV installation guides, cost breakdowns, service deep-dives, DFW crime prevention tips, and IP camera tutorials.',
  },
  {
    path: '/sitemap',
    title: 'Sitemap | Fort Worth Security Cameras',
    description:
      'Full sitemap of Fort Worth Security Cameras — browse all service pages, city landing pages, and blog guides for security camera and CCTV installation across the DFW Metroplex.',
  },
  {
    path: '/residential-security-camera-installation-fort-worth',
    title: 'Residential Security Camera Installation Fort Worth | 4K Home CCTV',
    description:
      'Residential security camera installation in Fort Worth and nearby Tarrant County. 4K PoE cameras, hidden Cat6 wiring, local NVRs. Call 817-231-2962.',
  },
  {
    path: '/commercial-security-camera-installation-fort-worth',
    title: 'Commercial Security Camera Installation Fort Worth | 4K Business CCTV',
    description:
      'Commercial security camera installation in Fort Worth for warehouses, offices and retail. 4K PoE CCTV, NVRs and Cat6 cabling. Call 817-231-2962.',
  },
  {
    path: '/network-cable-installation-fort-worth',
    title: 'Network Cable Installation Fort Worth | Cat6 Structured Cabling',
    description:
      'Professional network cable installation in Fort Worth, TX. Cat6/Cat6A structured cabling, server rack patch panels, fiber optic drops, and cable cleanup for homes and offices. Partnered with Jericho Security and Sound (B13764). Call (817) 231-2962.',
  },
  {
    path: '/tv-wall-mounting-installation-fort-worth',
    title: 'TV Wall Mounting Fort Worth | Display Setup & Wire Hiding',
    description:
      'Expert TV wall mounting in Fort Worth, TX. Clean in-wall cable hiding, fireplace brick/stone mounting, soundbar installation, and commercial video displays. Partnered with Jericho Security and Sound (B13764). Call (817) 231-2962.',
  },
  {
    path: '/ring-video-doorbell-installation-fort-worth',
    title: 'Ring Video Doorbell Installation Fort Worth | Smart Doorbell Pro Installer',
    description:
      'Licensed Ring video doorbell installation in Fort Worth, TX. Transformer upgrades (24V 40VA), brick masonry mounting, chime bypasses and app setup for Ring, Nest and Eufy smart doorbells. Partnered with Jericho Security and Sound (B13764). Call (817) 231-2962.',
  },
  {
    path: '/business-communications-fort-worth',
    title: 'Business Communications Fort Worth | VoIP Phone Systems & Fiber Internet',
    description:
      'Local business communications and telecom solutions in Fort Worth, TX. Cloud VoIP business phone systems, AT&T / Spectrum / Comcast fiber internet sourcing, overhead paging and door intercoms. Partnered with Jericho Security and Sound (B13764). Call (817) 231-2962.',
  },
  {
    path: '/business-website-design-fort-worth',
    title: 'Fort Worth Web Design | Business Website Design & Local SEO',
    description:
      'Local Fort Worth web design and business website development. Custom mobile-first websites, Google Maps SEO, fast hosting and lead generation for contractors, trades and service companies. Call (817) 231-2962.',
  },
];

function buildRouteList(): RouteMeta[] {
  const routes: RouteMeta[] = [...STATIC_ROUTES];
  const seen = new Set(routes.map((r) => r.path));

  for (const kw of TOP_KEYWORDS as any[]) {
    if (kw.sitemapInclude === false) continue;
    const p = `/${kw.slug}`;
    if (seen.has(p)) continue;
    seen.add(p);
    routes.push({
      path: p,
      title: kw.title,
      description: kw.metaDescription,
    });
  }

  for (const city of DFW_CITIES as any[]) {
    if (city.sitemapInclude === false) continue;
    const p = `/${city.slug}`;
    if (seen.has(p)) continue;
    seen.add(p);
    const title =
      city.metaTitle ||
      `${city.heroH1 || `Security Camera Installation ${city.cityName} TX`} | 4K CCTV Installers`;
    const description =
      city.metaDescription ||
      `Professional security camera & CCTV installation in ${city.cityName}, TX (${city.county}). 4K PoE cameras, local NVR recording, hidden Cat6 wiring. Call 817-231-2962.`;
    routes.push({ path: p, title, description });
  }

  for (const post of BLOG_POSTS as any[]) {
    if (post.sitemapInclude === false) continue;
    const p = `/${post.slug}`;
    if (seen.has(p)) continue;
    seen.add(p);
    routes.push({
      path: p,
      title: post.title,
      description: post.metaDescription,
    });
  }

  for (const ind of ALL_INDUSTRIES_DATA as any[]) {
    if (ind.sitemapInclude === false) continue;
    const p = `/${ind.slug}`;
    if (seen.has(p)) continue;
    seen.add(p);
    routes.push({
      path: p,
      title: ind.metaTitle || `${ind.h1 || ind.name} | Fort Worth Security Cameras`,
      description: ind.metaDescription || ind.heroSubheadline,
    });
  }

  return routes;
}

function injectHtml(baseHtml: string, route: RouteMeta): string {
  const canonical = route.path === '/' ? `${BASE_URL}/` : `${BASE_URL}${route.path}`;
  const formattedTitle = route.title.includes('Fort Worth')
    ? route.title
    : `${route.title} | Fort Worth Security Cameras`;
  const safeTitle = escapeHtml(formattedTitle);
  const safeDesc = escapeHtml(route.description);

  let html = baseHtml;

  // Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${safeTitle}</title>`);

  // Meta description
  if (/<meta\s+name=["']description["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<meta\s+name=["']description["'][^>]*>/i,
      `<meta name="description" content="${safeDesc}" />`
    );
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${safeDesc}" />\n</head>`);
  }

  // Canonical
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<link\s+rel=["']canonical["'][^>]*>/i,
      `<link rel="canonical" href="${canonical}" />`
    );
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${canonical}" />\n</head>`);
  }

  // Open Graph + Twitter tags (replace if present, else append before </head>)
  const ogTags = `  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:title" content="${safeTitle}" />
  <meta property="og:description" content="${safeDesc}" />
  <meta property="og:site_name" content="Fort Worth Security Cameras" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${canonical}" />
  <meta name="twitter:title" content="${safeTitle}" />
  <meta name="twitter:description" content="${safeDesc}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />`;

  html = html.replace(/<meta property="og:[^"]*"[^>]*>\n?/gi, '');
  html = html.replace(/<meta name="twitter:[^"]*"[^>]*>\n?/gi, '');
  html = html.replace('</head>', `${ogTags}\n</head>`);

  // JSON-LD (prerendered fallback for crawlers; client JS still injects/overwrites its own richer schema on hydration)
  const schema = route.schema || localBusinessSchema({ description: route.description, url: canonical });
  html = html.replace(
    '</head>',
    `  <script type="application/ld+json" id="prerendered-schema">${JSON.stringify(schema)}</script>\n</head>`
  );

  return html;
}

/**
 * Render <App> to a complete HTML string for a given route.
 *
 * The page body lives behind App's <Suspense> boundary. Once the stream passes
 * `progressiveChunkSize` (12.8KB by default) React stops inlining that boundary
 * and instead emits the fallback plus a trailing `<div hidden>` payload that
 * only a JS-executing crawler would ever see — useless for our purpose. Every
 * page here is far bigger than that, so we raise the threshold above any
 * realistic page weight to force fully inlined markup.
 */
const PROGRESSIVE_CHUNK_SIZE = 100_000_000;

async function renderRouteBody(routePath: string): Promise<string> {
  let renderError: unknown;
  const { prelude } = await prerenderToNodeStream(
    React.createElement(App, { initialPath: routePath }),
    {
      progressiveChunkSize: PROGRESSIVE_CHUNK_SIZE,
      onError(error) {
        renderError = error;
      },
    }
  );
  if (renderError) throw renderError;

  const chunks: Buffer[] = [];
  for await (const chunk of prelude) chunks.push(Buffer.from(chunk));
  const body = Buffer.concat(chunks).toString('utf-8');

  if (body.includes('<template id="B:0">')) {
    throw new Error(`[PRERENDER] ${routePath} emitted a deferred Suspense boundary instead of inline HTML.`);
  }
  return body;
}

const ROOT_CONTAINER_RE = /(<div id="root">)[\s\S]*(<\/div>\s*<\/body>)/;

function injectBody(html: string, body: string): string {
  if (!ROOT_CONTAINER_RE.test(html)) {
    throw new Error('[PRERENDER] Could not find <div id="root"> in dist/index.html.');
  }
  // Function replacement so `$&`/`$1` sequences inside rendered copy stay literal.
  return html.replace(ROOT_CONTAINER_RE, (_m, open: string, close: string) => `${open}${body}${close}`);
}

async function main() {
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('[PRERENDER] dist/index.html not found — run `vite build` first.');
    process.exit(1);
  }
  const baseHtml = fs.readFileSync(indexPath, 'utf-8');
  const routes = buildRouteList();

  let written = 0;
  for (const route of routes) {
    const html = injectBody(injectHtml(baseHtml, route), await renderRouteBody(route.path));
    if (route.path === '/') {
      fs.writeFileSync(indexPath, html, 'utf-8');
      written++;
      continue;
    }
    const outDir = path.join(DIST_DIR, route.path.replace(/^\//, ''));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
    written++;
  }

  console.log(`[PRERENDER] Wrote per-route static HTML for ${written} routes into dist/.`);
}

main().catch((err) => {
  console.error('[PRERENDER] Failed:', err);
  process.exit(1);
});
