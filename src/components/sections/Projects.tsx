const Projects = () => {
  return (
    <section id="projects" className="pt-24 pb-32 px-6 max-w-7xl mx-auto relative z-10">
      <header className="mb-12 relative flex justify-between items-end border-b border-[#e9c349]/20 pb-4">
        <div>
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-[#dae2fd] tracking-tighter uppercase">QUEST LOG</h1>
          <p className="font-headline text-sm tracking-[0.3em] text-[#e9c349] uppercase mt-2">Active & Completed Missions</p>
        </div>
        <div className="hidden md:block">
          <span className="bg-[#131b2e] border-2 border-[#e9c349] text-[#e9c349] px-4 py-1 text-xs font-headline font-bold">TOTAL: 2 SAVES</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1: Company Web Profile */}
        <article className="bg-[#131b2e] border-2 border-[#444650] hover:border-[#b4c5ff] transition-colors relative group flex flex-col h-full">
          {/* Corner Decorative */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#b4c5ff] opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
          
          <div className="w-full aspect-video bg-[#002367] relative overflow-hidden border-b-2 border-[#444650] group-hover:border-[#b4c5ff]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] to-transparent z-10 opacity-60"></div>
            <img src="/company1.png" alt="Company Web Profile" className="w-full h-full object-cover relative z-0 group-hover:scale-105 transition-transform duration-700 blur-[1px] group-hover:blur-none" />
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-headline text-2xl font-bold text-[#dae2fd] mb-2 uppercase">Company Web Profile</h3>
            <p className="text-[#c5c6d2] font-body text-sm leading-relaxed mb-6 flex-grow">
              Contoh template website profil perusahaan dengan tampilan yang elegan dan responsif, menampilkan informasi tentang perusahaan, produk, dan layanan yang ditawarkan.
            </p>
            
            <div className="mb-6">
              <span className="text-[10px] font-headline tracking-widest text-[#5f89ff] uppercase block mb-2">EQUIPPED TOOLS:</span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#222a3d] text-[#b4c5ff] px-2 py-1 text-[10px] font-headline uppercase font-bold border border-[#b4c5ff]/20">Vue.js</span>
                <span className="bg-[#222a3d] text-[#b4c5ff] px-2 py-1 text-[10px] font-headline uppercase font-bold border border-[#b4c5ff]/20">CSS</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-[#444650]">
              <button className="flex-1 bg-transparent border-2 border-[#444650] text-[#dae2fd] font-headline font-bold py-2 text-xs hover:border-[#b4c5ff] hover:text-[#b4c5ff] transition-colors uppercase tracking-widest outline-none">
                INSPECT
              </button>
              <a href="https://company-web-profile.vercel.app/" target="_blank" rel="noreferrer" className="flex-1 bg-[#131b2e] border-2 border-[#e9c349] text-[#e9c349] font-headline font-bold py-2 text-xs hover:bg-[#e9c349] hover:text-[#241a00] transition-colors uppercase tracking-widest text-center">
                FAST TRAVEL
              </a>
            </div>
          </div>
        </article>

        {/* Project 2: E-Commerce */}
        <article className="bg-[#131b2e] border-2 border-[#444650] hover:border-[#e9c349] transition-colors relative group flex flex-col h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] group-hover:shadow-[12px_12px_0px_0px_rgba(233,195,73,0.2)]">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#e9c349] opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
          
          <div className="w-full aspect-video bg-[#002367] relative overflow-hidden border-b-2 border-[#444650] group-hover:border-[#e9c349]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] to-transparent z-10 opacity-60"></div>
            <img src="/ecommerce2.png" alt="E-Commerce" className="w-full h-full object-cover relative z-0 group-hover:scale-105 transition-transform duration-700 blur-[1px] group-hover:blur-none" />
          </div>

          <div className="p-6 flex flex-col flex-grow relative">
            <h3 className="font-headline text-2xl font-bold text-[#e9c349] mb-2 uppercase">Full-Stack E-Commerce</h3>
            <p className="text-[#c5c6d2] font-body text-sm leading-relaxed mb-6 flex-grow">
              Contoh template website ecommerce dengan fitur lengkap seperti katalog produk, keranjang belanja, dan proses checkout yang mudah digunakan.
            </p>
            
            <div className="mb-6">
              <span className="text-[10px] font-headline tracking-widest text-[#af8d11] uppercase block mb-2">EQUIPPED TOOLS:</span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#222a3d] text-[#e9c349] px-2 py-1 text-[10px] font-headline uppercase font-bold border border-[#e9c349]/20">Vue.js</span>
                <span className="bg-[#222a3d] text-[#e9c349] px-2 py-1 text-[10px] font-headline uppercase font-bold border border-[#e9c349]/20">Tailwind</span>
                <span className="bg-[#222a3d] text-[#e9c349] px-2 py-1 text-[10px] font-headline uppercase font-bold border border-[#e9c349]/20">Laravel</span>
                <span className="bg-[#222a3d] text-[#e9c349] px-2 py-1 text-[10px] font-headline uppercase font-bold border border-[#e9c349]/20">PostgreSQL</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-[#444650]">
              <button className="flex-1 bg-transparent border-2 border-[#444650] text-[#dae2fd] font-headline font-bold py-2 text-xs hover:border-[#e9c349] hover:text-[#e9c349] transition-colors uppercase tracking-widest outline-none">
                INSPECT
              </button>
              <a href="https://pet-shop-zea.vercel.app/" target="_blank" rel="noreferrer" className="flex-1 bg-[#222a3d] border-2 border-[#e9c349] text-[#e9c349] font-headline font-bold py-2 text-xs hover:bg-[#e9c349] hover:text-[#241a00] transition-colors uppercase tracking-widest text-center shadow-[4px_4px_0_0_#000]">
                FAST TRAVEL
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
