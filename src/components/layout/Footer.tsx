const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full z-40 bg-[#002367] border-t-4 border-[#e9c349] px-4 md:px-10 py-2 flex flex-col md:flex-row justify-between items-center shadow-none gap-2 md:gap-0">
      <div className="flex gap-6 md:gap-12 w-full md:w-auto justify-center md:justify-start">
        {/* HP Bar */}
        <div className="flex items-center gap-2 md:gap-3 w-1/2 md:w-auto max-w-[150px] md:max-w-none">
          <span className="font-headline font-bold text-[#e9c349] text-[10px] md:text-sm">HP</span>
          <div className="flex flex-col w-full">
            <div className="flex justify-between text-[8px] md:text-[10px] font-headline text-[#b4c5ff] leading-none mb-1">
              <span>999/999</span>
            </div>
            <div className="w-full md:w-32 h-1.5 md:h-2 bg-[#2d3449] overflow-hidden">
              <div className="h-full bg-emerald-500 w-full"></div>
            </div>
          </div>
        </div>
        {/* MP Bar */}
        <div className="flex items-center gap-2 md:gap-3 w-1/2 md:w-auto max-w-[150px] md:max-w-none">
          <span className="font-headline font-bold text-[#e9c349] text-[10px] md:text-sm">MP</span>
          <div className="flex flex-col w-full">
            <div className="flex justify-between text-[8px] md:text-[10px] font-headline text-[#b4c5ff] leading-none mb-1">
              <span>99/99</span>
            </div>
            <div className="w-full md:w-32 h-1.5 md:h-2 bg-[#2d3449] overflow-hidden">
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
      <div className="hidden md:block font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-[#b4c5ff] opacity-60">© 2026 KAZUKID</div>
    </footer>
  );
};

export default Footer;
