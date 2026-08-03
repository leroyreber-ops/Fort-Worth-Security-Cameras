import React from 'react';
import {
  ShieldCheck,
  Phone,
  CheckCircle2,
  ArrowRight,
  Camera,
  Wrench,
  Wifi,
  Cpu,
  Star,
  MessageSquare,
  ChevronRight,
  HelpCircle,
  Building2,
  Home,
  Smartphone,
  Award,
  Clock,
  Globe,
  Tv,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { KeywordPageInfo } from '../types';
import { TOP_KEYWORDS } from '../data/keywordsData';
import { DFW_CITIES } from '../data/citiesData';
import { getPageImages, BRAND_ASSETS } from '../data/imagesData';
import { SafeImage } from '../components/SafeImage';
import { NavLink } from '../components/NavLink';

interface KeywordLandingPageProps {
  keywordData: KeywordPageInfo;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const KeywordLandingPage: React.FC<KeywordLandingPageProps> = ({
  keywordData,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const images = getPageImages(keywordData.slug);
  const canonicalFullUrl = `https://fortworthsecuritycameras.com/${keywordData.slug}`;

  // Topic Detection
  const isWebDesign = keywordData.slug.includes('business-website-design');
  const isTelecom = keywordData.slug.includes('business-communications');
  const isRingDoorbell = keywordData.slug.includes('ring-video-doorbell');
  const isCabling = keywordData.slug.includes('network-cable-installation');
  const isTVMounting = keywordData.slug.includes('tv-wall-mounting');

  // FAQs Prioritization (Use page-specific FAQs if present, else camera default)
  const keywordFaqs =
    keywordData.faqs && keywordData.faqs.length > 0
      ? keywordData.faqs
      : [
          {
            question: `Why choose professional ${keywordData.keyword} in Fort Worth instead of DIY battery cameras?`,
            answer: `DIY battery cameras rely on consumer WiFi which suffers from latency, missed recordings, and battery drain in North Texas heat. Professional ${keywordData.keyword} utilizes direct Cat6 Power over Ethernet (PoE) cabling to a dedicated 24/7 NVR recorder, delivering uninterrupted 4K video recording with zero monthly subscription fees.`,
          },
          {
            question: `How much does ${keywordData.keyword} cost in Fort Worth, TX?`,
            answer: `Turnkey installation for ${keywordData.keyword} ranges from $1,595–$1,995 for a 4-camera home setup, $2,995–$3,495 for an 8-channel system, and $5,995–$6,895 for a 16-channel commercial installation. All packages include equipment, cabling, setup, and warranty.`,
          },
          {
            question: `Does ${keywordData.keyword} support remote smartphone monitoring?`,
            answer: `Yes! Our licensed installers configure a secure mobile app on your iPhone or Android phone during installation. You can stream live video feeds, review recorded events, and receive instant AI human/vehicle motion alerts anywhere.`,
          },
          {
            question: `Can ${keywordData.keyword} be installed in residential homes and commercial businesses?`,
            answer: `Absolutely. DFW Wholesale Security / Fort Worth Security Cameras designs tailored layouts for single-family residences, retail stores, warehouses, offices, and industrial complexes throughout Fort Worth and Tarrant County.`,
          },
          {
            question: `How long is the warranty for ${keywordData.keyword}?`,
            answer: `We provide a comprehensive 1-year equipment replacement and labor installation warranty, along with lifetime local technical support from our Fort Worth office.`,
          },
          {
            question: `How quickly can I get a quote for ${keywordData.keyword}?`,
            answer: `We offer same-day over-the-phone and on-site estimates! Call or text our Fort Worth office at (817) 231-2962 to speak directly with a local specialist.`,
          },
        ];

  // Dynamic Button & Badge Text
  const ctaLabel = isWebDesign
    ? 'Get Free Web Design Quote'
    : isTelecom
    ? 'Get Free Telecom Consultation'
    : isRingDoorbell
    ? 'Get Free Doorbell Quote'
    : isCabling
    ? 'Get Free Cabling Estimate'
    : isTVMounting
    ? 'Get Free TV Mounting Quote'
    : 'Get Free Camera Quote';

  const heroBadge1 = isWebDesign
    ? 'Fort Worth Web Design & Local SEO Experts'
    : isTelecom
    ? 'Fort Worth Telecom & Business Internet Brokers'
    : isRingDoorbell
    ? 'Ring Video Doorbell & Wiring Specialists'
    : isCabling
    ? 'Certified Low Voltage Cabling Technicians'
    : isTVMounting
    ? 'Professional TV Mounting & Display Setup'
    : 'Licensed Fort Worth CCTV Pros • 1-Year Warranty';

  const heroBadge2 = isWebDesign
    ? 'High-Converting Custom Web Development'
    : isTelecom
    ? 'Cloud VoIP PBX & Dedicated Fiber Optics'
    : isRingDoorbell
    ? 'Hardwired 16V-24V Power & Chime Setup'
    : isCabling
    ? 'Cat6 / Cat6A 10Gbps Certified Drops'
    : isTVMounting
    ? '100% In-Wall Hidden Cable Concealment'
    : '0 Cloud Subscription Fees';

  const rightCardTag = isWebDesign
    ? 'CUSTOM REACT / SEO'
    : isTelecom
    ? 'VOIP & FIBER'
    : isRingDoorbell
    ? '16V-24V POWER'
    : isCabling
    ? 'CAT6 10GBPS'
    : isTVMounting
    ? 'IN-WALL POWER'
    : '4K ULTRA HD';

  const trustBadges = isWebDesign
    ? [
        { icon: Award, label: '19+ Years In Business' },
        { icon: Smartphone, label: '100% Mobile Optimized' },
        { icon: Clock, label: 'Sub-Second Page Load' },
        { icon: Star, label: '4.9 Star Local Rating' },
      ]
    : isTelecom
    ? [
        { icon: Award, label: 'Multi-Carrier Broking' },
        { icon: Phone, label: 'Cloud VoIP PBX' },
        { icon: Wifi, label: 'Dedicated Symmetric Fiber' },
        { icon: Star, label: '99.999% SLA Uptime' },
      ]
    : isRingDoorbell
    ? [
        { icon: Award, label: '16V-24V Transformer Pros' },
        { icon: Wrench, label: 'Masonry & Brick Drillers' },
        { icon: Wifi, label: 'WiFi & Ring App Setup' },
        { icon: Star, label: '1-Year Labor Warranty' },
      ]
    : isCabling
    ? [
        { icon: Award, label: 'ANSI/TIA-568-C.2 Spec' },
        { icon: ShieldCheck, label: 'Texas Low Voltage Licensed' },
        { icon: Clock, label: 'Same-Day Site Quotes' },
        { icon: Star, label: 'Solid Bare Copper Cable' },
      ]
    : isTVMounting
    ? [
        { icon: Award, label: '32" to 100"+ Displays' },
        { icon: Wrench, label: 'Fireplace & Brick Pros' },
        { icon: ShieldCheck, label: 'Hidden Power Bridge Kits' },
        { icon: Star, label: '100% Insured Installers' },
      ]
    : [
        { icon: Award, label: '19+ Years In Business' },
        { icon: ShieldCheck, label: 'Texas DPS Licensed' },
        { icon: Clock, label: 'Same-Day Quotes' },
        { icon: Star, label: '4.9 Star Local Rating' },
      ];

  const whyChooseBullets = isWebDesign
    ? [
        'Custom React & HTML5 web code achieving 95+ Google PageSpeed ratings',
        'Built-in Local SEO, Google Maps Local 3-Pack, and JSON-LD schema markup',
        'Mobile-first responsive layouts with sticky tap-to-call header buttons',
        'SSL security certificates, cloud CDN hosting, and instant SMS lead alerts',
      ]
    : isTelecom
    ? [
        'Licensed master technology broker for AT&T, Spectrum, Comcast, Frontier & CenturyLink',
        'Cloud VoIP phone systems with auto-attendants, mobile app twinning & HD voice',
        'Dedicated symmetric fiber internet with guaranteed 99.999% SLA uptime',
        'Physical Cat6 low-voltage rack cabling, patch panels, and switch setup',
      ]
    : isRingDoorbell
    ? [
        '16V-24V AC transformer testing and replacement for zero battery drain',
        'Precision diamond masonry drilling in brick, stone, stucco, and wood trim',
        'Indoor mechanical door chime bypass kits & synchronization',
        'Ring mobile app pairing, WiFi extender placement, and motion zone tuning',
      ]
    : isCabling
    ? [
        'Solid bare copper Cat6 / Cat6A cabling terminated to T568B standards',
        'In-wall cable fishing through attics, crawlspaces, drop ceilings & conduit',
        'Server rack dressing, patch panel punch-downs & color-coded port labeling',
        'Digital Fluke continuity testing for 100% gigabit & PoE throughput',
      ]
    : isTVMounting
    ? [
        'Heavy-duty steel mounts for 32" to 100"+ flat screen displays',
        'Code-compliant UL-listed in-wall recessed power bridge kits & cable brush plates',
        'Specialized masonry anchors for fireplaces, brick, stone, and metal studs',
        'Soundbar mounting, optical audio calibration, and surround sound wiring',
      ]
    : [
        'Fort Worth HQ located at 2203 8th Ave, Fort Worth, TX 76110',
        'Texas DPS licensed security installers with full liability coverage',
        '1-Year hardware and installation replacement warranty with lifetime support',
        'Zero monthly cloud subscription fees required for local NVR storage',
      ];

  // App Card Data
  const appBlock1 = isWebDesign
    ? {
        title: 'Small Business & Local Services Web Design',
        desc: 'Engineered for Fort Worth trade contractors, retail shops, and local service companies to generate phone calls and online quote requests.',
        bullets: [
          'Custom lead capture forms & tap-to-call buttons',
          'Google Maps Local 3-Pack SEO optimization',
          'Sub-second mobile loading speed on 5G',
        ],
        priceName: 'Starter Web Package',
        priceVal: '$1,295 – $1,995',
      }
    : isTelecom
    ? {
        title: 'Cloud VoIP Phone Systems (UCaaS)',
        desc: 'Replace costly legacy copper phone lines with flexible cloud-hosted PBX phone systems with auto-attendants and mobile softphones.',
        bullets: [
          'Auto-attendant receptionists & call queues',
          'Desktop softphones & iOS/Android app twinning',
          'HD voice quality with zero hardware maintenance',
        ],
        priceName: 'VoIP Line Hosting',
        priceVal: '$25 – $45 / line',
      }
    : isRingDoorbell
    ? {
        title: 'Residential Porch & Front Door Installation',
        desc: 'Protect front entries and package deliveries with hardwired Ring Video Doorbells mounted at the ideal viewing angle.',
        bullets: [
          'Hardwired 16V-24V power connection',
          'Brick, stone, & wood siding masonry drilling',
          'Custom corner wedge mounting for porch visibility',
        ],
        priceName: 'Standard Install Package',
        priceVal: '$99 – $175',
      }
    : isCabling
    ? {
        title: 'Residential Ethernet & Smart Home Drops',
        desc: 'Dedicated Cat6 cable drops for home offices, smart TVs, gaming consoles, and wireless access points.',
        bullets: [
          'Concealed attic cable runs & in-wall fishing',
          'Flush-mount keystone wall plates',
          '100% solid copper Cat6 gigabit certified',
        ],
        priceName: 'Single Ethernet Drop',
        priceVal: '$125 – $195',
      }
    : isTVMounting
    ? {
        title: 'Residential Living Room & Fireplace TV Mounting',
        desc: 'Precision TV wall mounting for living rooms, bedrooms, game rooms, and covered outdoor entertainment patios.',
        bullets: [
          'Heavy-duty steel flat, tilt, or swivel mounts',
          'UL-listed in-wall recessed power bridge kits',
          'Hidden HDMI 2.1 & optical soundbar cables',
        ],
        priceName: 'Drywall TV Mounting',
        priceVal: '$125 – $225',
      }
    : {
        title: 'Home & Residential Installation',
        desc: 'Protect driveways, entryways, backyards, and side yards with discrete 4K turret cameras. We perform attic cable runs so no wires show on exterior walls.',
        bullets: [
          'Concealed attic cable routing',
          'ColorVu full-color night vision',
          'iPhone & Android app setup',
        ],
        priceName: '4-Camera Home Package',
        priceVal: '$1,595 – $1,995',
      };

  const appBlock2 = isWebDesign
    ? {
        title: 'Commercial & Enterprise Custom Portals',
        desc: 'Multi-location websites, custom booking portals, CRM webhooks, and automated lead management systems for growing Fort Worth businesses.',
        bullets: [
          'Multi-location local SEO architecture',
          'CRM webhooks & instant SMS quote alerts',
          'SSL security & daily automated cloud backups',
        ],
        priceName: 'Commercial Web Package',
        priceVal: '$2,995 – $4,500',
      }
    : isTelecom
    ? {
        title: 'Dedicated Fiber & Multi-Carrier Broadband',
        desc: 'High-speed commercial internet circuits negotiated directly with premier carrier networks at wholesale contract rates.',
        bullets: [
          '100Mbps to 10Gbps symmetric fiber optics',
          'Multi-provider price comparison (AT&T, Spectrum, Comcast)',
          'SD-WAN routers with automatic 4G/5G failover',
        ],
        priceName: 'Wholesale Carrier Rates',
        priceVal: 'Free Broking Audit',
      }
    : isRingDoorbell
    ? {
        title: 'Multi-Entry & Smart Home Integration',
        desc: 'Comprehensive entryway protection with multiple Ring doorbells, chime extenders, and smart lock syncing.',
        bullets: [
          'Dual Ring doorbells (Front & Rear)',
          'Ring Chime Pro WiFi extenders',
          'Syncing with Alexa Echo Show & smart electronic locks',
        ],
        priceName: 'Multi-Door Package',
        priceVal: '$245 – $395',
      }
    : isCabling
    ? {
        title: 'Commercial Office & Server Rack Cabling',
        desc: 'Structured cabling for commercial office suites, server rooms, distribution centers, and retail stores in Fort Worth.',
        bullets: [
          'Patch panel rack dressing & cable sorting',
          'Plenum CMP fire-rated cable in drop ceilings',
          'Multi-mode fiber backbones for long distance',
        ],
        priceName: 'Commercial Drop Volume',
        priceVal: '$145 – $225 / drop',
      }
    : isTVMounting
    ? {
        title: 'Commercial Displays & Sports Bar Video Walls',
        desc: 'Multi-screen video wall arrays, digital menu boards, and conference room presentation displays across Fort Worth.',
        bullets: [
          'Multi-screen matrix video wall mounts',
          'Weatherproof outdoor TV enclosures',
          'Commercial audio soundbar & speaker setup',
        ],
        priceName: 'Commercial Display Spec',
        priceVal: '$245 – $495',
      }
    : {
        title: 'Commercial Business CCTV Systems',
        desc: 'Enterprise-grade commercial camera systems for retail stores, distribution centers, offices, and industrial facilities in Fort Worth with 30-day NVR retention.',
        bullets: [
          '8 to 32+ channel NVR racks',
          'Industrial metallic EMT conduit',
          'License plate & POS cash register cameras',
        ],
        priceName: '8-Channel Commercial Package',
        priceVal: '$2,995 – $3,495',
      };

  // Section 5 Title & Body
  const featureTitle = isWebDesign
    ? 'Sub-Second Mobile Performance & Local Google Maps Ranking'
    : isTelecom
    ? 'Unified Mobile & Desktop Business Communications'
    : isRingDoorbell
    ? 'Smart Porch Security & Mobile Entry Control'
    : isCabling
    ? 'Certified Gigabit Data Infrastructure & PoE Power'
    : isTVMounting
    ? 'Clean Zero-Visible-Wire Living Room Aesthetics'
    : 'Stay Connected to Your Fort Worth Property';

  const featureDesc = isWebDesign
    ? 'Over 65% of local searches in Fort Worth happen on mobile devices. We build fast, mobile-first websites that turn search engine visitors into phone calls and quote submissions.'
    : isTelecom
    ? 'Manage business calls, client queues, and multi-office communications seamlessly on desktop softphones or mobile apps with zero downtime.'
    : isRingDoorbell
    ? 'Receive instant smartphone alerts when visitors approach your porch, speak through two-way audio, and view live 1080p/4K HD porch video anytime.'
    : isCabling
    ? 'Solid copper Cat6 data runs provide interference-free gigabit data transfer and Power over Ethernet (PoE) for workstations, access points, and devices.'
    : isTVMounting
    ? 'Eliminate ugly dangling power cords and HDMI cables with code-compliant recessed power outlet kits and hidden wall brush plates.'
    : 'View live 4K streams, play back recorded footage, and receive instant AI human/vehicle motion alerts on your smartphone anywhere in the world with zero monthly cloud fees.';

  const keywordSummary = `We design and install ${keywordData.keyword} solutions specifically for Fort Worth homes and businesses, combining commercial-grade hardware, clean cabling and responsive local support so your system stays reliable for years.`;

  // Build combined JSON-LD Schema
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: keywordData.h1,
        serviceType: keywordData.keyword,
        description: keywordData.metaDescription,
        provider: {
          '@type': 'LocalBusiness',
          name: 'DFW Wholesale Security / Fort Worth Security Cameras',
          telephone: '817-231-2962',
          email: 'leroyreber@gmail.com',
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '2203 8th Ave.',
            addressLocality: 'Fort Worth',
            addressRegion: 'TX',
            postalCode: '76110',
            addressCountry: 'US',
          },
          url: canonicalFullUrl,
        },
        areaServed: {
          '@type': 'City',
          name: 'Fort Worth',
          containedInPlace: {
            '@type': 'State',
            name: 'Texas',
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://fortworthsecuritycameras.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: keywordData.h1,
            item: canonicalFullUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: keywordFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  const smsHref = `sms:8172312962?body=${encodeURIComponent(
    `I'm looking for a quote regarding ${keywordData.keyword}, how can you help me?`
  )}`;

  return (
    <>
      <SEOHead
        title={keywordData.title}
        description={keywordData.metaDescription}
        canonicalUrl={canonicalFullUrl}
        schema={pageSchema}
      />

      <div className="bg-slate-50 text-slate-800 space-y-12 pb-16 font-sans">
        <Breadcrumb
          items={[
            { label: 'Home', path: '/' },
            { label: keywordData.h1, path: `/${keywordData.slug}` },
          ]}
          onNavigate={onNavigate}
          variant="light"
        />

                {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden py-12 lg:py-20 border-b border-slate-800 bg-slate-950 text-white w-full">
          {/* Background Photography */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-85 sm:opacity-90 transition-all duration-700 pointer-events-none animate-kenburns"
            style={{ backgroundImage: `url(${images.heroBg})` }}
          />
          {/* Balanced gradient overlay to ensure text legibility while keeping background image crisp & clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-black text-amber-400 backdrop-blur-sm">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>{heroBadge1}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{heroBadge2}</span>
                </div>
              </div>

              {/* H1 Tag */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight text-shadow-hero">
                {keywordData.h1}
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
                {keywordData.heroSubheadline}
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-semibold text-slate-200">
                {trustBadges.map((tb, idx) => {
                  const IconComp = tb.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm"
                    >
                      <IconComp className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{tb.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Key Benefits List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                {keywordData.keyBenefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onOpenQuoteModal(keywordData.h1)}
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#007EFF] to-blue-600 hover:from-[#3398FF] hover:to-blue-500 text-white font-black text-sm shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 border border-blue-400/30"
                >
                  <span>{ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={smsHref}
                  className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Text Us (817) 231-2962</span>
                </a>
              </div>
            </div>

            {/* Right Side High-Clarity Image Preview Card — Fort Worth Installation Truck */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-sm p-2 space-y-2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-800">
                  <SafeImage
                    src={BRAND_ASSETS.serviceTruck}
                    fallbackSrc={images.rightCard}
                    alt={`Official Fort Worth Security Camera installation truck for ${keywordData.keyword}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-slate-950/80 border border-slate-700 font-mono text-emerald-400">
                      SERVICE FLEET
                    </span>
                    <span className="px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-black">
                      FORT WORTH TRUCK
                    </span>
                  </div>
                </div>
                <div className="p-2.5 text-center text-xs text-slate-300 font-semibold">
                  Official Fort Worth Security Camera Service Truck & Mobile Unit
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. OVERVIEW */}
        <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-sm">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              {isWebDesign ? (
                <Globe className="w-4 h-4" />
              ) : isTelecom ? (
                <Phone className="w-4 h-4" />
              ) : isTVMounting ? (
                <Tv className="w-4 h-4" />
              ) : isCabling ? (
                <Wifi className="w-4 h-4" />
              ) : (
                <Camera className="w-4 h-4" />
              )}
              <span>Specialized Solution Overview</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              Expert Solutions for {keywordData.h1}
            </h2>
            <div className="whitespace-pre-line leading-relaxed text-slate-700">
              {keywordData.overviewContent}
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2 text-xs">
              <div className="font-bold text-slate-900 uppercase tracking-wider">
                Why Fort Worth Clients Choose DFW Wholesale Security:
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                {whyChooseBullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Embedded Image 1 */}
          <div className="lg:col-span-5">
            <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-xl space-y-2">
              <img
                src={images.gallery1}
                alt={`${keywordData.keyword} in Fort Worth TX`}
                className="w-full h-72 object-cover rounded-xl"
                loading="lazy"
              />
              <div className="p-2 text-center text-xs font-semibold text-slate-600">
                Professional service execution for {keywordData.keyword} in Fort Worth, TX.
              </div>
            </div>
          </div>
        </section>

        {/* OFFICIAL FORT WORTH MOBILE INSTALLATION TRUCK & SERVICE FLEET BANNER */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl aspect-video">
                <SafeImage
                  src={BRAND_ASSETS.serviceTruck}
                  alt={BRAND_ASSETS.serviceTruckAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-slate-950/90 text-emerald-400 font-mono text-[11px] font-bold border border-slate-800">
                  FORT WORTH SERVICE FLEET
                </div>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
                <Wrench className="w-3.5 h-3.5" />
                <span>Official Fort Worth Mobile Service Vehicle</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Fort Worth Installation Truck & Mobile Equipment Rig
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Our official Fort Worth Security Camera service vehicle is equipped with specialized tools, 4K PoE IP cameras, solid copper Cat6 cabling, extension ladders, and diagnostic testing equipment to handle any {keywordData.keyword} installation efficiently across Fort Worth and surrounding communities.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-bold text-slate-200">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Fully Stocked Mobile Rig
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Licensed Texas Field Techs
                </span>
              </div>
            </div>
          </div>
        </section>

                {/* 3. APPLICATIONS SECTION */}
        <section className="max-w-7xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Service Packages for {keywordData.keyword}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Tailored configurations designed for residential homes and commercial businesses in Fort Worth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Block 1 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {appBlock1.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {appBlock1.desc}
                </p>
                <ul className="space-y-2 text-xs font-semibold text-slate-700">
                  {appBlock1.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                <span>{appBlock1.priceName}</span>
                <span className="text-emerald-700 font-extrabold">
                  {appBlock1.priceVal}
                </span>
              </div>
            </div>

            {/* Block 2 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {appBlock2.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {appBlock2.desc}
                </p>
                <ul className="space-y-2 text-xs font-semibold text-slate-700">
                  {appBlock2.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                <span>{appBlock2.priceName}</span>
                <span className="text-emerald-700 font-extrabold">
                  {appBlock2.priceVal}
                </span>
              </div>
            </div>
          </div>

          {/* Embedded Image 2 */}
          <div className="p-4 bg-[#F5F5F5] text-slate-900 rounded-2xl border border-[#E5E5E5] shadow-md grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5">
              <img
                src={images.gallery2}
                alt={`${keywordData.keyword} installation in Fort Worth`}
                className="w-full h-60 object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-7 space-y-3">
              <div className="text-xs font-bold text-[#007EFF] uppercase tracking-wider">
                Fort Worth Quality Guarantee
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Turnkey Local Installation & Dedicated Service
              </h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Our team brings 19+ years of experience serving Fort Worth property owners with custom solutions, clean aesthetics, and responsive local support.
              </p>
              <button
                onClick={() => onOpenQuoteModal(keywordData.h1)}
                className="px-5 py-2.5 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] text-white font-extrabold text-xs transition-all shadow-sm"
              >
                Request Free Site Assessment
              </button>
            </div>
          </div>
        </section>

        {/* 4. TECHNICAL SPECS */}
        <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
            <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-xl space-y-2">
              <img
                src={images.gallery3}
                alt={`Technician executing ${keywordData.keyword} in Fort Worth`}
                className="w-full h-56 object-cover rounded-xl"
                loading="lazy"
              />
              <div className="p-2 text-center text-xs font-semibold text-slate-600">
                Licensed installer executing turnkey setup in Fort Worth, TX.
              </div>
            </div>

            {/* Installation Fleet Card */}
            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 shadow-xl space-y-2 text-white">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center p-2 border border-slate-800">
                <img
                  src={BRAND_ASSETS.serviceTruck}
                  alt={`Official Fort Worth installation fleet truck for ${keywordData.keyword}`}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 px-2.5 py-1 rounded bg-amber-500 text-slate-950 text-[10px] font-black shadow">
                  Fort Worth Installation Fleet
                </span>
              </div>
              <div className="p-2 text-center text-xs font-bold text-slate-300">
                On-Site Service Vehicle Stocked for Immediate Local Execution
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              <span>Technical & Hardware Specifications</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              We insist on commercial-grade components and certified standards to ensure flawless performance.
            </p>

            <div className="space-y-3 pt-2">
              {keywordData.technicalSpecs.map((spec, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex justify-between gap-4 text-xs"
                >
                  <span className="font-bold text-slate-900">{spec.title}</span>
                  <span className="font-semibold text-emerald-700 text-right">
                    {spec.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

                {/* 5. FEATURE / APP PREVIEW SECTION */}
        <section className="bg-white border-y border-slate-200 py-10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                <HelpCircle className="w-4 h-4 text-slate-500" />
                <span>How this {keywordData.keyword.toLowerCase()} works</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                {featureTitle}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {featureDesc}
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2">
                {keywordSummary}
              </p>

              <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <span>Designed for Fort Worth homes, offices, and warehouses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <span>Installed by licensed local technicians with clean cabling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <span>Includes smartphone setup, training, and warranty support.</span>
                </li>
              </ul>
            </div>

            <div className="relative rounded-2xl bg-slate-900 text-slate-50 p-4 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-80" />
              <div className="relative space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-800/80 border border-slate-700">
                    <Camera className="w-3.5 h-3.5" />
                    <span>{rightCardTag}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Local Fort Worth Installation</span>
                  </span>
                </div>

                <SafeImage
                  src={images.gallery1}   // or images.rightCard — pick an existing property
                  alt={keywordData.h1}
                  className="w-full rounded-xl border border-slate-700 shadow-lg"
                />

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  We map out ideal camera, TV, cabling or doorbell locations during a site visit, then
                  route cabling through attics, walls and ceilings so your {keywordData.keyword.toLowerCase()} system
                  looks clean and professional.
                </p>
              </div>
            </div>
          </div>
        </section>

                {/* 6. FAQS SECTION */}
        <section className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#007EFF]" />
              <span>Frequently Asked Questions ({keywordData.keyword})</span>
            </h2>
            <p className="text-xs text-[#6B6B6B]">
              Clear answers regarding pricing, installation, warranties, and local service in Fort Worth, TX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keywordFaqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm space-y-2"
              >
                <h3 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-[#007EFF] font-extrabold font-mono">
                    Q:
                  </span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. CUSTOMER REVIEWS */}
        <section className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="p-8 rounded-2xl bg-white text-slate-900 border border-[#E5E5E5] space-y-6 shadow-md">
            <div className="text-center space-y-2">
              <div className="flex justify-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                Verified Fort Worth Customer Feedback
              </h2>
              <p className="text-xs text-[#6B6B6B]">
                4.9 Star Rated Local Service Provider in Tarrant County.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] space-y-3">
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "Exceeded our expectations. The quality of work and attention to detail was unreal. The technician was polite, clean, and showed us how to use everything step by step."
                </p>
                <div className="text-xs font-bold text-[#007EFF]">
                  — David M., Fort Worth Property Owner
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] space-y-3">
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "Fast, professional service from Leroy and his crew. They completed our project in Fort Worth on schedule with zero downtime to our business."
                </p>
                <div className="text-xs font-bold text-emerald-700">
                  — Robert P., Commercial Facility Director
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA BANNER */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F5F5F5] text-slate-900 border border-[#E5E5E5] shadow-md space-y-6 text-center">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              Get Your Free Estimate for {keywordData.h1}
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-2xl mx-auto">
              Call or text our Fort Worth office at (817) 231-2962 for a free itemized quote and same-day site survey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenQuoteModal(keywordData.h1)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] active:bg-[#66B2FF] text-white font-extrabold text-sm shadow-md transition-all"
              >
                Get Free On-Site Quote
              </button>
              <a
                href={smsHref}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Contact Us Now (817) 231-2962</span>
              </a>
            </div>
          </div>
        </section>

        {/* 9. RELATED KEYWORDS & CITIES INTERLINKING */}
        <section className="max-w-7xl mx-auto px-4 space-y-4 pt-4">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-2">
            Related Local Services:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
            {TOP_KEYWORDS.filter((k) => k.slug !== keywordData.slug).map((k) => (
              <NavLink
                key={k.slug}
                to={`/${k.slug}`}
                onNavigate={onNavigate}
                className="inline-block p-2.5 rounded-lg bg-white border border-slate-200 hover:border-blue-500 text-left text-slate-700 hover:text-blue-600 transition-all truncate shadow-sm"
              >
                {k.h1}
              </NavLink>
            ))}
          </div>
        </section>

        {/* 9b. DFW CITY PAGES INTERLINKING */}
        <section className="max-w-7xl mx-auto px-4 space-y-4 pt-6 pb-4">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-2">
            Security Camera Installation by DFW City:
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {DFW_CITIES.map((c) => (
              <NavLink
                key={c.slug}
                to={`/${c.slug}`}
                onNavigate={onNavigate}
                className="inline-block px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-500 text-slate-700 hover:text-blue-600 transition-all font-medium shadow-sm"
              >
                {c.cityName}
              </NavLink>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};