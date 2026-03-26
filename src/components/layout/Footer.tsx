const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full z-40 bg-[#002367] border-t-4 border-[#e9c349] px-10 py-3 flex justify-between items-center shadow-none">
      <div className="flex gap-12">
        {/* HP Bar */}
        <div className="flex items-center gap-3">
          <span className="font-headline font-bold text-[#e9c349] text-sm">HP</span>
          <div className="flex flex-col">
            <div className="flex justify-between text-[10px] font-headline text-[#b4c5ff] leading-none mb-1">
              <span>999/999</span>
            </div>
            <div className="w-32 h-2 bg-[#2d3449] overflow-hidden">
              <div className="h-full bg-emerald-500 w-full"></div>
            </div>
          </div>
        </div>
        {/* MP Bar */}
        <div className="flex items-center gap-3">
          <span className="font-headline font-bold text-[#e9c349] text-sm">MP</span>
          <div className="flex flex-col">
            <div className="flex justify-between text-[10px] font-headline text-[#b4c5ff] leading-none mb-1">
              <span>99/99</span>
            </div>
            <div className="w-32 h-2 bg-[#2d3449] overflow-hidden">
              <div className="h-full bg-blue-500 w-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex gap-8 items-center font-['Space_Grotesk'] text-[12px] tracking-widest uppercase text-[#b4c5ff]">
        <a className="hover:bg-white/5 px-2" href="#">SYSTEM</a>
        <a className="hover:bg-white/5 px-2" href="#">OPTIONS</a>
        <a className="hover:bg-white/5 px-2" href="#">SAVE</a>
      </div>
      <div className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-[#b4c5ff] opacity-60">© 2026 KAZUKID</div>
    </footer>
  );
};

export default Footer;
