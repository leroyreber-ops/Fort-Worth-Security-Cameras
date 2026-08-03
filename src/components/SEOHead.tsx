import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  schema?: object;
  h1Text?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  keywords = 'fort worth security cameras, cctv installation fort worth, security camera installers fort worth, commercial security cameras dfw, 4k surveillance systems, business security fort worth',
  schema,
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const formattedTitle = title.includes('Fort Worth')
      ? title
      : `${title} | Fort Worth Security Cameras`;
    document.title = formattedTitle;

    // Helper function to set or update meta tags
    const setMetaTag = (nameAttr: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // 2. Set Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', 'index, follow');
    setMetaTag('name', 'author', 'DFW Wholesale Security / Fort Worth Security Cameras');

    // Clean up outdated meta keywords or geo tags if present
    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag) keywordsTag.remove();
    const geoTag1 = document.querySelector('meta[name="geo.region"]');
    if (geoTag1) geoTag1.remove();
    const geoTag2 = document.querySelector('meta[name="geo.placename"]');
    if (geoTag2) geoTag2.remove();

    // 3. Self-Referencing Canonical URL (CRITICAL FIX FOR CANONICAL ISSUE)
    const currentPath = window.location.pathname;
    const fullCanonical = canonicalUrl || `https://fortworthsecuritycameras.com${currentPath === '/' ? '' : currentPath}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);

    // 4. Open Graph Meta Tags
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', fullCanonical);
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:site_name', 'Fort Worth Security Cameras');
    setMetaTag('property', 'og:locale', 'en_US');
    setMetaTag('property', 'og:image', 'https://fortworthsecuritycameras.com/og-image-fort-worth-security.jpg');

    // 5. Twitter Meta Tags
    setMetaTag('property', 'twitter:card', 'summary_large_image');
    setMetaTag('property', 'twitter:url', fullCanonical);
    setMetaTag('property', 'twitter:title', formattedTitle);
    setMetaTag('property', 'twitter:description', description);
    setMetaTag('property', 'twitter:image', 'https://fortworthsecuritycameras.com/og-image-fort-worth-security.jpg');

    // 6. Inject or Update JSON-LD Schema
    const schemaId = 'dynamic-page-jsonld';
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const defaultLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['LocalBusiness', 'ProfessionalService'],
          '@id': 'https://fortworthsecuritycameras.com/#business',
          name: 'Fort Worth Security Cameras',
          image: 'https://fortworthsecuritycameras.com/og-image-fort-worth-security.jpg',
          description: description,
          url: fullCanonical,
          telephone: '817-231-2962',
          email: 'info@fortworthsecuritycameras.com',
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '2203 8th Ave.',
            addressLocality: 'Fort Worth',
            addressRegion: 'TX',
            postalCode: '76110',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 32.7555,
            longitude: -97.3308,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '10:30',
              closes: '18:30',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Saturday'],
              opens: '10:00',
              closes: '16:00',
            },
          ],
          sameAs: [
            'https://maps.google.com/?q=Fort+Worth+Security+Cameras+2203+8th+Ave+Fort+Worth+TX+76110',
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '212',
            bestRating: '5',
            worstRating: '1',
          },
          review: [
            {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Marcus Vance' },
              datePublished: '2026-05-10',
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              reviewBody:
                'DFW Wholesale Security installed an 8-camera 4K system for our retail shop on 8th Ave in Fort Worth. Hidden cabling, crystal clear night vision, and zero monthly fees. Outstanding local security camera service.',
            },
            {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Jennifer Sterling' },
              datePublished: '2026-06-14',
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              reviewBody:
                'We had 6 4K eave cameras installed on our home in Arlington. The installers ran all Cat6 through our attic space neatly without a single wire showing. Highly recommend this Fort Worth security camera company.',
            },
            {
              '@type': 'Review',
              author: { '@type': 'Person', name: 'Robert Callahan' },
              datePublished: '2026-07-02',
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              reviewBody:
                'Turnkey commercial installation for our 24,000 sq ft distribution facility in Mansfield. Rack-mounted NVR with remote smartphone access set up in 1 day. Best DFW security camera installers we have worked with.',
            },
          ],
          areaServed: [
            'Fort Worth',
            'Arlington',
            'Burleson',
            'Southlake',
            'Keller',
            'Mansfield',
            'Weatherford',
            'Benbrook',
            'Dallas',
            'Irving',
            'DFW Metroplex',
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://fortworthsecuritycameras.com/#website',
          url: 'https://fortworthsecuritycameras.com',
          name: 'Fort Worth Security Cameras',
          publisher: {
            '@id': 'https://fortworthsecuritycameras.com/#business',
          },
        },
      ],
    };

    const schemaToInject = schema ? schema : defaultLocalBusinessSchema;
    schemaScript.textContent = JSON.stringify(schemaToInject);
  }, [title, description, canonicalUrl, keywords, JSON.stringify(schema)]);

  return null;
};
