import React, { useEffect, useState } from 'react';
import { Globe, MapPin, Navigation, ArrowRightLeft, ShieldCheck, Target } from 'lucide-react';
import { getFormTrackingInfo, FormTrackingInfo } from '../lib/trackingSession';

export const FormTrackingMetadataBadge: React.FC<{
  className?: string;
  sourceContext?: string;
}> = ({ className = '', sourceContext }) => {
  const [trackingInfo, setTrackingInfo] = useState<FormTrackingInfo | null>(null);

  useEffect(() => {
    setTrackingInfo(getFormTrackingInfo());
  }, []);

  if (!trackingInfo) return null;

  return (
    <div className={`bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-700 space-y-2.5 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
        <div className="font-semibold text-slate-900 flex items-center gap-1.5 text-xs">
          <Globe className="w-4 h-4 text-[#007EFF]" />
          <span>Lead Source & Context Metadata</span>
        </div>
        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-medium px-2 py-0.5 rounded-full border border-emerald-200">
          <ShieldCheck className="w-3 h-3" /> Auto Context Active
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] leading-tight">
        <div className="bg-white p-2 rounded-lg border border-slate-200/80 space-y-0.5 col-span-1 sm:col-span-2 bg-blue-50/50 border-blue-100">
          <span className="text-blue-600 font-semibold flex items-center gap-1 text-[11px]">
            <Target className="w-3.5 h-3.5 text-[#007EFF]" /> Auto-Detected Interest Area / Industry:
          </span>
          <span className="font-bold text-slate-900 text-xs block">
            {trackingInfo.interestArea}
          </span>
        </div>

        <div className="bg-white p-2 rounded-lg border border-slate-200/80 space-y-0.5">
          <span className="text-slate-400 font-medium block flex items-center gap-1">
            <Globe className="w-3 h-3 text-slate-400" /> Website Submitted From:
          </span>
          <span className="font-semibold text-slate-900 truncate block">
            {trackingInfo.websiteSource}
          </span>
        </div>

        <div className="bg-white p-2 rounded-lg border border-slate-200/80 space-y-0.5">
          <span className="text-slate-400 font-medium block flex items-center gap-1">
            <MapPin className="w-3 h-3 text-slate-400" /> Submitted From Page:
          </span>
          <span className="font-semibold text-slate-900 truncate block" title={trackingInfo.submittedFromPage}>
            {trackingInfo.submittedFromPage}
          </span>
        </div>

        <div className="bg-white p-2 rounded-lg border border-slate-200/80 space-y-0.5">
          <span className="text-slate-400 font-medium block flex items-center gap-1">
            <Navigation className="w-3 h-3 text-slate-400" /> Original Landing Page:
          </span>
          <span className="font-semibold text-slate-900 truncate block" title={trackingInfo.landingPage}>
            {trackingInfo.landingPage}
          </span>
        </div>

        <div className="bg-white p-2 rounded-lg border border-slate-200/80 space-y-0.5">
          <span className="text-slate-400 font-medium block flex items-center gap-1">
            <ArrowRightLeft className="w-3 h-3 text-slate-400" /> Came From / Referrer:
          </span>
          <span className="font-semibold text-slate-900 truncate block" title={trackingInfo.referrer}>
            {sourceContext ? `${trackingInfo.referrer} (${sourceContext})` : trackingInfo.referrer}
          </span>
        </div>
      </div>
    </div>
  );
};
