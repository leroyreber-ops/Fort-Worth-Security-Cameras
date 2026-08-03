import React, { useState } from 'react';
import {
  Shield,
  Camera,
  MapPin,
  Phone,
  CheckCircle2,
  Lock,
  Building2,
  Home,
  Award,
  Wrench,
  Star,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Clock,
  Smartphone,
  Eye,
  Server,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BRAND_ASSETS, SURVEILLANCE_IMAGES } from '../data/imagesData';
import { TOP_KEYWORDS } from '../data/keywordsData';
import { SafeImage } from '../components/SafeImage';
import { CameraCalculator } from '../components/CameraCalculator';
import { InteractiveComparison } from '../components/InteractiveComparison';
import { CityCoverageMap } from '../components/CityCoverageMap';
import { NavLink } from '../components/NavLink';

interface HomePageProps {
  onNavigate?: (path: string) => void;
  onOpenQuoteModal?: (serviceName?: string) => void;
}

const REVIEWS_LIST = [
  {
    id: '1',
    author: 'Marcus Vance',
    location: 'Fort Worth, TX – 8th Ave area',
    rating: 5,
    comment:
      'DFW Wholesale Security installed an 8-camera 4K system for our retail shop on 8th Ave in Fort Worth. Hidden cabling, crystal clear night vision, and zero monthly fees. Outstanding local security camera service.',
  },
  {
    id: '2',
    author: 'Jennifer Sterling',
    location: 'Arlington, TX',
    rating: 5,
    comment:
      'We had 6 4K eave cameras installed on our home in Arlington. The installers ran all Cat6 through our attic space neatly without a single wire showing. Highly recommend this Fort Worth security camera company.',
  },
  {
    id: '3',
    author: 'Robert Callahan',
    location: 'Mansfield, TX',
    rating: 5,
    comment:
      'Turnkey commercial installation for our 24,000 sq ft distribution facility in Mansfield. Rack-mounted NVR with remote smartphone access set up in 1 day. Best DFW security camera installers we have worked with.',
  },
];

// ─────────────────────────────────────────────────────────────
// Structured Data (JSON-LD) — invisible to users, read by
// search engines to understand your local entity and services.
// ─────────────────────────────────────────────────────────────

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://fortworthsecuritycameras.com/#business',
  name: 'Fort Worth Security Cameras',
  alternateName: 'DFW Wholesale Security',
  description:
    'Fort Worth security camera installation company specializing in 4K PoE IP camera systems, CCTV installation, NVR recording, and encrypted remote viewing for homes and businesses across the Dallas–Fort Worth metroplex.',
  url: 'https://fortworthsecuritycameras.com',
  telephone: '+18172312962',
  image: 'https://fortworthsecuritycameras.com/og-image-fort-worth-security.jpg',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2203 8th Ave',
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
  areaServed: [
    { '@type': 'City', name: 'Fort Worth, TX' },
    { '@type': 'City', name: 'Arlington, TX' },
    { '@type': 'City', name: 'Mansfield, TX' },
    { '@type': 'City', name: 'Burleson, TX' },
    { '@type': 'City', name: 'Keller, TX' },
    { '@type': 'City', name: 'Benbrook, TX' },
    { '@type': 'City', name: 'Crowley, TX' },
    { '@type': 'City', name: 'Forest Hill, TX' },
    { '@type': 'City', name: 'Kennedale, TX' },
    { '@type': 'City', name: 'Southlake, TX' },
    { '@type': 'City', name: 'Hurst, TX' },
    { '@type': 'City', name: 'Euless, TX' },
    { '@type': 'City', name: 'Bedford, TX' },
    { '@type': 'City', name: 'Grand Prairie, TX' },
    { '@type': 'City', name: 'Irving, TX' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '31',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Md Ridoy Ahmed' },
      datePublished: '2026-07-24',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'DFW Wholesale Security in Fort Worth, Texas did an outstanding job installing our new security camera system. Their team installed 16 high-quality security cameras across two office locations, gave us great coverage inside and outside the building, and made sure every camera was set up correctly on our recorder.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: "Sportsman's RV Rentals" },
      datePublished: '2026-07-24',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'We were in need of an upgrade to our security system at our RV and Boat Storage facility. Leroy was able to upgrade the entire system and even added a few new cameras for us. We were 100% blown away by his professionalism.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Tracy Anderson' },
      datePublished: '2026-07-02',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        "Leroy is the best tech I've ever met. Detailed oriented, patient and knowledgeable concerning camera/recording equipment. I will definitely recommend this company to all my family and friends!",
    },
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id':
    'https://fortworthsecuritycameras.com/#security-camera-installation',
  name: 'Fort Worth Security Camera Installation',
  serviceType: 'Security Camera Installation',
  category: 'Security System Installation',
  provider: { '@id': 'https://fortworthsecuritycameras.com/#business' },
  areaServed: {
    '@type': 'MetroArea',
    name: 'Dallas–Fort Worth Metroplex',
  },
  description:
    'Professional security camera installation in Fort Worth, TX. We design and install 4K PoE IP camera systems, CCTV, NVR recording, and encrypted remote viewing for residential and commercial properties throughout the DFW metroplex.',
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://fortworthsecuritycameras.com/#breadcrumb',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://fortworthsecuritycameras.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Fort Worth Security Camera Installation',
      item: 'https://fortworthsecuritycameras.com/',
    },
  ],
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://fortworthsecuritycameras.com/#website',
  url: 'https://fortworthsecuritycameras.com',
  name: 'Fort Worth Security Cameras | DFW Wholesale Security',
  description:
    'Fort Worth security camera installation company — 4K PoE IP cameras, CCTV, NVR systems, and encrypted remote viewing for homes and businesses across the Dallas–Fort Worth metroplex.',
  publisher: { '@id': 'https://fortworthsecuritycameras.com/#business' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://fortworthsecuritycameras.com/#homepage',
  url: 'https://fortworthsecuritycameras.com',
  name: 'Fort Worth Security Camera Installation | Fort Worth Security Cameras',
  description:
    'Fort Worth security camera installation for homes and businesses. 4K PoE IP cameras, CCTV, NVR recording and remote viewing. Free estimates: (817) 231-2962.',
  isPartOf: { '@id': 'https://fortworthsecuritycameras.com/#website' },
  breadcrumb: { '@id': 'https://fortworthsecuritycameras.com/#breadcrumb' },
};

const HOMEPAGE_FAQS = [
  {
    question: 'How much does security camera installation cost in Fort Worth, TX?',
    answer:
      'Turnkey 4-camera 4K PoE residential systems in Fort Worth typically range from $1,595 to $1,995. An 8-camera system ranges from $2,995 to $3,495, while 16-camera commercial rack-mount systems range from $5,995 to $6,895. All pricing includes solid copper Cat6 cabling, local NVR recorder, industrial hard drive storage, professional installation, mobile app setup, and a 1-year warranty with $0 monthly fees.',
  },
  {
    question: 'How many security cameras do I need for my home or commercial property?',
    answer:
      'Most Fort Worth single-family homes require 4 to 8 cameras to cover front entryways, driveway/garage approaches, side gates, and backyard patios. Retail stores and professional offices typically require 8 to 12 cameras covering entrance doors, cash registers, stockrooms, and parking areas. Large warehouses or distribution centers often install 16 to 32+ cameras across loading docks, high-bay aisles, and perimeter fencing.',
  },
  {
    question: 'Do you offer free on-site estimates and property walkthroughs in Fort Worth?',
    answer:
      'Yes! We provide 100% free, no-obligation on-site property walkthroughs across Fort Worth, Tarrant County, and the surrounding DFW metroplex. Our technicians assess camera mounting angles, cabling pathways, lighting conditions, and blind spots to provide a detailed, itemized quote.',
  },
  {
    question: 'Are there any monthly subscription fees or cloud storage charges?',
    answer:
      'No. All of our security camera systems record continuously to a local, on-site Network Video Recorder (NVR) with dedicated surveillance hard drives. You own 100% of your equipment and video data with zero recurring monthly cloud fees.',
  },
  {
    question: 'Why choose 4K PoE IP security cameras over wireless battery cameras like Ring or Nest?',
    answer:
      'Wireless battery cameras rely on consumer Wi-Fi which suffers from latency, missed motion events, battery drain in Texas heat, and required monthly cloud fees. Professional 4K Power over Ethernet (PoE) cameras transmit power and uncompressed Ultra HD video over a single solid copper Cat6 cable directly to your NVR, recording 24/7/365 without stopping.',
  },
  {
    question: 'How do you hide the wire runs inside my home or building?',
    answer:
      'Our licensed low-voltage installers specialize in concealed cable routing. We route Cat6 lines through attic crawlspaces, soffits, and interior wall cavities to drop cables cleanly into closets or server racks without leaving exposed loose wires or unsightly exterior conduit on your building facade.',
  },
  {
    question: 'Who performs the security camera installation and low-voltage cabling?',
    answer:
      'All security camera installations and low-voltage electrical work are performed in partnership with licensed Texas contractor Jericho Security and Sound (Texas Class B License Number B13764), ensuring strict compliance with state regulations and local building codes.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOMEPAGE_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const pageTitle =
    'Fort Worth Security Camera Installation | Fort Worth Security Cameras';
  const pageDescription =
    'Fort Worth security camera installation for homes and businesses. 4K PoE IP cameras, CCTV, NVR recording and remote viewing. Free estimates: (817) 231-2962.';

  const handleQuoteClick = (serviceName?: string) => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal(
        serviceName || 'Fort Worth Security Camera Installation',
      );
    } else {
      const el = document.getElementById('quote');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path.startsWith('/') ? path : `/${path}`;
    }
  };

  const featuredKeywords = TOP_KEYWORDS.filter(
    (k) => k.category === 'primary' || k.category === 'service',
  ).slice(0, 9);

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalUrl="https://fortworthsecuritycameras.com"
      />

      {/* ── JSON-LD Structured Data (invisible, powers rich results & Local Pack) ── */}
      <script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />
      <script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
        }}
      />
      <script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="home-page bg-slate-50 text-slate-800 font-sans selection:bg-[#007EFF] selection:text-white pb-16 space-y-12">
        {/* BREADCRUMB TOP BAR MATCHING ARLINGTON CITY PAGE DESIGN */}
        <div className="bg-[#F5F5F5] border-b border-[#E5E5E5] py-3 px-4 text-xs font-semibold text-slate-600">
          <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#007EFF]" />
              <span>DFW Wholesale Security • Fort Worth Security Cameras</span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-emerald-700 font-bold">
                2203 8th Ave Headquarters
              </span>
              <span>•</span>
              <a
                href="tel:18172312962"
                className="text-[#007EFF] font-bold hover:underline"
              >
                Call/Text (817) 231-2962
              </a>
            </div>
          </div>
        </div>

        {/* HERO HEADER – PROFESSIONAL FORT WORTH DESIGN + TRUCK */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 text-white py-12 lg:py-20">
          {/* Background Security Camera Industry Photography */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-85 sm:opacity-90 transition-all duration-700 pointer-events-none animate-kenburns"
            style={{ backgroundImage: `url(${SURVEILLANCE_IMAGES.heroBg.url})` }}
          />
          {/* Balanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20 pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge Row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-bold text-sky-400 backdrop-blur-md">
                  <Shield className="h-4 w-4 text-sky-400" />
                  <span>DFW Wholesale Security • Fort Worth Security Cameras</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-black text-amber-400 backdrop-blur-md">
                  <Award className="h-3.5 w-3.5 text-amber-400" />
                  <span>Licensed Texas Security Professionals</span>
                </div>
              </div>

              {/* Main H1 Title */}
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15] text-shadow-hero">
                Fort Worth Security Camera{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-[#007EFF] to-blue-400">
                  Installation
                </span>{' '}
                for Homes &amp; Businesses
              </h1>

              {/* Intro Paragraph */}
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base lg:text-lg max-w-2xl">
                DFW Wholesale Security designs and installs enterprise-grade 4K
                security camera systems for Fort Worth homes and commercial
                properties. From our office at 2203 8th Ave in Fort Worth, we
                provide complete CCTV and PoE IP camera installation across the
                Dallas–Fort Worth metroplex including Arlington, Mansfield, Burleson,
                Keller, Benbrook, Crowley, Forest Hill, Kennedale and nearby cities.
                Whether you need a few outdoor cameras for a residence or a full
                commercial surveillance system, we handle the entire process — design,
                Cat6 cabling, professional mounting, local NVR recording and encrypted
                remote viewing.
              </p>

              {/* Quick Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm font-semibold text-slate-200">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                  <span>
                    Direct line to your local Fort Worth security camera installation
                    team. Fast response, no call centers.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                  <span>
                    Enterprise-grade 4K PoE IP cameras – dome, turret, PTZ and
                    specialty CCTV hardware tailored to your property.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                  <span>
                    100% private local NVR recording with encrypted hard drives. No
                    monthly cloud subscription fees.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                  <span>
                    Clean, hidden Cat6 cabling routed through attics, soffits and wall
                    cavities – not sloppy hanging cords.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <a
                  href="tel:18172312962"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#007EFF] via-blue-600 to-blue-500 px-6 py-4 text-sm font-black text-white shadow-xl shadow-blue-600/30 hover:from-blue-500 hover:to-blue-400 border border-blue-400/30 transition-all"
                >
                  <Phone className="h-4 w-4 text-white" />
                  <span>
                    Call (817) 231-2962 for a Free Security Camera Installation Quote
                  </span>
                </a>
                <button
                  onClick={() =>
                    handleQuoteClick('Fort Worth Security Camera Installation')
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-sm px-5 py-4 border border-slate-700 transition-all"
                >
                  <span>Request a security camera estimate online</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="sms:18172312962?body=Hello,%20I%20would%20like%20a%20free%20security%20camera%20quote%20in%20Fort%20Worth."
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-5 py-4 transition-all shadow-lg"
                >
                  <MessageSquare className="h-4 w-4 fill-white" />
                  <span>Text Us (817) 231-2962</span>
                </a>
              </div>

              {/* NAP Location Bar */}
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-center gap-2.5 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>DFW Wholesale Security</strong> • 2203 8th Ave, Fort Worth,
                  Texas 76110 – Fort Worth-based security camera installers serving
                  the DFW metroplex.
                </span>
              </div>
            </div>

            {/* Right Column – Official Fort Worth Installation Service Truck Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-lg rounded-3xl border border-slate-800 bg-slate-900/95 p-4 shadow-2xl shadow-black/80 backdrop-blur-md space-y-4">
                {/* Badge Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[12px] font-bold text-slate-200 uppercase tracking-wider">
                      Official Service Fleet
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
                    FORT WORTH DISPATCH
                  </span>
                </div>

                {/* Truck Showcase Image */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group bg-slate-950">
                  <SafeImage
                    src={BRAND_ASSETS.serviceTruck}
                    fallbackSrc={BRAND_ASSETS.serviceTruckFallback}
                    alt="DFW Wholesale Security Fort Worth security camera installation service truck dispatched from 2203 8th Ave"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono font-bold z-10">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-emerald-400 font-black">
                      MOBILE SERVICE RIG
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 font-black">
                      2203 8TH AVE
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-xs font-bold text-white flex items-center justify-between z-10">
                    <span className="bg-slate-950/85 px-2.5 py-1 rounded-md border border-slate-800 text-slate-200">
                      Fort Worth Installation Team
                    </span>
                    <span className="text-amber-400 font-mono text-[11px] bg-slate-950/85 px-2.5 py-1 rounded-md border border-slate-800">
                      Fully Equipped
                    </span>
                  </div>
                </div>

                {/* Two Sub-Cards for Commercial & Residential */}
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-200">
                  <div className="space-y-1 rounded-xl border border-slate-800 bg-slate-950/80 p-3 hover:border-sky-500/50 transition-all">
                    <p className="flex items-center gap-1.5 font-bold text-white">
                      <Building2 className="h-4 w-4 text-sky-400 shrink-0" />
                      <span>Commercial &amp; Industrial</span>
                    </p>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      Warehouses, car lots, churches, retail centers, offices and
                      multi-building campuses secured with complete camera coverage.
                    </p>
                  </div>
                  <div className="space-y-1 rounded-xl border border-slate-800 bg-slate-950/80 p-3 hover:border-sky-500/50 transition-all">
                    <p className="flex items-center gap-1.5 font-bold text-white">
                      <Home className="h-4 w-4 text-sky-400 shrink-0" />
                      <span>Residential Protection</span>
                    </p>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      Driveways, front doors, garages, side yards and back yards
                      protected with clean exterior camera installations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-CARD SECURITY CAMERA CCTV PHOTO SHOWCASE GALLERY */}
        <section className="mx-auto max-w-7xl px-4 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#007EFF] mb-1">
                <Camera className="w-3.5 h-3.5" />
                <span>Enterprise 4K Hardware Gallery</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Turnkey Security Camera Systems &amp; CCTV Technology
              </h2>
            </div>
            <p className="text-xs text-slate-600 max-w-md">
              Commercial-grade 4K PoE IP cameras, local NVR hard drive storage, and
              encrypted mobile app monitoring installed by Fort Worth professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Gallery Card 1 – Residential 4K Camera */}
            <div className="group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                  <SafeImage
                    src={SURVEILLANCE_IMAGES.residential.url}
                    fallbackSrc={SURVEILLANCE_IMAGES.residential.url}
                    alt="Fort Worth home security camera installation with 4K PoE dome cameras mounted on eaves covering driveway and front porch"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-slate-950/90 text-emerald-400 font-mono text-[10px] font-extrabold border border-slate-800">
                    RESIDENTIAL 4K
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-1.5">
                    <Home className="w-4 h-4 text-[#007EFF] shrink-0" />
                    <span>Outdoor Home Security</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clean eave-mounted 4K PoE dome &amp; turret cameras covering
                    driveways, front porches, garages, and backyards.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <NavLink
                  to="/home-surveillance-system-fort-worth"
                  onNavigate={handleNavClick}
                  className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-xs font-bold text-[#007EFF] flex items-center justify-between transition-colors"
                >
                  <span>Explore Home Cameras</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </NavLink>
              </div>
            </div>

            {/* Gallery Card 2 – Commercial CCTV */}
            <div className="group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                  <SafeImage
                    src={SURVEILLANCE_IMAGES.commercial.url}
                    fallbackSrc={SURVEILLANCE_IMAGES.commercial.url}
                    alt="Fort Worth commercial security camera installation with 4K CCTV cameras covering loading docks, parking lots, and warehouse entrances"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-slate-950/90 text-sky-400 font-mono text-[10px] font-extrabold border border-slate-800">
                    COMMERCIAL CCTV
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#007EFF] shrink-0" />
                    <span>Business &amp; Warehouses</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-definition multi-camera systems covering loading docks,
                    inventory, parking lots, cash registers, and entrances.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <NavLink
                  to="/business-security-cameras-fort-worth"
                  onNavigate={handleNavClick}
                  className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-xs font-bold text-[#007EFF] flex items-center justify-between transition-colors"
                >
                  <span>Explore Business CCTV</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </NavLink>
              </div>
            </div>

            {/* Gallery Card 3 – Encrypted Local NVR Rack */}
            <div className="group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                  <SafeImage
                    src={SURVEILLANCE_IMAGES.nvrRack.url}
                    fallbackSrc={SURVEILLANCE_IMAGES.nvrRack.url}
                    alt="Fort Worth NVR security camera recording server rack with encrypted local hard drives for 24/7 CCTV footage storage"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-slate-950/90 text-amber-400 font-mono text-[10px] font-extrabold border border-slate-800">
                    LOCAL NVR STORAGE
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-1.5">
                    <Server className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Private NVR Server Racks</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Encrypted local hard drive recorders with 24/7 continuous
                    recording, smart motion search, and zero monthly fees.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <NavLink
                  to="/security-camera-installation-fort-worth-tx"
                  onNavigate={handleNavClick}
                  className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-xs font-bold text-[#007EFF] flex items-center justify-between transition-colors"
                >
                  <span>Learn About NVR Systems</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </NavLink>
              </div>
            </div>

            {/* Gallery Card 4 – Mobile App Monitoring */}
            <div className="group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                  <SafeImage
                    src={SURVEILLANCE_IMAGES.mobileApp.url}
                    fallbackSrc={SURVEILLANCE_IMAGES.mobileApp.url}
                    alt="Fort Worth security camera remote smartphone monitoring app showing live 4K video feeds and push alerts on iOS and Android"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-slate-950/90 text-emerald-400 font-mono text-[10px] font-extrabold border border-slate-800">
                    MOBILE APP FEEDS
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Remote Smartphone Access</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Watch live 4K video feeds, receive real-time push alerts, and
                    playback historical security video on iOS and Android.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button
                  onClick={() =>
                    handleQuoteClick('Mobile App Monitoring Setup')
                  }
                  className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-xs font-bold text-[#007EFF] flex items-center justify-between transition-colors"
                >
                  <span>Get Mobile App Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED SERVICES CAMERA SYSTEMS GRID – TOP KEYWORDS */}
        <section className="mx-auto max-w-7xl px-4 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#007EFF] mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Specialized System Services</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Fort Worth Security Camera Services &amp; Solutions
              </h2>
            </div>
            <p className="text-xs text-slate-600 max-w-md">
              Select any specialized low-voltage service below for detailed
              specifications, hardware options, and local Fort Worth pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredKeywords.map((kw) => (
              <NavLink
                key={kw.slug}
                to={`/${kw.slug}`}
                onNavigate={handleNavClick}
                className="group cursor-pointer rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-[#007EFF]/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center group-hover:bg-[#007EFF] group-hover:text-white transition-colors">
                      <Camera className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                      {kw.category} • Fort Worth TX
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#007EFF] transition-colors">
                    {kw.h1}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {kw.heroSubheadline || kw.metaDescription}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#007EFF]">
                  <span>View Details &amp; Specs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </NavLink>
            ))}
          </div>
        </section>

        {/* INTERACTIVE ESTIMATOR / CALCULATOR COMPONENT */}
        <section className="mx-auto max-w-7xl px-4">
          <CameraCalculator onSelectPackage={handleQuoteClick} />
        </section>

        {/* MAIN BODY SECTIONS – LIGHT & DARK COLOR BLOCKS */}
        <main className="mx-auto max-w-7xl px-4 space-y-10">
          {/* SECTION 1 – Professional Security Camera & CCTV Installation */}
          <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 md:p-10 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#007EFF]">
              <Camera className="h-4 w-4" />
              <span>Turnkey Security CCTV Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Professional Security Camera &amp; CCTV Installation in Fort Worth
            </h2>
            <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
              <p>
                Installing a full security camera system is a long-term commitment to
                protecting your family, employees and property. At DFW Wholesale
                Security, we don’t use pushy sales tactics or lock you into
                complicated monitoring contracts. We earn your business through honest
                recommendations, craftsman-level Cat6 cabling and reliable 4K PoE IP
                hardware carefully selected for your building.
              </p>
              <p>
                Every Fort Worth security camera installation starts with a detailed
                walk-through of your property. We identify entrances, blind spots,
                parking areas, loading docks and high-risk zones, then design a CCTV
                camera layout that provides clear 4K coverage where you need it most.
                From small shops to large commercial campuses, we engineer camera
                angles, lens choices and recording settings around real security needs
                – not generic kits.
              </p>
            </div>
          </section>

          {/* SECTION 2 – Licensed, Compliant Banner (Dark Block) */}
          <section className="p-6 md:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-black text-amber-400">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span>Texas Department of Public Safety Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Licensed, Compliant and Trusted Fort Worth Camera Installers
            </h2>
            <div className="space-y-4 text-sm md:text-base text-slate-300 leading-relaxed">
              <p>
                Our installations follow Texas Security Bureau standards and local
                Fort Worth low-voltage guidelines. Technicians are background-checked
                and trained to respect your home or business, working cleanly in
                attics, ceilings and customer-facing areas. We take pride in neat
                terminations, clearly labeled Cat6 cabling and accessible NVR
                locations so your system is easy to maintain and expand over time.
              </p>
              <p>
                We specify solid copper Cat6 cabling for PoE IP cameras, properly
                sized power supplies and surge protection for outdoor equipment. Our
                Fort Worth security camera installations are engineered to run 24/7
                without constant troubleshooting or noisy equipment in public areas.
                The result is a professional CCTV system that quietly does its job
                while you run your business or enjoy your home.
              </p>
            </div>
          </section>

          {/* SECTION 3 – Residential Security Camera Systems */}
          <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 md:p-10 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
              <Home className="h-4 w-4 text-emerald-600" />
              <span>Clean Residential Wiring &amp; Mounting</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Residential Security Camera Systems for Fort Worth Homes
            </h2>
            <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
              <p>
                For homeowners, we focus on clean, low-profile camera installations
                that blend into your exterior. 4K PoE cameras are positioned to watch
                driveways, front doors, garage doors, side gates and back patios
                without dominating the look of your house. Cabling is hidden in attic
                cavities, soffits and wall spaces with flush wall plates – not stapled
                along siding or hanging from eaves.
              </p>
              <p>
                We install night-vision cameras for low-light areas, wide-angle views
                for yards and driveways and focused views for package theft, side
                doors and alley access. Your system records to a local encrypted NVR
                hard drive with motion-based recording and easy search tools. You can
                view live and recorded footage on phones, tablets and computers
                without paying monthly cloud storage fees.
              </p>
            </div>
          </section>

          {/* SECTION 4 – Commercial Security Camera Systems (Dark Block) */}
          <section className="p-6 md:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-bold text-blue-300">
              <Building2 className="h-4 w-4 text-blue-300" />
              <span>Commercial &amp; Industrial Security Facilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Commercial Security Camera &amp; CCTV Systems Across DFW
            </h2>
            <div className="space-y-4 text-sm md:text-base text-slate-300 leading-relaxed">
              <p>
                DFW Wholesale Security installs commercial CCTV systems for
                warehouses, distribution centers, manufacturing plants, car
                dealerships, churches, shopping centers, office buildings, schools
                and industrial yards. We design layouts to cover entries, cash
                registers, stock rooms, employee areas, parking lots, loading docks
                and perimeter fencing with a mix of fixed and PTZ cameras.
              </p>
              <p>
                Typical commercial installations deploy 16 to 64 PoE IP cameras
                connected over Cat6, with rack-mounted NVRs, patch panels and, when
                necessary, fiber links between buildings. We can integrate license
                plate capture, long-range zoom views and AI analytics for high-traffic
                areas. The goal is clear, usable CCTV footage that helps you prevent
                theft, resolve incidents and keep customers and staff safe.
              </p>
            </div>
          </section>

          {/* SECTION 5 – Technology Comparison Guide Component */}
          <section>
            <InteractiveComparison />
          </section>

          {/* SECTION 6 – Verified Local Reviews Section */}
          <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 md:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 mb-1">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>Verified Client Feedback</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  What Fort Worth &amp; DFW Property Owners Say
                </h2>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>4.9 / 5.0 Rating • Verified Google Reviews</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {REVIEWS_LIST.slice(0, 3).map((review) => (
                <div
                  key={review.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed italic">
                      {review.comment}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px]">
                    <span className="font-extrabold text-slate-900">
                      {review.author}
                    </span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {review.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 7 – Service Areas / Metro Coverage */}
          <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 md:p-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#007EFF]">
              <MapPin className="h-4 w-4" />
              <span>Dispatch Coverage Area</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Fort Worth-Based Security Camera Installers Serving the DFW Metroplex
            </h2>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              From our Fort Worth office at 2203 8th Ave, we dispatch fully equipped
              installation trucks across the Dallas–Fort Worth metro area. Our team
              regularly installs and services security camera systems in nearby cities
              including Arlington, Mansfield, Burleson, Keller, Benbrook, Crowley,
              Forest Hill, Kennedale and more.
            </p>
            <div className="grid gap-3.5 text-xs sm:text-sm font-semibold text-slate-800 md:grid-cols-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 shadow-xs">
                <MapPin className="h-5 w-5 text-[#007EFF] shrink-0" />
                <span>Fort Worth, Benbrook, Crowley, Burleson, Forest Hill</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 shadow-xs">
                <MapPin className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Arlington, Mansfield, Kennedale and surrounding communities</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 shadow-xs">
                <MapPin className="h-5 w-5 text-amber-600 shrink-0" />
                <span>Keller, Southlake, Hurst, Euless, Bedford</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 shadow-xs">
                <MapPin className="h-5 w-5 text-purple-600 shrink-0" />
                <span>Grand Prairie, Irving and nearby DFW cities</span>
              </div>
            </div>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              If your home or business is anywhere in or around DFW and you need
              security camera installation, upgrades or repairs, DFW Wholesale
              Security can help. We treat your building like our own, working
              carefully around your operations and schedule to deliver a clean,
              reliable CCTV installation.
            </p>
          </section>

          {/* SECTION 8 – Interactive DFW Cities Directory Coverage Map */}
          <section>
            <CityCoverageMap onSelectCity={handleNavClick} />
          </section>

          {/* SECTION 9 – Installation Process Grid */}
          <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 md:p-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800">
              <Wrench className="h-4 w-4 text-amber-600" />
              <span>Turnkey 5-Step Execution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our Fort Worth Security Camera Installation Process
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <li className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs">
                <span className="text-2xl font-black text-[#007EFF]">01</span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>On-site walk-through.</strong> We meet at your property,
                  review entrances, blind spots, parking areas and high-risk zones and
                  discuss what you want to see on camera.
                </p>
              </li>
              <li className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs">
                <span className="text-2xl font-black text-[#007EFF]">02</span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>System design and layout.</strong> We select camera types,
                  lenses and mounting locations to cover doors, drive lanes, lots,
                  registers, inventory rooms and alleys with minimal overlap and
                  maximum clarity.
                </p>
              </li>
              <li className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs">
                <span className="text-2xl font-black text-[#007EFF]">03</span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Cabling and hardware installation.</strong> We run and label
                  Cat6 or coax cabling neatly through attics, ceilings, conduit and
                  walls, mount cameras securely and install your NVR/DVR in an
                  accessible but protected location.
                </p>
              </li>
              <li className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs">
                <span className="text-2xl font-black text-[#007EFF]">04</span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Network and remote viewing setup.</strong> We connect your
                  system to your network, configure ports and secure remote access so
                  you can view live and recorded footage from phones, tablets or
                  computers.
                </p>
              </li>
              <li className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs">
                <span className="text-2xl font-black text-[#007EFF]">05</span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Training and hand-off.</strong> We show you exactly how to
                  review footage, export clips, search by time or event and adjust key
                  settings so you are confident using your CCTV system.
                </p>
              </li>
            </ol>
          </section>

          {/* SECTION 10 – Why Choose Section */}
          <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 md:p-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
              <Award className="h-4 w-4 text-emerald-600" />
              <span>Uncompromising Quality</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Why Fort Worth Property Owners Choose DFW Wholesale Security
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                  <Home className="h-5 w-5 text-[#007EFF] shrink-0" />
                  <span>Local Fort Worth ownership.</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We live and work in Fort Worth and focus on protecting DFW homes
                  and businesses – not selling generic national packages.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                  <Camera className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Commercial-grade equipment.</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We specify 4K PoE IP cameras, solid copper Cat6 cabling and
                  professional NVRs/DVRs designed for long-term reliability.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                  <Wrench className="h-5 w-5 text-amber-600 shrink-0" />
                  <span>Clean aesthetics.</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Hidden cabling, neat terminations and camera placements that respect
                  your building design and HOA requirements.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                  <Lock className="h-5 w-5 text-purple-600 shrink-0" />
                  <span>No monthly cloud fees.</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  You own your cameras and local NVR hard drives, with private,
                  encrypted access and no surprise storage charges.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs sm:col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                  <Phone className="h-5 w-5 text-[#007EFF] shrink-0" />
                  <span>Responsive local support.</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  When you need help, you talk directly to the Fort Worth
                  installers who set up your system – not a distant call center.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 11 – Frequently Asked Questions Section */}
          <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 md:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800 mb-1">
                  <HelpCircle className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Fort Worth Security Camera FAQs</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions About Security Camera Installation
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              {HOMEPAGE_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-100/80 transition-colors font-bold text-slate-900 text-sm sm:text-base"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#007EFF]/10 text-[#007EFF] text-xs font-black shrink-0">
                        Q
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? 'rotate-180 text-[#007EFF]' : ''
                      }`}
                    />
                  </button>

                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-200/60 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 12 – Quote CTA Section (Dark Banner) */}
          <section
            id="quote"
            className="rounded-3xl border border-sky-500/40 bg-slate-950 p-8 md:p-12 shadow-2xl space-y-6 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#007EFF]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/20 px-4 py-1.5 text-xs font-black text-sky-300 relative z-10">
              <Phone className="h-4 w-4 text-sky-300" />
              <span>Direct Fort Worth Dispatch</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight relative z-10">
              Get a Free Fort Worth Security Camera Installation Quote
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-sm md:text-base text-slate-200 leading-relaxed relative z-10">
              <p>
                Tell us about your property and what you need to see on camera, and we
                will prepare a tailored security camera installation quote for your
                Fort Worth or DFW location. Most quotes can be turned around quickly
                after a short site walk-through.
              </p>
              <p>
                Call or text our Fort Worth office at{' '}
                <a
                  href="tel:18172312962"
                  className="font-black text-amber-400 hover:underline text-lg"
                >
                  (817) 231-2962
                </a>{' '}
                or use the quote form on this site to schedule your consultation and
                get pricing for equipment, labor, cabling and setup.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap justify-center items-center gap-4 relative z-10">
              <a
                href="tel:18172312962"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-sky-500/30 hover:from-sky-400 hover:to-blue-500 transition-all"
              >
                <Phone className="h-5 w-5" />
                <span>Call (817) 231-2962 Now</span>
              </a>
              <button
                onClick={() =>
                  handleQuoteClick('Fort Worth Security Camera Installation')
                }
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-7 py-4 border border-slate-700 transition-all"
              >
                <span>Request Online Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </section>
        </main>

        {/* FOOTER NAP BLOCK */}
        <footer className="border-t border-slate-200 bg-slate-950 py-8 mt-12 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center space-y-2 text-xs text-slate-400 md:text-sm">
            <p className="font-bold text-slate-200 text-base">
              DFW Wholesale Security • Fort Worth Security Cameras
            </p>
            <p>2203 8th Ave, Fort Worth, Texas 76110 • Phone/Text (817) 231-2962</p>
            <p className="text-slate-500">
              Website: fortworthsecuritycameras.com • Serving Fort Worth and the DFW
              metroplex.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};