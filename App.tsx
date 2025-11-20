import React, { useMemo, useState } from 'react';
import { COUNTRIES } from './constants';
import { CountryData, Region, VisaType } from './types';
import WorldMap from './components/WorldMap';
import CountryCard from './components/CountryCard';

const App: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Derived Statistics
  const stats = useMemo(() => {
    return {
      total: COUNTRIES.length,
      visaFree: COUNTRIES.filter(c => c.type === VisaType.VISA_FREE || c.type === VisaType.MUTUAL_FREE).length,
      voa: COUNTRIES.filter(c => c.type === VisaType.VOA).length,
    };
  }, []);

  // Filtering Logic
  const filteredCountries = useMemo(() => {
    let data = COUNTRIES;
    
    // Filter by Region
    if (activeRegion !== 'ALL') {
      data = data.filter(c => c.region === activeRegion);
    }

    // Filter by Search
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      data = data.filter(c => c.name.toLowerCase().includes(lowerQuery));
    }

    return data;
  }, [activeRegion, searchQuery]);

  const regions = ['ALL', ...Object.values(Region)];

  const handleCountrySelect = (country: CountryData) => {
     setSearchQuery(country.name);
     const element = document.getElementById("content-section");
     if(element) element.scrollIntoView({behavior: "smooth"});
  };

  return (
    <div className="min-h-screen text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 relative bg-[#f8fafc]">
      
      {/* --- AMBIENT BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-50/50">
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[120px] animate-blob"></div>
         <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000"></div>
         <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-emerald-100/40 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* --- SECTION 1: FULL SCREEN MAP --- */}
      <section className="relative w-full h-screen overflow-hidden z-0">
        
        {/* Floating Premium Glass Header */}
        <header className="absolute top-0 left-0 w-full z-50 p-4 sm:p-6 pointer-events-none">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Brand */}
            <div className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-5 py-3 rounded-2xl flex items-center gap-4 transition-transform hover:scale-105 duration-300 ring-1 ring-white/60">
               <div className="w-12 h-8 rounded-md shadow-sm ring-1 ring-slate-900/10 overflow-hidden shrink-0">
                 <img src="https://flagcdn.com/w80/cn.png" alt="China Flag" className="w-full h-full object-cover" />
               </div>
               <div>
                 <h1 className="text-base font-bold text-slate-800 leading-tight">
                   2025 中国护照通行指南
                 </h1>
                 <p className="text-[10px] text-slate-500 font-bold tracking-[0.15em] uppercase mt-0.5">Passport Power</p>
               </div>
            </div>

            {/* Quick Stats (Premium Glass) */}
            <div className="pointer-events-auto bg-white/90 backdrop-blur-md border border-white/60 shadow-sm px-6 py-3 rounded-2xl flex gap-6 md:gap-8 items-center ring-1 ring-white/50 select-none">
              <div className="flex flex-col items-center group cursor-default min-w-[40px]">
                <div className="text-2xl font-black text-slate-800 group-hover:scale-110 transition-transform duration-300 leading-none tracking-tight">{stats.total}</div>
                <div className="text-[11px] font-bold text-slate-500 mt-1">目的地</div>
              </div>
              <div className="w-px h-8 bg-slate-200/80"></div>
              <div className="flex flex-col items-center group cursor-default min-w-[40px]">
                <div className="text-2xl font-black text-emerald-600 group-hover:scale-110 transition-transform duration-300 leading-none tracking-tight">{stats.visaFree}</div>
                <div className="text-[11px] font-bold text-slate-500 mt-1">免签/互免</div>
              </div>
              <div className="w-px h-8 bg-slate-200/80"></div>
              <div className="flex flex-col items-center group cursor-default min-w-[40px]">
                <div className="text-2xl font-black text-amber-500 group-hover:scale-110 transition-transform duration-300 leading-none tracking-tight">{stats.voa}</div>
                <div className="text-[11px] font-bold text-slate-500 mt-1">落地签</div>
              </div>
            </div>
          </div>
        </header>

        {/* Map Component */}
        <WorldMap 
          countries={COUNTRIES} // Show markers for all countries initially
          onCountrySelect={handleCountrySelect}
        />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none z-20">
          <div className="bg-white/30 backdrop-blur-md p-3 rounded-full border border-white/50 shadow-lg ring-1 ring-white/50">
            <svg className="w-6 h-6 text-slate-600 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f8fafc] to-transparent pointer-events-none"></div>
      </section>


      {/* --- SECTION 2: CONTENT LIST --- */}
      <section id="content-section" className="relative z-30 -mt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Glass Toolbar (Sticky) */}
        <div className="sticky top-4 z-40 mb-8">
          <div className="bg-white/90 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.05)] rounded-2xl p-1.5 flex flex-col lg:flex-row gap-2 items-center justify-between ring-1 ring-black/5">
             
             {/* Region Tabs */}
             <div className="flex overflow-x-auto w-full lg:w-auto gap-1 no-scrollbar p-1">
                {regions.map(region => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className={`px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-200 whitespace-nowrap ${
                      (activeRegion === region) 
                      ? 'bg-slate-800 text-white shadow-md shadow-slate-800/20 translate-y-0' 
                      : 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                    }`}
                  >
                    {region === 'ALL' ? '全部区域' : region}
                  </button>
                ))}
             </div>

             {/* Search Box */}
             <div className="relative w-full lg:w-80 group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder="搜索国家或地区..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-9 py-2.5 border-0 rounded-xl text-sm bg-slate-100/80 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all font-semibold"
                />
                {searchQuery && (
                   <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 bg-slate-200/50 hover:bg-slate-200 rounded-full p-0.5 w-5 h-5 flex items-center justify-center transition-colors"
                   >
                     <span className="text-[10px] font-bold">✕</span>
                   </button>
                 )}
             </div>
          </div>
        </div>

        {/* Important Alert - Redesigned */}
        <div className="mb-8 bg-amber-50/60 border border-amber-100 rounded-2xl p-5 flex flex-col sm:flex-row gap-5 items-start sm:items-center backdrop-blur-sm relative overflow-hidden group">
           {/* Decorative Background Icon */}
           <div className="absolute -right-6 -top-6 text-amber-100 opacity-50 rotate-12 pointer-events-none">
              <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
           </div>

           <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-sm ring-2 ring-white z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
           </div>
           <div className="text-slate-700 leading-relaxed text-sm z-10">
             <h4 className="font-bold text-slate-900 mb-0.5">出行前请务必确认</h4>
             <p>护照有效期需在 <span className="font-bold text-amber-700 bg-amber-100/50 px-1 rounded">6 个月以上</span>。即使免签，也请备好<span className="font-semibold text-slate-900 border-b-2 border-amber-200">往返机票</span>和<span className="font-semibold text-slate-900 border-b-2 border-amber-200">酒店订单</span>以供查验。</p>
           </div>
        </div>

        {/* Grid Results */}
        <div className="min-h-[400px]">
          {filteredCountries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 pb-10">
              {filteredCountries.map(country => (
                <CountryCard key={country.id} country={country} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 opacity-60 bg-white/30 rounded-3xl border border-dashed border-slate-200">
              <div className="text-6xl mb-4 grayscale opacity-30">🌏</div>
              <h3 className="text-lg font-bold text-slate-400">未找到相关结果</h3>
              <p className="text-sm text-slate-400 mt-2">请尝试切换区域或搜索其他关键词</p>
            </div>
          )}
        </div>

        <footer className="mt-10 border-t border-slate-200 pt-10 pb-10 text-center">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Data derived from 2025 Policy Projections</p>
          <p className="text-slate-300 text-[10px] mt-2">Always check official government sources before traveling.</p>
        </footer>

      </section>
    </div>
  );
};

export default App;