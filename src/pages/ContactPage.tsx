import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  Star,
  MessageSquare,
  HelpCircle,
  Building2,
  Home,
  Award,
  ChevronRight,
  Calculator,
  ShieldAlert,
  ExternalLink,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { logLeadSubmission } from '../lib/trafficTracker';
import { sendWeb3FormSubmission } from '../lib/web3forms';
import { getFormTrackingInfo, FormTrackingInfo } from '../lib/trackingSession';
import { FormTrackingMetadataBadge } from '../components/FormTrackingMetadataBadge';
import { SURVEILLANCE_IMAGES, BRAND_ASSETS } from '../data/imagesData';
import { SafeImage } from '../components/SafeImage';
import { NavLink } from '../components/NavLink';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [lastTrackingInfo, setLastTrackingInfo] = useState<FormTrackingInfo | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Fort Worth',
    preferredService: '4K PoE Security Camera System',
    propertyType: 'home',
    cameraCount: 4,
    resolution: '4K',
    addDvrLockBox: false,
    addRingDoorbell: false,
    preferredContact: 'phone',
    urgentResponse: false,
    comments: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    };
  };

  const estimate = calculateEstimate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const trackingInfo = getFormTrackingInfo();
    setLastTrackingInfo(trackingInfo);

    logLeadSubmission({
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      serviceRequested: `[Contact Form] ${formData.cameraCount}-Cam/Drops ${formData.preferredService} (${formData.city}) [Contact Method: ${formData.preferredContact.toUpperCase()}]${
        formData.urgentResponse ? ' [URGENT]' : ''
      }`,
      address: formData.comments
        ? `City: ${formData.city} | Type: ${formData.propertyType} | ${formData.comments}`
        : `City: ${formData.city} | Type: ${formData.propertyType}`,
      source: `${trackingInfo.submittedFromPage} [Domain: ${trackingInfo.websiteSource}] [Landing: ${trackingInfo.landingPage}] [Origin: ${trackingInfo.referrer}]`,
    });

    await sendWeb3FormSubmission({
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      propertyType: formData.propertyType,
      cameraCount: formData.cameraCount,
      preferredService: formData.preferredService,
      interestArea: trackingInfo.interestArea,
      contactMethod: formData.preferredContact,
      urgent: formData.urgentResponse,
      estimateRange: `$${estimate.low.toLocaleString()} – $${estimate.high.toLocaleString()}`,
      comments: formData.comments,
      websiteSource: trackingInfo.websiteSource,
      sourceUrl: trackingInfo.submittedFromUrl,
      sourcePathname: trackingInfo.submittedFromPage,
      landingPage: trackingInfo.landingPage,
      landingUrl: trackingInfo.landingUrl,
      cameFrom: 'Contact Us Dedicated Form',
      referrer: trackingInfo.referrer,
      subject: `New Lead: ${formData.fullName} - ${trackingInfo.interestArea || formData.preferredService} (${formData.city}) [via ${trackingInfo.websiteSource}]`,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const canonicalUrl = 'https://fortworthsecuritycameras.com/contact-us-fort-worth';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Fort Worth Security Cameras',
    description:
      'Contact licensed Fort Worth security camera technicians at 2203 8th Ave, Fort Worth, TX 76110. Call (817) 231-2962 or request a free itemized estimate for residential and commercial CCTV and low-voltage installation.',
    url: canonicalUrl,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Fort Worth Security Cameras',
      image: BRAND_ASSETS.logo,
      telephone: '817-231-2962',
      email: 'Leroy@fortworthsecuritycameras.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2203 8th Ave',
        addressLocality: 'Fort Worth',
        addressRegion: 'TX',
        postalCode: '76110',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 32.7555,
        longitude: -97.3308,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '10:30',
          closes: '18:30',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '10:00',
          closes: '16:00',
        },
      ],
      priceRange: '$$',
    },
  };

  const faqs = [
    {
      q: 'How quickly can a technician visit my Fort Worth location for a site assessment?',
      a: 'We offer same-week on-site walkthroughs across Fort Worth, Arlington, Keller, Benbrook, Southlake, and Tarrant County. In many cases, we can accommodate same-day or next-day site visits.',
    },
    {
      q: 'Are your security camera estimates 100% free with no obligation?',
      a: 'Yes, absolutely. We provide completely free, itemized estimates for both residential homes and commercial business properties. We inspect your property, measure cable runs, and provide transparent pricing.',
    },
    {
      q: 'Do your installed security camera systems require monthly subscription fees?',
      a: 'No. All of our custom 4K PoE security camera systems connect directly to a local Network Video Recorder (NVR) on your premises. You own the hardware 100% and access encrypted live video feeds and recordings via mobile app with zero monthly fees.',
    },
    {
      q: 'What warranty and support do you provide after installation?',
      a: 'Every installation is backed by our 1-Year Full Equipment and Workmanship Replacement Warranty. If any camera or cable drop encounters a defect, our local Fort Worth technicians repair or replace it directly.',
    },
    {
      q: 'Where is your Fort Worth office located?',
      a: 'Our main office and dispatch facility is located at 2203 8th Ave, Fort Worth, TX 76110 in the Near Southside / Fairmount area, serving the entire DFW Metroplex.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Contact Fort Worth Security Cameras | (817) 231-2962 | Free Estimate"
        description="Contact licensed Fort Worth security camera technicians at 2203 8th Ave, Fort Worth, TX 76110. Call (817) 231-2962 or request a free itemized estimate for residential and commercial CCTV and low-voltage installation."
        canonicalUrl={canonicalUrl}
        schema={schema}
      />

      <div className="bg-[#F8FAFC] min-h-screen pb-20 font-sans text-slate-900">
        <Breadcrumb
          items={[
            { label: 'Home', path: '/' },
            {
              label: 'Contact Us',
              path: '/contact-us-fort-worth',
            },
          ]}
          onNavigate={onNavigate}
          variant="light"
        />

        {/* HERO HEADER WITH DARK IMAGE OVERLAY */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-12 lg:py-16 border-b border-slate-800">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 sm:opacity-85 transition-all duration-700 pointer-events-none"
            style={{ backgroundImage: `url(${SURVEILLANCE_IMAGES.heroBg.url})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-bold text-sky-400 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Texas Licensed Low-Voltage Contractor • 2203 8th Ave, Fort Worth</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Contact Fort Worth Security Cameras
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Have questions about 4K PoE security camera systems, NVR storage, Cat6 cable runs,
                TV wall mounting, or smart doorbells? Connect directly with our lead Fort Worth
                technicians for fast, honest advice and free itemized estimates.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:8172312962"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (817) 231-2962</span>
                </a>

                <a
                  href="sms:8172312962?body=Hi%20Fort%20Worth%20Security%20Cameras,%20I'm%20interested%20in%20a%20free%20quote"
                  className="px-5 py-3 rounded-xl bg-[#007EFF] hover:bg-blue-600 text-white font-extrabold text-xs shadow-lg transition flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Text Us (817) 231-2962</span>
                </a>

                <div className="text-xs text-slate-300 font-medium flex items-center gap-1.5 pl-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Fast local response • Mon–Fri 10:30am–6:30pm | Sat 10am–4pm</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BADGES BAR */}
        <section className="bg-white border-b border-[#E5E5E5] py-4 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-1">
              <ShieldCheck className="w-5 h-5 text-[#007EFF]" />
              <span className="font-extrabold text-slate-900">Licensed & Insured</span>
              <span className="text-[10px] text-slate-500">TX Low-Voltage Techs</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-1">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="font-extrabold text-slate-900">4.9 Star Rating</span>
              <span className="text-[10px] text-slate-500">Verified Google Reviews</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="font-extrabold text-slate-900">100% Free Quotes</span>
              <span className="text-[10px] text-slate-500">Zero Obligation</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-1">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="font-extrabold text-slate-900">1-Year Warranty</span>
              <span className="text-[10px] text-slate-500">Full Hardware Replacement</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-1">
              <Building2 className="w-5 h-5 text-[#007EFF]" />
              <span className="font-extrabold text-slate-900">2203 8th Ave HQ</span>
              <span className="text-[10px] text-slate-500">Fort Worth Local Office</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-1">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
              <span className="font-extrabold text-slate-900">$0 Monthly Fees</span>
              <span className="text-[10px] text-slate-500">100% Local Storage</span>
            </div>
          </div>
        </section>

        {/* MAIN TWO-COLUMN SECTION: CONTACT FORM & OFFICE LOCATION DETAILS */}
        <section className="max-w-7xl mx-auto px-4 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: INTERACTIVE CONTACT & ESTIMATE FORM */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E5E5] shadow-xl space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold mb-2">
                  <Send className="w-3.5 h-3.5" />
                  <span>Direct Request Form</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Send Us a Direct Message or Quote Request
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Submissions are dispatched instantly to{' '}
                  <strong className="text-slate-900">leroyreber@gmail.com</strong> and{' '}
                  <strong className="text-[#007EFF]">Leroy@fortworthsecuritycameras.com</strong>.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Message Received!</h3>
                  <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                    Thank you,{' '}
                    <strong className="text-slate-900">
                      {formData.fullName || 'Fort Worth customer'}
                    </strong>
                    . Your message has been sent directly to Leroy Reber and the Fort Worth technician team.
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-emerald-200 text-left max-w-sm mx-auto space-y-2 text-xs">
                    <div className="font-bold text-slate-900">Estimated Budget Range:</div>
                    <div className="text-xl font-black text-[#007EFF]">
                      ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
                    </div>
                    <div className="text-slate-500 text-[11px]">
                      *Based on {formData.cameraCount} camera drops with Cat6 cabling and 4K NVR storage.
                    </div>
                  </div>

                  {lastTrackingInfo && (
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-left max-w-sm mx-auto space-y-1.5 text-xs text-slate-600">
                      <div className="font-semibold text-slate-900 text-[11px] uppercase tracking-wider flex items-center justify-between">
                        <span>Lead Tracking Record:</span>
                        <span className="text-[#007EFF] font-bold">{lastTrackingInfo.websiteSource}</span>
                      </div>
                      <div className="text-[11px]">📄 <strong>Submitted From Page:</strong> <code className="bg-slate-200/70 px-1 py-0.5 rounded text-slate-800">{lastTrackingInfo.submittedFromPage}</code></div>
                      <div className="text-[11px]">🎯 <strong>Initial Landing Page:</strong> <code className="bg-slate-200/70 px-1 py-0.5 rounded text-slate-800">{lastTrackingInfo.landingPage}</code></div>
                      <div className="text-[11px]">🔗 <strong>Traffic Source:</strong> <span className="font-medium text-slate-800">{lastTrackingInfo.referrer}</span></div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href="tel:8172312962"
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow"
                    >
                      Call Tech Directly: (817) 231-2962
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  {/* Urgent Checkbox Alert Banner */}
                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900">
                          Need Urgent or Same-Day Response?
                        </div>
                        <div className="text-[11px] text-slate-600">
                          Check the priority box to alert our lead technician immediately.
                        </div>
                      </div>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer shrink-0">
                      <input
                        type="checkbox"
                        checked={formData.urgentResponse}
                        onChange={(e) =>
                          setFormData({ ...formData, urgentResponse: e.target.checked })
                        }
                        className="w-4 h-4 accent-amber-600 rounded cursor-pointer"
                      />
                      <span className="font-bold text-amber-800 text-xs">Urgent</span>
                    </label>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Smith"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-800 mb-1">
                        Phone Number (Call / Text) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(817) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-800 mb-1">
                        City / Location *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Fort Worth, Arlington, Keller, etc."
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service & Property Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.preferredService}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredService: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-xs sm:text-sm outline-none transition-colors"
                      >
                        <option value="4K PoE Security Camera System">
                          4K PoE Security Camera Installation
                        </option>
                        <option value="Commercial CCTV & Warehouse Cameras">
                          Commercial CCTV & Warehouse Cameras
                        </option>
                        <option value="Ring Video Doorbell Installation">
                          Ring Video Doorbell Installation
                        </option>
                        <option value="Network Cable Runs & Structured Cabling">
                          Network Cable Runs & Cat6 Drops
                        </option>
                        <option value="TV Wall Mounting & Display Setup">
                          TV Wall Mounting & Display Setup
                        </option>
                        <option value="Business Communications (VoIP/Fiber)">
                          Business Communications (VoIP / Fiber)
                        </option>
                        <option value="Business Website Design & SEO">
                          Business Website Design & Local SEO
                        </option>
                        <option value="System Repair or Equipment Upgrade">
                          Security System Repair or Upgrade
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-800 mb-1">Property Type</label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) =>
                          setFormData({ ...formData, propertyType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-xs sm:text-sm outline-none transition-colors"
                      >
                        <option value="home">Residential Single Home</option>
                        <option value="business">Small Business / Retail / Office</option>
                        <option value="commercial">Commercial Warehouse / Industrial</option>
                        <option value="apartment">Multi-Unit / HOA Property</option>
                      </select>
                    </div>
                  </div>

                  {/* Resolution & Add-Ons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Camera Resolution
                      </label>
                      <select
                        value={formData.resolution}
                        onChange={(e) => setFormData({ ...formData, resolution: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-xs sm:text-sm outline-none transition-colors"
                      >
                        <option value="4K">4K Ultra HD (+$20 / camera)</option>
                        <option value="2K">2K / 1080p Standard Base</option>
                      </select>
                    </div>

                    <div className="flex flex-col justify-end gap-1.5 text-xs font-bold text-slate-800">
                      <label className="cursor-pointer flex items-center gap-2 p-2 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] hover:bg-slate-200 transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.addDvrLockBox}
                          onChange={(e) => setFormData({ ...formData, addDvrLockBox: e.target.checked })}
                          className="accent-[#007EFF]"
                        />
                        <span>Add DVR Lock Box (+$140)</span>
                      </label>
                      <label className="cursor-pointer flex items-center gap-2 p-2 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] hover:bg-slate-200 transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.addRingDoorbell}
                          onChange={(e) => setFormData({ ...formData, addRingDoorbell: e.target.checked })}
                          className="accent-[#007EFF]"
                        />
                        <span>Add Ring Doorbell + Install (+$300)</span>
                      </label>
                    </div>
                  </div>

                  {/* Camera Count Slider + Real-Time Estimate */}
                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">
                        Estimated Camera Drops needed:
                      </span>
                      <span className="text-sm font-black text-[#007EFF] bg-white px-3 py-1 rounded-full border border-blue-200">
                        {formData.cameraCount} Drops
                      </span>
                    </div>
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
                      className="w-full accent-[#007EFF] cursor-pointer"
                    />
                    <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1">
                      <span className="flex items-center gap-1 font-semibold text-[#007EFF]">
                        <Calculator className="w-3.5 h-3.5" />
                        <span>Estimated Range:</span>
                      </span>
                      <span className="font-black text-slate-900 text-xs">
                        ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      How Should We Contact You?
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, preferredContact: 'phone' })
                        }
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                          formData.preferredContact === 'phone'
                            ? 'bg-[#007EFF] text-white border-[#007EFF]'
                            : 'bg-[#F5F5F5] text-slate-700 border-[#E5E5E5] hover:bg-slate-200'
                        }`}
                      >
                        Phone Call
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, preferredContact: 'text' })
                        }
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                          formData.preferredContact === 'text'
                            ? 'bg-[#007EFF] text-white border-[#007EFF]'
                            : 'bg-[#F5F5F5] text-slate-700 border-[#E5E5E5] hover:bg-slate-200'
                        }`}
                      >
                        SMS Text
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, preferredContact: 'email' })
                        }
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                          formData.preferredContact === 'email'
                            ? 'bg-[#007EFF] text-white border-[#007EFF]'
                            : 'bg-[#F5F5F5] text-slate-700 border-[#E5E5E5] hover:bg-slate-200'
                        }`}
                      >
                        Email Only
                      </button>
                    </div>
                  </div>

                  {/* Comments */}
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      Message / Specific Property Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your property, mounting preferences (e.g. brick eaves), or questions..."
                      value={formData.comments}
                      onChange={(e) =>
                        setFormData({ ...formData, comments: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#007EFF] text-slate-900 text-xs sm:text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Form Tracking Metadata Badge */}
                  <FormTrackingMetadataBadge sourceContext="Contact Page Main Form" />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-xl bg-[#007EFF] hover:bg-[#3398FF] active:bg-[#66B2FF] text-white font-black text-sm transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Contact Request</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-slate-500 text-center">
                    Submissions are dispatched directly to{' '}
                    <span className="font-bold text-slate-800">leroyreber@gmail.com</span> and{' '}
                    <span className="font-bold text-slate-800">
                      Leroy@fortworthsecuritycameras.com
                    </span>
                    .
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: OFFICIAL HQ DETAILS & INTERACTIVE CONTACT CARDS */}
            <div className="lg:col-span-5 space-y-6">
              {/* Main HQ NAP Block */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <SafeImage
                      src={BRAND_ASSETS.logo}
                      fallbackSrc={BRAND_ASSETS.logoFallback}
                      alt="Fort Worth Security Cameras Logo"
                      className="h-10 w-auto object-contain bg-white p-1 rounded-lg"
                    />
                    <div>
                      <h3 className="font-black text-white text-base">
                        Fort Worth Security Cameras
                      </h3>
                      <p className="text-xs text-slate-400">Main Headquarters & Dispatch</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#007EFF] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-sm">Official Address</div>
                      <div className="text-slate-300">
                        2203 8th Ave, Fort Worth, TX 76110
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        Near Southside / Fairmount / Medical District
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-sm">Direct Phone & SMS</div>
                      <a
                        href="tel:8172312962"
                        className="text-emerald-400 font-bold hover:underline text-sm"
                      >
                        (817) 231-2962
                      </a>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        Instant phone call or SMS text dispatch
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#007EFF] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-sm">Official Email Contacts</div>
                      <a
                        href="mailto:Leroy@fortworthsecuritycameras.com"
                        className="text-slate-300 hover:text-white block truncate"
                      >
                        Leroy@fortworthsecuritycameras.com
                      </a>
                      <a
                        href="mailto:leroyreber@gmail.com"
                        className="text-slate-300 hover:text-white block truncate"
                      >
                        leroyreber@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-sm">Hours of Operation</div>
                      <div className="text-slate-300">Monday – Friday: 10:30 AM – 6:30 PM</div>
                      <div className="text-slate-300">Saturday: 10:00 AM – 4:00 PM</div>
                      <div className="text-slate-400 text-[11px]">
                        Sunday: Closed (Emergency dispatch on call)
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Fort+Worth+Security+Cameras+2203+8th+Ave+Fort+Worth+TX+76110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold text-xs transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                    <span>5.0 Star Google Business Profile (212 Reviews)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-300 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="https://maps.google.com/?q=2203+8th+Ave,+Fort+Worth,+TX+76110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs transition flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#007EFF]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                {/* Embedded Google Map — reinforces NAP consistency for local SEO and gives visitors an on-page map */}
                <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-md">
                  <iframe
                    title="Fort Worth Security Cameras HQ Location Map - 2203 8th Ave, Fort Worth, TX 76110"
                    src="https://maps.google.com/maps?q=2203%208th%20Ave%2C%20Fort%20Worth%2C%20TX%2076110&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Embedded Google Map showing Fort Worth Security Cameras headquarters at 2203 8th Ave, Fort Worth, TX 76110"
                  />
                </div>
              </div>

              {/* Service Areas Card */}
              <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-sm space-y-3 text-xs">
                <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm border-b border-[#E5E5E5] pb-2">
                  <MapPin className="w-4 h-4 text-[#007EFF]" />
                  <span>Primary Tarrant County & DFW Service Coverage</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Our installation trucks dispatch daily across Fort Worth, Arlington, Benbrook,
                  Keller, Southlake, Colleyville, Hurst, Euless, Bedford, Grapevine, Mansfield,
                  Burleson, Saginaw, Haltom City, and the entire DFW Metroplex.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    'Fort Worth',
                    'Arlington',
                    'Benbrook',
                    'Keller',
                    'Southlake',
                    'Grapevine',
                    'Mansfield',
                    'Burleson',
                  ].map((city) => (
                    <span
                      key={city}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 font-semibold text-[11px]"
                    >
                      {city}, TX
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED LOCAL SERVICES (internal linking hub) */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Related Fort Worth low-voltage services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fort Worth Security Cameras provides more than CCTV. Our licensed low-voltage
                team designs complete systems that combine 4K IP cameras, structured cabling,
                TV wall mounting, and smart video doorbells so your home or business stays
                protected and connected.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When you contact us, we can include options for network cabling, TV mounting,
                and Ring doorbells in the same proposal—one Fort Worth contractor for your
                entire low-voltage scope.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs sm:text-sm text-slate-600">
                Explore our core local services:
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <NavLink
                  to="/residential-security-camera-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Residential security camera installation Fort Worth
                </NavLink>
                <NavLink
                  to="/commercial-security-camera-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Commercial security camera installation Fort Worth
                </NavLink>
                <NavLink
                  to="/network-cable-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Network cable installation & Cat6 drops
                </NavLink>
                <NavLink
                  to="/tv-wall-mounting-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  TV wall mounting & display setup
                </NavLink>
                <NavLink
                  to="/ring-video-doorbell-installation-fort-worth"
                  onNavigate={onNavigate}
                  className="inline-block px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
                >
                  Ring smart video doorbell installation
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <HelpCircle className="w-4 h-4" />
              <span>Contact FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Got questions before reaching out? Here are quick answers regarding estimates,
              warranties, and dispatch timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm space-y-2"
              >
                <h3 className="font-black text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-[#007EFF] font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="max-w-7xl mx-auto px-4 pt-16">
          <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-2 relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Free On-Site Consultation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Ready to Secure Your Fort Worth Property?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Call our local office directly at{' '}
                <strong className="text-white">(817) 231-2962</strong> or request a free itemized
                quote today. Zero pressure, zero hidden monthly fees.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
              <a
                href="tel:8172312962"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg transition text-center"
              >
                Call (817) 231-2962
              </a>
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#007EFF] hover:bg-blue-600 text-white font-black text-xs shadow-lg transition text-center"
              >
                Get Free Itemized Quote
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};