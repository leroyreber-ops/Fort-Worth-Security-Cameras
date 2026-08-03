import React, { useState } from 'react';
import { Phone, Mail, MapPin, Camera, Shield, MessageSquare, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { TOP_KEYWORDS } from '../data/keywordsData';
import { DFW_CITIES } from '../data/citiesData';
import { BRAND_ASSETS } from '../data/imagesData';
import { SafeImage } from './SafeImage';
import { NavLink } from './NavLink';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const phoneDisplay = '817-231-2962';
  const phoneNumberDigits = '8172312962';
  const emailAddress = 'Leroy@fortworthsecuritycameras.com';

  const [openPopular, setOpenPopular] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);
  const [openCities, setOpenCities] = useState(false);

  return (
    <footer className="bg-[#111111] text-white border-t border-slate-800/80 pt-8 pb-24 lg:pb-16 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Main Footer Directory Columns & Collapsible Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs items-stretch">
          {/* Column 1: Company Info & Single Official NAP Block */}
          <div className="flex flex-col justify-between bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#0B132B] p-5 rounded-2xl border border-slate-800 shadow-md">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <SafeImage
                  src={BRAND_ASSETS.logo}
                  fallbackSrc={BRAND_ASSETS.logoFallback}
                  alt="DFW Wholesale Security & Fort Worth Security Cameras Logo"
                  className="h-10 w-auto object-contain bg-white p-1 rounded-lg shadow-sm"
                />
                <div className="text-sm font-black text-white tracking-tight leading-snug">
                  FORT WORTH <br />
                  <span className="text-[#007EFF]">SECURITY CAMERAS</span>
                </div>
              </div>

              <p className="text-[#CFCFCF] text-[11px] leading-relaxed">
                Fort Worth's premier security camera installation experts since 2007. Specializing in 4K IP cameras, PoE networks, wireless surveillance, and commercial CCTV repair across North Texas.
              </p>
            </div>

            {/* Official NAP Block (Primary Location Info) & GBP Link */}
            <div className="mt-4 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-[#CFCFCF]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#007EFF] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-[11px]">Main Fort Worth HQ</div>
                  <div className="text-slate-300 text-[11px]">2203 8th Ave., Fort Worth, TX 76110</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1 border-t border-slate-800/60">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${phoneNumberDigits}`} className="font-bold text-emerald-400 hover:underline text-[12px]">
                  (817) 231-2962
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#007EFF] shrink-0" />
                <a href={`mailto:${emailAddress}`} className="text-slate-300 hover:text-white truncate text-[11px]">
                  {emailAddress}
                </a>
              </div>

              <div className="pt-1.5 border-t border-slate-800/60">
                <a
                  href="https://maps.google.com/?q=Fort+Worth+Security+Cameras+2203+8th+Ave+Fort+Worth+TX+76110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition-colors text-[11px] font-bold"
                  title="View Fort Worth Security Cameras Google Business Profile"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-amber-400">★</span>
                    <span>5.0 Rated Google Business Profile</span>
                  </span>
                  <span className="text-[10px] text-amber-200 underline">View →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Popular Camera Systems (Always present in DOM for search crawlers) */}
          <div className="flex flex-col bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#0B132B] rounded-2xl border border-slate-800 shadow-md overflow-hidden transition-all duration-200">
            <button
              type="button"
              onClick={() => setOpenPopular(!openPopular)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-800/60 transition-colors group cursor-pointer lg:cursor-default"
              aria-expanded={openPopular}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold text-white uppercase tracking-wider group-hover:text-[#007EFF] transition-colors">
                  Popular Systems
                </span>
                <span className="text-[10px] font-extrabold bg-[#007EFF]/20 text-[#007EFF] border border-[#007EFF]/40 px-2 py-0.5 rounded-full">
                  {TOP_KEYWORDS.length}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-white lg:hidden">
                <span className="text-[11px] font-medium">{openPopular ? 'Close' : 'Expand'}</span>
                <ChevronDown className={`w-4 h-4 text-[#007EFF] transition-transform duration-300 ${openPopular ? 'rotate-180' : ''}`} />
              </div>
            </button>

            <div className={`p-4 pt-1 border-t border-slate-800/80 bg-slate-950/60 flex-grow ${openPopular ? 'block' : 'hidden lg:block'}`}>
              <ul className="space-y-2 mt-1 max-h-[320px] overflow-y-auto pr-1 custom-scrollbar">
                {TOP_KEYWORDS.map((kw) => (
                  <li key={kw.slug}>
                    <NavLink
                      to={`/${kw.slug}`}
                      onNavigate={onNavigate}
                      className="text-[#CFCFCF] hover:text-[#007EFF] transition-colors text-left flex items-start gap-2 text-[11px] leading-snug w-full group/item"
                    >
                      <span className="text-[#007EFF] group-hover/item:translate-x-0.5 transition-transform shrink-0">•</span>
                      <span className="hover:underline">{kw.h1}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Surveillance Solutions (Always present in DOM for search crawlers) */}
          <div className="flex flex-col bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#0B132B] rounded-2xl border border-slate-800 shadow-md overflow-hidden transition-all duration-200">
            <button
              type="button"
              onClick={() => setOpenSolutions(!openSolutions)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-800/60 transition-colors group cursor-pointer lg:cursor-default"
              aria-expanded={openSolutions}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold text-white uppercase tracking-wider group-hover:text-[#007EFF] transition-colors">
                  Surveillance Solutions
                </span>
                <span className="text-[10px] font-extrabold bg-[#007EFF]/20 text-[#007EFF] border border-[#007EFF]/40 px-2 py-0.5 rounded-full">
                  11
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-white lg:hidden">
                <span className="text-[11px] font-medium">{openSolutions ? 'Close' : 'Expand'}</span>
                <ChevronDown className={`w-4 h-4 text-[#007EFF] transition-transform duration-300 ${openSolutions ? 'rotate-180' : ''}`} />
              </div>
            </button>

            <div className={`p-4 pt-1 border-t border-slate-800/80 bg-slate-950/60 flex-grow ${openSolutions ? 'block' : 'hidden lg:block'}`}>
              <ul className="space-y-2 mt-1 text-[#CFCFCF]">
                <li>
                  <NavLink to="/business-communications-fort-worth" onNavigate={onNavigate} className="hover:text-amber-400 text-amber-300 font-bold flex items-center gap-1.5 text-left text-[11px]">
                    <span>Business Communications (Phones & Fiber)</span>
                    <span className="text-[9px] bg-amber-900/80 text-amber-300 px-1 py-0.5 rounded border border-amber-700 shrink-0">NEW</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business-website-design-fort-worth" onNavigate={onNavigate} className="hover:text-indigo-400 text-indigo-300 font-bold flex items-center gap-1.5 text-left text-[11px]">
                    <span>Business Website Design & SEO</span>
                    <span className="text-[9px] bg-indigo-900/80 text-indigo-300 px-1 py-0.5 rounded border border-indigo-700 shrink-0">NEW</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/network-cable-installation-fort-worth" onNavigate={onNavigate} className="hover:text-[#007EFF] text-white font-semibold text-left text-[11px] block">
                    Network Cable & Cat6 Runs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tv-wall-mounting-installation-fort-worth" onNavigate={onNavigate} className="hover:text-[#007EFF] text-white font-semibold text-left text-[11px] block">
                    TV Wall Mounting & Display Setup
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/outdoor-security-camera-installation-fort-worth" onNavigate={onNavigate} className="hover:text-[#007EFF] text-left text-[11px] block">
                    Outdoor Weatherproof 4K Cameras
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/poe-security-camera-installation-fort-worth" onNavigate={onNavigate} className="hover:text-[#007EFF] text-left text-[11px] block">
                    Power Over Ethernet (PoE) Systems
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/wireless-security-camera-installation-fort-worth" onNavigate={onNavigate} className="hover:text-[#007EFF] text-left text-[11px] block">
                    Wireless WiFi Camera Systems
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business-security-cameras-fort-worth" onNavigate={onNavigate} className="hover:text-[#007EFF] text-left text-[11px] block">
                    Commercial Business CCTV & POS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/home-surveillance-system-fort-worth" onNavigate={onNavigate} className="hover:text-[#007EFF] text-left text-[11px] block">
                    Residential Home Surveillance
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/security-camera-repair-fort-worth" onNavigate={onNavigate} className="hover:text-[#007EFF] text-left text-[11px] block">
                    Same-Day CCTV Camera Repair
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/security-camera-replacement-fort-worth" onNavigate={onNavigate} className="hover:text-[#007EFF] text-left text-[11px] block">
                    Analog to 4K Camera Replacement
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Local Service Cities (Always present in DOM for search crawlers) */}
          <div className="flex flex-col bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#0B132B] rounded-2xl border border-slate-800 shadow-md overflow-hidden transition-all duration-200">
            <button
              type="button"
              onClick={() => setOpenCities(!openCities)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-800/60 transition-colors group cursor-pointer lg:cursor-default"
              aria-expanded={openCities}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold text-white uppercase tracking-wider group-hover:text-[#007EFF] transition-colors">
                  Tarrant & DFW Cities
                </span>
                <span className="text-[10px] font-extrabold bg-[#007EFF]/20 text-[#007EFF] border border-[#007EFF]/40 px-2 py-0.5 rounded-full">
                  {DFW_CITIES.length}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-white lg:hidden">
                <span className="text-[11px] font-medium">{openCities ? 'Close' : 'Expand'}</span>
                <ChevronDown className={`w-4 h-4 text-[#007EFF] transition-transform duration-300 ${openCities ? 'rotate-180' : ''}`} />
              </div>
            </button>

            <div className={`p-4 pt-1 border-t border-slate-800/80 bg-slate-950/60 flex-grow ${openCities ? 'block' : 'hidden lg:block'}`}>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[11px] mt-1 max-h-[320px] overflow-y-auto pr-1 custom-scrollbar">
                {DFW_CITIES.map((city) => (
                  <NavLink
                    key={city.slug}
                    to={`/${city.slug}`}
                    onNavigate={onNavigate}
                    className="text-left text-[#CFCFCF] hover:text-[#007EFF] truncate hover:underline py-0.5 block"
                  >
                    {city.cityName}, TX
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Fort Worth Security Cameras • DFW Wholesale Security. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <NavLink to="/about-us-fort-worth" onNavigate={onNavigate} className="hover:text-white font-bold text-slate-200">
              About Us
            </NavLink>
            <span className="text-slate-700">•</span>
            <NavLink to="/contact-us-fort-worth" onNavigate={onNavigate} className="hover:text-white font-bold text-slate-200">
              Contact Us
            </NavLink>
            <span className="text-slate-700">•</span>
            <NavLink to="/blog" onNavigate={onNavigate} className="hover:text-white font-bold text-[#007EFF]">
              Security Blog & Guides
            </NavLink>
            <span className="text-slate-700">•</span>
            <NavLink to="/free-security-camera-quote-fort-worth" onNavigate={onNavigate} className="hover:text-white">
              Free Quote Request
            </NavLink>
            <span className="text-slate-700">•</span>
            <NavLink
              to="/sitemap"
              onNavigate={onNavigate}
              className="text-slate-300 hover:text-white transition-colors underline font-medium"
            >
              HTML & XML Sitemap Index
            </NavLink>
            <span className="text-slate-700">•</span>
            <a
              href="https://maps.google.com/?q=Fort+Worth+Security+Cameras+2203+8th+Ave+Fort+Worth+TX+76110"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
            >
              Google Business Profile
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
