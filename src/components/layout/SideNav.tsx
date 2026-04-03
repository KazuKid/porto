const SideNav = () => {
  return (
    <aside className="fixed right-0 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 p-2 md:p-4 bg-[#002367]/90 backdrop-blur-md border-l-2 md:border-l-4 border-[#e9c349] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)] w-12 md:w-48 border-y-2 md:border-y-0 border-y-[#e9c349]">
      <div className="hidden md:block mb-4 text-center border-b border-[#b4c5ff]/20 pb-2">
        <div className="text-[#e9c349] font-black font-headline text-lg">COMMAND</div>
        <div className="text-[#b4c5ff] text-[10px] font-headline tracking-widest uppercase">LVL 99 DEVELOPER</div>
      </div>
      <a className="flex items-center justify-center md:justify-start gap-3 py-2 md:py-2 px-1 md:px-4 transition-transform steps-4 hover:-translate-x-1 md:hover:translate-x-1 hover:text-[#e9c349] font-headline font-bold uppercase text-[#b4c5ff]" href="https://www.linkedin.com/in/mohammad-rivaldy-yusup-7008a1371/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrvY%2B7iAlR8WmFes7nYA%2B8Q%3D%3D" target="_blank" rel="noreferrer" title="LinkedIn">
        <span className="material-symbols-outlined text-xl">link</span>
        <span className="hidden md:inline">LINKEDIN</span>
      </a>
      <a className="flex items-center justify-center md:justify-start gap-3 py-2 md:py-2 px-1 md:px-4 transition-transform steps-4 hover:-translate-x-1 md:hover:translate-x-1 hover:text-[#e9c349] font-headline font-bold uppercase text-[#b4c5ff]" href="https://github.com/KazuKid" target="_blank" rel="noreferrer" title="GitHub">
        <span className="material-symbols-outlined text-xl">code</span>
        <span className="hidden md:inline">GITHUB</span>
      </a>
      <a className="flex items-center justify-center md:justify-start gap-3 py-2 md:py-2 px-1 md:px-4 transition-transform steps-4 hover:-translate-x-1 md:hover:translate-x-1 hover:text-[#e9c349] font-headline font-bold uppercase text-[#b4c5ff]" href="https://www.instagram.com/mrivaldiy_?igsh=NzZocGdodXg2dzlw" target="_blank" rel="noreferrer" title="Instagram">
        <span className="material-symbols-outlined text-xl">camera</span>
        <span className="hidden md:inline">INSTAGRAM</span>
      </a>
      <a className="flex items-center justify-center md:justify-start gap-3 py-2 md:py-2 px-1 md:px-4 transition-transform steps-4 hover:-translate-x-1 md:hover:translate-x-1 hover:text-[#e9c349] font-headline font-bold uppercase text-[#b4c5ff]" href="https://discord.com/users/277729630583128065" target="_blank" rel="noreferrer" title="Discord">
        <span className="material-symbols-outlined text-xl">chat</span>
        <span className="hidden md:inline">DISCORD</span>
      </a>
    </aside>
  );
};

export default SideNav;
