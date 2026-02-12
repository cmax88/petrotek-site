import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const maroon = "#8B1E3F";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const services = [
    { title: "Injection Wells", id: "/injection-wells" },
    { title: "Carbon Capture", id: "/carbon-capture" },
    { title: "Oil & Gas", id: "/oil-and-gas" },
    { title: "ISR Uranium", id: "/isr-uranium" },
     { title: "Safety", id: "/safety" },
    { title: "Mining", id: "/mining" }
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

  const navClass = `fixed w-full z-50 transition-all duration-500 ${
    scrolled || location.pathname !== '/' 
      ? 'bg-white shadow-lg py-3' 
      : 'bg-transparent py-6'
  }`;

  const linkClass = (isMobile = false) => `
    text-sm font-bold uppercase tracking-widest transition-all duration-300
    ${isMobile ? 'text-gray-800 text-xl py-6 border-b border-gray-100' : 
      (scrolled || location.pathname !== '/' ? 'text-gray-800 hover:text-[#8B1E3F]' : 'text-white hover:opacity-70')}
  `;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col overflow-self-start">
      
      {/* --- NAVIGATION --- */}
      <nav className={navClass}>
        {/* Full-width wrapper with horizontal padding for extreme widths */}
        <div className="w-full px-6 md:px-12 2k:px-20 4k:px-32 mx-auto max-w-[1728px] 4k:max-w-[2560px] flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0,0)} className="z-50 shrink-0">
            <img 
              src="https://petrotek.com/wp-content/uploads/2023/12/logo_full.png" 
              alt="Petrotek" 
              className="h-8 md:h-10 4k:h-20 w-auto transition-all"
              style={{ filter: (scrolled || location.pathname !== '/') ? 'none' : 'brightness(1.1) drop-shadow(0px 2px 4px rgba(0,0,0,0.3))' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 lg:space-x-12 4k:space-x-24 items-center">
            <Link to="/" className={linkClass()}>Home</Link>
            
            <div 
              className="relative py-4"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`${linkClass()} flex items-center`}>
                What We Do <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-64 4k:w-96 bg-white shadow-2xl rounded-xl py-4 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                  {services.map((s) => (
                    <Link 
                      key={s.id} 
                      to={s.id} 
                      onClick={() => window.scrollTo(0,0)}
                      className="px-6 py-3 hover:bg-gray-50 text-gray-700 text-xs 4k:text-lg font-bold uppercase tracking-widest hover:text-[#8B1E3F] transition-colors block"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/team" onClick={() => window.scrollTo(0,0)} className={linkClass()}>Our Team</Link>
            <Link to="/publications" onClick={() => window.scrollTo(0,0)} className={linkClass()}>Publications</Link>
            
            <button 
              onClick={handleContactClick}
              className="px-6 py-2.5 4k:px-12 4k:py-6 rounded-sm text-white text-xs 4k:text-xl font-extrabold uppercase tracking-widest transition-all hover:brightness-110 active:scale-95 shadow-md" 
              style={{ backgroundColor: maroon }}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`md:hidden z-50 p-2 transition-colors ${isMenuOpen ? 'text-gray-900' : (scrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white')}`}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Full-Screen Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col p-8 transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mt-20 flex flex-col">
            <Link to="/" className={linkClass(true)}>Home</Link>
            <div className="py-6 border-b border-gray-100">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">Our Services</p>
              <div className="grid grid-cols-1 gap-6 pl-4">
                {services.map(s => (
                  <Link key={s.id} to={s.id} className="text-gray-700 font-bold uppercase text-lg hover:text-[#8B1E3F] transition-colors">{s.title}</Link>
                ))}
              </div>
            </div>
            <Link to="/team" className={linkClass(true)}>Our Team</Link>
            <Link to="/publications" className={linkClass(true)}>Publications</Link>
            <button 
              onClick={handleContactClick}
              className="mt-12 w-full py-6 text-white font-bold uppercase tracking-widest text-center shadow-lg"
              style={{ backgroundColor: maroon }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* --- CONTENT --- */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* --- GLOBAL FOOTER --- */}
      <footer className="bg-gray-950 text-gray-400 py-20 4k:py-40 border-t border-gray-800/50">
        <div className="w-full px-6 md:px-12 2k:px-20 4k:px-32 mx-auto max-w-[1728px] 4k:max-w-[2560px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 4k:gap-32 mb-16 md:mb-24">
            
            {/* Brand */}
            <div className="flex flex-col items-start">
              <img src="https://petrotek.com/wp-content/uploads/2023/12/logo_full.png" alt="Petrotek" className="h-10 4k:h-20 w-auto brightness-125 mb-8" />
              <p className="text-sm 4k:text-xl leading-relaxed max-w-xs mb-8">
                Petrotek Corporation specializes in engineering evaluation and field operations for subsurface fluid flow.
              </p>
              <div className="flex items-center space-x-3 text-[10px] 4k:text-base font-bold uppercase tracking-widest text-gray-500">
                <div className="h-px w-8 bg-[#8B1E3F]"></div>
                <span>Established 1993</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] 4k:text-sm mb-8 opacity-50">Sitemap</h4>
              <nav className="flex flex-col space-y-4 text-sm 4k:text-lg">
                <Link to="/" onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors w-fit">Home</Link>
                <Link to="/team" onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors w-fit">Our Team</Link>
                <Link to="/publications" onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors w-fit">Publications</Link>
                <button onClick={handleContactClick} className="text-left hover:text-white transition-colors w-fit">Contact</button>
              </nav>
            </div>

            {/* Expertise */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] 4k:text-sm mb-8 opacity-50">Expertise</h4>
              <div className="flex flex-col space-y-4 text-sm 4k:text-lg">
                {services.map(s => (
                  <Link key={s.id} to={s.id} onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors w-fit">{s.title}</Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] 4k:text-sm mb-8 opacity-50">Headquarters</h4>
              <div className="text-sm 4k:text-lg space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-[#8B1E3F] shrink-0" />
                  <span>5935 South Zang Street<br />Littleton, Colorado 80127</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-[#8B1E3F] shrink-0" />
                  <a href="tel:3032909414" className="hover:text-white transition-colors">(303) 290-9414</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-[#8B1E3F] shrink-0" />
                  <a href="mailto:info@petrotek.com" className="hover:text-white transition-colors">info@petrotek.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] 4k:text-sm uppercase tracking-widest text-gray-600">
              &copy; {new Date().getFullYear()} Petrotek Engineering Corporation
            </p>
            <p className="text-[10px] 4k:text-sm font-bold text-white uppercase tracking-[0.3em] italic opacity-60">
              Building Relationships. Solving Problems. Adding Value.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;