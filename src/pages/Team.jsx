// src/pages/OurTeam.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  GraduationCap, 
  Search, 
  X,
  ChevronRight,
  ShieldCheck,
  Scale
} from 'lucide-react';

const OurTeam = () => {
  const maroon = "#8B1E3F";
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);

  const teamData = [
    {
      name: "Wes Janes, B.S., P.G.",
      role: "Managing Principal / Field Operations Manager",
      education: "B.S. Geology, University of South Alabama",
      tags: ["Geology", "Field Operations", "Wellsite Supervision", "Texas", "Wyoming"],
      bio: "Wes is one of the managing principals of Petrotek and serves as the Field Operations Manager. He has more than 21 years of experience with wellsite field work and the application of geology to permitting for all classes of well projects. Wes is an active member of RMAG, SPE, and AAPG, and is a Licensed Professional Geologist in nine states.",
      personal: "Wes and his family reside in the foothills west of Denver. In his spare time, he enjoys hunting, skiing, hiking, and camping with his wife and three daughters."
    },
    {
      name: "Hal Demuth, M.S.",
      role: "Managing Principal / Senior Engineer & Hydrogeologist",
      education: "B.S. Petroleum Engineering, M.S. Hydrogeology",
      tags: ["Hydrogeology", "Petroleum Engineering", "ISR Uranium", "Expert Witness"],
      bio: "Hal has more than 35 years of applied industry experience. He is a Technical Team Leader for produced water and wastewater management via Class I, II and V injection wells. Hal leads the technical team for ISR uranium Class III permitting and operations support globally.",
      personal: "Hal is the proud husband of Monette and father of 11 children. In his spare time, he enjoys hiking, hunting and skiing."
    },
    {
      name: "Ken Cooper, M.S., P.E.",
      role: "Managing Principal / Director of Engineering",
      education: "B.S. & M.S. Petroleum Engineering, Montana Tech",
      tags: ["Engineering", "Reservoir Simulation", "Well Feasibility", "Colorado"],
      bio: "Ken has more than 35 years of experience working with all classes of injection wells. He specializes in investigating well feasibility, reservoir issues, and optimizing injection well operation and maintenance. He is a board member of the GWREF and UITC.",
      personal: "Ken likes spending time with his wife, hiking, four-wheeling, and an occasional good craft beer. He hopes to visit all seven continents."
    },
    {
      name: "Ken Schlieper, B.S.",
      role: "Lead Technical Contributor",
      education: "B.S. Environmental Studies, Slippery Rock University",
      tags: ["CERCLA", "RCRA", "Hydrogeologic Characterization", "Class I"],
      bio: "Ken has more than 31 years of field and project management experience in hydrogeologic characterization at numerous CERCLA, RCRA, and other regulated sites throughout the U.S.",
      personal: "Ken enjoys photography and spending time with his family on the ski slopes or in the backcountry."
    },
    {
      name: "Brian Ault, B.S.",
      role: "Senior Technical & Project Manager",
      education: "B.S. Petroleum Engineering, Marietta College",
      tags: ["Project Management", "Well Completions", "Production", "San Juan Basin"],
      bio: "Brian has more than 35 years of experience, including significant tenure at Meridian Oil and Ultra Petroleum. His expertise lies in delivering projects safely, on schedule, and aligned with business goals.",
      personal: "Brian enjoys spending time with his five kids and crawling over the rocks around Moab, Utah in his Jeep."
    },
    {
      name: "Tyler Burton, PhD",
      role: "Class VI & Sustainability Advisor",
      education: "PhD Law (CEPMLP), M.S. Economics (Oxford)",
      tags: ["Class VI", "Carbon Capture", "Regulatory Law", "FSA Credentialed"],
      bio: "Dr. Burton assists with Class VI permit applications and advises on carbon capture and storage markets, including market credits, offsets valuation, and financial incentives.",
      personal: ""
    },
    {
      name: "Connie Walker, M.S.",
      role: "Senior Geologist",
      education: "B.S. & M.S. Geology, Colorado School of Mines",
      tags: ["Regulatory Compliance", "RCRA", "Land Ban Petitions", "NEPA"],
      bio: "Connie has over 35 years of experience in geology and regulatory analysis. She served as program director for contracts supporting the US EPA HQ Office of Radiation and Indoor Air.",
      personal: ""
    },
    {
      name: "Lewis Wandke, B.S., P.E.",
      role: "Petroleum Engineer",
      education: "B.S. Petroleum Engineering, Montana Tech",
      tags: ["Reservoir Evaluation", "Economics", "Well Design", "Asset Development"],
      bio: "Professionally licensed in multiple states, Lewis has more than 18 years of experience in asset development including reservoir simulation, drilling, and production operations.",
      personal: "His passion lies in developing unique and creative methods to maximize results."
    },
    {
      name: "Lee Shafer, B.S., P.E.",
      role: "Process Engineer",
      education: "B.S. Petroleum Engineering",
      tags: ["Water Recycling", "Uranium Mining", "Patents", "Process Engineering"],
      bio: "Lee has over 40 years of experience in the petroleum and uranium industries. His work in Wyoming yielded 7 patents for oil field water recycling.",
      personal: "Lee and his wife currently enjoy the company of 2 grandchildren in Wyoming."
    },
    {
      name: "Aaron Payne, M.S., P.G.",
      role: "Senior Hydrogeologist",
      education: "B.A. Geology (Bowdoin), M.S. Geology (U. Wyoming)",
      tags: ["Hydrogeology", "Groundwater Simulation", "Class III", "Class I"],
      bio: "Aaron specializes in characterizing formations, permitting wells, and conducting reservoir simulation studies. He uses numerical groundwater models for ISR uranium support.",
      personal: "In his spare time, he enjoys skiing, cycling, and camping with his wife and two sons."
    },
    {
      name: "Adam Simonsen, M.S.",
      role: "Geologist",
      education: "B.S. & M.S. Geology, Colorado School of Mines",
      tags: ["Well Log Analysis", "Petrophysics", "Class VI", "Stratigraphy"],
      bio: "Adam is skilled in petrophysics and reservoir characterization. At Petrotek, he applies these skills to the permitting of Class I, II, and VI injection wells.",
      personal: ""
    },
    {
      name: "Anthony Pennino, B.S.",
      role: "Regulatory & Permitting Specialist",
      education: "B.S. Chemistry",
      tags: ["CCUS", "Natural Resources", "Permitting", "Alaska"],
      bio: "Anthony has almost twenty years of experience providing regulatory support for major projects. He supports CCUS permitting and Class I installation in Alaska and the lower 48.",
      personal: ""
    },
    {
      name: "Cameron Kerr, B.S.",
      role: "Project Engineer",
      education: "B.S. Petroleum Engineering, Colorado School of Mines",
      tags: ["Production", "Completions", "Workover Support", "Anadarko Basin"],
      bio: "Cameron's work focuses on new Class I permit applications, workover support, and analysis of annual MIT activities for client regulatory submissions.",
      personal: "Cameron was a four-year member of the University of Denver Lacrosse Team."
    },
    {
      name: "Charles Wilson, B.S.",
      role: "Petroleum Engineer",
      education: "B.S. Petroleum Engineering, University of Wyoming",
      tags: ["Drilling", "Field Operations", "Class VI", "Well Planning"],
      bio: "Chuck has forty years of experience. He has drilled more than 2,000 wells internationally and provides support for specialized test well design and drilling.",
      personal: ""
    },
    {
      name: "David Huffington, M.S., P.G.",
      role: "Senior Geologist",
      education: "M.S. Reservoir Systems, Colorado School of Mines",
      tags: ["Wireline", "MIT", "Geologic Testimony", "Cased Hole Logs"],
      bio: "David's work focuses on feasibility studies, MIT interpretation, and geologic testimony. He previously worked for Halliburton as a wireline field engineer.",
      personal: "David is a member of the Society of Petrophysicists and Well Log Analysts."
    },
    {
      name: "James Klutho, B.S., P.E.",
      role: "Senior Reservoir Engineer",
      education: "B.S. Geological Engineering, Missouri S&T",
      tags: ["A&D", "Economic Evaluation", "DSU Reserves", "Aries/Mosaic"],
      bio: "Jim has over 40 years of experience in reservoir engineering and property acquisitions. He is an expert on Aries and Mosaic economic evaluation packages.",
      personal: "Jim has interests in woodworking, computer programming, and music, especially guitar and piano."
    },
    {
      name: "Jeremiah Demuth, A.A., STS",
      role: "HSE Officer & Engineering Technician",
      education: "A.A. Red Rocks Community College",
      tags: ["HSE", "Safety Officer", "Site Supervision", "HAZWOPER"],
      bio: "Jeremiah serves as the corporate health and safety officer. He supervises permitting and drilling operations and holds OSHA 30-hour and HAZWOPER certifications.",
      personal: "In his spare time, he enjoys writing, hunting, and martial arts."
    },
    {
      name: "Matthew Bourdon, M.S.",
      role: "Project Geologist",
      education: "M.S. Geology, M.S. Geospatial Technologies",
      tags: ["GIS", "Geological Research", "Log Correlation", "Mapping"],
      bio: "Matthew assists with GIS mapping and building Petrotek's geological reference database. He holds dual graduate degrees in geology and geospatial tech.",
      personal: "Matthew enjoys hiking, fishing, and traveling with his family."
    },
    {
      name: "Will Kinsey, B.S.",
      role: "GIS Analyst",
      education: "B.S. Geography, Slippery Rock University",
      tags: ["GIS", "Spatial Analysis", "UIC Permits", "Cartography"],
      bio: "William provides mapping support utilizing GIS and cartography. He has assisted with the delivery of numerous injection well feasibility studies and permit applications.",
      personal: "William and his wife enjoy hiking and traveling."
    },
    {
      name: "Connor Maxwell, B.S.",
      role: "GIS Analyst",
      education: "B.S. Geography, Slippery Rock University",
      tags: ["GIS", "Cartography", "Spatial Analysis", "Sound Design"],
      bio: "Connor joined Petrotek as a GIS Analyst to support the execution of injection well projects. He uses GIS for spatial analysis and detailed mapping deliverables.",
      personal: "In his free time, he enjoys electronic sound design and snowboarding."
    }
  ];

  const filteredTeam = teamData.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Navigation */}
        <Link to="/" className="flex items-center text-[#8B1E3F] font-bold mb-8 hover:underline group w-fit">
          <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        {/* Header Section */}
        <div className="mb-16">
          <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
            <Users className="w-10 h-10" style={{ color: maroon }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Meet Our Professionals</h1>
          <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
            Our team consists of dedicated professionals with relevant project experience related to the subsurface injection of wastewater, <span className="text-[#8B1E3F] font-bold">CO2</span>, and fluids for mining operations.
          </p>
          <div className="w-24 h-1 mt-8" style={{ backgroundColor: maroon }}></div>
        </div>

        {/* Search & Filter */}
        <div className="sticky top-24 z-30 bg-white/80 backdrop-blur-md py-4 mb-12 border-b border-gray-100">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by name, state, or expertise (e.g. 'Class VI', 'GIS')..."
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8B1E3F] outline-none transition-all shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Professional Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeam.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col border-t-4"
              style={{ borderTopColor: idx < 3 ? maroon : 'transparent' }}
              onClick={() => setSelectedMember(member)}
            >
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8B1E3F] transition-colors mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-[#8B1E3F] mb-4 uppercase tracking-wider">{member.role}</p>
                
                <div className="flex items-center text-[11px] text-gray-500 mb-6 font-medium">
                  <GraduationCap className="w-3.5 h-3.5 mr-2 shrink-0 text-gray-400" />
                  {member.education}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-gray-50 text-gray-500 text-[10px] font-bold rounded border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center text-[10px] font-bold text-[#8B1E3F] uppercase tracking-[0.2em] pt-4 border-t border-gray-50 mt-auto">
                Read Professional Bio <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bio Modal Overlay */}
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity">
            <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="p-8 md:p-12 relative max-h-[90vh] overflow-y-auto">
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>

                <div className="mb-8 border-b border-gray-100 pb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedMember.name}</h2>
                  <p className="text-xl text-[#8B1E3F] font-bold">{selectedMember.role}</p>
                  <div className="flex items-center mt-4 text-gray-500 font-medium">
                    <GraduationCap className="w-5 h-5 mr-3 text-[#8B1E3F]" />
                    {selectedMember.education}
                  </div>
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>{selectedMember.bio}</p>
                  
                  {selectedMember.personal && (
                    <div className="bg-gray-50 p-6 rounded-2xl border-l-8" style={{ borderColor: maroon }}>
                      <p className="text-base italic m-0 text-gray-700">"{selectedMember.personal}"</p>
                    </div>
                  )}

                  <div className="pt-6">
                    <p className="font-bold text-gray-900 mb-3 flex items-center text-sm uppercase tracking-widest">
                      <Scale className="w-4 h-4 mr-2" /> Key Expertise & Basins
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 p-12 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Technical Leadership</h3>
            <p className="text-gray-600">Our professionals hold degrees in Petroleum, Geological, Chemical Engineering, and Geoscience.</p>
          </div>
          <Link 
            to="/" 
            onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
            className="px-8 py-4 bg-[#8B1E3F] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg shrink-0"
          >
            Contact a Specialist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;