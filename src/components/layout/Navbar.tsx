import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'certificates', 'contact'];
      // Menyesuaikan trigger scroll agar saat masuk 1/3 viewport, navbar ter-update
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Jalankan sekali saat pertama kali muat
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'certificates', label: 'CERTIFICATES' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-16 bg-[#002367] border-b-2 border-[#e9c349] shadow-[0_10px_30px_rgba(0,23,75,0.5)]">
      <div className="text-xl md:text-2xl font-bold text-[#e9c349] tracking-tighter font-headline">KAZUKID</div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`font-['Space_Grotesk'] uppercase tracking-widest text-sm transition-all duration-0 steps-4 pb-1 border-b-2 ${
              activeSection === link.id
                ? 'text-[#e9c349] border-[#e9c349]'
                : 'text-[#b4c5ff] border-transparent hover:text-white hover:bg-[#b4c5ff]/10'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#b4c5ff] hover:text-white transition-all active:scale-95 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#002367] border-b-4 border-[#e9c349] flex flex-col md:hidden shadow-[0_20px_30px_rgba(0,23,75,0.8)]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMenuOpen(false)}
              className={`p-4 border-b border-[#b4c5ff]/10 font-['Space_Grotesk'] uppercase tracking-widest text-sm ${
                activeSection === link.id
                  ? 'text-[#e9c349] bg-[#e9c349]/10'
                  : 'text-[#b4c5ff]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
