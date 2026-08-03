import React, { useState, useMemo } from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';
import { SEOHead } from '../components/SEOHead';
import { SafeImage } from '../components/SafeImage';
import { Breadcrumb } from '../components/Breadcrumb';
import { NavLink } from '../components/NavLink';
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  Filter,
  SlidersHorizontal,
  ExternalLink,
  ChevronRight,
  Tag,
} from 'lucide-react';

interface BlogIndexPageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

const SERVICE_QUICK_LINKS = [
  { name: 'Residential Security', path: '/residential-security-camera-installation-fort-worth', icon: '🏠' },
  { name: 'Commercial Security', path: '/commercial-security-camera-installation-fort-worth', icon: '🏢' },
  { name: 'Network Cabling', path: '/network-cable-installation-fort-worth', icon: '⚡' },
  { name: 'TV Wall Mounting', path: '/tv-wall-mounting-installation-fort-worth', icon: '📺' },
  { name: 'Video Doorbells', path: '/ring-video-doorbell-installation-fort-worth', icon: '🔔' },
  { name: 'Business Comms', path: '/business-communications-fort-worth', icon: '📞' },
  { name: 'Web Design & SEO', path: '/business-website-design-fort-worth', icon: '🌐' },
];

export const BlogIndexPage: React.FC<BlogIndexPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'readTime'>('newest');

  // Compute category list with counts
  const categoriesWithCounts = useMemo(() => {
    const counts: Record<string, number> = { All: BLOG_POSTS.length };
    BLOG_POSTS.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });

    const orderedCategories = [
      'All',
      'Residential Security',
      'Commercial Security',
      'Network Cabling',
      'TV Wall Mounting',
      'Video Doorbells',
      'Business Communications',
      'Website Design & SEO',
      'Security Tips',
      'Case Studies',
      'Company News',
      'Pricing & Cost',
      'Camera Optics & Tech',
    ];

    // Add any remaining categories dynamically
    Object.keys(counts).forEach((cat) => {
      if (!orderedCategories.includes(cat)) {
        orderedCategories.push(cat);
      }
    });

    return orderedCategories.map((cat) => ({
      name: cat,
      count: counts[cat] || 0,
    }));
  }, []);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let result = BLOG_POSTS.filter((post) => {
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !term ||
        post.title.toLowerCase().includes(term) ||
        post.summary.toLowerCase().includes(term) ||
        post.h1.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term) ||
        post.author.toLowerCase().includes(term) ||
        post.sections.some((sec) =>
          sec.heading.toLowerCase().includes(term) ||
          sec.content.some((c) => c.toLowerCase().includes(term))
        );

      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // Apply sorting
    return result.sort((a, b) => {
      if (sortBy === 'readTime') {
        const timeA = parseInt(a.readTime) || 0;
        const timeB = parseInt(b.readTime) || 0;
        return timeB - timeA;
      }
      if (sortBy === 'oldest') {
        return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
      }
      // default: newest
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    });
  }, [searchTerm, selectedCategory, sortBy]);

  const featuredPost = BLOG_POSTS[0];

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://fortworthsecuritycameras.com/blog/#blog',
    name: 'Fort Worth Security Camera Blog & Buyer Guides',
    description:
      'Fort Worth security camera installation guides, CCTV system buyer advice, DFW crime prevention tips, and technical IP camera and NVR tutorials.',
    url: 'https://fortworthsecuritycameras.com/blog',
    publisher: {
      '@type': 'LocalBusiness',
      name: 'Fort Worth Security Cameras',
      telephone: '817-231-2962',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2203 8th Ave',
        addressLocality: 'Fort Worth',
        addressRegion: 'TX',
        postalCode: '76110',
      },
    },
    blogPost: BLOG_POSTS.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.h1,
      url: `https://fortworthsecuritycameras.com/${p.slug}`,
      datePublished: p.publishDate,
      author: {
        '@type': 'Person',
        name: p.author,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="Fort Worth Security Camera Blog | Service Guides & DFW CCTV News"
        description="Fort Worth security camera blog with expert CCTV installation guides, cost breakdowns, service deep-dives, DFW crime prevention tips, and IP camera tutorials."
        canonicalUrl="https://fortworthsecuritycameras.com/blog"
        schema={blogSchema}
      />

      <div className="bg-[#F8FAFC] min-h-screen pb-20">
        {/* Header Hero Section */}
        <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-16 px-4 border-b border-slate-800">
          <SafeImage
            src="https://s3-media0.fl.yelpcdn.com/bphoto/lN2fRvXBGNafTaYPH6JmkQ/1000s.jpg"
            alt="Fort Worth security camera installation blog guides CCTV news header background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 sm:opacity-90 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <Breadcrumb
              items={[
                { label: 'Home', path: '/' },
                { label: 'Blog & Knowledge Center', path: '/blog' },
              ]}
              onNavigate={onNavigate}
              variant="dark"
              className="bg-transparent border-0 px-0 mb-6"
            />

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007EFF]/20 text-[#007EFF] border border-[#007EFF]/40 text-xs font-semibold uppercase tracking-wider mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                Fort Worth Low-Voltage & Security Knowledge Hub
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                Fort Worth Security Camera Blog, Service Guides & Local DFW News
              </h1>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Expert technical articles and buyer guides from licensed Fort Worth low-voltage technicians.
                Browse our categorized articles covering 4K CCTV, residential cameras, commercial security,
                network cabling, TV wall mounting, video doorbells, VoIP, and website design.
              </p>
            </div>

            {/* Controls Bar: Search & Sort */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
              {/* Search Box */}
              <div className="relative flex-grow max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search articles by service, keyword, or topic..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#007EFF]"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300">
                <SlidersHorizontal className="w-4 h-4 text-[#007EFF]" />
                <span>Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="newest" className="bg-slate-900 text-white">Newest First</option>
                  <option value="oldest" className="bg-slate-900 text-white">Oldest First</option>
                  <option value="readTime" className="bg-slate-900 text-white">Longest Read</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Service Navigation Bar */}
        <section className="bg-slate-900 border-b border-slate-800 text-white py-3 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
            <span className="font-bold text-slate-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px] whitespace-nowrap">
              <ExternalLink className="w-3.5 h-3.5 text-[#007EFF]" />
              Jump to Main Service Pages:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {SERVICE_QUICK_LINKS.map((srv) => (
                <NavLink
                  key={srv.path}
                  to={srv.path}
                  onNavigate={onNavigate}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-[#007EFF] hover:text-white text-slate-200 transition font-medium whitespace-nowrap flex items-center gap-1 border border-slate-700/80"
                >
                  <span>{srv.icon}</span>
                  <span>{srv.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter System Bar */}
        <section className="max-w-7xl mx-auto px-4 mt-8">
          <div className="bg-white rounded-2xl p-4 md:p-6 border border-slate-200/90 shadow-sm mb-8">
            <div className="flex items-center gap-2 mb-3 text-slate-900 font-bold text-sm">
              <Filter className="w-4 h-4 text-[#007EFF]" />
              <span>Filter Articles by Category:</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-wrap sm:flex-nowrap">
              {categoriesWithCounts.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                    selectedCategory === cat.name
                      ? 'bg-[#007EFF] text-white border-[#007EFF] shadow-md shadow-[#007EFF]/20'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] font-extrabold ${
                      selectedCategory === cat.name
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Hero Article */}
        {!searchTerm && selectedCategory === 'All' && featuredPost && (
          <section className="max-w-7xl mx-auto px-4 mb-12">
            <NavLink
              to={`/${featuredPost.slug}`}
              onNavigate={onNavigate}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 cursor-pointer transition-all hover:shadow-2xl hover:border-[#007EFF]/40"
            >
              <div className="lg:col-span-7 relative min-h-[280px] lg:min-h-[400px] overflow-hidden bg-slate-900">
                <img
                  src={featuredPost.heroImage}
                  alt={featuredPost.heroImageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="eager"
                />
                <div className="absolute top-4 left-4 bg-[#007EFF] text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider shadow">
                  Featured Fort Worth Guide
                </div>
              </div>

              <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1 font-semibold text-[#007EFF] bg-blue-50 px-2 py-0.5 rounded-md">
                      <Tag className="w-3 h-3" />
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {featuredPost.publishDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-[#007EFF] transition-colors mb-3 leading-snug">
                    {featuredPost.h1}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {featuredPost.summary}
                  </p>

                  {featuredPost.targetServicePath && (
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007EFF] bg-blue-50/80 border border-blue-200 px-3 py-1.5 rounded-lg mb-4">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Includes direct link to {featuredPost.targetServiceName || 'Service Page'}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    {featuredPost.author}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#007EFF] group-hover:translate-x-1 transition-transform">
                    Read complete article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </NavLink>
          </section>
        )}

        {/* Main Articles Grid */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {selectedCategory === 'All'
                  ? 'All Fort Worth Knowledge & Service Articles'
                  : `${selectedCategory} Articles`}
              </h2>
              <p className="text-slate-500 text-xs mt-1">
                Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>

            {(searchTerm || selectedCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="text-xs text-[#007EFF] hover:underline font-bold"
              >
                Reset filters
              </button>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">No Articles Found</h3>
              <p className="text-slate-500 text-sm mb-4">
                We couldn't find any articles matching "{searchTerm}" under category "{selectedCategory}".
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 bg-[#007EFF] text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition"
              >
                Clear search & filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <NavLink
                  key={post.slug}
                  to={`/${post.slug}`}
                  onNavigate={onNavigate}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#007EFF]/40 transition-all cursor-pointer flex flex-col overflow-hidden"
                >
                  <div className="relative h-48 bg-slate-900 overflow-hidden">
                    <img
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-slate-700 flex items-center gap-1">
                      <Tag className="w-3 h-3 text-[#007EFF]" />
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#007EFF]" />
                          {post.publishDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#007EFF]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#007EFF] transition-colors mb-2.5 line-clamp-2 leading-snug">
                        {post.h1}
                      </h3>

                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                        {post.summary}
                      </p>

                      {post.targetServicePath && (
                        <div className="mb-4 inline-flex items-center gap-1 text-[11px] font-bold text-[#007EFF] bg-blue-50 px-2 py-1 rounded-md">
                          <span>Links to {post.targetServiceName || 'Service Page'}</span>
                          <ChevronRight className="w-3 h-3" />
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium flex items-center gap-1">
                        <User className="w-3 h-3 text-slate-400" />
                        {post.author}
                      </span>
                      <span className="font-bold text-[#007EFF] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read guide
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          )}
        </section>

        {/* Local Expert Callout Section */}
        <section className="max-w-7xl mx-auto px-4 mt-16">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#007EFF]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007EFF]/20 border border-[#007EFF]/40 text-[#007EFF] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  Need Fort Worth Security & Low-Voltage Advice?
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white">
                  Talk Directly With a Fort Worth Licensed Low-Voltage Specialist
                </h2>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Have questions about 4K security cameras, Cat6 network cabling, TV mounting, video doorbells,
                  VoIP telecom, or local SEO? Our Fort Worth team offers free on-site walkthrough consultations and
                  itemized estimates for homes and businesses across Tarrant County.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Zero monthly monitoring fees
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Licensed & insured low-voltage contractor
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    100% free on-site estimates
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <a
                  href="tel:8172312962"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl text-center shadow-lg transition flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call (817) 231-2962
                </a>
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="px-6 py-3.5 bg-[#007EFF] hover:bg-blue-600 text-white font-bold text-sm rounded-xl text-center shadow-lg transition flex items-center justify-center gap-2"
                >
                  Request free on-site quote
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
