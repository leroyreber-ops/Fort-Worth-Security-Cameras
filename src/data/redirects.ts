export interface RedirectRule {
  source: string;
  destination: string;
  type: 301 | 302;
  description: string;
}

/**
 * Mappings of legacy, crawled, or variation URLs to their current canonical paths.
 * Prevents 404 errors, protects SEO link equity, and ensures smooth crawler navigation.
 * For all other routes in the SPA, the client-side router will handle the path.
 */
export class Redirects {
  static readonly MAP: Record<string, string> = {
    // Legacy / Alternative Page Mappings
    '/index.html': '/',
    '/index.php': '/',
    '/home': '/',
    '/services': '/',
    '/services/': '/',
    '/contact': '/free-security-camera-quote-fort-worth',
    '/contact-us': '/free-security-camera-quote-fort-worth',
    '/quote': '/free-security-camera-quote-fort-worth',
    '/get-quote': '/free-security-camera-quote-fort-worth',
    '/free-quote': '/free-security-camera-quote-fort-worth',
    '/about': '/',
    '/about-us': '/',
    '/cities': '/sitemap',
    '/locations': '/sitemap',
    '/service-areas': '/sitemap',
    '/sitemap.html': '/sitemap',
    '/sitemap.xml': '/sitemap.xml',
    '/blog/': '/blog',

    // Legacy platform URLs discovered via Search Console crawl audit (old WordPress/MPG site)
    '/security-camera-installation-fort-worth': '/security-camera-installation-fort-worth-tx',
    '/privacy-policy': '/',
    '/my-account': '/',
    '/shop': '/',
    '/shop-all': '/',
    '/contactus': '/free-security-camera-quote-fort-worth',
    '/2024/03': '/blog',

    // New Dedicated Services Aliases
    '/network-cabling': '/network-cable-installation-fort-worth',
    '/network-cable-runs': '/network-cable-installation-fort-worth',
    '/structured-cabling': '/network-cable-installation-fort-worth',
    '/tv-wall-mounting': '/tv-wall-mounting-installation-fort-worth',
    '/tv-installation': '/tv-wall-mounting-installation-fort-worth',
    '/television-wall-mounting': '/tv-wall-mounting-installation-fort-worth',
    '/business-communications': '/business-communications-fort-worth',
    '/voip-phones': '/business-communications-fort-worth',
    '/business-internet': '/business-communications-fort-worth',
    '/business-website-design': '/business-website-design-fort-worth',
    '/web-design': '/business-website-design-fort-worth',
    '/ring-doorbell': '/ring-video-doorbell-installation-fort-worth',
    '/ring-doorbell-installation': '/ring-video-doorbell-installation-fort-worth',
    '/doorbell-installation': '/ring-video-doorbell-installation-fort-worth',
    '/video-doorbell': '/ring-video-doorbell-installation-fort-worth',

    // Verified Indexed URLs (exact match pass-throughs & normalization)
    '/sitemap': '/sitemap',
    '/sitemap/': '/sitemap',
    '/business-communications-fort-worth': '/business-communications-fort-worth',
    '/business-website-design-fort-worth': '/business-website-design-fort-worth',
    '/ring-video-doorbell-installation-fort-worth': '/ring-video-doorbell-installation-fort-worth',
    '/network-cable-installation-fort-worth': '/network-cable-installation-fort-worth',
    '/tv-wall-mounting-installation-fort-worth': '/tv-wall-mounting-installation-fort-worth',
    '/fort-worth-security-cameras': '/fort-worth-security-cameras',
    '/cctv-installation-fort-worth': '/cctv-installation-fort-worth',
    '/downtown-fort-worth-security-cameras': '/downtown-fort-worth-security-cameras',
    '/vickery-place-security-cameras': '/vickery-place-security-cameras',
    '/altamesa-security-cameras': '/altamesa-security-cameras',
    '/lpr-license-plate-recognition-cameras-in-fort-worth': '/lpr-license-plate-recognition-cameras-in-fort-worth',
    '/hikvision-security-camera-equipment-in-fort-worth': '/hikvision-security-camera-equipment-in-fort-worth',
    '/panoramic-security-cameras-in-fort-worth': '/panoramic-security-cameras-in-fort-worth',
    '/uniview-security-camera-equipment-in-fort-worth': '/uniview-security-camera-equipment-in-fort-worth',

    // Verified Indexed Blog Articles
    '/blog/choosing-best-security-camera-system-fort-worth-homes':
      '/blog/choosing-best-security-camera-system-fort-worth-homes',
    '/blog/fort-worth-neighborhood-security-camera-guide-2026':
      '/blog/fort-worth-neighborhood-security-camera-guide-2026',
    '/blog/security-camera-installation-cost-fort-worth-2026':
      '/blog/security-camera-installation-cost-fort-worth-2026',
    '/blog/top-5-security-camera-myths-debunked':
      '/blog/top-5-security-camera-myths-debunked',
    '/blog/ai-security-person-vehicle-detection-dfw':
      '/blog/ai-security-person-vehicle-detection-dfw',
    '/blog/night-vision-security-cameras-guide-fort-worth':
      '/blog/night-vision-security-cameras-guide-fort-worth',
    '/blog/professional-tv-wall-mounting-importance-fort-worth':
      '/blog/professional-tv-wall-mounting-importance-fort-worth',
    '/blog/protecting-construction-sites-dfw-surveillance':
      '/blog/protecting-construction-sites-dfw-surveillance',
    '/blog/cctv-maintenance-checklist-24-7-reliability':
      '/blog/cctv-maintenance-checklist-24-7-reliability',
    '/blog/hidden-costs-diy-security-camera-installation':
      '/blog/hidden-costs-diy-security-camera-installation'
  };

  /**
   * Optional: a typed list of rules (useful if you convert this to Netlify /_redirects or logging).
   */
  static readonly RULES: RedirectRule[] = [
    {
      source: '/index.html',
      destination: '/',
      type: 301,
      description: 'Legacy index.html to site root'
    },
    {
      source: '/index.php',
      destination: '/',
      type: 301,
      description: 'Legacy index.php to site root'
    },
    // ...you can add more specific rules here if you want metadata per redirect...
    {
      source: '/*',
      destination: '/index.html',
      type: 302,
      description:
        'SPA fallback (used on the server side): unmatched routes go to index.html'
    }
  ];
}

/**
 * Resolves a redirect destination for any incoming request path on the client.
 * Normalizes case, strips query string and fragment, handles trailing slashes.
 * If there is no explicit mapping, returns null so the SPA can use the original path.
 */
export function getRedirectDestination(rawPath: string): string | null {
  if (!rawPath) return null;

  // Extract path without query parameters or fragment
  let cleanPath = rawPath.split('?')[0].split('#')[0];
  if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
    try {
      cleanPath = new URL(cleanPath).pathname;
    } catch {
      // ignore, use cleanPath as-is
    }
  }

  // Normalize path to lowercase
  const lowerPath = cleanPath.toLowerCase();

  // Direct map check
  if (Redirects.MAP[lowerPath]) {
    const destination = Redirects.MAP[lowerPath];

    // If destination is different, redirect there (alias -> canonical slug)
    // If destination is the same slug, let the app render it directly.
    if (destination !== lowerPath) {
      return destination;
    }

    return null;
  }

  // Handle trailing slash normalization (e.g. /contact/ -> /free-security-camera-quote-fort-worth)
  if (lowerPath.endsWith('/') && lowerPath.length > 1) {
    const trimmedPath = lowerPath.slice(0, -1);
    if (Redirects.MAP[trimmedPath]) {
      const destination = Redirects.MAP[trimmedPath];

      if (destination !== trimmedPath) {
        return destination;
      }

      return null;
    }
  }

  // No app-level redirect; keep the original path so the SPA router can match it.
  return null;
}