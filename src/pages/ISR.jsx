// src/pages/ISR.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  Droplet, 
  FileCheck, 
  ChevronRight,
  CheckCircle2,
  Activity,
  Globe2,
  Beaker,
  Scale
} from 'lucide-react';

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

const ISR = () => {
  const maroon = "#8B1E3F";

  const isrServices = [
    { title: "Strategic Planning", icon: <FileCheck className="w-5 h-5" />, items: ["Feasibility studies", "Hydrogeologic support for NI-43-101 (PEA/PFS)", "Expert testimony"] },
    { title: "Regulatory & Permitting", icon: <Scale className="w-5 h-5" />, items: ["Mining Permits (State level)", "Radioactive Materials Licenses (NRC)", "Aquifer exemption applications"] },
    { title: "Characterization & Modeling", icon: <Layers className="w-5 h-5" />, items: ["Aquifer characterization and assessments", "Analytical and numerical fate & transport modeling", "Restoration demonstrations"] },
    { title: "Chemical & Water Management", icon: <Beaker className="w-5 h-5" />, items: ["Geochemical evaluations and modeling", "Wastewater management via Class I disposal wells", "Wellfield fluid control"] }
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
          <div className="mb-12">
            <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
              <UraniumIcon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">ISR Uranium & Copper</h1>
            <p className="text-xl text-[#8B1E3F] font-bold mb-6">Uniting Fluid Flow, Petroleum Engineering, and Hydrology</p>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: maroon }}></div>
          </div>

          {/* Intro Section with Sticky Image */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
            <div className="lg:w-3/5 prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>
                The in-situ recovery (ISR) industry is unique in that a specific combination of expertise in fluid flow, petroleum engineering, and hydrology is needed for the diverse nature of operations.
              </p>
              <br></br>
              <p>
                Petrotek currently provides consulting services to <strong>all of the major uranium operators in the U.S.</strong> with production or production visibility, as well as a number of companies in the advanced and junior exploration stages.
              </p>
              <div className="my-8 p-6 bg-gray-50 rounded-xl border-l-4" style={{ borderColor: maroon }}>
                <div className="flex items-center mb-3">
                  <Globe2 className="w-6 h-6 mr-3" style={{ color: maroon }} />
                  <h3 className="text-lg font-bold text-gray-900 m-0">Global Technical Support</h3>
                </div>
                <p className="text-sm m-0">
                  Our staff provides technical support for uranium ISR and mining reclamation projects across the globe, including <strong>Australia, Canada, Kazakhstan, Paraguay, South Africa, and Turkey.</strong>
                </p>
              </div>
              <p>
                We are deeply knowledgeable regarding all federal and state regulatory requirements related to groundwater flow at ISR projects, ensuring that operations remain compliant from exploration through final reclamation.
              </p>
            </div>

            {/* Right Column: Image */}
              <div className="lg:w-5/5 sticky top-32" >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src="/InSitu Uranium or Copper Recovery-01.png" 
                  alt="Petrotek Field Operations" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our ISR Services & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {isrServices.map((service, idx) => (
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

          {/* Technical Deep Dive Image/Diagram placeholder */}
          <div className="mb-20 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
             <div className="p-1 text-center bg-gray-200 text-gray-500 text-[10px] uppercase tracking-widest font-bold">Uranium ISR Model Simulation</div>
             <img 
                src="/Uranium-ISR-Model-Sim.jpg" 
                alt="Uranium ISR Model Simulation" 
                className="w-full h-auto object-cover opacity-80"
             />
             
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
             <h3 className="text-2xl font-bold mb-6 text-gray-900 m-0">Ready to discuss your ISR project visibility?</h3>
             <p className="text-gray-600 mb-8 mt-2">Whether you are a major operator or in the junior exploration stage, our hydrogeologists are ready to help.</p>
             <Link 
               to="/" 
               onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
               className="inline-flex items-center px-8 py-4 bg-[#8B1E3F] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
             >
               Consult with our ISR Experts <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ISR;