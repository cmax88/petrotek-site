// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
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
  Gem,
  HardHat,
  Pickaxe
} from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";

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
  const recaptchaRef = React.useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (id) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const maroon = "#8B1E3F";
  const anniversaryGraphic = "/33-years-service-graphic.png";

  const services = [
    { title: "Injection Well Services", description: "Our personnel have hundreds of years of combined injection well experience and are familiar with state and federal regulators throughout the country.", icon: <Droplet className="w-8 h-8" style={{ color: maroon }} />, link: "/injection-wells" },
    { title: "Carbon Capture (CO2CCS)", description: "Petrotek is a leader in conducting CCS feasibility studies and preparing Class VI UIC permits. We evaluate options for tax equity partnerships.", icon: <CloudRain className="w-8 h-8" style={{ color: maroon }} />, link: "/carbon-capture" },
    { title: "Oil and Gas", description: "We provide services regarding specialized technical issues including drilling spacing unit permitting, correlative rights, and reservoir simulation.", icon: <OilWell className="w-8 h-8" style={{ color: maroon }} />, link: "/oil-and-gas" },
    { title: "ISR Uranium and Copper", description: "Our experience in ISR uranium and copper mining spans more than 28 years and includes hydrogeological characterization and aquifer exemptions.", icon: <Gem className="w-8 h-8" style={{ color: maroon }} />, link: "/isr-uranium" },
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
    if (!token) {
      alert("Please complete the reCAPTCHA");
      return;
    }
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
      <header id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 opacity-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10"></div>
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ 
              transform: `translateY(${scrollOffset * 0.15}px)`,
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
        
        <div className="w-full px-6 md:px-12 lg:px-20 4k:px-40 relative z-20 flex flex-col lg:flex-row items-center py-20 lg:py-0">
          <div className="lg:w-[60%] 4k:w-[50%] flex justify-start text-center lg:text-left">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl 4k:text-8xl font-black text-white leading-tight mb-6 tracking-tight">
                Injection Well and Subsurface Resources Consultants
              </h1>
              <p className="text-xl md:text-2xl 4k:text-4xl text-gray-200 mb-10 italic border-l-4 pl-6 mx-auto lg:mx-0" style={{ borderColor: maroon }}>
                Building Relationships. Solving Problems. Adding Value.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <button onClick={() => scrollToId('#whatwedo')} className="px-10 py-5 text-white font-bold rounded-sm shadow-2xl transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: maroon }}>Explore Services</button>
                <Link to="/publications" className="px-10 py-5 bg-white text-gray-900 font-bold rounded-sm shadow-2xl hover:bg-gray-100 transition-all text-center hover:scale-105 active:scale-95">Our Publications</Link>
              </div>
            </div>
          </div>

          <div className="lg:w-[40%] 4k:w-[50%] flex justify-center items-center mt-16 lg:mt-0 animate-in fade-in zoom-in duration-1000 delay-300">
            <img 
              src={anniversaryGraphic} 
              alt="33 Years of UIC Service" 
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 4k:w-[600px] 4k:h-[600px] object-contain filter drop-shadow-2xl transition-transform hover:rotate-3"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center">
          <button onClick={() => scrollToId('#section-nav')} className="text-white opacity-80 hover:opacity-100 transition-opacity flex flex-col items-center group">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] mb-2 group-hover:mb-3 transition-all duration-300">Scroll Down</span>
            <ChevronDown size={32} className="animate-bounce-down" />
          </button>
        </div>
      </header>

      {/* Sticky Sub-Navigation */}
      <nav id="section-nav" className="sticky top-[60px] md:top-[72px] z-40 bg-white border-b border-gray-100 shadow-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="container mx-auto px-6 py-4 flex justify-center 4k:max-w-9xl">
          <ul className="flex items-center space-x-6 md:space-x-12 4k:space-x-24">
            {subNavItems.map((item) => (
              <li key={item.name}>
                <button 
                  onClick={() => scrollToId(item.href)}
                  className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#8B1E3F] transition-colors relative group py-1"
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
      <section id="whoweare" className="py-24 4k:py-40 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-8xl 4k:max-w-9xl">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl 4k:text-7xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="w-24 h-1 mx-auto md:mx-0 mb-10" style={{ backgroundColor: maroon }}></div>
              <p className="text-lg md:text-xl 4k:text-3xl text-gray-600 mb-8 leading-relaxed">
                Petrotek Corporation is a results-oriented firm that specializes in engineering evaluation and field operations regarding subsurface fluid flow and injection well projects. We are a team of engineers and geoscientists experienced in a broad spectrum of professional disciplines.
              </p>
              <p className="text-lg md:text-xl 4k:text-3xl text-gray-600 mb-12 leading-relaxed">
                Our company was founded in 1993 with a mission of providing cost-effective contract services to industrial and governmental clients. Our firm takes pride in meeting that goal with the highest degree of integrity and professionalism.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-6 sm:space-y-0 sm:space-x-10">
                <div className="w-24 h-24 4k:w-40 4k:h-40 flex-shrink-0">
                  <img src={anniversaryGraphic} alt="33 Years Badge" className="w-full h-full object-contain filter grayscale opacity-50" />
                </div>
                <span className="text-lg 4k:text-3xl font-bold text-gray-800 uppercase tracking-wider border-l-2 border-maroon pl-6">
                  Over Three Decades of <br className="hidden md:block" /> Professional Excellence
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative max-w-lg w-full">
                <img 
                  src="https://petrotek.com/wp-content/uploads/elementor/thumbs/Injection-Well-3D-qg3dwrpdvagdnjryarnr1gnw6cokhg4cmbgdmeshz4.png" 
                  alt="3D Injection Well Model" 
                  className="rounded-lg shadow-2xl z-10 w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="whatwedo" className="py-24 4k:py-40 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 max-w-8xl 4k:max-w-9xl">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl 4k:text-8xl font-bold text-gray-900 mb-6">Our Core Capabilities</h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: maroon }}></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 4k:gap-16">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group p-10 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                <div className="mb-8 p-4 bg-gray-50 inline-block rounded-xl group-hover:bg-[#8B1E3F]/10 transition-colors">{service.icon}</div>
                <h3 className="text-2xl 4k:text-4xl font-bold mb-6 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 4k:text-2xl leading-relaxed mb-8 flex-grow">{service.description}</p>
                <div className="flex items-center text-sm 4k:text-xl font-bold uppercase tracking-wider" style={{ color: maroon }}>
                  Learn More <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Map Section */}
      <section id="clientsserved" className="py-24 4k:py-40 bg-gray-50 border-y border-gray-100 scroll-mt-20">
        <div className="container mx-auto px-6 text-center max-w-8xl 4k:max-w-9xl">
          <div className="mb-16">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-80" style={{ color: maroon }} />
            <h2 className="text-4xl md:text-6xl 4k:text-8xl font-bold text-gray-900 mb-6">Clients Served</h2>
            <div className="w-24 h-1 mx-auto mb-10" style={{ backgroundColor: maroon }}></div>
            <p className="max-w-3xl mx-auto text-xl 4k:text-3xl text-gray-700">Petrotek serves a diverse range of clients across North America and beyond, providing specialized engineering and geological expertise.</p>
          </div>
          <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white bg-white p-6 4k:p-12">
            <img 
              src="https://petrotek.com/wp-content/uploads/2023/09/USA_Map3-1024x706.png" 
              alt="Client Map" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section id="industries" className="py-24 4k:py-40 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 text-center max-w-8xl 4k:max-w-9xl">
          <div className="mb-20">
            <Activity className="w-16 h-16 mx-auto mb-6 opacity-80" style={{ color: maroon }} />
            <h2 className="text-4xl md:text-6xl 4k:text-8xl font-bold text-gray-900 mb-6">Industries Served</h2>
            <div className="w-24 h-1 mx-auto mb-10" style={{ backgroundColor: maroon }}></div>
            <p className="max-w-4xl mx-auto text-xl 4k:text-3xl text-gray-700 leading-relaxed mb-10">Petrotek provides consulting services to many industries for managing wastewater that is protective of drinking water sources and the environment.</p>
            <p className="text-lg 4k:text-2xl text-gray-500 font-medium uppercase tracking-widest">Global Industry Partnerships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 4k:gap-12 text-left">
            {industries.map((item, index) => (
              <div key={index} className="group relative flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="flex items-center justify-between p-6 z-10 bg-white">
                  <div className="flex items-center space-x-4">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: maroon }} />
                    <span className="text-lg 4k:text-3xl font-bold text-gray-800 group-hover:text-[#8B1E3F] transition-colors">{item.name}</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-300 group-hover:rotate-180 transition-transform duration-500" />
                </div>
                <div className="max-h-0 group-hover:max-h-72 transition-all duration-700 ease-in-out">
                  <div className="relative h-56 w-full">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 4k:py-40 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-8xl 4k:max-w-9xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-5 border border-gray-100">
            <div className="lg:col-span-2 p-12 md:p-16 text-white flex flex-col justify-between" style={{ backgroundColor: maroon }}>
              <div>
                <h2 className="text-4xl 4k:text-6xl font-black mb-12 tracking-tight">Get In Touch</h2>
                <div className="space-y-10 4k:space-y-16">
                  <div className="flex items-start space-x-6">
                    <MapPin className="w-8 h-8 4k:w-12 4k:h-12 flex-shrink-0" />
                    <p className="text-lg 4k:text-3xl leading-relaxed">5935 South Zang Street<br />Littleton, Colorado 80127</p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <Phone className="w-8 h-8 4k:w-12 4k:h-12 flex-shrink-0" />
                    <a href="tel:3032909414" className="text-lg 4k:text-3xl hover:underline">(303) 290-9414</a>
                  </div>
                  <div className="flex items-center space-x-6">
                    <Mail className="w-8 h-8 4k:w-12 4k:h-12 flex-shrink-0" />
                    <a href="mailto:info@petrotek.com" className="text-lg 4k:text-3xl hover:underline">info@petrotek.com</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 h-64 4k:h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.453473187122!2d-105.1507294242135!3d39.58434270529815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b77209e25c03b%3A0x67396c34827018c1!2s5935%20S%20Zang%20St%2C%20Littleton%2C%20CO%2080127!5e0!3m2!1sen!2sus!4v1707682300000!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="Petrotek Office Location"
                ></iframe>
              </div>
            </div>
            
            <form className="lg:col-span-3 p-12 md:p-20 space-y-8" onSubmit={handleFormSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm 4k:text-2xl font-bold text-gray-700 uppercase tracking-widest">First Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-4 focus:ring-[#8B1E3F]/20 focus:border-[#8B1E3F] outline-none transition-all 4k:text-3xl" required />
                </div>
                <div className="space-y-3">
                  <label className="text-sm 4k:text-2xl font-bold text-gray-700 uppercase tracking-widest">Last Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-4 focus:ring-[#8B1E3F]/20 focus:border-[#8B1E3F] outline-none transition-all 4k:text-3xl" required />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm 4k:text-2xl font-bold text-gray-700 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-4 focus:ring-[#8B1E3F]/20 focus:border-[#8B1E3F] outline-none transition-all 4k:text-3xl" required />
              </div>
              <div className="space-y-3">
                <label className="text-sm 4k:text-2xl font-bold text-gray-700 uppercase tracking-widest">Message</label>
                <textarea rows="6" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-4 focus:ring-[#8B1E3F]/20 focus:border-[#8B1E3F] outline-none transition-all 4k:text-3xl" required></textarea>
              </div>
              
              <div className="flex justify-center lg:justify-start pt-4 scale-90 md:scale-100 origin-left">
                {import.meta.env.VITE_RECAPTCHA_SITE ? (
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE}
                  />
                ) : (
                  <p className="text-red-500 text-sm font-bold">reCAPTCHA Configuration Missing</p>
                )}
              </div>

              <button type="submit" className="w-full py-5 text-white font-black rounded-lg uppercase tracking-widest shadow-2xl hover:brightness-110 active:scale-[0.98] transition-all 4k:text-3xl 4k:py-10" style={{ backgroundColor: maroon }}>
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