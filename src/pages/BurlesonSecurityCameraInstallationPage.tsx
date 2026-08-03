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
import { BRAND_ASSETS, SURVEILLANCE_IMAGES } from '../data/imagesData';


interface BurlesonPageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}


export const BurlesonSecurityCameraInstallationPage: React.FC<BurlesonPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const canonicalUrl =
    'https://fortworthsecuritycameras.com/security-camera-installation-burleson-tx';


  const [openFaq, setOpenFaq] = useState<number | null>(0);


  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Security Camera Installation Burleson TX',
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
        latitude: 32.7555,
        longitude: -97.3308,
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Burleson' },
      { '@type': 'City', name: 'Crowley' },
      { '@type': 'City', name: 'Joshua' },
      { '@type': 'City', name: 'Alvarado' },
      { '@type': 'Place', name: 'Old Town Burleson' },
      { '@type': 'Place', name: 'Hidden Creek' },
      { '@type': 'Place', name: 'Alsbury Heights' },
      { '@type': 'Place', name: 'Mountain Valley' },
    ],
    description:
      'Professional security camera and CCTV installation in Burleson, TX. 4K PoE surveillance cameras, hidden Cat6 cabling, local NVR recording, wireless barn/shop bridge links, and zero monthly fees. Partnered with Jericho Security and Sound (B13764).',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free On-Site Burleson Security Assessment & Proposal',
    },
  };


  const faqList = [
    {
      question: 'Can you link security cameras on a detached shop, barn, or gate back to my Burleson home?',
      answer:
        'Yes. We regularly deploy high-speed wireless point-to-point bridge antennas that beam 4K video from detached workshops, barns, or gate entries directly back to your main house NVR—up to 1 mile away—so everything records seamlessly on one central system without trenching long cables.',
    },
    {
      question: 'How much does residential security camera installation cost in Burleson, TX?',
      answer:
        'Most Burleson home security camera installations fall between $1,595 for a turnkey 4-camera 4K PoE system and $2,995 to $3,495 for an 8-camera estate or acreage package. Commercial storefronts and industrial facilities along SW Wilshire or I-35W range from $5,995+. All quotes include hardware, solid copper Cat6 cabling, professional installation, app setup, and $0 monthly fees.',
    },
    {
      question: 'Do your camera systems require a monthly cloud subscription fee in Burleson?',
      answer:
        'No. There are $0 per month in mandatory fees. Your cameras record continuously to an on-site 4K Network Video Recorder (NVR) with local hard drive storage. You own all hardware and video data, enjoying encrypted mobile app access on your smartphone or desktop computer with zero cloud contracts.',
    },
    {
      question: 'How are wires hidden on Burleson homes and metal workshops?',
      answer:
        'Our licensed low-voltage technicians route solid copper Cat6 Ethernet cabling through interior attic spaces, eave soffits, and wall cavities. For metal shops and barns, we use EMT conduit, weather-sealed junction boxes, and direct-burial lines or wireless bridges to keep all wiring clean, protected, and professional.',
    },
    {
      question: 'How quickly can you dispatch a technician to Burleson for a quote or service?',
      answer:
        'Burleson is located just south of our main shop down I-35W. We provide rapid local dispatch to Burleson for on-site property walkthroughs, new installations, camera realignments, and hard drive upgrades within 1 to 2 business days.',
    },
    {
      question: 'Are 4K security cameras effective for SW Wilshire Blvd storefronts and restaurants?',
      answer:
        'Yes. Ultra HD 4K cameras deliver crystal-clear facial detail at entrance doors, sharp license plate recognition in parking lots, and point-of-sale cash register transaction clarity for Burleson retail stores, restaurants, and auto repair shops.',
    },
    {
      question: 'Who performs the security camera installation in Burleson?',
      answer:
        'All camera and security installations are executed in partnership with licensed contractor Jericho Security and Sound, Texas Class B Security Contractor License Number B13764, ensuring compliance with Texas DPS regulations and local electrical codes.',
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
        name: 'Security Camera Installation Burleson TX',
        item: 'https://fortworthsecuritycameras.com/security-camera-installation-burleson-tx',
      },
    ],
  };


  return (
    <>
      <SEOHead
        title="Security Camera Installation Burleson TX | CCTV Installers"
        description="Burleson security camera and CCTV installation for homes, shops and acreage. 4K PoE cameras, NVR recording, hidden Cat6 wiring. Call 817-231-2962."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />


      <div className="bg-[#F8FAFC] min-h-screen pb-20 font-sans text-slate-900">
        <Breadcrumb
          items={[
            { label: 'Home', path: '/' },
            {
              label: 'Security Camera Installation Burleson TX',
              path: '/security-camera-installation-burleson-tx',
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
            alt="Burleson TX security camera installation 4K CCTV camera system header background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 sm:opacity-90 pointer-events-none"
          />


          <div className="relative z-20 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#007EFF]/20 border border-[#007EFF]/40 text-[#3398FF] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Burleson & Johnson / Tarrant County Security Experts</span>
                </div>


                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none">
                  Security Camera Installation Burleson TX
                </h1>


                <p className="text-sm sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl">
                  Custom 4K security camera and CCTV installation for Burleson homes, SW Wilshire storefronts, and acreage. Cat6 cabling, wireless barn & shop bridges, local NVR storage, and <strong className="text-white font-bold">$0 monthly fees</strong>.
                </p>


                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#007EFF] shrink-0" />
                    <span>4K Ultra HD Quality</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#007EFF] shrink-0" />
                    <span>$0 Monthly Subscriptions</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#007EFF] shrink-0" />
                    <span>Licensed Partner B13764</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#007EFF] shrink-0" />
                    <span>Barn & Shop Bridges</span>
                  </div>
                </div>


                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <button
                    onClick={() => onOpenQuoteModal('Burleson 4K Security Camera System')}
                    className="px-8 py-4 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] active:bg-[#66B2FF] text-white font-black text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5"
                  >
                    <Camera className="w-4 h-4" />
                    <span>Get Free Burleson Quote</span>
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


              {/* Quick Summary Card */}
              <div className="lg:col-span-4 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white space-y-4 shadow-2xl">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#007EFF] flex items-center justify-center font-black text-lg">
                    BU
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Burleson Service Zone</h3>
                    <p className="text-xs text-slate-300">Fast Dispatch via I-35W</p>
                  </div>
                </div>


                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-300">Dispatch Speed:</span>
                    <span className="font-bold text-white">1-2 Business Days</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-300">Acreage Support:</span>
                    <span className="font-bold text-white">Wireless Point-to-Point</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-300">Monthly Fees:</span>
                    <span className="font-bold text-white">$0 Continuous Recording</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-300">License:</span>
                    <span className="font-bold text-white">Texas DPS B13764 Partner</span>
                  </div>
                </div>


                <button
                  onClick={() => onOpenQuoteModal('Burleson On-Site Walkthrough')}
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all"
                >
                  Schedule Burleson Walkthrough
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* Local Burleson Context Section */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Serving Burleson, Crowley, Joshua & Alvarado</span>
              </div>


              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Burleson CCTV &amp; Security Camera Specialists
              </h2>


              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Burleson is a rapidly expanding community south of Fort Worth spanning Tarrant and Johnson counties. Properties range from single-family residential subdivisions around Hidden Creek and Alsbury to bustling retail plazas along SW Wilshire Blvd and acreage estates with detached metal workshops or barns.
              </p>


              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Installing security cameras on Burleson acreage properties often requires connecting outbuildings back to the main house. We specialize in high-speed wireless point-to-point bridge antennas that transmit 4K camera streams up to 1 mile across your property without expensive trenching, recording everything on a central NVR.
              </p>


              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-2 font-bold text-[#007EFF]">
                  <Award className="w-4 h-4" />
                  <span>Licensed security contractor partner: Jericho Security and Sound (B13764)</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  All Burleson camera system installations are performed in partnership with licensed contractor Jericho Security and Sound, Texas Class B Security Contractor License Number B13764. Your property receives code-compliant low-voltage wiring and professional execution.
                </p>
              </div>
            </div>


            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-md space-y-4">
                <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#007EFF]" />
                  <span>Burleson Coverage & Neighborhoods</span>
                </h3>


                <div className="space-y-3 text-xs">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Key Neighborhoods:</h4>
                    <p className="text-slate-600 leading-normal">
                      Old Town Burleson, Hidden Creek, Alsbury Heights, Mountain Valley, Shannon Creek, Mound Elementary District, Chisenhall Area.
                    </p>
                  </div>


                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Commercial & Industrial Belts:</h4>
                    <p className="text-slate-600 leading-normal">
                      SW Wilshire Commercial Strip, Burleson Commons Shopping Hub, Old Town Retail Center, I-35W Commercial Corridor, Alsbury Industrial Zone.
                    </p>
                  </div>


                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Burleson Zip Codes:</h4>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['76028', '76097'].map((zip) => (
                        <span key={zip} className="px-2.5 py-1 bg-slate-100 rounded font-mono text-xs text-slate-800 font-semibold">
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


        {/* Feature Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Burleson CCTV Installation Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Low-voltage CCTV and security camera solutions for Burleson homes, shops, and acreage.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Residential */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">Burleson Home Protection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                4K PoE turret cameras mounted cleanly under eave soffits with hidden attic wiring. Smart AI human & vehicle detection prevents false alerts from wind or pets.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Concealed attic cable routing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>ColorVu full-color night vision</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>$0 monthly subscription charges</span>
                </li>
              </ul>
            </div>


            {/* Acreage & Barn Bridges */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">Acreage & Barn Wireless Bridges</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect detached workshops, horse barns, equipment sheds, and driveway gate entries directly back to your main house NVR without digging expensive trenches.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Up to 1-mile wireless range</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Weatherproof metal shop mounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Single centralized NVR recorder</span>
                </li>
              </ul>
            </div>


            {/* Commercial */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">SW Wilshire Commercial CCTV</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                4K dome & turret cameras for Burleson retail stores, restaurants, medical offices, and auto repair shops. Multi-user encrypted mobile app & POS overlay.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Cash register POS transaction overlay</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Server rack & patch panel setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Multi-user smartphone viewing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>


        {/* System Packages */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007EFF]/20 text-[#3398FF] text-xs font-bold uppercase tracking-wider">
                Turnkey Burleson Packages
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Burleson CCTV Installation Packages
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Complete system packages including cameras, NVR, hard drive storage, Cat6 wiring, installation & 1-year warranty.
              </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Package 1 */}
              <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-extrabold text-[#007EFF] uppercase tracking-wider">Home / Entry</div>
                  <h3 className="text-xl font-bold text-white">4-Camera 4K PoE Package</h3>
                  <div className="text-3xl font-black text-white">$1,595 <span className="text-xs text-slate-400 font-normal">to $1,995</span></div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ideal for entry points, driveways, back patios & side gates of Burleson residential homes.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">✓ 4x 4K Ultra HD PoE Turret Cameras</li>
                    <li className="flex items-center gap-2">✓ 4-Channel NVR + 2TB Hard Drive</li>
                    <li className="flex items-center gap-2">✓ Hidden Attic Cat6 Cabling</li>
                    <li className="flex items-center gap-2">✓ Mobile App & Remote Setup</li>
                  </ul>
                </div>
                <button
                  onClick={() => onOpenQuoteModal('4-Camera 4K Burleson Package ($1,595-$1,995)')}
                  className="w-full py-3 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] text-white font-black text-xs transition-all"
                >
                  Select 4-Camera Package
                </button>
              </div>


              {/* Package 2 */}
              <div className="bg-slate-800/80 rounded-2xl p-6 border border-[#007EFF] relative flex flex-col justify-between space-y-6 shadow-xl">
                <div className="absolute -top-3 right-6 bg-[#007EFF] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  Popular Choice
                </div>
                <div className="space-y-4">
                  <div className="text-xs font-extrabold text-[#007EFF] uppercase tracking-wider">Acreage / Estate</div>
                  <h3 className="text-xl font-bold text-white">8-Camera 4K PoE Package</h3>
                  <div className="text-3xl font-black text-white">$2,995 <span className="text-xs text-slate-400 font-normal">to $3,495</span></div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Full 360-degree perimeter protection for larger Burleson properties, corner lots & small retail.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">✓ 8x 4K Ultra HD PoE Turret Cameras</li>
                    <li className="flex items-center gap-2">✓ 8-Channel NVR + 4TB Hard Drive</li>
                    <li className="flex items-center gap-2">✓ Smart AI Human & Vehicle Alerts</li>
                    <li className="flex items-center gap-2">✓ Optional Wireless Barn Bridge</li>
                  </ul>
                </div>
                <button
                  onClick={() => onOpenQuoteModal('8-Camera 4K Burleson Package ($2,995-$3,495)')}
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
                    Comprehensive coverage for commercial plazas, auto repair centers, warehouses & churches.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">✓ 16x 4K Commercial PoE Cameras</li>
                    <li className="flex items-center gap-2">✓ 16-Channel Rack NVR + 8TB RAID</li>
                    <li className="flex items-center gap-2">✓ Managed Gigabit Switch & Patch Panel</li>
                    <li className="flex items-center gap-2">✓ Multi-User Permission Management</li>
                  </ul>
                </div>
                <button
                  onClick={() => onOpenQuoteModal('16-Camera Commercial Burleson Package ($5,995-$6,895)')}
                  className="w-full py-3 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] text-white font-black text-xs transition-all"
                >
                  Select 16-Camera Package
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* FAQs */}
        <section className="max-w-4xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Burleson FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Burleson CCTV Camera Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers for Burleson homeowners, business owners, and acreage operators:
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
                Rapid Local Service to Burleson & Johnson County
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Schedule Your Free Burleson Security Walkthrough
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Contact Leroy Reber and our installation crew. We evaluate your property, recommend exact camera focal angles, and deliver an itemized quote with $0 pressure.
              </p>
            </div>


            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
              <button
                onClick={() => onOpenQuoteModal('Burleson Security Camera Quote')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] text-white font-black text-sm transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Request Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:8172312962"
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