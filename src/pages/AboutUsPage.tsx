import React from 'react';
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  Award,
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Home,
  ChevronRight,
  Camera,
  Server,
  Zap,
  Lock,
  Shield,
  FileText,
  XCircle,
  HelpCircle,
  Check,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { SURVEILLANCE_IMAGES, BRAND_ASSETS } from '../data/imagesData';
import { SafeImage } from '../components/SafeImage';
import { NavLink } from '../components/NavLink';

interface AboutUsPageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const canonicalUrl = 'https://fortworthsecuritycameras.com/about-us-fort-worth';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Fort Worth Security Cameras',
    description:
      'Fort Worth Security Cameras is located at 2203 8th Ave in Fort Worth, TX 76110. All alarm and security camera installations are performed with licensed contractor Jericho Security and Sound (Texas Class B License B13764).',
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
      founder: {
        '@type': 'Person',
        name: 'Leroy Reber',
        jobTitle: 'Lead Security Systems & Communications Specialist',
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

  const comparisons = [
    {
      feature: 'Licensed Security Partner',
      us: 'Jericho Security and Sound (B13764)',
      others: 'May use unlicensed subcontractors or DIY installs',
      usHighlight: true,
    },
    {
      feature: 'Monthly Subscription Fees',
      us: '$0 / Month (100% owned hardware)',
      others: 'Recurring monthly monitoring fees',
      usHighlight: true,
    },
    {
      feature: 'Video Quality & Clarity',
      us: 'True 4K 8MP PoE (optical zoom & night vision)',
      others: 'Lower‑resolution, compressed Wi‑Fi cameras',
      usHighlight: true,
    },
    {
      feature: 'Data Privacy & Storage',
      us: 'Encrypted local NVR hard drive on premises',
      others: 'Primarily cloud‑hosted storage',
      usHighlight: true,
    },
    {
      feature: 'Installation Cable Routing',
      us: 'Concealed attic Cat6 cabling and clean wall plates',
      others: 'Surface‑mounted cable tracks or fully wireless',
      usHighlight: true,
    },
    {
      feature: 'Equipment & Workmanship Warranty',
      us: '1‑year on‑site equipment and workmanship warranty',
      others: 'Limited mail‑in or short‑term coverage',
      usHighlight: true,
    },
    {
      feature: 'Local Fort Worth Service',
      us: 'Direct local tech call/text: (817) 231‑2962',
      others: 'Centralized call centers or ticket systems',
      usHighlight: true,
    },
  ];

  return (
    <>
      <SEOHead
        title="About Fort Worth Security Cameras | Licensed Security Camera Installation in DFW (B13764)"
        description="Learn about Fort Worth Security Cameras, our Fort Worth office at 2203 8th Ave, nearly 19 years in business, and licensed installation partner Jericho Security and Sound (Texas Class B License B13764) for professional security camera installation."
        canonicalUrl={canonicalUrl}
        schema={schema}
      />

      <div className="bg-[#F8FAFC] min-h-screen pb-20 font-sans text-slate-900">
        <Breadcrumb
          items={[
            { label: 'Home', path: '/' },
            {
              label: 'About Us',
              path: '/about-us-fort-worth',
            },
          ]}
          onNavigate={onNavigate}
          variant="light"
        />

        {/* HERO SECTION WITH BACKGROUND IMAGE */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-12 lg:py-20 border-b border-slate-800">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 sm:opacity-85 transition-all duration-700 pointer-events-none"
            style={{ backgroundImage: `url(${SURVEILLANCE_IMAGES.heroBg.url})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>
                  Licensed partner: Jericho Security and Sound (B13764) • 2203 8th Ave, Fort Worth
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                About Fort Worth Security Cameras
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                Fort Worth Security Cameras is a local security camera installation team based at
                2203 8th Ave in Fort Worth, TX 76110, serving homes and businesses across Tarrant
                County and the greater DFW metroplex. We specialize in 4K PoE IP cameras, commercial
                CCTV systems, and custom surveillance layouts tailored to North Texas properties and
                crime‑prevention needs.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:8172312962"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us: (817) 231‑2962</span>
                </a>

                <button
                  onClick={onOpenQuoteModal}
                  className="px-5 py-3 rounded-xl bg-[#007EFF] hover:bg-blue-600 text-white font-extrabold text-xs shadow-lg transition flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Free Itemized Quote</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BADGES BAR */}
        <section className="bg-white border-b border-[#E5E5E5] py-5 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center text-xs">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <ShieldCheck className="w-6 h-6 text-[#007EFF] mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">TX License B13764</div>
              <div className="text-[11px] text-slate-500">Jericho Security & Sound</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Star className="w-6 h-6 text-amber-500 fill-amber-500 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">4.9-Star Verified Reviews</div>
              <div className="text-[11px] text-slate-500">Strong rating in Tarrant County</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Award className="w-6 h-6 text-purple-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">1‑Year Warranty</div>
              <div className="text-[11px] text-slate-500">Workmanship & hardware</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Lock className="w-6 h-6 text-emerald-600 mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">Zero Monthly Fees</div>
              <div className="text-[11px] text-slate-500">100% owned hardware & storage</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Building2 className="w-6 h-6 text-[#007EFF] mx-auto" />
              <div className="font-extrabold text-slate-900 text-sm">2203 8th Ave HQ</div>
              <div className="text-[11px] text-slate-500">Fort Worth local office</div>
            </div>
          </div>
        </section>

        {/* MAIN ABOUT CONTENT SECTION */}
        <section className="max-w-7xl mx-auto px-4 pt-12 space-y-12">
          {/* LICENSED PARTNER BANNER */}
          <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950 text-white border border-emerald-800 shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <Shield className="w-72 h-72 text-emerald-400" />
            </div>
            <div className="relative z-10 max-w-4xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Licensed security contractor partnership</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Licensed installation partner: Jericho Security and Sound (B13764)
              </h2>
              <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
                All alarm and camera system installations are performed with licensed contractor{' '}
                <strong className="text-white">Jericho Security and Sound</strong>, Texas Class B
                Security Contractor License Number{' '}
                <strong className="text-emerald-300">B13764</strong>. This partnership ensures your
                Fort Worth security camera system is designed and installed under a fully licensed
                security company that has been protecting Texas properties for years.
              </p>
            </div>
          </div>

          {/* TWO COLUMN CONTENT BLOCKS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Local Roots & What We Install */}
            <div className="lg:col-span-7 space-y-8">
              {/* Local Fort Worth Roots & Coverage */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5E5] shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Local roots & service area</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Local Fort Worth roots & coverage
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  From neighborhoods like Tanglewood, Ridglea Hills, Fairmount, and the TCU area to
                  commercial corridors and industrial parks, our technicians design camera placement
                  based on actual local crime patterns and building styles. We dispatch directly from
                  our Fort Worth office and coordinate with Jericho Security and Sound to cover the
                  wider DFW region when projects require larger teams or specialized equipment.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-[#007EFF] shrink-0" />
                  <div>
                    <strong className="text-slate-900">Fort Worth headquarters:</strong> 2203 8th Ave,
                    Fort Worth, TX 76110 (Near Southside / Fairmount)
                  </div>
                </div>
              </div>

              {/* What We Install and Support */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5E5] shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Hardware & workmanship</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  What we install and support
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We focus on turnkey systems that include 4K cameras, solid copper Cat6 PoE cabling,
                  NVR recorders with local hard drive storage, and secure smartphone apps for remote
                  viewing. Installations include clean wiring through attics and soffits, weather‑sealed
                  junction boxes, and on‑site training so you know exactly how to view and manage your
                  footage.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-slate-800">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>True 4K 8MP PoE IP cameras</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Solid copper Cat6 wiring</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Local NVR storage hard drives</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Weather‑sealed junction boxes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Why Property Owners Choose Us & Warranty */}
            <div className="lg:col-span-5 space-y-8">
              {/* Why Fort Worth property owners choose us */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5E5] shadow-xl space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>The Fort Worth advantage</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight border-b border-[#E5E5E5] pb-3">
                  Why Fort Worth property owners choose us
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm">
                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-extrabold block">
                        Licensed Texas contractor:
                      </strong>
                      Installations performed with licensed Texas security contractor Jericho Security
                      and Sound (B13764).
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-extrabold block">
                        Local Fort Worth office:
                      </strong>
                      Local Fort Worth office with same‑week site assessments for residential and
                      commercial jobs.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-extrabold block">
                        Transparent itemized pricing:
                      </strong>
                      Transparent, itemized quotes so you see equipment, cabling, labor, and warranty
                      before we start.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-extrabold block">
                        Built for real conditions:
                      </strong>
                      Systems designed for real Fort Worth conditions: porches, driveways, parking
                      lots, warehouses, and office interiors.
                    </div>
                  </li>
                </ul>

                <div className="pt-2 border-t border-[#E5E5E5]">
                  <a
                    href="tel:8172312962"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow flex items-center justify-center gap-2 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Direct local line: (817) 231‑2962</span>
                  </a>
                </div>
              </div>

              {/* Guaranteed workmanship and local support */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-sky-400 text-xs font-bold border border-blue-500/30">
                  <Award className="w-3.5 h-3.5 text-sky-400" />
                  <span>On‑site warranty protection</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Guaranteed workmanship and local support
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Every installed system includes a workmanship and equipment warranty backed by our
                  Fort Worth team and our licensed installation partner. If you ever need upgrades,
                  additional cameras, or NVR expansion, we return to the same property with full
                  knowledge of your existing layout and cabling.
                </p>
              </div>
            </div>
          </div>

          {/* OUR STORY / HISTORY SECTION */}
          <div className="max-w-7xl mx-auto px-4 pt-16">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E5E5] shadow-lg space-y-4 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mx-auto">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Our Story</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-center">
                How Fort Worth Security Cameras and Jericho Security and Sound Partnered
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fort Worth Security Cameras began nearly 19 years ago after our owner,{' '}
                <strong className="text-slate-900">Leroy Reber</strong>, experienced repeated break‑ins
                at his electronics store and decided it was time to install cameras. Within six months,
                that first system turned into a dedicated security camera installation business focused
                on helping other Fort Worth property owners protect what matters most.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                About 16 years ago, <strong className="text-slate-900">Jericho Security and Sound</strong>{' '}
                approached us about partnering on security projects. Their owner and contracting team
                are honest, church‑going Seventh‑day Adventists, and some of the most trustworthy people
                we’ve ever worked with. As we completed more jobs together, projects grew larger,
                customers loved the results, and the partnership became a core part of our business.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Today, there is no job too big and no job too small. Our combined Fort Worth Security
                Cameras and Jericho Security and Sound teams handle commercial and residential work
                across the DFW area, often going above and beyond to make sure every customer’s needs
                are met and every system is installed exactly the way they envisioned. We are even
                expanding with a new location in the{' '}
                <strong className="text-slate-900">Medical District of Fort Worth</strong> to better
                serve local homes, clinics, and businesses.
              </p>
            </div>
          </div>

          {/* COMMITTED TO HONEST LONG-TERM SECURITY */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E5E5] shadow-lg space-y-4 text-center max-w-4xl mx-auto mt-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mx-auto">
              <Lock className="w-3.5 h-3.5" />
              <span>Zero monthly subscription guarantee</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Committed to honest, long‑term security
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We don’t lock customers into unnecessary monthly monitoring fees or confusing contracts.
              Instead, we build systems that record locally, give you full control of your footage, and
              can grow with your home or business. Our goal is simple: install reliable security cameras
              in Fort Worth and DFW, under a licensed contractor, with clear pricing and local support
              you can trust.
            </p>
          </div>
        </section>

        {/* COMPARISON TABLE: US VS. SUBSCRIPTION BRANDS */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold">
              <Zap className="w-4 h-4" />
              <span>Why homeowners and businesses choose us</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Fort Worth Security Cameras vs. subscription‑based security brands
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Compare local craftsmanship, data privacy, and lifetime costs before choosing your
              security system provider.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#E5E5E5] shadow-xl bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-4 font-black">System feature</th>
                  <th className="p-4 font-black text-[#007EFF] bg-slate-950">
                    Fort Worth Security Cameras
                  </th>
                  <th className="p-4 font-black text-slate-400">
                    Typical subscription‑based brands
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E5]">
                {comparisons.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="p-4 font-bold text-slate-900">{item.feature}</td>
                    <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item.us}</span>
                    </td>
                    <td className="p-4 text-slate-500">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{item.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CORE SERVICES OVERVIEW */}
        <section className="max-w-7xl mx-auto px-4 pt-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Our core low‑voltage and security services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              In addition to 4K security camera installations, our licensed Fort Worth team handles
              structured cabling, TV wall mounting, and commercial communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3 hover:border-[#007EFF] transition-colors">
              <Camera className="w-8 h-8 text-[#007EFF]" />
              <h3 className="font-black text-slate-900 text-base">
                Residential security camera installation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                4K PoE turret and dome cameras with smart AI human/vehicle detection, color night
                vision, and clean concealed attic wiring for Fort Worth homes.
              </p>
              <NavLink
                to="/residential-security-camera-installation-fort-worth"
                onNavigate={onNavigate}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#007EFF] hover:underline pt-1"
              >
                <span>Learn about residential installation</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </NavLink>
            </div>

            {/* Service 2 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3 hover:border-[#007EFF] transition-colors">
              <Building2 className="w-8 h-8 text-[#007EFF]" />
              <h3 className="font-black text-slate-900 text-base">
                Commercial CCTV and warehouse systems
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi‑camera NVR surveillance, license plate capture, perimeter audio warnings, and
                high‑bay warehouse camera drops across the DFW metro.
              </p>
              <NavLink
                to="/commercial-security-camera-installation-fort-worth"
                onNavigate={onNavigate}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#007EFF] hover:underline pt-1"
              >
                <span>Learn about commercial CCTV</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </NavLink>
            </div>

            {/* Service 3 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-md space-y-3 hover:border-[#007EFF] transition-colors">
              <Server className="w-8 h-8 text-[#007EFF]" />
              <h3 className="font-black text-slate-900 text-base">
                Cat6 network cabling and patch panels
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structured copper ethernet drops, server rack patch panels, wireless access points
                (WAP), and clean low‑voltage network wiring.
              </p>
              <NavLink
                to="/network-cable-installation-fort-worth"
                onNavigate={onNavigate}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#007EFF] hover:underline pt-1"
              >
                <span>Learn about network cabling</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </NavLink>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="max-w-7xl mx-auto px-4 pt-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-3 relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Texas licensed partner (B13764)</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Get a free on‑site walkthrough and itemized estimate
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Contact Leroy Reber and our team at 2203 8th Ave, Fort Worth, TX. We inspect your
                property and provide transparent, itemized quotes with zero pressure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full md:w-auto">
              <a
                href="tel:8172312962"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg transition text-center"
              >
                Call (817) 231‑2962
              </a>
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#007EFF] hover:bg-blue-600 text-white font-black text-xs shadow-lg transition text-center"
              >
                Request free quote
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};