import React, { useState } from 'react';
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  Award,
  Utensils,
  MapPin,
  Phone,
  ChevronRight,
  Camera,
  Server,
  Zap,
  Lock,
  Users,
  Shield,
  FileText,
  Wrench,
  HelpCircle,
  Smartphone,
  HardDrive,
  Eye,
  Cpu,
  Clock,
  Layers,
  Wine,
  Hotel
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { BRAND_ASSETS, getPageImages } from '../data/imagesData';
import { getIndustryBySlug } from '../data/industriesData';
import { generateFAQSchema } from '../lib/seo';
import { RelatedIndustriesBlock } from '../components/RelatedIndustriesBlock';

interface HospitalitySecurityPageProps {
  industrySlug?: string;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const HospitalitySecurityPage: React.FC<HospitalitySecurityPageProps> = ({
  industrySlug = 'security-cameras-restaurants',
  onNavigate,
  onOpenQuoteModal,
}) => {
  const matchedData = getIndustryBySlug(industrySlug);
  const images = getPageImages(industrySlug);

  const title = matchedData?.heroTitle || matchedData?.metaTitle || 'Hospitality & Restaurant Security Camera Installation';
  const subtitle = matchedData?.heroSubtitle || matchedData?.heroSubheadline || 'Surveillance solutions for restaurants, bars, hotels, cafes, and event venues to protect staff, manage slip-and-fall liability, and prevent liquor theft across Fort Worth & DFW.';
  const h1Text = matchedData?.h1 || matchedData?.name || 'Hospitality & Restaurant Security Camera Systems Fort Worth';

  const canonicalUrl = `https://fortworthsecuritycameras.com/${industrySlug}`;

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      question: 'How do security cameras protect restaurants and bars against fraudulent slip-and-fall claims?',
      answer: 'Restaurant and bar environments are prime targets for staged slip-and-fall lawsuits. Our high-frame-rate 4K cameras cover dining rooms, kitchens, hallways, and restrooms entrances with crystal-clear video evidence. Recorded NVR video allows insurance adjusters to quickly verify if liquids were present or if claims are fraudulent.'
    },
    {
      question: 'Can security cameras withstand greasy, hot commercial kitchen environments?',
      answer: 'Yes. We install IP67 weather-rated and corrosion-resistant dome cameras designed for food prep areas and kitchen walk-in coolers. Sealed camera housing protects optics from grease splatter, humidity, and heat.'
    },
    {
      question: 'How do cameras help monitor liquor inventory and bar registers?',
      answer: 'Our high-resolution varifocal cameras mounted directly over bar speed rails and POS stations capture pour counts, cash register transactions, and liquor bottle storage. This deters free drinks, unauthorized giveaways, and unrecorded cash sales.'
    },
    {
      question: 'Are there monthly fees for hotel or restaurant video monitoring?',
      answer: 'No. Our commercial surveillance systems feature zero monthly cloud fees. Footage is recorded 24/7 onto local enterprise NVR hard drives. Owners and general managers get free remote mobile viewing on iOS and Android with no recurring fees.'
    },
    {
      question: 'How do you handle multi-building hotel or resort camera cabling?',
      answer: 'We deploy high-speed fiber optic backbones and outdoor wireless point-to-point bridges between hotel wings, pool areas, and parking structures to deliver seamless 4K video feeds back to the central security monitoring room.'
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    serviceType: 'Hospitality & Restaurant Security Camera Installation',
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
      { '@type': 'City', name: 'Dallas' },
      { '@type': 'City', name: 'Grapevine' },
      { '@type': 'City', name: 'Southlake' }
    ],
    description: subtitle,
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free On-Site Hospitality Security Consultation',
    },
  };

  const faqSchema = generateFAQSchema(faqList, `${h1Text} FAQs`);

  return (
    <>
      <SEOHead
        title={`${h1Text} | Fort Worth Security Cameras`}
        description={subtitle}
        canonicalUrl={canonicalUrl}
        schema={schema}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Breadcrumb
        path={`/${industrySlug}`}
        titleOverride={matchedData?.name || 'Hospitality Security'}
        onNavigate={onNavigate}
      />

      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-12 md:py-20">
        <div
          className="absolute inset-0 z-0 opacity-85 sm:opacity-90 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${images.heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/30 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold uppercase tracking-wider">
                <Utensils className="w-4 h-4 text-blue-400" />
                Restaurant, Bar & Hotel Surveillance
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {h1Text}
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
                {subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Bar Rail & Cash Register POS Monitoring</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Grease-Resistant Commercial Kitchen Domes</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Slip-and-Fall Liability Defence Recording</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Zero Monthly Subscription Charges</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenQuoteModal('Hospitality Security Camera System')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 text-base"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Request Free Hospitality Security Audit
                </button>

                <a
                  href="tel:8172312962"
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 text-base"
                >
                  <Phone className="w-5 h-5 text-emerald-400" />
                  Call (817) 231-2962
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-5">
                <div className="relative h-56 rounded-xl overflow-hidden border border-slate-800">
                  <SafeImage
                    src={images.rightCard}
                    alt="Hospitality Security Camera Systems"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-800 text-xs text-slate-200 flex items-center justify-between">
                    <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                      <Wine className="w-4 h-4 text-amber-400" /> Bar & Dining Surveillance
                    </span>
                    <span className="text-slate-400">4K Ultra HD</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" /> Licensed DFW Hospitality Installers
                  </h3>
                  <p className="text-sm text-slate-300">
                    Partnered with Jericho Security and Sound (Class B License #B13764). We protect restaurants, night clubs, hotels, and venues with concealed Cat6 wiring, low-light cameras, and secure NVR servers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE BENEFITS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Tailored Security for Restaurants, Bars & Hotels
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Maintain guest satisfaction, protect liquor assets, and safeguard your staff with high-definition surveillance built for demanding hospitality operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Wine className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bar & Liquor Inventory</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                4K varifocal cameras zoomed directly over speed rails, tap handles, and back-bar liquor shelves deter free drinks, over-pouring, and unrecorded cash transactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Kitchen & Food Safety</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sealed, moisture-resistant camera housings in food preparation areas monitor health code compliance, staff workflow, and walk-in cooler access.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Hotel className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hotel Lobbies & Parking</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Provide round-the-clock protection for guest elevators, hallways, parking garages, and valet stands with License Plate Recognition (LPR) and 4K perimeter cameras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOSPITALITY VISUAL SECTIONS & MONITORED ZONES */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
              <Wine className="w-4 h-4" />
              <span>Hospitality Zone Protection</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Key Security Camera Placements in Hotels & Venues
            </h2>
            <p className="text-slate-400 text-base">
              High-resolution 4K camera deployments designed specifically to safeguard guest experience, inventory, and staff across North Texas hospitality venues.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-amber-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery1}
                  alt="Hotel lobby and front desk security camera surveillance view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Hotel Lobby
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Lobby & Reception Desk</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Clear facial recognition at front desk check-in counters and entrance vestibules ensures guest accountability and safety.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-amber-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery2}
                  alt="Restaurant dining room and bar area overhead camera monitoring"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Bar & Dining Area
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Bar & Register Area</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Wide-angle 4K dome cameras monitor cash registers, bar service counters, and dining seating areas.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-amber-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery3}
                  alt="Hotel guest floor hallway and elevator bank security camera coverage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Guest Corridors
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Hallways & Elevators</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Corridor-mode 9:16 vertical aspect ratio lenses eliminate dead space down long guest room hallways and elevator foyers.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-amber-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery4}
                  alt="Hotel parking lot and perimeter security camera monitoring"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Parking & Valet
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Parking Lot & Porte-Cochère</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Weatherproof IP67 bullet cameras with long-range infrared vision protect guest vehicles and exterior grounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED HOSPITALITY INDUSTRIES */}
      <RelatedIndustriesBlock
        title="Related Hospitality & Dining Security Solutions"
        subtitle="Explore specialized 4K surveillance systems designed for dining, nightlife, lodging, and entertainment venues across Fort Worth & DFW."
        onNavigate={onNavigate}
        links={[
          { slug: 'security-cameras-bars-nightclubs', name: 'Bars, Lounges & Nightclubs', description: 'Low-light IR vision, cash register monitoring, and entrance ID verification cameras.' },
          { slug: 'security-cameras-hotels', name: 'Hotels & Resorts', description: 'Hallway surveillance, lobby monitoring, elevator cameras, and perimeter coverage.' },
          { slug: 'security-cameras-food-trucks', name: 'Food Truck Parks & Outdoor Dining', description: 'Compact 4K PoE systems, wireless solar cameras, and mobile NVR setups.' },
          { slug: 'security-cameras-event-venues', name: 'Event Venues & Banquet Halls', description: 'Crowd monitoring, parking lot coverage, and guest safety 24/7 video surveillance.' },
          { slug: 'security-cameras-coffee-shops', name: 'Coffee Shops & Bakeries', description: 'POS text integration, drive-thru order line cameras, and register security.' }
        ]}
      />

      {/* FAQS */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Hospitality Security Camera FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-slate-100 transition-colors"
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      openFaq === index ? 'rotate-90 text-blue-600' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm md:text-base border-t border-slate-200 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Protect Your Restaurant, Bar, or Hotel Today
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Schedule a free on-site walkthrough with our licensed low-voltage security engineers.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenQuoteModal('Hospitality Security Camera System')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-xl transition-all text-base"
            >
              Get Free Hospitality Quote
            </button>
            <a
              href="tel:8172312962"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 text-base"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              Call (817) 231-2962
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
