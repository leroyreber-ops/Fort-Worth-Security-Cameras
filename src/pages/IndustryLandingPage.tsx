import React, { useState } from 'react';
import {
  ShieldCheck,
  Phone,
  CheckCircle2,
  ArrowRight,
  Camera,
  Wrench,
  Star,
  MessageSquare,
  HelpCircle,
  Building2,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Award,
  Lock,
  Layers,
  ChevronRight
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { FAQSection } from '../components/FAQSection';
import { IndustryHero } from '../components/IndustryHero';
import { RelatedIndustriesBlock } from '../components/RelatedIndustriesBlock';
import { IndustryPageInfo } from '../types';
import { ALL_INDUSTRIES_DATA, getIndustriesByCategory, INDUSTRY_CATEGORIES, getRelatedServicesForIndustry } from '../data/industriesData';
import { DFW_CITIES } from '../data/citiesData';
import { getPageImages, BRAND_ASSETS } from '../data/imagesData';
import { industryAssets, getIndustryAssets } from '../data/industryAssets';
import { SafeImage } from '../components/SafeImage';
import { NavLink } from '../components/NavLink';
import { generateFAQSchema } from '../lib/seo';

interface IndustryLandingPageProps {
  industryData: IndustryPageInfo;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const IndustryLandingPage: React.FC<IndustryLandingPageProps> = ({
  industryData,
  onNavigate,
  onOpenQuoteModal
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const assets = industryAssets.getAssets(industryData);
  const canonicalFullUrl = `https://fortworthsecuritycameras.com/${industryData.slug}`;

  // Dynamically pull related core services from SERVICE_REGISTRY
  const relatedServices = getRelatedServicesForIndustry(industryData);

  // Generate structured FAQ Schema
  const faqSchema = generateFAQSchema(industryData.faqs, `${industryData.name} FAQs`);

  // Find related industries in same category
  const categoryInfo = INDUSTRY_CATEGORIES.find((c) => c.name === industryData.category) ||
    INDUSTRY_CATEGORIES.find((c) => c.id === 'retail')!;
  
  let relatedIndustries = ALL_INDUSTRIES_DATA.filter(
    (ind) => ind.category === industryData.category && ind.slug !== industryData.slug
  );
  if (relatedIndustries.length < 6) {
    const otherIndustries = ALL_INDUSTRIES_DATA.filter(
      (ind) => ind.category !== industryData.category && ind.slug !== industryData.slug
    );
    relatedIndustries = [...relatedIndustries, ...otherIndustries];
  }
  relatedIndustries = relatedIndustries.slice(0, 6);

  const serviceAreaCities = DFW_CITIES.slice(0, 6);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
      {/* Dynamic SEO Meta & Schema JSON-LD */}
      <SEOHead
        title={industryData.metaTitle}
        description={industryData.metaDescription}
        canonicalUrl={canonicalFullUrl}
        ogImage={assets.rightCard}
        type="article"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: `${industryData.name} Security Camera System Installation`,
              description: industryData.metaDescription,
              provider: {
                '@type': 'LocalBusiness',
                name: 'DFW Wholesale Security / Fort Worth Security Cameras',
                telephone: '(817) 231-2962',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Fort Worth',
                  addressRegion: 'TX',
                  postalCode: '76102',
                  addressCountry: 'US'
                }
              },
              areaServed: {
                '@type': 'State',
                name: 'Texas'
              }
            },
            ...(faqSchema ? [faqSchema] : [])
          ]
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            path={`/${industryData.slug}`}
            titleOverride={industryData.name}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      {/* DYNAMIC INDUSTRY HERO SECTION */}
      <IndustryHero
        industryData={industryData}
        assets={assets}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* WHY THIS INDUSTRY NEEDS CAMERAS SECTION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>Tailored Industry Surveillance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why {industryData.name} Require Commercial Security Cameras
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every business sector faces unique security vulnerabilities. Generic off-the-shelf camera kits leave vital blind spots. Here is why {industryData.name.toLowerCase()} in Fort Worth require commercial 4K PoE surveillance systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm leading-relaxed text-slate-700 text-base sm:text-lg space-y-4">
              {industryData.whyNeedsCameras.split('\n\n').filter(Boolean).map((paragraph, idx) => (
                <p key={idx} className="text-slate-700 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-800 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>24/7 4K PoE Surveillance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>0 Monthly Subscription Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Local Hard Drive NVR Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Encrypted Mobile App Access</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <SafeImage
                  src={assets.gallery[0]}
                  alt={`${industryData.name} security camera system surveillance view in Fort Worth TX`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60">
                  <p className="text-xs font-bold uppercase text-blue-400 tracking-wider">Monitored Facility Zone</p>
                  <p className="text-sm font-semibold">{industryData.name} Active Commercial Surveillance</p>
                </div>
              </div>

              <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 space-y-4">
                <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3">
                  Fast Facts
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Service Area:</strong> Fort Worth & Tarrant County</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Install Turnaround:</strong> 1-2 Business Days</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Storage:</strong> Local NVR, no monthly cloud fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON RISKS GRID */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Common Security Threats in {industryData.name}
            </h2>
            <p className="text-slate-600">
              Identifying key vulnerability areas allows our Fort Worth camera engineers to design targeted defense layouts that protect your assets and liabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryData.commonRisks.map((risk, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start"
              >
                <div className="p-3 rounded-lg bg-red-50 text-red-600 shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{risk.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{risk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST PLACEMENTS SECTION WITH VISUAL GALLERY SPOTLIGHT */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Optimal Camera Placements for {industryData.name}
            </h2>
            <p className="text-slate-600">
              Strategic lens positioning ensures complete coverage across critical choke points, transaction desks, and perimeter boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <SafeImage
                  src={assets.gallery[1]}
                  alt={`Optimal security camera placement and lens positioning for ${industryData.name} in Fort Worth`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60">
                  <p className="text-xs font-bold uppercase text-emerald-400 tracking-wider">Strategic Lens Positioning</p>
                  <p className="text-sm font-semibold">{industryData.name} Priority Coverage Areas</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industryData.bestPlacements.map((placement, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-3">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">{placement.location}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{placement.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDED FEATURES SECTION */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Recommended Camera Features for {industryData.name}
            </h2>
            <p className="text-slate-400">
              Commercial-grade hardware specs engineered for maximum clarity, durability, and operational performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryData.recommendedFeatures.map((feat, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700/80 rounded-xl p-6 flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{feat.feature}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PROFESSIONAL INSTALLATION & FORT WORTH RELEVANCE WITH CABLING SPOTLIGHT */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <Wrench className="w-4 h-4" />
                <span>Licensed Local Installation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Why Professional Installation Matters for {industryData.name}
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {industryData.whyProfessionalInstall}
              </p>
              
              <div className="pt-2">
                <h3 className="font-bold text-slate-900 text-lg mb-2">Local Fort Worth & North Texas Footprint</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {industryData.fortWorthRelevance}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenQuoteModal(`${industryData.name} Security System`)}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors text-center text-sm"
                >
                  Schedule On-Site Inspection
                </button>
                <a
                  href="tel:8172312962"
                  className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors text-center text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>(817) 231-2962</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <SafeImage
                  src={assets.gallery[2]}
                  alt={`Licensed low-voltage technician installing Cat6 cabling and 4K security cameras for ${industryData.name} in Fort Worth`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 text-xs">
                  <p className="font-bold text-amber-400">Texas Class B License #B13764</p>
                  <p className="text-slate-200 font-medium">Licensed Low-Voltage Wiring & Professional Hardware Mounting</p>
                </div>
              </div>

              <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 space-y-4">
                <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3">
                  The DFW Wholesale Security Difference
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>100% Solid Copper Cat6:</strong> Zero cheap copper-clad wire for full PoE camera bandwidth.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>0 Monthly Fees:</strong> On-premise multi-terabyte NVR storage with complete owner privacy.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>1-Year Warranty & Support:</strong> Backed by licensed local Fort Worth low-voltage technicians.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXAMPLE MONITORED ZONES GALLERY SHOWCASE */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Camera className="w-4 h-4" />
              <span>Monitored Environments</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Example Monitored Zones for {industryData.name}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Real-world commercial camera installation layouts tailored to protect critical areas throughout {industryData.name.toLowerCase()} properties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={assets.gallery[0]}
                  alt={`${industryData.name} entrance and customer access security camera coverage in Fort Worth`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Zone 1
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Main Entrance & Access</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-definition facial capture and LPR camera lenses monitor every entry and exit point.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={assets.gallery[1]}
                  alt={`${industryData.name} transaction counter and reception security camera coverage`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Zone 2
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Checkout & Reception Desk</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Clear 4K varifocal coverage tracks register cash drawers, customer transactions, and counter interactions.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={assets.gallery[2]}
                  alt={`${industryData.name} inventory stockroom and loading dock security camera`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Zone 3
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Storage & Loading Docks</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Vandal-resistant IP67 outdoor bullets safeguard rear loading bays, inventory shelves, and delivery corridors.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={assets.gallery[3]}
                  alt={`${industryData.name} 4K PoE NVR server rack and encrypted smartphone monitoring app`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Zone 4
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Local NVR & Remote Access</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Encrypted local hard drive NVR recording with instantaneous remote mobile viewing and zero monthly fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC RELATED SERVICES SECTION FROM SERVICE REGISTRY */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Core Integration Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Related Security & Cabling Services
            </h2>
            <p className="text-slate-400 text-base">
              Enhance your {industryData.name} facility with our specialized low-voltage, wiring, and surveillance installation offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <div
                key={service.id}
                className="bg-slate-800 border border-slate-700/80 rounded-2xl p-6 hover:border-blue-500/80 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                      {service.iconName === 'Network' && <Layers className="w-6 h-6" />}
                      {service.iconName === 'Home' && <Building2 className="w-6 h-6" />}
                      {service.iconName === 'Tv' && <Camera className="w-6 h-6" />}
                      {service.iconName === 'Bell' && <Lock className="w-6 h-6" />}
                      {service.iconName === 'PhoneCall' && <Phone className="w-6 h-6" />}
                      {service.iconName === 'Globe' && <Award className="w-6 h-6" />}
                      {(service.iconName === 'Camera' || service.iconName === 'ShieldCheck') && <ShieldCheck className="w-6 h-6" />}
                    </div>
                    {service.badge && (
                      <span className="text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2.5 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-700/60 flex items-center justify-between">
                  <NavLink
                    to={service.slug}
                    onNavigate={onNavigate}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="text-xs font-bold text-slate-300 hover:text-white bg-slate-700/60 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REUSABLE FAQ SECTION WITH SCHEMA MARKUP */}
      <FAQSection
        faqs={industryData.faqs}
        title={`${industryData.name} Security Camera FAQs`}
        subtitle={`Answers to common questions regarding security camera system installation for ${industryData.name.toLowerCase()} in Fort Worth and North Texas.`}
        categoryName={industryData.name}
      />

      {/* RELATED INDUSTRIES INTERLINKING SECTION */}
      <RelatedIndustriesBlock
        title={`Related ${industryData.category} Security Solutions`}
        subtitle={`Explore specialized commercial security camera installation for related sectors in ${industryData.category.toLowerCase()} across Fort Worth and DFW.`}
        onNavigate={onNavigate}
        links={relatedIndustries.map((relInd) => ({
          slug: relInd.slug,
          name: relInd.name,
          description: relInd.metaDescription,
        }))}
      />

      {/* CITY & REGIONAL COVERAGE SECTION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* City Coverage Interlinking Cards */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Serving {industryData.name} Across DFW
              </h2>
              <p className="text-slate-600">
                Our licensed low-voltage technicians install commercial 4K PoE camera systems for {industryData.name.toLowerCase()} throughout Fort Worth, Tarrant County, and the wider Dallas–Fort Worth metroplex.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreaCities.map((city) => (
                <NavLink
                  key={city.slug}
                  to={`/${city.slug}`}
                  onNavigate={onNavigate}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md mb-3 inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {city.county}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors mb-2">
                      {industryData.name} Security Cameras in {city.cityName}, TX
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      4K PoE camera installation, solid copper Cat6 cabling, and local NVR recording for {industryData.name.toLowerCase()} across {city.cityName} and the surrounding {city.county} area.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span>View {city.cityName} Installation</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Core Service Quick Links */}
          <div className="bg-slate-100 rounded-2xl p-6 sm:p-8 text-center space-y-4">
            <h3 className="font-extrabold text-slate-900 text-xl">
              Core Security Camera & Cable Installation Services
            </h3>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <NavLink
                to="/commercial-security-camera-installation-fort-worth"
                onNavigate={onNavigate}
                className="inline-block px-4 py-2 bg-white hover:bg-blue-50 border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg transition-colors"
              >
                Commercial Security Cameras
              </NavLink>
              <NavLink
                to="/residential-security-camera-installation-fort-worth"
                onNavigate={onNavigate}
                className="inline-block px-4 py-2 bg-white hover:bg-blue-50 border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg transition-colors"
              >
                Residential Home Security
              </NavLink>
              <NavLink
                to="/network-cable-installation-fort-worth"
                onNavigate={onNavigate}
                className="inline-block px-4 py-2 bg-white hover:bg-blue-50 border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg transition-colors"
              >
                Network Cat6 Cabling
              </NavLink>
              <NavLink
                to="/security-cameras-by-industry"
                onNavigate={onNavigate}
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors"
              >
                Browse All 100 Industries Hub
              </NavLink>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Protect Your {industryData.name} Today
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get a free, zero-obligation on-site consultation and line-item proposal from licensed Fort Worth security camera specialists.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal(`${industryData.name} Security Camera System`)}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl shadow-lg shadow-blue-600/30 transition-all text-base"
            >
              Request Free On-Site Quote
            </button>
            <a
              href="tel:8172312962"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl shadow-lg shadow-emerald-600/30 transition-all text-base flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (817) 231-2962</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            Local Fort Worth Office • Licensed & Insured Technicians • 0 Monthly Subscription Fees
          </p>
        </div>
      </section>
    </div>
  );
};
