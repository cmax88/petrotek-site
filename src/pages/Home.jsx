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
import emailjs from '@emailjs/browser';

// Custom Oil Well Icon
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

// Custom Uranium Icon
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
  const [activeSection, setActiveSection] = useState("home");
  const recaptchaRef = useRef();

  // Parallax & Scrollspy Logic
  useEffect(() => {
    const handleScroll = () => setScrollOffset(window.scrollY);

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -65% 0px',
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
    const sections = document.querySelectorAll('header[id], section[id]');
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
      const offset = 120;
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // 1. Verify reCAPTCHA
    const token = recaptchaRef.current.getValue();
    if (!token) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    // 2. EmailJS Configuration from .env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // 3. Prepare Template Params
    const templateParams = {
      from_name: e.target.firstName.value + " " + e.target.lastName.value,
      reply_to: e.target.email.value,
      message: e.target.message.value,
      'g-recaptcha-response': token,
    };

    // 4. Send Email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log('Email successfully sent!', result.status, result.text);
        alert("Message sent! I'll be in touch at cjmax88@gmail.com soon.");
        e.target.reset();
        recaptchaRef.current.reset();
      }, (error) => {
        console.error('Email failed to send:', error);
        alert("Failed to send message. Please check the console for errors.");
      });
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

  return (
    <>
      <style>
        {`
          @keyframes heroPan {
            0% { transform: scale(1.2) translateX(5%); }
            100% { transform: scale(1.2) translateX(-5%); }
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
<header id="home" className="relative flex flex-col h-[calc(100vh-72px)] overflow-hidden bg-white">
  
  {/* 1. Background Image Container */}
  <div className="relative h-[85%] w-full overflow-hidden bg-gray-900 shrink-0">
    <div className="absolute inset-0 opacity-100 overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{ transform: `translateY(${scrollOffset * 0.1}px)`, transition: 'transform 0.1s linear' }}
      >
        <img 
          src="/Hero.jpg" 
          alt="Petrotek Background" 
          className="h-full w-full object-cover animate-hero-pan will-change-transform" 
        />
      </div>
    </div>

    {/* Hero Text Content - Using ultra-specific media queries for 2K+ */}
    <div className="w-full px-6 md:px-12 lg:px-20 [@media(min-width:1600px)]:px-40 relative z-20 flex flex-col lg:flex-row items-center justify-center h-full max-w-[2000px] mx-auto"> 
      
      <div className="lg:w-[55%] flex flex-col justify-center text-center lg:text-left pt-12 lg:pt-0">
        <div className="max-w-3xl [@media(min-width:1600px)]:max-w-5xl">
          {/* Headline: Only scales up past 1600px wide */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl [@media(min-width:1600px)]:text-7xl font-extrabold text-white leading-tight mb-6 lg:mb-8 [@media(min-width:1600px)]:mb-12 tracking-tight">
            Injection Well and Subsurface Resources Consultants
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 [@media(min-width:1600px)]:gap-8 justify-center lg:justify-start items-center lg:items-start">
            <button 
              onClick={() => scrollToId('#whatwedo')} 
              className="w-[180px] sm:w-auto px-4 sm:px-8 [@media(min-width:1600px)]:px-14 py-3 md:py-4 [@media(min-width:1600px)]:py-6 text-white text-xs sm:text-base [@media(min-width:1600px)]:text-xl font-bold rounded-sm shadow-xl transition-all hover:brightness-110 text-center" 
              style={{ backgroundColor: maroon }}
            >
              Explore Services
            </button>

            <Link 
              to="/publications" 
              className="w-[180px] sm:w-auto px-4 sm:px-8 [@media(min-width:1600px)]:px-14 py-3 md:py-4 [@media(min-width:1600px)]:py-6 bg-white text-gray-900 text-xs sm:text-base [@media(min-width:1600px)]:text-xl font-bold rounded-sm shadow-xl hover:bg-gray-100 transition-all text-center"
            >
              Our Publications
            </Link>
          </div>
        </div>
      </div>

      {/* Anniversary Graphic: Only scales up past 1600px wide */}
      <div className="lg:w-[30%] flex justify-center items-center pt-8 lg:pt-0">
        <img 
          src={anniversaryGraphic} 
          alt="33 Years of UIC Service" 
          className="w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 [@media(min-width:1600px)]:w-[400px] [@media(min-width:1600px)]:h-[400px] object-contain filter drop-shadow-2xl opacity-90 transition-transform hover:scale-105" 
          onError={(e) => { e.target.style.display = 'none'; }} 
        />
      </div>
    </div>
  </div>

  {/* 2. Slogan Section */}
  <div 
    className="w-full h-[15%] flex justify-center items-center" 
    style={{ backgroundColor: maroon }}
  >
    <div className="text-center px-4 md:px-6">
      <p 
        className="text-lg md:text-2xl lg:text-3xl [@media(min-width:1600px)]:text-4xl text-white italic font-bold py-2 md:py-3 [@media(min-width:1600px)]:py-5 px-6 md:px-12 [@media(min-width:1600px)]:px-24 border-white/20 leading-tight inline-block"
      >
        Building Relationships. Solving Problems. Adding Value.
      </p>
    </div>
  </div>
</header>

      {/* Sticky Sub-Navigation */}
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
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Petrotek Corporation is a results-oriented firm that specializes in engineering evaluation and field operations regarding subsurface fluid flow and injection well projects.</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Our company was founded in 1993 with a mission of providing cost-effective contract services to industrial and governmental clients. Our firm takes pride in meeting that goal with the highest degree of integrity and professionalism.</p>
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

      {/* Client Map Section */}
      <section id="clientsserved" className="py-20 bg-gray-50 border-y border-gray-100 scroll-mt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-12">
            <Globe className="w-12 h-12 mx-auto mb-4 opacity-80" style={{ color: maroon }} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Clients Served</h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: maroon }}></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">Petrotek serves a diverse range of clients across North America and beyond, providing specialized engineering and geological expertise.</p>
          </div>
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <img 
              src="/PEC Client Map.png" 
              alt="Client Map" 
              className="w-full h-full"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"; }}
            />
          </div>
        </div>
      </section>

      <section id="industries" className="py-24 bg-white scroll-mt-20">
        <div className="w-full px-6 md:px-12 mx-auto max-w-[1728px] text-center">
          <Activity className="w-12 h-12 mx-auto mb-4" style={{ color: maroon }} />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries Served</h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: maroon }}></div>
                      <p className="max-w-4xl mx-auto text-lg text-gray-700">Petrotek provides consulting services to many industries for managing wastewater that is protective of drinking water sources and the environment.</p>
            <br></br>
            <p className="text-lg text-gray-600 italic">Some of the industries we serve include:</p>
            <br></br>
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

      <section id="contact" className="py-24 bg-gray-50 border-t border-gray-200 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid lg:grid-cols-5">
            <div className="lg:col-span-2 p-12 text-white" style={{ backgroundColor: maroon }}>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4"><MapPin className="w-6 h-6 mt-1" /><p>5935 South Zang Street<br />Littleton, Colorado 80127</p></div>
                <div className="flex items-center space-x-4"><Phone className="w-6 h-6" /><p>(303) 290-9414</p></div>
                <div className="flex items-center space-x-4"><Mail className="w-6 h-6" /><p>info@petrotek.com</p></div>
              </div>
              <div className="mt-10 rounded-xl overflow-hidden shadow-lg border border-white/20">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.764491953255!2d-105.15182932353066!3d39.632468403217496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b7e61e6955555%3A0x7d7c67c52697b0d7!2s5935%20S%20Zang%20St%2C%20Littleton%2C%20CO%2080127!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%" height="220" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Office Location"
                ></iframe>
              </div>
            </div>
            <form className="lg:col-span-3 p-12 space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2"><label className="text-sm font-bold">First Name</label><input required name="firstName" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-[#8B1E3F] outline-none" /></div>
                <div className="space-y-2"><label className="text-sm font-bold">Last Name</label><input required name="lastName" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-[#8B1E3F] outline-none" /></div>
              </div>
              <div className="space-y-2"><label className="text-sm font-bold">Email Address</label><input required name="email" type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-[#8B1E3F] outline-none" /></div>
              <div className="space-y-2"><label className="text-sm font-bold">Message</label><textarea required name="message" rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-[#8B1E3F] outline-none"></textarea></div>
              <div className="flex justify-center md:justify-start">
                {import.meta.env.VITE_RECAPTCHA_SITE ? (
                  <ReCAPTCHA ref={recaptchaRef} sitekey={import.meta.env.VITE_RECAPTCHA_SITE} />
                ) : (
                  <p className="text-red-500 text-sm italic">reCAPTCHA Key Missing (Check .env)</p>
                )}
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