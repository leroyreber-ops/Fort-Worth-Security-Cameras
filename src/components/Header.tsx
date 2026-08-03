import React, { useState } from 'react';
import { Phone, Shield, Camera, ChevronDown, Menu, X, MapPin, CheckCircle2, Star, Search, Building2 } from 'lucide-react';
import { TOP_KEYWORDS } from '../data/keywordsData';
import { DFW_CITIES } from '../data/citiesData';
import { BRAND_ASSETS } from '../data/imagesData';
import { ALL_INDUSTRIES_DATA } from '../data/industriesData';
import { SafeImage } from './SafeImage';
import { NavLink } from './NavLink';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: () => void;
  onOpenSEOInspector: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenQuoteModal,
  onOpenSEOInspector: _onOpenSEOInspector,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [industrySearch, setIndustrySearch] = useState('');

  const phoneDisplay = '817-231-2962';
  const phoneNumberDigits = '8172312962';

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const filteredIndustries = ALL_INDUSTRIES_DATA.filter((ind) =>
    ind.name.toLowerCase().includes(industrySearch.toLowerCase()) ||
    ind.category.toLowerCase().includes(industrySearch.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] text-slate-900 shadow-sm">
      {/* Top Banner with NAP info & Gold Badge accents */}
      <div className="bg-[#F8F9FA] text-slate-700 py-2 px-4 text-xs border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs font-medium overflow-x-auto whitespace-nowrap scrollbar-none">
            <span className="flex items-center gap-1.5 text-slate-900 font-bold">
              <MapPin className="w-3.5 h-3.5 text-[#007EFF]" />
              <span>2203 8th Ave., Fort Worth, TX 76110</span>
            </span>
            <span className="hidden md:inline text-slate-300">•</span>
            <a
              href="https://maps.google.com/?q=Fort+Worth+Security+Cameras+2203+8th+Ave+Fort+Worth+TX+76110"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-amber-800 font-bold bg-amber-50 hover:bg-amber-100 transition-colors px-2.5 py-0.5 rounded border border-amber-300"
              title="View Fort Worth Security Cameras 5.0 Rated Google Business Profile"
            >
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 shrink-0" />
              <span>5.0 Stars (212 Verified Google Reviews)</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-full">
              <Shield className="w-3 h-3 text-amber-500" />
              <span>1-Year Warranty On All Installs</span>
            </span>
            <a
              href={`tel:${phoneNumberDigits}`}
              className="flex items-center gap-1.5 font-black text-[#007EFF] hover:text-[#3398FF] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call ({phoneDisplay})</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <NavLink
          to="/"
          onNavigate={handleNavClick}
          className="flex items-center gap-2.5 sm:gap-3.5 group text-left py-0.5"
        >
          <SafeImage
            src={BRAND_ASSETS.logo}
            fallbackSrc={BRAND_ASSETS.logoFallback}
            alt="Fort Worth Security Cameras & DFW Wholesale Security Logo"
            className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            loading="eager"
          />
          <div className="h-8 sm:h-9 w-px bg-slate-200 hidden xs:block" />
          <div className="flex flex-col justify-center">
            <div className="text-sm sm:text-base font-black tracking-wider text-slate-900 leading-none uppercase">
              FORT WORTH
            </div>
            <div className="text-xs sm:text-sm font-black tracking-tight text-[#007EFF] leading-none uppercase mt-0.5">
              SECURITY CAMERAS
            </div>
            <div className="text-[10px] sm:text-[10.5px] font-bold text-[#6B6B6B] uppercase tracking-wider flex items-center gap-1 mt-1">
              <span>Licensed & Insured CCTV Team</span>
              <span className="text-amber-500 font-bold hidden sm:inline">★</span>
            </div>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-bold text-slate-800">
          {/* Home */}
          <NavLink
            to="/"
            onNavigate={handleNavClick}
            className={`px-3.5 py-2 rounded-lg transition-colors ${
              currentPath === '/' ? 'text-[#007EFF] bg-blue-50 font-black' : 'hover:text-[#007EFF] hover:bg-slate-100'
            }`}
          >
            Home
          </NavLink>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-3.5 py-2 rounded-lg flex items-center gap-1 hover:text-[#007EFF] hover:bg-slate-100 transition-colors font-bold text-slate-800">
              <span>Services</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>

            {activeDropdown === 'services' && (
              <div className="absolute top-full left-0 w-96 p-2 bg-white border border-[#E5E5E5] rounded-xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {/* Section 1: Security & Hardware Installation Services */}
                <div className="p-2 text-[11px] font-extrabold text-[#007EFF] uppercase tracking-wider border-b border-[#E5E5E5] mb-1 flex items-center justify-between">
                  <span>Security & Installation Services</span>
                  <span className="text-[10px] text-emerald-700 font-mono font-extrabold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    On-Site Tech
                  </span>
                </div>
                <div className="space-y-0.5">
                  <NavLink
                    to="/residential-security-camera-installation-fort-worth"
                    onNavigate={handleNavClick}
                    className={`w-full text-left p-2 rounded-lg text-xs font-semibold hover:bg-blue-50 hover:text-[#007EFF] transition-colors flex items-center justify-between ${
                      currentPath === '/residential-security-camera-installation-fort-worth' ? 'text-[#007EFF] font-bold bg-blue-50' : 'text-slate-800'
                    }`}
                  >
                    <span>Residential Security Camera Installation</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">Home</span>
                  </NavLink>
                  <NavLink
                    to="/commercial-security-camera-installation-fort-worth"
                    onNavigate={handleNavClick}
                    className={`w-full text-left p-2 rounded-lg text-xs font-semibold hover:bg-blue-50 hover:text-[#007EFF] transition-colors flex items-center justify-between ${
                      currentPath === '/commercial-security-camera-installation-fort-worth' ? 'text-[#007EFF] font-bold bg-blue-50' : 'text-slate-800'
                    }`}
                  >
                    <span>Commercial Security Camera Installation</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 font-bold">Business</span>
                  </NavLink>
                  <NavLink
                    to="/network-cable-installation-fort-worth"
                    onNavigate={handleNavClick}
                    className={`w-full text-left p-2 rounded-lg text-xs font-semibold hover:bg-blue-50 hover:text-[#007EFF] transition-colors flex items-center justify-between ${
                      currentPath === '/network-cable-installation-fort-worth' ? 'text-[#007EFF] font-bold bg-blue-50' : 'text-slate-800'
                    }`}
                  >
                    <span>Network Cable Runs & Structured Cabling</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">Cat6/Coax</span>
                  </NavLink>
                  <NavLink
                    to="/tv-wall-mounting-installation-fort-worth"
                    onNavigate={handleNavClick}
                    className={`w-full text-left p-2 rounded-lg text-xs font-semibold hover:bg-blue-50 hover:text-[#007EFF] transition-colors flex items-center justify-between ${
                      currentPath === '/tv-wall-mounting-installation-fort-worth' ? 'text-[#007EFF] font-bold bg-blue-50' : 'text-slate-800'
                    }`}
                  >
                    <span>TV Wall Mounting & Display Setup</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">Mounting</span>
                  </NavLink>
                  <NavLink
                    to="/ring-video-doorbell-installation-fort-worth"
                    onNavigate={handleNavClick}
                    className={`w-full text-left p-2 rounded-lg text-xs font-semibold hover:bg-blue-50 hover:text-[#007EFF] transition-colors flex items-center justify-between ${
                      currentPath === '/ring-video-doorbell-installation-fort-worth' ? 'text-[#007EFF] font-bold bg-blue-50' : 'text-slate-800'
                    }`}
                  >
                    <span>Ring Video Doorbell Installation</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">Doorbell</span>
                  </NavLink>
                </div>

                {/* VISUAL SEPARATOR LINE */}
                <div className="my-2 border-t-2 border-slate-200" />

                {/* Section 2: Business Solutions & Technology Services */}
                <div className="p-2 text-[11px] font-extrabold text-amber-600 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Business Communications & Tech Solutions</span>
                  <span className="text-[10px] text-amber-700 font-mono font-extrabold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                    Commercial
                  </span>
                </div>
                <div className="space-y-0.5">
                  <NavLink
                    to="/business-communications-fort-worth"
                    onNavigate={handleNavClick}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-bold hover:bg-amber-50 hover:text-amber-800 transition-colors flex items-center justify-between ${
                      currentPath === '/business-communications-fort-worth' ? 'text-amber-800 font-black bg-amber-50' : 'text-slate-900'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span>Business Communications</span>
                      <span className="text-[10px] text-slate-500 font-normal">Phones, Fiber Internet & Cable (AT&T, Spectrum, Comcast)</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold shrink-0">Telecom</span>
                  </NavLink>
                  <NavLink
                    to="/business-website-design-fort-worth"
                    onNavigate={handleNavClick}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-bold hover:bg-amber-50 hover:text-amber-800 transition-colors flex items-center justify-between ${
                      currentPath === '/business-website-design-fort-worth' ? 'text-amber-800 font-black bg-amber-50' : 'text-slate-900'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span>Business Website Design</span>
                      <span className="text-[10px] text-slate-500 font-normal">Custom Web Development & Local Fort Worth SEO</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold shrink-0">Digital</span>
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          {/* DFW Cities Directory Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('cities')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-3.5 py-2 rounded-lg flex items-center gap-1 hover:text-[#007EFF] hover:bg-slate-100 transition-colors">
              <span>Service Cities</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>

            {activeDropdown === 'cities' && (
              <div className="absolute top-full left-0 w-72 p-2 bg-white border border-[#E5E5E5] rounded-xl shadow-xl z-50">
                <div className="p-2 text-xs font-bold text-[#007EFF] uppercase tracking-wider border-b border-[#E5E5E5] mb-1">
                  Tarrant & DFW Cities
                </div>
                <div className="max-h-80 overflow-y-auto space-y-1">
                  {DFW_CITIES.map((city) => (
                    <NavLink
                      key={city.slug}
                      to={`/${city.slug}`}
                      onNavigate={handleNavClick}
                      className="w-full text-left px-2.5 py-1.5 rounded-md text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#007EFF] transition-colors flex items-center justify-between"
                    >
                      <span>{city.cityName}, TX</span>
                      <span className="text-[10px] text-slate-400 font-normal">{city.county.replace(' County', '')}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Security Cameras by Industry Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <NavLink
              to="/security-cameras-by-industry"
              onNavigate={handleNavClick}
              className={`px-3.5 py-2 rounded-lg flex items-center gap-1 transition-colors font-bold ${
                currentPath.includes('security-cameras-') || currentPath.includes('industri')
                  ? 'text-[#007EFF] bg-blue-50 font-black'
                  : 'hover:text-[#007EFF] hover:bg-slate-100 text-slate-800'
              }`}
            >
              <span>Industries</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </NavLink>

            {activeDropdown === 'industries' && (
              <div className="absolute top-full left-0 w-[440px] p-3 bg-white border border-[#E5E5E5] rounded-xl shadow-2xl z-50">
                <div className="p-2 text-xs font-extrabold text-[#007EFF] uppercase tracking-wider border-b border-[#E5E5E5] mb-2 flex items-center justify-between">
                  <span>Security Cameras by Industry</span>
                  <span className="text-[10px] text-emerald-700 font-mono font-extrabold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    100 Industries
                  </span>
                </div>

                <NavLink
                  to="/security-cameras-by-industry"
                  onNavigate={handleNavClick}
                  className="w-full text-left p-2.5 rounded-lg text-xs font-black bg-blue-600 text-white hover:bg-blue-500 transition-colors flex items-center justify-between mb-2 shadow-sm"
                >
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    <span>Browse All 100 Industries Hub</span>
                  </span>
                  <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded font-bold">View Hub</span>
                </NavLink>

                {/* Dropdown Search Bar */}
                <div className="relative mb-2">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search 100 industries (e.g., church, bank)..."
                    value={industrySearch}
                    onChange={(e) => setIndustrySearch(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Scrollable list of ALL 100 industries going straight down a line */}
                <div className="max-h-96 overflow-y-auto pr-1 border-t border-slate-100 pt-1">
                  <div className="flex flex-col divide-y divide-slate-100 text-xs">
                    {filteredIndustries.map((ind, index) => (
                      <NavLink
                        key={ind.slug}
                        to={`/${ind.slug}`}
                        onNavigate={handleNavClick}
                        className="py-2 px-2.5 hover:bg-blue-50 text-slate-800 hover:text-blue-600 font-semibold text-left flex items-center justify-between group transition-colors rounded-md"
                        title={ind.name}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="text-[10px] font-mono text-slate-400 w-5 shrink-0 text-right">{index + 1}.</span>
                          <span className="truncate font-bold text-slate-800 group-hover:text-blue-600">{ind.name}</span>
                        </div>
                        <span className="text-[10px] bg-slate-100 group-hover:bg-blue-100 text-slate-500 group-hover:text-blue-700 px-2 py-0.5 rounded-full font-medium shrink-0 ml-2">
                          {ind.category}
                        </span>
                      </NavLink>
                    ))}
                  </div>
                  {filteredIndustries.length === 0 && (
                    <div className="p-3 text-center text-xs text-slate-500">
                      No matching industry found.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Direct Navigation */}
          <NavLink
            to="/about-us-fort-worth"
            onNavigate={handleNavClick}
            className={`px-3.5 py-2 rounded-lg transition-colors ${
              currentPath.includes('/about') ? 'text-[#007EFF] bg-blue-50 font-black' : 'hover:text-[#007EFF] hover:bg-slate-100'
            }`}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us-fort-worth"
            onNavigate={handleNavClick}
            className={`px-3.5 py-2 rounded-lg transition-colors ${
              currentPath.includes('/contact') ? 'text-[#007EFF] bg-blue-50 font-black' : 'hover:text-[#007EFF] hover:bg-slate-100'
            }`}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/blog"
            onNavigate={handleNavClick}
            className={`px-3.5 py-2 rounded-lg transition-colors ${
              currentPath.startsWith('/blog') ? 'text-[#007EFF] bg-blue-50 font-black' : 'hover:text-[#007EFF] hover:bg-slate-100'
            }`}
          >
            Blog & Guides
          </NavLink>
        </nav>

        {/* Right Action Callouts */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="sms:18172312962?body=Can%20you%20assist%20me%20with%20a%20security%20camera%20installation%3F"
            className="px-4 py-2.5 min-h-[44px] flex items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-xs shadow-md transition-all whitespace-nowrap"
            title="Send direct text message to (817) 231-2962"
          >
            Text Us Now
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="px-5 py-2.5 min-h-[44px] flex items-center justify-center rounded-xl bg-gradient-to-r from-[#007EFF] to-blue-600 hover:from-[#3398FF] hover:to-blue-500 text-white font-black text-xs shadow-md border border-blue-400/30 transition-all whitespace-nowrap"
          >
            Get Free Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-100 border border-[#E5E5E5] text-slate-700 hover:text-slate-900 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden p-4 bg-white border-b border-[#E5E5E5] space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <NavLink
              to="/"
              onNavigate={handleNavClick}
              className="w-full text-left px-3.5 py-3 min-h-[44px] flex items-center rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-100 block"
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us-fort-worth"
              onNavigate={handleNavClick}
              className="w-full text-left px-3.5 py-3 min-h-[44px] flex items-center rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-100 block"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us-fort-worth"
              onNavigate={handleNavClick}
              className="w-full text-left px-3.5 py-3 min-h-[44px] flex items-center rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-100 block"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/blog"
              onNavigate={handleNavClick}
              className="w-full text-left px-3.5 py-3 min-h-[44px] flex items-center rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-100 block"
            >
              Blog & Security Guides
            </NavLink>
            <NavLink
              to="/sitemap"
              onNavigate={handleNavClick}
              className="w-full text-left px-3.5 py-3 min-h-[44px] flex items-center rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-100 block"
            >
              Service Directory
            </NavLink>
          </div>

          {/* Services in Mobile */}
          <div>
            <div className="text-xs font-extrabold text-[#007EFF] uppercase tracking-wider px-2 py-1 border-b border-[#E5E5E5] mb-2 flex justify-between items-center">
              <span>Security & Installation Services</span>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">On-Site</span>
            </div>
            <div className="space-y-1">
              <NavLink
                to="/residential-security-camera-installation-fort-worth"
                onNavigate={handleNavClick}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#007EFF] block"
              >
                Residential Security Camera Installation
              </NavLink>
              <NavLink
                to="/commercial-security-camera-installation-fort-worth"
                onNavigate={handleNavClick}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#007EFF] block"
              >
                Commercial Security Camera Installation
              </NavLink>
              <NavLink
                to="/network-cable-installation-fort-worth"
                onNavigate={handleNavClick}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#007EFF] block"
              >
                Network Cable Runs & Structured Cabling
              </NavLink>
              <NavLink
                to="/tv-wall-mounting-installation-fort-worth"
                onNavigate={handleNavClick}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#007EFF] block"
              >
                TV Wall Mounting & Display Setup
              </NavLink>
              <NavLink
                to="/ring-video-doorbell-installation-fort-worth"
                onNavigate={handleNavClick}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#007EFF] block"
              >
                Ring Video Doorbell Installation
              </NavLink>
            </div>

            {/* SEPARATOR LINE */}
            <div className="my-3 border-t-2 border-slate-200" />

            <div className="text-xs font-extrabold text-amber-600 uppercase tracking-wider px-2 py-1 mb-2 flex justify-between items-center">
              <span>Business Communications & Tech</span>
              <span className="text-[10px] text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded font-bold">Business</span>
            </div>
            <div className="space-y-1">
              <NavLink
                to="/business-communications-fort-worth"
                onNavigate={handleNavClick}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-slate-900 bg-amber-50/60 hover:bg-amber-100/80 border border-amber-200 block"
              >
                Business Communications (Phones, Fiber Internet & Cable)
              </NavLink>
              <NavLink
                to="/business-website-design-fort-worth"
                onNavigate={handleNavClick}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-slate-900 bg-indigo-50/60 hover:bg-indigo-100/80 border border-indigo-200 block"
              >
                Business Website Design & Local SEO
              </NavLink>
            </div>
          </div>

          {/* Industries in Mobile Drawer */}
          <div>
            <div className="text-xs font-extrabold text-[#007EFF] uppercase tracking-wider px-2 py-1 border-b border-[#E5E5E5] mb-2 flex justify-between items-center">
              <span>Security Cameras by Industry</span>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">100 Types</span>
            </div>
            <NavLink
              to="/security-cameras-by-industry"
              onNavigate={handleNavClick}
              className="w-full text-left p-2 rounded-lg text-xs font-black bg-blue-600 text-white hover:bg-blue-500 transition-colors flex items-center justify-between mb-2 shadow-sm"
            >
              <span>Browse All 100 Industries Hub</span>
              <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded font-bold">View Hub</span>
            </NavLink>

            <div className="max-h-64 overflow-y-auto pr-1 flex flex-col divide-y divide-slate-100 border-t border-slate-100 pt-1 text-xs">
              {ALL_INDUSTRIES_DATA.map((ind, index) => (
                <NavLink
                  key={ind.slug}
                  to={`/${ind.slug}`}
                  onNavigate={handleNavClick}
                  className="py-2 px-2 hover:bg-blue-50 text-slate-800 hover:text-blue-600 font-semibold flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-[10px] font-mono text-slate-400 w-5 shrink-0 text-right">{index + 1}.</span>
                    <span className="truncate font-medium">{ind.name}</span>
                  </div>
                  <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-medium shrink-0 ml-1">
                    {ind.category}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* DFW Cities in Mobile */}
          <div>
            <div className="text-xs font-bold text-[#007EFF] uppercase tracking-wider px-2 py-1 border-b border-[#E5E5E5] mb-2">
              Local Service Cities
            </div>
            <div className="grid grid-cols-2 gap-1">
              {DFW_CITIES.map((city) => (
                <NavLink
                  key={city.slug}
                  to={`/${city.slug}`}
                  onNavigate={handleNavClick}
                  className="text-left px-2 py-1.5 rounded text-xs font-medium text-slate-700 hover:text-[#007EFF] hover:bg-blue-50 truncate block"
                >
                  {city.cityName}, TX
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] active:bg-[#66B2FF] text-white font-black text-sm text-center shadow-md"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

