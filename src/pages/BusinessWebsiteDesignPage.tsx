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
  Layout,
  FileText,
  HelpCircle,
  Zap,
  Globe,
  Search,
  Smartphone,
  Code,
  LineChart,
  MousePointerClick,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { BRAND_ASSETS, SURVEILLANCE_IMAGES } from '../data/imagesData';
import { NavLink } from '../components/NavLink';

interface BusinessWebsiteDesignPageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: () => void;
}

export const BusinessWebsiteDesignPage: React.FC<BusinessWebsiteDesignPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const canonicalUrl =
    'https://fortworthsecuritycameras.com/business-website-design-fort-worth';

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Business Website Design & Local SEO Fort Worth',
    serviceType: 'Web Design & Local Search Engine Optimization',
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
      'Professional business website design and local Google Maps SEO in Fort Worth, TX. Custom high-speed mobile responsive websites, conversion optimization and lead generation for Fort Worth contractors, trades and local commercial services.',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: 'Free business website audit and design estimate',
    },
  };

  const faqList = [
    {
      question:
        'Why choose a local Fort Worth web design company over cheap template builders?',
      answer:
        'Generic template builders such as entry-level Wix or basic Squarespace often produce slower code, lack structured schema data and struggle to rank in Fort Worth Google search results. Our custom websites are engineered with clean code, fast load speeds, structured JSON‑LD schema and conversion‑focused call buttons that are built to drive phone calls and quote requests from local customers.',
    },
    {
      question:
        'How long does it take to design and launch a custom business website?',
      answer:
        'Most local service business websites are completed, tested and launched within about 2 to 3 weeks. We handle domain configuration, high‑speed hosting/CDN setup, mobile responsiveness, custom copywriting and Google Search Console indexing.',
    },
    {
      question:
        'Will my website help my Google Maps ranking for local Fort Worth searches?',
      answer:
        'Yes. Every website project includes Google Business Profile optimization, local service‑area landing pages, structured local business schema markup and strategic keyword optimization to support stronger visibility in local organic results and Google Maps 3‑Pack rankings.',
    },
    {
      question:
        'Do I own my website and domain name once it is built?',
      answer:
        'Yes. You retain full ownership of your domain name, website code, images and content. We do not lock clients into long‑term contracts or restrict access to your digital assets.',
    },
    {
      question:
        'Will my website look great and load fast on mobile smartphones?',
      answer:
        'Absolutely. A majority of local Fort Worth service searches occur on smartphones. We design mobile‑first layouts with click‑to‑call buttons, optimized images and touch‑friendly navigation aimed to score well on Google PageSpeed Insights.',
    },
    {
      question:
        'Can you help update our existing website if it looks outdated?',
      answer:
        'Yes. We perform complete website redesigns, transforming slow, outdated sites into modern, high‑speed lead generation engines that accurately reflect your services, branding and customer reviews.',
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
        name: 'Fort Worth Business Web Design & Local SEO',
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Fort Worth Web Design | Business Website Design & Local SEO"
        description="Local Fort Worth web design and business website development. Custom mobile-first websites, Google Maps SEO, fast hosting and lead generation for contractors, trades and service companies. Call (817) 231-2962."
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
              label: 'Business Website Design Fort Worth',
              path: '/business-website-design-fort-worth',
            },
          ]}
          onNavigate={onNavigate}
          variant="light"
        />

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-14 lg:py-22 border-b border-slate-800">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-85 transition-all duration-700 pointer-events-none"
            style={{
              backgroundImage:
                'url(https://chezkoop.ca/wp-content/uploads/2025/06/Web-Header-2560x1097-CN_015.jpg)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 backdrop-blur-sm">
                <Layout className="w-4 h-4 text-amber-400" />
                <span>Fort Worth local web design and digital marketing</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Business Website Design & Local SEO in Fort Worth, TX
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                High‑speed, conversion‑focused custom web design and local search engine optimization
                (SEO) for Fort Worth contractors, trades, retail storefronts and commercial service
                companies across the DFW metroplex.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Ultra‑fast mobile‑first</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Google Maps local SEO</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Conversion‑focused forms</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>100% client ownership</span>
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
                  <span>Get website proposal</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BADGES BAR */}
        <section className="bg-white border-b border-[#E5E5E5] py-4 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center text-xs">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Layout className="w-5 h-5 text-amber-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">Custom web design</div>
              <div className="text-[11px] text-slate-500">Tailored to your brand</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Search className="w-5 h-5 text-[#007EFF] mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">Google Maps SEO</div>
              <div className="text-[11px] text-slate-500">Built for local search</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Smartphone className="w-5 h-5 text-emerald-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">Mobile speed focused</div>
              <div className="text-[11px] text-slate-500">Optimized for phones</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Award className="w-5 h-5 text-purple-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">No long contracts</div>
              <div className="text-[11px] text-slate-500">You own your assets</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Building2 className="w-5 h-5 text-[#007EFF] mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">2203 8th Ave HQ</div>
              <div className="text-[11px] text-slate-500">Local Fort Worth team</div>
            </div>
          </div>
        </section>

        {/* SECTION 1: OVERVIEW */}
        <section className="max-w-7xl mx-auto px-4 pt-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold">
                <Globe className="w-3.5 h-3.5" />
                <span>Turn your website into a 24/7 lead machine</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                High‑converting web design built for Fort Worth local businesses
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your business website is often the first interaction potential customers have with
                your brand. When a Fort Worth homeowner or commercial manager searches for local
                services, a slow, outdated or confusing site quickly drives them to click on a
                competitor instead.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At <strong className="text-slate-900">Fort Worth Security Cameras</strong>, we build
                custom, fast business websites engineered to convert local web traffic into phone
                calls and quote requests. Sites feature modern clean layouts, prominent click‑to‑call
                buttons, structured JSON‑LD schema for search engines and dedicated service‑area
                landing pages for your key cities.
              </p>

              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Local DFW business support and full ownership</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Unlike some agencies that charge ongoing fees while controlling your code, we
                  deliver your website with full ownership. You keep your domain, codebase and design
                  files once the project is complete.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-xl space-y-4">
                <h3 className="font-black text-slate-900 text-base border-b border-[#E5E5E5] pb-3 flex items-center justify-between">
                  <span>Web and digital services</span>
                  <span className="text-xs text-amber-800 font-bold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    Pro web
                  </span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Layout className="w-4 h-4 text-amber-700" />
                      <span>Custom responsive web design</span>
                    </div>
                    <p className="text-slate-600">
                      Mobile‑first, fast‑loading layouts built to match your brand and core services.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <Search className="w-4 h-4 text-[#007EFF]" />
                      <span>Google Business Profile and local SEO</span>
                    </div>
                    <p className="text-slate-600">
                      Optimizing map listings, service‑area pages and schema to support local
                      rankings.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      <MousePointerClick className="w-4 h-4 text-emerald-600" />
                      <span>Lead capture forms and call tracking</span>
                    </div>
                    <p className="text-slate-600">
                      Click‑to‑call banners, quote forms and simple call tracking to measure inbound
                      leads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: DIGITAL SERVICES SUITE */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold">
              <Code className="w-4 h-4" />
              <span>Full digital capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Web design and local search optimization features
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Core elements your Fort Worth business website needs to stand out and rank locally:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700 w-fit">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">Mobile‑first UI/UX engineering</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Most local searches happen on phones. We design responsive layouts that render
                cleanly on iPhones, Android devices, tablets and desktops.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-blue-50 text-[#007EFF] w-fit">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Local Google Maps and 3‑Pack optimization
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supporting your Google Business Profile, reviews, NAP consistency and local keyword
                targeting for Fort Worth and nearby cities.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 w-fit">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                Fast hosting, CDN and basic site security
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High‑speed hosting, SSL certificates and performance tuning for quicker load times
                and better user experience.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-600 w-fit">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">Geotagged city landing pages</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Optional service‑area pages for surrounding communities such as Arlington, Keller,
                Southlake, Benbrook and Weatherford to capture regional searches.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-600 w-fit">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">
                JSON‑LD structured schema markup
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Embedding schema for local business details (address, phone, hours, services) to
                help search engines understand and display your site correctly.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3">
              <div className="p-2.5 rounded-2xl bg-slate-100 text-slate-800 w-fit">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-lg">Local industry copywriting</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear, persuasive content written for contractors, installers and service providers,
                highlighting licenses, reviews and warranties.
              </p>
            </div>
          </div>
        </section>

        {/* NEW SECTION: INDUSTRIES WE SERVE */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold">
              <Layout className="w-4 h-4" />
              <span>Industries we serve across Fort Worth & DFW</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Fort Worth website design for local service businesses
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We design high‑converting websites for a wide range of local companies throughout Fort
              Worth and the Dallas‑Fort Worth metroplex:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-2">
              <h3 className="font-black text-slate-900 text-lg">Contractors & Home Services</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                HVAC, electrical, plumbing, security installers, roofing and remodeling companies
                needing websites that drive inbound calls and estimate requests.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-2">
              <h3 className="font-black text-slate-900 text-lg">Professional Offices</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Medical clinics, dental practices, law firms, insurance agencies and financial
                advisors looking to present a polished, trustworthy online presence.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-2">
              <h3 className="font-black text-slate-900 text-lg">Retail & Showrooms</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Local storefronts, auto dealers and showrooms across Fort Worth and Arlington that
                rely on web traffic and Google Maps visibility to bring visitors through the door.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-2">
              <h3 className="font-black text-slate-900 text-lg">Industrial & B2B Services</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Warehousing, manufacturing, logistics and commercial contractors that need clear
                service pages and quote forms for purchasing managers and operations teams.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-2">
              <h3 className="font-black text-slate-900 text-lg">Local Trades & Field Teams</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Locksmiths, landscapers, cleaning crews and mobile technicians whose websites must
                make it easy for customers to call or request same‑day service.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-2">
              <h3 className="font-black text-slate-900 text-lg">Nonprofits & Community Groups</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Churches, charities and local associations seeking simple, easy‑to‑update sites for
                events, donations and volunteer sign‑ups.
              </p>
            </div>
          </div>
        </section>

        {/* NEW SECTION: EXAMPLE PROJECTS & RELATED SERVICES */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Example Fort Worth website projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Recent work includes a Fort Worth HVAC contractor website designed to rank in local
                “near me” searches, a professional office site for a West 7th law firm and a new
                online presence for an Arlington auto dealership focused on Google Maps visibility
                and mobile leads.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Each project combines fast, mobile‑friendly design with strong calls‑to‑action,
                service‑area pages and integration with Google Business Profiles to help clients win
                more local search traffic and inbound enquiries.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Related local services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In addition to Fort Worth web design, our team provides connected local services
                that support your overall online presence and communications:
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <NavLink
                  to="/business-communications-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Business communications & VoIP phones
                </NavLink>
                <NavLink
                  to="/commercial-security-camera-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Commercial security camera installation
                </NavLink>
                <NavLink
                  to="/residential-security-camera-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Residential security camera installation
                </NavLink>
              </div>
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
              Business website design FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Answers to common web design and local SEO questions from Fort Worth business owners:
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
                <span>Fort Worth local web services</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Get a free business website and local SEO consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Contact Leroy Reber and our local digital team today. We review your current online
                presence and provide a clear, fast‑turnaround website proposal.
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
      </div>
    </>
  );
};