// src/pages/Publications.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  FileText, 
  Calendar, 
  Users, 
  Download,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const Publications = () => {
  const maroon = "#8B1E3F";

  // Placeholder Data - YOU CAN UPDATE THIS LIST LATER
  const publications = [
    {
      id: 1,
      title: "Geologic Sequestration of Carbon Dioxide: Subsurface Evaluation and Permitting Considerations",
      journal: "Environmental Geosciences Journal",
      year: "2024",
      authors: "Petrotek Engineering Corp.",
      type: "Technical Paper",
      abstract: "An overview of the regulatory challenges and geological characterization requirements for Class VI injection wells under the new EPA guidelines."
    },
    {
      id: 2,
      title: "Optimization of Deep Injection Well Performance in Low-Permeability Reservoirs",
      journal: "Groundwater Protection Council (GWPC) Annual Forum",
      year: "2023",
      authors: "Smith, J. & Doe, A.",
      type: "Conference Presentation",
      abstract: "Case study analysis of stimulation techniques used to enhance injectivity in tight carbonate formations while maintaining caprock integrity."
    },
    {
      id: 3,
      title: "Hydrogeologic Modeling for ISR Uranium Mining: A Comparative Analysis",
      journal: "Society for Mining, Metallurgy & Exploration (SME)",
      year: "2022",
      authors: "Petrotek Engineering Corp.",
      type: "White Paper",
      abstract: "Comparing MODFLOW and FEFLOW approaches for predicting excursion potential in complex roll-front uranium deposits."
    },
    {
      id: 4,
      title: "Management of High-TDS Brine via Class I Disposal Wells",
      journal: "Industrial Wastewater Management Conference",
      year: "2021",
      authors: "Johnson, B.",
      type: "Technical Paper",
      abstract: "Strategies for mitigating scaling and corrosion issues in deep disposal wells handling concentrated brine streams from desalination plants."
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
              <BookOpen className="w-10 h-10" style={{ color: maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Technical Publications</h1>
            <p className="text-xl text-[#8B1E3F] font-bold mb-6">Research, Presentations, and Industry White Papers</p>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: maroon }}></div>
            
            <p className="text-2xl text-gray-800 leading-relaxed font-medium">
              Our team regularly contributes to the scientific community through peer-reviewed journals and industry conferences. Below is a selection of our recent technical work.
            </p>
          </div>

          {/* Publications List */}
          <div className="space-y-6 mb-20">
            {publications.map((pub) => (
              <div key={pub.id} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                {/* Decorative side bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#8B1E3F] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-gray-100 text-gray-600">
                    <FileText className="w-3 h-3 mr-2" /> {pub.type}
                  </span>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {pub.year}</span>
                    <span className="flex items-center"><Users className="w-4 h-4 mr-2" /> {pub.authors}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#8B1E3F] transition-colors">
                  {pub.title}
                </h3>
                
                <p className="text-gray-600 italic mb-6">Published in: {pub.journal}</p>
                
                <p className="text-gray-700 leading-relaxed mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  {pub.abstract}
                </p>

                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
                    className="flex items-center text-sm font-bold uppercase tracking-wider text-[#8B1E3F] hover:underline"
                  >
                    <Download className="w-4 h-4 mr-2" /> Request Copy
                  </button>
                  {/* If you have a direct link in the future, you can swap this button for: */}
                  {/* <a href={pub.link} className="..."><ExternalLink /> View Online</a> */}
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter / Contact Box */}
          <div className="bg-gray-900 text-white rounded-2xl p-10 text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Looking for a specific topic?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our archives contain over 30 years of technical reports and case studies. Contact us to request information on a specific subject or geological formation.
            </p>
            <Link 
               to="/" 
               onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
               className="inline-flex items-center px-8 py-4 bg-[#8B1E3F] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
             >
               Contact Our Research Team <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Publications;