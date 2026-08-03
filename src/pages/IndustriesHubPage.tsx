import React, { useState, useMemo } from 'react';
import {
  Building2,
  Search,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Camera,
  Store,
  Hotel,
  Stethoscope,
  GraduationCap,
  Heart,
  Factory,
  Car,
  Home,
  Landmark,
  ArrowRight,
  ChevronRight,
  Filter
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { NavLink } from '../components/NavLink';
import { ALL_INDUSTRIES_DATA, INDUSTRY_CATEGORIES, searchIndustries } from '../data/industriesData';
import { SafeImage } from '../components/SafeImage';
import { BRAND_ASSETS, INDUSTRIES_HERO_IMAGE } from '../data/imagesData';

interface IndustriesHubPageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const IndustriesHubPage: React.FC<IndustriesHubPageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewFormat, setViewFormat] = useState<'list' | 'grid'>('list');

  const filteredIndustries = useMemo(() => {
    let result = ALL_INDUSTRIES_DATA;
    if (searchQuery.trim()) {
      result = searchIndustries(searchQuery);
    }
    if (selectedCategory !== 'all') {
      const categoryObj = INDUSTRY_CATEGORIES.find((c) => c.id === selectedCategory);
      if (categoryObj) {
        result = result.filter((ind) => ind.category === categoryObj.name);
      }
    }
    return result;
  }, [searchQuery, selectedCategory]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Store': return <Store className="w-5 h-5" />;
      case 'Hotel': return <Hotel className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'Factory': return <Factory className="w-5 h-5" />;
      case 'Car': return <Car className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* SEO Head */}
      <SEOHead
        title="Security Cameras by Industry Fort Worth | Commercial CCTV Installation"
        description="Commercial 4K security camera system installation tailored for 100+ business types in Fort Worth & DFW. Retail, healthcare, warehouses, churches, schools, and offices."
        canonicalUrl="https://fortworthsecuritycameras.com/security-cameras-by-industry"
        ogImage={BRAND_ASSETS.serviceTruck}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Security Cameras by Industry - Fort Worth Security Cameras',
          description: 'Custom commercial security camera installation for 100 industries across Fort Worth and North Texas.',
          numberOfItems: ALL_INDUSTRIES_DATA.length,
          itemListElement: ALL_INDUSTRIES_DATA.slice(0, 20).map((ind, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: ind.name,
            url: `https://fortworthsecuritycameras.com/${ind.slug}`
          }))
        }}
      />

      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Security Cameras by Industry', path: '/security-cameras-by-industry' },
            ]}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      {/* HERO BANNER */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-85 sm:opacity-90 bg-cover bg-center transition-all duration-500 animate-kenburns" style={{ backgroundImage: `url(${INDUSTRIES_HERO_IMAGE})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/30 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>100 Specialized Business & Property Landing Pages</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight text-shadow-hero">
            Security Camera System Installation by Industry
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Tailored 4K commercial security camera layouts designed specifically for the unique security, liability, access control, and regulatory demands of your business sector in Fort Worth and Tarrant County.
          </p>

          {/* Quick Stats Badges */}
          <div className="pt-2 flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100 Industry Specializations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>10 Main Business Sectors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>0 Monthly Subscription Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>1-Year Labor & Equipment Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH AND CATEGORY FILTER SECTION */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Search Input Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by business type (e.g., jewelry store, church, warehouse, daycare, bank)..."
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-bold text-slate-500 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Format Toggle & Category Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none text-xs sm:text-sm">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-bold shrink-0 transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Industries ({ALL_INDUSTRIES_DATA.length})
              </button>

              {INDUSTRY_CATEGORIES.map((cat) => {
                const catCount = ALL_INDUSTRIES_DATA.filter((ind) => ind.category === cat.name).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg font-semibold shrink-0 transition-colors flex items-center gap-2 ${
                      selectedCategory === cat.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {getCategoryIcon(cat.icon)}
                    <span>{cat.name} ({catCount})</span>
                  </button>
                );
              })}
            </div>

            {/* View Format Toggle Buttons */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0 self-end sm:self-auto border border-slate-200">
              <button
                onClick={() => setViewFormat('list')}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                  viewFormat === 'list'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Vertical List (1-{filteredIndustries.length})
              </button>
              <button
                onClick={() => setViewFormat('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                  viewFormat === 'grid'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Grid Cards
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* INDUSTRY LIST / GRID SECTION */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {filteredIndustries.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
              <Building2 className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">No matching industries found</h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm">
                We install commercial security cameras for every business type in Fort Worth. Contact our engineers directly for a custom design.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-5 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-lg hover:bg-blue-500"
              >
                Reset Search Filters
              </button>
            </div>
          ) : viewFormat === 'list' ? (
            /* CLEAN VERTICAL LIST FORMAT GOING STRAIGHT DOWN */
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Full Industry Directory ({filteredIndustries.length} Businesses)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Select any industry below to view dedicated 4K camera system specifications, common security risks, lens placements, and Fort Worth installation options.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-lg shrink-0">
                  Total: {filteredIndustries.length} Industries
                </span>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm divide-y divide-slate-100 overflow-hidden">
                {filteredIndustries.map((ind, index) => (
                  <NavLink
                    key={ind.slug}
                    to={`/${ind.slug}`}
                    onNavigate={onNavigate}
                    className="p-4 sm:p-5 hover:bg-blue-50/70 transition-colors cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <span className="text-xs font-mono font-extrabold text-slate-400 bg-slate-100 px-2.5 py-1.5 rounded-lg shrink-0 w-9 text-center">
                        {index + 1}.
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {ind.name}
                          </h3>
                          <span className="text-[11px] font-bold text-blue-700 bg-blue-100/80 px-2.5 py-0.5 rounded-full shrink-0">
                            {ind.category}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                          {ind.metaDescription}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white px-3.5 py-2 rounded-xl transition-all shrink-0 self-end sm:self-center">
                      <span>View Industry Page</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          ) : selectedCategory === 'all' && !searchQuery ? (
            /* Organized by Category Grid */
            <div className="space-y-16">
              {INDUSTRY_CATEGORIES.map((cat) => {
                const categoryIndustries = ALL_INDUSTRIES_DATA.filter(
                  (ind) => ind.category === cat.name
                );
                if (categoryIndustries.length === 0) return null;

                return (
                  <div key={cat.id} className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-blue-600 text-white">
                          {getCategoryIcon(cat.icon)}
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-black text-slate-900">{cat.name}</h2>
                          <p className="text-xs sm:text-sm text-slate-600">{cat.description}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full shrink-0">
                        {categoryIndustries.length} Industries
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {categoryIndustries.map((ind) => (
                        <NavLink
                          key={ind.slug}
                          to={`/${ind.slug}`}
                          onNavigate={onNavigate}
                          className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                        >
                          <div>
                            <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors mb-2">
                              {ind.name}
                            </h3>
                            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                              {ind.metaDescription}
                            </p>
                          </div>
                          <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                            <span>View Security Solutions</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Flat Grid for Search/Filtered results */
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <h2 className="text-xl font-bold text-slate-900">
                  Showing {filteredIndustries.length} Industry Solutions
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredIndustries.map((ind) => (
                  <NavLink
                    key={ind.slug}
                    to={`/${ind.slug}`}
                    onNavigate={onNavigate}
                    className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mb-2 inline-block">
                        {ind.category}
                      </span>
                      <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors mb-2">
                        {ind.name}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {ind.metaDescription}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                      <span>View Security Cameras</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Need a Custom Security Camera Layout for Your Property?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base leading-relaxed">
            Whether you operate a small boutique or an expansive industrial facility, our licensed Fort Worth team delivers turnkey 4K surveillance systems with zero monthly subscription fees.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal('Custom Industry Security System')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-colors text-base"
            >
              Get Free Commercial Quote
            </button>
            <a
              href="tel:8172312962"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg transition-colors text-base flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (817) 231-2962</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
