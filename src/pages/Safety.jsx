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
  ChevronRight,
  Stethoscope,
  Trophy,
  Search,
  Activity // <--- ADD THIS LINE
} from 'lucide-react';

const Safety = () => {
  const maroon = "#8B1E3F";

  const safetyCommitments = [
    { title: "Wellsite Excellence", icon: <HardHat className="w-5 h-5" />, text: "Maintain safe and healthy wellsite workplaces for our employees, contractors, and clients." },
    { title: "Rigorous Training", icon: <Users className="w-5 h-5" />, text: "Provide appropriate HSE training to our staff including OSHA, Wild Well Control, and PEC Safeland." },
    { title: "Field Readiness", icon: <ShieldCheck className="w-5 h-5" />, text: "Provide appropriate PPE and perform daily job hazard assessments during all field activities." },
    { title: "Stop Work Authority", icon: <AlertTriangle className="w-5 h-5" />, text: "Ensuring all employees understand they have the authority to stop any task to prevent an unsafe act." },
    { title: "Continuous Improvement", icon: <Activity className="w-5 h-5" />, text: "Periodically review and update HSE procedures to ensure they comply with evolving client requirements." },
    { title: "Root-Cause Analysis", icon: <Search className="w-5 h-5" />, text: "Provide timely, thorough reporting of accidents including detailed root-cause analysis when required." }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto">
        
        {/* Navigation - Back to Home */}
        <Link to="/" className="flex items-center text-[#8B1E3F] font-bold mb-8 hover:underline group w-fit">
          <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
        
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-12">
            <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
              <ShieldCheck className="w-10 h-10" style={{ color: maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Safety</h1>
            <p className="text-xl text-[#8B1E3F] font-bold mb-6">Safety is Everyone's Responsibility</p>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: maroon }}></div>
          </div>

          {/* Intro Content with Sticky Image */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
            <div className="lg:w-3/5">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-8">
                <p className="text-xl text-gray-800 font-medium">
                  We encourage safety to be everyone’s responsibility, not just the "safety guy’s." 
                </p>
                <br></br>
                <p>
                  At Petrotek, we believe a positive and encouraging attitude towards safety is the foundation of a successful project. We screen all of our contractors for key safety performance indicators and maintain rigorous compliance within <strong>ISNetworld and Avetta</strong> contractor management services.
                </p>
                <br></br>
                <p>
                  Our culture is built on the principle that <strong>all employees have Stop Work Authority</strong> at all times. If a condition is perceived as unsafe, our team is empowered—and expected—to prevent the act from occurring.
                </p>
              </div>

              {/* Verified Compliance Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">ISN</div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">ISNetworld®</div>
                    <div className="text-xs text-green-600 font-bold flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> Grade A Compliant</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold mr-4 text-[10px]">AVETTA</div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Avetta</div>
                    <div className="text-xs text-green-600 font-bold flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> Active Status</div>
                  </div>
                </div>
                                <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold mr-4">DISA</div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">DISA</div>
                    <div className="text-xs text-green-600 font-bold flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> Active Status</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
              <div className="lg:w-1.5/5 sticky top-32" >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src="/safety.jpg" 
                  alt="Petrotek Field Operations" 
                  className="w-auto h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Safety Commitment Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Commitment to You</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyCommitments.map((item, idx) => (
                <div key={idx} className="p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all group">
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg w-fit transition-colors">
                    {React.cloneElement(item.icon, { className: "w-6 h-6 group-hover:text-white transition-colors", style: { color: maroon } })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 m-0">Integrity in Every Action</h3>
            <p className="text-gray-600 mb-8 mt-2">
              Our HSE programs are periodically reviewed to ensure they stay effective, up-to-date, and comply with all client and regulatory requirements.
            </p>
            <Link 
                to="/" 
                onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
                 className="inline-flex items-center px-8 py-4 bg-[#8B1E3F] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
             >
               Contact Our HSE Team <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Safety;