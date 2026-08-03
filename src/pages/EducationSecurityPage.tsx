import React, { useState } from 'react';
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  Award,
  GraduationCap,
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
  School
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { BRAND_ASSETS, getPageImages } from '../data/imagesData';
import { getIndustryBySlug } from '../data/industriesData';
import { generateFAQSchema } from '../lib/seo';
import { RelatedIndustriesBlock } from '../components/RelatedIndustriesBlock';

interface EducationSecurityPageProps {
  industrySlug?: string;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const EducationSecurityPage: React.FC<EducationSecurityPageProps> = ({
  industrySlug = 'security-cameras-daycares',
  onNavigate,
  onOpenQuoteModal,
}) => {
  const matchedData = getIndustryBySlug(industrySlug);
  const images = getPageImages(industrySlug);

  const title = matchedData?.heroTitle || matchedData?.metaTitle || 'School, Daycare & Campus Security Camera Installation';
  const subtitle = matchedData?.heroSubtitle || matchedData?.heroSubheadline || 'Perimeter protection, vestibule access control, playground surveillance, and 4K NDAA-compliant security cameras for private schools, daycares, K-12 campuses, and colleges across DFW.';
  const h1Text = matchedData?.h1 || matchedData?.name || 'School & Daycare Security Camera Installation Fort Worth';

  const canonicalUrl = `https://fortworthsecuritycameras.com/${industrySlug}`;

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      question: 'Are your school security camera systems NDAA-compliant for government and educational funding?',
      answer: 'Yes. All hardware installed for schools, daycares, and public campuses adheres strictly to National Defense Authorization Act (NDAA) guidelines. We deploy NDAA-compliant chipset architectures suitable for state and federal educational security grants.'
    },
    {
      question: 'How do camera systems secure school vestibules and visitor entrances?',
      answer: 'We install high-definition entrance cameras with built-in two-way audio and facial recognition compatibility at single-point entry vestibules. Office administrators can visually verify parents and visitors before releasing magnetic door locks.'
    },
    {
      question: 'Can daycare administrators grant restricted video access to parents?',
      answer: 'Yes. For daycares and private learning centers, we configure secure parent portal video stream controls with strict time windows and classroom user permissions.'
    },
    {
      question: 'How are large multi-building school campuses wired for cameras?',
      answer: 'We install single-mode fiber optic underground links between campus buildings and outdoor PoE switches, allowing hundreds of 4K cameras to feed seamlessly into a central NVR server.'
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    serviceType: 'School & Daycare Security Camera Installation',
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
      { '@type': 'City', name: 'Mansfield' },
      { '@type': 'City', name: 'Burleson' },
      { '@type': 'City', name: 'Southlake' }
    ],
    description: subtitle,
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free On-Site School Security Campus Assessment',
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
        titleOverride={matchedData?.name || 'Education Security'}
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
                <GraduationCap className="w-4 h-4 text-blue-400" />
                School, Daycare & Campus Security
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
                  <span>NDAA Compliant Hardware Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Single-Point Entry Vestibule Verification</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Playground & Outdoor Athletic Field Coverage</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Zero Monthly Subscription Charges</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenQuoteModal('Education Security Camera System')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 text-base"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Request Campus Security Walkthrough
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
                    alt="School Security Camera System"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-800 text-xs text-slate-200 flex items-center justify-between">
                    <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                      <School className="w-4 h-4 text-blue-400" /> Campus Perimeter Protection
                    </span>
                    <span className="text-slate-400">4K NDAA</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" /> Licensed Texas Security Contractor
                  </h3>
                  <p className="text-sm text-slate-300">
                    Partnered with Jericho Security and Sound (Class B License #B13764). We safeguard daycares, private academies, and public school campuses with high-reliability 4K PoE technology and fiber cabling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION VISUAL SECTIONS & MONITORED ZONES */}
      <section className="py-16 bg-slate-900 text-white border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
              <GraduationCap className="w-4 h-4" />
              <span>Campus Protection Zones</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Essential Security Camera Placements in Schools & Daycares
            </h2>
            <p className="text-slate-400 text-base">
              Comprehensive 4K surveillance layouts designed to protect students, educators, and campus perimeters across North Texas educational facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery1}
                  alt="School hallway and classroom corridor security camera view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  School Hallway
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Corridors & Locker Areas</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Wide-angle 4K dome cameras eliminate hallway blind spots, monitoring student transit between class periods.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery2}
                  alt="School main entrance visitor check-in vestibule camera view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Main Entry
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Secure Entrance Vestibule</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Facial recognition cameras integrated with visitor management software log every person entering campus doors.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery3}
                  alt="School playground and athletic field perimeter security camera view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Playground & Turf
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Playgrounds & Stadiums</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rugged, weatherproof PTZ zoom cameras safeguard outdoor recess grounds, sports fields, and campus fencing.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery4}
                  alt="School bus drop-off zone and parent pickup lane security camera view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Pickup & Bus Lane
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Pickup Lanes & Parking</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  License Plate Recognition (LPR) cameras log parent vehicle plates during morning drop-off and afternoon dismissal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED EDUCATION INDUSTRIES */}
      <RelatedIndustriesBlock
        title="Related Educational & Campus Security Solutions"
        subtitle="Explore specialized 4K camera system installation for schools, academies, learning centers, and instructional facilities across Fort Worth & DFW."
        onNavigate={onNavigate}
        links={[
          { slug: 'security-cameras-charter-schools', name: 'Charter Schools & Private Academies', description: 'Single-point entry vestibule cameras, playground 360° coverage, and hallway CCTV.' },
          { slug: 'security-cameras-tutoring-centers', name: 'Tutoring & Learning Centers', description: 'Reception area monitoring, entrance access controls, and classroom oversight.' },
          { slug: 'security-cameras-dance-studios', name: 'Dance Studios & Martial Arts Schools', description: 'Parent lobby viewing screens, studio floor monitoring, and rear exit security.' },
          { slug: 'security-cameras-trade-schools', name: 'Trade Schools & Vocational Colleges', description: 'Workshop equipment safety monitoring, tool room cameras, and campus grounds CCTV.' },
          { slug: 'security-cameras-driving-schools', name: 'Driving Schools & Testing Centers', description: 'Testing room compliance surveillance, parking lot vehicle tracking, and reception CCTV.' }
        ]}
      />

      {/* FAQS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              School & Campus Security FAQs
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
            Safeguard Students & Campus Personnel Today
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Schedule a free campus site walkthrough with our licensed educational security specialists.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenQuoteModal('Education Security Camera System')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-xl transition-all text-base"
            >
              Request School Security Proposal
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
