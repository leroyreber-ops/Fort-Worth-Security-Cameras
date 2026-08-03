import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyContactBar } from './components/StickyContactBar';
import { FloatingTextUsButton } from './components/FloatingTextUsButton';
import { QuoteModal } from './components/QuoteModal';
import { SEOAuditInspector } from './components/SEOAuditInspector';
import { HomePage } from './pages/HomePage';

// Code-split secondary routes to keep the initial JS bundle small (Core Web Vitals).
// HomePage stays eager since it's the highest-traffic, most common first paint.
const KeywordLandingPage = lazy(() => import('./pages/KeywordLandingPage').then(m => ({ default: m.KeywordLandingPage })));
const CityLandingPage = lazy(() => import('./pages/CityLandingPage').then(m => ({ default: m.CityLandingPage })));
const SitemapPage = lazy(() => import('./pages/SitemapPage').then(m => ({ default: m.SitemapPage })));
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage').then(m => ({ default: m.BlogIndexPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then(m => ({ default: m.BlogPostPage })));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const QuotePage = lazy(() => import('./pages/QuotePage').then(m => ({ default: m.QuotePage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage').then(m => ({ default: m.AboutUsPage })));
const ResidentialSecurityPage = lazy(() => import('./pages/ResidentialSecurityPage').then(m => ({ default: m.ResidentialSecurityPage })));
const CommercialSecurityPage = lazy(() => import('./pages/CommercialSecurityPage').then(m => ({ default: m.CommercialSecurityPage })));
const NetworkCablingPage = lazy(() => import('./pages/NetworkCablingPage').then(m => ({ default: m.NetworkCablingPage })));
const TvMountingPage = lazy(() => import('./pages/TvMountingPage').then(m => ({ default: m.TvMountingPage })));
const RingDoorbellPage = lazy(() => import('./pages/RingDoorbellPage').then(m => ({ default: m.RingDoorbellPage })));
const BusinessCommunicationsPage = lazy(() => import('./pages/BusinessCommunicationsPage').then(m => ({ default: m.BusinessCommunicationsPage })));
const BusinessWebsiteDesignPage = lazy(() => import('./pages/BusinessWebsiteDesignPage').then(m => ({ default: m.BusinessWebsiteDesignPage })));
const FortWorthSecurityCameraInstallationPage = lazy(() => import('./pages/FortWorthSecurityCameraInstallationPage').then(m => ({ default: m.FortWorthSecurityCameraInstallationPage })));
const BurlesonSecurityCameraInstallationPage = lazy(() => import('./pages/BurlesonSecurityCameraInstallationPage').then(m => ({ default: m.BurlesonSecurityCameraInstallationPage })));
const IndustryLandingPage = lazy(() => import('./pages/IndustryLandingPage').then(m => ({ default: m.IndustryLandingPage })));
const IndustriesHubPage = lazy(() => import('./pages/IndustriesHubPage').then(m => ({ default: m.IndustriesHubPage })));
const RetailSecurityPage = lazy(() => import('./pages/RetailSecurityPage').then(m => ({ default: m.RetailSecurityPage })));
const HospitalitySecurityPage = lazy(() => import('./pages/HospitalitySecurityPage').then(m => ({ default: m.HospitalitySecurityPage })));
const CorporateSecurityPage = lazy(() => import('./pages/CorporateSecurityPage').then(m => ({ default: m.CorporateSecurityPage })));
const HealthcareSecurityPage = lazy(() => import('./pages/HealthcareSecurityPage').then(m => ({ default: m.HealthcareSecurityPage })));
const EducationSecurityPage = lazy(() => import('./pages/EducationSecurityPage').then(m => ({ default: m.EducationSecurityPage })));
const FaithSecurityPage = lazy(() => import('./pages/FaithSecurityPage').then(m => ({ default: m.FaithSecurityPage })));
const IndustrialSecurityPage = lazy(() => import('./pages/IndustrialSecurityPage').then(m => ({ default: m.IndustrialSecurityPage })));
const AutomotiveSecurityPage = lazy(() => import('./pages/AutomotiveSecurityPage').then(m => ({ default: m.AutomotiveSecurityPage })));
const FinancialSecurityPage = lazy(() => import('./pages/FinancialSecurityPage').then(m => ({ default: m.FinancialSecurityPage })));
import { TOP_KEYWORDS } from './data/keywordsData';
import { DFW_CITIES } from './data/citiesData';
import { BLOG_POSTS, getBlogPostBySlug } from './data/blogData';
import { getIndustryBySlug } from './data/industriesData';
import { getRedirectDestination } from './data/redirects';
import { logPageView } from './lib/trafficTracker';

const isBrowser = typeof window !== 'undefined';

export default function App({ initialPath }: { initialPath?: string }) {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const raw = initialPath ?? (isBrowser ? window.location.pathname : '/') ?? '/';
    const redirectDest = getRedirectDestination(raw);
    if (redirectDest) {
      if (isBrowser) window.history.replaceState({}, '', redirectDest);
      return redirectDest;
    }
    return raw;
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState<string | undefined>(
    undefined
  );
  const [isSEOInspectorOpen, setIsSEOInspectorOpen] = useState(false);

  // Sync with browser history popstate and log page views
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      const redirectDest = getRedirectDestination(path);
      if (redirectDest) {
        window.history.replaceState({}, '', redirectDest);
        setCurrentPath(redirectDest);
        logPageView(redirectDest);
      } else {
        setCurrentPath(path);
        logPageView(path);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Log initial page view for the starting path
    logPageView(currentPath);

    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    window.history.pushState({}, '', cleanPath);
    setCurrentPath(cleanPath);
    logPageView(cleanPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (serviceName?: string) => {
    setQuotePreselectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  // Dedicated Route: Internal Back Admin Tracking Page
  if (currentPath === '/admin') {
    return <AdminDashboard onNavigate={handleNavigate} />;
  }

  // Normalize path & slug
  const normalizedPath =
    (currentPath.toLowerCase().replace(/\/$/, '') as string) || '/';
  const cleanSlug = normalizedPath.replace(/^\//, '');

  const matchedKeyword = TOP_KEYWORDS.find(
    (kw) => kw.slug === cleanSlug || kw.slug === `/${cleanSlug}`
  );

  const matchedCity = DFW_CITIES.find(
    (city) => city.slug === cleanSlug || city.slug === `/${cleanSlug}`
  );

  const matchedBlogPost = getBlogPostBySlug(cleanSlug);
  const matchedIndustry = getIndustryBySlug(cleanSlug);

  const renderCurrentPage = () => {
    if (
      normalizedPath === '/security-cameras-by-industry' ||
      normalizedPath === '/industries' ||
      normalizedPath === '/industry'
    ) {
      return (
        <IndustriesHubPage
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (matchedIndustry) {
      return (
        <IndustryLandingPage
          industryData={matchedIndustry}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/retail' ||
      normalizedPath === '/retail-security-cameras' ||
      normalizedPath === '/security-cameras-retail'
    ) {
      return (
        <RetailSecurityPage
          industrySlug={cleanSlug}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/hospitality' ||
      normalizedPath === '/hospitality-security-cameras' ||
      normalizedPath === '/restaurant-security-cameras'
    ) {
      return (
        <HospitalitySecurityPage
          industrySlug={cleanSlug}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/corporate' ||
      normalizedPath === '/corporate-security-cameras' ||
      normalizedPath === '/office-security-cameras'
    ) {
      return (
        <CorporateSecurityPage
          industrySlug={cleanSlug}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/healthcare' ||
      normalizedPath === '/healthcare-security-cameras' ||
      normalizedPath === '/medical-security-cameras'
    ) {
      return (
        <HealthcareSecurityPage
          industrySlug={cleanSlug}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/education' ||
      normalizedPath === '/education-security-cameras' ||
      normalizedPath === '/school-security-cameras'
    ) {
      return (
        <EducationSecurityPage
          industrySlug={cleanSlug}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/faith' ||
      normalizedPath === '/faith-security-cameras' ||
      normalizedPath === '/church-security-cameras'
    ) {
      return (
        <FaithSecurityPage
          industrySlug={cleanSlug}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/industrial' ||
      normalizedPath === '/industrial-security-cameras'
    ) {
      return (
        <IndustrialSecurityPage
          industrySlug={cleanSlug}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/automotive' ||
      normalizedPath === '/automotive-security-cameras' ||
      normalizedPath === '/dealership-security-cameras'
    ) {
      return (
        <AutomotiveSecurityPage
          industrySlug={cleanSlug}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/financial' ||
      normalizedPath === '/financial-security-cameras' ||
      normalizedPath === '/bank-security-cameras'
    ) {
      return (
        <FinancialSecurityPage
          industrySlug={cleanSlug}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/residential-industry' ||
      normalizedPath === '/residential-security-cameras'
    ) {
      return (
        <ResidentialSecurityPage
          industrySlug={cleanSlug}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }
    if (
      normalizedPath === '/security-camera-installation-fort-worth-tx' ||
      normalizedPath === '/security-camera-installation-fort-worth'
    ) {
      const city = DFW_CITIES.find((c) => c.cityName === 'Fort Worth') || DFW_CITIES[0];
      return (
        <CityLandingPage
          cityData={city}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/security-camera-installation-burleson-tx' ||
      normalizedPath === '/security-camera-installation-burleson'
    ) {
      const city = DFW_CITIES.find((c) => c.cityName === 'Burleson') || DFW_CITIES[5];
      return (
        <CityLandingPage
          cityData={city}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/residential-security-camera-installation-fort-worth' ||
      normalizedPath === '/home-security-cameras-fort-worth' ||
      normalizedPath === '/residential-security-cameras-fort-worth' ||
      normalizedPath === '/residential'
    ) {
      return (
        <ResidentialSecurityPage
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/commercial-security-camera-installation-fort-worth' ||
      normalizedPath === '/business-security-cameras-fort-worth' ||
      normalizedPath === '/commercial-security-cameras-fort-worth' ||
      normalizedPath === '/commercial'
    ) {
      return (
        <CommercialSecurityPage
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/network-cable-installation-fort-worth' ||
      normalizedPath === '/network-cabling-fort-worth' ||
      normalizedPath === '/structured-cabling-fort-worth' ||
      normalizedPath === '/cat6-installation-fort-worth' ||
      normalizedPath === '/network-cable-installation'
    ) {
      return (
        <NetworkCablingPage
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/tv-wall-mounting-installation-fort-worth' ||
      normalizedPath === '/tv-wall-mounting-fort-worth' ||
      normalizedPath === '/tv-mounting-fort-worth' ||
      normalizedPath === '/display-setup-fort-worth'
    ) {
      return (
        <TvMountingPage
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/ring-video-doorbell-installation-fort-worth' ||
      normalizedPath === '/ring-doorbell-installation-fort-worth' ||
      normalizedPath === '/doorbell-camera-installation-fort-worth' ||
      normalizedPath === '/video-doorbell-fort-worth'
    ) {
      return (
        <RingDoorbellPage
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/business-communications-fort-worth' ||
      normalizedPath === '/business-phone-systems-fort-worth' ||
      normalizedPath === '/voip-installation-fort-worth' ||
      normalizedPath === '/telecom-fort-worth'
    ) {
      return (
        <BusinessCommunicationsPage
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/business-website-design-fort-worth' ||
      normalizedPath === '/website-design-fort-worth' ||
      normalizedPath === '/dfw-web-design' ||
      normalizedPath === '/digital-marketing-fort-worth'
    ) {
      return (
        <BusinessWebsiteDesignPage
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/contact' ||
      normalizedPath === '/contact-us' ||
      normalizedPath === '/contact-us-fort-worth'
    ) {
      return (
        <ContactPage
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (
      normalizedPath === '/about' ||
      normalizedPath === '/about-us' ||
      normalizedPath === '/about-us-fort-worth'
    ) {
      return (
        <AboutUsPage
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (normalizedPath === '/free-security-camera-quote-fort-worth') {
      return <QuotePage onNavigate={handleNavigate} />;
    }

    if (normalizedPath === '/sitemap') {
      return <SitemapPage onNavigate={handleNavigate} />;
    }

    if (normalizedPath === '/blog') {
      return (
        <BlogIndexPage
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (matchedBlogPost) {
      return (
        <BlogPostPage
          post={matchedBlogPost}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (normalizedPath.startsWith('/blog/')) {
      // Fallback for unmatched blog paths: render Blog Index
      return (
        <BlogIndexPage
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (matchedKeyword) {
      return (
        <KeywordLandingPage
          keywordData={matchedKeyword}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    if (matchedCity) {
      return (
        <CityLandingPage
          cityData={matchedCity}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    // Default Fallback: Home Page
    return (
      <HomePage
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-[#007EFF] selection:text-white">
      {/* Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenSEOInspector={() => setIsSEOInspectorOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-[40vh]" />}>
          {renderCurrentPage()}
        </Suspense>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Sticky Contact Bar */}
      <StickyContactBar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Floating Scrolling Text Us Now Widget */}
      <FloatingTextUsButton />

      {/* Interactive Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={quotePreselectedService}
      />

      {/* SEO Technical Inspector Modal */}
      <SEOAuditInspector
        isOpen={isSEOInspectorOpen}
        onClose={() => setIsSEOInspectorOpen(false)}
        currentPath={currentPath}
      />
    </div>
  );
}