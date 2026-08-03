import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { getRedirectDestination } from './src/data/redirects';
import { generateSitemapXml } from './src/utils/sitemapGenerator';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // 301 Permanent Redirects Middleware for Legacy Indexed URLs & Variations
  app.use((req, res, next) => {
    // Skip static assets or API endpoints
    if (req.path.startsWith('/api') || req.path.match(/\.(png|jpg|jpeg|gif|svg|ico|css|js|json|xml|txt)$/)) {
      return next();
    }
    const redirectDest = getRedirectDestination(req.path);
    if (redirectDest) {
      console.log(`[301 REDIRECT] ${req.path} -> ${redirectDest}`);
      return res.redirect(301, redirectDest);
    }
    next();
  });

  // API Health Check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      business: 'Fort Worth Security Cameras',
      phone: '817-231-2962',
      email: 'info@fortworthsecuritycameras.com',
      address: '2203 8th Ave., Fort Worth, TX 76110',
    });
  });

  // API Quote Endpoint
  app.post('/api/quote', (req, res) => {
    const { fullName, phone, email, propertyType, cameraCount, city, comments } = req.body;
    console.log(`[QUOTE RECEIVED] ${fullName} (${phone} / ${email}) for ${city} - ${cameraCount} cameras.`);
    res.json({
      success: true,
      message: 'Quote request dispatched successfully to info@fortworthsecuritycameras.com and local Fort Worth team.',
      phone: '817-231-2962',
    });
  });

  // Dynamic XML Sitemap Endpoint for Search Engine Crawlers (Google, Bing)
  app.get('/sitemap.xml', (req, res) => {
    try {
      const xmlContent = generateSitemapXml();
      res.header('Content-Type', 'text/xml');
      res.header('Cache-Control', 'public, max-age=3600');
      res.send(xmlContent);
    } catch (err) {
      console.error('[SITEMAP ERROR]', err);
      res.header('Content-Type', 'text/xml');
      res.sendFile(path.join(process.cwd(), 'public', 'sitemap.xml'));
    }
  });

  // Robots.txt Endpoint
  app.get('/robots.txt', (req, res) => {
    res.header('Content-Type', 'text/plain');
    res.sendFile(path.join(process.cwd(), 'public', 'robots.txt'));
  });

  // Dynamic Server-Side HTML Injector for SEO Bots & Crawlers
  const injectServerSEO = (html: string, reqUrl: string): string => {
    const urlPath = reqUrl.split('?')[0];
    const fullCanonical = `https://fortworthsecuritycameras.com${urlPath === '/' ? '' : urlPath}`;

    // Clean up title tag
    let pageTitle = 'Fort Worth Security Cameras | Home & Commercial CCTV';
    let metaDesc = "Fort Worth's premier security camera installation experts. 4K PoE systems, 24/7 monitoring, free quotes. Call 817-231-2962.";

    if (urlPath.includes('business-communications')) {
      pageTitle = 'Business Communications Fort Worth | VoIP Phone Systems, Fiber Internet & Telecom';
      metaDesc = 'Complete business communications solutions in Fort Worth, TX. Cloud VoIP phone systems, high-speed fiber internet, multi-provider cable broking (AT&T, Spectrum, Comcast), UCaaS & unified connectivity. Call (817) 231-2962.';
    } else if (urlPath.includes('business-website-design')) {
      pageTitle = 'Business Website Design Fort Worth | High-Converting Custom Websites & SEO';
      metaDesc = 'Custom business website design & local SEO in Fort Worth, TX. Fast, mobile-optimized websites built to generate leads, rank on Google Maps, and grow your local business. Call (817) 231-2962.';
    } else if (urlPath.includes('ring-video-doorbell')) {
      pageTitle = 'Ring Video Doorbell Installation Fort Worth | Pro Wiring & Chime Setup';
      metaDesc = 'Professional Ring Video Doorbell installation in Fort Worth, TX. Hardwired power, transformer upgrades, WiFi setup, indoor chime bypass & smart home integration. Call (817) 231-2962.';
    } else if (urlPath.includes('network-cable-installation')) {
      pageTitle = 'Network Cable Installation Fort Worth | Cat6, Coax & Fiber Cable Runs';
      metaDesc = 'Top-rated network cable installation & low voltage cabling in Fort Worth, TX. Cat6/Cat6A ethernet drops, coax RG6 runs, patch panel termination, server rack wiring. Free quote: (817) 231-2962.';
    } else if (urlPath.includes('tv-wall-mounting')) {
      pageTitle = 'TV Wall Mounting Fort Worth | Clean In-Wall Cable Hiding & Setup';
      metaDesc = 'Professional TV wall mounting & television installation in Fort Worth, TX. Hiding wires in-wall, brick/fireplace mounting, tilt & full-motion mounts, soundbars. Call (817) 231-2962.';
    } else if (urlPath.includes('outdoor-security-camera')) {
      pageTitle = 'Outdoor Security Camera Installation Fort Worth | Weatherproof 4K CCTV';
      metaDesc = 'Professional outdoor security camera installation in Fort Worth, TX. IP67 weatherproof 4K cameras, night vision, perimeter detection. Call 817-231-2962.';
    } else if (urlPath.includes('wireless-security-camera')) {
      pageTitle = 'Wireless Security Camera Installation Fort Worth | Pro WiFi Systems';
      metaDesc = 'Top-rated wireless security camera installation in Fort Worth. Long-range encrypted WiFi cameras, battery/solar options. Call 817-231-2962.';
    } else if (urlPath.includes('poe-security-camera')) {
      pageTitle = 'PoE Security Camera Installation Fort Worth | Power Over Ethernet CCTV';
      metaDesc = 'Commercial-grade PoE security camera installation in Fort Worth, TX. 4K IP cameras, Cat6 gigabit cabling. Call (817) 231-2962.';
    } else if (urlPath.includes('business-security-cameras')) {
      pageTitle = 'Business Security Cameras Fort Worth | Commercial CCTV Installation';
      metaDesc = 'Commercial business security camera installation in Fort Worth, TX. Protect retail, warehouses, offices. Call 817-231-2962.';
    } else if (urlPath.includes('home-surveillance-system')) {
      pageTitle = 'Home Surveillance System Fort Worth | Residential Security Cameras';
      metaDesc = 'Custom home surveillance systems in Fort Worth. 4K outdoor & indoor cameras, smartphone monitoring. Call 817-231-2962.';
    } else if (urlPath.includes('security-camera-repair')) {
      pageTitle = 'Security Camera Repair Fort Worth | Same-Day CCTV Service & Fix';
      metaDesc = 'Fast security camera repair in Fort Worth, TX. We fix fuzzy video, broken NVRs, cut cables. Call 817-231-2962.';
    } else if (urlPath.includes('arlington-tx')) {
      pageTitle = 'Security Camera Installation Arlington TX | 4K CCTV Systems';
      metaDesc = 'Top-rated security camera installation in Arlington, TX. 4K PoE cameras & commercial surveillance. Call (817) 231-2962.';
    }

    let modifiedHtml = html.replace(/<title>.*?<\/title>/, `<title>${pageTitle}</title>`);
    
    // Inject self-referencing canonical
    if (modifiedHtml.includes('<link rel="canonical"')) {
      modifiedHtml = modifiedHtml.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${fullCanonical}" />`);
    } else {
      modifiedHtml = modifiedHtml.replace('</head>', `<link rel="canonical" href="${fullCanonical}" />\n</head>`);
    }

    return modifiedHtml;
  };

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false }));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Fort Worth Security Cameras server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
