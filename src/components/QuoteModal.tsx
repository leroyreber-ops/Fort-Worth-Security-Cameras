import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, Phone, Mail, Calculator, Building2 } from 'lucide-react';
import { QuoteFormData } from '../types';
import { logLeadSubmission } from '../lib/trafficTracker';
import { sendWeb3FormSubmission } from '../lib/web3forms';
import { getFormTrackingInfo, FormTrackingInfo } from '../lib/trackingSession';
import { detectPageInterestArea } from '../lib/industryDetection';
import { FormTrackingMetadataBadge } from './FormTrackingMetadataBadge';
import { BRAND_ASSETS } from '../data/imagesData';
import { SafeImage } from './SafeImage';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, preselectedService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyType: 'home',
    cameraCount: 4,
    preferredType: preselectedService || '4K PoE Wired Security System',
    resolution: '4K',
    addDvrLockBox: false,
    addRingDoorbell: false,
    city: 'Fort Worth',
    comments: '',
    contactMethod: 'text',
    interestArea: '',
    industryName: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastTrackingInfo, setLastTrackingInfo] = useState<FormTrackingInfo | null>(null);

  // Automatically detect industry & page context when modal opens
  React.useEffect(() => {
    if (isOpen) {
      const pageDetails = detectPageInterestArea();
      const isCommercialOrIndustrial =
        pageDetails.pageType === 'industry_specific' ||
        pageDetails.pageType === 'industry_hub';

      setFormData((prev) => ({
        ...prev,
        interestArea: prev.interestArea || pageDetails.interestArea,
        industryName: pageDetails.industryName || prev.industryName,
        propertyType: isCommercialOrIndustrial ? 'commercial' : prev.propertyType,
      }));
    }
  }, [isOpen]);

  // Parse preselected service if passed in
  React.useEffect(() => {
    if (preselectedService && isOpen) {
      let count = 4;
      if (preselectedService.includes('8')) count = 8;
      else if (preselectedService.includes('16')) count = 16;
      else if (preselectedService.includes('32')) count = 32;
      else if (preselectedService.includes('2')) count = 2;

      setFormData((prev) => ({
        ...prev,
        preferredType: preselectedService,
        cameraCount: count,
      }));
    }
  }, [preselectedService, isOpen]);

  if (!isOpen) return null;

  // Exact pricing logic requested by user:
  // 4 Camera System: $1,595 to $1,995
  // 8 Channel System: $2,995 to $3,495
  // 16 Channel System: $5,995 to $6,895
  // 32 Channel System: $9,995 to $12,500
  // When people choose 4K add $20 per camera
  // DVR Lock Box: +$140
  // Ring Video Doorbell & Standard Install: +$300
  const calculateEstimate = () => {
    const count = formData.cameraCount;
    let base = { low: 1595, high: 1995 };
    if (count <= 2) base = { low: 995, high: 1295 };
    else if (count <= 4) base = { low: 1595, high: 1995 };
    else if (count <= 6) base = { low: 2295, high: 2795 };
    else if (count <= 8) base = { low: 2995, high: 3495 };
    else if (count <= 12) base = { low: 4495, high: 5195 };
    else if (count <= 16) base = { low: 5995, high: 6895 };
    else if (count <= 24) base = { low: 7995, high: 9495 };
    else base = { low: 9995, high: 12500 };

    const extra4K = formData.resolution === '4K' ? count * 20 : 0;
    const extraLockBox = formData.addDvrLockBox ? 140 : 0;
    const extraRing = formData.addRingDoorbell ? 300 : 0;
    const totalExtra = extra4K + extraLockBox + extraRing;

    return {
      low: base.low + totalExtra,
      high: base.high + totalExtra,
      extra4K,
      extraLockBox,
      extraRing,
    };
  };

  const estimate = calculateEstimate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const trackingInfo = getFormTrackingInfo();
    setLastTrackingInfo(trackingInfo);
    const linkSource = preselectedService || 'Direct Quote Button';

    // 1. Log lead to admin traffic tracker for internal dashboard
    logLeadSubmission({
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      serviceRequested: `${formData.cameraCount}-Cam ${formData.preferredType} (${formData.city}) [Focus: ${formData.interestArea || trackingInfo.interestArea}]`,
      address: formData.comments ? `City: ${formData.city} | ${formData.comments}` : `City: ${formData.city}`,
      source: `${trackingInfo.submittedFromPage} [Domain: ${trackingInfo.websiteSource}] [Landing: ${trackingInfo.landingPage}] [Origin: ${trackingInfo.referrer}]`,
    });

    // 2. Submit form to Web3Forms API (dispatched to leroyreber@gmail.com)
    await sendWeb3FormSubmission({
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      propertyType: formData.propertyType,
      cameraCount: formData.cameraCount,
      preferredService: formData.preferredType,
      interestArea: formData.interestArea || trackingInfo.interestArea,
      contactMethod: formData.contactMethod,
      estimateRange: `$${estimate.low.toLocaleString()} – $${estimate.high.toLocaleString()}`,
      comments: formData.comments,
      websiteSource: trackingInfo.websiteSource,
      sourceUrl: trackingInfo.submittedFromUrl,
      sourcePathname: trackingInfo.submittedFromPage,
      landingPage: trackingInfo.landingPage,
      landingUrl: trackingInfo.landingUrl,
      cameFrom: linkSource,
      referrer: trackingInfo.referrer,
      subject: `New Lead: ${formData.fullName} - ${formData.interestArea || formData.preferredType} (${formData.city}) [via ${trackingInfo.websiteSource}]`,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-[#E5E5E5] rounded-2xl shadow-2xl text-slate-900 overflow-hidden my-8">
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#E5E5E5] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SafeImage
              src={BRAND_ASSETS.logo}
              fallbackSrc={BRAND_ASSETS.logoFallback}
              alt="DFW Wholesale Security Logo"
              className="h-10 sm:h-12 w-auto object-contain hidden sm:block"
            />
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#007EFF] mb-1">
                <Shield className="w-3.5 h-3.5" />
                <span>100% Free & Fast Response</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Get Your Free Security Camera Quote</h3>
              <p className="text-xs sm:text-sm text-[#6B6B6B]">Direct estimate dispatch to Fort Worth certified team</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#F5F5F5] hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">Quote Request Received!</h4>
            <p className="text-[#6B6B6B] max-w-md mx-auto text-sm leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your request has been dispatched to{' '}
              <strong className="text-[#007EFF]">leroyreber@gmail.com</strong> and <strong className="text-[#007EFF]">Leroy@fortworthsecuritycameras.com</strong>. Our Fort Worth technician team will contact you at{' '}
              <strong className="text-emerald-700">{formData.phone}</strong> shortly.
            </p>
            <div className="p-4 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="text-[#6B6B6B] font-semibold uppercase tracking-wider">Estimated System Range:</div>
              <div className="text-lg font-bold text-slate-900">${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}</div>
              <div className="text-slate-500">*Includes commercial-grade cameras, Cat6 cabling, NVR storage, installation labor & 1-year warranty.</div>
            </div>

            {lastTrackingInfo && (
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-left max-w-md mx-auto space-y-1.5 text-xs text-slate-600">
                <div className="font-semibold text-slate-900 text-[11px] uppercase tracking-wider flex items-center justify-between">
                  <span>Submission Origin Tracking:</span>
                  <span className="text-[#007EFF] font-bold">{lastTrackingInfo.websiteSource}</span>
                </div>
                <div className="text-[11px]">📄 <strong>Page Submitted From:</strong> <code className="bg-slate-200/70 px-1 py-0.5 rounded text-slate-800">{lastTrackingInfo.submittedFromPage}</code></div>
                <div className="text-[11px]">🎯 <strong>Original Landing Page:</strong> <code className="bg-slate-200/70 px-1 py-0.5 rounded text-slate-800">{lastTrackingInfo.landingPage}</code></div>
                <div className="text-[11px]">🔗 <strong>Traffic Source / Origin:</strong> <span className="font-medium text-slate-800">{lastTrackingInfo.referrer}</span></div>
              </div>
            )}
            <div className="pt-4 flex justify-center gap-3">
              <a
                href="sms:8172312962?body=I'm%20looking%20for%20a%20security%20camera%20installation%20how%20can%20you%20help%20me"
                className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
              >
                Text Immediately (817) 231-2962
              </a>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-lg bg-[#F5F5F5] hover:bg-slate-200 text-slate-900 font-semibold text-sm transition-all border border-[#E5E5E5]"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Interactive Calculator Banner */}
            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-[#007EFF] font-bold">
                <Calculator className="w-4 h-4 text-[#007EFF]" />
                <span>Estimated Budget ({formData.cameraCount} Cameras):</span>
              </div>
              <div className="text-base font-black text-slate-900">
                ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Miller"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="(817) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Property City / Location</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Fort Worth, Arlington, Keller"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors"
                />
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Property Type</label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors"
                >
                  <option value="home">Residential Single Home</option>
                  <option value="business">Small Business / Office</option>
                  <option value="commercial">Commercial Warehouse / Retail</option>
                  <option value="industrial">Industrial / Multi-Tenant Property</option>
                </select>
              </div>

              {/* Number of Cameras */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Desired Number of Cameras ({formData.cameraCount})
                </label>
                <input
                  type="range"
                  min="2"
                  max="32"
                  step="2"
                  value={formData.cameraCount}
                  onChange={(e) => setFormData({ ...formData, cameraCount: parseInt(e.target.value) })}
                  className="w-full accent-[#007EFF] cursor-pointer my-2"
                />
              </div>
            </div>

            {/* Resolution Choice & Preferred System Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Camera Resolution
                </label>
                <select
                  value={formData.resolution || '4K'}
                  onChange={(e) =>
                    setFormData({ ...formData, resolution: e.target.value as '4K' | '2K' })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors"
                >
                  <option value="4K">4K Ultra HD (+$20 / camera)</option>
                  <option value="2K">2K / 1080p HD Standard Base</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">System Preference</label>
                <select
                  value={formData.preferredType}
                  onChange={(e) => setFormData({ ...formData, preferredType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors"
                >
                  <option value="4K PoE Wired Security System">4K PoE Wired Security System (Recommended)</option>
                  <option value="Wireless Security Cameras">Wireless Security Cameras</option>
                  <option value="Outdoor Perimeter Color Night Vision">Outdoor Perimeter Color Night Vision</option>
                  <option value="Commercial CCTV & POS Integration">Commercial CCTV & POS Cash Register Integration</option>
                  <option value="Camera Repair / Service Upgrade">Camera Repair or System Upgrade</option>
                </select>
              </div>
            </div>

            {/* Optional Hardware & Installation Add-Ons Section */}
            <div className="space-y-2 pt-2 border-t border-[#E5E5E5]">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                Optional Equipment & Installation Add-Ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                    formData.addDvrLockBox
                      ? 'bg-blue-50/90 border-[#007EFF] text-slate-900 shadow-xs'
                      : 'bg-[#F5F5F5] border-[#E5E5E5] text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={!!formData.addDvrLockBox}
                    onChange={(e) =>
                      setFormData({ ...formData, addDvrLockBox: e.target.checked })
                    }
                    className="mt-0.5 w-4 h-4 accent-[#007EFF] rounded cursor-pointer"
                  />
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold flex items-center justify-between gap-1.5">
                      <span>DVR / NVR Lock Box</span>
                      <span className="text-[#007EFF] font-black">+$140</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      Vented heavy-duty steel lockbox to secure recording hardware from theft or tampering.
                    </p>
                  </div>
                </label>

                <label
                  className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                    formData.addRingDoorbell
                      ? 'bg-blue-50/90 border-[#007EFF] text-slate-900 shadow-xs'
                      : 'bg-[#F5F5F5] border-[#E5E5E5] text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={!!formData.addRingDoorbell}
                    onChange={(e) =>
                      setFormData({ ...formData, addRingDoorbell: e.target.checked })
                    }
                    className="mt-0.5 w-4 h-4 accent-[#007EFF] rounded cursor-pointer"
                  />
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold flex items-center justify-between gap-1.5">
                      <span>Ring Video Doorbell & Install</span>
                      <span className="text-[#007EFF] font-black">+$300</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      Ring video doorbell hardware, standard hardwiring & professional installation.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Auto-detected Industry Focus & Project Details */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#007EFF]" />
                  <span>Industry Focus / Interest Area</span>
                </span>
                <span className="text-[10px] text-[#007EFF] font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  Auto-Context
                </span>
              </label>
              <input
                type="text"
                value={formData.interestArea || ''}
                onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
                placeholder="e.g. Retail Stores, Auto Repair Shop, Warehouse, Restaurant..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm font-medium outline-none transition-colors"
              />
            </div>

            {/* Additional details */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Notes / Specific Requirements</label>
              <textarea
                rows={2}
                placeholder="e.g. Need coverage for 2-car garage driveway and backyard patio..."
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors resize-none"
              ></textarea>
            </div>

            {/* Form Tracking Metadata Badge */}
            <FormTrackingMetadataBadge sourceContext={preselectedService || 'Quote Request Modal'} />

            {/* Direct Send Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] active:bg-[#66B2FF] text-white font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Request...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Free Quote Request</span>
                  </>
                )}
              </button>

              <a
                href="tel:8172312962"
                className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-[#F5F5F5] hover:bg-slate-200 text-slate-900 font-bold text-sm border border-[#E5E5E5] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#007EFF]" />
                <span>Call (817) 231-2962</span>
              </a>
            </div>

            <div className="text-center text-[11px] text-[#6B6B6B] pt-1">
              Submission sends directly to info@fortworthsecuritycameras.com and our Fort Worth local team. No spam guaranteed.
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
