import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Droplet, 
  ShieldCheck, 
  BarChart3, 
  FileText, 
  ChevronRight,
  CheckCircle2,
  Recycle,
  Waves,
  Microscope,
  Zap
} from 'lucide-react';

const Leachate = () => {
  // Using a Deep Teal/Green for the Waste Management / Leachate theme
  const themeColor = "#0D9488"; // Teal-600
  const maroon = "#8B1E3F"; // Your primary brand color for consistency

  const leachateServices = [
    { 
      title: "Disposal Well Permitting", 
      icon: <FileText className="w-5 h-5" />, 
      items: ["Class I non-hazardous permits", "Feasibility and siting studies", "AOR (Area of Review) evaluations"] 
    },
    { 
      title: "Geochemical Characterization", 
      icon: <Microscope className="w-5 h-5" />, 
      items: ["Leachate-rock compatibility testing", "Pre-treatment requirement analysis", "Formation fluid sampling"] 
    },
    { 
      title: "Operational Support", 
      icon: <Zap className="w-5 h-5" />, 
      items: ["Wellhead pressure monitoring", "Annulus pressure testing (MIT)", "Injection rate optimization"] 
    },
    { 
      title: "Regulatory Compliance", 
      icon: <ShieldCheck className="w-5 h-5" />, 
      items: ["Quarterly & Annual reporting", "UIC program liaison", "Financial assurance documentation"] 
    }
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
            <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm" style={{ color: themeColor }}>
                <Recycle className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Landfill Leachate Services</h1>
            <p className="text-xl font-bold mb-6" style={{ color: themeColor }}>Sustainable Subsurface Solutions for Modern Waste Management</p>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: themeColor }}></div>
          </div>

          {/* Intro Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
            <div className="lg:w-3/5 prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>
                As landfill operations expand, the management of leachate becomes a critical operational and financial challenge. Petrotek provides specialized engineering and geological expertise to help landfill operators transition from costly "haul and treat" methods to long-term, on-site disposal solutions.
              </p>
              <br />
              <p>
                Our team specializes in the <strong>Class I Deep Well Injection</strong> of landfill leachate, offering a disposal method that is both environmentally protective and significantly more cost-effective than traditional municipal treatment or surface discharge.
              </p>
              
              <div className="my-8 p-6 bg-gray-50 rounded-xl border-l-4" style={{ borderColor: themeColor }}>
                <div className="flex items-center mb-3">
                  <Waves className="w-6 h-6 mr-3" style={{ color: themeColor }} />
                  <h3 className="text-lg font-bold text-gray-900 m-0">Why Deep Well Injection?</h3>
                </div>
                <p className="text-sm m-0">
                  By utilizing deep, isolated geological formations, landfill operators can dispose of large volumes of leachate safely below the <strong>Lowest Billable Underground Source of Drinking Water (USDW)</strong>, reducing surface footprint and transportation risks.
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
              <div className="lg:w-3/5 sticky top-32" >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Petrotek Field Operations" 
                />
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Comprehensive Leachate Management</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {leachateServices.map((service, idx) => (
                <div key={idx} className="p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="p-2 rounded-lg bg-gray-50 mr-4" style={{ color: themeColor }}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: themeColor }} />
                        <span className="text-md">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Benefit Block */}
          <div className="bg-gray-900 text-white rounded-3xl p-10 md:p-14 shadow-2xl mb-20 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Built for the Waste Industry</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-2xl font-bold" style={{ color: themeColor }}>Cost Reductions</div>
                  <p className="text-gray-400 text-sm">Eliminate the rising costs of third-party treatment and trucking logistics.</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold" style={{ color: themeColor }}>Reliability</div>
                  <p className="text-gray-400 text-sm">On-site disposal provides 24/7 uptime regardless of weather or municipal capacity.</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold" style={{ color: themeColor }}>Longevity</div>
                  <p className="text-gray-400 text-sm">Wells are engineered for decades of service to match the lifespan of the landfill.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
             <h3 className="text-2xl font-bold mb-6 text-gray-900">Optimize your leachate management strategy.</h3>
             <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Our engineers have successfully permitted and operated Class I disposal wells for some of the largest landfill operators in the country.</p>
             <Link 
               to="/" 
               onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
               className="inline-flex items-center px-8 py-4 text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
               style={{ backgroundColor: themeColor }}
             >
               Speak with a Waste Management Expert <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Leachate;