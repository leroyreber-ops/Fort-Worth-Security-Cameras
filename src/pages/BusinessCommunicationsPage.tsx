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
  PhoneCall,
  FileText,
  Wrench,
  HelpCircle,
  Zap,
  Radio,
  Globe,
  Wifi,
  Volume2,
  Check,
  Server,
  Headphones,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SafeImage } from '../components/SafeImage';
import { NavLink } from '../components/NavLink';
import { BRAND_ASSETS, SURVEILLANCE_IMAGES } from '../data/imagesData';
import { DFW_CITIES } from '../data/citiesData';

interface BusinessCommunicationsPageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: () => void;
}

export const BusinessCommunicationsPage: React.FC<BusinessCommunicationsPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const canonicalUrl =
    'https://fortworthsecuritycameras.com/business-communications-fort-worth';

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Business Communications & Telecom Solutions Fort Worth',
    serviceType: 'Business Phone Systems & Fiber Internet Solutions',
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
      'Professional business communications and telecom services in Fort Worth, TX. Cloud VoIP hosted phone systems, AT&T, Spectrum and Comcast commercial fiber internet sourcing, warehouse overhead paging and door intercoms for DFW businesses. Partnered with Jericho Security and Sound (B13764).',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free business telecom and VoIP consultation',
    },
  };

  const faqList = [
    {
      question: 'What business communication services do you offer in Fort Worth?',
      answer:
        'We provide complete commercial business communication solutions including cloud VoIP PBX phone systems, mobile softphone apps, auto-attendant interactive voice menus, commercial fiber and broadband internet ordering (AT&T, Spectrum, Comcast), warehouse overhead speaker paging and SIP door intercom access controls.',
    },
    {
      question: 'Can we keep our existing company phone numbers when switching to VoIP?',
      answer:
        'Yes. We handle full Local Number Portability (LNP). We port existing business landlines, toll-free numbers and direct inward dial (DID) extensions seamlessly to your new cloud VoIP service with minimal disruption.',
    },
    {
      question:
        'How do you help us get better rates on AT&T, Spectrum or Comcast business fiber?',
      answer:
        'As an authorized telecom agent in Fort Worth, we evaluate local carrier service maps, request direct wholesale promotions from AT&T Business, Spectrum Enterprise and Comcast Business, and manage line installation schedules from contract to live activation at no extra cost to you.',
    },
    {
      question:
        'How much internet bandwidth is needed for a business VoIP phone system?',
      answer:
        'Each typical VoIP voice call requires roughly 100 Kbps (0.1 Mbps) of symmetrical upload and download bandwidth. A 20-person office only uses around 2 Mbps for voice calls. Having a clean, Quality of Service (QoS) configured network with Cat6 wiring is crucial to minimize jitter and packet loss.',
    },
    {
      question:
        'Can employees answer business phone calls on their mobile phones?',
      answer:
        'Yes. Modern cloud VoIP systems include mobile apps for iOS and Android. Employees can place and answer business phone calls from anywhere showing your official company caller ID, transfer calls to coworkers, check voicemails and send SMS messages.',
    },
    {
      question:
        'Do you install overhead paging speakers for warehouses and car dealerships?',
      answer:
        'Yes. We install overhead paging systems, horn speakers, ambient music feeds and zone controllers for warehouses, manufacturing plants, auto repair bays and retail centers across the DFW metroplex.',
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
        name: 'Business Phone Systems & Fiber Internet Fort Worth',
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Business Communications Fort Worth | VoIP Phone Systems & Fiber Internet"
        description="Local business communications and telecom solutions in Fort Worth, TX. Cloud VoIP business phone systems, AT&T / Spectrum / Comcast fiber internet sourcing, overhead paging and door intercoms. Partnered with Jericho Security and Sound (B13764). Call (817) 231-2962."
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
              label: 'Business Communications Fort Worth',
              path: '/business-communications-fort-worth',
            },
          ]}
          onNavigate={onNavigate}
          variant="light"
        />

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-14 lg:py-22 border-b border-slate-800">
          <SafeImage
            loading="eager"
            src="https://www.akima.com/wp-content/uploads/2020/11/GettyImages-913641726_EDIT_Faded.jpg"
            alt="Business communications VoIP telecom cabling Fort Worth TX header background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 sm:opacity-90 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 backdrop-blur-sm">
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Licensed Texas partner: Jericho Security and Sound (B13764)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Business Communications & Telecom Solutions in Fort Worth, TX
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                Modernize your company’s voice and internet connectivity. We provide cloud VoIP
                business phone systems, commercial fiber and broadband line sourcing (AT&T, Spectrum,
                Comcast), mobile softphone apps, overhead warehouse paging and SIP door intercoms for
                businesses in Fort Worth and the greater DFW metroplex.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Cloud VoIP phone systems</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>AT&T / Spectrum fiber sourcing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Overhead paging & horns</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Keep existing numbers</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="tel:8172312962"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (817) 231‑2962</span>
                </a>

                <button
                  onClick={onOpenQuoteModal}
                  className="px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-black text-xs shadow-lg transition flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request telecom audit</span>
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
              <PhoneCall className="w-5 h-5 text-amber-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">Cloud VoIP phones</div>
              <div className="text-[11px] text-slate-500">Desk phones & mobile apps</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Globe className="w-5 h-5 text-emerald-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">AT&T / Spectrum partner</div>
              <div className="text-[11px] text-slate-500">Dedicated fiber broadband</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Volume2 className="w-5 h-5 text-purple-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">Overhead paging</div>
              <div className="text-[11px] text-slate-500">Warehouses & industrial</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Building2 className="w-5 h-5 text-[#007EFF] mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">2203 8th Ave HQ</div>
              <div className="text-[11px] text-slate-500">Fort Worth dispatch</div>
            </div>
          </div>
        </section>

        {/* SECTION 1: OVERVIEW */}
        <section className="max-w-7xl mx-auto px-4 pt-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Next‑generation voice, fiber and intercom systems</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Business communications and phone systems for Fort Worth companies
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Legacy copper phone lines are being retired across Texas, driving up monthly line
                fees while reliability declines. Modern Fort Worth businesses need clear, flexible
                communications that let staff answer calls from IP desk phones, laptops and mobile
                apps, whether they are in the office or working remotely.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At <strong className="text-slate-900">Fort Worth Security Cameras</strong>, we work
                with leading national telecom carriers and cloud VoIP platforms to deliver
                end‑to‑end business communications. From ordering high‑speed AT&T Fiber or Spectrum
                Enterprise internet to wiring Cat6 desk drops, programming auto‑attendant menus and
                installing warehouse paging speakers, our local team manages the entire project.
              </p>

              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed low‑voltage contractor: Jericho Security and Sound (B13764)</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  All low‑voltage telecom cabling, SIP intercom installation and access control
                  integrations are performed under Texas Class B Security Contractor License B13764
                  held by Jericho Security and Sound.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-xl space-y-4">
                <h3 className="font-black text-slate-900 text-base border-b border-[#E5E5E5] pb-3 flex items-center justify-between">
                  <span>Business communications solution suite</span>
                  <span className="text-xs text-amber-800 font-bold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    Business‑class
                  </span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <PhoneCall className="w-4 h-4 text-amber-700" />
                      <span>Cloud hosted VoIP PBX</span>
                    </div>
                    <p className="text-slate-600">
                      IP desk phones, voicemail‑to‑email, call recording, auto‑attendants and mobile
                      softphone apps.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-emerald-600" />
                      <span>Carrier internet sourcing</span>
                    </div>
                    <p className="text-slate-600">
                      Sourcing dedicated fiber and cable broadband line orders from AT&T Business,
                      Spectrum Enterprise and Comcast Business.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Volume2 className="w-4 h-4 text-purple-600" />
                      <span>Overhead warehouse paging</span>
                    </div>
                    <p className="text-slate-600">
                      70V overhead speakers, outdoor horn arrays and phone‑integrated paging for
                      industrial spaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: TELECOM CAPABILITIES */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold">
              <Headphones className="w-4 h-4" />
              <span>Full communications capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Integrated telecom and carrier infrastructure services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We streamline your commercial communications through a single local Fort Worth team:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700 w-fit">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">Hosted cloud VoIP systems</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                HD voice, auto‑attendants (“Press 1 for Sales”), call queues, ring groups, call
                recording and CRM integrations for Fort Worth offices.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 w-fit">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Commercial fiber and broadband sourcing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Authorized brokerage for AT&T Business Fiber, Spectrum Enterprise and Comcast
                Business. We audit your building’s service options and secure competitive promo
                pricing.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-600 w-fit">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Warehouse and industrial overhead paging
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High‑decibel horn paging for industrial plants, distribution centers, auto
                dealerships and retail stores, tied directly into your phone system.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-blue-50 text-[#007EFF] w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                SIP video door intercoms and access control
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Door stations with HD video letting receptionists or security staff view visitors
                and unlock doors from their phone or softphone screens.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-600 w-fit">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Mobile softphones and remote workers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enable remote staff, sales reps and field technicians to send SMS, receive office
                calls and join video meetings via secure mobile and desktop apps.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-slate-100 text-slate-800 w-fit">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                PoE switches and QoS network preparation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Installing Power‑over‑Ethernet (PoE) switches and configuring VLAN and Quality of
                Service (QoS) rules so voice traffic stays smooth even during heavy data use.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-5xl mx-auto px-4 pt-16 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold">
              <HelpCircle className="w-4 h-4" />
              <span>Got questions?</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Business communications FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Answers to common business phone and telecom questions from Fort Worth companies:
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
                      openFaq === index ? 'rotate-90 text-amber-800' : ''
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Licensed Texas telecom partner (B13764)</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Schedule a free business telecom consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Contact Leroy Reber and our Fort Worth communications team today. We review your
                current phone and internet bills, check cabling and deliver a clear cloud VoIP and
                fiber proposal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full md:w-auto">
              <a
                href="tel:8172312962"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg transition text-center"
              >
                Call (817) 231‑2962
              </a>
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-black text-xs shadow-lg transition text-center"
              >
                Request consultation
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