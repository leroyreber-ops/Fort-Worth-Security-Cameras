export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generates Google-compliant FAQPage JSON-LD structured data.
 */
export function generateFAQSchema(faqs: FAQItem[], title?: string) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(title ? { name: title } : {}),
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates BreadcrumbList JSON-LD structured data.
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  if (!items || items.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://fortworthsecuritycameras.com${item.url.startsWith('/') ? '' : '/'}${item.url}`,
    })),
  };
}
