// src/pages/OilGas.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Gavel, 
  HardHat, 
  Activity, 
  CheckCircle2, 
  ChevronRight,
  BarChart3
} from 'lucide-react';

// Custom Oil Well Icon using your public SVG
const OilWell = ({ className, style }) => (
  <img 
    src="/regular-oil-well.svg" // Use the exact filename from your public folder
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
              <OilWell className="w-10 h-10" style={{ color: maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Oil and Gas Engineering</h1>
            <p className="text-xl text-[#8B1E3F] font-bold mb-6">Reservoir Optimization, Regulatory Support, and Field Supervision</p>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: maroon }}></div>
            
            <p className="text-2xl text-gray-800 leading-relaxed font-medium">
              We provide services regarding specialized technical issues including drilling spacing unit permitting, correlative rights, reservoir simulation, well test analysis, reserves analysis, and field supervision.
            </p>
          </div>

          {/* Detailed Content */}
          <div className="prose prose-lg max-w-none text-gray-600 mb-16 leading-relaxed">
            <p>
              In a mature industry, efficiency and compliance are paramount. Our oil and gas services focus on optimizing reservoir performance and managing complex regulatory hurdles. 
            </p>
            <p>
              We specialize in secondary and enhanced recovery techniques, pressure transient analysis, and economic evaluations for small independents and major operators alike. Whether you need expert witness testimony for a hearing or boots-on-the-ground supervision for a workover, Petrotek delivers technical excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            
            {/* Service 1 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <BarChart3 className="w-6 h-6 mr-3 mt-1" style={{ color: maroon }} />
                <h3 className="text-xl font-bold text-gray-900">Reservoir Engineering</h3>
              </div>
              <p className="text-gray-600 mb-4">Maximizing the value of your assets through advanced simulation and analysis.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Reservoir simulation & modeling</li>
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Reserves analysis & economic evaluation</li>
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Secondary & Enhanced Oil Recovery (EOR)</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Gavel className="w-6 h-6 mr-3 mt-1" style={{ color: maroon }} />
                <h3 className="text-xl font-bold text-gray-900">Regulatory Support</h3>
              </div>
              <p className="text-gray-600 mb-4">Navigating state and federal regulations to secure permits and protect your rights.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Drilling spacing unit permitting</li>
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Correlative rights protection</li>
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Expert witness testimony</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Activity className="w-6 h-6 mr-3 mt-1" style={{ color: maroon }} />
                <h3 className="text-xl font-bold text-gray-900">Well Analysis</h3>
              </div>
              <p className="text-gray-600 mb-4">Diagnosing well performance issues to identify opportunities for improvement.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Pressure transient analysis</li>
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Well test design & interpretation</li>
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Production data analysis</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <HardHat className="w-6 h-6 mr-3 mt-1" style={{ color: maroon }} />
                <h3 className="text-xl font-bold text-gray-900">Field Supervision</h3>
              </div>
              <p className="text-gray-600 mb-4">Experienced on-site supervision to ensure operations run safely and according to plan.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Drilling supervision</li>
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Completion & workover oversight</li>
                <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400"/> Vendor management</li>
              </ul>
            </div>

          </div>

          {/* Value Add Section */}
          <div className="bg-gray-900 text-white rounded-2xl p-10 md:p-14 shadow-2xl relative overflow-hidden mb-16">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 bg-[#8B1E3F] p-4 rounded-xl shadow-lg">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Enhancing Asset Value</h3>
                <p className="text-gray-300 leading-relaxed">
                  We don't just solve problems; we add value. By applying advanced reservoir engineering principles to your data, we often identify overlooked pay zones or optimization strategies that significantly increase the Net Present Value (NPV) of your project.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Maximize your reservoir's potential.</h3>
             <Link 
               to="/" 
               onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
               className="inline-flex items-center px-8 py-4 bg-[#8B1E3F] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
             >
               Contact Our Petroleum Engineers <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OilGas;