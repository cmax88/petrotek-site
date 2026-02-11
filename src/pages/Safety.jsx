// src/pages/Safety.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  HardHat, 
  ShieldCheck, 
  FileCheck, 
  AlertTriangle, 
  Users, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';

const Safety = () => {
  const maroon = "#8B1E3F";

  const safetyPrinciples = [
    {
      title: "Comprehensive Training",
      icon: <Users className="w-6 h-6" style={{ color: maroon }} />,
      description: "Every employee undergoes rigorous safety training including H2S awareness, Defensive Driving, First Aid/CPR, and specific task-related hazard recognition.",
    },
    {
      title: "Risk Management",
      icon: <AlertTriangle className="w-6 h-6" style={{ color: maroon }} />,
      description: "We utilize Job Safety Analyses (JSAs) and Stop Work Authority to identify and mitigate risks before a single tool is lifted.",
    },
    {
      title: "Regulatory Compliance",
      icon: <FileCheck className="w-6 h-6" style={{ color: maroon }} />,
      description: "Our programs strictly adhere to OSHA, MSHA, and DOT regulations, ensuring that our operations meet or exceed federal and state standards.",
    },
    {
      title: "Contractor Management",
      icon: <ShieldCheck className="w-6 h-6" style={{ color: maroon }} />,
      description: "We maintain active, good-standing accounts with major contractor management databases to ensure seamless integration with client safety requirements.",
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
              <HardHat className="w-10 h-10" style={{ color: maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Health, Safety & Environment</h1>
            <p className="text-xl text-[#8B1E3F] font-bold mb-6">Zero Incidents. Zero Harm. No Compromise.</p>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: maroon }}></div>
            
            <p className="text-2xl text-gray-800 leading-relaxed font-medium">
              At Petrotek, safety is not just a policy—it is our core value. We maintain an impeccable safety record and full compliance with ISNetworld and Avetta contractor management services to ensure the health of all project personnel.
            </p>
          </div>

          {/* Detailed Content */}
          <div className="prose prose-lg max-w-none text-gray-600 mb-16 leading-relaxed">
            <p>
              We believe that all accidents are preventable. Our safety culture is driven by top-down leadership and bottom-up engagement, empowering every employee to take ownership of their safety and the safety of those around them.
            </p>
            <p>
              Whether we are conducting a field inspection at a remote injection well site or performing reservoir analysis in the office, our commitment to HSE excellence remains the same.
            </p>
          </div>

          {/* Compliance Badges Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Verified Compliance</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              
              {/* ISNetworld Placeholder */}
              <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-64">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 text-white font-black text-2xl shadow-lg">
                  ISN
                </div>
                <h4 className="font-bold text-gray-800">ISNetworld®</h4>
                <p className="text-sm text-green-600 font-bold mt-2 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1" /> Grade A / Compliant
                </p>
              </div>

              {/* Avetta Placeholder */}
              <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-64">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white font-black text-xl shadow-lg">
                  Avetta
                </div>
                <h4 className="font-bold text-gray-800">Avetta</h4>
                <p className="text-sm text-green-600 font-bold mt-2 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1" /> Active Status
                </p>
              </div>

            </div>
          </div>

          {/* Safety Principles Grid */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Safety Framework</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {safetyPrinciples.map((item, index) => (
              <div key={index} className="flex flex-col h-full bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gray-50 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-[#8B1E3F] text-white rounded-2xl p-10 md:p-14 text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Require Safety Verification?</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our full safety manual and OSHA 300 logs are available for client review upon request. We are happy to integrate with your specific HSE requirements.
            </p>
            <Link 
               to="/" 
               onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
               className="inline-flex items-center px-8 py-4 bg-white text-[#8B1E3F] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
             >
               Contact Our HSE Manager <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Safety;