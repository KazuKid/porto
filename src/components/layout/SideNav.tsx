const SideNav = () => {
  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2 p-4 bg-[#002367]/90 backdrop-blur-md border-l-4 border-[#e9c349] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)] w-48">
      <div className="mb-4 text-center border-b border-[#b4c5ff]/20 pb-2">
        <div className="text-[#e9c349] font-black font-headline text-lg">COMMAND</div>
        <div className="text-[#b4c5ff] text-[10px] font-headline tracking-widest uppercase">LVL 99 DEVELOPER</div>
      </div>
      <a className="flex items-center gap-3 py-2 px-4 transition-transform steps-4 hover:translate-x-1 hover:text-[#e9c349] font-headline font-bold uppercase text-[#b4c5ff]" href="https://linkedin.com" target="_blank" rel="noreferrer">
        <span className="material-symbols-outlined text-lg">link</span>
        LINKEDIN
      </a>
      <a className="flex items-center gap-3 py-2 px-4 transition-transform steps-4 hover:translate-x-1 hover:text-[#e9c349] font-headline font-bold uppercase text-[#b4c5ff]" href="https://github.com/KazuKid" target="_blank" rel="noreferrer">
        <span className="material-symbols-outlined text-lg">code</span>
        GITHUB
      </a>
      <a className="flex items-center gap-3 py-2 px-4 transition-transform steps-4 hover:translate-x-1 hover:text-[#e9c349] font-headline font-bold uppercase text-[#b4c5ff]" href="https://www.instagram.com/mrivaldiy_?igsh=NzZocGdodXg2dzlw" target="_blank" rel="noreferrer">
        <span className="material-symbols-outlined text-lg">camera</span>
        INSTAGRAM
      </a>
      <a className="flex items-center gap-3 py-2 px-4 transition-transform steps-4 hover:translate-x-1 hover:text-[#e9c349] font-headline font-bold uppercase text-[#b4c5ff]" href="https://discord.com/users/277729630583128065" target="_blank" rel="noreferrer">
        <span className="material-symbols-outlined text-lg">chat</span>
        DISCORD
      </a>
    </aside>
  );
};

export default SideNav;
