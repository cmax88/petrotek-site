import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Phone, Mail, Plus, Minus, RotateCcw } from 'lucide-react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// --- GLOBAL IMAGE MODAL COMPONENT ---
const ImageModal = ({ src, alt, isOpen, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // Reset zoom/pan when image changes or modal closes
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [src, isOpen]);

  if (!isOpen) return null;

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setScale(prev => Math.max(prev - 0.5, 1));
  };

  const handleReset = (e) => {
    e.stopPropagation();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 z-[10001] bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/10 transition-all hover:bg-white/20"
      >
        <X size={28} />
      </button>

      {/* Controls Overlay */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 backdrop-blur-xl p-2 rounded-2xl border border-white/10 z-[10001] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleZoomOut} className="p-3 text-white hover:bg-white/10 rounded-xl transition-colors">
          <Minus size={20} />
        </button>
        <button onClick={handleReset} className="flex items-center gap-2 px-4 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 rounded-xl py-3 transition-colors">
          <RotateCcw size={16} /> Reset
        </button>
        <button onClick={handleZoomIn} className="p-3 text-white hover:bg-white/10 rounded-xl transition-colors">
          <Plus size={20} />
        </button>
      </div>

      {/* Image Container */}
      <div 
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-200 ease-out select-none"
          style={{ 
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
          }}
          draggable="false"
        />
      </div>
    </div>
  );
};

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalData, setModalData] = useState({ isOpen: false, src: '', alt: '' });
  
  const navigate = useNavigate();
  const location = useLocation();
  const maroon = "#8B1E3F";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Image Click Listener
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Trigger zoom if target is an IMG, not in nav/footer, and not marked 'no-zoom'
      const isImage = e.target.tagName === 'IMG';
      const isNotNav = !e.target.closest('nav');
      const isNotNoZoom = !e.target.classList.contains('no-zoom');

      if (isImage && isNotNav && isNotNoZoom) {
        setModalData({ isOpen: true, src: e.target.src, alt: e.target.alt });
        document.body.style.overflow = 'hidden';
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  const closeModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const services = [
    { title: "Injection Wells", id: "/injection-wells" },
    { title: "Leachate Services", id: "/leachate-services" },
    { title: "Mining & ISR", id: "/mining-and-isr" },
    { title: "Oil & Gas", id: "/oil-and-gas" },
    { title: "Carbon Capture", id: "/carbon-capture" },
    { title: "Safety", id: "/safety" }
  ];

  const handleContactClick = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navClass = `fixed top-0 w-full z-50 transition-all duration-500 py-3 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg`;

  const linkClass = (isMobile = false) => `
    text-sm font-bold uppercase tracking-widest transition-all duration-300
    [@media(min-width:1600px)]:text-base
    ${isMobile ? 'text-gray-800 text-xl py-6 border-b border-gray-100' : 'text-gray-800 hover:text-[#8B1E3F]'}
  `;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col overflow-self-start">
      
      <nav className={navClass}>
        <div className="w-full px-6 md:px-12 [@media(min-width:1600px)]:px-40 mx-auto max-w-[2000px] flex justify-between items-center">
          
          <Link to="/" onClick={() => window.scrollTo(0,0)} className="z-50 shrink-0">
            <img src="/Petrotek.png" alt="Petrotek" className="h-8 md:h-10 [@media(min-width:1600px)]:h-12 w-auto transition-all no-zoom" />
          </Link>

          <div className="hidden min-[1001px]:flex space-x-8 lg:space-x-12 [@media(min-width:1600px)]:space-x-16 items-center">
            <Link to="/" className={linkClass()}>Home</Link>
            
            <div className="relative py-4" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
              <button className={`${linkClass()} flex items-center`}>
                What We Do <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-64 [@media(min-width:1600px)]:w-80 bg-white shadow-2xl rounded-xl py-4 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                  {services.map((s) => (
                    <Link key={s.id} to={s.id} onClick={() => window.scrollTo(0,0)} className="px-6 py-3 hover:bg-gray-50 text-gray-700 text-xs [@media(min-width:1600px)]:text-sm font-bold uppercase tracking-widest hover:text-[#8B1E3F] transition-colors block">
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/team" onClick={() => window.scrollTo(0,0)} className={linkClass()}>Our Team</Link>
            <Link to="/publications" onClick={() => window.scrollTo(0,0)} className={linkClass()}>Publications</Link>
            
            <button onClick={handleContactClick} className="px-6 py-2.5 [@media(min-width:1600px)]:px-10 [@media(min-width:1600px)]:py-4 rounded-sm text-white text-xs [@media(min-width:1600px)]:text-base font-extrabold uppercase tracking-widest transition-all hover:brightness-110 active:scale-95 shadow-md" style={{ backgroundColor: maroon }}>
              Contact
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="min-[1001px]:hidden p-2 text-gray-900 transition-colors relative" style={{ zIndex: 9999 }}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        <div 
          className={`fixed inset-0 w-screen h-screen transition-transform duration-500 ease-in-out min-[1001px]:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ zIndex: 9998, backgroundColor: 'rgba(255, 255, 255, 1)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
          <div className="flex flex-col h-full w-full p-8 overflow-y-auto">
            <div className="mt-24 flex flex-col">
              <Link to="/" className={linkClass(true)}>Home</Link>
              <div className="py-6 border-b border-gray-900/10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6">Our Services</p>
                <div className="grid grid-cols-1 gap-6 pl-4">
                  {services.map(s => (
                    <Link key={s.id} to={s.id} className="text-gray-900 font-bold uppercase text-lg hover:text-[#8B1E3F] transition-colors">{s.title}</Link>
                  ))}
                </div>
              </div>
              <Link to="/team" className={linkClass(true)}>Our Team</Link>
              <Link to="/publications" className={linkClass(true)}>Publications</Link>
              <button onClick={handleContactClick} className="mt-12 w-full py-6 text-white font-bold rounded-sm uppercase tracking-widest text-center shadow-2xl" style={{ backgroundColor: maroon }}>Contact Us</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-950 text-gray-400 py-20 border-t border-gray-800/50">
        <div className="w-full px-6 md:px-12 [@media(min-width:1600px)]:px-40 mx-auto max-w-[2000px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-24">
            <div className="flex flex-col items-start">
              <img src="/Petrotek.png" alt="Petrotek" className="h-10 w-auto brightness-125 mb-8 no-zoom" />
              <p className="text-sm leading-relaxed max-w-xs mb-8">Petrotek Corporation specializes in engineering evaluation and field operations for subsurface fluid flow.</p>
              <div className="flex items-center space-x-3 text-[15px] font-bold uppercase tracking-widest text-gray-500">
                <div className="h-px w-8 bg-[#8B1E3F]"></div><span>Established 1993</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8 opacity-50">Sitemap</h4>
              <nav className="flex flex-col space-y-4 text-sm">
                <Link to="/" onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors w-fit">Home</Link>
                <Link to="/team" onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors w-fit">Our Team</Link>
                <Link to="/publications" onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors w-fit">Publications</Link>
                <button onClick={handleContactClick} className="text-left hover:text-white transition-colors w-fit">Contact</button>
              </nav>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8 opacity-50">Expertise</h4>
              <div className="flex flex-col space-y-4 text-sm">
                {services.map(s => (
                  <Link key={s.id} to={s.id} onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors w-fit">{s.title}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8 opacity-50">Headquarters</h4>
              <div className="text-sm space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-[#8B1E3F] shrink-0" />
                  <span>5935 South Zang Street, Suite 200<br />Littleton, Colorado USA 80127</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-[#8B1E3F] shrink-0" />
                  <a href="tel:3032909414" className="hover:text-white transition-colors">(303) 290-9414</a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-widest text-gray-600">&copy; {new Date().getFullYear()} Petrotek Engineering Corporation</p>
            <p className="text-[10px] font-bold text-white uppercase tracking-[0.3em] italic opacity-60">Building Relationships. Solving Problems. Adding Value.</p>
          </div>
        </div>
      </footer>

      {/* The Global Modal */}
      <ImageModal 
        isOpen={modalData.isOpen} 
        src={modalData.src} 
        alt={modalData.alt} 
        onClose={closeModal} 
      />

      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default Layout;