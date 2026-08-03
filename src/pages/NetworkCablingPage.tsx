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
  Server,
  Zap,
  Lock,
  FileText,
  Wrench,
  HelpCircle,
  HardDrive,
  Network,
  Radio,
  FileCheck2,
  Briefcase,
  Layers,
  Cpu,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { NavLink } from '../components/NavLink';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { BRAND_ASSETS, SURVEILLANCE_IMAGES } from '../data/imagesData';
import { DFW_CITIES } from '../data/citiesData';

interface NetworkCablingPageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: () => void;
}

export const NetworkCablingPage: React.FC<NetworkCablingPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const canonicalUrl =
    'https://fortworthsecuritycameras.com/network-cable-installation-fort-worth';

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Network Cable Installation & Structured Cabling Fort Worth',
    serviceType: 'Low Voltage Structured Cabling & Data Drops',
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
      'Professional network cable installation and structured Cat6/Cat6A cabling in Fort Worth, TX. Server rack wire management, patch panel termination, fiber optic backbones, and WAP drops for offices, warehouses, and homes. Partnered with Jericho Security and Sound (B13764).',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free On-Site Structured Cabling Assessment & Proposal',
    },
  };

  const faqList = [
    {
      question: 'How much does network cable installation cost per drop in Fort Worth, TX?',
      answer:
        'The cost for a commercial or residential Cat6 ethernet cable drop in Fort Worth typically ranges between $125 and $250 per run depending on the building layout, ceiling height, distance to the server rack, and whether plenum (CMP) or riser (CMR) fire-rated cable is required. Volume discounts apply for multi-run office or warehouse installations.',
    },
    {
      question: 'What is the difference between Cat6 and Cat6A network cabling?',
      answer:
        'Cat6 supports up to 10 Gigabit speeds at distances up to 165 feet (55 meters) and 1 Gigabit up to 328 feet (100 meters). Cat6A features thicker copper conductors and augmented shielding that supports full 10 Gigabit speeds up to the full 328-foot maximum distance, making it ideal for high-density server closets, 4K video streaming networks, and future-proof corporate backbones.',
    },
    {
      question: 'Why avoid cheap Copper Clad Aluminum (CCA) cables?',
      answer:
        'CCA cables use aluminum wire thinly coated in copper. They violate National Electrical Code (NEC) standards, brittle easily during pull-throughs, suffer extreme signal attenuation, and pose serious fire hazards when carrying Power over Ethernet (PoE) current. We strictly use 100% Solid Bare Copper UTP/STP 23AWG cabling.',
    },
    {
      question: 'Can you install cabling in existing finished walls without destroying the drywall?',
      answer:
        'Yes. Our skilled technicians specialize in low-impact wall fishing. We use flex rods, fiberglass fish tapes, and attic/crawlspace routes to drop Cat6 cables cleanly into hollow wall cavities, terminating them into flush single-gang wall plates with minimal or zero drywall damage.',
    },
    {
      question: 'Do you provide network rack cleanup and patch panel re-organization?',
      answer:
        'Yes. We transform messy “spaghetti monster” server rooms into pristine, color-coded, labeled rack setups. We trace legacy lines, purge dead cables, install horizontal cable managers, and re-patch connections with custom-length slim patch cords.',
    },
    {
      question: 'Is your cabling work performed by licensed technicians?',
      answer:
        'Yes. All low-voltage network cabling and security installations are executed in partnership with licensed contractor Jericho Security and Sound, Texas Class B Security Contractor License Number B13764.',
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
        name: 'Network Cable Installation Fort Worth',
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Network Cable Installation Fort Worth | Cat6 Structured Cabling"
        description="Professional network cable installation in Fort Worth, TX. Cat6/Cat6A structured cabling, server rack patch panels, fiber optic drops, and cable cleanup for homes and offices. Partnered with Jericho Security and Sound (B13764). Call (817) 231-2962."
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
              label: 'Network Cable Installation Fort Worth',
              path: '/network-cable-installation-fort-worth',
            },
          ]}
          onNavigate={onNavigate}
          variant="light"
        />

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-14 lg:py-22 border-b border-slate-800">
          <SafeImage
            loading="eager"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DsIMo2bqpuMEnnVQejYs0RMB4Ts6hJiZsSWB3FmvgQaxmRbILOzTqN-3&s=10"
            alt="Network cable installation Fort Worth TX Cat6 ethernet cabling header background image"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 sm:opacity-90 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-sky-400 backdrop-blur-sm">
                <Network className="w-4 h-4 text-sky-400" />
                <span>Licensed Texas Partner: Jericho Security and Sound (B13764)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Network Cable Installation & Structured Cabling Fort Worth TX
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                High-speed Cat6 and Cat6A ethernet cabling, server rack patch panel terminations,
                Wireless Access Point (WAP) drops, and fiber optic backbones for Fort Worth
                businesses, warehouses, medical offices, and custom homes. 100% solid copper,
                Fluke-tested infrastructure engineered for reliable local network performance.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Solid Bare Copper</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fluke Cable Tested</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Plenum and Riser Rated</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1-Year Labor Warranty</span>
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
                  <span>Request Cabling Proposal</span>
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
              <Network className="w-5 h-5 text-emerald-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">Gigabit / 10G Speeds</div>
              <div className="text-[11px] text-slate-500">Certified Cat6 and Cat6A</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Server className="w-5 h-5 text-purple-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">Server Rack Cleanups</div>
              <div className="text-[11px] text-slate-500">Patch Panel Labeled</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Award className="w-5 h-5 text-emerald-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">Fluke Verified</div>
              <div className="text-[11px] text-slate-500">100% Signal Pass Rate</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Building2 className="w-5 h-5 text-[#007EFF] mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">2203 8th Ave HQ</div>
              <div className="text-[11px] text-slate-500">Fort Worth Dispatch</div>
            </div>
          </div>
        </section>

        {/* SECTION 1: DETAILED OVERVIEW & WHY STRUCTURED CABLING MATTERS */}
        <section className="max-w-7xl mx-auto px-4 pt-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
                <Network className="w-3.5 h-3.5" />
                <span>The Digital Backbone of DFW Businesses and Homes</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Flawless Low-Voltage Structured Cabling Infrastructure in Fort Worth
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In today’s hyper-connected business landscape, sluggish wireless connections, dropped
                VoIP phone calls, and buffer-prone security camera feeds are almost always caused by
                inferior, unorganized network cabling. Wireless signals suffer from drywall
                attenuation, microwave interference, and metal stud reflection, while properly
                designed structured cabling delivers consistent speed and uptime.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At <strong className="text-slate-900">Fort Worth Security Cameras</strong>, we design
                and install high-performance structured low-voltage cabling networks that power local
                Fort Worth businesses, corporate offices, industrial distribution centers, medical
                clinics, and modern residences. Every cable run is neatly routed through J-hooks,
                terminated onto high-density patch panels, and systematically labeled for immediate
                troubleshooting and future expansion.
              </p>

              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed Low-Voltage Contractor: Jericho Security and Sound (B13764)</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  All structured cabling, IP security camera drops, and telecom wiring projects are
                  executed under Texas Class B Security Contractor License B13764 held by our partner
                  Jericho Security and Sound. We adhere strictly to ANSI/TIA-568 cabling standards and
                  National Electrical Code (NEC) fire ratings for safe, compliant installations across
                  Fort Worth and Tarrant County.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-xl space-y-4">
                <h3 className="font-black text-slate-900 text-base border-b border-[#E5E5E5] pb-3 flex items-center justify-between">
                  <span>Structured Cabling Core Services</span>
                  <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    Cat6 / Cat6A
                  </span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Network className="w-4 h-4 text-[#007EFF]" />
                      <span>Commercial Data and Voice Drops</span>
                    </div>
                    <p className="text-slate-600">
                      Workstation RJ45 drops, IP desk phones, network printers, and smart TV displays
                      for offices, retail, and multi-tenant spaces.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Radio className="w-4 h-4 text-purple-600" />
                      <span>Wireless Access Point (WAP) Cabling</span>
                    </div>
                    <p className="text-slate-600">
                      Ceiling Cat6 runs powering Ubiquiti, Cisco, Aruba, or Meraki WiFi 6/6E access
                      points for whole-building wireless coverage.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Server className="w-4 h-4 text-emerald-600" />
                      <span>Server Closet Rack Cleanup and Re-Wiring</span>
                    </div>
                    <p className="text-slate-600">
                      Untangling cable clutter, installing rack managers, and re-patching with custom
                      slim leads to create clean, support-friendly network closets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CABLING TYPES & TECHNICAL CAPABILITIES */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <Layers className="w-4 h-4" />
              <span>Media and Cable Standards</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Low-Voltage Media Solutions Built for Peak Performance
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We engineer custom wiring infrastructure suited to your facility’s environmental and
              bandwidth demands:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-blue-50 text-[#007EFF] w-fit">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">Cat6 Solid Copper Cable Drops</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                23AWG unshielded twisted pair (UTP) rated for 1 Gigabit up to 328ft and 10 Gigabit up
                to 165ft. Ideal for corporate desktop workstations, POS registers, smart TVs, and IP
                surveillance cameras.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-600 w-fit">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">Cat6A Augmented Shielded (STP)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Foil-shielded cabling designed for high-density 10 Gigabit ethernet channels up to
                328ft. Eliminates alien crosstalk in industrial plants with heavy machinery,
                high-voltage lines, or medical imaging equipment.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 w-fit">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">Plenum CMP Fire-Rated Cabling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Teflon-jacketed low-smoke cabling mandated by Fort Worth commercial fire codes for
                drops routed through air plenum ceilings, HVAC returns, and drop-tile commercial
                ceilings.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600 w-fit">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">Patch Panel Rack and Wall Mounts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                24-port and 48-port RJ45 keystone patch panels housed inside 19-inch 2-post server
                racks, enclosed wall-mount cabinets, or hinged wall brackets with organized rear
                strain-relief bars.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-600 w-fit">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">Fiber Optic Backbones and Inter-Building</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Single-mode (OS2) and multi-mode (OM3/OM4) fiber optic trunks connecting separate
                building wings, detached warehouses, or floor-to-floor network closets beyond the
                328ft copper limit.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-slate-100 text-slate-800 w-fit">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">Coaxial RG6 and Audio/Video Feeds</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quad-shielded RG6 coaxial cabling for cable TV feeds, digital signage, SDI camera
                signals, and commercial video distribution across sports bars, waiting rooms, and
                conference rooms.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: TECHNICAL SPECIFICATIONS TABLE */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Structured Cabling Hardware and Standard Specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Commercial-grade cabling specifications engineered to ANSI/TIA and NEC safety codes:
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#E5E5E5] shadow-lg bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-4 font-black">Cabling Category</th>
                  <th className="p-4 font-black">Conductor and Shielding</th>
                  <th className="p-4 font-black">Max Bandwidth and Distance</th>
                  <th className="p-4 font-black">Recommended Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E5]">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Cat6 Solid Copper</td>
                  <td className="p-4 text-slate-700">23AWG 100% Bare Copper UTP</td>
                  <td className="p-4 text-emerald-700 font-medium">1 Gbps @ 328ft / 10 Gbps @ 165ft</td>
                  <td className="p-4 text-slate-600">Workstation PCs, IP Cameras, Smart TVs</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Cat6A Shielded (STP)</td>
                  <td className="p-4 text-slate-700">23AWG Solid Copper + Foil Shielding</td>
                  <td className="p-4 text-emerald-700 font-medium">10 Gbps @ 328ft (Full Distance)</td>
                  <td className="p-4 text-slate-600">Server Interlinks, Healthcare, Industrial</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">OM3/OM4 Multi-Mode Fiber</td>
                  <td className="p-4 text-slate-700">50/125µm Aqua Fiber Glass Core</td>
                  <td className="p-4 text-emerald-700 font-medium">10G to 40G up to 1,000+ ft</td>
                  <td className="p-4 text-slate-600">Intra-building MDF to IDF Closet Backbones</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">OS2 Single-Mode Fiber</td>
                  <td className="p-4 text-slate-700">9/125µm Yellow Fiber Glass Core</td>
                  <td className="p-4 text-emerald-700 font-medium">10G to 100G up to 6.2 miles</td>
                  <td className="p-4 text-slate-600">Inter-building Campus Links and Long Hauls</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* NEW SECTION: RELATED LOCAL SERVICES */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Related Fort Worth low-voltage services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Network cabling is often installed alongside other security and communications
                systems. Our Fort Worth team provides integrated low-voltage solutions so your
                structured cabling, cameras, phones, and web presence all work together.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs sm:text-sm text-slate-600">
                Explore additional local services:
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <NavLink
                  to="/commercial-security-camera-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Fort Worth commercial security camera installation
                </NavLink>
                <NavLink
                  to="/residential-security-camera-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Fort Worth residential security camera installation
                </NavLink>
                <NavLink
                  to="/business-communications-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Business communications and VoIP cabling
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-5xl mx-auto px-4 pt-16 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Network Cable Installation FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Answers to common low-voltage cabling questions from Fort Worth clients:
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
                <span>Licensed Texas Low-Voltage Partner (B13764)</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Schedule a Free On-Site Structured Cabling Assessment
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Contact Leroy Reber and our Fort Worth low-voltage installation team today. We perform
                site walks, calculate cable drop runs, and provide an itemized proposal for your
                network cabling project.
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
                Request Proposal
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