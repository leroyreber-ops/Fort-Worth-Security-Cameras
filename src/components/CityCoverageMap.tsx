import React, { useState } from 'react';
import { MapPin, Search, ArrowRight, ShieldCheck, Building2, CheckCircle2 } from 'lucide-react';
import { DFW_CITIES } from '../data/citiesData';
import { NavLink } from './NavLink';

interface CityCoverageMapProps {
  onSelectCity: (slug: string) => void;
}

export const CityCoverageMap: React.FC<CityCoverageMapProps> = ({ onSelectCity }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCities = DFW_CITIES.filter((city) =>
    city.cityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.county.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.zipCodes.some((z) => z.includes(searchTerm))
  );

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E5E5] text-slate-900 shadow-md space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#007EFF] mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Local DFW Service Radius</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900">Fort Worth & Surrounding Cities Coverage</h3>
          <p className="text-xs sm:text-sm text-[#6B6B6B]">
            Dedicated local landing pages and technicians servicing Tarrant, Parker, Johnson, & Denton counties.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search city or zip code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] text-xs text-slate-900 placeholder-slate-400 focus:border-[#007EFF] outline-none"
          />
        </div>
      </div>

      {/* City Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filteredCities.map((city) => (
          <NavLink
            key={city.slug}
            to={`/${city.slug}`}
            onNavigate={onSelectCity}
            className="p-3.5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] hover:border-[#007EFF] hover:bg-blue-50 transition-all text-left group space-y-1 block"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-900 group-hover:text-[#007EFF] transition-colors">
                {city.cityName}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#007EFF] group-hover:translate-x-1 transition-all" />
            </div>
            <div className="text-[11px] text-[#6B6B6B] flex items-center gap-1 font-medium">
              <span>{city.county.replace(' County', '')}</span>
              <span>•</span>
              <span className="text-emerald-700 font-bold">{city.population}</span>
            </div>
          </NavLink>
        ))}
      </div>

      {filteredCities.length === 0 && (
        <div className="p-8 text-center text-[#6B6B6B] text-xs font-medium">
          No matching cities found for "{searchTerm}". Call (817) 231-2962 for custom site surveys anywhere in DFW.
        </div>
      )}
    </div>
  );
};
