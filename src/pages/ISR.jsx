// src/pages/ISR.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Gem, 
  Layers, 
  Droplet, 
  FileCheck, 
  Pickaxe, 
  ChevronRight,
  CheckCircle2,
  Activity
} from 'lucide-react';

const ISR = () => {
  const maroon = "#8B1E3F";

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
              <Gem className="w-10 h-10" style={{ color: maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">ISR Uranium & Copper</h1>
            <p className="text-xl text-[#8B1E3F] font-bold mb-6">In-Situ Recovery Permitting, Design, and Operations</p>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: maroon }}></div>
            
            <p className="text-2xl text-gray-800 leading-relaxed font-medium">
              Our specific experience in ISR uranium and copper mining spans more than 28 years and includes hydrogeological characterization, procurement of aquifer exemptions, and wastewater management via Class I wells.
            </p>
          </div>

          {/* Detailed Content */}
          <div className="prose prose-lg max-w-none text-gray-600 mb-16 leading-relaxed">
            <p>
              In-Situ Recovery (ISR) requires highly specialized knowledge of hydrogeology and geochemical fluid control. Unlike conventional mining, ISR involves circulating fluid through the ore body to dissolve minerals and pumping the solution to the surface for processing.
            </p>
            <p>
              Petrotek has nearly three decades of experience in permitting, well field design, and wastewater disposal for ISR operations across North America. We ensure that your operation maximizes recovery while maintaining strict containment of mining fluids to protect surrounding aquifers.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            
            {/* Service 1 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <FileCheck className="w-6 h-6 mr-3 mt-1" style={{ color: maroon }} />
                <h3 className="text-xl font-bold text-gray-900">Aquifer Exemptions & Permitting</h3>
              </div>
              <p className="text-gray-600 mb-4">Navigating the complex regulatory landscape to obtain necessary UIC permits and EPA aquifer exemptions.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Technical demonstration of ore containment</li>
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Regulatory liaison and public hearing support</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Layers className="w-6 h-6 mr-3 mt-1" style={{ color: maroon }} />
                <h3 className="text-xl font-bold text-gray-900">Hydrogeologic Characterization</h3>
              </div>
              <p className="text-gray-600 mb-4">Detailed modeling of the subsurface to ensure proper confinement of lixiviant within the production zone.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Pumping tests & reservoir analysis</li>
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> 3D Groundwater flow modeling</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Pickaxe className="w-6 h-6 mr-3 mt-1" style={{ color: maroon }} />
                <h3 className="text-xl font-bold text-gray-900">Wellfield Design</h3>
              </div>
              <p className="text-gray-600 mb-4">Optimization of injection and recovery well patterns to maximize sweep efficiency and mineral recovery.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Well pattern optimization</li>
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Excursion monitoring systems</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Droplet className="w-6 h-6 mr-3 mt-1" style={{ color: maroon }} />
                <h3 className="text-xl font-bold text-gray-900">Wastewater Management</h3>
              </div>
              <p className="text-gray-600 mb-4">Design and permitting of Class I Deep Disposal Wells for the safe management of ISR liquid waste streams.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Deep well feasibility studies</li>
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Volume reduction strategies</li>
              </ul>
            </div>

          </div>

          {/* Technical Highlight Section */}
          <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="flex-shrink-0 bg-white/10 p-6 rounded-full">
              <Activity className="w-12 h-12 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Restoration & Closure</h3>
              <p className="text-gray-300 leading-relaxed">
                Petrotek doesn't just help you start mining; we help you finish responsibly. Our team assists in designing groundwater restoration plans to return the aquifer to baseline conditions, ensuring regulatory compliance and bond release at the end of the project lifecycle.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Planning a new ISR Project?</h3>
             <Link 
               to="/" 
               onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
               className="inline-flex items-center px-8 py-4 bg-[#8B1E3F] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
             >
               Consult with our Hydrogeologists <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ISR;