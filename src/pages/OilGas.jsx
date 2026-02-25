// src/pages/OilGas.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Gavel, 
  HardHat, 
  Activity, 
  CheckCircle2, 
  ChevronRight,
  BarChart3,
  History,
  Droplet
} from 'lucide-react';

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

const OilGas = () => {
  const maroon = "#8B1E3F";

  const upstreamServices = [
    { title: "Regulatory & Permitting", icon: <Gavel className="w-5 h-5" />, items: ["Permitting of well drilling and spacing units", "Regulatory hearings and expert testimony", "Correlative rights, pooling and flaring"] },
    { title: "Engineering & Analysis", icon: <BarChart3 className="w-5 h-5" />, items: ["Well test design and analysis", "Multi-phase reservoir characterization and simulations", "Reserve and economics evaluations"] },
    { title: "Field Operations", icon: <HardHat className="w-5 h-5" />, items: ["Drilling engineering and wellsite supervision", "Completions engineering and wellsite supervision", "Secondary recovery (waterflood) design and permitting"] },
    { title: "Subsurface Management", icon: <Droplet className="w-5 h-5" />, items: ["All aspects of Class II brine disposal wells", "Aquifer exemptions", "Produced water management"] }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto">
        
        <div className="max-w-6xl mx-auto">
          
        {/* Navigation - Back to Home */}
        <Link to="/" className="flex items-center text-[#8B1E3F] font-bold mb-8 hover:underline group w-fit">
          <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

          {/* Header Section */}
          <div className="mb-16">
            <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
              <OilWell className="w-10 h-10" style={{ color: maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Oil & Gas Upstream E&P</h1>
            <p className="text-xl text-[#8B1E3F] font-bold mb-6">Expertise Rooted in Decades of Field and Reservoir Experience</p>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: maroon }}></div>
          </div>

          {/* Background & Principals Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
            <div className="lg:w-3/5">
              <div className="flex items-center mb-6 text-gray-900">
                <History className="mr-3 w-6 h-6" style={{ color: maroon }} />
                <h2 className="text-2xl font-bold">Our Professional Roots</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  The principals of Petrotek all started their careers in oil and gas exploration and development. We carry a legacy of experience from major oil and gas operators and service companies.
                </p>
                <p className="mb-4">
                  Our backgrounds encompass the full lifecycle of the well, involving <strong>well operation, drilling, reservoir engineering, geology, and environmental compliance.</strong>
                </p>
                <p className="font-semibold text-gray-800 border-l-4 pl-4" style={{ borderColor: maroon }}>
                  Please contact us to discuss how we can help with project efficiency and economics in the current price environment.
                </p>
              </div>
            </div>
            <div className="lg:w-5/5" >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src="/Oil Field Ops and Disposal Well.png" 
                  alt="Petrotek Field Operations" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Upstream E&P Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">E&P Operations & Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upstreamServices.map((service, idx) => (
                <div key={idx} className="p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="p-2 rounded-lg bg-gray-50 mr-4" style={{ color: maroon }}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: maroon }} />
                        <span className="text-md">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/GCCsw42BVSg?si=4HlN-FaIBTV6WYWc" 
                title="pstream Oil Field Operations"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="mb-4 text-center italic text-gray-500">Video by Ron Udell</p>
          </div>

          {/* Brine Disposal Callout */}
          <div className="bg-gray-900 text-white rounded-2xl p-10 md:p-14 shadow-2xl relative overflow-hidden mb-16">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 bg-[#8B1E3F] p-5 rounded-full">
                <Droplet className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Class II Brine Disposal Wells</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Petrotek handles all aspects of Class II brine disposal, from siting and permitting to construction oversight and regulatory compliance.
                </p>
                <Link to="/injection-wells" className="text-white font-bold flex items-center hover:underline">
                  Explore our full Injection Well Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
             <h3 className="text-2xl font-bold mb-6 text-gray-900">Maximize your reservoir's potential.</h3>
             <Link 
               to="/" 
               onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
               className="inline-flex items-center px-8 py-4 bg-[#8B1E3F] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
             >
               Consult Our E&P Experts <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OilGas;