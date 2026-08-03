import React, { useState } from 'react';
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  Award,
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Home,
  ChevronRight,
  Wrench,
  HelpCircle,
  HardDrive,
  Camera,
  Smartphone,
  Lock,
  Cpu,
  FileText,
  Radio,
  Zap,
  Briefcase,
  Layers,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { BRAND_ASSETS } from '../data/imagesData';

interface FortWorthPageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const FortWorthSecurityCameraInstallationPage: React.FC<
  FortWorthPageProps
> = ({ onNavigate, onOpenQuoteModal }) => {
  const canonicalUrl =
    'https://fortworthsecuritycameras.com/security-camera-installation-fort-worth-tx';

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Core Service / LocalBusiness schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id':
      'https://fortworthsecuritycameras.com/#security-camera-installation-fort-worth',
    name: 'Security Camera Installation Fort Worth TX',
    serviceType: '4K Security Camera Installation & Commercial CCTV',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://fortworthsecuritycameras.com/#business',
      name: 'Fort Worth Security Cameras',
      image: BRAND_ASSETS.logo,
      telephone: '+18172312962',
      email: 'Leroy@fortworthsecuritycameras.com',
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
    },
    areaServed: [
      { '@type': 'City', name: 'Fort Worth, TX' },
      { '@type': 'City', name: 'Benbrook, TX' },
      { '@type': 'City', name: 'Arlington, TX' },
      { '@type': 'City', name: 'Crowley, TX' },
      { '@type': 'City', name: 'Mansfield, TX' },
      { '@type': 'City', name: 'Keller, TX' },
      { '@type': 'City', name: 'Southlake, TX' },
      { '@type': 'Place', name: 'Tanglewood' },
      { '@type': 'Place', name: 'Ridglea Hills' },
      { '@type': 'Place', name: 'Alliance' },
      { '@type': 'Place', name: 'Sundance Square' },
      { '@type': 'Place', name: 'Stockyards' },
      { '@type': 'Place', name: 'Heritage' },
    ],
    description:
      'Professional security camera and CCTV installation in Fort Worth, TX. 4K PoE surveillance cameras, local NVR storage, hidden Cat6 cabling, AI detection, and zero monthly fees for homes and businesses. Partnered with Jericho Security and Sound (B13764).',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description:
        'Free on-site Fort Worth security camera walkthrough and custom quote.',
    },
  };

  const faqList = [
    {
      question:
        'Do I need a city permit for security camera installation in Fort Worth, TX?',
      answer:
        'No municipal building permit is required for standard closed-circuit security camera installations on private residential or commercial property in Fort Worth. However, if your commercial system includes monitored panic buttons or silent alarms linked to emergency police dispatch, registration with the Fort Worth Police Department is required.',
    },
    {
      question: 'How much does security camera installation cost in Fort Worth?',
      answer:
        'A turnkey 4-camera 4K PoE residential system in Fort Worth typically ranges from $1,595 to $1,995. An 8-camera system ranges from $2,995 to $3,495, while 16-camera commercial rack-mount systems range from $5,995 to $6,895. All pricing includes solid copper Cat6 cabling, local NVR recorder, industrial hard drive storage, professional installation, mobile app setup, and a 1-year warranty with $0 monthly fees.',
    },
    {
      question:
        'How fast can you perform an on-site walkthrough and installation in Fort Worth?',
      answer:
        'Because our shop and service fleet are located directly at 2203 8th Ave in Fort Worth (76110), we can frequently schedule same-day or next-day property walkthroughs and complete your low-voltage installation within 24 to 48 hours.',
    },
    {
      question:
        'How do you hide wire runs on Fort Worth brick and stone homes?',
      answer:
        'Our licensed technicians specialize in interior attic cable routing and eave soffit mounting. We navigate attic spaces and interior wall cavities to drop Cat6 lines cleanly into closets or office space where your NVR rests. No ugly conduit or loose wires are ever left exposed on your home exterior.',
    },
    {
      question:
        'Are there any monthly subscription or cloud storage fees for CCTV?',
      answer:
        'No. You own 100% of your equipment and video data. All video is continuously recorded to an on-site Network Video Recorder (NVR) with local hard drive storage. You get encrypted remote viewing on your iPhone, Android, or PC with zero monthly recurring charges.',
    },
    {
      question:
        'Can you install security cameras for commercial warehouses in North Fort Worth?',
      answer:
        'Yes. We regularly design and install high-bay industrial CCTV systems along the Alliance Texas and Mercantile Center corridors. We install long-range optical zoom cameras, motorized PTZs, license plate recognition (LPR) cameras, and fiber optic backbones for large commercial facilities.',
    },
    {
      question:
        'Who performs the low-voltage cabling and security camera installation?',
      answer:
        'All alarm and security system installations are executed in partnership with licensed contractor Jericho Security and Sound, Texas Class B Security Contractor License Number B13764, ensuring full compliance with Texas DPS regulations and local electrical codes.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id':
      'https://fortworthsecuritycameras.com/#breadcrumb-security-camera-installation-fort-worth',
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
        name: 'Security Camera Installation Fort Worth TX',
        item: canonicalUrl,
      },
    ],
  };

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': canonicalUrl + '#page',
    url: canonicalUrl,
    name: 'Security Camera Installation Fort Worth TX | CCTV Installers',
    description:
      'Fort Worth security camera and CCTV installation for homes, businesses, warehouses, and industrial facilities. 4K PoE cameras, NVR recording, hidden Cat6 wiring. Call 817-231-2962.',
    isPartOf: { '@id': 'https://fortworthsecuritycameras.com/#website' },
    breadcrumb: { '@id': breadcrumbSchema['@id'] },
  };

  return (
    <>
      <SEOHead
        title="Security Camera Installation Fort Worth TX | CCTV Installers"
        description="Fort Worth security camera and CCTV installation for homes, businesses, warehouses, and industrial sites. 4K PoE cameras, NVR recording, hidden Cat6 wiring. Call 817-231-2962."
        canonicalUrl={canonicalUrl}
        schema={serviceSchema}
      />

      {/* Structured Data Scripts */}
      <script
        id="faq-schema-fort-worth"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema-fort-worth"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        id="webpage-schema-fort-worth"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema),
        }}
      />

      <div className="bg-[#F8FAFC] min-h-screen pb-20 font-sans text-slate-900">
        <Breadcrumb
          items={[
            { label: 'Home', path: '/' },
            {
              label: 'Security Camera Installation Fort Worth TX',
              path: '/security-camera-installation-fort-worth-tx',
            },
          ]}
          onNavigate={onNavigate}
          variant="light"
        />

        {/* Hero Section */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-16 lg:py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20 z-10 pointer-events-none" />
          <SafeImage
            loading="eager"
            src="https://www.accesshardware.net/wp-content/uploads/security-cameras-scaled-1.webp"
            alt="Security camera installation in Fort Worth TX with 4K CCTV cameras mounted on commercial and residential properties"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 sm:opacity-90 pointer-events-none animate-kenburns"
          />

          <div className="relative z-20 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#007EFF]/20 border border-[#007EFF]/40 text-[#3398FF] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Fort Worth, TX Local Security Camera Headquarters</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none text-shadow-hero">
                  Security Camera Installation Fort Worth TX
                </h1>

                <p className="text-sm sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl">
                  Turnkey 4K PoE security camera and CCTV systems, concealed Cat6
                  cabling, local NVR storage, and smart AI detection for Fort Worth
                  homes, warehouses, and storefronts — with{' '}
                  <strong className="text-white font-bold">$0 monthly fees</strong>.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#007EFF] shrink-0" />
                    <span>4K Ultra HD Clarity</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#007EFF] shrink-0" />
                    <span>$0 Monthly Fees</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#007EFF] shrink-0" />
                    <span>Licensed B13764 Partner</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#007EFF] shrink-0" />
                    <span>Hidden Attic Wiring</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <button
                    onClick={() =>
                      onOpenQuoteModal('Fort Worth 4K Security Camera Package')
                    }
                    className="px-8 py-4 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] active:bg-[#66B2FF] text-white font-black text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5"
                  >
                    <Camera className="w-4 h-4" />
                    <span>Get Free Fort Worth Quote</span>
                  </button>

                  <a
                    href="tel:18172312962"
                    className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all flex items-center justify-center gap-2.5"
                  >
                    <Phone className="w-4 h-4 text-[#007EFF]" />
                    <span>Call (817) 231-2962</span>
                  </a>
                </div>
              </div>

              {/* Quick Trust Box */}
              <div className="lg:col-span-4 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white space-y-4 shadow-2xl">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#007EFF] flex items-center justify-center font-black text-lg">
                    FW
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Fort Worth Shop Location</h3>
                    <p className="text-xs text-slate-300">
                      2203 8th Ave, Fort Worth, TX 76110
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-300">Response Time:</span>
                    <span className="font-bold text-white">
                      Same-Day Walkthroughs
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-300">Warranty:</span>
                    <span className="font-bold text-white">
                      1-Year Hardware &amp; Labor
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-300">Remote Access:</span>
                    <span className="font-bold text-white">
                      iPhone, Android &amp; PC
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-300">License:</span>
                    <span className="font-bold text-white">
                      Texas DPS B13764 Partner
                    </span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onOpenQuoteModal('Fort Worth Express Consult')
                  }
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all"
                >
                  Schedule On-Site Audit
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Fort Worth Context Section */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
                <Building2 className="w-3.5 h-3.5" />
                <span>
                  Serving Fort Worth neighborhoods &amp; commercial corridors
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Fort Worth CCTV Camera Specialists
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fort Worth features a diverse urban and suburban terrain—from
                historic craftsman homes in Fairmount and brick ranch estates in
                Ridglea Hills to multi-story stone residences in Tanglewood and
                heavy tilt-wall industrial distribution centers along the Alliance
                corridor.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mounting security cameras across Fort Worth real estate requires
                technical low-voltage expertise: custom stone junction boxes, deep
                soffit eave mounts, and clean attic wiring paths. Our local
                installation teams route solid copper Cat6 cabling inside interior
                wall cavities, attic crawlspaces, and roof eaves so no unsightly
                conduit or loose wiring is ever exposed on your facade.
              </p>

              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-2 font-bold text-[#007EFF]">
                  <Award className="w-4 h-4" />
                  <span>
                    Licensed security contractor partner: Jericho Security and Sound
                    (B13764)
                  </span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  All security camera and alarm system installations in Fort Worth
                  are executed in partnership with licensed contractor Jericho
                  Security and Sound, Texas Class B Security Contractor License
                  Number B13764. You receive code-compliant low-voltage wiring,
                  clean attic cable runs, and dependable local Fort Worth tech
                  support.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-md space-y-4">
                <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#007EFF]" />
                  <span>Fort Worth Coverage Zones</span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">
                      Key Neighborhoods:
                    </h4>
                    <p className="text-slate-600 leading-normal">
                      Tanglewood, Ridglea Hills, Fairmount Historic District, TCU
                      Colonial Corridor, Ryan Place, Arlington Heights, Overton
                      Park, Summerfields, Heritage Trace, Lake Worth Estates.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">
                      Commercial &amp; Industrial Corridors:
                    </h4>
                    <p className="text-slate-600 leading-normal">
                      Alliance Texas Industrial Park, Sundance Square Business
                      District, Mercantile Center Logistics Park, Clearfork Retail &
                      Dining, Fossil Creek Commercial Belt, Hulen Street Shopping
                      Corridor.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">
                      Fort Worth Zip Codes:
                    </h4>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {[
                        '76102',
                        '76107',
                        '76109',
                        '76110',
                        '76116',
                        '76132',
                        '76133',
                        '76137',
                        '76179',
                        '76104',
                        '76112',
                      ].map((zip) => (
                        <span
                          key={zip}
                          className="px-2 py-1 bg-slate-100 rounded text-[11px] font-mono text-slate-700"
                        >
                          {zip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Security Solutions Grid */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Fort Worth CCTV Camera Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Custom CCTV and security camera systems for Fort Worth homes,
              businesses, and industrial sites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Residential */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                Residential 4K PoE Cameras
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean eave-mounted 4K turret cameras with hidden attic Cat6 cabling.
                Ultra-bright night vision, active deterrence strobe lights, human
                detection, and $0 monthly subscriptions for Fort Worth homes.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Hidden attic cable routing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>24/7 continuous local NVR storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>ColorVu full-color night vision</span>
                </li>
              </ul>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                Commercial CCTV &amp; POS Integration
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rack-mount NVR servers, multi-port PoE Gigabit switches,
                NDAA-compliant dome cameras, and cash register transaction overlay
                for Fort Worth retail, offices, and restaurants.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Server rack wire management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Multi-user encrypted phone app</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>NDAA &amp; TAA defense compliance</span>
                </li>
              </ul>
            </div>

            {/* Industrial & LPR */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                Warehouse &amp; LPR Gate Cameras
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Optical License Plate Recognition (LPR) cameras capturing moving
                license tags at highway speeds in low light, long-range optical zoom
                for high-bay racking, and fiber optic backbones for large industrial
                yards.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>License plate capture optics</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Long-range PTZ motorized zoom</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Wireless point-to-point gate bridges</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Packages & Pricing Section */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007EFF]/20 text-[#3398FF] text-xs font-bold uppercase tracking-wider">
                Transparent Fort Worth Pricing
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Fort Worth CCTV Installation Packages
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                All-inclusive turnkey estimates with cameras, NVR recorder,
                industrial hard drive, solid copper Cat6 cabling, professional
                installation &amp; 1-year warranty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Package 1 */}
              <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-extrabold text-[#007EFF] uppercase tracking-wider">
                    Entry Residential
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    4-Camera 4K PoE System
                  </h3>
                  <div className="text-3xl font-black text-white">
                    $1,595{' '}
                    <span className="text-xs text-slate-400 font-normal">
                      to $1,995
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ideal for front porches, driveways, rear patios &amp; side
                    gates of standard Fort Worth homes.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      ✓ 4x 4K Ultra HD PoE Turret Cameras
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ 4-Channel NVR + 2TB Hard Drive
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Concealed Attic Cat6 Cabling
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Remote App Setup &amp; Training
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() =>
                    onOpenQuoteModal(
                      '4-Camera 4K Fort Worth Package ($1,595-$1,995)',
                    )
                  }
                  className="w-full py-3 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] text-white font-black text-xs transition-all"
                >
                  Select 4-Camera Package
                </button>
              </div>

              {/* Package 2 */}
              <div className="bg-slate-800/80 rounded-2xl p-6 border border-[#007EFF] relative flex flex-col justify-between space-y-6 shadow-xl">
                <div className="absolute -top-3 right-6 bg-[#007EFF] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  Most Popular
                </div>
                <div className="space-y-4">
                  <div className="text-xs font-extrabold text-[#007EFF] uppercase tracking-wider">
                    Estate / Retail
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    8-Camera 4K PoE System
                  </h3>
                  <div className="text-3xl font-black text-white">
                    $2,995{' '}
                    <span className="text-xs text-slate-400 font-normal">
                      to $3,495
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    360-degree complete perimeter defense for large Fort Worth homes,
                    corner lots &amp; retail shops.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      ✓ 8x 4K Ultra HD PoE Turret/Dome Cameras
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ 8-Channel NVR + 4TB Hard Drive
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Smart AI Human &amp; Vehicle Detection
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ ColorVu Full-Color Night Vision
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() =>
                    onOpenQuoteModal(
                      '8-Camera 4K Fort Worth Package ($2,995-$3,495)',
                    )
                  }
                  className="w-full py-3 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] text-white font-black text-xs transition-all"
                >
                  Select 8-Camera Package
                </button>
              </div>

              {/* Package 3 */}
              <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-extrabold text-[#007EFF] uppercase tracking-wider">
                    Commercial / Industrial
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    16-Camera Commercial System
                  </h3>
                  <div className="text-3xl font-black text-white">
                    $5,995{' '}
                    <span className="text-xs text-slate-400 font-normal">
                      to $6,895
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Enterprise coverage for warehouses, auto lots, manufacturing
                    plants &amp; multi-office complexes.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      ✓ 16x 4K Commercial PoE Cameras
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ 16-Channel Rack-Mount NVR + 8TB RAID
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Managed Gigabit PoE Switch
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Patch Panel &amp; Rack Termination
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() =>
                    onOpenQuoteModal(
                      '16-Camera Commercial Fort Worth Package ($5,995-$6,895)',
                    )
                  }
                  className="w-full py-3 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] text-white font-black text-xs transition-all"
                >
                  Select 16-Camera Package
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="max-w-4xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Fort Worth CCTV Camera FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear, practical answers for Fort Worth property owners and business
              managers:
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 text-sm flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronRight
                    className={`w-4 h-4 text-[#007EFF] transition-transform duration-200 shrink-0 ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 pt-16">
          <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-blue-950 rounded-3xl p-8 sm:p-12 border border-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007EFF]/20 text-[#3398FF] text-xs font-bold">
                Local Fort Worth Office: 2203 8th Ave
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Ready to Protect Your Fort Worth Property?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Contact Leroy Reber and our Fort Worth low-voltage installation team
                today. We perform a comprehensive property walkthrough and deliver a
                clear, itemized proposal with zero sales pressure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
              <button
                onClick={() =>
                  onOpenQuoteModal('Fort Worth Security Camera Quote')
                }
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] text-white font-black text-sm transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Request Free Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:18172312962"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#007EFF]" />
                <span>(817) 231-2962</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};