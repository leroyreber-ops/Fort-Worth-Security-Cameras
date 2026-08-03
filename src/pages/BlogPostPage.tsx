import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { NavLink } from '../components/NavLink';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Share2,
  ArrowRight,
  BookOpen,
  ExternalLink,
  Tag,
  MapPin,
  ChevronRight,
} from 'lucide-react';

interface BlogPostPageProps {
  post: BlogPost;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  post,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const fullCanonicalUrl = `https://fortworthsecuritycameras.com/${post.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${fullCanonicalUrl}/#article`,
        headline: post.h1,
        description: post.metaDescription,
        image: post.heroImage,
        datePublished: post.publishDate,
        dateModified: post.publishDate,
        mainEntityOfPage: fullCanonicalUrl,
        author: {
          '@type': 'Person',
          name: post.author,
          jobTitle: 'Security Systems Specialist',
        },
        publisher: {
          '@type': 'LocalBusiness',
          name: 'Fort Worth Security Cameras',
          telephone: '817-231-2962',
          url: 'https://fortworthsecuritycameras.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '2203 8th Ave.',
            addressLocality: 'Fort Worth',
            addressRegion: 'TX',
            postalCode: '76110',
          },
        },
      },
      {
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
            name: 'Blog',
            item: 'https://fortworthsecuritycameras.com/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: fullCanonicalUrl,
          },
        ],
      },
      ...(post.faqs && post.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: post.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  const relatedPosts = (post.relatedSlugs || [])
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter(Boolean) as BlogPost[];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2500);
    }
  };

  // Helper function to render text containing markdown internal links [Text](/path)
  const renderParagraphWithLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const label = match[1];
      const targetPath = match[2];
      parts.push(
        <NavLink
          key={match.index}
          to={targetPath}
          onNavigate={onNavigate}
          className="text-[#007EFF] font-bold hover:underline hover:text-blue-700 transition-colors inline-flex items-center gap-0.5 px-0.5"
        >
          {label}
          <ExternalLink className="w-3 h-3 inline ml-0.5" />
        </NavLink>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.metaDescription}
        canonicalUrl={fullCanonicalUrl}
        schema={articleSchema}
      />

      <div className="bg-[#F8FAFC] min-h-screen pb-20">
        <Breadcrumb
          items={[
            { label: 'Home', path: '/' },
            { label: 'Blog', path: '/blog' },
            { label: post.title, path: `/${post.slug}` },
          ]}
          onNavigate={onNavigate}
          variant="dark"
        />

        {/* Top Header / Breadcrumb Bar */}
        <section className="relative overflow-hidden bg-slate-950 text-white pt-10 pb-12 px-4 border-b border-slate-800">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 sm:opacity-85 transition-all duration-700 pointer-events-none"
            style={{ backgroundImage: `url(${post.heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40 pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center justify-between mb-6">
              <NavLink
                to="/blog"
                onNavigate={onNavigate}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-[#007EFF] transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Blog Articles
              </NavLink>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition border border-slate-700"
              >
                <Share2 className="w-3.5 h-3.5" />
                {copiedUrl ? 'URL Copied!' : 'Share Article'}
              </button>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007EFF]/20 text-[#007EFF] border border-[#007EFF]/40 text-xs font-bold uppercase tracking-wider mb-4">
              <Tag className="w-3.5 h-3.5" />
              Category: {post.category}
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              {post.h1}
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5 text-slate-200 font-medium">
                <User className="w-4 h-4 text-[#007EFF]" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#007EFF]" />
                Published {post.publishDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#007EFF]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Main Article Container */}
        <div className="max-w-4xl mx-auto px-4 -mt-6">
          {/* Hero Featured Image */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 mb-8 max-h-[460px]">
            <img
              src={post.heroImage}
              alt={post.heroImageAlt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Target Service / City Page Direct Link Banners */}
          {(post.targetServicePath || post.targetCityPath) && (
            <div className="space-y-4 mb-8">
              {post.targetCityPath && post.targetCityName && (
                <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white rounded-2xl p-6 border border-[#007EFF]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[#007EFF]/20 text-[#007EFF] border border-[#007EFF]/40 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#007EFF] uppercase tracking-wider block mb-0.5">
                        Official {post.targetCityName} City Hub Page
                      </span>
                      <h3 className="font-extrabold text-white text-base md:text-lg">
                        Security Camera Installation {post.targetCityName}, TX
                      </h3>
                      <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                        Explore local testimonials, neighborhood case studies, and transparent pricing in {post.targetCityName}.
                      </p>
                    </div>
                  </div>
                  <NavLink
                    to={post.targetCityPath!}
                    onNavigate={onNavigate}
                    className="px-5 py-3 bg-[#007EFF] hover:bg-blue-600 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-1.5 whitespace-nowrap"
                  >
                    Go to {post.targetCityName} City Page <ArrowRight className="w-4 h-4" />
                  </NavLink>
                </div>
              )}

              {post.targetServicePath && post.targetServiceName && (
                <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex-shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-0.5">
                        Official Service Landing Page
                      </span>
                      <h3 className="font-extrabold text-white text-base md:text-lg">
                        {post.targetServiceName}
                      </h3>
                      <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                        Explore our official installation packages, technical specs, pricing, and local project galleries.
                      </p>
                    </div>
                  </div>
                  <NavLink
                    to={post.targetServicePath!}
                    onNavigate={onNavigate}
                    className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-1.5 whitespace-nowrap"
                  >
                    Go to Service Page <ArrowRight className="w-4 h-4" />
                  </NavLink>
                </div>
              )}
            </div>
          )}

          {/* Quick Summary Callout Box */}
          <div className="bg-blue-50/90 border-l-4 border-[#007EFF] p-6 rounded-r-2xl mb-10 text-slate-800 text-sm md:text-base leading-relaxed shadow-sm">
            <strong className="text-slate-900 font-bold block mb-1 uppercase text-xs tracking-wider text-[#007EFF]">
              Key Summary & Overview
            </strong>
            {post.summary}
          </div>

          {/* Article Text Content Sections */}
          <article className="bg-white rounded-2xl p-6 md:p-10 border border-slate-200/90 shadow-sm space-y-10 text-slate-800 leading-relaxed text-base md:text-lg">
            {post.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight pt-2 border-b border-slate-100 pb-3">
                  {sec.heading}
                </h2>
                {sec.content.map((pText, pIdx) => (
                  <p key={pIdx} className="text-slate-700 text-sm md:text-base leading-relaxed">
                    {renderParagraphWithLinks(pText)}
                  </p>
                ))}
              </section>
            ))}

            {/* In-Article Call to Action Banner */}
            <div className="my-8 p-6 md:p-8 bg-slate-900 text-white rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-[#007EFF] flex items-center justify-center md:justify-start gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  Free Fort Worth Security Consultation
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  Need Professional Installation or a Custom System Estimate?
                </h3>
                <p className="text-xs md:text-sm text-slate-300">
                  Call our local technicians at (817) 231-2962 for transparent pricing and itemized quotes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href="tel:8172312962"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl text-center transition flex items-center justify-center gap-1.5 whitespace-nowrap shadow"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  (817) 231-2962
                </a>
                <button
                  onClick={() => onOpenQuoteModal(post.targetServiceName)}
                  className="px-5 py-2.5 bg-[#007EFF] hover:bg-blue-600 text-white font-bold text-xs rounded-xl text-center transition flex items-center justify-center gap-1.5 whitespace-nowrap shadow"
                >
                  Get Free Estimate
                </button>
              </div>
            </div>

            {/* Local FAQ Section */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="pt-8 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="w-5 h-5 text-[#007EFF]" />
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-3">
                  {post.faqs.map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50"
                    >
                      <button
                        onClick={() =>
                          setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)
                        }
                        className="w-full text-left p-4 flex items-center justify-between font-bold text-slate-900 text-sm md:text-base hover:bg-slate-100/80 transition"
                      >
                        <span>{faq.question}</span>
                        {openFaqIndex === fIdx ? (
                          <ChevronUp className="w-4 h-4 text-[#007EFF] flex-shrink-0 ml-2" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0 ml-2" />
                        )}
                      </button>

                      {openFaqIndex === fIdx && (
                        <div className="p-4 pt-2 text-slate-700 text-xs md:text-sm leading-relaxed border-t border-slate-200/80 bg-white">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
            {/* DFW Local City Hubs & Services Internal Link Hub */}
            <section className="pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#007EFF]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Local DFW Service Area & City Pages Directory
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600 mb-6 leading-relaxed">
                Fort Worth Security Cameras provides hardwired 4K CCTV installation, commercial surveillance, and structured cabling across Tarrant, Dallas, Denton, Johnson, Collin, and Ellis counties. Select your local city page below to review city-specific project examples, neighborhood case studies, and transparent local pricing:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                {[
                  { name: 'Arlington, TX', path: '/security-camera-installation-arlington-tx' },
                  { name: 'Fort Worth, TX', path: '/security-camera-installation-fort-worth-tx' },
                  { name: 'Dallas, TX', path: '/security-camera-installation-dallas-tx' },
                  { name: 'Keller, TX', path: '/security-camera-installation-keller-tx' },
                  { name: 'Southlake, TX', path: '/security-camera-installation-southlake-tx' },
                  { name: 'Burleson, TX', path: '/security-camera-installation-burleson-tx' },
                  { name: 'Mansfield, TX', path: '/security-camera-installation-mansfield-tx' },
                  { name: 'Grapevine, TX', path: '/security-camera-installation-grapevine-tx' },
                  { name: 'Colleyville, TX', path: '/security-camera-installation-colleyville-tx' },
                  { name: 'Denton, TX', path: '/security-camera-installation-denton-tx' },
                  { name: 'Frisco, TX', path: '/security-camera-installation-frisco-tx' },
                  { name: 'Plano, TX', path: '/security-camera-installation-plano-tx' },
                  { name: 'Irving, TX', path: '/security-camera-installation-irving-tx' },
                  { name: 'Grand Prairie, TX', path: '/security-camera-installation-grand-prairie-tx' },
                  { name: 'Haslet, TX', path: '/security-camera-installation-haslet-tx' },
                  { name: 'Weatherford, TX', path: '/security-camera-installation-weatherford-tx' },
                ].map((city) => (
                  <NavLink
                    key={city.path}
                    to={city.path}
                    onNavigate={onNavigate}
                    className="p-2.5 bg-slate-50 hover:bg-[#007EFF]/10 border border-slate-200 hover:border-[#007EFF] rounded-lg text-left transition-all text-xs font-semibold text-slate-800 hover:text-[#007EFF] flex items-center justify-between group"
                  >
                    <span>{city.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#007EFF] group-hover:translate-x-0.5 transition-transform" />
                  </NavLink>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
                <span className="font-bold text-slate-900 mr-2">Core Services:</span>
                <NavLink to="/residential-security-camera-installation-fort-worth" onNavigate={onNavigate} className="text-[#007EFF] hover:underline font-medium">Residential Security Cameras</NavLink>
                <span className="text-slate-300">•</span>
                <NavLink to="/commercial-security-camera-installation-fort-worth" onNavigate={onNavigate} className="text-[#007EFF] hover:underline font-medium">Commercial Security Cameras</NavLink>
                <span className="text-slate-300">•</span>
                <NavLink to="/network-cable-installation-fort-worth" onNavigate={onNavigate} className="text-[#007EFF] hover:underline font-medium">Cat6 Network Cabling</NavLink>
                <span className="text-slate-300">•</span>
                <NavLink to="/tv-wall-mounting-installation-fort-worth" onNavigate={onNavigate} className="text-[#007EFF] hover:underline font-medium">TV Wall Mounting</NavLink>
                <span className="text-slate-300">•</span>
                <NavLink to="/ring-video-doorbell-installation-fort-worth" onNavigate={onNavigate} className="text-[#007EFF] hover:underline font-medium">Video Doorbells</NavLink>
                <span className="text-slate-300">•</span>
                <NavLink to="/business-communications-fort-worth" onNavigate={onNavigate} className="text-[#007EFF] hover:underline font-medium">Business VoIP Systems</NavLink>
                <span className="text-slate-300">•</span>
                <NavLink to="/business-website-design-fort-worth" onNavigate={onNavigate} className="text-[#007EFF] hover:underline font-medium">Website Design & SEO</NavLink>
              </div>
            </section>
          </article>

          {/* Related Articles Grid */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                Related Security Guides
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relPost) => (
                  <NavLink
                    key={relPost.slug}
                    to={`/${relPost.slug}`}
                    onNavigate={onNavigate}
                    className="group bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-[#007EFF] transition cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#007EFF] uppercase tracking-wider block mb-1">
                        {relPost.category}
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#007EFF] transition-colors mb-2 line-clamp-2">
                        {relPost.h1}
                      </h3>
                      <p className="text-slate-600 text-xs line-clamp-2 mb-4">
                        {relPost.summary}
                      </p>
                    </div>

                    <span className="text-xs font-bold text-[#007EFF] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </NavLink>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};
