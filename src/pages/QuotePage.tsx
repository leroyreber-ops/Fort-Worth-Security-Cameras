import React, { useState } from 'react';
import {
  Shield,
  Send,
  CheckCircle2,
  Phone,
  MessageSquare,
  Calculator,
  ChevronRight,
  Clock,
  Award,
  Star,
  MapPin,
  HelpCircle,
  Home,
  BookOpen,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { logLeadSubmission } from '../lib/trafficTracker';
import { sendWeb3FormSubmission } from '../lib/web3forms';
import { getFormTrackingInfo, FormTrackingInfo } from '../lib/trackingSession';
import { FormTrackingMetadataBadge } from '../components/FormTrackingMetadataBadge';
import { SafeImage } from '../components/SafeImage';
import { BRAND_ASSETS, SURVEILLANCE_IMAGES } from '../data/imagesData';
import { NavLink } from '../components/NavLink';

interface QuotePageProps {
  onNavigate: (path: string) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Fort Worth',
    propertyType: 'home',
    cameraCount: 4,
    preferredService: '4K PoE Security Camera System',
    resolution: '4K',
    addDvrLockBox: false,
    addRingDoorbell: false,
    comments: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastTrackingInfo, setLastTrackingInfo] = useState<FormTrackingInfo | null>(null);

  // Price estimate calculator
  // 4K Ultra HD adds $20 per camera
  // DVR Lock Box: +$140
  // Ring Video Doorbell & Standard Installation: +$300
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

    // 1. Log lead to admin traffic tracker for internal dashboard
    logLeadSubmission({
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      serviceRequested: `${formData.cameraCount}-Cam/Drops ${formData.preferredService} (${formData.city})`,
      address: formData.comments
        ? `City: ${formData.city} | ${formData.comments}`
        : `City: ${formData.city}`,
      source: `${trackingInfo.submittedFromPage} [Domain: ${trackingInfo.websiteSource}] [Landing: ${trackingInfo.landingPage}] [Origin: ${trackingInfo.referrer}]`,
    });

    // 2. Submit payload to Web3Forms (sent to leroyreber@gmail.com)
    await sendWeb3FormSubmission({
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      propertyType: formData.propertyType,
      cameraCount: formData.cameraCount,
      preferredService: formData.preferredService,
      interestArea: trackingInfo.interestArea,
      estimateRange: `$${estimate.low.toLocaleString()} – $${estimate.high.toLocaleString()}`,
      comments: formData.comments,
      websiteSource: trackingInfo.websiteSource,
      sourceUrl: trackingInfo.submittedFromUrl,
      sourcePathname: trackingInfo.submittedFromPage,
      landingPage: trackingInfo.landingPage,
      landingUrl: trackingInfo.landingUrl,
      cameFrom: 'Dedicated Free Quote Page Form',
      referrer: trackingInfo.referrer,
      subject: `New Lead: ${formData.fullName} - ${trackingInfo.interestArea || formData.preferredService} (${formData.city}) [via ${trackingInfo.websiteSource}]`,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const canonicalUrl =
    'https://fortworthsecuritycameras.com/free-security-camera-quote-fort-worth';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Get Free Security Camera Quote Fort Worth TX',
    description:
      'Request a free, itemized quote for Fort Worth security camera installation, CCTV systems, Ring doorbells, network cable runs, TV mounting, business communications, and web design services.',
    url: canonicalUrl,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'DFW Wholesale Security / Fort Worth Security Cameras',
      telephone: '817-231-2962',
      email: 'leroyreber@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2203 8th Ave.',
        addressLocality: 'Fort Worth',
        addressRegion: 'TX',
        postalCode: '76110',
        addressCountry: 'US',
      },
    },
  };

  return (
    <>
      <SEOHead
        title="Free Fort Worth Security Camera Quote | 4K CCTV & Installation Pricing"
        description="Get a free Fort Worth security camera quote for 4K CCTV installation, IP cameras, Ring doorbells, TV mounting, network cabling, business communications, and web design. Fast local response from 2203 8th Ave, Fort Worth, TX 76110."
        canonicalUrl={canonicalUrl}
        schema={schema}
      />

      <div className="bg-slate-50 text-slate-800 pb-16 font-sans space-y-8">
        <Breadcrumb
          items={[
            { label: 'Home', path: '/' },
            {
              label: 'Free Quote',
              path: '/free-security-camera-quote-fort-worth',
            },
          ]}
          onNavigate={onNavigate}
          variant="light"
        />

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl my-2">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 sm:opacity-85 transition-all duration-700 pointer-events-none"
              style={{ backgroundImage: `url(${SURVEILLANCE_IMAGES.heroBg.url})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30 pointer-events-none" />

            <div className="relative z-10 text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs font-bold text-sky-400 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-sky-400" />
                <span>100% Free • No Obligation • Fast Fort Worth Response</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Request Your Free Security Camera Quote in Fort Worth, TX
              </h1>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Use this secure form to request an itemized estimate dispatched directly to{' '}
                <strong className="text-amber-400">leroyreber@gmail.com</strong> and{' '}
                <strong className="text-amber-400">Leroy@fortworthsecuritycameras.com</strong>. Our
                licensed Fort Worth security camera technicians provide same‑week site assessments across
                Tarrant County and the surrounding DFW cities.
              </p>
            </div>
          </div>
        </section>

        {/* Form Container */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="bg-white border border-[#E5E5E5] rounded-3xl shadow-xl overflow-hidden p-6 sm:p-10">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black text-slate-900">Quote Request Received!</h2>
                <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                  Thank you,{' '}
                  <strong className="text-slate-900">{formData.fullName || 'Fort Worth customer'}</strong>
                  . Your estimate request has been sent to{' '}
                  <strong className="text-[#007EFF]">leroyreber@gmail.com</strong> and{' '}
                  <strong className="text-[#007EFF]">Leroy@fortworthsecuritycameras.com</strong>. Our local
                  security camera team will contact you at{' '}
                  <strong className="text-emerald-700">{formData.phone}</strong> shortly with next steps.
                </p>

                <div className="p-6 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] text-left max-w-md mx-auto space-y-3 text-xs sm:text-sm">
                  <div className="text-[#6B6B6B] font-bold uppercase tracking-wider">
                    Estimated System Range:
                  </div>
                  <div className="text-2xl font-black text-slate-900">
                    ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
                  </div>
                  <div className="text-slate-500 text-xs">
                    *Includes commercial‑grade cameras, Cat6 PoE cabling, NVR storage, professional
                    installation labor, and a 1‑year equipment and workmanship warranty.
                  </div>
                </div>

                {lastTrackingInfo && (
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-left max-w-md mx-auto space-y-2 text-xs text-slate-600">
                    <div className="font-semibold text-slate-900 text-[11px] uppercase tracking-wider flex items-center justify-between">
                      <span>Lead Tracking Summary:</span>
                      <span className="text-[#007EFF] font-bold">{lastTrackingInfo.websiteSource}</span>
                    </div>
                    <div className="text-[12px]">📄 <strong>Page Submitted From:</strong> <code className="bg-slate-200/70 px-1.5 py-0.5 rounded text-slate-800">{lastTrackingInfo.submittedFromPage}</code></div>
                    <div className="text-[12px]">🎯 <strong>Original Landing Page:</strong> <code className="bg-slate-200/70 px-1.5 py-0.5 rounded text-slate-800">{lastTrackingInfo.landingPage}</code></div>
                    <div className="text-[12px]">🔗 <strong>Traffic Origin / Came From:</strong> <span className="font-semibold text-slate-800">{lastTrackingInfo.referrer}</span></div>
                  </div>
                )}

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="sms:8172312962?body=I'm%20looking%20for%20a%20Fort%20Worth%20security%20camera%20quote%20how%20can%20you%20help%20me"
                    className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow"
                  >
                    Text Us Directly (817) 231‑2962
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      onNavigate('/');
                    }}
                    className="px-6 py-3.5 rounded-xl bg-[#F5F5F5] hover:bg-slate-200 text-slate-900 font-bold text-sm transition-all border border-[#E5E5E5]"
                  >
                    Return to Home Page
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Live Estimator Header Banner */}
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-[#007EFF] font-bold">
                    <Calculator className="w-5 h-5 text-[#007EFF]" />
                    <span>Instant Fort Worth budget estimate ({formData.cameraCount} units/drops):</span>
                  </div>
                  <div className="text-lg sm:text-xl font-black text-slate-900">
                    ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Robert Smith"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(817) 231-2962"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Property City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fort Worth, Arlington, Keller"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Service Requested */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Primary Service Needed
                    </label>
                    <select
                      value={formData.preferredService}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredService: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors"
                    >
                      <option value="4K PoE Security Camera System">
                        Fort Worth 4K PoE Security Camera Installation
                      </option>
                      <option value="Ring Video Doorbell Installation">
                        Ring Video Doorbell Installation
                      </option>
                      <option value="Network Cable Runs & Drops">
                        Network Cable Runs & Structured Drops
                      </option>
                      <option value="TV Wall Mounting Installation">
                        TV Wall Mounting Installation
                      </option>
                      <option value="Business Communications (VoIP/Fiber)">
                        Business Communications (VoIP / Fiber Internet)
                      </option>
                      <option value="Business Website Design & SEO">
                        Business Website Design & Local SEO
                      </option>
                      <option value="System Upgrade / Repair Service">
                        Security System Repair or Equipment Upgrade
                      </option>
                    </select>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Property Type</label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors"
                    >
                      <option value="home">Residential Single Home</option>
                      <option value="business">Small Business / Office</option>
                      <option value="commercial">Commercial Warehouse / Retail</option>
                      <option value="industrial">Industrial Facility / Multi‑Unit</option>
                    </select>
                  </div>

                  {/* Camera Resolution */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Camera Resolution
                    </label>
                    <select
                      value={formData.resolution}
                      onChange={(e) => setFormData({ ...formData, resolution: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors"
                    >
                      <option value="4K">4K Ultra HD (+ $20 / camera)</option>
                      <option value="2K">2K / 1080p HD Standard Base</option>
                    </select>
                  </div>
                </div>

                {/* Range Slider for Quantity */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Number of Cameras or Cable Drops ({formData.cameraCount})
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="32"
                    step="2"
                    value={formData.cameraCount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        cameraCount: parseInt(e.target.value, 10),
                      })
                    }
                    className="w-full accent-[#007EFF] cursor-pointer my-2"
                  />
                </div>

                {/* Optional Hardware & Installation Add-Ons Section */}
                <div className="space-y-3 pt-3 border-t border-[#E5E5E5]">
                  <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    Optional Equipment & Installation Add-Ons
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                        formData.addDvrLockBox
                          ? 'bg-blue-50/90 border-[#007EFF] text-slate-900 shadow-xs'
                          : 'bg-[#F5F5F5] border-[#E5E5E5] text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.addDvrLockBox}
                        onChange={(e) =>
                          setFormData({ ...formData, addDvrLockBox: e.target.checked })
                        }
                        className="mt-0.5 w-4 h-4 accent-[#007EFF] rounded cursor-pointer"
                      />
                      <div className="space-y-0.5">
                        <div className="text-xs font-extrabold flex items-center justify-between gap-2">
                          <span>DVR / NVR Security Lock Box</span>
                          <span className="text-[#007EFF] font-black">+$140</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          Heavy-duty vented steel security enclosure to prevent recorder theft or physical tampering.
                        </p>
                      </div>
                    </label>

                    <label
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                        formData.addRingDoorbell
                          ? 'bg-blue-50/90 border-[#007EFF] text-slate-900 shadow-xs'
                          : 'bg-[#F5F5F5] border-[#E5E5E5] text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.addRingDoorbell}
                        onChange={(e) =>
                          setFormData({ ...formData, addRingDoorbell: e.target.checked })
                        }
                        className="mt-0.5 w-4 h-4 accent-[#007EFF] rounded cursor-pointer"
                      />
                      <div className="space-y-0.5">
                        <div className="text-xs font-extrabold flex items-center justify-between gap-2">
                          <span>Ring Video Doorbell & Standard Install</span>
                          <span className="text-[#007EFF] font-black">+$300</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          Smart HD video doorbell hardware, transformer hardwire connection & professional mounting.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Project Details / Specific Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your Fort Worth property, timeline, or special requirements (e.g., need 4K CCTV with brick eave mounting, license plate capture in parking lot)..."
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-sm outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Form Tracking Metadata Badge */}
                <FormTrackingMetadataBadge sourceContext="Free Quote Dedicated Page" />

                {/* Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-4 px-8 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] active:bg-[#66B2FF] text-white font-black text-sm transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting quote request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Free Fort Worth Quote Request</span>
                      </>
                    )}
                  </button>

                  <a
                    href="tel:8172312962"
                    className="w-full sm:w-auto py-4 px-6 rounded-xl bg-[#F5F5F5] hover:bg-slate-200 text-slate-900 font-extrabold text-sm border border-[#E5E5E5] transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#007EFF]" />
                    <span>Call (817) 231‑2962</span>
                  </a>
                </div>

                <div className="text-center text-xs text-[#6B6B6B] pt-2">
                  Submissions are routed directly to{' '}
                  <span className="font-bold text-slate-800">leroyreber@gmail.com</span> and{' '}
                  <span className="font-bold text-slate-800">Leroy@fortworthsecuritycameras.com</span>. We
                  respect your privacy and never sell or share your contact information.
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Local Office Information & Trust Badges */}
        <section className="max-w-7xl mx-auto px-4 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#007EFF] shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Fort Worth Office</h3>
                <p className="text-xs text-[#6B6B6B] mt-1 leading-relaxed">
                  2203 8th Ave, Fort Worth, TX 76110<br />
                  Serving Fort Worth and all surrounding North Texas cities
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm flex items-start gap-4">
              <Clock className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Local Business Hours</h3>
                <p className="text-xs text-[#6B6B6B] mt-1 leading-relaxed">
                  Monday – Friday: 10:30 AM – 6:30 PM<br />
                  Saturday: 10:00 AM – 4:00 PM
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm flex items-start gap-4">
              <Award className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Licensed & Insured</h3>
                <p className="text-xs text-[#6B6B6B] mt-1 leading-relaxed">
                  19+ years in business in Texas<br />
                  1‑year equipment & labor warranty on installed systems
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services Internal Links */}
        <section className="max-w-7xl mx-auto px-4 pt-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Star className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-slate-800">
              Popular Fort Worth security camera services
            </span>
          </div>
          <p className="text-xs text-slate-600 max-w-2xl">
            After you request your free quote, you can explore detailed pages for our most requested
            Fort Worth security camera services. These guides explain residential installation,
            commercial CCTV systems, and our overall Fort Worth service area.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <NavLink
              to="/"
              onNavigate={onNavigate}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 hover:border-[#007EFF] hover:text-[#007EFF] shadow-sm transition-colors"
            >
              <Shield className="w-3.5 h-3.5 text-[#007EFF]" />
              <span>Fort Worth Security Camera Home Page</span>
            </NavLink>
            <NavLink
              to="/residential-security-camera-installation-fort-worth"
              onNavigate={onNavigate}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 hover:border-[#007EFF] hover:text-[#007EFF] shadow-sm transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-[#007EFF]" />
              <span>Fort Worth Residential Security Camera Installation</span>
            </NavLink>
            <NavLink
              to="/commercial-security-camera-installation-fort-worth"
              onNavigate={onNavigate}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 hover:border-[#007EFF] hover:text-[#007EFF] shadow-sm transition-colors"
            >
              <Award className="w-3.5 h-3.5 text-[#007EFF]" />
              <span>Fort Worth Commercial CCTV & IP Camera Systems</span>
            </NavLink>
            <NavLink
              to="/blog"
              onNavigate={onNavigate}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 hover:border-[#007EFF] hover:text-[#007EFF] shadow-sm transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#007EFF]" />
              <span>Fort Worth Security Camera Blog & Guides</span>
            </NavLink>
          </div>
        </section>
      </div>
    </>
  );
};