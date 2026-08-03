import React, { useState } from 'react';
import { Camera, ShieldCheck, Check, ArrowRight, DollarSign, Cpu, HardDrive } from 'lucide-react';

interface CameraCalculatorProps {
  onSelectPackage: (serviceName: string) => void;
}

export const CameraCalculator: React.FC<CameraCalculatorProps> = ({ onSelectPackage }) => {
  const [channelTier, setChannelTier] = useState<4 | 8 | 16 | 32>(4);
  const [propertyType, setPropertyType] = useState<'home' | 'business' | 'warehouse'>('home');
  const [resolution, setResolution] = useState<'4k' | '1080p'>('4k');
  const [addDvrLockBox, setAddDvrLockBox] = useState(false);
  const [addRingDoorbell, setAddRingDoorbell] = useState(false);

  // Exact pricing logic requested:
  // 4 Camera System: $1,595 to $1,995
  // 8 Channel System: $2,995 to $3,495
  // 16 Channel System: $5,995 to $6,895
  // 32 Channel System: $9,995 to $12,500
  // When people choose 4K add $20 per camera
  // DVR Lock Box: +$140
  // Ring Video Doorbell & Standard Install: +$300
  const getPricingRange = (channels: number) => {
    switch (channels) {
      case 4:
        return { min: 1595, max: 1995, label: '4 Camera NVR System', popular: true };
      case 8:
        return { min: 2995, max: 3495, label: '8 Channel Full Installation', popular: true };
      case 16:
        return { min: 5995, max: 6895, label: '16 Channel Commercial System', popular: false };
      case 32:
        return { min: 9995, max: 12500, label: '32 Channel Enterprise System', popular: false };
      default:
        return { min: 1595, max: 1995, label: '4 Camera System', popular: false };
    }
  };

  const basePricing = getPricingRange(channelTier);
  const fourKUpcharge = resolution === '4k' ? channelTier * 20 : 0;
  const dvrLockBoxCharge = addDvrLockBox ? 140 : 0;
  const ringDoorbellCharge = addRingDoorbell ? 300 : 0;

  const totalMin = basePricing.min + fourKUpcharge + dvrLockBoxCharge + ringDoorbellCharge;
  const totalMax = basePricing.max + fourKUpcharge + dvrLockBoxCharge + ringDoorbellCharge;

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 text-slate-900 shadow-xl space-y-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span>Instant Fort Worth Turnkey Price Calculator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Security Camera Installation Cost Estimator
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Select your required system capacity to see transparent equipment, Cat6 cabling, NVR storage, and professional installation costs.
          </p>
        </div>

        {/* Channel Tier Buttons */}
        <div className="space-y-3">
          <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block text-center sm:text-left">
            Select System Channel Capacity:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { channels: 4, label: '4 Cameras', price: '$1,595 – $1,995' },
              { channels: 8, label: '8 Channels', price: '$2,995 – $3,495' },
              { channels: 16, label: '16 Channels', price: '$5,995 – $6,895' },
              { channels: 32, label: '32 Channels', price: '$9,995 – $12,500' },
            ].map((tier) => (
              <button
                key={tier.channels}
                type="button"
                onClick={() => setChannelTier(tier.channels as any)}
                className={`p-3.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                  channelTier === tier.channels
                    ? 'bg-[#007EFF] border-[#007EFF] text-white shadow-md'
                    : 'bg-[#F5F5F5] border-[#E5E5E5] text-slate-800 hover:bg-slate-200'
                }`}
              >
                <span className="text-sm font-black">{tier.label}</span>
                <span className={`text-[11px] font-bold ${channelTier === tier.channels ? 'text-blue-100' : 'text-[#007EFF]'}`}>
                  {tier.price}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Slider control */}
        <div className="p-4 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] space-y-3">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-700 uppercase tracking-wider">Slide to adjust system size:</span>
            <span className="text-[#007EFF] text-sm font-black">{channelTier} Channel NVR Configuration</span>
          </div>
          <input
            type="range"
            min="4"
            max="32"
            step="4"
            value={channelTier}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (val <= 6) setChannelTier(4);
              else if (val <= 12) setChannelTier(8);
              else if (val <= 24) setChannelTier(16);
              else setChannelTier(32);
            }}
            className="w-full accent-[#007EFF] cursor-pointer h-2.5 bg-slate-200 rounded-lg"
          />
          <div className="flex justify-between text-[11px] font-medium text-slate-500">
            <span>4 Cameras ($1,595–$1,995)</span>
            <span>8 Channels ($2,995–$3,495)</span>
            <span>16 Channels ($5,995–$6,895)</span>
          </div>
        </div>

        {/* Additional Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Property Type</label>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'home', label: 'Home' },
                { id: 'business', label: 'Business' },
                { id: 'warehouse', label: 'Warehouse' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPropertyType(item.id as any)}
                  className={`py-2 px-2.5 rounded-lg border text-xs font-bold transition-all ${
                    propertyType === item.id
                      ? 'bg-slate-900 border-slate-900 text-white shadow'
                      : 'bg-white border-[#E5E5E5] text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Camera Resolution</label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => setResolution('4k')}
                className={`py-2 px-2.5 rounded-lg border text-xs font-bold transition-all flex flex-col items-center justify-center ${
                  resolution === '4k'
                    ? 'bg-[#007EFF] border-[#007EFF] text-white shadow'
                    : 'bg-white border-[#E5E5E5] text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span>4K Ultra HD</span>
                  <span className={`px-1 rounded text-[10px] font-black ${resolution === '4k' ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-800'}`}>+$20/cam</span>
                </div>
                <span className={`text-[10px] ${resolution === '4k' ? 'text-blue-100' : 'text-slate-500'}`}>
                  (+${channelTier * 20} total)
                </span>
              </button>
              <button
                type="button"
                onClick={() => setResolution('1080p')}
                className={`py-2 px-2.5 rounded-lg border text-xs font-bold transition-all flex flex-col items-center justify-center ${
                  resolution === '1080p'
                    ? 'bg-[#007EFF] border-[#007EFF] text-white shadow'
                    : 'bg-white border-[#E5E5E5] text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>2K / 1080p Standard</span>
                <span className={`text-[10px] ${resolution === '1080p' ? 'text-blue-100' : 'text-slate-500'}`}>Standard Base Price</span>
              </button>
            </div>
          </div>
        </div>

        {/* Optional Add-Ons Section */}
        <div className="space-y-2.5 pt-2 border-t border-[#E5E5E5]">
          <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
            Optional Hardware & Installation Add-Ons:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label
              className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                addDvrLockBox
                  ? 'bg-blue-50/90 border-[#007EFF] text-slate-900 shadow-sm'
                  : 'bg-[#F5F5F5] border-[#E5E5E5] text-slate-700 hover:bg-slate-200'
              }`}
            >
              <input
                type="checkbox"
                checked={addDvrLockBox}
                onChange={(e) => setAddDvrLockBox(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-[#007EFF] rounded cursor-pointer"
              />
              <div className="space-y-0.5">
                <div className="text-xs font-extrabold flex items-center justify-between gap-2">
                  <span>DVR / NVR Security Lock Box</span>
                  <span className="text-[#007EFF] font-black">+$140</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Vented steel security enclosure to prevent physical tampering or theft of NVR recorder.
                </p>
              </div>
            </label>

            <label
              className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                addRingDoorbell
                  ? 'bg-blue-50/90 border-[#007EFF] text-slate-900 shadow-sm'
                  : 'bg-[#F5F5F5] border-[#E5E5E5] text-slate-700 hover:bg-slate-200'
              }`}
            >
              <input
                type="checkbox"
                checked={addRingDoorbell}
                onChange={(e) => setAddRingDoorbell(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-[#007EFF] rounded cursor-pointer"
              />
              <div className="space-y-0.5">
                <div className="text-xs font-extrabold flex items-center justify-between gap-2">
                  <span>Ring Video Doorbell & Standard Install</span>
                  <span className="text-[#007EFF] font-black">+$300</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Smart HD video doorbell hardware, transformer hardwiring & professional mounting.
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Estimated Price Result Card */}
        <div className="p-6 rounded-2xl bg-[#F5F5F5] text-slate-900 border border-[#E5E5E5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-xs font-extrabold text-[#007EFF] uppercase tracking-wider">
              Complete Turnkey Installation Estimate:
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 flex items-center justify-center md:justify-start gap-2">
              <span>${totalMin.toLocaleString()} – ${totalMax.toLocaleString()}</span>
            </div>
            <p className="text-xs text-[#6B6B6B] max-w-md">
              Includes {channelTier}x {resolution.toUpperCase()} PoE IP cameras{resolution === '4k' ? ' (+$20/cam 4K upgrade included)' : ''}, NVR recorder, industrial hard drive, concealed Cat6 wiring, wall plate jacks, smartphone setup{addDvrLockBox ? ' + DVR Lock Box' : ''}{addRingDoorbell ? ' + Ring Video Doorbell & Install' : ''} & 1-year warranty.
            </p>
          </div>

          <button
            onClick={() => {
              const extras = [];
              if (resolution === '4k') extras.push(`4K Upgrade (+$${fourKUpcharge})`);
              if (addDvrLockBox) extras.push('DVR Lock Box (+$140)');
              if (addRingDoorbell) extras.push('Ring Doorbell & Install (+$300)');
              const extraStr = extras.length > 0 ? ` [${extras.join(', ')}]` : '';
              onSelectPackage(
                `${channelTier}-Channel ${resolution.toUpperCase()} System ($${totalMin.toLocaleString()}-$${totalMax.toLocaleString()})${extraStr}`
              );
            }}
            className="w-full md:w-auto px-7 py-4 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] active:bg-[#66B2FF] text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>Lock In Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
