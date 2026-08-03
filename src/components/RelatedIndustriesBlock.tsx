import React from 'react';
import { ArrowRight, Building2, ShieldCheck } from 'lucide-react';
import { NavLink } from './NavLink';

export interface RelatedIndustryLink {
  slug: string;
  name: string;
  description?: string;
}

interface RelatedIndustriesBlockProps {
  title?: string;
  subtitle?: string;
  links: RelatedIndustryLink[];
  onNavigate: (path: string) => void;
}

export const RelatedIndustriesBlock: React.FC<RelatedIndustriesBlockProps> = ({
  title = 'Related Industry Security Solutions',
  subtitle = 'Explore specialized commercial security camera installation for related sectors across Fort Worth and DFW.',
  links,
  onNavigate,
}) => {
  if (!links || links.length === 0) return null;

  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007EFF] text-xs font-bold mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>Specialized Sector Coverage</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h3>
          <p className="mt-1.5 text-slate-600 text-sm max-w-3xl">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <NavLink
              key={link.slug}
              to={`/${link.slug}`}
              onNavigate={onNavigate}
              className="group p-4 rounded-xl border border-slate-200 hover:border-[#007EFF] bg-slate-50/50 hover:bg-blue-50/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#007EFF] mb-1.5">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>4K Security System</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#007EFF] group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#007EFF] transition-colors line-clamp-1">
                  {link.name}
                </h4>
                {link.description && (
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {link.description}
                  </p>
                )}
              </div>
              <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Fort Worth & DFW</span>
                <span className="text-[#007EFF] font-bold group-hover:underline">View System →</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};
