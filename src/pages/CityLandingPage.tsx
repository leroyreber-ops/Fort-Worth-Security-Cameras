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
import { NavLink } from '../components/NavLink';
import { BRAND_ASSETS } from '../data/imagesData';
import { CityInfo } from '../types';
import { DFW_CITIES } from '../data/citiesData';

interface CityLandingPageProps {
  cityData: CityInfo;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const CityLandingPage: React.FC<CityLandingPageProps> = ({
  cityData,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const canonicalUrl = `https://fortworthsecuritycameras.com/${cityData.slug}`;

  // Local JSON-LD Schemas
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Security Camera Installation ${cityData.cityName} TX`,
    serviceType: '4K Security Camera Installation & Commercial CCTV',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Fort Worth Security Cameras',
      image: BRAND_ASSETS.logo,
      telephone: '817-231-2962',
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
        latitude: cityData.lat || 32.7555,
        longitude: cityData.lng || -97.3308,
      },
    },
    areaServed: [
      { '@type': 'City', name: cityData.cityName },
      ...(cityData.neighborhoods || []).map((n) => ({ '@type': 'Place', name: n })),
    ],
    description: `Professional security camera and CCTV installation in ${cityData.cityName}, TX. 4K PoE surveillance cameras, hidden Cat6 cabling, local NVR recording, AI human/vehicle detection, and zero monthly fees. Partnered with Jericho Security and Sound (B13764).`,
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: `Free On-Site ${cityData.cityName} Security Assessment & Quote`,
    },
  };

  const defaultFaqs = [
    {
      question: `Do I need a city permit for security camera installation in ${cityData.cityName}, TX?`,
      answer: `No municipal building permit is required for standard closed-circuit security camera installations on private residential or commercial property in ${cityData.cityName}. If your commercial system includes monitored panic buttons linked to emergency police dispatch, local registration may apply.`,
    },
    {
      question: `How much does security camera installation cost in ${cityData.cityName}?`,
      answer: `Turnkey 4-camera 4K PoE residential systems in ${cityData.cityName} typically range from $1,595 to $1,995. An 8-camera system ranges from $2,995 to $3,495, while 16-camera commercial rack-mount systems range from $5,995 to $6,895. All pricing includes solid copper Cat6 cabling, local NVR recorder, industrial hard drive storage, professional installation, mobile app setup, and a 1-year warranty with $0 monthly fees.`,
    },
    {
      question: `How fast can you perform an on-site walkthrough and installation in ${cityData.cityName}?`,
      answer: `Because our shop and service fleet dispatch directly out of 2203 8th Ave in Fort Worth (76110), we frequently schedule same-day or next-day property walkthroughs in ${cityData.cityName} and complete low-voltage installations within 24 to 48 hours.`,
    },
    {
      question: `How do you hide wire runs on ${cityData.cityName} homes and commercial facades?`,
      answer: `Our licensed technicians specialize in interior attic cable routing and eave soffit mounting. We navigate attic crawlspaces and interior wall cavities to drop Cat6 lines cleanly into closets or office space where your NVR rests. No ugly conduit or loose wires are left exposed on your home exterior.`,
    },
    {
      question: `Are there any monthly subscription or cloud storage fees in ${cityData.cityName}?`,
      answer: `No. You own 100% of your equipment and video data. All video is continuously recorded to an on-site Network Video Recorder (NVR) with local hard drive storage. You get encrypted remote viewing on your iPhone, Android, or PC with zero monthly recurring charges.`,
    },
  ];

  const faqsToDisplay = cityData.faqs && cityData.faqs.length > 0 ? cityData.faqs : defaultFaqs;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsToDisplay.map((faq) => ({
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
        name: `Security Camera Installation ${cityData.cityName} TX`,
        item: canonicalUrl,
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: cityData.metaTitle || `${cityData.heroH1 || `Security Camera Installation ${cityData.cityName} TX`} | 4K CCTV Installers`,
    description: cityData.metaDescription || `Professional security camera & CCTV installation in ${cityData.cityName}, TX (${cityData.county}). 4K PoE cameras, local NVR recording, hidden Cat6 wiring. Call 817-231-2962.`,
    isPartOf: { '@id': 'https://fortworthsecuritycameras.com/#website' },
    breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
  };

  return (
    <>
      <SEOHead
        title={cityData.metaTitle || `${cityData.heroH1 || `Security Camera Installation ${cityData.cityName} TX`} | 4K CCTV Installers`}
        description={cityData.metaDescription || `Professional security camera & CCTV installation in ${cityData.cityName}, TX (${cityData.county}). 4K PoE cameras, local NVR recording, hidden Cat6 wiring. Call 817-231-2962.`}
        canonicalUrl={canonicalUrl}
        schema={schema}
      />

      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="bg-[#F8FAFC] min-h-screen pb-20 font-sans text-slate-900">
        <Breadcrumb
          path={`/${cityData.slug}`}
          titleOverride={`${cityData.cityName}, TX Security Cameras`}
          onNavigate={onNavigate}
          variant="light"
        />

        {/* Hero Section */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-16 lg:py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20 z-10 pointer-events-none" />
          <SafeImage
            loading="eager"
            src="https://www.accesshardware.net/wp-content/uploads/security-cameras-scaled-1.webp"
            alt={`${cityData.cityName} TX security camera installation 4K CCTV camera system header background`}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 sm:opacity-90 pointer-events-none animate-kenburns"
          />

          <div className="relative z-20 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#007EFF]/20 border border-[#007EFF]/40 text-[#3398FF] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{cityData.cityName}, {cityData.county} Security Camera Experts</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none text-shadow-hero">
                  {cityData.heroH1 || `Security Camera Installation ${cityData.cityName} TX`}
                </h1>

                <p className="text-sm sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl">
                  {cityData.heroSubheadline || `Turnkey 4K PoE security camera and CCTV systems, concealed Cat6 cabling, local NVR storage, and smart AI detection for ${cityData.cityName} homes, warehouses, and storefronts—with $0 monthly fees.`}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#007EFF] shrink-0" />
                    <span>4K Ultra HD Clarity</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#007EFF] shrink-0" />
                    <span>$0 Monthly Fees</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#007EFF] shrink-0" />
                    <span>Licensed B13764</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#007EFF] shrink-0" />
                    <span>Hidden Attic Wiring</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <button
                    onClick={() => onOpenQuoteModal(`${cityData.cityName} 4K Security Camera Package`)}
                    className="px-8 py-4 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] active:bg-[#66B2FF] text-white font-black text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5"
                  >
                    <Camera className="w-4 h-4" />
                    <span>Get Free {cityData.cityName} Quote</span>
                  </button>

                  <a
                    href="tel:8172312962"
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
                  <div className="w-10 h-10 rounded-xl bg-[#007EFF] flex items-center justify-center font-black text-sm">
                    {cityData.cityName.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{cityData.cityName} Service Dispatch</h3>
                    <p className="text-xs text-slate-300">2203 8th Ave, Fort Worth, TX 76110</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-300">Dispatch Target:</span>
                    <span className="font-bold text-white">{cityData.cityName}, TX</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-300">Response Time:</span>
                    <span className="font-bold text-white">Same-Day Walkthroughs</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-300">Warranty:</span>
                    <span className="font-bold text-white">1-Year Hardware & Labor</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-300">Remote Access:</span>
                    <span className="font-bold text-white">iPhone, Android & PC</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-300">License:</span>
                    <span className="font-bold text-white">Texas DPS B13764 Partner</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuoteModal(`${cityData.cityName} Express Consult`)}
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all"
                >
                  Schedule On-Site Audit
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Local City Context Section */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
                <Building2 className="w-3.5 h-3.5" />
                <span>Serving all {cityData.cityName} neighborhoods & commercial hubs</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {cityData.section2H2 || `${cityData.cityName} CCTV Camera Specialists & Local Installers`}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {cityData.description}
              </p>

              {cityData.localOverview && (
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2 text-[#007EFF]">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Why {cityData.cityName} Properties Require Enterprise 4K Surveillance</span>
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {cityData.localOverview}
                  </p>
                </div>
              )}

              {cityData.historicalContext && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {cityData.historicalContext}
                </p>
              )}

              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-2 font-bold text-[#007EFF]">
                  <Award className="w-4 h-4" />
                  <span>Licensed Security Contractor Partner: Jericho Security and Sound (B13764)</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  All security camera and alarm system installations in {cityData.cityName} are executed in partnership with licensed contractor Jericho Security and Sound, Texas Class B Security Contractor License Number B13764. You receive code-compliant low-voltage wiring, clean attic cable runs, and dependable local tech support.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-md space-y-4">
                <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#007EFF]" />
                  <span>{cityData.cityName} Coverage & Zip Codes</span>
                </h3>

                <div className="space-y-3 text-xs">
                  {cityData.neighborhoods && cityData.neighborhoods.length > 0 && (
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Key Neighborhoods:</h4>
                      <p className="text-slate-600 leading-normal">
                        {cityData.neighborhoods.join(', ')}
                      </p>
                    </div>
                  )}

                  {cityData.commercialHubs && cityData.commercialHubs.length > 0 && (
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Commercial & Retail Corridors:</h4>
                      <p className="text-slate-600 leading-normal">
                        {cityData.commercialHubs.join(', ')}
                      </p>
                    </div>
                  )}

                  {cityData.zipCodes && cityData.zipCodes.length > 0 && (
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">{cityData.cityName} Zip Codes:</h4>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cityData.zipCodes.map((zip) => (
                          <span key={zip} className="px-2 py-1 bg-slate-100 rounded text-[11px] font-mono text-slate-700">
                            {zip}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {cityData.highlights && cityData.highlights.length > 0 && (
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Local Landmarks:</h4>
                      <p className="text-slate-600 leading-normal">
                        {cityData.highlights.join(' • ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive: Architectural Details & Crime Context Grid */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Architecture & Installation */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Custom Mounting & Hidden Wiring for {cityData.cityName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {cityData.architecturalDetails || `Properties in ${cityData.cityName} require customized low-voltage wiring solutions. We route Cat6 cabling inside interior attic crawlspaces, soffits, and wall cavities to keep wires 100% hidden on residential facades and commercial buildings.`}
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Hidden attic wire routing (zero dangling cables)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Weatherproof metal junction boxes on brick & stone</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Low-profile eave-mount 4K turret camera enclosures</span>
                </li>
              </ul>
            </div>

            {/* Crime Prevention & AI */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Local Crime Deterrence & Smart AI in {cityData.cityName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {cityData.crimeContext || `Protecting ${cityData.cityName} homes and businesses against porch piracy, driveway break-ins, and property crime requires active deterrence. Our 4K cameras feature AI human/vehicle classification, ColorVu night vision, and instant mobile alerts.`}
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Smart AI filtering (eliminates false tree/pet alerts)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>24/7 ColorVu full-color night vision optics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Active deterrence strobe lights & audible warnings</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Local Regulations Box */}
          {cityData.regulations && (
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-sm space-y-3">
              <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#007EFF]" />
                <span>Permits & HOA Guidelines in {cityData.cityName}, TX</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {cityData.regulations}
              </p>
            </div>
          )}
        </section>

        {/* Core Security Solutions Grid */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              {cityData.solutionsH2 || `${cityData.cityName} CCTV Camera Solutions & 4K Systems`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Tailored surveillance camera configurations for {cityData.cityName} residential homes, retail storefronts, and industrial sites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Residential */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">Residential 4K PoE Cameras</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clean eave-mounted 4K turret cameras with hidden attic Cat6 cabling. Ultra-bright night vision, active deterrence strobe lights, human detection, and $0 monthly subscriptions.
                </p>
                {cityData.residentialSolutions && (
                  <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                    {cityData.residentialSolutions}
                  </div>
                )}
              </div>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
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
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">Commercial CCTV & POS Integration</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rack-mount NVR servers, multi-port PoE Gigabit switches, NDAA-compliant dome cameras, and cash register transaction overlay for {cityData.cityName} retail and offices.
                </p>
                {cityData.commercialSolutions && (
                  <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                    {cityData.commercialSolutions}
                  </div>
                )}
              </div>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
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
                  <span>NDAA & TAA defense compliance</span>
                </li>
              </ul>
            </div>

            {/* Industrial & LPR */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">Warehouse & LPR Gate Cameras</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Optical License Plate Recognition (LPR) cameras capturing moving license tags at 75 MPH in pitch dark, long-range optical zoom for high-bay racking, and fiber optic backbones.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>License plate capture optics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Long-range PTZ motorized zoom</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Wireless point-to-point gate bridges</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Case Study / Project Spotlight */}
        {cityData.localCaseStudy && (
          <section className="max-w-7xl mx-auto px-4 pt-16 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#007EFF]/20 border border-[#007EFF]/40 text-[#3398FF] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>{cityData.cityName} Real Installation Spotlight</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-white">
                {cityData.localCaseStudy.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs text-slate-300">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
                  <div className="text-[#007EFF] font-bold uppercase text-[10px]">The Challenge</div>
                  <p className="leading-relaxed">{cityData.localCaseStudy.challenge}</p>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
                  <div className="text-emerald-400 font-bold uppercase text-[10px]">Our Low-Voltage Solution</div>
                  <p className="leading-relaxed">{cityData.localCaseStudy.solution}</p>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
                  <div className="text-amber-400 font-bold uppercase text-[10px]">Security Result</div>
                  <p className="leading-relaxed">{cityData.localCaseStudy.result}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* City-Specific Testimonials / Reviews */}
        {cityData.localTestimonials && cityData.localTestimonials.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 pt-16 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>Local {cityData.cityName} Reviews</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                What {cityData.cityName} Property Owners Say
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Verified feedback from residential homeowners and commercial managers in {cityData.cityName}, TX.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityData.localTestimonials.map((t, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 italic leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900 block">{t.author}</span>
                      <span className="text-slate-500 text-[11px]">{t.location}</span>
                    </div>
                    <span className="px-2 py-0.5 bg-blue-50 text-[#007EFF] rounded font-semibold text-[10px]">
                      {t.projectType}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Step-by-Step Low-Voltage Installation Process in City */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              {cityData.processH2 || `Our 4-Step ${cityData.cityName} Low-Voltage Installation Process`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              How DFW Wholesale Security executes clean, craftsman-level security camera installations across {cityData.cityName}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(cityData.installationProcessSteps || [
              {
                step: '01',
                title: 'On-Site Security Assessment',
                detail: `We perform a thorough walkthrough of your ${cityData.cityName} property, mapping sightlines, lighting conditions, entry points, and attic crawlspaces.`,
              },
              {
                step: '02',
                title: 'Clean Attic & Wall Cable Runs',
                detail: `Solid copper Cat6 lines are routed inside attic spaces, wall cavities, and soffits, ensuring zero loose wires or unsightly conduit on your building facade.`,
              },
              {
                step: '03',
                title: 'Precision Mounting & Aiming',
                detail: `4K PoE turret or dome cameras are mounted to weatherproof junction boxes, positioned with optical precision, and sealed against Texas humidity and heat.`,
              },
              {
                step: '04',
                title: 'NVR Config & Smartphone Sync',
                detail: `We install your local NVR, configure 24/7 recording, set up AI human/vehicle alerts, and train you on viewing live and recorded video on your phone with $0 monthly fees.`,
              },
            ]).map((st, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative">
                <span className="text-3xl font-black text-[#007EFF]/20">{st.step}</span>
                <h3 className="font-bold text-slate-900 text-sm">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages & Pricing Section */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007EFF]/20 text-[#3398FF] text-xs font-bold uppercase tracking-wider">
                Transparent {cityData.cityName} Pricing
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                {cityData.packagesH2 || `${cityData.cityName} CCTV Installation Packages & Pricing`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                All-inclusive turnkey estimates with cameras, NVR recorder, industrial hard drive, solid copper Cat6 cabling, professional installation & 1-year warranty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Package 1 */}
              <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-extrabold text-[#007EFF] uppercase tracking-wider">Entry Residential</div>
                  <h3 className="text-xl font-bold text-white">4-Camera 4K PoE System</h3>
                  <div className="text-3xl font-black text-white">$1,595 <span className="text-xs text-slate-400 font-normal">to $1,995</span></div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ideal for front porches, driveways, rear patios & side gates of standard {cityData.cityName} homes.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">✓ 4x 4K Ultra HD PoE Turret Cameras</li>
                    <li className="flex items-center gap-2">✓ 4-Channel NVR + 2TB Hard Drive</li>
                    <li className="flex items-center gap-2">✓ Concealed Attic Cat6 Cabling</li>
                    <li className="flex items-center gap-2">✓ Remote App Setup & Training</li>
                  </ul>
                </div>
                <button
                  onClick={() => onOpenQuoteModal(`4-Camera 4K ${cityData.cityName} Package ($1,595-$1,995)`)}
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
                  <div className="text-xs font-extrabold text-[#007EFF] uppercase tracking-wider">Estate / Retail</div>
                  <h3 className="text-xl font-bold text-white">8-Camera 4K PoE System</h3>
                  <div className="text-3xl font-black text-white">$2,995 <span className="text-xs text-slate-400 font-normal">to $3,495</span></div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    360-degree complete perimeter defense for large {cityData.cityName} homes, corner lots & retail shops.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">✓ 8x 4K Ultra HD PoE Turret/Dome Cameras</li>
                    <li className="flex items-center gap-2">✓ 8-Channel NVR + 4TB Hard Drive</li>
                    <li className="flex items-center gap-2">✓ Smart AI Human & Vehicle Detection</li>
                    <li className="flex items-center gap-2">✓ ColorVu Full-Color Night Vision</li>
                  </ul>
                </div>
                <button
                  onClick={() => onOpenQuoteModal(`8-Camera 4K ${cityData.cityName} Package ($2,995-$3,495)`)}
                  className="w-full py-3 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] text-white font-black text-xs transition-all"
                >
                  Select 8-Camera Package
                </button>
              </div>

              {/* Package 3 */}
              <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-extrabold text-[#007EFF] uppercase tracking-wider">Commercial / Industrial</div>
                  <h3 className="text-xl font-bold text-white">16-Camera Commercial System</h3>
                  <div className="text-3xl font-black text-white">$5,995 <span className="text-xs text-slate-400 font-normal">to $6,895</span></div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Enterprise coverage for warehouses, auto lots, manufacturing plants & multi-office complexes.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">✓ 16x 4K Commercial PoE Cameras</li>
                    <li className="flex items-center gap-2">✓ 16-Channel Rack-Mount NVR + 8TB RAID</li>
                    <li className="flex items-center gap-2">✓ Managed Gigabit PoE Switch</li>
                    <li className="flex items-center gap-2">✓ Patch Panel & Rack Termination</li>
                  </ul>
                </div>
                <button
                  onClick={() => onOpenQuoteModal(`16-Camera Commercial ${cityData.cityName} Package ($5,995-$6,895)`)}
                  className="w-full py-3 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] text-white font-black text-xs transition-all"
                >
                  Select 16-Camera Package
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              {cityData.faqH2 || `Frequently Asked Questions About ${cityData.cityName} Security Cameras`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Common questions about security camera installation in {cityData.cityName}, TX.
            </p>
          </div>

          <div className="space-y-3">
            {faqsToDisplay.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-[#007EFF] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Related Low-Voltage Services in City (Internal Linking) */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Related Low-Voltage & Security Services in {cityData.cityName}, TX
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Beyond security camera installation, we provide complete low-voltage cabling and technology integration for {cityData.cityName} homes and commercial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <NavLink
              to="/residential-security-camera-installation-fort-worth"
              onNavigate={onNavigate}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#007EFF] hover:shadow-md transition-all text-left flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold shrink-0 group-hover:bg-[#007EFF] group-hover:text-white transition-colors">
                <Home className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#007EFF] transition-colors flex items-center gap-1">
                  <span>Residential Security Cameras</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  4K PoE home cameras, hidden attic wire drops, and zero monthly fees for {cityData.cityName} homeowners.
                </p>
              </div>
            </NavLink>

            <NavLink
              to="/commercial-security-camera-installation-fort-worth"
              onNavigate={onNavigate}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#007EFF] hover:shadow-md transition-all text-left flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold shrink-0 group-hover:bg-[#007EFF] group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#007EFF] transition-colors flex items-center gap-1">
                  <span>Commercial CCTV Systems</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Enterprise NVR rack servers, NDAA cameras, and cash register POS integration in {cityData.cityName}.
                </p>
              </div>
            </NavLink>

            <NavLink
              to="/network-cable-installation-fort-worth"
              onNavigate={onNavigate}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#007EFF] hover:shadow-md transition-all text-left flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold shrink-0 group-hover:bg-[#007EFF] group-hover:text-white transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#007EFF] transition-colors flex items-center gap-1">
                  <span>Network Cat6 Cabling</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Structured Ethernet drops, server patch panels, and fiber optic backbones for {cityData.cityName} offices.
                </p>
              </div>
            </NavLink>

            <NavLink
              to="/tv-wall-mounting-installation-fort-worth"
              onNavigate={onNavigate}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#007EFF] hover:shadow-md transition-all text-left flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold shrink-0 group-hover:bg-[#007EFF] group-hover:text-white transition-colors">
                <Zap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#007EFF] transition-colors flex items-center gap-1">
                  <span>TV Wall Mounting</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Concealed wire TV mounting over brick fireplaces and conference room displays in {cityData.cityName}.
                </p>
              </div>
            </NavLink>

            <NavLink
              to="/ring-video-doorbell-installation-fort-worth"
              onNavigate={onNavigate}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#007EFF] hover:shadow-md transition-all text-left flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold shrink-0 group-hover:bg-[#007EFF] group-hover:text-white transition-colors">
                <Radio className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#007EFF] transition-colors flex items-center gap-1">
                  <span>Ring & Video Doorbells</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Hardwired video doorbells, transformer upgrades, and smart lock integration for {cityData.cityName} homes.
                </p>
              </div>
            </NavLink>

            <NavLink
              to="/business-communications-fort-worth"
              onNavigate={onNavigate}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#007EFF] hover:shadow-md transition-all text-left flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold shrink-0 group-hover:bg-[#007EFF] group-hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#007EFF] transition-colors flex items-center gap-1">
                  <span>Business Communications</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  VoIP phone systems, intercom access control, and commercial audio for {cityData.cityName} businesses.
                </p>
              </div>
            </NavLink>
          </div>
        </section>

        {/* DFW Service Cities Grid */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-black text-slate-900">
              Explore Other DFW Service Cities
            </h2>
            <p className="text-xs text-slate-500">
              We provide turnkey 4K security camera installations across the entire Fort Worth metroplex.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {DFW_CITIES.map((c) => (
              <NavLink
                key={c.slug}
                to={`/${c.slug}`}
                onNavigate={onNavigate}
                className={`inline-block px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  c.slug === cityData.slug
                    ? 'bg-[#007EFF] text-white shadow-sm'
                    : 'bg-white border border-[#E5E5E5] text-slate-700 hover:border-[#007EFF] hover:text-[#007EFF]'
                }`}
              >
                {c.cityName}
              </NavLink>
            ))}
          </div>
        </section>

        {/* Bottom Callout CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 pt-16">
          <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-[#007EFF]/30 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Ready to Protect Your {cityData.cityName} Property?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal">
                Schedule a free on-site walkthrough with our licensed low-voltage experts. Get a custom turnkey proposal for 4K cameras, hidden Cat6 cabling, local NVR recording, and $0 monthly fees.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={() => onOpenQuoteModal(`Bottom Banner ${cityData.cityName} Consultation`)}
                className="px-6 py-3.5 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Camera className="w-4 h-4" />
                <span>Get Free Quote</span>
              </button>
              <a
                href="tel:8172312962"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
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
