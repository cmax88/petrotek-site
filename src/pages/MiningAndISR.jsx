import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  FileCheck, 
  ChevronRight,
  CheckCircle2,
  Globe2,
  Beaker,
  Scale,
  Pickaxe,
  Waves, 
  FileBarChart, 
  TrendingUp,
  Map,
  ShieldAlert,
  Search
} from 'lucide-react';

// Reusable UraniumIcon Component
const UraniumIcon = ({ className, style }) => (
  <div 
    className={className}
    style={{ 
      ...style, 
      backgroundColor: 'currentColor',
      mask: 'url("/database-zap.svg") no-repeat center / contain',
      WebkitMask: 'url("/database-zap.svg") no-repeat center / contain',
    }} 
  />
);

const MiningAndISR = () => {
  const [activeTab, setActiveTab] = useState('isr'); // 'isr' or 'mining'

  // Theme Colors
  const colors = {
    isr: "#EAB308",
    mining: "#78350F",
    maroon: "#8B1E3F"
  };

  const isrServices = [
    { title: "Strategic Planning", icon: <FileCheck className="w-5 h-5" />, items: ["Feasibility studies", "Hydrogeologic support for NI-43-101 (PEA/PFS)", "Expert testimony"] },
    { title: "Regulatory & Permitting", icon: <Scale className="w-5 h-5" />, items: ["Mining Permits (State level)", "Radioactive Materials Licenses (NRC)", "Aquifer exemption applications"] },
    { title: "Characterization & Modeling", icon: <Layers className="w-5 h-5" />, items: ["Aquifer characterization and assessments", "Analytical and numerical fate & transport modeling", "Restoration demonstrations"] },
    { title: "Chemical & Water Management", icon: <Beaker className="w-5 h-5" />, items: ["Geochemical evaluations and modeling", "Wastewater management via Class I disposal wells", "Wellfield fluid control"] }
  ];

  const miningExpertise = [
    { title: "Compliance & Permitting", icon: <ShieldAlert className="w-5 h-5" />, items: ["Preparation of Permit to Mine Applications", "Regulatory compliance support", "RCRA & CERCLA Investigations"] },
    { title: "Hydrogeologic Characterization", icon: <Waves className="w-5 h-5" />, items: ["Aquifer characterization and assessment", "Geologic mapping & data interpretation", "Environmental monitoring for active sites"] },
    { title: "Modeling & Remediation", icon: <FileBarChart className="w-5 h-5" />, items: ["Groundwater modeling for long-term conditions", "Groundwater remedial design", "Post-operational assessments"] },
    { title: "Strategic Support", icon: <Search className="w-5 h-5" />, items: ["Expert witness & litigation support", "Project management", "Water resource evaluations"] }
  ];

  const currentThemeColor = activeTab === 'isr' ? colors.isr : colors.mining;

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">

          {/* Navigation - Back to Home */}
          <Link to="/" className="flex items-center text-[#8B1E3F] font-bold mb-8 hover:underline group w-fit">
            <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          {/* Header & Tab Switcher */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {activeTab === 'isr' ? 'ISR Uranium & Copper' : 'Conventional Mining'}
            </h1>
            
            <div className="flex flex-wrap gap-4 p-1 bg-gray-50 rounded-xl w-fit border border-gray-100 mb-8">
              <button 
                onClick={() => setActiveTab('isr')}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'isr' ? 'bg-white shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                style={activeTab === 'isr' ? { color: colors.isr } : {}}
              >
                ISR Recovery
              </button>
              <button 
                onClick={() => setActiveTab('mining')}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'mining' ? 'bg-white shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                style={activeTab === 'mining' ? { color: colors.mining } : {}}
              >
                Conventional Mining
              </button>
            </div>
            <div className="w-24 h-1" style={{ backgroundColor: currentThemeColor }}></div>
          </div>

          {/* Dynamic Content: ISR */}
          {activeTab === 'isr' && (
            <div className="animate-in fade-in duration-500">
              <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
                <div className="lg:w-3/5 prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm text-[#EAB308]">
                    <UraniumIcon className="w-10 h-10" />
                  </div>
                  <p className="text-xl text-[#EAB308] font-bold mb-6">Uniting Fluid Flow, Petroleum Engineering, and Hydrology</p>
                  <p>
                    The in-situ recovery (ISR) industry is unique in that a specific combination of expertise in fluid flow, petroleum engineering, and hydrology is needed for the diverse nature of operations.
                  </p><br></br>
                  <p>
                    Petrotek currently provides consulting services to <strong>all of the major uranium operators in the U.S.</strong> with production or production visibility, as well as a number of companies in the advanced and junior exploration stages.
                  </p>
                  <div className="my-8 p-6 bg-gray-50 rounded-xl border-l-4" style={{ borderColor: colors.isr }}>
                    <div className="flex items-center mb-3">
                      <Globe2 className="w-6 h-6 mr-3" style={{ color: colors.isr }} />
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
              <div className="lg:w-5/5 sticky top-32" >
                <img 
                  src="/InSitu Uranium or Copper Recovery-01.png" 
                  alt="Petrotek Field Operations" 
                  className="w-full h-auto object-cover" // Changed h-full to h-auto to maintain aspect ratio without wrapper
                />
            </div>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our ISR Services & Expertise</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {isrServices.map((service, idx) => (
                    <ServiceCard key={idx} service={service} color={colors.isr} />
                  ))}
                </div>
              </div>

              <div className="mb-20 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <div className="p-1 text-center bg-gray-200 text-gray-500 text-[10px] uppercase tracking-widest font-bold">Uranium ISR Model Simulation</div>
                <img src="/Uranium-ISR-Model-Sim.jpg" alt="Model Simulation" className="w-full h-auto object-cover opacity-80" />
              </div>
            </div>
          )}

          {/* Dynamic Content: Conventional Mining */}
          {activeTab === 'mining' && (
            <div className="animate-in fade-in duration-500">
              <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
                <div className="lg:w-3/5 prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
                    <Pickaxe className="w-10 h-10" style={{ color: colors.mining }} />
                  </div>
                  <p className="text-xl text-[#78350F] font-bold mb-6">Characterization, Modeling, and Regulatory Compliance</p>
                  <p>
                    The Petrotek Team has over one hundred years of combined experience in performing hydrogeologic characterizations for evaluating soil and water impacts.
                  </p><br></br>
                  <p>
                    We specialize in assessing ground water and surface water interactions at new and active hard rock mining and mineral processing sites. Our work bridges the gap between complex geology and the stringent requirements of modern environmental stewardship.
                  </p>
                  
                  <div className="my-8 p-6 bg-gray-50 rounded-xl border-l-4" style={{ borderColor: colors.mining }}>
                    <div className="flex items-center mb-4 text-gray-900">
                      <Map className="mr-3 w-6 h-6" style={{ color: colors.mining }} />
                      <h3 className="text-lg font-bold m-0">Western U.S. Footprint</h3>
                    </div>
                    <ul className="grid grid-cols-2 gap-2 text-sm m-0 list-none p-0">
                      {[
                        { loc: "Arizona", res: "Copper" },
                        { loc: "New Mexico", res: "U, Cu, Ag, Au" },
                        { loc: "Utah", res: "Uranium" },
                        { loc: "Colorado", res: "U, Gold" },
                        { loc: "Wyoming", res: "U, Rare Earth" },
                        { loc: "Montana", res: "Cu, Ag, Au" },
                        { loc: "Idaho", res: "Ag, Pb, Zn" }
                      ].map((item, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle2 className="w-3 h-3 mr-2 text-[#8B1E3F]" /> 
                          <strong className="mr-1">{item.loc}:</strong> {item.res}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              <div className="lg:w-3/5 sticky top-32" >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src="/mining.jpg" 
                  alt="Petrotek Field Operations" 
                />
              </div>
            </div>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Specific Areas of Expertise</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {miningExpertise.map((service, idx) => (
                    <ServiceCard key={idx} service={service} color={colors.mining} />
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-3xl p-10 md:p-14 shadow-2xl mb-20 relative overflow-hidden">
                <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-3xl font-bold mb-4">Proactive Water Management</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      From baseline studies for new permits to long-term monitoring for active operations and post-operational closures, we provide the technical depth required for the industry's most challenging subsurface environments.
                    </p>
                    <div className="flex items-center space-x-2 text-[#78350F] font-bold">
                      <TrendingUp className="w-5 h-5" />
                      <span>Compliance & Operational Stability</span>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center">
                    <div className="w-32 h-32 border-4 border-[#78350F] rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">100+</span>
                      <span className="text-[10px] absolute mt-12 uppercase tracking-widest text-gray-400 text-center">Combined<br/>Exp.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Combined CTA */}
          <div className="text-center p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 m-0">
              {activeTab === 'isr' ? 'Ready to discuss your ISR project visibility?' : 'Secure your project\'s hydrologic future.'}
            </h3>
            <p className="text-gray-600 mb-8 mt-2">
              {activeTab === 'isr' 
                ? 'Whether you are a major operator or in the junior exploration stage, our hydrogeologists are ready to help.'
                : 'Contact our team to discuss your mining characterization, modeling, or permitting needs.'}
            </p>
            <Link 
              to="/" 
              onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
              className="inline-flex items-center px-8 py-4 text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
              style={{ backgroundColor: currentThemeColor }}
            >
              Consult with our {activeTab === 'isr' ? 'ISR' : 'Mining'} Experts <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

// Extracted Sub-component for Service Cards
const ServiceCard = ({ service, color }) => (
  <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center mb-6">
      <div className="p-2 rounded-lg bg-gray-50 mr-4" style={{ color }}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
    </div>
    <ul className="space-y-3">
      {service.items.map((item, i) => (
        <li key={i} className="flex items-start text-gray-700">
          <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color }} />
          <span className="text-md">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default MiningAndISR;