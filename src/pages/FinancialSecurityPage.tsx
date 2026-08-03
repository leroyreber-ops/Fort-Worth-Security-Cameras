import React, { useState } from 'react';
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  Award,
  DollarSign,
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
  Landmark,
  Vault
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { BRAND_ASSETS, getPageImages } from '../data/imagesData';
import { getIndustryBySlug } from '../data/industriesData';
import { generateFAQSchema } from '../lib/seo';
import { RelatedIndustriesBlock } from '../components/RelatedIndustriesBlock';

interface FinancialSecurityPageProps {
  industrySlug?: string;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const FinancialSecurityPage: React.FC<FinancialSecurityPageProps> = ({
  industrySlug = 'security-cameras-banks',
  onNavigate,
  onOpenQuoteModal,
}) => {
  const matchedData = getIndustryBySlug(industrySlug);
  const images = getPageImages(industrySlug);

  const title = matchedData?.heroTitle || matchedData?.metaTitle || 'Bank, Credit Union & Financial Security Camera Systems';
  const subtitle = matchedData?.heroSubtitle || matchedData?.heroSubheadline || 'Teller window coverage, ATM pinhole cameras, vault surveillance, drive-thru lane monitoring, and ultra-secure 4K cameras for banks, credit unions, and high-security businesses across DFW.';
  const h1Text = matchedData?.h1 || matchedData?.name || 'Bank & Financial Security Camera Installation Fort Worth';

  const canonicalUrl = `https://fortworthsecuritycameras.com/${industrySlug}`;

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      question: 'What special cameras are required for ATM kiosks and teller windows?',
      answer: 'ATM kiosks use covert 2MP/4MP pinhole cameras mounted inside the machine body to capture facial profiles of all individuals conducting transactions. Teller stations feature ultra-high-resolution varifocal cameras focused on cash drawers and counting trays.'
    },
    {
      question: 'How do financial camera systems meet banking compliance and retention requirements?',
      answer: 'Financial institutions often mandate 90-day to 180-day continuous 24/7 video retention at 30 frames per second. We engineer RAID-5 and RAID-6 storage server arrays with redundant power supplies to guarantee compliance without data loss.'
    },
    {
      question: 'Can bank security officers monitor multiple branches from a central SOC (Security Operations Center)?',
      answer: 'Yes. Enterprise Video Management Software (VMS) aggregates video feeds from 5 to 50+ financial branches into a single central monitoring matrix with interactive floor plans and instant alarm pop-ups.'
    },
    {
      question: 'Are financial camera installations NDAA and TAA compliant?',
      answer: 'Yes. All cameras, NVRs, and network switches installed for banks and credit unions adhere strictly to NDAA (National Defense Authorization Act) and TAA guidelines with zero prohibited chipsets.'
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    serviceType: 'Bank & Financial Security Camera Installation',
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
      { '@type': 'City', name: 'Southlake' },
      { '@type': 'City', name: 'Frisco' }
    ],
    description: subtitle,
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free On-Site Financial Security Audit',
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
        titleOverride={matchedData?.name || 'Financial Security'}
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
                <Landmark className="w-4 h-4 text-blue-400" />
                Bank & Financial Institution Security
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
                  <span>ATM Pinhole & Covert Facial Profiling</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Teller Counter Cash Tray Varifocal Cameras</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>RAID Storage Servers for 90+ Day Retention</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Full NDAA & TAA Government Compliance</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenQuoteModal('Financial Security Camera System')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 text-base"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Request Financial Security Audit
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
                    alt="Bank Security Camera Systems"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-800 text-xs text-slate-200 flex items-center justify-between">
                    <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                      <Vault className="w-4 h-4 text-amber-400" /> Banking Vault & ATM Defense
                    </span>
                    <span className="text-slate-400">4K NDAA Compliant</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" /> Licensed Texas Security Contractor
                  </h3>
                  <p className="text-sm text-slate-300">
                    Partnered with Jericho Security and Sound (Class B License #B13764). We engineer high-security surveillance systems for banks, credit unions, and financial offices across DFW.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCIAL VISUAL SECTIONS & MONITORED ZONES */}
      <section className="py-16 bg-slate-900 text-white border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
              <Landmark className="w-4 h-4" />
              <span>Financial & Banking Protection</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Essential Security Camera Placements for Banks & Credit Unions
            </h2>
            <p className="text-slate-400 text-base">
              NDAA-compliant, high-frame-rate 4K camera installations tailored for bank teller counters, ATM vestibules, vaults, and drive-thru lanes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery1}
                  alt="Bank teller counter and cash drawer security camera surveillance view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Teller Counter
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Teller Lines & Cash Drawers</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ultra-high 4K resolution zoomed directly onto currency transactions, bill counts, and teller windows.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery2}
                  alt="Bank ATM vestibule and drive-thru lane security camera view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  ATM & Drive-Thru
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">ATM Vestibules & Lanes</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pinhole cameras and LPR lenses record driver faces and vehicle license plates at 24/7 ATM kiosks.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery3}
                  alt="Bank vault entryway and safe deposit box security camera coverage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Bank Vault
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Vault Doors & Deposit Boxes</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dual-verification video integration logs all access to main bank vaults and safety deposit locker rooms.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all group flex flex-col justify-between">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={images.gallery4}
                  alt="Financial office lobby and loan consultation desk security camera"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
                  Loan Offices
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-white text-base">Consultation Desks & Offices</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Audio-enabled recording in consultation rooms provides complete documentation for loan officers and branch staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED FINANCIAL INDUSTRIES */}
      <RelatedIndustriesBlock
        title="Related Financial & High-Security Solutions"
        subtitle="Explore specialized 4K surveillance systems for credit unions, cash centers, pawn shops, and secure facilities across Fort Worth & DFW."
        onNavigate={onNavigate}
        links={[
          { slug: 'security-cameras-credit-unions', name: 'Credit Unions & Regional Banks', description: 'Teller counter facial identification, ATM lobby cameras, and multi-branch NVR integration.' },
          { slug: 'security-cameras-check-cashing-stores', name: 'Check Cashing & Financial Services', description: 'Bulletproof glass transaction cameras, cash drawer audit trails, and entry facial capture.' },
          { slug: 'security-cameras-pawn-shops', name: 'Pawn Shops & High-Value Retail', description: 'Ultra HD face identification, vault surveillance, and 24/7 high-security NVR recording.' },
          { slug: 'security-cameras-gun-shops', name: 'Gun Shops & Armories', description: 'Display case 4K surveillance, safe room monitoring, and ATF compliance recording.' },
          { slug: 'security-cameras-data-centers', name: 'Data Centers & Secure Vaults', description: 'Server rack thermal & high-pixel surveillance, biometric access logging, and NDAA compliance.' }
        ]}
      />

      {/* FAQS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Financial & Banking Security FAQs
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
            Protect Financial Vaults, Tellers & ATM Networks
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Schedule a high-security walkthrough with our licensed bank security specialists.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenQuoteModal('Financial Security Camera System')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-xl transition-all text-base"
            >
              Request Bank Security Proposal
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
