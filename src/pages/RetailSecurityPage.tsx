import React, { useState } from 'react';
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  Award,
  ShoppingBag,
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
  DollarSign,
  AlertTriangle,
  ArrowRight,
  Clock,
  Layers,
  Receipt,
  Scan
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { BRAND_ASSETS, getPageImages } from '../data/imagesData';
import { getIndustryBySlug } from '../data/industriesData';
import { generateFAQSchema } from '../lib/seo';
import { RelatedIndustriesBlock } from '../components/RelatedIndustriesBlock';

interface RetailSecurityPageProps {
  industrySlug?: string;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const RetailSecurityPage: React.FC<RetailSecurityPageProps> = ({
  industrySlug = 'security-cameras-retail-stores',
  onNavigate,
  onOpenQuoteModal,
}) => {
  const matchedData = getIndustryBySlug(industrySlug);
  const images = getPageImages(industrySlug);

  const title = matchedData?.heroTitle || matchedData?.metaTitle || 'Retail Security Camera Systems & POS Loss Prevention';
  const subtitle = matchedData?.heroSubtitle || matchedData?.heroSubheadline || 'Protect your store, reduce inventory shrinkage, verify cash register transactions, and deter shoplifting with high-definition 4K PoE surveillance and zero monthly fees across DFW.';
  const h1Text = matchedData?.h1 || matchedData?.name || 'Retail Store Security Camera Installation Fort Worth & DFW';

  const canonicalUrl = `https://fortworthsecuritycameras.com/${industrySlug}`;

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      question: 'How do 4K security cameras integrate with Point of Sale (POS) cash registers?',
      answer: 'Our 4K PoE cameras feature text overlay integration with major POS systems. Live transaction data—item scans, register totals, cash drawer openings, voids, and discounts—is overlaid directly onto the video feed and timestamped in the NVR. This allows you to instantly search video records by receipt number or void event to catch internal theft and sweetheading.'
    },
    {
      question: 'How many cameras does a typical retail store need?',
      answer: 'A standard 1,500 to 3,000 sq ft retail boutique typically requires 4 to 8 cameras: 1 high-resolution varifocal camera over the cash wrap, 2-4 wide-angle dome cameras monitoring product aisles, 1 face-height camera at the main entrance, and 1-2 bullet cameras covering the rear stockroom and delivery door.'
    },
    {
      question: 'Are there any monthly cloud or subscription fees for retail video monitoring?',
      answer: 'No. Fort Worth Security Cameras installs commercial-grade, standalone 4K NVR recorders with enterprise surveillance hard drives. You own 100% of the hardware and recorded footage. Remote smartphone apps (iOS/Android) and desktop client software are completely free with zero monthly charges.'
    },
    {
      question: 'Can I view camera feeds from multiple retail store locations on one phone app?',
      answer: 'Yes. Our enterprise remote client software and mobile app allow multi-site management. You can view camera matrices from 2, 5, or 20+ retail stores on a single screen, compare foot traffic, and check register areas in real time from anywhere.'
    },
    {
      question: 'What happens if a shoplifter or organized retail crime group enters my store?',
      answer: 'Our systems feature AI-powered Smart Motion Detection (SMD) and face detection. Cameras capture crisp 4K facial details even in high-contrast glass entryways. Active deterrence models can emit strobe lights and audible warnings in high-risk zones after hours to prevent break-ins.'
    },
    {
      question: 'Who handles the physical wiring and camera installation?',
      answer: 'All low-voltage Cat6 cabling, NVR rack mounting, and camera alignment are performed in partnership with licensed contractor Jericho Security and Sound (Texas Class B License #B13764), ensuring full compliance with Texas Department of Public Safety regulations.'
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    serviceType: 'Retail Security Camera Installation & Loss Prevention CCTV',
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
      { '@type': 'City', name: 'Burleson' },
      { '@type': 'City', name: 'Grapevine' },
      { '@type': 'City', name: 'Frisco' },
      { '@type': 'City', name: 'Plano' }
    ],
    description: subtitle,
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free On-Site Retail Security Audit & Proposal',
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
        titleOverride={matchedData?.name || 'Retail Security'}
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
                <ShoppingBag className="w-4 h-4 text-blue-400" />
                Retail & Loss Prevention Surveillance
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
                  <span>POS Text Overlay & Cash Register Tracking</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>4K Facial Detail at Entry & High-Value Aisle</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Stockroom & Rear Loading Dock Coverage</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>$0 Monthly Subscription Fees Guarantee</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenQuoteModal('Retail Security Camera System')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 text-base"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Request Free Retail Security Audit
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
                    alt="Retail Store Security Camera System"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-800 text-xs text-slate-200 flex items-center justify-between">
                    <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                      <Receipt className="w-4 h-4 text-blue-400" /> Live POS Text Feed
                    </span>
                    <span className="text-slate-400">4K Ultra HD PoE</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" /> DFW Licensed Retail Specialists
                  </h3>
                  <p className="text-sm text-slate-300">
                    Partnered with Jericho Security and Sound (Texas Class B License #B13764). We deliver commercial-grade 4K PoE IP cameras, concealed Cat6 wiring, and local NVR storage tailored for retail environments across Fort Worth and the DFW Metroplex.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS & LOSS PREVENTION VALUE */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Solving Retail Security & Shrinkage Challenges in DFW
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Shoplifting, internal cash drawer voids, vendor fraud, and slip-and-fall claims erode retail profits. Our custom security camera solutions target every vulnerability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Receipt className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">POS & Cash Wrap Audit</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Super-high-definition varifocal cameras mounted over register counters capture exact bill denominations and match receipt data directly to video clips. Eliminate till shortfalls and unauthorized discounts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Scan className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Organized Retail Crime Deterrence</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Wide-angle 4K turret cameras at entry doors and high-value product aisles capture clear faces and clothing details. AI analytics flag loitering and unusual crowd gathering near luxury items.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Liability & Slip-and-Fall Defense</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Continuous 24/7 NVR recording ensures high-frame-rate evidence to investigate fraudulent customer claims, employee injuries, and staging incidents in aisles and parking lots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS & SYSTEM ARCHITECTURE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                Commercial Retail Hardware
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Enterprise 4K PoE Camera Systems Built for High-Traffic Stores
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Unlike consumer wireless cameras that choke under store Wi-Fi traffic or miss quick shoplifting moments, our commercial PoE camera systems run solid copper Cat6 network cables straight to a dedicated NVR.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-sm">1</div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">4K Vandal-Proof Dome Cameras</h4>
                    <p className="text-sm text-slate-600">Impact-rated IK10 domes inside sales floors and aisles prevent tampering or repositioning by customers.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-sm">2</div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Motorized Optical Zoom Cash Wrap Cameras</h4>
                    <p className="text-sm text-slate-600">Adjust lens focal length remotely to zoom straight onto register keys, money drawers, and credit card readers.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-sm">3</div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Stockroom & Rear Dock Perimeter Defense</h4>
                    <p className="text-sm text-slate-600">Weatherproof IP67 bullet cameras with active deterrence sirens capture delivery trucks and prevent backdoor shrinkage.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <SafeImage src={images.gallery1} alt="Retail Security Camera Installation" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <SafeImage src={images.gallery2} alt="POS Cash Register Camera View" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <SafeImage src={images.gallery3} alt="Store Stockroom Surveillance Camera" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <SafeImage src={images.gallery4} alt="Retail Security System NVR Hardware" className="w-full h-48 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED RETAIL INDUSTRIES */}
      <RelatedIndustriesBlock
        title="Related Retail & Commercial Security Solutions"
        subtitle="Explore specialized 4K camera system installation for other retail sectors across Fort Worth and DFW."
        onNavigate={onNavigate}
        links={[
          { slug: 'security-cameras-boutiques', name: 'Boutiques & Specialty Shops', description: 'Discreet 4K camera systems with register cash-wrap coverage and loss prevention.' },
          { slug: 'security-cameras-shopping-centers', name: 'Shopping Centers & Strip Malls', description: 'Multi-tenant parking lot surveillance, License Plate Recognition, and common area CCTV.' },
          { slug: 'security-cameras-pawn-shops', name: 'Pawn Shops & High-Value Retail', description: 'Ultra HD face identification, vault cameras, and high-security 24/7 NVR recording.' },
          { slug: 'security-cameras-liquor-stores', name: 'Liquor Stores & Beverage Depots', description: 'Counter POS text overlay, aisle coverage, and after-hours active deterrence.' },
          { slug: 'security-cameras-jewelry-stores', name: 'Jewelry Stores & Fine Watch Boutiques', description: 'High-pixel density cameras for showcase detail, safe rooms, and panic alert integration.' },
          { slug: 'security-cameras-supermarkets', name: 'Supermarkets & Grocery Stores', description: 'Multi-aisle overhead 360° cameras, loading dock monitoring, and register audit trails.' }
        ]}
      />

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Retail Security Camera FAQs
            </h2>
            <p className="mt-2 text-slate-600">
              Got questions about installing cameras in your retail store? Here are common answers for DFW business owners.
            </p>
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

      {/* CALL TO ACTION */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Protect Your Retail Store & Cut Inventory Loss?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Schedule a free on-site security assessment with our licensed DFW security camera technicians. We provide transparent pricing, custom camera placements, and full POS integration.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenQuoteModal('Retail Security Camera System')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-xl hover:shadow-blue-500/25 transition-all text-base"
            >
              Get Free Retail Security Quote
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
