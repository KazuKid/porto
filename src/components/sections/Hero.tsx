const Hero = () => {
  return (
    <main className="min-h-screen pt-16 pb-12 hero-gradient relative" id="home">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#b4c5ff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Hero Section: New Game Start Screen */}
      <section className="container mx-auto px-6 h-[calc(100vh-112px)] flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-7xl">
          {/* Hero Sprite / Avatar Area */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative">
            <div className="relative group">
              {/* Dialogue Box Behind Avatar */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#131b2e] border-2 border-[#b4c5ff]/20 -z-10 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
              <img alt="Lead Hero Avatar" className="w-64 lg:w-96 aspect-square object-cover border-4 border-[#e9c349] shadow-[15px_15px_0px_0px_rgba(0,35,103,1)] animate-float" src="/kazukid1.jpg" />
            </div>
          </div>

          {/* Text & Commands Area */}
          <div className="lg:col-span-7 space-y-8 lg:pl-12">
            <div className="space-y-2">
              <h2 className="text-[#e9c349] font-headline font-bold text-xl tracking-[0.3em] uppercase opacity-80">STORY SO FAR...</h2>
              <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-white leading-none tracking-tighter">HERO'S JOURNEY</h1>
              <p className="text-[#b4c5ff] text-xl font-headline font-medium tracking-wide">MOHAMMAD RIVALDY YUSUP / NEW DEV</p>
            </div>

            {/* EXP Bars (Skill Meters) */}
            <div className="space-y-4 max-w-md bg-[#131b2e]/50 backdrop-blur p-6 border-l-4 border-[#e9c349] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
              <div className="space-y-1">
                <div className="flex justify-between font-headline text-xs tracking-widest text-[#b4c5ff]">
                  <span>FRONTEND SKILLS</span>
                  <span>70% EXP</span>
                </div>
                <div className="h-3 w-full bg-[#2d3449] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#b4c5ff] to-[#e9c349] w-[70%]"></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between font-headline text-xs tracking-widest text-[#b4c5ff]">
                  <span>BACKEND LOGIC</span>
                  <span>60% EXP</span>
                </div>
                <div className="h-3 w-full bg-[#2d3449] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#b4c5ff] to-[#e9c349] w-[60%]"></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between font-headline text-xs tracking-widest text-[#b4c5ff]">
                  <span>AI INTEGRATION</span>
                  <span>65% EXP</span>
                </div>
                <div className="h-3 w-full bg-[#2d3449] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#b4c5ff] to-[#e9c349] w-[65%]"></div>
                </div>
              </div>
            </div>

            {/* Command Buttons */}
            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#projects" className="bg-[#b4c5ff] text-[#002a78] border-transparent font-headline font-bold py-4 px-10 text-lg uppercase transition-all steps-4 active:scale-95 shadow-[4px_4px_0px_0px_#002a78] hover:shadow-none hover:translate-x-1 hover:translate-y-1 inline-block">
                ENTER QUEST
              </a>
              <a href="https://drive.google.com/file/d/1J05Dch9UMQ0qBazFC-5tB9gsoHJHo7nO/view?usp=sharing" target="_blank" rel="noreferrer" className="bg-[#222a3d] text-[#e9c349] border-l-4 border-[#e9c349] font-headline font-bold py-4 px-10 text-lg uppercase transition-all steps-4 active:scale-95 hover:bg-[#31394d] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] inline-block">
                VIEW STATS (CV)
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
