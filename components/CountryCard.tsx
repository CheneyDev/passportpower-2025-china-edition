import React from 'react';
import { CountryData, VisaType } from '../types';

interface CountryCardProps {
  country: CountryData;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  
  // Helper for Badge Styles - using softer, more pastel backgrounds with punchy text
  const getBadgeConfig = (type: VisaType) => {
    switch (type) {
      case VisaType.MUTUAL_FREE:
        return { 
          bg: "bg-emerald-50", 
          text: "text-emerald-600", 
          border: "border-emerald-100",
          label: "互免"
        };
      case VisaType.VISA_FREE:
        return { 
          bg: "bg-green-50", 
          text: "text-green-600", 
          border: "border-green-100",
          label: "免签"
        };
      case VisaType.VOA:
        return { 
          bg: "bg-orange-50", 
          text: "text-orange-600", 
          border: "border-orange-100",
          label: "落地签"
        };
      default:
        return { 
          bg: "bg-slate-50", 
          text: "text-slate-600", 
          border: "border-slate-100",
          label: "电子/其他"
        };
    }
  };

  const badge = getBadgeConfig(country.type);

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100 p-5 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:border-blue-100/50 hover:-translate-y-1 overflow-hidden">
      
      {/* Decorative Top Gradient Line */}
      <div className={`absolute top-0 left-0 w-full h-1 ${badge.bg.replace('50', '400/30')}`}></div>

      {/* Header: Flag + Name + Badge */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-4 items-center">
          {/* Flag with subtle shadow */}
          <div className="relative shrink-0">
            <span className="text-6xl filter drop-shadow-sm leading-none block transform group-hover:scale-110 transition-transform duration-300">{country.flag}</span>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 leading-tight tracking-tight group-hover:text-blue-600 transition-colors">
              {country.name}
            </h3>
          </div>
        </div>

        {/* Modern Pill Badge */}
        <div className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border ${badge.bg} ${badge.text} ${badge.border} shrink-0`}>
          {badge.label}
        </div>
      </div>

      {/* Data Grid - Clean Layout */}
      <div className="grid grid-cols-3 gap-px bg-slate-50 rounded-xl border border-slate-100 overflow-hidden mb-4">
        
        {/* Region */}
        <div className="bg-white p-2 flex flex-col items-center justify-center border-r border-slate-50">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">区域</span>
          <div className="flex items-center gap-1.5 w-full justify-center">
            <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-bold text-slate-700 truncate text-center leading-tight" title={country.region}>
               {country.region}
            </span>
          </div>
        </div>

        {/* Duration */}
        <div className="bg-white p-2 flex flex-col items-center justify-center border-r border-slate-50">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">停留</span>
          <div className="flex items-center gap-1.5 w-full justify-center">
            <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-bold text-slate-700 truncate">{country.days.replace(' 天', '天')}</span>
          </div>
        </div>
        
        {/* Cost */}
        <div className="bg-white p-2 flex flex-col items-center justify-center">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">费用</span>
           <div className="flex items-center gap-1.5 w-full justify-center">
            <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className={`text-sm font-bold ${!country.cost || country.cost === '免费' ? 'text-green-600' : 'text-slate-700'} truncate max-w-[80px] text-center`}>
              {country.cost ? country.cost : '免费'}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      {country.note && (
        <div className="flex items-start gap-2 px-1">
          <div className="w-3.5 h-3.5 mt-0.5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-[11px] text-slate-500 leading-snug">
            {country.note}
          </p>
        </div>
      )}

      {/* Action Hover Arrow */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default CountryCard;