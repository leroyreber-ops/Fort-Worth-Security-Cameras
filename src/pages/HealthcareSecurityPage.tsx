import React, { useState } from 'react';
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  Award,
  Stethoscope,
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
  HeartPulse
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { BRAND_ASSETS, getPageImages } from '../data/imagesData';
import { getIndustryBySlug } from '../data/industriesData';
import { generateFAQSchema } from '../lib/seo';
import { RelatedIndustriesBlock } from '../components/RelatedIndustriesBlock';

interface HealthcareSecurityPageProps {
  industrySlug?: string;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const HealthcareSecurityPage: React.FC<HealthcareSecurityPageProps> = ({
  industrySlug = 'security-cameras-medical-offices',
  onNavigate,
  onOpenQuoteModal,
}) => {
  const matchedData = getIndustryBySlug(industrySlug);
  const images = getPageImages(industrySlug);

  const title = matchedData?.heroTitle || matchedData?.metaTitle || 'Healthcare & Medical Facility Security Camera Installation';
  const subtitle = matchedData?.heroSubtitle || matchedData?.heroSubheadline || 'HIPAA-compliant privacy masking, pharmacy storage protection, emergency room entrance surveillance, and 4K cameras for clinics, hospitals, and dental practices across DFW.';
  const h1Text = matchedData?.h1 || matchedData?.name || 'Healthcare & Medical Security Camera Installation Fort Worth';

  const canonicalUrl = `https://fortworthsecuritycameras.com/${industrySlug}`;

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      question: 'How do you ensure security cameras comply with HIPAA privacy regulations?',
      answer: 'Our commercial cameras support hardware-based dynamic privacy masking. This allows us to blackout or blur sensitive patient exam areas, computer screens showing Protected Health Information (PHI), and patient check-in desks while maintaining full surveillance of hallways, entrances, waiting rooms, and pharmacy doors.'
    },
    {
      question: 'What security features are installed for medical clinic pharmacy & drug storage rooms?',
      answer: 'Narcotic and prescription storage rooms require strict access monitoring. We install 4K high-resolution cameras at pill cabinet thresholds, synchronized with door access logs, along with thermal sensor alarms to prevent unauthorized pill theft or inventory discrepancies.'
    },
    {
      question: 'Can medical staff view camera feeds on their tablets or workstations?',
      answer: 'Yes. Authorized administrators, nursing supervisors, and security personnel can view encrypted 4K feeds via client software on Windows/Mac workstations or encrypted iOS/Android mobile apps with zero monthly subscription fees.'
    },
    {
      question: 'How are infant protection and memory care facilities handled?',
      answer: 'For pediatric wards and senior memory care facilities, our active deterrence cameras trigger immediate local alerts and mobile push notifications if a patient wanders near exit doors or restricted stairwells.'
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    serviceType: 'Healthcare & Medical Security Camera Systems',
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
      { '@type': 'City', name: 'Keller' },
      { '@type': 'City', name: 'Southlake' }
    ],
    description: subtitle,
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free On-Site Healthcare Security Audit',
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
        titleOverride={matchedData?.name || 'Healthcare Security'}
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
                <Stethoscope className="w-4 h-4 text-blue-400" />
                Medical & Healthcare Facility Surveillance
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
                  <span>HIPAA Digital Privacy Masking Technology</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Pharmacy & Narcotics Storage Surveillance</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Emergency Entry & Waiting Area Coverage</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>$0 Monthly Cloud Subscriptions</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenQuoteModal('Healthcare Security Camera System')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 text-base"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Request Medical Security Walkthrough
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
                    alt="Healthcare Security Camera System"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-800 text-xs text-slate-200 flex items-center justify-between">
                    <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                      <HeartPulse className="w-4 h-4 text-blue-400" /> Clinic & Hospital Protection
                    </span>
                    <span className="text-slate-400">4K HIPAA Ready</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" /> Licensed Texas Security Contractor
                  </h3>
                  <p className="text-sm text-slate-300">
                    Partnered with Jericho Security and Sound (Class B License #B13764). We install enterprise low-voltage Cat6 cabling, NDAA-compliant security hardware, and HIPAA-compliant surveillance across DFW medical centers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTHCARE VISUAL SECTIONS & MONITORED ZONES */}
      <section className="py-16 bg-slate-900 text-white border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
              <HeartPulse className="w-4 h-4" />
              <span>Healthcare Facility Protection</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Essential Security Camera Placements in Medical Facilities
            </h2>
            <p className="text-slate-400 text-base">
              HIPAA-compliant, high-definition 4K camera deployments designed to safeguard patient privacy, narcotics storage, waiting areas, and emergency entrances.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery1}
                  alt="Medical clinic waiting room and reception desk security camera surveillance view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Waiting Area
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Patient Waiting Rooms</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Monitors patient flow and check-in desks with optional HIPAA digital privacy blackout zones over private screens.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery2}
                  alt="Hospital pharmacy and narcotics storage security camera coverage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Pharmacy Vault
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Pharmacy & Medication Vault</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  4K high-resolution recording over drug dispensation counters and controlled substance storage lockers.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery3}
                  alt="Urgent care emergency entrance and ambulance bay camera view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Emergency Bay
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Emergency Entry & ER Bays</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  24/7 continuous recording at high-risk ambulance drop-off zones and urgent care entry doors.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery4}
                  alt="Medical facility parking lot and perimeter security camera view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Clinic Parking
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Parking Lot & Grounds</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Long-range infrared illuminators protect staff and patient vehicles during late-night shift changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED HEALTHCARE INDUSTRIES */}
      <RelatedIndustriesBlock
        title="Related Healthcare & Medical Facility Security Solutions"
        subtitle="Explore specialized HIPAA-compliant 4K camera system installation for medical centers, specialized practices, and care facilities across Fort Worth & DFW."
        onNavigate={onNavigate}
        links={[
          { slug: 'security-cameras-hospitals', name: 'Hospitals & Medical Centers', description: 'ER entrance surveillance, multi-building IP network CCTV, and restricted ward access.' },
          { slug: 'security-cameras-dental-offices', name: 'Dental Clinics & Practices', description: 'Reception area monitoring, instrument vault cameras, and HIPAA privacy masking.' },
          { slug: 'security-cameras-nursing-homes', name: 'Nursing Homes & Assisted Living', description: 'Wandering patient exit alerts, common room surveillance, and perimeter safety.' },
          { slug: 'security-cameras-urgent-care', name: 'Urgent Care Clinics', description: '24/7 waiting room monitoring, prescription storage cameras, and parking lot LPR.' },
          { slug: 'security-cameras-pharmacies', name: 'Pharmacies & Compounding Labs', description: 'High-resolution pill counter cameras, DEA vault compliance, and entry access logs.' },
          { slug: 'security-cameras-veterinary-clinics', name: 'Veterinary Clinics & Animal Hospitals', description: 'Overnight kennel monitoring, reception cash wrap, and drug cabinet surveillance.' }
        ]}
      />

      {/* FAQS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Healthcare Security Camera FAQs
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
            Protect Patients, Staff & Medical Infrastructure
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Schedule a free HIPAA-compliant security walkthrough with our licensed engineering team.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenQuoteModal('Healthcare Security Camera System')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-xl transition-all text-base"
            >
              Request Healthcare Proposal
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
