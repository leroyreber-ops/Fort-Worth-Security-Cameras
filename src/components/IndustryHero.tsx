import React from 'react';
import { ShieldCheck, Phone, Camera, CheckCircle2, MessageSquare } from 'lucide-react';
import { IndustryPageInfo } from '../types';
import { IndustryAssetConfig, getIndustryAssets } from '../data/industryAssets';
import { getTextureForIndustry } from '../data/imagesData';
import { SafeImage } from './SafeImage';

interface IndustryHeroProps {
  industryData: IndustryPageInfo;
  assets?: IndustryAssetConfig;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const IndustryHero: React.FC<IndustryHeroProps> = ({
  industryData,
  assets,
  onOpenQuoteModal
}) => {
  const resolvedAssets = assets || getIndustryAssets(industryData);
  const primaryHeroImage = resolvedAssets.rightCard;
  const heroBgImage = resolvedAssets.heroBg;
  const textureOverlay = getTextureForIndustry(industryData.slug || industryData.category);

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-12 md:py-20">
      {/* Primary Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-85 sm:opacity-90 bg-cover bg-center transition-all duration-500 animate-kenburns"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      />
      {/* Subtle Texture Overlay for Depth */}
      <div
        className="absolute inset-0 z-0 opacity-20 sm:opacity-25 bg-cover bg-center mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url(${textureOverlay})` }}
      />
      {/* Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/30 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & Badges */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>{resolvedAssets.badgeText}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight text-shadow-hero">
              {industryData.h1}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              {industryData.heroSubheadline}
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenQuoteModal(`${industryData.name} Security Camera System`)}
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <Camera className="w-5 h-5 mr-2" />
                Get Free {industryData.name} Quote
              </button>

              <a
                href="tel:8172312962"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white border border-slate-700 font-bold text-base transition-all"
              >
                <Phone className="w-5 h-5 mr-2 text-emerald-400" />
                Call Now: (817) 231-2962
              </a>
            </div>

            {/* Key Value Pill Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>0 Monthly Cloud Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Commercial 4K PoE HD</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1-Year Labor Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Local Fort Worth Crew</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Remote Mobile App</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Same-Day Site Estimates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Card & Quick Contact Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-sm space-y-6">
              <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-950 border border-slate-700">
                <SafeImage
                  src={primaryHeroImage}
                  alt={resolvedAssets.primaryAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                {resolvedAssets.imageGuidance && (
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-medium text-slate-200 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700">
                    {resolvedAssets.imageGuidance}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <span className="text-slate-400 text-sm font-medium">Industry Category</span>
                  <span className="text-white font-semibold text-sm bg-blue-900/50 text-blue-300 px-2.5 py-1 rounded-md border border-blue-700/50">
                    {industryData.category}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <span className="text-slate-400 text-sm font-medium">Service Coverage</span>
                  <span className="text-white font-semibold text-sm">Fort Worth & Tarrant County</span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <span className="text-slate-400 text-sm font-medium">Video Storage</span>
                  <span className="text-emerald-400 font-bold text-sm">Local NVR (30-90 Days)</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm font-medium">Installation Time</span>
                  <span className="text-white font-semibold text-sm">1 - 2 Business Days</span>
                </div>
              </div>

              <button
                onClick={() => onOpenQuoteModal(`${industryData.name} Security Camera System`)}
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-center transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Request Free On-Site Consultation</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
