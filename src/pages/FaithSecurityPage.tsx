import React, { useState } from 'react';
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  Award,
  Heart,
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
  Church
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { BRAND_ASSETS, getPageImages } from '../data/imagesData';
import { getIndustryBySlug } from '../data/industriesData';
import { generateFAQSchema } from '../lib/seo';
import { RelatedIndustriesBlock } from '../components/RelatedIndustriesBlock';

interface FaithSecurityPageProps {
  industrySlug?: string;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const FaithSecurityPage: React.FC<FaithSecurityPageProps> = ({
  industrySlug = 'security-cameras-churches',
  onNavigate,
  onOpenQuoteModal,
}) => {
  const matchedData = getIndustryBySlug(industrySlug);
  const images = getPageImages(industrySlug);

  const title = matchedData?.heroTitle || matchedData?.metaTitle || 'Church & Place of Worship Security Camera Installation';
  const subtitle = matchedData?.heroSubtitle || matchedData?.heroSubheadline || 'Discreet architectural matching, nursery security, sanctuary monitoring, parking lot coverage, and 4K cameras for churches, temples, mosques, and community centers across DFW.';
  const h1Text = matchedData?.h1 || matchedData?.name || 'Church & Place of Worship Security Camera Installation Fort Worth';

  const canonicalUrl = `https://fortworthsecuritycameras.com/${industrySlug}`;

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      question: 'How do you keep security cameras visually discreet in historical sanctuary spaces?',
      answer: 'We respect sacred architecture. We use custom paint-matched camera housings, ultra-compact micro-dome form factors, and concealed cabling inside architectural beams and moldings so technology remains unobtrusive.'
    },
    {
      question: 'How are church nurseries and youth ministry wings secured?',
      answer: 'Nursery check-in areas and children’s classrooms require clear visibility to safeguard children and reassure parents. High-definition 4K cameras track check-in corridors and exit doors without compromising privacy.'
    },
    {
      question: 'Can church safety team members monitor parking lots during services on mobile devices?',
      answer: 'Yes. Volunteer safety team members receive encrypted live feeds on their smartphones or tablets. PTZ (Pan-Tilt-Zoom) cameras allow safety officers to monitor parking lots and exterior grounds in real time during Sunday services or evening events.'
    },
    {
      question: 'Are there monthly subscription fees for house-of-worship security cameras?',
      answer: 'No. We understand church budget stewardship. All equipment is purchased outright with $0 monthly cloud subscriptions, 100% local NVR storage, and free multi-user smartphone viewing.'
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    serviceType: 'Church & House of Worship Security Camera Installation',
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
      { '@type': 'City', name: 'Burleson' },
      { '@type': 'City', name: 'Weatherford' },
      { '@type': 'City', name: 'Dallas' }
    ],
    description: subtitle,
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free On-Site Church Security Walkthrough & Proposal',
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
        titleOverride={matchedData?.name || 'Faith & Community Security'}
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
                <Heart className="w-4 h-4 text-blue-400" />
                Church & Place of Worship Protection
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
                  <span>Discreet Architectural Sanctuary Mounting</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Nursery & Children's Ministry Area Protection</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Church Safety Team Mobile App Access</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Zero Monthly Subscription Charges</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenQuoteModal('Faith Security Camera System')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 text-base"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Request Church Security Audit
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
                    alt="Church Security Camera Installation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-800 text-xs text-slate-200 flex items-center justify-between">
                    <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                      <Church className="w-4 h-4 text-blue-400" /> Sanctuary & Campus Security
                    </span>
                    <span className="text-slate-400">4K High Resolution</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" /> Licensed Texas Security Contractor
                  </h3>
                  <p className="text-sm text-slate-300">
                    Partnered with Jericho Security and Sound (Class B License #B13764). We support DFW congregations with reliable, budget-friendly, high-definition security camera systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHURCH VISUAL SECTIONS & MONITORED ZONES */}
      <section className="py-16 bg-slate-900 text-white border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
              <Church className="w-4 h-4" />
              <span>Worship Facility Protection</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Essential Security Camera Placements in Churches & Places of Worship
            </h2>
            <p className="text-slate-400 text-base">
              Discreet, reverent 4K camera solutions engineered to safeguard worshipers, children's ministries, donation rooms, and grounds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery1}
                  alt="Church sanctuary entryway and main foyer security camera view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Sanctuary Entry
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Sanctuary & Main Foyer</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Discreet micro-dome cameras blend into sanctuary architectural finishes while monitoring main doors.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery2}
                  alt="Church children's ministry classroom and nursery security camera"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Children's Ministry
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Children's Wing & Nursery</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Strict access logging and wide-angle cameras protect Sunday school classrooms and youth hallways.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery3}
                  alt="Church exterior parking lot and grounds security camera monitoring"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Church Parking Lot
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Parking Lots & Exterior</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Long-range infrared night vision bullet cameras deter vehicle break-ins during evening worship services.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery4}
                  alt="Church administrative office and tithe counting room security camera"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Counting Office
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Donation Counting Room</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-resolution 4K varifocal recording protects staff and monetary offerings during offering counts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED FAITH INDUSTRIES */}
      <RelatedIndustriesBlock
        title="Related Faith & Community Organization Security Solutions"
        subtitle="Explore specialized 4K camera system installation for places of worship, religious schools, and community ministry centers across Fort Worth & DFW."
        onNavigate={onNavigate}
        links={[
          { slug: 'security-cameras-synagogues', name: 'Synagogues & Jewish Community Centers', description: 'Perimeter access monitoring, active deterrence strobe cameras, and lobby security.' },
          { slug: 'security-cameras-mosques', name: 'Mosques & Islamic Centers', description: 'Prayer hall entrance surveillance, courtyard security, and parking lot LPR cameras.' },
          { slug: 'security-cameras-faith-schools', name: 'Parochial & Religious Schools', description: 'Student safety cameras, single-point entry control, and playground surveillance.' },
          { slug: 'security-cameras-campgrounds', name: 'Church Camps & Retreat Centers', description: 'Long-range wireless solar cameras, cabin perimeter security, and activity field CCTV.' },
          { slug: 'security-cameras-charity-centers', name: 'Religious Charity & Outreach Centers', description: 'Donation dock cameras, food pantry monitoring, and staff protection surveillance.' }
        ]}
      />

      {/* FAQS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Church Security Camera FAQs
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
            Protect Your Congregation & Ministry Facilities
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Schedule a free site walkthrough with our licensed church security team.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenQuoteModal('Faith Security Camera System')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-xl transition-all text-base"
            >
              Request Church Proposal
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
