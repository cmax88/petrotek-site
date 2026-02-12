// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronRight, 
  Globe, 
  Activity, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail,
  Droplet,
  CloudRain,
  HardHat,
  Pickaxe
} from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";

// Custom Oil Well Icon using your public SVG
const OilWell = ({ className, style }) => (
  <img 
    src="/regular-oil-well.svg"
    alt="Oil Well Icon"
    className={className}
    style={{ 
      ...style, 
      filter: 'brightness(0) saturate(100%) invert(18%) sepia(48%) saturate(1982%) hue-rotate(320deg) brightness(89%) contrast(92%)' 
    }} 
  />
);

// Custom Uranium Icon Component
const UraniumIcon = ({ className }) => (
  <img 
    src="/database-zap.svg"
    alt="Uranium Service Icon"
    className={className}
    style={{ 
      filter: 'brightness(0) saturate(100%) invert(18%) sepia(48%) saturate(1982%) hue-rotate(320deg) brightness(89%) contrast(92%)'  
    }}
  />
);

const Home = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [activeSection, setActiveSection] = useState("home"); // Track active section
  const recaptchaRef = useRef();

  // Parallax & Scrollspy Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    // Intersection Observer for highlighting nav items
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -65% 0px', // Trigger when section is in the middle-top area
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('header[id], section[id], nav[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToId = (id) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 120; // Accounts for sticky nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const maroon = "#8B1E3F";
  const anniversaryGraphic = "/33-years-service-graphic.png";

  const services = [
    { title: "Injection Well Services", description: "Our personnel have hundreds of years of combined injection well experience and are familiar with state and federal regulators throughout the country.", icon: <Droplet className="w-8 h-8" style={{ color: maroon }} />, link: "/injection-wells" },
    { title: "Carbon Capture (CO2CCS)", description: "Petrotek is a leader in conducting CCS feasibility studies and preparing Class VI UIC permits. We evaluate options for tax equity partnerships.", icon: <CloudRain className="w-8 h-8" style={{ color: maroon }} />, link: "/carbon-capture" },
    { title: "Oil and Gas", description: "We provide services regarding specialized technical issues including drilling spacing unit permitting, correlative rights, and reservoir simulation.", icon: <OilWell className="w-8 h-8" style={{ color: maroon }} />, link: "/oil-and-gas" },
    { title: "ISR Uranium and Copper", description: "Our experience in ISR uranium and copper mining spans more than 28 years and includes hydrogeological characterization and aquifer exemptions.", icon: <UraniumIcon className="w-8 h-8" />, link: "/isr-uranium" },
    { title: "Safety", description: "Safety is our top priority. We maintain an impeccable safety record and full compliance with ISNetworld and Avetta contractor management services.", icon: <HardHat className="w-8 h-8" style={{ color: maroon }} />, link: "/safety" },
    { title: "Mining", description: "We have more than thirty years of experience in the mining industry related to groundwater characterization and modeling.", icon: <Pickaxe className="w-8 h-8" style={{ color: maroon }} />, link: "/mining" }
  ];

  const industries = [
    { name: "Food Production", img: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
    { name: "Pharmaceuticals", img: "https://plus.unsplash.com/premium_photo-1661374914839-a84dc1314c86?w=600&auto=format&fit=crop&q=60" },
    { name: "Heavy Manufacturing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" },
    { name: "Chemical Plants", img: "https://images.unsplash.com/photo-1704130092069-30ae33e2def0?q=80&w=1170&auto=format&fit=crop" },
    { name: "Ethanol Plants", img: "https://www.iowacorn.org/wp-content/uploads/2024/05/24138_ICGA_DRONE_ETHANOLPLANT_-21-scaled.jpg" },
    { name: "Gas Storage", img: "https://diversegy.com/wp-content/uploads/2024/07/lng-storage-containers.png" },
    { name: "Oil and Gas", img: "https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?q=80&w=1149&auto=format&fit=crop" },
    { name: "Cosmetics", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400" },
    { name: "Environmental Remediation", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400" },
    { name: "Municipal Water Supply", img: "https://images.unsplash.com/photo-1600965487524-8b8c37f6c394?q=80&w=1170&auto=format&fit=crop" },
    { name: "Refineries", img: "https://images.unsplash.com/photo-1611581372056-30cf28a7bd2e?q=80&w=1074&auto=format&fit=crop" },
    { name: "Waste Management", img: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=1170&auto=format&fit=crop" },
    { name: "Mining", img: "https://images.unsplash.com/photo-1571223641822-b82408a0e705?q=80&w=1402&auto=format&fit=crop" },
    { name: "Power Generation", img: "https://images.unsplash.com/photo-1694551073674-f8809f1685f4?q=80&w=1170&auto=format&fit=crop" },
    { name: "Cloth Manufacturing", img: "https://images.unsplash.com/photo-1612685179841-3965cf0c3f70?q=80&w=1378&auto=format&fit=crop" }
  ];

  const subNavItems = [
    { name: "Who We Are", href: "#whoweare" },
    { name: "What We Do", href: "#whatwedo" },
    { name: "Clients Served", href: "#clientsserved" },
    { name: "Industries Served", href: "#industries" },
    { name: "Contact", href: "#contact" }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    if (!token) { alert("Please complete the reCAPTCHA"); return; }
    console.log("Form submitted with token:", token);
  };

  return (
    <>
      <style>
        {`
          @keyframes heroPan {
            0% { transform: scale(1.3) translateX(5%); }
            100% { transform: scale(1.3) translateX(-5%); }
          }
          .animate-hero-pan { animation: heroPan 30s ease-in-out infinite alternate; width: 100%; }
          @keyframes bounceDown {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          .animate-bounce-down { animation: bounceDown 2s infinite; }
        `}
      </style>

      {/* Hero Section */}
      <header id="home" className="relative h-screen flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 opacity-100 overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-transparent z-10"></div>
           <div className="absolute inset-0 w-full h-full" style={{ transform: `translateY(${scrollOffset * 0.1}px)`, transition: 'transform 0.1s linear' }}>
             <img src="https://petrotek.com/wp-content/uploads/2023/08/FrontRange-from-RTD-fall_0.jpg" alt="Petrotek Background" className="h-full w-full object-cover animate-hero-pan will-change-transform" />
           </div>
        </div>
        <div className="w-full px-6 md:px-12 lg:px-20 relative z-20 flex flex-col lg:flex-row items-center h-full">
          <div className="lg:w-[55%] flex justify-start pt-20 lg:pt-0">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight">Injection Well and Subsurface Resources Consultants</h1>
              <p className="text-xl text-gray-200 mb-8 italic border-l-4 pl-4" style={{ borderColor: maroon }}>Building Relationships. Solving Problems. Adding Value.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToId('#whatwedo')} className="px-8 py-4 text-white font-bold rounded-sm shadow-xl transition-all hover:brightness-110" style={{ backgroundColor: maroon }}>Explore Services</button>
                <Link to="/publications" className="px-8 py-4 bg-white text-gray-900 font-bold rounded-sm shadow-xl hover:bg-gray-100 transition-all text-center">Our Publications</Link>
              </div>
            </div>
          </div>
          <div className="lg:w-[45%] flex justify-center items-center h-full pt-10 lg:pt-0">
            <img src={anniversaryGraphic} alt="33 Years of UIC Service" className="w-25 h-25 md:w-40 md:h-40 lg:w-50 lg:h-50 xl:w-75 xl:h-75 object-contain filter drop-shadow-2xl opacity-90 transition-transform hover:scale-105" onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <button onClick={() => scrollToId('#whoweare')} className="text-white opacity-80 hover:opacity-100 transition-opacity flex flex-col items-center group">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] mb-2 group-hover:mb-3 transition-all duration-300">Scroll Down</span>
            <ChevronDown size={32} className="animate-bounce-down" />
          </button>
        </div>
      </header>

      {/* Sticky Sub-Navigation with Scrollspy */}
      <nav id="section-nav" className="hidden md:block sticky top-[72px] z-40 bg-white border-b border-gray-100 shadow-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="container mx-auto px-6 py-4 flex justify-center">
          <ul className="flex items-center space-x-8 lg:space-x-12">
            {subNavItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.name}>
                  <button 
                    onClick={() => scrollToId(item.href)}
                    className={`text-xs lg:text-sm font-bold uppercase tracking-widest transition-colors relative group py-1 ${isActive ? 'text-[#8B1E3F]' : 'text-gray-500 hover:text-[#8B1E3F]'}`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#8B1E3F] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <section id="whoweare" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
              <div className="w-24 h-1 mb-8" style={{ backgroundColor: maroon }}></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Petrotek Corporation is a results-oriented firm that specializes in engineering evaluation and field operations regarding subsurface fluid flow and injection well projects. We are a team of engineers and geoscientists experienced in a broad spectrum of professional disciplines.</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Our company was founded in 1993 with a mission of providing cost-effective contract services to industrial and governmental clients. Our firm takes pride in meeting that goal with the highest degree of integrity and professionalism. We insist on client satisfaction and prefer results-oriented approaches to problem solving. For more information on our capabilities, please review this site and contact any of the professionals on our staff. We look forward to working with you.</p>
              <div className="flex items-center space-x-6">
                <img src={anniversaryGraphic} alt="33 Years" className="w-20 h-20 grayscale brightness-0 opacity-100" />
                <span className="text-lg font-bold text-gray-800 uppercase tracking-wider border-l-2 border-[#8B1E3F] pl-6">Over Three Decades of <br /> Professional Excellence</span>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="https://petrotek.com/wp-content/uploads/elementor/thumbs/Injection-Well-3D-qg3dwrpdvagdnjryarnr1gnw6cokhg4cmbgdmeshz4.png" alt="3D Model" className="rounded-lg shadow-2xl w-full max-w-sm h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section id="whatwedo" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Capabilities</h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: maroon }}></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                <Link to={service.link} className="flex items-center text-sm font-bold uppercase tracking-wider group-hover:underline" style={{ color: maroon }}>Learn More <ChevronRight className="w-4 h-4 ml-1" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clientsserved" className="py-20 bg-gray-50 border-y border-gray-100 scroll-mt-20">
        <div className="container mx-auto px-6 text-center">
          <Globe className="w-12 h-12 mx-auto mb-4" style={{ color: maroon }} />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Clients Served</h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: maroon }}></div>
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
            <img src="https://petrotek.com/wp-content/uploads/2023/09/USA_Map3-1024x706.png" alt="Map" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section id="industries" className="py-24 bg-white scroll-mt-20">
        <div className="w-full px-6 md:px-12 mx-auto max-w-[1728px] text-center">
          <Activity className="w-12 h-12 mx-auto mb-4" style={{ color: maroon }} />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries Served</h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: maroon }}></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {industries.map((item, index) => (
              <div key={index} className="group h-[280px] [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 h-full w-full rounded-xl overflow-hidden shadow-sm [backface-visibility:hidden]">
                    <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-4">
                      <div className="flex items-center space-x-2 text-white">
                        <CheckCircle2 className="w-4 h-4" style={{ color: maroon }} />
                        <span className="text-sm font-bold">{item.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-50 p-6 flex flex-col justify-center items-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)] border-2" style={{ borderColor: maroon }}>
                    <h3 className="text-base font-bold mb-2 uppercase" style={{ color: maroon }}>{item.name}</h3>
                    <p className="text-[11px] text-gray-600">Subsurface engineering for {item.name.toLowerCase()}.</p>
                    <button onClick={() => scrollToId('#contact')} className="mt-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#8B1E3F]" style={{ color: maroon }}>Inquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Contact Section */}
<section id="contact" className="py-24 bg-gray-50 border-t border-gray-200 scroll-mt-20">
  <div className="container mx-auto px-6">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid lg:grid-cols-5 border border-gray-100">
      
      {/* Sidebar Info */}
      <div className="lg:col-span-2 p-12 text-white" style={{ backgroundColor: maroon }}>
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4"><MapPin className="w-6 h-6 mt-1 flex-shrink-0" /><p>5935 South Zang Street<br />Littleton, Colorado 80127</p></div>
          <div className="flex items-center space-x-4"><Phone className="w-6 h-6 flex-shrink-0" /><p>(303) 290-9414</p></div>
          <div className="flex items-center space-x-4"><Mail className="w-6 h-6 flex-shrink-0" /><p>info@petrotek.com</p></div>
        </div>
        
        {/* Google Maps Embed */}
        <div className="mt-10 rounded-xl overflow-hidden shadow-lg border border-white/20">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.046892558451!2d-105.151322!3d39.610234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b7e63b6a9359d%3A0x7d6c6e7b8b4b4b4b!2s5935%20S%20Zang%20St%2C%20Littleton%2C%20CO%2080127!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%" 
            height="220" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Petrotek Office Location"
          ></iframe>
        </div>
      </div>
      
      {/* Contact Form */}
      <form onSubmit={handleFormSubmit} className="lg:col-span-3 p-12 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">First Name</label>
            <input name="firstName" required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-[#8B1E3F] outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Last Name</label>
            <input name="lastName" required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-[#8B1E3F] outline-none" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Email Address</label>
          <input name="email" required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-[#8B1E3F] outline-none" />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Message</label>
          <textarea name="message" required rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-[#8B1E3F] outline-none"></textarea>
        </div>

        {/* reCAPTCHA Widget */}
        {/* Inside your Form in Home.jsx */}
        <div className="flex justify-center md:justify-start">
          {import.meta.env.VITE_RECAPTCHA_SITE ? (
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE}
            />
          ) : (
            <p className="text-red-500 text-sm italic">
              reCAPTCHA Key Missing (Check .env)
            </p>
          )}
        </div>

        <button 
          type="submit" 
          className="w-full py-4 text-white font-bold rounded-sm uppercase tracking-widest shadow-lg hover:brightness-110 transition-all" 
          style={{ backgroundColor: maroon }}
        >
          Send Message
        </button>
      </form>

    </div>
  </div>
</section>
    </>
  );
};

export default Home;