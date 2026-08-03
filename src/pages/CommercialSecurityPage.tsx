import React, { useState } from 'react';
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  Award,
  Building2,
  MapPin,
  Phone,
  Home,
  ChevronRight,
  Camera,
  Server,
  Zap,
  Lock,
  Users,
  Shield,
  FileText,
  HelpCircle,
  Check,
  Eye,
  Tv,
  Layers,
  Network,
  Radio,
  FileCheck2,
  Briefcase,
  Store,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SURVEILLANCE_IMAGES, BRAND_ASSETS } from '../data/imagesData';
import { DFW_CITIES } from '../data/citiesData';
import { SafeImage } from '../components/SafeImage';
import { NavLink } from '../components/NavLink';

interface CommercialSecurityPageProps {
  industrySlug?: string;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const CommercialSecurityPage: React.FC<CommercialSecurityPageProps> = ({
  industrySlug,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const canonicalUrl =
    'https://fortworthsecuritycameras.com/commercial-security-camera-installation-fort-worth';

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      question:
        'How many security cameras does a commercial business in Fort Worth typically require?',
      answer:
        'A standard Fort Worth retail store or professional office usually requires 8 to 12 cameras covering customer entrance doors, cash wraps, stockrooms, and rear employee parking lots. Medium to large industrial distribution centers, churches, or multi-building auto dealerships often install 16 to 64+ cameras across loading docks, high-bay racking aisles, perimeter fencing, and main entry gates.',
    },
    {
      question: 'Are your commercial camera systems NDAA and TAA compliant?',
      answer:
        'Yes. We supply NDAA (National Defense Authorization Act) and TAA compliant commercial surveillance equipment suitable for federal contractors, municipal buildings, defense sector vendors, schools, healthcare facilities, and high-security enterprise businesses across Texas.',
    },
    {
      question:
        'Can you integrate commercial CCTV with our existing IT network and firewalls?',
      answer:
        'Absolutely. We work closely with your internal IT department or Managed Service Provider (MSP). We configure dedicated VLAN network isolation, assign static IP schemes, label all patch panel drops, and deploy managed Gigabit PoE switches so video traffic never degrades your primary corporate data network.',
    },
    {
      question:
        'Do you offer license plate recognition (LPR) for commercial parking lots and gates?',
      answer:
        'Yes. We install specialized optical License Plate Recognition (LPR) cameras equipped with high-speed shutter sensors, optical zoom lenses, and infrared illumination capable of capturing crisp license plate numbers on vehicles traveling up to 75 MPH in total darkness.',
    },
    {
      question:
        'Is there a monthly cloud monitoring contract or subscription fee?',
      answer:
        'No. Our commercial CCTV solutions record continuously to local, multi-bay NVR servers with RAID storage redundancy located at your Fort Worth facility. Your leadership team receives encrypted multi-user remote access via mobile apps and desktop video wall management software with $0 monthly cloud subscriptions.',
    },
    {
      question:
        'Who performs the low-voltage cabling and equipment installation?',
      answer:
        'All commercial security installations are executed in partnership with licensed contractor Jericho Security and Sound, Texas Class B Security Contractor License Number B13764. Our experienced low-voltage crews adhere strictly to commercial building codes, plenum cable requirements, and OSHA safety standards.',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Security Camera Installation Fort Worth',
    serviceType: 'Commercial CCTV & Business Security Systems',
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
      { '@type': 'City', name: 'Grand Prairie' },
      { '@type': 'City', name: 'Denton' },
      { '@type': 'City', name: 'Grapevine' },
      { '@type': 'City', name: 'Haslet' },
    ],
    description:
      'Commercial security camera installation in Fort Worth, TX. Enterprise 4K PoE CCTV systems, NDAA compliant hardware, rack-mounted NVRs, and Cat6 cabling for warehouses, offices, retail and industrial sites. Partnered with Jericho Security and Sound (B13764).',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free commercial on-site security audit and itemized proposal',
    },
  };

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
        name: 'Commercial Security Camera Installation Fort Worth',
        item:
          'https://fortworthsecuritycameras.com/commercial-security-camera-installation-fort-worth',
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Commercial Security Camera Installation Fort Worth | 4K Business CCTV"
        description="Commercial security camera installation in Fort Worth for warehouses, offices and retail. 4K PoE CCTV, NVRs and Cat6 cabling. Call 817-231-2962."
        canonicalUrl={canonicalUrl}
        schema={schema}
      />

      {/* ── JSON-LD Structured Data (invisible, powers FAQ rich results & breadcrumbs) ── */}
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
              label: 'Commercial Security Camera Installation Fort Worth',
              path: '/commercial-security-camera-installation-fort-worth',
            },
          ]}
          onNavigate={onNavigate}
          variant="light"
        />

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-14 lg:py-22 border-b border-slate-800">
          <SafeImage
            loading="eager"
            src="https://pipl.systems/wp-content/uploads/2025/03/pro-cam.webp"
            alt="Commercial security camera installation Fort Worth TX 4K CCTV professional camera header background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 sm:opacity-90 pointer-events-none animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-sky-400 backdrop-blur-sm">
                <Building2 className="w-4 h-4 text-sky-400" />
                <span>Licensed Texas partner: Jericho Security and Sound (B13764)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight text-shadow-hero">
                Commercial Security Camera Installation in Fort Worth, TX
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                Enterprise 4K Power‑over‑Ethernet (PoE) IP CCTV camera systems, NDAA‑compliant
                hardware, rack‑mount NVRs, and structured Cat6 cabling for Fort Worth
                warehouses, retail centers, office buildings, auto dealerships, and industrial
                facilities—with zero monthly monitoring fees.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>NDAA / TAA compliant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Server rack NVR RAID</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero monthly fees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1‑year direct warranty</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="tel:8172312962"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (817) 231‑2962</span>
                </a>

                <button
                  onClick={onOpenQuoteModal}
                  className="px-6 py-3.5 rounded-xl bg-[#007EFF] hover:bg-blue-600 text-white font-black text-xs shadow-lg transition flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request itemized proposal</span>
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
              <FileCheck2 className="w-5 h-5 text-emerald-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">NDAA compliant</div>
              <div className="text-[11px] text-slate-500">Government & enterprise</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Lock className="w-5 h-5 text-emerald-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">$0 monthly fees</div>
              <div className="text-[11px] text-slate-500">100% owned local NVR</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Award className="w-5 h-5 text-purple-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">1‑year warranty</div>
              <div className="text-[11px] text-slate-500">Direct on‑site service</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Building2 className="w-5 h-5 text-[#007EFF] mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">2203 8th Ave HQ</div>
              <div className="text-[11px] text-slate-500">Fort Worth dispatch</div>
            </div>
          </div>
        </section>

        {/* SECTION 1: OVERVIEW & ENTERPRISE CCTV ENGINEERING */}
        <section className="max-w-7xl mx-auto px-4 pt-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
                <Building2 className="w-3.5 h-3.5" />
                <span>Commercial CCTV systems tailored to DFW businesses</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Enterprise commercial security camera systems engineered for Fort Worth businesses
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In commercial environments, high‑definition video surveillance is not just a theft
                deterrent—it is a critical operational tool for liability defense, employee safety,
                inventory control, and asset management. Consumer‑grade cameras often fail in
                business environments due to weak night vision, poor bandwidth control, and
                limited compliance support.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At <strong className="text-slate-900">Fort Worth Security Cameras</strong>, we design,
                install, and support enterprise‑grade 4K IP CCTV camera systems for commercial
                properties across Fort Worth, Tarrant County, and the broader DFW Metroplex. From
                single‑story retail plazas to multi‑building manufacturing plants, our low‑voltage
                engineering team builds commercial surveillance networks engineered for 24/7
                reliability.
              </p>

              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed security partner: Jericho Security and Sound (B13764)</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  All commercial CCTV camera and alarm system installations are performed in partnership
                  with licensed contractor Jericho Security and Sound, Texas Class B Security
                  Contractor License B13764. Our work adheres strictly to commercial electrical
                  safety codes, Texas DPS standards, and industry best practices.
                </p>
              </div>
            </div>

            {/* Visual Callout & Featured Image Box */}
            <div className="lg:col-span-5 space-y-4">
              {/* Featured Commercial Installation Image */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg bg-white space-y-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <SafeImage
                    src="https://dfwwholesalesecurity.com/wp-content/uploads/2025/07/nmcr_downloaded_image.webp"
                    alt="Commercial security camera installation in Fort Worth TX with 4K PoE dome cameras and structured Cat6 cabling for warehouse facility"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-white flex items-center gap-1.5 border border-white/10">
                    <Building2 className="w-3.5 h-3.5 text-[#007EFF]" />
                    <span>Fort Worth Commercial Installation</span>
                  </div>
                </div>
                <p className="px-3.5 pb-2.5 text-xs text-slate-600 leading-snug">
                  Enterprise 4K commercial security camera installation with hardwired Cat6 PoE cabling and clean conduit runs.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-xl space-y-4">
                <h3 className="font-black text-slate-900 text-base border-b border-[#E5E5E5] pb-3 flex items-center justify-between">
                  <span>The commercial CCTV standard</span>
                  <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    Enterprise‑grade
                  </span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Server className="w-4 h-4 text-[#007EFF]" />
                      <span>Rack‑mounted NVR servers</span>
                    </div>
                    <p className="text-slate-600">
                      Multi‑bay NVRs with RAID 1/5/10 hard drive redundancy and hot‑swappable
                      enterprise drives.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Network className="w-4 h-4 text-purple-600" />
                      <span>Structured Cat6 low‑voltage drops</span>
                    </div>
                    <p className="text-slate-600">
                      Solid copper Cat6 cabling, labeled patch panels, and managed Gigabit PoE+
                      switches.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Lock className="w-4 h-4 text-emerald-600" />
                      <span>Role‑based multi‑user access</span>
                    </div>
                    <p className="text-slate-600">
                      Grant custom permission tiers for owners, facility managers, and store
                      supervisors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CAMERA TYPES & TECHNOLOGY */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <Camera className="w-4 h-4" />
              <span>Specialized hardware form factors</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Commercial security camera form factors and AI vision
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Different business zones require specialized commercial lens configurations. We install target‑specific
              CCTV hardware:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Type 1 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-blue-50 text-[#007EFF] w-fit">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                4K vandal‑resistant domes (IK10 rated)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Flush‑mounted, impact‑resistant dome cameras with IK10 vandal ratings. Ideal for
                retail stores, public hallways, gas stations, and customer foyers where physical
                tampering or damage is a risk.
              </p>
            </div>

            {/* Type 2 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 w-fit">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">License plate recognition (LPR)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated high‑speed optical LPR cameras designed for parking lot entrances,
                drive‑thrus, and commercial gate points. Captures sharp plate numbers day or night on
                moving vehicles up to 75 MPH.
              </p>
            </div>

            {/* Type 3 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-600 w-fit">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                PTZ auto‑tracking domes (30x optical)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High‑speed Pan‑Tilt‑Zoom (PTZ) cameras with 30x or 42x optical zoom. Auto‑tracks
                suspicious vehicles or human trespassers across massive warehouse yards, auto lots,
                and construction sites.
              </p>
            </div>

            {/* Type 4 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600 w-fit">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Active deterrence audio / strobe bullets
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Outdoor perimeter cameras equipped with strobe lights, built‑in sirens, and custom
                voice warnings that trigger automatically when intruders cross after‑hours perimeter
                lines.
              </p>
            </div>

            {/* Type 5 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-600 w-fit">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Panoramic 180° / 360° fisheye lenses
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Single‑sensor 12MP panoramic cameras that cover entire open warehouse floors,
                cafeteria dining halls, or retail centers, reducing total camera count while
                eliminating blind spots.
              </p>
            </div>

            {/* Type 6 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-[#007EFF]/10 text-[#007EFF] w-fit">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Multi‑bay enterprise rack NVR servers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Linux‑embedded server rack NVRs supporting 16 to 128 channels, redundant dual power
                supplies, RAID 5 data protection, and 30–90+ days of uninterrupted local video
                recording retention.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: INDUSTRY-SPECIFIC SOLUTIONS */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <Briefcase className="w-4 h-4" />
              <span>Tailored industry verticals</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Commercial security solutions across Fort Worth industries
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We design specialized commercial CCTV layouts to solve operational challenges across key
              North Texas business sectors:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sector 1 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-[#007EFF]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-base">
                    Warehouses and distribution logistics
                  </h3>
                  <p className="text-xs text-slate-500">
                    Loading docks, high‑bay aisles and freight yards
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monitor freight loading/unloading, prevent inventory shrinkage in racking aisles,
                track forklift safety compliance, and secure exterior truck staging lanes across
                Fort Worth and Alliance industrial parks.
              </p>
            </div>

            {/* Sector 2 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-base">
                    Retail stores and shopping plazas
                  </h3>
                  <p className="text-xs text-slate-500">
                    Cash wraps, entrances, stockrooms and customer aisles
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reduce shoplifting loss, investigate slip‑and‑fall claims with high‑fps video,
                monitor point‑of‑sale registers, and protect employee parking areas during late‑night
                shift changes.
              </p>
            </div>

            {/* Sector 3 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-purple-50 text-purple-600">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-base">
                    Auto dealerships and commercial vehicle lots
                  </h3>
                  <p className="text-xs text-slate-500">
                    Perimeter fence lines, inventory staging and service bays
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Help prevent catalytic converter theft, wheel/tire theft, and vandalism across large
                open vehicle inventory lots using active deterrence audio strobes and long‑range
                optical LPR cameras.
              </p>
            </div>

            {/* Sector 4 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-50 text-amber-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-base">
                    Churches, private schools and non‑profits
                  </h3>
                  <p className="text-xs text-slate-500">
                    Sanctuaries, classrooms, playgrounds and parking areas
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enhance campus safety for children and congregants, protect audio/visual equipment,
                secure multi‑building facilities, and provide volunteer security teams with real‑time
                video management access.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: LOW-VOLTAGE INFRASTRUCTURE & IT INTEGRATION */}
        <section className="max-w-7xl mx-auto px-4 pt-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-sky-400 text-xs font-bold border border-blue-500/30">
                <Network className="w-3.5 h-3.5 text-sky-400" />
                <span>Structured low‑voltage engineering</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Structured Cat6 cabling and IT network VLAN integration
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Unlike vendors who string loose cables across ceiling tiles, our low‑voltage team
                installs structured Cat6 cabling mounted in J‑hooks, cable trays, and EMT conduits.
                All commercial camera drops terminate in labeled patch panels inside server racks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200 pt-2">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Plenum CMP‑rated fire‑safe cabling</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Managed Gigabit PoE+ switch racks</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>VLAN isolation for corporate IT security</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Battery UPS power backups for NVRs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-4">
              <div className="flex items-center gap-2 text-sky-400 font-extrabold text-sm">
                <Tv className="w-5 h-5" />
                <span>Multi‑monitor video wall client</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We configure desktop Video Management Software (VMS) on security workstation PCs and
                wall‑mounted TV monitors. Security guards and facility directors can view customized
                matrix grid displays, camera maps, and instant playback clips—with zero monthly
                software licensing fees.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: TECHNICAL SPECIFICATIONS TABLE */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Commercial hardware and network specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Commercial CCTV components built to enterprise standards:
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#E5E5E5] shadow-lg bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-4 font-black">System component</th>
                  <th className="p-4 font-black">Hardware specification</th>
                  <th className="p-4 font-black">Commercial benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E5]">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Compliance standard</td>
                  <td className="p-4 text-slate-700">NDAA / TAA‑compliant chipsets and firmware</td>
                  <td className="p-4 text-emerald-700 font-medium">
                    Eligible for municipal, defense and government contracts
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Video compression</td>
                  <td className="p-4 text-slate-700">H.265+ smart codec (reduces bandwidth by up to 70%)</td>
                  <td className="p-4 text-emerald-700 font-medium">
                    Maximizes NVR storage capacity without quality loss
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">NVR RAID storage</td>
                  <td className="p-4 text-slate-700">
                    RAID 1, 5, 10 hard drive configuration (WD Purple Pro)
                  </td>
                  <td className="p-4 text-emerald-700 font-medium">
                    Helps prevent video loss if a hard drive fails unexpectedly
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">
                    Low‑voltage cable standard
                  </td>
                  <td className="p-4 text-slate-700">
                    Cat6 solid copper 23AWG CMR/CMP plenum‑rated
                  </td>
                  <td className="p-4 text-emerald-700 font-medium">
                    Full compliance with commercial building and fire safety codes
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">ONVIF interoperability</td>
                  <td className="p-4 text-slate-700">
                    ONVIF Profile S, G and T compliant
                  </td>
                  <td className="p-4 text-emerald-700 font-medium">
                    Seamless compatibility with third‑party VMS software and platforms
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Warranty and support</td>
                  <td className="p-4 text-slate-700">
                    1‑year direct on‑site replacement warranty
                  </td>
                  <td className="p-4 text-emerald-700 font-medium">
                    Direct local dispatch from our Fort Worth office
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 6: FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-5xl mx-auto px-4 pt-16 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <HelpCircle className="w-4 h-4" />
              <span>Got questions?</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Commercial security camera FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear commercial CCTV answers for Fort Worth business owners and facility
              managers:
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
                <span>Texas licensed commercial partner (B13764)</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Request a free on‑site commercial security walkthrough
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Schedule a site visit with lead technician Leroy Reber. We conduct a
                commercial risk audit, design an itemized camera map, and deliver a detailed proposal with
                transparent pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full md:w-auto">
              <a
                href="tel:8172312962"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg transition text-center"
              >
                Call (817) 231‑2962
              </a>
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#007EFF] hover:bg-blue-600 text-white font-black text-xs shadow-lg transition text-center"
              >
                Request proposal
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