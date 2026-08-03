import React, { useState } from 'react';
import { Eye, ShieldCheck, Zap, Wifi, Cable, Check, X } from 'lucide-react';

export const InteractiveComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'resolution' | 'poe_wireless'>('resolution');

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E5E5] text-slate-900 shadow-md space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E5E5E5] pb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#007EFF]" />
            <span>Technology Comparison Guide</span>
          </h3>
          <p className="text-xs text-[#6B6B6B]">Compare security camera specs before installing in Fort Worth</p>
        </div>

        {/* Tab Toggle */}
        <div className="flex bg-[#F5F5F5] p-1 rounded-xl border border-[#E5E5E5] text-xs font-bold">
          <button
            onClick={() => setActiveTab('resolution')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'resolution' ? 'bg-[#007EFF] text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            4K vs 1080p Resolution
          </button>
          <button
            onClick={() => setActiveTab('poe_wireless')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'poe_wireless' ? 'bg-[#007EFF] text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            PoE Wired vs Wireless
          </button>
        </div>
      </div>

      {/* Tab Content 1: Resolution */}
      {activeTab === 'resolution' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 4K Box */}
          <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200 relative space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-lg font-black text-[#007EFF]">4K Ultra HD (8 Megapixels)</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                Recommended 2026
              </span>
            </div>
            <p className="text-xs text-slate-700">
              Captures 3840x2160 pixels. Enables digital zoom to read license plates at 50+ feet and distinguish facial features clearly.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zoom in without pixel blur or blockiness</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full-color night vision sensor technology</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ideal for outdoor driveways & commercial lots</span>
              </li>
            </ul>
          </div>

          {/* 1080p Box */}
          <div className="p-5 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-slate-800">1080p Full HD (2 Megapixels)</span>
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-600 text-xs font-bold">Standard</span>
            </div>
            <p className="text-xs text-[#6B6B6B]">
              Captures 1920x1080 pixels. Suitable for close-quarters indoor hallways or budget applications.
            </p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Lower bandwidth & storage requirements</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Blurry when zooming in past 20 feet</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Limited license plate legibility at night</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Tab Content 2: PoE vs Wireless */}
      {activeTab === 'poe_wireless' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PoE Box */}
          <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-lg font-black text-emerald-800 flex items-center gap-2">
                <Cable className="w-5 h-5 text-emerald-600" />
                <span>PoE (Power Over Ethernet)</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">Gold Standard</span>
            </div>
            <p className="text-xs text-slate-700">
              Single solid copper Cat6 cable transmits power and 4K video bandwidth simultaneously with 100% uptime.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero WiFi drops or signal jamming vulnerability</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Continuous 24/7 video recording to local NVR</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>UPS battery backup keeps recording during power outages</span>
              </li>
            </ul>
          </div>

          {/* Wireless Box */}
          <div className="p-5 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Wifi className="w-5 h-5 text-[#007EFF]" />
                <span>Wireless WiFi Cameras</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-600 text-xs font-bold">Flexible</span>
            </div>
            <p className="text-xs text-[#6B6B6B]">
              Transmits video via 2.4GHz/5GHz WiFi signals. Great for locations where running wires through walls is impossible.
            </p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-slate-500 shrink-0" />
                <span>No invasive interior wall fishing required</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Requires periodic battery changing or solar alignment</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Susceptible to Texas weather signal interference</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
