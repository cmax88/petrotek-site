// src/pages/Mining.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Pickaxe, 
  Mountain, 
  Waves, 
  FileBarChart, 
  Droplet, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp
} from 'lucide-react';

const Mining = () => {
  const maroon = "#8B1E3F";

  const services = [
    {
      title: "Mine Dewatering & Depressurization",
      icon: <Waves className="w-6 h-6" style={{ color: maroon }} />,
      description: "Design and optimization of dewatering systems to ensure stable and dry working conditions for open-pit and underground operations.",
      items: [
        "Wellfield design & optimization",
        "Pumping test analysis",
        "Pit slope depressurization"
      ]
    },
    {
      title: "Groundwater Modeling",
      icon: <FileBarChart className="w-6 h-6" style={{ color: maroon }} />,
      description: "Advanced numerical modeling to predict inflow rates, cone of depression, and potential impacts on local water resources.",
      items: [
        "MODFLOW / FEFLOW simulations",
        "Predictive impact analysis",
        "Pore pressure modeling"
      ]
    },
    {
      title: "Environmental Impact (EIS/EIA)",
      icon: <Mountain className="w-6 h-6" style={{ color: maroon }} />,
      description: "Comprehensive hydrologic assessments to support Environmental Impact Statements and permitting requirements.",
      items: [
        "Baseline hydrogeologic studies",
        "Impact assessment on wetlands/springs",
        "Regulatory compliance reporting"
      ]
    },
    {
      title: "Water Supply & Management",
      icon: <Droplet className="w-6 h-6" style={{ color: maroon }} />,
      description: "Sourcing reliable industrial water supplies and managing site-wide water balances for efficient operation.",
      items: [
        "Water source identification",
        "Site-wide water balance modeling",
        "Water rights technical support"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto">
        
        {/* Navigation - Back to Home */}
        <Link to="/" className="flex items-center text-[#8B1E3F] font-bold mb-8 hover:underline group w-fit">
          <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
        
        <div className="max-w-5xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-12">
            <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
              <Pickaxe className="w-10 h-10" style={{ color: maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Mining Hydrogeology</h1>
            <p className="text-xl text-[#8B1E3F] font-bold mb-6">Groundwater Characterization, Modeling, and Dewatering</p>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: maroon }}></div>
            
            <p className="text-2xl text-gray-800 leading-relaxed font-medium">
              We have more than thirty years of experience in the mining industry related to groundwater characterization, modeling, and the assessment of hydrologic impacts for various mining sectors.
            </p>
          </div>

          {/* Detailed Content */}
          <div className="prose prose-lg max-w-none text-gray-600 mb-16 leading-relaxed">
            <p>
              Water is often the most critical technical challenge in mining. Too much water can destabilize slopes and halt production; too little can stall processing. 
            </p>
            <p>
              Petrotek provides critical hydrogeological support for mining operations, bridging the gap between operational needs and environmental stewardship. Our geoscientists work to protect water resources while facilitating efficient resource extraction through rigorous data analysis and state-of-the-art modeling.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="flex items-start mb-6">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4 shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                
                <div className="mt-auto border-t border-gray-200 pt-6">
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center text-sm font-bold text-gray-700">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-[#8B1E3F] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Insight Section */}
          <div className="bg-gray-900 text-white rounded-3xl p-10 md:p-14 shadow-2xl mb-16 relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                 <h3 className="text-3xl font-bold mb-4">Strategic Water Management</h3>
                 <p className="text-gray-300 text-lg leading-relaxed mb-6">
                   Modern mining requires a proactive approach to water. We help clients move beyond reactive dewatering to comprehensive lifecycle water management—reducing risks, lowering costs, and ensuring compliance from exploration through closure.
                 </p>
                 <div className="flex items-center space-x-2 text-[#8B1E3F] font-bold">
                    <TrendingUp className="w-5 h-5" />
                    <span>Optimizing Operational Efficiency</span>
                 </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-32 h-32 border-4 border-[#8B1E3F] rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold">30+</span>
                  <span className="text-xs absolute mt-10 uppercase tracking-widest">Years Exp.</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Need hydrogeological support for your mine?</h3>
             <Link 
               to="/" 
               onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
               className="inline-flex items-center px-8 py-4 bg-[#8B1E3F] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
             >
               Contact Our Mining Team <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Mining;