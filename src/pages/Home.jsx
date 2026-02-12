// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
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
  Gem,
  HardHat,
  Pickaxe
} from 'lucide-react';

// Custom Oil Well Icon
const OilWell = ({ className, style }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style}
  >
    <path d="M12 2L5 22h14L12 2z" />
    <path d="M7 15h10" />
    <path d="M9 10h6" />
    <path d="M12 5v10" />
  </svg>
);

const Home = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const recaptchaRef = React.useRef(); // Create a ref for the widget

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    
    if (!token) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    // Process form data here...
    console.log("Form submitted with token:", token);
  };

  // Parallax Effect Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Helper for on-page navigation
  const scrollToId = (id) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const maroon = "#8B1E3F";
  const anniversaryGraphic = "/33-years-service-graphic.png"; // Ensure this file exists in /public

  // Service Data for the Cards (Updated with 'link' paths matching App.jsx)
  const services = [
    {
      title: "Injection Well Services",
      description: "Our personnel have hundreds of years of combined injection well experience and are familiar with state and federal regulators throughout the country.",
      icon: <Droplet className="w-8 h-8" style={{ color: maroon }} />,
      link: "/injection-wells"
    },
    {
      title: "Carbon Capture (CO2CCS)",
      description: "Petrotek is a leader in conducting CCS feasibility studies and preparing Class VI UIC permits. We evaluate options for tax equity partnerships.",
      icon: <CloudRain className="w-8 h-8" style={{ color: maroon }} />,
      link: "/carbon-capture"
    },
    {
      title: "Oil and Gas",
      description: "We provide services regarding specialized technical issues including drilling spacing unit permitting, correlative rights, and reservoir simulation.",
      icon: <OilWell className="w-8 h-8" style={{ color: maroon }} />,
      link: "/oil-and-gas"
    },
    {
      title: "ISR Uranium and Copper",
      description: "Our experience in ISR uranium and copper mining spans more than 28 years and includes hydrogeological characterization and aquifer exemptions.",
      icon: <Gem className="w-8 h-8" style={{ color: maroon }} />,
      link: "/isr-uranium"
    },
    {
      title: "Safety",
      description: "Safety is our top priority. We maintain an impeccable safety record and full compliance with ISNetworld and Avetta contractor management services.",
      icon: <HardHat className="w-8 h-8" style={{ color: maroon }} />,
      link: "/safety"
    },
    {
      title: "Mining",
      description: "We have more than thirty years of experience in the mining industry related to groundwater characterization and modeling.",
      icon: <Pickaxe className="w-8 h-8" style={{ color: maroon }} />,
      link: "/mining"
    }
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

  return (
    <>
      <form className="lg:col-span-3 p-12 space-y-6" onSubmit={handleFormSubmit}></form>
      {/* Global Animation Styles */}
      <style>
        {`
          @keyframes heroPan {
            0% { transform: scale(1.3) translateX(5%); }
            100% { transform: scale(1.3) translateX(-5%); }
          }
          .animate-hero-pan {
            animation: heroPan 30s ease-in-out infinite alternate;
            width: 100%;
          }
          @keyframes bounceDown {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          .animate-bounce-down {
            animation: bounceDown 2s infinite;
          }
        `}
      </style>

      {/* Hero Section */}
      <header id="home" className="relative h-screen flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 opacity-100 overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-transparent z-10"></div>
           {/* Parallax Wrapper */}
           <div 
             className="absolute inset-0 w-full h-full"
             style={{ 
               transform: `translateY(${scrollOffset * 0.1}px)`,
               transition: 'transform 0.1s linear'
             }}
           >
             <img 
              src="https://petrotek.com/wp-content/uploads/2023/08/FrontRange-from-RTD-fall_0.jpg" 
              alt="Petrotek Background" 
              className="h-full w-full object-cover animate-hero-pan will-change-transform" 
             />
           </div>
        </div>
        
        <div className="w-full px-6 md:px-12 lg:px-20 relative z-20 flex flex-col lg:flex-row items-center h-full">
          {/* Left Column: Text Content */}
          <div className="lg:w-[55%] flex justify-start pt-20 lg:pt-0">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                Injection Well and Subsurface Resources Consultants
              </h1>
              <p className="text-xl text-gray-200 mb-8 italic border-l-4 pl-4" style={{ borderColor: maroon }}>
                Building Relationships. Solving Problems. Adding Value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToId('#whatwedo')} className="px-8 py-4 text-white font-bold rounded-sm shadow-xl transition-all hover:brightness-110" style={{ backgroundColor: maroon }}>Explore Services</button>
                <Link to="/publications" className="px-8 py-4 bg-white text-gray-900 font-bold rounded-sm shadow-xl hover:bg-gray-100 transition-all text-center">Our Publications</Link>
              </div>
            </div>
          </div>

          {/* Right Column: Anniversary Badge */}
          <div className="lg:w-[45%] flex justify-center items-center h-full pt-10 lg:pt-0 animate-in fade-in zoom-in duration-1000 delay-300">
            <img 
              src={anniversaryGraphic} 
              alt="33 Years of UIC Service" 
              className="w-25 h-25 md:w-40 md:h-40 lg:w-50 lg:h-50 xl:w-75 xl:h-75 object-contain filter drop-shadow-2xl opacity-90 transition-transform hover:scale-105"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <button onClick={() => scrollToId('#section-nav')} className="text-white opacity-80 hover:opacity-100 transition-opacity flex flex-col items-center group">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] mb-2 group-hover:mb-3 transition-all duration-300">Scroll Down</span>
            <ChevronDown size={32} className="animate-bounce-down" />
          </button>
        </div>
      </header>

      {/* Sticky Sub-Navigation */}
      <nav id="section-nav" className="sticky top-[60px] md:top-[72px] z-40 bg-white border-b border-gray-100 shadow-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="container mx-auto px-6 py-4 flex justify-center">
          <ul className="flex items-center space-x-8 lg:space-x-12">
            {subNavItems.map((item) => (
              <li key={item.name}>
                <button 
                  onClick={() => scrollToId(item.href)}
                  className="text-xs lg:text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#8B1E3F] transition-colors relative group py-1"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B1E3F] transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Who We Are Section */}
      <section id="whoweare" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
              <div className="w-24 h-1 mx-auto md:mx-0" style={{ backgroundColor: maroon }}></div>
              <div className="mb-8"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-left">
                Petrotek Corporation is a results-oriented firm that specializes in engineering evaluation and field operations regarding subsurface fluid flow and injection well projects. We are a team of engineers and geoscientists experienced in a broad spectrum of professional disciplines.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-left">
                Our company was founded in 1993 with a mission of providing cost-effective contract services to industrial and governmental clients. Our firm takes pride in meeting that goal with the highest degree of integrity and professionalism. We insist on client satisfaction and prefer results-oriented approaches to problem solving.
              </p>
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 flex-shrink-0">
                  <img 
                    src={anniversaryGraphic} 
                    alt="33 Years Badge" 
                    className="w-full h-full object-contain filter grayscale brightness-0 contrast-125 opacity-100"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <span className="text-lg font-bold text-gray-800 uppercase tracking-wider border-l-2 border-maroon pl-6">
                  Over Three Decades of <br />
                  Professional Excellence
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative max-w-sm w-full">
                <img 
                  src="https://petrotek.com/wp-content/uploads/elementor/thumbs/Injection-Well-3D-qg3dwrpdvagdnjryarnr1gnw6cokhg4cmbgdmeshz4.png" 
                  alt="3D Injection Well Model" 
                  className="relative rounded-lg shadow-2xl z-10 w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities (Updated with Router Links) */}
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
                
                {/* Router Link Component */}
                <Link 
                  to={service.link}
                  className="flex items-center text-sm font-bold uppercase tracking-wider group-hover:underline text-left" 
                  style={{ color: maroon }}
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Map Section */}
      <section id="clientsserved" className="py-20 bg-gray-50 border-y border-gray-100 scroll-mt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-12">
            <Globe className="w-12 h-12 mx-auto mb-4 opacity-80" style={{ color: maroon }} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Clients Served</h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: maroon }}></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">Petrotek serves a diverse range of clients across North America and beyond, providing specialized engineering and geological expertise.</p>
          </div>
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-4">
            <img 
              src="https://petrotek.com/wp-content/uploads/2023/09/USA_Map3-1024x706.png" 
              alt="Client Map" 
              className="w-full h-auto"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"; }}
            />
          </div>
        </div>
      </section>

      {/* Industries Served Reveal */}
      <section id="industries" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-16">
            <Activity className="w-12 h-12 mx-auto mb-4 opacity-80" style={{ color: maroon }} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries Served</h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: maroon }}></div>
            <p className="max-w-4xl mx-auto text-lg text-gray-700">Petrotek provides consulting services to many industries for managing wastewater that is protective of drinking water sources and the environment.</p>
            <br></br>
            <p className="text-lg text-gray-600 italic">Some of the industries we serve include:</p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start text-left">
            {industries.map((item, index) => (
              <div key={index} className="group relative flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#8B1E3F] transition-all duration-500 overflow-hidden">
                <div className="flex items-center justify-between p-5 z-10 bg-white">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: maroon }} />
                    <span className="text-gray-800 font-bold group-hover:text-[#8B1E3F] transition-colors">{item.name}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-300 group-hover:rotate-180 transition-transform duration-500" />
                </div>
                <div className="max-h-0 group-hover:max-h-64 transition-all duration-500 ease-in-out">
                  <div className="relative h-48 w-full">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.453473187122!2d-105.1507294242135!3d39.58434270529815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b77209e25c03b%3A0x67396c34827018c1!2s5935%20S%20Zang%20St%2C%20Littleton%2C%20CO%2080127!5e0!3m2!1sen!2sus!4v1707682300000!5m2!1sen!2sus"
                  width="100%" 
                  height="220" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Petrotek Office Location"
                ></iframe>
              </div>
            </div>
            
            <form className="lg:col-span-3 p-12 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2"><label className="text-sm font-bold text-gray-700">First Name</label><input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-[#8B1E3F] outline-none" /></div>
                <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Last Name</label><input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-[#8B1E3F] outline-none" /></div>
              </div>
              <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Email Address</label><input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-[#8B1E3F] outline-none" /></div>
              <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Message</label><textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-[#8B1E3F] outline-none"></textarea></div>
              <div className="flex justify-center md:justify-start">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE}
                />
              </div>
              <button type="submit" className="w-full py-4 text-white font-bold rounded-sm uppercase tracking-widest shadow-lg hover:brightness-110 transition-all" style={{ backgroundColor: maroon }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;