// src/components/Layout.jsx
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to handle "Contact" clicks
  const handleContactClick = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      // Wait for navigation to finish before scrolling
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const maroon = "#8B1E3F";

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="https://petrotek.com/wp-content/uploads/2023/12/logo_full.png" 
              alt="Petrotek" 
              className="h-8 md:h-10 w-auto"
              style={{ filter: (scrolled || location.pathname !== '/') ? 'none' : 'brightness(1.1) drop-shadow(0px 2px 4px rgba(0,0,0,0.3))' }}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={`text-sm font-bold uppercase hover:opacity-70 transition-colors ${scrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'}`}>Home</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`flex items-center text-sm font-bold uppercase hover:opacity-70 transition-colors ${scrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'}`}>
                What We Do <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl py-2 border border-gray-100 flex flex-col">
                  <Link to="/injection-wells" className="px-6 py-3 hover:bg-gray-50 text-gray-700 text-sm font-bold hover:text-[#8B1E3F]">Injection Wells</Link>
                  <Link to="/carbon-capture" className="px-6 py-3 hover:bg-gray-50 text-gray-700 text-sm font-bold hover:text-[#8B1E3F]">Carbon Capture (CCS)</Link>
                  <Link to="/oil-and-gas" className="px-6 py-3 hover:bg-gray-50 text-gray-700 text-sm font-bold hover:text-[#8B1E3F]">Oil & Gas</Link>
                  <Link to="/isr-uranium" className="px-6 py-3 hover:bg-gray-50 text-gray-700 text-sm font-bold hover:text-[#8B1E3F]">ISR Uranium</Link>
                  <Link to="/mining" className="px-6 py-3 hover:bg-gray-50 text-gray-700 text-sm font-bold hover:text-[#8B1E3F]">Mining</Link>
                  <Link to="/safety" className="px-6 py-3 hover:bg-gray-50 text-gray-700 text-sm font-bold hover:text-[#8B1E3F]">Safety</Link>
                </div>
              )}
            </div>

            <Link to="/team" className={`text-sm font-bold uppercase hover:opacity-70 transition-colors ${scrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'}`}>Our Team</Link>
            <Link to="/publications" className={`text-sm font-bold uppercase hover:opacity-70 transition-colors ${scrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'}`}>Publications</Link>
            
            <button 
              onClick={handleContactClick}
              className="px-5 py-2 rounded-sm text-white text-sm font-bold uppercase tracking-wider transition-transform active:scale-95" 
              style={{ backgroundColor: maroon }}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- CONTENT INJECTION POINT --- */}
      {/* This is where Home.jsx, InjectionWells.jsx, etc. will appear */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
             <div>
                <img src="https://petrotek.com/wp-content/uploads/2023/12/logo_full.png" alt="Petrotek" className="h-8 w-auto brightness-110 mb-8" />
                <p className="text-sm">A results-oriented engineering firm specializing in subsurface fluid flow and injection well projects since 1993.</p>
             </div>
             {/* Add rest of footer content here... */}
          </div>
          <div className="text-center md:text-left text-xs border-t border-gray-800 pt-8">
            <p>© {new Date().getFullYear()} Petrotek Engineering Corporation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;