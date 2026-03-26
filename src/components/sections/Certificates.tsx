import { useState } from 'react';
import { certificates } from '../../data/index';

const Certificates = () => {
  const [activeCert, setActiveCert] = useState(0);

  return (
    <section id="certificates" className="pt-24 pb-32 px-6 max-w-7xl mx-auto min-h-screen relative z-10">
      {/* Section Header */}
      <div className="mb-12 relative">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-[#dae2fd] tracking-tighter uppercase">Quest <span className="text-[#e9c349]">Artifacts</span></h1>
        <p className="font-headline text-sm tracking-[0.3em] text-[#c5c6d2] uppercase mt-2">Treasury of Certified Mastery</p>
        <div className="absolute -left-4 top-0 w-1 h-full bg-[#e9c349]"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Medal Room Grid */}
        <div className="lg:col-span-7 grid grid-cols-3 md:grid-cols-4 gap-4">
          {certificates.map((cert, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveCert(idx)}
              className={`group relative aspect-square bg-[#131b2e] border-2 ${activeCert === idx ? 'border-[#e9c349]' : 'border-transparent hover:border-[#e9c349]'} p-1 transition-all steps-4 cursor-pointer`}
            >
              <div className="w-full h-full bg-[#222a3d] flex flex-col items-center justify-center relative overflow-hidden">
                <span className={`material-symbols-outlined text-4xl ${cert.color} animate-bob`} style={{ fontVariationSettings: '"FILL" 1' }}>{cert.icon}</span>
                <div className={`absolute inset-0 ${activeCert === idx ? 'bg-[#e9c349]/10' : 'bg-[#e9c349]/0 group-hover:bg-[#e9c349]/5'} transition-colors`}></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full w-48 bg-[#060e20] border-2 border-[#e9c349] p-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <p className="font-headline text-xs text-[#e9c349] font-bold uppercase mb-1">{cert.title}</p>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-[#c5c6d2] uppercase">ISSUER:</span>
                  <span className="text-[#b4c5ff] uppercase font-bold">{cert.issuer}</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Artifact Item (Locked placeholders to fill the grid) */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
            <div key={`locked-${i}`} className="group relative aspect-square bg-[#131b2e] border-2 border-transparent p-1 cursor-not-allowed">
              <div className="w-full h-full bg-[#131b2e] flex flex-col items-center justify-center opacity-30">
                <span className="material-symbols-outlined text-4xl text-[#8e909c]">lock</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Display Pedestal */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative bg-[#131b2e] border-t-4 border-[#e9c349] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e9c349]/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10 flex flex-col gap-6">
              <div className="w-full aspect-[4/3] bg-[#2d3449] overflow-hidden relative group border-2 border-[#444650]">
                <img alt={certificates[activeCert].title} className="w-full h-full object-cover" src={certificates[activeCert].image} />
                <div className="absolute inset-0 flex items-center justify-center bg-[#060e20]/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={certificates[activeCert].link} target="_blank" rel="noreferrer" className="bg-[#e9c349] text-[#241a00] font-headline font-bold px-6 py-2 uppercase tracking-widest active:scale-95 transition-all outline-none border-0 inline-block">VIEW FULL SCROLL</a>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-headline text-[10px] tracking-widest text-[#b4c5ff] uppercase">Current Selection</span>
                    <h2 className="font-headline text-xl font-bold text-[#e9c349] uppercase leading-tight mt-1">{certificates[activeCert].title}</h2>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <span className="font-headline text-[10px] tracking-widest text-[#b4c5ff] uppercase">Issuer</span>
                    <p className="font-headline font-bold text-[#dae2fd] uppercase mt-1">{certificates[activeCert].issuer}</p>
                  </div>
                </div>
                <div className="p-4 bg-[#060e20]/50 border-l-2 border-[#e9c349] font-body text-sm leading-relaxed text-[#c5c6d2]">
                  "{certificates[activeCert].desc}"
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#222a3d] p-3 border border-[#444650]">
                    <span className="block font-headline text-[8px] text-[#b4c5ff] uppercase mb-1">Obtained</span>
                    <span className="block font-headline text-xs font-bold text-[#dae2fd]">{certificates[activeCert].date}</span>
                  </div>
                  <div className="bg-[#222a3d] p-3 border border-[#444650]">
                    <span className="block font-headline text-[8px] text-[#b4c5ff] uppercase mb-1">ID Code</span>
                    <span className="block font-headline text-xs font-bold text-[#dae2fd]">{certificates[activeCert].idCode}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Secondary Command */}
          <a href={certificates[activeCert].link} target="_blank" rel="noreferrer" className="w-full bg-[#222a3d] border-2 border-[#444650] py-4 font-headline font-bold text-[#dae2fd] uppercase tracking-widest hover:bg-[#31394d] hover:border-[#e9c349] hover:text-[#e9c349] transition-all duration-300 text-sm flex items-center justify-center gap-3 group outline-none cursor-pointer">
            <span className="material-symbols-outlined group-hover:rotate-45 transition-transform">auto_fix_high</span>
            Open Artifact Portal
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
