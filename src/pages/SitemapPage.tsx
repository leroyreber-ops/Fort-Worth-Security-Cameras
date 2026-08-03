import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { NavLink } from '../components/NavLink';
import { TOP_KEYWORDS } from '../data/keywordsData';
import { DFW_CITIES } from '../data/citiesData';
import { BLOG_POSTS } from '../data/blogData';
import { ALL_INDUSTRIES_DATA } from '../data/industriesData';
import { SURVEILLANCE_IMAGES } from '../data/imagesData';
import {
  MapPin,
  Camera,
  Building2,
  ChevronRight,
  Globe,
  Layers,
  Search,
  CheckCircle2,
  Copy,
  ExternalLink,
  FileCode,
  BookOpen,
  Home,
} from 'lucide-react';

interface SitemapPageProps {
  onNavigate: (path: string) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  const canonicalUrl = 'https://fortworthsecuritycameras.com/sitemap';
  const pageTitle =
    'Fort Worth Security Camera Installation HTML Sitemap | Service, City & Blog Index';
  const pageDescription =
    'Browse the full Fort Worth Security Cameras HTML sitemap: residential and commercial security camera installation service pages, DFW city landing pages, Fort Worth neighborhoods, business sectors, and local security camera blog guides.';

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<
    'all' | 'services' | 'cities' | 'neighborhoods' | 'industries' | 'xml' | 'blog'
  >('all');
  const [copiedXml, setCopiedXml] = useState(false);

  // Fort Worth Neighborhoods List
  const FORT_WORTH_NEIGHBORHOODS = [
    'Altamesa',
    'Arlington Heights',
    'Benbrook',
    'Bluebonnet Hills',
    'Candleridge',
    'Crestwood',
    'Crowley',
    'Diamond Hill',
    'Eastern Hills',
    'Edgecliff Village',
    'Fairmount',
    'Forest Hill',
    'Fossil Creek',
    'Handley',
    'Hulen Bend',
    'Lake Country',
    'Marine Creek',
    'Medical District',
    'Mistletoe Heights',
    'Monticello',
    'Overton Park',
    'Overton Woods',
    'Park Glen',
    'Paschal',
    'Polytechnic Heights',
    'Ridglea Hills',
    'River Oaks',
    'Ryan Place',
    'South Hills',
    'Stop Six',
    'Tanglewood',
    'TCU Area',
    'Wedgwood',
    'Westcreek',
    'Western Hills',
    'Woodland Springs',
    'Como',
    'Stockyards',
    'Sundance Square',
    'Cultural District',
  ];

  // Industry Verticals
  const INDUSTRIES_LIST = [
    'Accounting Firms',
    'Art Galleries',
    'Auto Dealerships',
    'Bakeries',
    'Banks',
    'Beauty Salons',
    'Car Washes',
    'Churches',
    'Coffee Shops',
    'Construction Sites',
    'Convenience Stores',
    'Daycares',
    'Dry Cleaners',
    'Gas Stations',
    'Grocery Stores',
    'Hospitals',
    'Hotels',
    'Jewelry Stores',
    'Law Firms',
    'Liquor Stores',
    'Logistics Centers',
    'Manufacturing Plants',
    'Offices',
    'Parking Garages',
    'Pawn Shops',
    'Pet Stores',
    'Pharmacies',
    'Real Estate Offices',
    'Restaurants',
    'Retail Stores',
    'Schools',
    'Self-Storage',
    'Veterinary Clinics',
    'Warehouses',
    'Apartment Complexes',
    'Medical Offices',
    'Smoke Shops',
    'Dispensaries',
    'Auto Body Shops',
    'Trucking Yards',
  ];

  // Filter lists based on searchQuery
  const filteredKeywords = TOP_KEYWORDS.filter(
    (kw) =>
      kw.h1.toLowerCase().includes(searchQuery.toLowerCase()) ||
      kw.keyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      kw.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCities = DFW_CITIES.filter(
    (city) =>
      city.cityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.county.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.zipCodes.some((z) => z.includes(searchQuery))
  );

  const filteredNeighborhoods = FORT_WORTH_NEIGHBORHOODS.filter((nh) =>
    nh.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredIndustries = INDUSTRIES_LIST.filter((ind) =>
    ind.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopyXmlLink = () => {
    navigator.clipboard.writeText('https://fortworthsecuritycameras.com/sitemap.xml');
    setCopiedXml(true);
    setTimeout(() => setCopiedXml(false), 2500);
  };

  return (
    <>
      <SEOHead title={pageTitle} description={pageDescription} canonicalUrl={canonicalUrl} />

      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'HTML Sitemap', path: '/sitemap' },
        ]}
        onNavigate={onNavigate}
        variant="light"
      />

      <div className="space-y-10 pb-16 max-w-7xl mx-auto px-4 pt-4 text-slate-900 font-sans">
        {/* HEADER HERO BLOCK — HIGH CONTRAST DARK BOARD */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl space-y-6 relative overflow-hidden">
          {/* Background Photography */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 sm:opacity-85 transition-all duration-700 pointer-events-none"
            style={{ backgroundImage: `url(${SURVEILLANCE_IMAGES.heroBg.url})` }}
          />
          {/* Subtle Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30 pointer-events-none" />

          {/* Subtle Ambient Light Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>Fort Worth Security Cameras HTML Sitemap</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Indexed Service, City & Blog Pages</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Fort Worth Security Camera Installation{' '}
              <span className="text-[#007EFF]">HTML Sitemap & Site Index</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              Use this sitemap to quickly browse every Fort Worth security camera installation page,
              residential and commercial CCTV services, DFW city landing pages, Fort Worth
              neighborhoods, business security camera sectors, and local security camera blog
              guides in one place.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <div className="text-2xl font-black text-amber-400">
                  {TOP_KEYWORDS.length + DFW_CITIES.length + BLOG_POSTS.length + ALL_INDUSTRIES_DATA.length + 19}
                </div>
                <div className="text-xs font-semibold text-slate-300">
                  Total Indexed Pages
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <div className="text-2xl font-black text-[#007EFF]">{DFW_CITIES.length}</div>
                <div className="text-xs font-semibold text-slate-300">
                  DFW Service Cities
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <div className="text-2xl font-black text-emerald-400">{TOP_KEYWORDS.length}</div>
                <div className="text-xs font-semibold text-slate-300">
                  Services & Keywords
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <div className="text-2xl font-black text-sky-400">{ALL_INDUSTRIES_DATA.length}</div>
                <div className="text-xs font-semibold text-slate-300">
                  Industry Sectors
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <div className="text-2xl font-black text-purple-400">{BLOG_POSTS.length}</div>
                <div className="text-xs font-semibold text-slate-300">
                  Security Guides
                </div>
              </div>
            </div>

            {/* Search Filter Box */}
            <div className="pt-2 relative max-w-xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search security camera services, cities (e.g. Hurst, Keller), neighborhoods, or blog keywords..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-950/90 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#007EFF] transition-colors shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white bg-slate-800 px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* CATEGORY NAV TABS */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E5E5E5] pb-3 text-xs font-bold">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'all'
                ? 'bg-[#007EFF] text-white shadow-md'
                : 'bg-white border border-[#E5E5E5] text-slate-700 hover:bg-slate-50'
            }`}
          >
            All Sitemap Categories (
            {filteredKeywords.length +
              filteredCities.length +
              filteredNeighborhoods.length +
              filteredIndustries.length}
            )
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'services'
                ? 'bg-[#007EFF] text-white shadow-md'
                : 'bg-white border border-[#E5E5E5] text-slate-700 hover:bg-slate-50'
            }`}
          >
            Fort Worth Security Camera Services ({filteredKeywords.length})
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'blog'
                ? 'bg-[#007EFF] text-white shadow-md'
                : 'bg-white border border-[#E5E5E5] text-slate-700 hover:bg-slate-50'
            }`}
          >
            Local Security Camera Blog Guides ({BLOG_POSTS.length})
          </button>
          <button
            onClick={() => setActiveTab('cities')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'cities'
                ? 'bg-[#007EFF] text-white shadow-md'
                : 'bg-white border border-[#E5E5E5] text-slate-700 hover:bg-slate-50'
            }`}
          >
            Fort Worth & DFW City Pages ({filteredCities.length})
          </button>
          <button
            onClick={() => setActiveTab('neighborhoods')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'neighborhoods'
                ? 'bg-[#007EFF] text-white shadow-md'
                : 'bg-white border border-[#E5E5E5] text-slate-700 hover:bg-slate-50'
            }`}
          >
            Fort Worth Neighborhood Coverage ({filteredNeighborhoods.length})
          </button>
          <button
            onClick={() => setActiveTab('industries')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'industries'
                ? 'bg-[#007EFF] text-white shadow-md'
                : 'bg-white border border-[#E5E5E5] text-slate-700 hover:bg-slate-50'
            }`}
          >
            Business & Commercial Security Sectors ({filteredIndustries.length})
          </button>
          <button
            onClick={() => setActiveTab('xml')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'xml'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            <FileCode className="w-3.5 h-3.5 inline mr-1" />
            XML Sitemap for Search Engines
          </button>
        </div>

        {/* SECTION 0: CORE COMPANY PAGES (ABOUT US, CONTACT, QUOTE) */}
        {(activeTab === 'all' || activeTab === 'services') && (
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#007EFF]" />
                <span>Fort Worth Security Cameras Core Company Pages</span>
              </h2>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Official Company Index
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* About Us Card */}
              <NavLink
                to="/about-us-fort-worth"
                onNavigate={onNavigate}
                className="p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#007EFF] hover:shadow-lg transition-all group cursor-pointer space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 rounded-lg bg-blue-50 text-[#007EFF]">
                      <Building2 className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      Company Info
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#007EFF]">
                    About Fort Worth Security Cameras
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Learn about our 19+ years in business, 2203 8th Ave HQ, licensed technicians, and zero monthly fees guarantee.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-bold text-[#007EFF]">
                  <span className="font-mono text-[11px] text-slate-500">/about-us-fort-worth</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </NavLink>

              {/* Contact Us Card */}
              <NavLink
                to="/contact-us-fort-worth"
                onNavigate={onNavigate}
                className="p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#007EFF] hover:shadow-lg transition-all group cursor-pointer space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Direct Tech Call/Text
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#007EFF]">
                    Contact Us & Direct Dispatch
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Connect directly with lead tech Leroy Reber at (817) 231-2962, email leroyreber@gmail.com or visit 2203 8th Ave.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-bold text-[#007EFF]">
                  <span className="font-mono text-[11px] text-slate-500">/contact-us-fort-worth</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </NavLink>

              {/* Free Quote Page */}
              <NavLink
                to="/free-security-camera-quote-fort-worth"
                onNavigate={onNavigate}
                className="p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#007EFF] hover:shadow-lg transition-all group cursor-pointer space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 rounded-lg bg-amber-50 text-amber-600">
                      <Camera className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                      Itemized Estimate
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#007EFF]">
                    Free Security Camera Quote
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Interactive budget calculator and instant quote request form for Fort Worth residential & commercial installations.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-bold text-[#007EFF]">
                  <span className="font-mono text-[11px] text-slate-500">/free-security-camera-quote...</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </NavLink>

              {/* Blog Index Page */}
              <NavLink
                to="/blog"
                onNavigate={onNavigate}
                className="p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#007EFF] hover:shadow-lg transition-all group cursor-pointer space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 rounded-lg bg-purple-50 text-purple-600">
                      <BookOpen className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                      Knowledge Hub
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#007EFF]">
                    Fort Worth Security Blog & Guides
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Expert buyer advice, cost breakdowns, 4K camera specs, and local crime prevention tips from local technicians.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-bold text-[#007EFF]">
                  <span className="font-mono text-[11px] text-slate-500">/blog</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </NavLink>

              {/* Dedicated Residential Page */}
              <NavLink
                to="/residential-security-camera-installation-fort-worth"
                onNavigate={onNavigate}
                className="p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#007EFF] hover:shadow-lg transition-all group cursor-pointer space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                      <Home className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Home Security
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#007EFF]">
                    Residential Security Camera Installation
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Dedicated page for 4K PoE home security cameras, hidden attic Cat6 cabling, zero monthly fees, and 1-year warranty.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-bold text-[#007EFF]">
                  <span className="font-mono text-[11px] text-slate-500">/residential-security-camera...</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </NavLink>

              {/* Dedicated Commercial Page */}
              <NavLink
                to="/commercial-security-camera-installation-fort-worth"
                onNavigate={onNavigate}
                className="p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#007EFF] hover:shadow-lg transition-all group cursor-pointer space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 rounded-lg bg-blue-50 text-[#007EFF]">
                      <Building2 className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      Business CCTV
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#007EFF]">
                    Commercial Security Camera Installation
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Dedicated page for enterprise 4K PoE CCTV, NDAA compliant hardware, rack-mounted NVRs, and Cat6 cabling.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-bold text-[#007EFF]">
                  <span className="font-mono text-[11px] text-slate-500">/commercial-security-camera...</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </NavLink>
            </div>
          </section>
        )}

        {/* SECTION 1: PRIMARY SURVEILLANCE SERVICES BLOCK */}
        {(activeTab === 'all' || activeTab === 'services') && filteredKeywords.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <Camera className="w-5 h-5 text-[#007EFF]" />
                <span>Fort Worth Security Camera Installation Service Pages</span>
              </h2>
              <span className="text-xs font-mono font-bold text-[#007EFF] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                Core Installation & CCTV Services
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredKeywords.map((kw) => (
                <NavLink
                  key={kw.slug}
                  to={`/${kw.slug}`}
                  onNavigate={onNavigate}
                  className="p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#007EFF] hover:shadow-lg transition-all group cursor-pointer space-y-3 relative flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-[#007EFF] group-hover:scale-110 transition-transform">
                        <Camera className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                        Fort Worth Install
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#007EFF] transition-colors leading-snug">
                      {kw.h1}
                    </h3>
                    <p className="text-xs text-[#6B6B6B] line-clamp-2">
                      {kw.heroSubheadline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-bold text-[#007EFF]">
                    <span className="truncate font-mono text-[11px] text-slate-500 group-hover:text-[#007EFF] transition-colors">
                      /{kw.slug}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span>View Fort Worth service page</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: BLOG POSTS & SECURITY GUIDES BLOCK */}
        {(activeTab === 'all' || activeTab === 'blog') && (
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#007EFF]" />
                <span>Fort Worth Security Camera Blog Articles & DFW Guides</span>
              </h2>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                {BLOG_POSTS.length} Security Camera Guides
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {BLOG_POSTS.map((post) => (
                <NavLink
                  key={post.slug}
                  to={`/${post.slug}`}
                  onNavigate={onNavigate}
                  className="p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#007EFF] hover:shadow-lg transition-all group cursor-pointer space-y-3 relative flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-blue-50 text-[#007EFF] border border-blue-200">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{post.readTime}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#007EFF] transition-colors leading-snug line-clamp-2">
                      {post.h1}
                    </h3>
                    <p className="text-xs text-[#6B6B6B] line-clamp-2">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-bold text-[#007EFF]">
                    <span className="truncate font-mono text-[11px] text-slate-500 group-hover:text-[#007EFF] transition-colors">
                      /{post.slug}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span>Read Fort Worth security guide</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: DFW CITIES DIRECTORY BLOCK */}
        {(activeTab === 'all' || activeTab === 'cities') && filteredCities.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#007EFF]" />
                <span>Fort Worth & DFW Security Camera City Landing Pages</span>
              </h2>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                35 City‑Level Installation Pages
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {filteredCities.map((city) => (
                <NavLink
                  key={city.slug}
                  to={`/${city.slug}`}
                  onNavigate={onNavigate}
                  className="p-4 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#007EFF] hover:shadow-md transition-all group cursor-pointer space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900 group-hover:text-[#007EFF] transition-colors">
                        {city.cityName}, TX
                      </span>
                      <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {city.county.replace(' County', '')}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#6B6B6B] line-clamp-2">
                      {city.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-emerald-700 font-mono font-semibold">
                      Zips: {city.zipCodes.slice(0, 2).join(', ')}
                    </span>
                    <span className="font-bold text-[#007EFF] group-hover:translate-x-0.5 transition-transform">
                      View city installation page →
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 4: FORT WORTH NEIGHBORHOODS BLOCK */}
        {(activeTab === 'all' || activeTab === 'neighborhoods') &&
          filteredNeighborhoods.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#007EFF]" />
                  <span>Fort Worth Neighborhood Security Camera Coverage</span>
                </h2>
                <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                  40 Fort Worth Sub‑Districts
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {filteredNeighborhoods.map((nh, i) => (
                  <NavLink
                    key={i}
                    to="/"
                    onNavigate={onNavigate}
                    className="p-3 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#007EFF] text-slate-800 hover:text-[#007EFF] text-left transition-all text-xs font-semibold flex items-center justify-between shadow-sm group"
                  >
                    <span className="truncate">{nh}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#007EFF] shrink-0" />
                  </NavLink>
                ))}
              </div>
            </section>
          )}

        {/* SECTION 5: COMMERCIAL INDUSTRIES BLOCK */}
        {(activeTab === 'all' || activeTab === 'industries') && (
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#007EFF]" />
                <span>
                  Business & Commercial Security Camera Installation Sectors
                </span>
              </h2>
              <span className="text-xs font-mono text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                {ALL_INDUSTRIES_DATA.length} Industry Specializations
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {ALL_INDUSTRIES_DATA.map((ind) => (
                <NavLink
                  key={ind.slug}
                  to={`/${ind.slug}`}
                  onNavigate={onNavigate}
                  className="p-3 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#007EFF] text-slate-800 hover:text-[#007EFF] text-left transition-all text-xs font-semibold flex items-center justify-between shadow-sm group"
                >
                  <span className="truncate">{ind.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#007EFF] shrink-0" />
                </NavLink>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 6: GOOGLE SEARCH CONSOLE XML SITEMAP SUBMISSION CARD */}
        {(activeTab === 'all' || activeTab === 'xml') && (
          <section className="p-8 rounded-3xl bg-slate-950 border border-slate-800 text-white shadow-2xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Standard XML Sitemap for Security Camera Pages</span>
                </div>
                <h2 className="text-2xl font-black text-white">
                  XML Sitemap for Fort Worth Security Cameras
                </h2>
                <p className="text-xs text-slate-300 max-w-xl">
                  Fort Worth Security Cameras generates a clean XML sitemap so Google, Bing, and other
                  search engines can efficiently crawl and index all important security camera
                  installation, city landing, and blog pages.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyXmlLink}
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copiedXml ? 'Copied XML Link!' : 'Copy XML URL'}</span>
                </button>

                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs transition-all flex items-center gap-2"
                >
                  <FileCode className="w-4 h-4 text-[#007EFF]" />
                  <span>View Raw XML Sitemap</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* XML Details Box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="font-bold text-amber-400">XML File Location</div>
                <div className="font-mono text-slate-300 break-all">
                  https://fortworthsecuritycameras.com/sitemap.xml
                </div>
                <p className="text-[11px] text-slate-400 pt-1">
                  Submit this URL in Google Search Console and Bing Webmaster Tools under
                  “Sitemaps” to confirm crawling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="font-bold text-emerald-400">Search Engine Crawling</div>
                <div className="text-slate-300">
                  The XML sitemap lists core Fort Worth security camera installation pages,
                  residential and commercial CCTV services, and city landing pages with{' '}
                  {'<loc>'} and {'<lastmod>'} tags for clear signals.
                </div>
                <p className="text-[11px] text-slate-400 pt-1">
                  Helps ensure new and updated security camera content is discovered quickly.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="font-bold text-[#007EFF]">Sitemap & Internal Links</div>
                <div className="text-slate-300">
                  This HTML sitemap complements the XML file by giving human visitors and search
                  engines a browseable list of Fort Worth security camera installation pages.
                </div>
                <p className="text-[11px] text-slate-400 pt-1">
                  Strong internal linking from this index helps important pages share authority
                  and rank better over time.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};