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
  Wrench,
  XCircle,
  HelpCircle,
  Smartphone,
  HardDrive,
  Eye,
  Cpu,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SURVEILLANCE_IMAGES, BRAND_ASSETS } from '../data/imagesData';
import { DFW_CITIES } from '../data/citiesData';
import { SafeImage } from '../components/SafeImage';
import { NavLink } from '../components/NavLink';
import { RelatedIndustriesBlock } from '../components/RelatedIndustriesBlock';

interface ResidentialSecurityPageProps {
  industrySlug?: string;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ResidentialSecurityPage: React.FC<ResidentialSecurityPageProps> = ({
  industrySlug,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const canonicalUrl =
    'https://fortworthsecuritycameras.com/residential-security-camera-installation-fort-worth';

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      question:
        'How much does residential security camera installation cost in Fort Worth, TX?',
      answer:
        'Professional home security camera installation in Fort Worth typically ranges from about $850 for a clean 4-camera 4K PoE entry system to $2,400+ for large custom estates requiring 8 to 12 cameras with extended NVR hard drive storage. Pricing includes solid copper Cat6 cable runs through attics, weatherproof mounting, NVR hardware, mobile app setup and a 1-year warranty with zero monthly fees.',
    },
    {
      question:
        'Why choose 4K PoE cameras over wireless battery cameras such as Ring, Blink or Arlo?',
      answer:
        'Wireless battery cameras rely on compressed Wi‑Fi signals that frequently lag, miss motion triggers, drop offline and require constant battery charging. In contrast, Power‑over‑Ethernet (PoE) IP cameras send power and uncompressed 4K video over a single solid copper Cat6 Ethernet cable plugged directly into your local NVR. They record 24/7 without stopping, are far more resilient to Wi‑Fi issues and store footage securely on your premises with zero monthly subscription fees.',
    },
    {
      question:
        'How do you run the wires so they are hidden inside my Fort Worth home?',
      answer:
        'Our licensed technicians specialize in concealed low‑voltage cable routing. We navigate interior attic spaces, crawlspaces and wall cavities to drop Cat6 cables cleanly into interior closets, utility rooms or office spaces where your NVR sits. We install neatly terminated wall plates and custom soffit mounts so no unsightly wires are visible on the exterior or interior of your home.',
    },
    {
      question:
        'Is there a monthly fee to view my home cameras on my phone?',
      answer:
        'No. There is absolutely $0 per month. When you purchase a residential security camera system from Fort Worth Security Cameras, you own 100% of the hardware and video data. You receive encrypted remote viewing on your iPhone, Android, iPad or desktop computer with no cloud subscriptions or mandatory service contracts.',
    },
    {
      question:
        'Who performs the actual security camera installation?',
      answer:
        'All alarm and camera system installations are performed in partnership with licensed contractor Jericho Security and Sound, Texas Class B Security Contractor License Number B13764. This ensures your home security installation adheres strictly to Texas Department of Public Safety regulations and national low‑voltage electrical codes.',
    },
    {
      question:
        'Will home security cameras comply with my Fort Worth HOA rules?',
      answer:
        'Yes. Because we use sleek, compact 4K turret and dome cameras mounted flush against eaves and overhangs with zero exposed exterior conduits, our installations maintain clean curb appeal that satisfies strict HOA guidelines across Fort Worth neighborhoods such as Tanglewood, Montserrat, Ridglea Hills and Heritage.',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Security Camera Installation Fort Worth',
    serviceType: 'Home Security Camera Installation',
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
      { '@type': 'City', name: 'Benbrook' },
      { '@type': 'City', name: 'Crowley' },
      { '@type': 'City', name: 'Forest Hill' },
      { '@type': 'City', name: 'Kennedale' },
      { '@type': 'City', name: 'Mansfield' },
      { '@type': 'City', name: 'Burleson' },
      { '@type': 'City', name: 'Keller' },
      { '@type': 'City', name: 'Southlake' },
      { '@type': 'City', name: 'Haltom City' },
      { '@type': 'City', name: 'North Richland Hills' },
      { '@type': 'City', name: 'Hurst' },
      { '@type': 'City', name: 'Euless' },
      { '@type': 'City', name: 'Bedford' },
      { '@type': 'City', name: 'Saginaw' },
      { '@type': 'City', name: 'Lake Worth' },
      { '@type': 'City', name: 'White Settlement' },
      { '@type': 'City', name: 'Weatherford' },
    ],
    description:
      'Professional residential security camera installation in Fort Worth, TX. 4K PoE cameras, concealed attic Cat6 cabling, zero monthly fees and 1-year warranties. Partnered with licensed security contractor Jericho Security and Sound (B13764).',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free on-site home walkthrough and itemized estimate',
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
        name: 'Residential Security Camera Installation Fort Worth',
        item:
          'https://fortworthsecuritycameras.com/residential-security-camera-installation-fort-worth',
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Residential Security Camera Installation Fort Worth | 4K Home CCTV"
        description="Residential security camera installation in Fort Worth and nearby Tarrant County. 4K PoE cameras, hidden Cat6 wiring, local NVRs. Call 817-231-2962."
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
              label: 'Residential Security Camera Installation Fort Worth',
              path: '/residential-security-camera-installation-fort-worth',
            },
          ]}
          onNavigate={onNavigate}
          variant="light"
        />

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-14 lg:py-22 border-b border-slate-800">
          <SafeImage
            loading="eager"
            src="https://www.pacificoffice.com/wp-content/uploads/2024/05/connected-video-security-hero.webp"
            alt="Residential security camera installation Fort Worth TX home 4K PoE security cameras header background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 sm:opacity-90 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Licensed Texas partner: Jericho Security and Sound (B13764)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Residential Security Camera Installation in Fort Worth, TX
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                Protect your home and family with commercial‑grade 4K Power‑over‑Ethernet (PoE)
                home security cameras. Concealed attic Cat6 cabling, crisp night vision, instant
                mobile alerts and local NVR hard drive storage—100% owned by you with{' '}
                <strong className="text-white font-bold">$0 monthly subscription fees</strong>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>True 4K 8MP video</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hidden attic cabling</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero monthly fees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1‑year warranty</span>
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
                  <span>Get free home estimate</span>
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
              <Star className="w-5 h-5 text-amber-500 fill-amber-500 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">4.9-star rated</div>
              <div className="text-[11px] text-slate-500">Fort Worth homeowners</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Lock className="w-5 h-5 text-emerald-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">$0 monthly fees</div>
              <div className="text-[11px] text-slate-500">100% owned hardware</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Award className="w-5 h-5 text-purple-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">1‑year warranty</div>
              <div className="text-[11px] text-slate-500">Full on‑site protection</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Building2 className="w-5 h-5 text-[#007EFF] mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">2203 8th Ave HQ</div>
              <div className="text-[11px] text-slate-500">Local Fort Worth office</div>
            </div>
          </div>
        </section>

        {/* SECTION 1: OVERVIEW & POE ADVANTAGE */}
        <section className="max-w-7xl mx-auto px-4 pt-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
                <Home className="w-3.5 h-3.5" />
                <span>Commercial‑grade home security for Fort Worth</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Why Fort Worth homeowners replace battery Wi‑Fi cameras with 4K hardwired PoE
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over the past decade, many Texas homeowners installed consumer battery‑powered
                wireless cameras such as Ring, Blink or Arlo. However, most quickly discover their
                limitations: frequent false alarms, delayed motion recording that cuts off before
                porch thieves walk away, dead batteries during cold snaps and mandatory cloud
                subscription fees that add up to $120–$240 per year.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At <strong className="text-slate-900">Fort Worth Security Cameras</strong>, we install
                commercial‑grade 4K PoE home security camera systems built for permanent
                protection. A single solid copper Cat6 Ethernet cable connects each outdoor camera
                directly to your central NVR, delivering both continuous power and
                ultra‑high‑definition video on one reliable line.
              </p>

              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed installation contractor: Jericho Security and Sound (B13764)</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  All residential camera installations are performed under Texas Class B
                  Security Contractor License B13764 held by our licensed partner, Jericho Security
                  and Sound. You receive compliant low‑voltage cabling, clean attic routing and
                  local Fort Worth support you can rely on.
                </p>
              </div>
            </div>

            {/* Comparison Box & Featured Image */}
            <div className="lg:col-span-5 space-y-4">
              {/* Featured Residential Installation Image */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg bg-white space-y-2">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-900">
                  <SafeImage
                    src="https://dfwwholesalesecurity.com/wp-content/uploads/2025/07/steptodown.com695508-1.jpg"
                    alt="Fort Worth residential security camera installation with 4K PoE turret cameras mounted on home eaves and hidden Cat6 attic cabling"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-white flex items-center gap-1.5 border border-white/10">
                    <Home className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Fort Worth Home Security Installation</span>
                  </div>
                </div>
                <p className="px-3.5 pb-2.5 text-xs text-slate-600 leading-snug">
                  Hardwired 4K PoE home security camera installation cleanly integrated into soffits with zero exposed wiring.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-xl space-y-4">
                <h3 className="font-black text-slate-900 text-base border-b border-[#E5E5E5] pb-3 flex items-center justify-between">
                  <span>Hardwired 4K PoE vs. wireless Wi‑Fi cameras</span>
                  <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    4K PoE advantage
                  </span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                    <div className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>24/7 continuous local recording</span>
                    </div>
                    <p className="text-emerald-800">
                      Hardwired to an NVR hard drive, so you never miss driveway or porch activity.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 space-y-1">
                    <div className="font-extrabold text-rose-900 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Wi‑Fi battery cameras: short motion clips</span>
                    </div>
                    <p className="text-rose-800">
                      Often start recording late and stop early, missing critical moments.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                    <div className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Zero monthly subscription fees</span>
                    </div>
                    <p className="text-emerald-800">
                      You own 100% of your camera hardware and video storage from day one.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 space-y-1">
                    <div className="font-extrabold text-rose-900 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Cloud fees: $10–$30+ per month</span>
                    </div>
                    <p className="text-rose-800">
                      Ongoing subscription costs increase as you add more home cameras.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: STRATEGIC CAMERA PLACEMENT */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <Camera className="w-4 h-4" />
              <span>Tailored coverage angles</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Strategic home camera placement for maximum defense
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Proper outdoor camera placement requires calculating lens focal lengths,
              light angles and entry pathways. Here is how we protect Fort Worth homes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Location 1 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-black text-base">
                1
              </div>
              <h3 className="font-black text-slate-900 text-lg">Front porch and package zone</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Wide‑angle 4K turret camera with smart AI human detection. Captures clear facial
                features of delivery drivers, visitors and porch trespassers in both sunlight and
                dark porch conditions.
              </p>
            </div>

            {/* Location 2 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-black text-base">
                2
              </div>
              <h3 className="font-black text-slate-900 text-lg">Driveway and garage overview</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High‑definition 8MP lens positioned under the eave to capture license plates,
                vehicle makes and driveway walk‑ups. Infrared night vision provides 100‑ft clarity
                across dark residential streets.
              </p>
            </div>

            {/* Location 3 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-black text-base">
                3
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Side alleyways and gate latch points
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Narrow corridor cameras guarding wooden side gates and utility meters. Detects
                unauthorized fence jumpers before they reach backyard doors or garage side doors.
              </p>
            </div>

            {/* Location 4 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-black text-base">
                4
              </div>
              <h3 className="font-black text-slate-900 text-lg">Backyard patio and pool areas</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Weather‑sealed IP67 dome cameras monitoring rear doors, covered patios, swimming
                pools and detached sheds. Enhanced night vision turns dark backyards into clear
                usable video.
              </p>
            </div>

            {/* Location 5 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-black text-base">
                5
              </div>
              <h3 className="font-black text-slate-900 text-lg">High‑eave perimeter overlooks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Second‑story roofline cameras providing panoramic coverage of corner‑lot fence
                lines and property borders, helping eliminate blind spots around trees or alcoves.
              </p>
            </div>

            {/* Location 6 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#007EFF] flex items-center justify-center font-black text-base">
                6
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Interior entry foyer (optional)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Discreet indoor dome or turret cameras positioned at primary entryway foyers or
                interior garage doors for added peace of mind when you are away from your Fort Worth
                home.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: CONCEALED WIRING & WORKMANSHIP */}
        <section className="max-w-7xl mx-auto px-4 pt-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E5E5] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                <Wrench className="w-3.5 h-3.5" />
                <span>Clean installation workmanship</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Hidden attic wiring and professional low‑voltage finish
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Exposed conduit, dangling cords and sloppy drill holes can ruin the exterior look of
                a beautiful Fort Worth home. Our technicians are trained low‑voltage specialists
                who take pride in invisible cable management.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>In‑attic Cat6 drops:</strong> We route solid copper Ethernet cables
                    through soffits and attic rafters directly down interior wall cavities.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Neat wall plate terminations:</strong> NVR connections sit neatly behind
                    your living‑room TV, home office or master closet with custom wall plates.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Weather‑sealed exterior mounts:</strong> Junction boxes are sealed to
                    help prevent moisture, pests or leaks around roof soffits.
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 text-white space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm">
                <HardDrive className="w-5 h-5" />
                <span>Local encrypted NVR storage</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your video recordings are stored on surveillance‑grade hard drives housed inside
                your local NVR. Unlike purely cloud systems, your video remains private and
                physically secure inside your home while still being accessible on all your devices.
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Storage retention:</span>
                <span className="font-bold text-white">Around 30–60+ days of 24/7 recording</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: MOBILE APP & AI MOTION */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
              <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-xl">
                <Smartphone className="w-10 h-10 text-[#007EFF]" />
                <h3 className="text-xl font-black text-white">Encrypted mobile app access</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  View live streams and instant motion playback from anywhere on your iPhone,
                  Android, iPad or desktop computer.
                </p>
                <div className="space-y-2 text-xs pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Instant push alerts for human/vehicle detection</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Smart search playback by date and time</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Zero monthly cloud subscriptions or app paywalls</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
                <Cpu className="w-3.5 h-3.5" />
                <span>Smart AI vision technology</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                AI human and vehicle analytics cut down false motion alerts
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Traditional motion detection triggers whenever wind moves branches, insects pass
                near the lens or shadows change. Our 4K home cameras use built‑in AI
                algorithms to focus on human bodies and motor vehicles.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You receive alerts when a person approaches your front porch or a vehicle enters
                your driveway, reducing constant phone buzzing and helping you respond quickly to
                genuine security events.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: TECHNICAL SPECIFICATIONS TABLE */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Home CCTV hardware and system specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Commercial‑grade hardware engineered to withstand North Texas heat and weather:
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#E5E5E5] shadow-lg bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-4 font-black">System component</th>
                  <th className="p-4 font-black">Hardware specification</th>
                  <th className="p-4 font-black">Homeowner benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E5]">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Video resolution</td>
                  <td className="p-4 text-slate-700">
                    4K Ultra HD (3840 × 2160 pixels / 8 megapixels)
                  </td>
                  <td className="p-4 text-emerald-700 font-medium">
                    Zoom on license plates and faces with minimal pixelation
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Night vision technology</td>
                  <td className="p-4 text-slate-700">
                    Advanced IR and enhanced low‑light imaging (around 100‑ft range)
                  </td>
                  <td className="p-4 text-emerald-700 font-medium">
                    Clear usable video even in near‑dark backyards
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Network cabling</td>
                  <td className="p-4 text-slate-700">
                    Solid copper Cat6 UTP 23AWG (attic‑rated)
                  </td>
                  <td className="p-4 text-emerald-700 font-medium">
                    Stable gigabit speed with no wireless dropouts
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Video recorder (NVR)</td>
                  <td className="p-4 text-slate-700">
                    4 / 8 / 16‑channel standalone PoE NVR with surveillance‑grade HDD
                  </td>
                  <td className="p-4 text-emerald-700 font-medium">
                    Continuous 24/7 recording on local encrypted storage
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Weather resistance</td>
                  <td className="p-4 text-slate-700">
                    IP67 weatherproof with durable metal housings
                  </td>
                  <td className="p-4 text-emerald-700 font-medium">
                    Reliable operation in hot summers, storms and dust
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Warranty coverage</td>
                  <td className="p-4 text-slate-700">
                    1‑year direct on‑site replacement warranty
                  </td>
                  <td className="p-4 text-emerald-700 font-medium">
                    Local Fort Worth support if equipment ever needs service
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* RESIDENTIAL VISUAL SECTIONS & MONITORED ZONES */}
        <section className="max-w-7xl mx-auto px-4 pt-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                <Home className="w-4 h-4" />
                <span>Residential Protection Zones</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Essential Home Security Camera Placements
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Commercial-grade 4K PoE camera installations designed to protect entry doors, driveways, backyards, and package delivery zones for Fort Worth homes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80"
                    alt="Front door porch and package delivery security camera installation Fort Worth TX"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                    Front Porch
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-white text-base">Front Porch & Entry</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Facial capture and two-way audio protect front doors from porch pirates and unauthorized visitors.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"
                    alt="Driveway and garage vehicle security camera coverage Fort Worth home"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                    Driveway & Garage
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-white text-base">Driveways & Vehicle Parking</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Wide-angle 4K night vision cameras capture vehicle license plates and driveway approaches.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                    alt="Backyard patio and swimming pool perimeter security camera"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                    Backyard & Pool
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-white text-base">Backyard & Swimming Pool</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Color night vision cameras protect patio doors, swimming pool gates, and rear fence lines.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
                    alt="4K PoE NVR hard drive recorder and encrypted home security mobile app"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                    Local NVR
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-white text-base">Local NVR & Mobile App</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    24/7 continuous local recording to a hard drive NVR with 100% data privacy and zero monthly fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED RESIDENTIAL & PROPERTY MANAGEMENT INDUSTRIES */}
        <div className="max-w-7xl mx-auto px-4 pt-12">
          <RelatedIndustriesBlock
            title="Related Residential & Multi-Family Property Security Solutions"
            subtitle="Explore specialized 4K camera system installation for apartment complexes, HOAs, condos, and gated communities across Fort Worth & DFW."
            onNavigate={onNavigate}
            links={[
              { slug: 'security-cameras-apartment-complexes', name: 'Apartment Complexes & Multi-Family', description: 'Parking lot LPR cameras, breezeway security, pool area monitoring, and leasing office CCTV.' },
              { slug: 'security-cameras-condos', name: 'Condo Buildings & High-Rises', description: 'Lobby visitor access cameras, elevator monitoring, parking garage security, and package room CCTV.' },
              { slug: 'security-cameras-gated-communities', name: 'Gated Communities & Subdivisions', description: 'Guard shack license plate cameras, perimeter gate solar systems, and clubhouse surveillance.' },
              { slug: 'security-cameras-hoa-common-areas', name: 'HOA Common Areas & Amenities', description: 'Community pool 4K surveillance, park perimeter security, and tennis court cameras.' },
              { slug: 'security-cameras-student-housing', name: 'Student Housing & Dormitories', description: 'Dorm entry badge cameras, study hall CCTV, parking area security, and courtyard monitoring.' },
              { slug: 'security-cameras-mobile-home-parks', name: 'Mobile Home & RV Parks', description: 'Wireless solar security poles, entry/exit LPR cameras, and clubhouse surveillance.' }
            ]}
          />
        </div>

        {/* SECTION 6: FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-5xl mx-auto px-4 pt-16 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <HelpCircle className="w-4 h-4" />
              <span>Got questions?</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Home security camera FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers for Fort Worth homeowners:
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Licensed Texas partner (B13764)</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Book your free on‑site security assessment
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Contact Leroy Reber and our Fort Worth team today. We walk your property
                perimeter, recommend exact camera angles and provide a clear itemized quote with no
                pressure.
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
                Request free quote
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