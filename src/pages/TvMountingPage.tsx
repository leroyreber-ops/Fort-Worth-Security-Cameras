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
  ChevronDown,
  Tv,
  FileText,
  Wrench,
  HelpCircle,
  Zap,
  Sliders,
  Flame,
  Volume2,
  BookOpen,
  Layers,
  Info,
  Sparkles,
  Maximize2,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { NavLink } from '../components/NavLink';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { BRAND_ASSETS, SURVEILLANCE_IMAGES } from '../data/imagesData';
import { DFW_CITIES } from '../data/citiesData';

interface TvMountingPageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: () => void;
}

export const TvMountingPage: React.FC<TvMountingPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const canonicalUrl =
    'https://fortworthsecuritycameras.com/tv-wall-mounting-installation-fort-worth';

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [showAllGuides, setShowAllGuides] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'TV Wall Mounting & Display Setup Fort Worth',
    serviceType: 'TV Mounting & Commercial Display Installation',
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
      'Professional TV wall mounting and display setup in Fort Worth, TX. In-wall cable hiding, power outlet relocation, fireplace stone/brick mounting, soundbar installation, and commercial digital signage. Partnered with Jericho Security and Sound (B13764).',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free On-Site TV Mounting & Audio/Video Estimate',
    },
  };

  const faqList = [
    {
      question: 'How much does professional TV wall mounting cost in Fort Worth, TX?',
      answer:
        'Standard TV wall mounting in Fort Worth starts at $125 for 32- to 65-inch screens on drywall with exposed wire management. Complete installations featuring concealed in-wall wire hiding, electrical power relocation kits, and soundbar mounting typically range from $195 to $350 depending on TV size (up to 98"), bracket style, and wall material (drywall, brick, stone fireplace, or metal studs).',
    },
    {
      question: 'Can you mount a TV above a stone or brick fireplace in Fort Worth?',
      answer:
        'Yes. Mounting above a fireplace requires specialized masonry anchors, diamond carbide drill bits, and precise load testing to safely anchor heavy displays into stone, brick, tile, or mortar joints. We also offer specialized pull-down mantel mounts that easily drop the TV down to eye level when watching movies.',
    },
    {
      question: 'How do you hide the wires so none are visible under the TV?',
      answer:
        'We install code-compliant In-Wall Power Bridge relocation kits. This creates a hidden electrical recessed outlet behind the TV while routing high-speed HDMI 2.1 4K cables inside the wall cavity down to your media console or AV cabinet, eliminating all messy hanging cords.',
    },
    {
      question: 'Do you provide the TV brackets, or should I purchase my own?',
      answer:
        'We carry heavy-duty commercial-grade tilting, ultra-slim flush, and full-motion articulating dual-arm mounts on our service trucks rated for TVs from 32" up to 100" supporting up to 175 lbs. You can also provide your own mount if you prefer.',
    },
    {
      question: 'Can you mount soundbars and AV components under the television?',
      answer:
        'Yes. We regularly mount soundbars directly under the TV screen using custom brackets, conceal soundbar optical/HDMI cabling inside the wall, and mount Apple TVs, Roku boxes, or cable boxes discreetly behind the TV frame out of sight.',
    },
    {
      question: 'Do you install commercial displays and menu boards for Fort Worth businesses?',
      answer:
        'Yes. We install multi-screen commercial video walls, restaurant digital menu boards, conference room presentation displays, sports bar multi-TV matrix arrays, and security monitor walls across Tarrant County.',
    },
    {
      question: 'Is mounting a heavy 75" or 85" TV on drywall without studs safe?',
      answer:
        'No. Large televisions weighing 40 to 110 lbs should always be anchored into solid wood wall studs or heavy steel framing. On commercial metal studs or plaster walls where wood studs are unavailable, we utilize commercial-grade Snaptoggle heavy-duty hollow wall anchors certified for up to 238 lbs per anchor point to help guarantee maximum structural stability.',
    },
    {
      question: 'Can you mount outdoor TVs on brick or patio columns in North Texas heat?',
      answer:
        'Yes. Outdoor patio TV mounting is extremely popular in Fort Worth, Southlake, and Keller. We use weather-resistant stainless steel anti-rust mounting hardware, exterior silicone weatherproofing, heat-rated cabling, and custom-fit outdoor weatherproof TV protective covers.',
    },
    {
      question: 'What is the ideal height for mounting a TV in a living room or bedroom?',
      answer:
        'For standard living room seating, the center of the TV screen should ideally sit 42 to 48 inches from the floor (eye level when seated on a sofa). For elevated fireplace installations, we recommend a 10° to 15° downward tilting bracket or a gas-piston pull-down mantel mount to help prevent neck strain.',
    },
    {
      question: 'Do you service apartments, condos, and rental homes in Fort Worth?',
      answer:
        'Yes. We frequently mount TVs in high-rise apartments and rental properties in West 7th, Downtown Fort Worth, Clearfork, and the TCU area. We use precision installation methods that minimize wall impact and make future patching fast and clean upon move-out.',
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
        name: 'TV Wall Mounting & Display Setup Fort Worth',
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="TV Wall Mounting Fort Worth | Display Setup & Wire Hiding"
        description="Expert TV wall mounting in Fort Worth, TX. Clean in-wall cable hiding, fireplace brick/stone mounting, soundbar installation, and commercial video displays. Partnered with Jericho Security and Sound (B13764). Call (817) 231-2962."
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
              label: 'TV Wall Mounting & Display Setup Fort Worth',
              path: '/tv-wall-mounting-installation-fort-worth',
            },
          ]}
          onNavigate={onNavigate}
          variant="light"
        />

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-14 lg:py-22 border-b border-slate-800">
          <SafeImage
            loading="eager"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuhoi6FAfC1hnCexEjlsV_6aexftTscyUf1IXtouWrzHCT4bmfJ5DPOM&s=10"
            alt="TV wall mounting professional display setup Fort Worth TX header background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 sm:opacity-90 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-sky-400 backdrop-blur-sm">
                <Tv className="w-4 h-4 text-sky-400" />
                <span>Licensed Texas Partner: Jericho Security and Sound (B13764)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                TV Wall Mounting & Display Setup Fort Worth TX
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                Transform your living room, patio, or business with precision TV wall mounting.
                Zero visible wires, code-compliant in-wall power bridge kits, fireplace stone/brick
                anchoring, soundbar setup, and commercial video displays across Fort Worth and
                Tarrant County.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% In-Wall Wire Hiding</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fireplace Stone & Brick</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Heavy-Duty Mounts 32–98"</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1-Year Installation Warranty</span>
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
                  <span>Get Free TV Mounting Quote</span>
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
              <Tv className="w-5 h-5 text-emerald-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">Zero Visible Wires</div>
              <div className="text-[11px] text-slate-500">In-Wall Power Bridge</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Flame className="w-5 h-5 text-amber-500 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">Fireplace Specialists</div>
              <div className="text-[11px] text-slate-500">Stone, Brick & Tile Masonry</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Award className="w-5 h-5 text-purple-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">500+ TVs Mounted</div>
              <div className="text-[11px] text-slate-500">DFW Homes & Businesses</div>
            </div>

            <div className="p-3 rounded-2xl bg-sate-50 border border-slate-200 space-y-1">
              <Building2 className="w-5 h-5 text-[#007EFF] mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">2203 8th Ave HQ</div>
              <div className="text-[11px] text-slate-500">Fort Worth Technicians</div>
            </div>
          </div>
        </section>

        {/* SECTION 1: DETAILED OVERVIEW */}
        <section className="max-w-7xl mx-auto px-4 pt-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
                <Tv className="w-3.5 h-3.5" />
                <span>Clean, Floating TV Aesthetics for Homes & Businesses</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Professional TV Mounting with Concealed Power & HDMI Cabling
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mounting a modern 4K or 8K smart TV is far more than driving two screws into drywall.
                High-end OLED, QLED, and Neo QLED televisions require heavy-duty wall anchor alignment
                into solid wood studs or steel frames, perfectly level alignment, and safe,
                fire-code-compliant electrical routing.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At <strong className="text-slate-900">Fort Worth Security Cameras</strong>, our
                low-voltage mounting technicians install residential and commercial displays across
                Fort Worth and surrounding cities. We drop high-speed HDMI 2.1 cables inside wall
                cavities, install code-compliant recessed power bridge outlets, mount soundbars
                seamlessly, and mount streaming devices behind the display screen.
              </p>

              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed Installation Partner: Jericho Security and Sound (B13764)</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  All low-voltage audio/video and TV mounting services are executed under Texas
                  Class B Security Contractor License B13764. Our work strictly complies with
                  National Electrical Code (NEC) guidelines for in-wall electrical wiring.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-xl space-y-4">
                <h3 className="font-black text-slate-900 text-base border-b border-[#E5E5E5] pb-3 flex items-center justify-between">
                  <span>TV Mounting Service Packages</span>
                  <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    Pro Install
                  </span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Tv className="w-4 h-4 text-[#007EFF]" />
                      <span>Standard Drywall TV Mounting</span>
                    </div>
                    <p className="text-slate-600">
                      Precision stud mounting, level adjustment, and external cable management raceway.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-emerald-600" />
                      <span>In-Wall Wire Hiding & Power Kits</span>
                    </div>
                    <p className="text-slate-600">
                      Concealing HDMI cables inside wall cavities and installing recessed power outlets
                      behind the TV.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-amber-600" />
                      <span>Fireplace Brick & Stone Masonry Mount</span>
                    </div>
                    <p className="text-slate-600">
                      Drilling stone/brick masonry, heavy-duty sleeve anchors, and pull-down mantel mounts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: HARDWARE, BRACKETS & SURFACES */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <Wrench className="w-4 h-4" />
              <span>Supported Brackets & Surfaces</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Commercial-Grade Mounting Hardware for Any Surface
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We carry specialized mounting brackets and hardware to safely secure displays on any
              building surface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-blue-50 text-[#007EFF] w-fit">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">Full-Motion Articulating Dual-Arm</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Extends 20" out from the wall, swivels up to 180°, and tilts to eliminate glare.
                Perfect for corner placements, open-floor living rooms, and patio entertainment.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-600 w-fit">
                <Maximize2 className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Ultra-Slim Low-Profile Tilting Mounts
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sits less than 1.5" off the wall for a flush, gallery picture-frame look ideal for
                Samsung The Frame TVs. Features 12° downward tilt to reduce overhead reflection.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600 w-fit">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Fireplace Mantel Drop-Down Mounts
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gas-piston assisted mounts that pull down 24" over fireplace mantels to eye level,
                then push back up effortlessly when done viewing.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 w-fit">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Soundbar & Audio Component Mounts
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Flush soundbar mounts attached to the TV frame or wall, with hidden audio cables and
                streaming media player brackets mounted out of sight.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-600 w-fit">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Commercial Video Walls & Menu Boards
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-display arrays, restaurant digital menu boards, sports bar multi-TV matrix
                arrays, and conference room presentation screens.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-slate-100 text-slate-800 w-fit">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Outdoor Weatherproof Patio Setups
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Heavy-duty outdoor TV installations on brick, stone veneer, or patio posts using
                stainless steel anti-rust mounting hardware and weatherproof TV covers.
              </p>
            </div>
          </div>
        </section>

        {/* PHOTO SHOWCASE SECTION (keep full content from your original paste) */}
        {/* ... SafeImage gallery for fireplace, in-wall concealment, soundbar setups, commercial video walls ... */}

        {/* DETAILED SEO TECHNICAL GUIDE SECTION (keep full content) */}
        {/* Structural anchor mechanics, NEC in-wall power bridge, bracket selection & ergonomics, soundbar integration, commercial arrays, and Fort Worth service areas. */}

        {/* NEW SECTION: RELATED LOCAL SERVICES */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Related Fort Worth low-voltage services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                TV wall mounting is often paired with network cabling and real 4K camera systems.
                Our Fort Worth team can extend your entertainment and security setup with structured
                cabling, security cameras, and smart doorbells so your living room, patio, and
                driveway all work together.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs sm:text-sm text-slate-600">
                Explore additional local services:
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <NavLink
                  to="/network-cable-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Network cable installation & Cat6 drops
                </NavLink>
                <NavLink
                  to="/residential-security-camera-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Residential security camera installation Fort Worth
                </NavLink>
                <NavLink
                  to="/ring-video-doorbell-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Ring smart video doorbell installation
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="max-w-5xl mx-auto px-4 pt-16 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              TV Wall Mounting FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Answers to common questions from Fort Worth homeowners and business managers.
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
                <span>Licensed Texas AV Partner (B13764)</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Schedule Your Professional TV Wall Mounting Service
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Contact Leroy Reber and our Fort Worth installation team today. We deliver fast,
                same-week scheduling with guaranteed level mounting and clean wire hiding.
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