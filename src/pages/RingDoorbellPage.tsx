import React, { useState } from 'react';
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  Award,
  Building2,
  Phone,
  Home,
  ChevronRight,
  Bell,
  FileText,
  Wrench,
  HelpCircle,
  Zap,
  Smartphone,
  Camera,
  XCircle,
  Check,
  Wifi,
  Video,
  BookOpen,
  Sparkles,
  ChevronDown,
  Sliders,
  Maximize2,
  Info,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { NavLink } from '../components/NavLink';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { BRAND_ASSETS, SURVEILLANCE_IMAGES } from '../data/imagesData';
import { DFW_CITIES } from '../data/citiesData';

interface RingDoorbellPageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: () => void;
}

export const RingDoorbellPage: React.FC<RingDoorbellPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const canonicalUrl =
    'https://fortworthsecuritycameras.com/ring-video-doorbell-installation-fort-worth';

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [showAllGuides, setShowAllGuides] = useState<boolean>(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Ring Video Doorbell Installation Fort Worth',
    serviceType: 'Smart Video Doorbell Camera Installation',
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
      { '@type': 'City', name: 'Fort Worth' },
      { '@type': 'City', name: 'Arlington' },
      { '@type': 'City', name: 'Keller' },
      { '@type': 'City', name: 'Southlake' },
      { '@type': 'City', name: 'Benbrook' },
      { '@type': 'City', name: 'Weatherford' },
    ],
    description:
      'Professional Ring video doorbell installation in Fort Worth, TX. Hardwired transformer upgrades (24V 40VA), door chime bypasses, angle wedge mounting, and mobile app setup for Ring Pro 2, Nest, and Eufy. Partnered with Jericho Security and Sound (B13764).',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free Smart Doorbell Installation Quote',
    },
  };

  const faqList = [
    {
      question: 'How much does Ring video doorbell installation cost in Fort Worth, TX?',
      answer:
        'Professional Ring video doorbell installation in Fort Worth typically costs between $125 and $225. This includes physically mounting the unit to brick, stone, or trim, hardwiring to existing low-voltage wiring, replacing outdated 10V/16V door transformers with a heavy-duty 24V 40VA transformer, configuring chime kits, and syncing motion zones on your smartphone.',
    },
    {
      question: 'Why does my Ring video doorbell keep losing power or freezing?',
      answer:
        'Over 80% of Ring doorbell malfunctions are caused by underpowered door transformers. Older Fort Worth homes were built with weak 10V or 16V 10VA transformers meant only for mechanical ding-dong chimes. Video doorbells require continuous high amperage. We test your voltage and install a high-capacity 24V 40VA transformer to help guarantee 24/7 reliability.',
    },
    {
      question: 'Can you install a Ring video doorbell on brick, stone, or narrow doorway trim?',
      answer:
        'Yes. We drill into brick, stone, stucco, or metal jambs using carbide masonry bits and masonry anchors. For narrow doorframes, we install specialized angle mounts (15° to 45° horizontal wedges) so your video lens captures visitors centered on your porch rather than looking straight into a side wall.',
    },
    {
      question: 'Will my existing indoor mechanical doorbell chime still ring?',
      answer:
        'Yes. We install the Ring Power Kit inside your existing indoor chime box, balancing current flow so your classic mechanical chime rings crisp and clear whenever a visitor presses the front doorbell button.',
    },
    {
      question: 'What if I don’t have any existing doorbell wires at my front door?',
      answer:
        'No problem. We can either run brand new low-voltage doorbell wiring through your attic down to a transformer outlet or install battery-powered smart doorbells with high-capacity solar charger mounts and indoor plug-in wireless chime units.',
    },
    {
      question: 'Do you install Google Nest Hello, Arlo, and Eufy video doorbells too?',
      answer:
        'Yes. We install all major smart doorbell brands including Ring Video Doorbell Pro 2, Ring Doorbell Elite (PoE), Google Nest Doorbell, Arlo Wire-Free, Eufy Dual Camera, and Hikvision/Uniview IP intercom doorbells.',
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
        name: 'Ring Video Doorbell Installation Fort Worth',
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Ring Video Doorbell Installation Fort Worth | Smart Doorbell Pro Installer"
        description="Licensed Ring video doorbell installation in Fort Worth, TX. Transformer upgrades (24V 40VA), brick masonry mounting, chime bypasses and app setup for Ring, Nest and Eufy smart doorbells. Partnered with Jericho Security and Sound (B13764). Call (817) 231-2962."
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
              label: 'Ring Video Doorbell Installation Fort Worth',
              path: '/ring-video-doorbell-installation-fort-worth',
            },
          ]}
          onNavigate={onNavigate}
          variant="light"
        />

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-14 lg:py-22 border-b border-slate-800">
          <SafeImage
            loading="eager"
            src="https://gibbyselectronicsupermarket.ca/cdn/shop/files/motion-gif-for-Ring.-768x432.gif?v=1714589838&width=800"
            alt="Ring Video Doorbell installation Fort Worth TX smart home camera header background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 sm:opacity-90 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-sky-400 backdrop-blur-sm">
                <Bell className="w-4 h-4 text-sky-400" />
                <span>Licensed Texas Partner: Jericho Security and Sound (B13764)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Ring Video Doorbell Installation Fort Worth TX
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                Never miss a visitor or package delivery. Professional smart video doorbell
                installation in Fort Worth including Ring Pro 2, Nest, and Eufy. Hardwired 24V
                transformer upgrades, brick and stone mounting, angle wedges, and instant smartphone
                alerts for local homeowners across Fort Worth and Tarrant County.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24V 40VA Transformer Upgrade</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Brick and Stone Masonry Drill</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Chime Box Integration</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mobile App Syncing</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="tel:8172312962"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (817) 231-2962</span>
                </a>

                <button
                  onClick={onOpenQuoteModal}
                  className="px-6 py-3.5 rounded-xl bg-[#007EFF] hover:bg-blue-600 text-white font-black text-xs shadow-lg transition flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Get Doorbell Quote</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BADGES BAR */}
        <section className="bg-white border-b border-[#E5E5E5] py-4 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center text-xs">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <ShieldCheck className="w-5 h-5 text-[#007EFF] mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">TX License B13764</div>
              <div className="text-[11px] text-slate-500">Jericho Security & Sound</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Zap className="w-5 h-5 text-emerald-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">24V Transformer Kits</div>
              <div className="text-[11px] text-slate-500">No Power Dropouts</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Bell className="w-5 h-5 text-amber-500 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">Ring, Nest and Eufy</div>
              <div className="text-[11px] text-slate-500">All Brands Supported</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Award className="w-5 h-5 text-purple-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">1-Year Warranty</div>
              <div className="text-[11px] text-slate-500">Direct On-Site Guarantee</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Building2 className="w-5 h-5 text-[#007EFF] mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">2203 8th Ave HQ</div>
              <div className="text-[11px] text-slate-500">Local Fort Worth Office</div>
            </div>
          </div>
        </section>

        {/* SECTION 1: DETAILED OVERVIEW */}
        <section className="max-w-7xl mx-auto px-4 pt-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
                <Bell className="w-3.5 h-3.5" />
                <span>Front Porch Package Security and Instant Alerts</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Flawless Smart Video Doorbell Installation in Fort Worth
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Video doorbells are the first line of defense for modern home security, capturing
                porch package deliveries, visitor conversations, and front yard activity in crisp HD
                video. However, installing a smart doorbell frequently frustrates homeowners when
                older 10V or 16V doorbell transformers fail to supply adequate voltage, causing
                constant offline drops, buzzing chime boxes, or rapid battery drain.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At <strong className="text-slate-900">Fort Worth Security Cameras</strong>, our
                licensed technicians eliminate the hassle. We test low-voltage wiring, upgrade
                underpowered door transformers to heavy-duty 24V 40VA units, mount doorbells securely
                into tough Fort Worth brick or limestone, position precision angle wedges, and link
                your mobile app for instant motion alerts. Our smart doorbell installers serve
                Fort Worth, Arlington, Benbrook, Keller, Southlake, and surrounding DFW neighborhoods.
              </p>

              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed Security Partner: Jericho Security and Sound (B13764)</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  All smart video doorbell and security camera installations are performed under
                  Texas Class B Security Contractor License B13764 held by Jericho Security and Sound.
                  You receive certified low-voltage wiring, clean mounting, and expert technical
                  support from a local Fort Worth team.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-xl space-y-4">
                <h3 className="font-black text-slate-900 text-base border-b border-[#E5E5E5] pb-3 flex items-center justify-between">
                  <span>Smart Doorbell Services</span>
                  <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    Pro Install
                  </span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#007EFF]" />
                      <span>24V 40VA Transformer Replacement</span>
                    </div>
                    <p className="text-slate-600">
                      Upgrading weak 10V/16V transformers inside garage or attic boxes for reliable
                      24/7 smart doorbell power.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Wrench className="w-4 h-4 text-purple-600" />
                      <span>Brick and Stone Masonry Anchoring</span>
                    </div>
                    <p className="text-slate-600">
                      Carbide diamond bit drilling into exterior limestone, brick, stucco, or metal
                      trim for secure mounting.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4 text-emerald-600" />
                      <span>Mobile App and Motion Zone Tuning</span>
                    </div>
                    <p className="text-slate-600">
                      Configuring motion zones, package detection alerts, and two-way audio on
                      smartphones and tablets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: COMPATIBLE DOORBELL BRANDS */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <Camera className="w-4 h-4" />
              <span>Multi-Brand Compatibility</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Supported Smart Video Doorbell Equipment
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We install and configure all major smart doorbell brands and model tiers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-blue-50 text-[#007EFF] w-fit">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Ring Video Doorbell Pro 2 and Wired
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                1536p Head-to-Toe HD video with 3D Radar Motion Detection, package alerts, and
                customizable bird’s-eye aerial view maps.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-600 w-fit">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">Ring Video Doorbell Elite (PoE)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Flush-mount Power-over-Ethernet (PoE) smart doorbell powered directly by Cat6
                ethernet for ultra-low latency and maximum security.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 w-fit">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Google Nest Doorbell (Wired and Battery)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                24/7 continuous video recording (with Nest Aware Plus), intelligent familiar face
                recognition, and Google Home smart display integration.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600 w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">Eufy Dual Camera Video Doorbell</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dual-lens design (front view plus ground package camera) with zero monthly cloud
                fees, local HomeBase encrypted storage, and 2K resolution.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-600 w-fit">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">Arlo Essential Video Doorbell</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                1:1 square aspect ratio video capturing visitors from head to toe, built-in siren
                deterrence, and direct two-way phone calls.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-slate-100 text-slate-800 w-fit">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Uniview / Hikvision IP Doorbell Intercoms
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Commercial-grade standalone IP intercom doorbells integrated directly into central
                NVR video recorders with physical door unlock relays.
              </p>
            </div>
          </div>
        </section>

        {/* NEW SECTION: RELATED LOCAL SERVICES */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Related Fort Worth security services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Smart doorbells are one piece of your home security system. Our Fort Worth team can
                extend coverage with real 4K PoE cameras, structured cabling, and professional NVR
                recording so your front porch, driveway, and side gates are all protected.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs sm:text-sm text-slate-600">
                Explore additional local services:
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <NavLink
                  to="/residential-security-camera-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Fort Worth residential security camera installation
                </NavLink>
                <NavLink
                  to="/network-cable-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Network cable installation and Cat6 drops
                </NavLink>
                <NavLink
                  to="/commercial-security-camera-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Fort Worth commercial security camera installation
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED SEO TECHNICAL GUIDE SECTION (1500+ WORDS FOR ORGANIC RANKING) */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="bg-white rounded-3xl border border-[#E5E5E5] p-6 sm:p-10 shadow-xl space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
                  <BookOpen className="w-4 h-4" />
                  <span>Fort Worth Smart Doorbell Installation Guide</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  The Complete Fort Worth Guide to Smart Video Doorbell Wiring, Transformer Voltage & Optics
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Deep technical insights into door transformer step-down voltages, chime bypass power modules, 2.4GHz/5GHz Wi-Fi RSSI attenuation, angle wedge positioning on brick veneer, and PoE hardwiring for North Texas residences.
                </p>
              </div>

              <button
                onClick={() => setShowAllGuides(!showAllGuides)}
                className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow transition flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{showAllGuides ? 'Collapse Technical Guides' : 'Expand Technical Guides'}</span>
              </button>
            </div>

            {/* GUIDE ITEM 1 */}
            <article className="border border-slate-200 rounded-2xl p-5 sm:p-7 bg-slate-50/50 hover:bg-white hover:border-blue-200 transition-all space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#007EFF] font-black text-sm">01</div>
                  <div>
                    <h3 className="font-black text-slate-900 text-base sm:text-lg">
                      Doorbell Transformer Voltage Engineering (16V/10VA vs. Heavy Duty 24V/40VA)
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Why 80% of Ring and Nest Video Doorbells in Older Fort Worth Homes Freeze & Disconnect
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSection('section1')}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#007EFF] text-[#007EFF] text-xs font-extrabold flex items-center gap-1 shrink-0"
                >
                  <span>{expandedSections['section1'] || showAllGuides ? 'Read Less' : 'Read More'}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections['section1'] || showAllGuides ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The single most common call we receive from Fort Worth homeowners is: "I bought a Ring Video Doorbell Pro 2, installed it myself, but it constantly drops offline, shows a spinning wheel, or freezes when someone rings the button." In almost every case, the culprit is an underpowered low-voltage door transformer tucked away inside an attic, garage wall, or HVAC closet.
              </p>

              {(expandedSections['section1'] || showAllGuides) && (
                <div className="pt-4 border-t border-slate-200 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>The Math of Low-Voltage Power Under Heavy Infrared & HDR Load</span>
                  </h4>
                  <p>
                    Homes constructed in Fort Worth before 2018 were wired for simple analog ding-dong mechanical chimes requiring only a tiny 10V or 16V 10VA (Volt-Ampere) step-down transformer. While 16V 10VA is technically enough to power a doorbell's standby idle state, smart doorbells are miniature computers with 1080p or 2K HDR video sensors, 850nm infrared night vision LEDs, Wi-Fi radios, and two-way audio amplifiers.
                  </p>
                  <p>
                    When motion triggers the infrared LEDs and high-speed Wi-Fi transmission simultaneously at night, power draw spikes. An underpowered 10VA or 16VA transformer voltage sags below 12V, causing the doorbell CPU to instantly reboot. At Fort Worth Security Cameras, our low-voltage technicians test line voltage with digital multimeters and replace aging transformers with heavy-duty 24V AC 40VA transformers, delivering clean, stable current that guarantees non-stop 24/7 video recording and rapid response.
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Locating & Replacing Hard-To-Find Transformers in Fort Worth Homes</span>
                  </h4>
                  <p>
                    In North Texas suburban developments—such as Heritage, Keller, Southlake, and Mansfield—doorbell transformers are frequently hidden behind main electrical breaker panels, attached to attic junction boxes, or buried inside garage ceiling joists. Our technicians locate hidden transformers safely, shut off branch circuit power, install UL-listed 24V step-down transformers, and verify output voltage at the front door terminals.
                  </p>
                </div>
              )}
            </article>

            {/* GUIDE ITEM 2 */}
            <article className="border border-slate-200 rounded-2xl p-5 sm:p-7 bg-slate-50/50 hover:bg-white hover:border-blue-200 transition-all space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 font-black text-sm">02</div>
                  <div>
                    <h3 className="font-black text-slate-900 text-base sm:text-lg">
                      Existing Mechanical & Electronic Chime Bypass Integration
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Installing Pro Power Kits to Prevent Chime Humming, Buzzing & Short-Circuiting
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSection('section2')}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#007EFF] text-[#007EFF] text-xs font-extrabold flex items-center gap-1 shrink-0"
                >
                  <span>{expandedSections['section2'] || showAllGuides ? 'Read Less' : 'Read More'}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections['section2'] || showAllGuides ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When you press a traditional doorbell, a physical plunger strikes a metal chime bar inside your hallway wall box. When replacing that button with a smart video doorbell, current flows continuously through the chime wires to power the camera. Without proper power bypass kits, this continuous current causes indoor wall chimes to emit an annoying 60Hz electronic hum, buzz, or overheat.
              </p>

              {(expandedSections['section2'] || showAllGuides) && (
                <div className="pt-4 border-t border-slate-200 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Bell className="w-4 h-4 text-amber-600" />
                    <span>Ring Pro Power Kit & Nest Connector Module Wiring</span>
                  </h4>
                  <p>
                    To maintain your physical interior chime while powering the front door video camera, we install specialized power bypass modules (such as the Ring Pro Power Kit v2 or Nest Chime Connector) directly inside your hallway chime box. This solid-state relay regulates current, keeping the chime solenoid dead silent while the camera records, and firing a crisp mechanical "ding-dong" chime only when the front button is activated.
                  </p>
                  <p>
                    If your home features a multi-note electronic chime with digital melody speakers or intercom stations (common in older Tanglewood and Westover Hills homes), we configure solid-state bypass jumpers or connect wireless Ring Chime Pro extenders so you hear rich chime alerts on every floor.
                  </p>
                </div>
              )}
            </article>

            {/* GUIDE ITEM 3 */}
            <article className="border border-slate-200 rounded-2xl p-5 sm:p-7 bg-slate-50/50 hover:bg-white hover:border-blue-200 transition-all space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 font-black text-sm">03</div>
                  <div>
                    <h3 className="font-black text-slate-900 text-base sm:text-lg">
                      Masonry Anchoring, Brick Veneer, & Precision Angle Wedge Optics
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Eliminating Blank Wall Footage & Capturing Package Delivery Drop Zones
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSection('section3')}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#007EFF] text-[#007EFF] text-xs font-extrabold flex items-center gap-1 shrink-0"
                >
                  <span>{expandedSections['section3'] || showAllGuides ? 'Read Less' : 'Read More'}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections['section3'] || showAllGuides ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Most front entryways in Fort Worth feature exterior brick masonry, natural limestone veneer, or narrow wood door jamb molding. Mounting a flat camera directly onto a side wall often results in half the camera's field of view being blocked by a brick pillar, completely missing visitors approaching from the driveway.
              </p>

              {(expandedSections['section3'] || showAllGuides) && (
                <div className="pt-4 border-t border-slate-200 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-purple-600" />
                    <span>Carbide Masonry Drilling & Weatherproof Silicone Seals</span>
                  </h4>
                  <p>
                    Drilling into exterior brick or mortar with standard drill bits dulls bits instantly and splits delicate brick faces. Our technicians use high-speed carbide rotary masonry bits to drill clean pilot holes into brick or stone faces, inserting UV-resistant expansion wall anchors and stainless steel security screws. We seal penetrations with exterior grade clear silicone sealant to prevent rain or moisture from entering your door frame wall cavity during North Texas thunderstorms.
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Maximize2 className="w-4 h-4 text-purple-600" />
                    <span>Corner Wedge & Downward Tilt Mount Angle Calculations</span>
                  </h4>
                  <p>
                    To capture full head-to-toe visitor coverage and see porch package deliveries on your doorstep, we install 15°, 30°, or 45° horizontal angle wedges or downward tilt plates. This directs camera lens optics away from side brick walls and straight down your walkway, maximizing infrared motion detection range while eliminating glare from porch lights.
                  </p>
                </div>
              )}
            </article>

            {/* GUIDE ITEM 4 */}
            <article className="border border-slate-200 rounded-2xl p-5 sm:p-7 bg-slate-50/50 hover:bg-white hover:border-blue-200 transition-all space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 font-black text-sm">04</div>
                  <div>
                    <h3 className="font-black text-slate-900 text-base sm:text-lg">
                      Wi-Fi Signal Attenuation, RSSI Decibel Testing & Mesh Extension
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Overcoming Brick, Low-E Glass & Metal Door Signal Blocks in Fort Worth Homes
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSection('section4')}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#007EFF] text-[#007EFF] text-xs font-extrabold flex items-center gap-1 shrink-0"
                >
                  <span>{expandedSections['section4'] || showAllGuides ? 'Read Less' : 'Read More'}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections['section4'] || showAllGuides ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Exterior front entryways are worst-case environments for indoor Wi-Fi routers. Brick, stone veneer, foil-backed insulation radiant barriers, and steel exterior doors absorb and reflect 2.4GHz and 5GHz Wi-Fi signals, causing severe signal attenuation before reaching your front porch.
              </p>

              {(expandedSections['section4'] || showAllGuides) && (
                <div className="pt-4 border-t border-slate-200 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Wifi className="w-4 h-4 text-emerald-600" />
                    <span>Understanding Doorbell RSSI (Received Signal Strength Indicator)</span>
                  </h4>
                  <p>
                    In the Ring or Nest app health settings, signal quality is measured in RSSI decibels (dBm). An RSSI reading between -30 dBm and -55 dBm indicates an excellent connection with instant live-view popups. However, if your front porch RSSI falls below -70 dBm, live video streams fail, two-way talk audio clips, and motion alerts delay by 15 to 30 seconds.
                  </p>
                  <p>
                    During every installation, our technicians measure porch RSSI levels. If signal attenuation is detected, we optimize your router channels, split 2.4GHz/5GHz SSIDs, or install dedicated Ring Chime Pro dual-band Wi-Fi extenders or indoor mesh access points near the front entry foyer to guarantee crisp HD streaming.
                  </p>
                </div>
              )}
            </article>

            {/* GUIDE ITEM 5 */}
            <article className="border border-slate-200 rounded-2xl p-5 sm:p-7 bg-slate-50/50 hover:bg-white hover:border-blue-200 transition-all space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 font-black text-sm">05</div>
                  <div>
                    <h3 className="font-black text-slate-900 text-base sm:text-lg">
                      Ring Elite & Commercial PoE Hardwired Intercom Doorbell Systems
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Zero-Latency Power over Ethernet (PoE) Drops for Luxury Estates & Commercial Access Points
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSection('section5')}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#007EFF] text-[#007EFF] text-xs font-extrabold flex items-center gap-1 shrink-0"
                >
                  <span>{expandedSections['section5'] || showAllGuides ? 'Read Less' : 'Read More'}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections['section5'] || showAllGuides ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For large luxury homes in Westover Hills, Mira Vista, and Southlake—or commercial office entry gates in Fort Worth—standard consumer Wi-Fi doorbells are often insufficient due to distance and gate constraints.
              </p>

              {(expandedSections['section5'] || showAllGuides) && (
                <div className="pt-4 border-t border-slate-200 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-sky-600" />
                    <span>Hardwired Cat6 Ethernet & Flush-Mount Ring Elite Installations</span>
                  </h4>
                  <p>
                    We specialize in flush-mount Ring Video Doorbell Elite and commercial IP video intercom systems (such as Hikvision, Uniview, and Axis). We pull solid copper Cat6 network cables directly from your central network rack to the front door wall box. Powered via standard 802.3af Power over Ethernet (PoE), these commercial units bypass Wi-Fi interference completely, providing zero-latency 1080p video, instant smartphone push alerts, and direct integration with electronic door strikes or motorized driveway gates.
                  </p>
                </div>
              )}
            </article>

            {/* PROMOTIONAL LOCAL COMMITMENT CARD */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="text-amber-400 font-black text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed Texas Security Partner (B13764)</span>
                </div>
                <h3 className="font-extrabold text-lg">Need Professional Ring Doorbell Installation in Fort Worth?</h3>
                <p className="text-xs text-slate-300">
                  Call Leroy Reber at (817) 231-2962 for same-day or next-day installation, voltage testing, and mobile app setup.
                </p>
              </div>
              <button
                onClick={onOpenQuoteModal}
                className="shrink-0 px-6 py-3 rounded-xl bg-[#007EFF] hover:bg-blue-600 text-white font-extrabold text-xs shadow-md transition"
              >
                Schedule Installation
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-5xl mx-auto px-4 pt-16 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Ring Video Doorbell FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Answers to common smart doorbell installation questions in Fort Worth:
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#E5E5E5] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-[#007EFF] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-90 text-[#007EFF]' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="max-w-7xl mx-auto px-4 pt-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-3 relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Licensed Texas Partner (B13764)</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Schedule Your Smart Video Doorbell Installation
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Contact Leroy Reber and our Fort Worth technician team today. Fast scheduling,
                transformer voltage testing, and guaranteed clean mounting for your Ring, Nest, or
                Eufy video doorbell.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full md:w-auto">
              <a
                href="tel:8172312962"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg transition text-center"
              >
                Call (817) 231-2962
              </a>
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#007EFF] hover:bg-blue-600 text-white font-black text-xs shadow-lg transition text-center"
              >
                Request Quote
              </button>
            </div>
          </div>
        </section>
        {/* Service Available Across DFW Cities - Internal Linking */}
        <section className="max-w-7xl mx-auto px-4 py-10 space-y-4">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-2 text-center">
            Available Across These DFW Cities:
          </h3>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
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