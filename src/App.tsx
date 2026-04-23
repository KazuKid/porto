import Navbar from './components/layout/Navbar';
import SideNav from './components/layout/SideNav';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <div className="fixed inset-0 z-[100] scanline-overlay opacity-20 pointer-events-none"></div>
      
      <Navbar />
      <SideNav />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App;

