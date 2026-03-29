const About = () => {
  return (
    <section id="about" className="pt-24 pb-32 px-6 max-w-7xl mx-auto relative z-10">
      {/* Character Header */}
      <header className="mb-12 relative">
        <h1 className="font-headline text-6xl md:text-8xl font-black text-[#dae2fd] tracking-tighter opacity-10 absolute -top-4 left-0 select-none">STATUS</h1>
        <div className="relative z-10 flex items-end gap-4">
          <div className="h-1 bg-[#e9c349] w-24 mb-4"></div>
          <h2 className="font-headline text-4xl font-bold text-[#b4c5ff]">CHARACTER PROFILE</h2>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Character Sprite & Stats */}
        <div className="lg:col-span-4 space-y-8">
          {/* Sprite Container */}
          <div className="relative aspect-square bg-[#131b2e] border-b-4 border-[#b4c5ff] p-4 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#002367]/40 to-transparent"></div>
            <img alt="Hero Sprite" className="w-full h-full object-cover filter contrast-125 grayscale hover:grayscale-0 transition-all duration-500 animate-bob relative z-10" src="/pp3.png" />
            <div className="absolute -bottom-4 -right-4 bg-[#e9c349] text-[#241a00] px-4 py-2 font-headline font-bold text-xl z-20">
              LVL 99
            </div>
          </div>

          {/* Stats Container */}
          <div className="bg-[#222a3d] p-6 space-y-6 border-l-4 border-[#e9c349]">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="font-headline text-sm font-bold tracking-widest text-[#c5c6d2]">WEB DEV</label>
                <span className="text-[#e9c349] font-headline font-bold">80/99</span>
              </div>
              <div className="h-2 bg-[#2d3449] w-full">
                <div className="h-full bg-gradient-to-r from-[#b4c5ff] to-[#e9c349] w-[80%] transition-all duration-1000"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="font-headline text-sm font-bold tracking-widest text-[#c5c6d2]">PROMPT ENG</label>
                <span className="text-[#e9c349] font-headline font-bold">85/99</span>
              </div>
              <div className="h-2 bg-[#2d3449] w-full">
                <div className="h-full bg-gradient-to-r from-[#b4c5ff] to-[#e9c349] w-[85%] transition-all duration-1000"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="font-headline text-sm font-bold tracking-widest text-[#c5c6d2]">SOFTWARE ENG</label>
                <span className="text-[#e9c349] font-headline font-bold">70/99</span>
              </div>
              <div className="h-2 bg-[#2d3449] w-full">
                <div className="h-full bg-gradient-to-r from-[#b4c5ff] to-[#e9c349] w-[70%] transition-all duration-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Biography & Skills */}
        <div className="lg:col-span-8 space-y-12">
          {/* Biography Dialogue Box */}
          <section className="relative">
            <div className="bg-[#002367]/80 backdrop-blur-md p-8 border-2 border-[#e9c349] dialogue-box-clip shadow-[15px_15px_0px_0px_rgba(0,23,75,0.8)]">
              <div className="flex items-center gap-2 mb-6 border-b border-[#5f89ff]/30 pb-4">
                <span className="material-symbols-outlined text-[#e9c349]" style={{ fontVariationSettings: '\"FILL\" 1' }}>auto_awesome</span>
                <h3 className="font-headline font-bold text-2xl text-[#e9c349]">BIOGRAPHY</h3>
              </div>
              <p className="font-body text-lg leading-relaxed text-[#dae2fd]">
                Halo saya Mohammad Rivaldy Yusup, seorang lulusan jurusan Teknik Informatika dari Universitas Dian Nuswantoro. Berbekal hobi di bidang Game dan teknologi, saya memulai perjalanan digital saya sebagai petualang kode.
                <br/><br/>
                Saat ini saya berspesialisasi dalam Web Development, Prompt Engineering, dan Software Engineering. Saya terus meningkatkan 'Stats' saya dalam petualangan digital.
              </p>
              <div className="mt-8 flex justify-end">
                <a href="#projects" className="bg-[#e9c349] text-[#241a00] px-8 py-3 font-headline font-black uppercase text-sm tracking-widest hover:brightness-110 active:scale-95 transition-all steps-4 inline-block">
                  &gt; VIEW QUEST LOG
                </a>
              </div>
            </div>
          </section>

          {/* Inventory Grid (Skills) */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-headline text-2xl font-bold text-[#b4c5ff] uppercase">INVENTORY / SKILLS</h3>
              <div className="h-[2px] flex-grow bg-[#2d3449]"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {/* Skill Item */}
              <div className="aspect-square bg-[#131b2e] border border-[#444650] hover:border-[#e9c349] group transition-all cursor-crosshair flex flex-col items-center justify-center gap-2 p-2">
                <span className="material-symbols-outlined text-3xl text-[#c5c6d2] group-hover:text-[#e9c349] transition-colors">code</span>
                <span className="text-[10px] font-headline font-bold text-[#c5c6d2] uppercase text-center">Web Dev</span>
              </div>
              <div className="aspect-square bg-[#131b2e] border border-[#444650] hover:border-[#e9c349] group transition-all cursor-crosshair flex flex-col items-center justify-center gap-2 p-2">
                <span className="material-symbols-outlined text-3xl text-[#c5c6d2] group-hover:text-[#e9c349] transition-colors">smart_toy</span>
                <span className="text-[10px] font-headline font-bold text-[#c5c6d2] uppercase text-center">Prompt Eng</span>
              </div>
              <div className="aspect-square bg-[#131b2e] border border-[#444650] hover:border-[#e9c349] group transition-all cursor-crosshair flex flex-col items-center justify-center gap-2 p-2">
                <span className="material-symbols-outlined text-3xl text-[#c5c6d2] group-hover:text-[#e9c349] transition-colors">data_object</span>
                <span className="text-[10px] font-headline font-bold text-[#c5c6d2] uppercase text-center">Software Eng</span>
              </div>
              <div className="aspect-square bg-[#131b2e] border border-[#444650] hover:border-[#e9c349] group transition-all cursor-crosshair flex flex-col items-center justify-center gap-2 p-2">
                <span className="material-symbols-outlined text-3xl text-[#c5c6d2] group-hover:text-[#e9c349] transition-colors">edit_document</span>
                <span className="text-[10px] font-headline font-bold text-[#c5c6d2] uppercase text-center">Video/Image Edit</span>
              </div>
              <div className="aspect-square bg-[#131b2e] border border-[#444650] hover:border-[#e9c349] group transition-all cursor-crosshair flex flex-col items-center justify-center gap-2 p-2">
                <span className="material-symbols-outlined text-3xl text-[#c5c6d2] group-hover:text-[#e9c349] transition-colors">table_view</span>
                <span className="text-[10px] font-headline font-bold text-[#c5c6d2] uppercase text-center">MS Office</span>
              </div>
              <div className="aspect-square bg-[#131b2e] border border-[#444650] hover:border-[#e9c349] group transition-all cursor-crosshair flex flex-col items-center justify-center gap-2 p-2">
                <span className="material-symbols-outlined text-3xl text-[#c5c6d2] group-hover:text-[#e9c349] transition-colors">sports_esports</span>
                <span className="text-[10px] font-headline font-bold text-[#c5c6d2] uppercase text-center">Gaming</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
