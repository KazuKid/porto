const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-32 px-6 md:px-20 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#002367]/10 via-transparent to-[#0b1326]/90"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Mascot & Narrative */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-8 mt-12">
          <div className="animate-bob relative group">
            <div className="absolute -inset-4 bg-[#e9c349]/10 blur-xl rounded-full group-hover:bg-[#e9c349]/20 transition-all duration-500"></div>
            <div className="w-48 h-48 flex items-center justify-center bg-[#131b2e] border-2 border-[#b4c5ff] rounded-full drop-shadow-[0_0_15px_rgba(233,195,73,0.4)] relative overflow-hidden">
                 <div className="absolute inset-0 bg-[#002367]/20"></div>
                 <span className="material-symbols-outlined text-7xl text-[#e9c349] relative z-10" style={{ fontVariationSettings: '"FILL" 1' }}>send</span>
            </div>
          </div>
          <div className="bg-[#131b2e] p-6 border-l-4 border-[#e9c349] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)] max-w-sm relative">
            <p className="font-headline text-[#e9c349] text-xs tracking-widest mb-2 font-bold">SYSTEM MESSAGE</p>
            <p className="text-[#dae2fd] text-sm leading-relaxed italic">
              "Hoo... The journey is long, and the ledger must be updated. Entrust your message to me, and I shall deliver it to the developer's tower before sunrise."
            </p>
            <div className="flex items-center mt-4 gap-2">
              <div className="w-2 h-2 bg-[#e9c349] animate-pulse"></div>
              <span className="text-[10px] font-headline text-[#b4c5ff] tracking-widest uppercase">Courier Level: MAX</span>
            </div>
          </div>
        </div>
        {/* Right Side: Contact Form (The Save Screen) */}
        <div className="lg:col-span-7 relative">
          <div className="bg-[#222a3d]/80 backdrop-blur-xl p-1 border-2 border-[#e9c349]/30 relative shadow-[15px_15px_0px_0px_rgba(0,23,75,0.8)]">
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#e9c349]"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#e9c349]"></div>
            <div className="bg-[#002367] p-8 space-y-8">
              <div className="flex justify-between items-end border-b border-[#b4c5ff]/20 pb-4">
                <h2 className="font-headline text-3xl font-bold text-[#dae2fd] tracking-tight uppercase">SEND DATA</h2>
                <div className="text-right">
                  <span className="text-[#e9c349] font-headline text-xs block">FILE STATUS</span>
                  <span className="text-[#b4c5ff] font-bold text-lg font-headline">NEW_ENTRY.SAV</span>
                </div>
              </div>
              <form className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="font-headline text-xs text-[#e9c349] tracking-widest font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">person</span>
                    CHALLENGER NAME
                  </label>
                  <div className="relative">
                    <input className="w-full bg-[#060e20] border-2 border-[#444650] text-[#b4c5ff] placeholder-[#b4c5ff]/30 p-4 font-headline text-sm focus:border-[#e9c349] focus:outline-none transition-colors" placeholder="ENTER NAME..." type="text" />
                  </div>
                </div>
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="font-headline text-xs text-[#e9c349] tracking-widest font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">mail</span>
                    REPLY_ADDRESS
                  </label>
                  <div className="relative">
                    <input className="w-full bg-[#060e20] border-2 border-[#444650] text-[#b4c5ff] placeholder-[#b4c5ff]/30 p-4 font-headline text-sm focus:border-[#e9c349] focus:outline-none transition-colors" placeholder="ENTER EMAIL..." type="email" />
                  </div>
                </div>
                {/* Message Input */}
                <div className="space-y-2">
                  <label className="font-headline text-xs text-[#e9c349] tracking-widest font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">chat_bubble</span>
                    MESSAGE_LOG
                  </label>
                  <div className="relative">
                    <textarea className="w-full bg-[#060e20] border-2 border-[#444650] text-[#b4c5ff] placeholder-[#b4c5ff]/30 p-4 font-headline text-sm focus:border-[#e9c349] focus:outline-none transition-colors resize-none" placeholder="DESCRIBE YOUR QUEST..." rows={4}></textarea>
                  </div>
                </div>
                {/* Action Button */}
                <button className="w-full bg-[#e9c349] hover:brightness-110 text-[#002367] font-black font-headline py-4 text-center tracking-tighter text-xl transition-all steps-4 active:scale-95 flex items-center justify-center gap-3 mt-4" type="button">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '\"FILL\" 1' }}>save</span>
                  SAVE &amp; TRANSMIT
                </button>
              </form>
              {/* Stat Footer in Form */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#b4c5ff]/10">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-headline font-bold uppercase text-[#c5c6d2]">
                    <span>INTELLIGENCE</span>
                    <span className="text-[#b4c5ff]">99/99</span>
                  </div>
                  <div className="h-1.5 bg-[#2d3449]">
                    <div className="h-full bg-gradient-to-r from-[#b4c5ff] to-[#e9c349] w-[85%]"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-headline font-bold uppercase text-[#c5c6d2]">
                    <span>CHARISMA</span>
                    <span className="text-[#b4c5ff]">72/99</span>
                  </div>
                  <div className="h-1.5 bg-[#2d3449]">
                    <div className="h-full bg-gradient-to-r from-[#b4c5ff] to-[#e9c349] w-[72%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
