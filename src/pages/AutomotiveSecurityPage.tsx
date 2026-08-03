import React, { useState } from 'react';
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  Award,
  Car,
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
  Wrench as RepairIcon
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { BRAND_ASSETS, getPageImages } from '../data/imagesData';
import { getIndustryBySlug } from '../data/industriesData';
import { generateFAQSchema } from '../lib/seo';
import { RelatedIndustriesBlock } from '../components/RelatedIndustriesBlock';

interface AutomotiveSecurityPageProps {
  industrySlug?: string;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const AutomotiveSecurityPage: React.FC<AutomotiveSecurityPageProps> = ({
  industrySlug = 'security-cameras-car-dealerships',
  onNavigate,
  onOpenQuoteModal,
}) => {
  const matchedData = getIndustryBySlug(industrySlug);
  const images = getPageImages(industrySlug);

  const title = matchedData?.heroTitle || matchedData?.metaTitle || 'Car Dealership & Auto Repair Security Camera Systems';
  const subtitle = matchedData?.heroSubtitle || matchedData?.heroSubheadline || 'License Plate Recognition (LPR), active deterrence strobes, perimeter fence line protection, and 4K cameras for auto dealerships, mechanic bays, car washes, and parking lots across DFW.';
  const h1Text = matchedData?.h1 || matchedData?.name || 'Car Dealership & Auto Repair Security Camera Installation Fort Worth';

  const canonicalUrl = `https://fortworthsecuritycameras.com/${industrySlug}`;

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      question: 'How do active deterrence cameras stop catalytic converter theft and vehicle vandalism at car dealerships?',
      answer: 'Our active deterrence cameras feature red and blue flashing LED warning lights, high-decibel audible voice sirens, and AI person/vehicle classification. When an intruder steps over a virtual fence boundary after hours, the camera instantly triggers lights and sirens while sending a push alert to your smartphone or security guard.'
    },
    {
      question: 'How does License Plate Recognition (LPR) assist auto dealership service bays and inventory lots?',
      answer: 'LPR cameras capture incoming vehicle license plates at service drive-thrus and lot entrances. Service managers can log customer arrivals automatically, track loaner vehicles, and monitor vehicle transport drop-offs 24/7.'
    },
    {
      question: 'Can cameras cover large open auto inventory lots without dark spots?',
      answer: 'Yes. We install high-power PTZ (Pan-Tilt-Zoom) cameras mounted on light poles or building corners with 30x optical zoom and 500+ feet of IR night vision. Integrated wireless bridge links allow cameras on remote light poles to stream back to the central NVR.'
    },
    {
      question: 'Are there monthly monitoring fees for dealership security cameras?',
      answer: 'No. Our commercial-grade NVR systems record 24/7 locally onto surveillance-grade hard drives with zero monthly cloud fees. You get free multi-user remote viewing for managers, owners, and security personnel.'
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    serviceType: 'Car Dealership & Auto Repair Security Camera Systems',
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
      { '@type': 'City', name: 'Frisco' }
    ],
    description: subtitle,
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free On-Site Automotive Security Audit',
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
        titleOverride={matchedData?.name || 'Automotive Security'}
        onNavigate={onNavigate}
      />

      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-12 md:py-20">
        <div
          className="absolute inset-0 z-0 opacity-85 sm:opacity-90 bg-cover bg-center transition-all duration-500 animate-kenburns"
          style={{ backgroundImage: `url(${images.heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/30 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold uppercase tracking-wider">
                <Car className="w-4 h-4 text-blue-400" />
                Car Dealership & Auto Repair Protection
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-shadow-hero">
                {h1Text}
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
                {subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Active Deterrence Red/Blue Strobe Sirens</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>License Plate Recognition (LPR) Service Drive</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>30x PTZ Cameras for Open Vehicle Inventory</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Zero Monthly Subscription Charges</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenQuoteModal('Automotive Security Camera System')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 text-base"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Request Auto Security Site Audit
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
                    alt="Car Dealership Security Cameras"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-800 text-xs text-slate-200 flex items-center justify-between">
                    <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                      <Car className="w-4 h-4 text-blue-400" /> Inventory Lot Defense
                    </span>
                    <span className="text-slate-400">4K LPR Ready</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" /> Licensed Texas Security Contractor
                  </h3>
                  <p className="text-sm text-slate-300">
                    Partnered with Jericho Security and Sound (Class B License #B13764). We protect vehicle inventories, service bays, and collision centers across DFW.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMOTIVE VISUAL SECTIONS & MONITORED ZONES */}
      <section className="py-16 bg-slate-900 text-white border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
              <Car className="w-4 h-4" />
              <span>Dealership & Auto Repair Protection</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Essential Security Camera Placements for Auto Dealerships & Repair Shops
            </h2>
            <p className="text-slate-400 text-base">
              High-definition 4K camera setups designed to protect valuable car inventory lots, service bays, key lockers, and showroom floors across DFW.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery1}
                  alt="Car dealership vehicle lot and License Plate Recognition LPR security camera view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Vehicle Inventory Lot
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Inventory Lots & LPR</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Active perimeter deterrence and LPR tracking safeguard high-value vehicle inventory from night vandalism and theft.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery2}
                  alt="Auto dealership showroom floor and sales counter security camera view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Showroom Floor
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Showrooms & Sales Offices</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Elegant 4K dome cameras monitor sales transaction desks, luxury display models, and customer waiting lounges.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery3}
                  alt="Auto service bay and mechanic shop lift security camera coverage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Service Bays
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Service Bays & Lifts</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Wide-angle cameras record vehicle condition upon entry and defend against false customer damage claims.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery4}
                  alt="Dealership key lockbox area and cashier counter security camera"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Key Lockbox Vault
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Key Storage & Cashier</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-detail 4K varifocal coverage logs key cabinet access and service department payment transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED AUTOMOTIVE INDUSTRIES */}
      <RelatedIndustriesBlock
        title="Related Automotive & Vehicle Service Security Solutions"
        subtitle="Explore specialized 4K camera systems designed for mechanic shops, body shops, car washes, and impound yards across Fort Worth & DFW."
        onNavigate={onNavigate}
        links={[
          { slug: 'security-cameras-auto-repair', name: 'Auto Repair & Mechanic Shops', description: 'Service bay tool monitoring, customer vehicle drop-off cameras, and register CCTV.' },
          { slug: 'security-cameras-auto-body-shops', name: 'Auto Body & Paint Shops', description: 'Paint booth explosion-rated cameras, outdoor lot vehicle security, and office surveillance.' },
          { slug: 'security-cameras-car-washes', name: 'Car Washes & Auto Detailing', description: 'Tunnel entrance LPR, bay equipment monitoring, and damage dispute video logs.' },
          { slug: 'security-cameras-tire-shops', name: 'Tire Shops & Alignment Centers', description: 'Tire rack inventory protection, customer waiting room monitoring, and bay CCTV.' },
          { slug: 'security-cameras-towing-yards', name: 'Towing Impound Yards', description: 'High-security fence line active deterrence, gate entry LPR, and 24/7 impound lot coverage.' }
        ]}
      />

      {/* FAQS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Automotive & Dealership Security FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      openFaq === index ? 'rotate-90 text-blue-600' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm md:text-base border-t border-slate-100 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Stop Catalytic Converter Theft & Protect Vehicle Lots
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Schedule a free on-site walkthrough with our licensed automotive security team.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenQuoteModal('Automotive Security Camera System')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-xl transition-all text-base"
            >
              Request Auto Proposal
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
