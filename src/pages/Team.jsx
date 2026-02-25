import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  GraduationCap, 
  X,
  ChevronRight,
  Scale
} from 'lucide-react';

const OurTeam = () => {
  const maroon = "#8B1E3F";
  // Logic: searchTerm state has been removed
  const [selectedMember, setSelectedMember] = useState(null);

  const teamData = [
    {
      name: "Wes Janes, B.S., P.G.",
      role: "Managing Principal / Field Operations Manager",
      education: "B.S. Geology, University of South Alabama",
      tags: ["Geology", "Field Operations", "Wellsite Supervision", "Texas", "Wyoming"],
      bio: "Wes is one of the managing principals of Petrotek and serves as the Field Operations Manager. He holds a B.S. degree in Geology from the University of South Alabama. Wes has more than 21 years of experience with wellsite field work and the application of geology to permitting for all classes of well projects. He also has experience supervising well drilling, completion, testing and stimulation work throughout the country and conducting aquifer testing for site characterization of ISR uranium operations in Texas and Wyoming. Wes has been actively involved in the permitting, design, installation, reservoir fluid sampling, testing, and remediation of disposal wells across the country. Wes is an active member of the Rocky Mountain Association of Geologists, the Society of Petroleum Engineers, the American Association of Petroleum Geologists, and is a Licensed Professional Geologist in Wyoming, Indiana, Kansas, Nebraska, Texas, Louisiana, Illinois, Florida, and Utah.",
      personal: "Wes and his family reside in the foothills west of Denver. In his spare time, he enjoys hunting, skiing, hiking, and camping with his wife and three daughters."
    },
    {
      name: "Hal Demuth, M.S.",
      role: "Managing Principal / Senior Engineer & Hydrogeologist",
      education: "B.S. Petroleum Engineering, M.S. Hydrogeology",
      tags: ["Hydrogeology", "Petroleum Engineering", "ISR Uranium", "Expert Witness"],
      bio: "Hal is one of the managing principals of Petrotek and is a Senior Engineer and Hydrogeologist. He has more than 35 years of applied industry experience, and holds a B.S. degree in Petroleum Engineering and an M.S. degree in Hydrogeology. He is passionate about the application of creative technical and regulatory solutions to assist clients with complex projects. He is a Technical Team Leader for produced water and wastewater management via Class I, Class II and Class V injection wells for oil and gas production across the United States. His drilling and completions experience includes vertical, directional and horizontal wells in the Gulf of Mexico, Alaska, and the continental U.S. Hal leads the technical team for ISR uranium Class III permitting and operations support for projects in Wyoming, Texas, Nebraska and South Dakota. His ISR uranium experience includes the majority of projects in the US as well as selected projects overseas. His team has also completed groundwater characterization and assessment projects for conventional hard rock mines (silver, lead/zinc, copper) and rare earth element mining projects in the U.S. Hal has provided expert witness testimony for oil and gas operators and ISR uranium operations related to technical, regulatory and contractual issues in Federal and State Courts.",
      personal: "Hal is the proud husband of Monette and father of 11 children. He and his family reside in the foothills west of Denver. In his spare time, he enjoys hiking, hunting and skiing."
    },
    {
      name: "Ken Cooper, M.S., P.E.",
      role: "Managing Principal / Director of Engineering",
      education: "B.S. & M.S. Petroleum Engineering, Montana Tech",
      tags: ["Engineering", "Reservoir Simulation", "Well Feasibility", "Expert Witness"],
      bio: "Ken Cooper is one of the managing principals of Petrotek and serves as the Director of Engineering. Prior to helping found Petrotek in 1993, he gained engineering experience working in the petroleum industry and for petroleum/uranium/injection well consultancies. Ken has more than 35 years of experience working with all classes of injection wells and specializes in investigating well feasibility, reservoir issues and testing, reservoir simulation, well compliance and permitting, along with optimizing injection well operation and maintenance. Ken has published and given a variety of talks and short-courses regarding subsurface injection, pressure transient well testing, and the simulation of subsurface fluid flow over the years, and provides expert witness testimony regarding well permitting, subsurface resources and injection wells. He is a board member of the GWREF and UITC, and has been an active member of both the GWPC (formerly the UIPC) and the Society of Petroleum Engineers (SPE) since the 1980s.",
      personal: "Outside of work, Ken likes spending time with his wife, hiking, four-wheeling, an occasional good craft beer, and traveling. He hopes one day to have visited all seven continents."
    },
    {
      name: "David Huffington, M.S., P.G.",
      role: "Principal, Managing Geologist",
      education: "M.S. Reservoir Systems, Colorado School of Mines",
      tags: ["Wireline", "MIT", "Geologic Testimony", "Cased Hole Logs"],
      bio: "David is a Senior Geologist at Petrotek Corporation with more than ten years of industry experience. He holds Professional Geology licenses in multiple states. His work primarily focuses on injection well feasibility studies, new Class I, Class II, and Class VI permits, Class I permit renewals, land ban petition exemption renewals, mechanical integrity testing, drilling, and geologic testimony. David has designed, supervised, and interpreted many different types of mechanical integrity tests in a wide variety of well circumstances. Prior to Petrotek, David worked for Halliburton as a wireline field engineer, running a variety of cased hole logs including pulse neutron, cement evaluation, flow profiles, perforating, and casing cuts. David Has a Bachelor of Science in Geophysical Engineering and a Master’s degree in Petroleum Reservoir Systems from the Colorado School of Mines.",
      personal: "David is a member of the Society of Petrophysicists and Well Log Analysts, Rocky Mountain Association of Geologists, and the Denver Well Logging Society."
    },
    {
      name: "Ken Schlieper, B.S.",
      role: "Lead Technical Contributor",
      education: "B.S. Environmental Studies, Slippery Rock University",
      tags: ["CERCLA", "RCRA", "Hydrogeologic Characterization", "Class I"],
      bio: "Ken has extensive multi-disciplinary skills gained through more than 31 years of field and project management experience in hydrogeologic characterization at numerous CERCLA, RCRA, and other regulated sites throughout the U.S. He has performed numerous aquifer tests for uranium ISR operations throughout the country. More recently, he has been a lead technical contributor to numerous Class I hazardous and nonhazardous injection well projects across the country related to permitting, supervision of workovers, stimulations, drilling operations, and mechanical integrity testing.",
      personal: "In his spare time, Ken enjoys photography and spending time with his family on the ski slopes or in the backcountry."
    },
    {
      name: "Brian Ault, B.S.",
      role: "Senior Technical & Project Manager",
      education: "B.S. Petroleum Engineering, Marietta College",
      tags: ["Project Management", "Well Completions", "Production", "San Juan Basin"],
      bio: "Brian began his career in the oilfield service industry spending five years working for The Western Company of North America. He then spent five years working for Meridian Oil/Burlington Resources in the San Juan Basin. After more than eight years with Ultra Petroleum; working in permitting, reservoir evaluation, drilling, completions, production and regulatory reporting; helping to guide them to over seven billion dollars of market capitalization, he joined Petrotek. Brian gained extensive experience primarily in the areas of well completions and production. Brian’s expertise relates to his vast experience across many disciplines within the oil and gas arena, but primarily in his ability to deliver projects safely, on schedule, on budget, and aligned with business goals.",
      personal: "Brian enjoys spending time with his five kids and crawling over the rocks around Moab, Utah in his Jeep."
    },
    {
      name: "Tyler Burton, PhD",
      role: "Class VI & Sustainability Advisor",
      education: "PhD Law (CEPMLP), M.S. Economics (Oxford)",
      tags: ["Class VI", "Carbon Capture", "Regulatory Law", "Sustainability"],
      bio: "Dr. Burton has degrees in Petroleum Engineering from the University of Alaska, a graduate degree in economics from the University of Oxford, and graduate degrees in law from the CEPMLP where he continued as a Research Fellow with concentration on corporate & regulatory climate law, policy, & economics. With Petrotek, Tyler assists with Class VI permit applications, advises on carbon capture and storage markets including market credits, offsets valuation, and financial incentives. He is an FSA credentialed Sustainability Accounting Professional at the Sustainability Accounting Standards Board.",
      personal: ""
    },
    {
      name: "Lewis Wandke, B.S., P.E.",
      role: "Petroleum Engineer",
      education: "B.S. Petroleum Engineering, Montana Tech",
      tags: ["Reservoir Evaluation", "Economics", "Well Design", "Asset Development"],
      bio: "Professionally licensed in multiple states, Lewis has more than 18 years of progressive experience in many aspects of asset development including reservoir evaluation, reservoir simulation, economics, drilling, and production operations. During his time at Petrotek, he has been involved with numerous injection projects, incorporating both well design and performance forecasting into successful projects for clients. Lewis is also closely engaged in engineering support related to permitting and development in a variety of basins.",
      personal: "His passion lies in developing unique and creative methods to maximize results."
    },
    {
      name: "Lee Shafer, B.S., P.E.",
      role: "Process Engineer",
      education: "B.S. Petroleum Engineering",
      tags: ["Water Recycling", "Uranium Mining", "Patents", "Process Engineering"],
      bio: "Lee has over 40 years of process engineering experience in the petroleum and uranium industries. Lee’s experience includes uranium solution mining, coal bed methane water treatment, fracturing fluid optimization, and oil field water recycling for fracturing. The oil field water recycling includes projects in Wyoming, Utah, Oklahoma, and Texas; the work in Wyoming yielded 7 patents for his clients. Lee is also experienced in oil field production operations and well completions. Lee is a member of the Society of Petroleum Engineers and the American Institute of Chemical Engineers.",
      personal: "Lee and his wife have been blessed to raise 6 children in Wyoming where they currently enjoy the company of 2 grandchildren."
    },
    {
      name: "Aaron Payne, M.S., P.G.",
      role: "Senior Hydrogeologist",
      education: "B.A. Geology (Bowdoin), M.S. Geology (U. Wyoming)",
      tags: ["Hydrogeology", "Groundwater Simulation", "Class III", "Class I"],
      bio: "Aaron specializes in characterizing formations and resources, investigating feasibility, permitting wells, and conducting reservoir/groundwater simulation studies. He uses numerical groundwater models in support of hydrologic characterization and assessment, particularly related to Class III ISR uranium permitting and operations support. Aaron has extensive experience related to the feasibility, permitting, and technical support to regulatory agencies related to Class I UIC disposal wells. He has also provided geologic support related to oil and gas permitting and development in Wyoming, as well as providing expert witness testimony related to these operations.",
      personal: "In his spare time, he enjoys skiing, cycling, and camping with his wife and two sons."
    },
    {
      name: "Adam Simonsen, M.S.",
      role: "Geologist",
      education: "B.S. & M.S. Geology, Colorado School of Mines",
      tags: ["Well Log Analysis", "Petrophysics", "Class VI", "Stratigraphy"],
      bio: "Adam has B.S. and M.S. degrees in geology from Western Colorado University and the Colorado School of Mines. He is skilled with the use of a variety of software to conduct well log analysis to determine reservoir properties using petrophysics and to characterize reservoirs by generating correlations, maps and stratigraphic frameworks of geologic systems. At Petrotek, Adam is applying his skills to characterize reservoirs for the permitting of Class I, Class II and Class VI injection wells.",
      personal: "Adam is an active member of AAPG and RMAG."
    },
    {
      name: "Anthony Pennino, B.S.",
      role: "Regulatory & Permitting Specialist",
      education: "B.S. Chemistry",
      tags: ["CCUS", "Natural Resources", "Permitting", "Alaska"],
      bio: "Anthony has almost twenty years of experience providing regulatory and permitting support for major projects associated with natural resources development. Since obtaining a degree in chemistry he has worked for several large multinational producers and provided consulting services to a variety of clients. His experience includes planning and acquiring local, state and federal permits required for a variety of project types. At Petrotek, Anthony is supporting CCUS permitting and Class I injection well installation in Alaska and the lower 48.",
      personal: ""
    },
    {
      name: "Cameron Kerr, B.S.",
      role: "Project Engineer",
      education: "B.S. Petroleum Engineering, Colorado School of Mines",
      tags: ["Production", "Completions", "Workover Support", "Basin Analysis"],
      bio: "Following graduation from Mines, Cameron spent time in the oil and gas space as a Production Engineer, Field Frac Engineer, and Completions Engineer. At Petrotek, his work focuses on new Class I permit applications, injection well workover support, and the analysis of annual mechanical integrity and reservoir testing activities for client submissions to regulatory agencies. Cameron has experience in multiple basins including the Western Anadarko Basin, DJ Basin, Powder River Basin, and Permian Basin.",
      personal: "Cameron attended the University of Denver and graduated with a degree in Finance and was a four-year member of the Lacrosse Team."
    },
    {
      name: "Charles Wilson, B.S.",
      role: "Petroleum Engineer",
      education: "B.S. Petroleum Engineering, University of Wyoming",
      tags: ["Drilling", "Field Operations", "Class VI", "Well Planning"],
      bio: "Chuck has forty years of petroleum engineering experience that varies from drilling and field operations to the management of technical teams for upstream E&P operations. Chuck has drilled more than 2,000 wells in many different basins in the U.S. and internationally. At Petrotek, Chuck provides field and engineering support for Class I industrial, Class VI CCUS, and specialized test well design, well planning, and supervision of field drilling operations.",
      personal: ""
    },
    {
      name: "James Klutho, B.S., P.E.",
      role: "Senior Reservoir Engineer",
      education: "B.S. Geological Engineering, Missouri S&T",
      tags: ["A&D", "Economic Evaluation", "DSU Reserves", "Aries/Mosaic"],
      bio: "Jim has over 40 years of experience in reservoir engineering, production engineering, property acquisitions and operations. He is an expert on the Aries and Mosaic economic evaluation packages and has extensive experience with property evaluations for A&D. Jim is an integral part of the DSU reserve evaluation and EUR team at Petrotek, providing engineering analyses and testimony support documents for DSU permitting. He has worked as lead evaluator of major acquisitions and reserves process.",
      personal: "Jim lives in Centennial, Colorado and has interests in woodworking, computer programming and music, especially the guitar and piano."
    },
    {
      name: "Jeremiah Demuth, A.A., STS",
      role: "HSE Officer & Engineering Technician",
      education: "A.A. Red Rocks Community College",
      tags: ["HSE", "Safety Officer", "Site Supervision", "HAZWOPER"],
      bio: "Jeremiah has supervised permitting and drilling operations for multiple Class II wells in the DJ Basin. He works with industrial, ISR, and oil and gas clients to provide site supervision for drilling and workover operations, as well as site safety and annual mechanical integrity testing. Jeremiah also serves as the corporate health and safety officer for Petrotek and has specific training in the OHSA 1910 standards, Lockout/tagout, and maintains HAZWOPER certification.",
      personal: "In his spare time, he enjoys writing, hunting, and martial arts."
    },
    {
      name: "Matthew Bourdon, M.S.",
      role: "Project Geologist",
      education: "M.S. Geology & Geospatial Technologies",
      tags: ["GIS", "Geological Research", "Log Correlation", "Mapping"],
      bio: "Matthew holds dual graduate degrees in geology and geospatial tech. He has been using his skills in geological writing and research to help complete Class I-VI well permits and build the company’s geological reference database. Matthew assists with GIS mapping projects and has technical knowledge in wireline logging operations, log interpretation, environmental permitting, and stratigraphic characterization.",
      personal: "In his spare time, Matthew enjoys hiking, fishing, camping, and traveling with his family."
    },
    {
      name: "Will Kinsey, B.S.",
      role: "GIS Analyst",
      education: "B.S. Geography, Slippery Rock University",
      tags: ["GIS", "Spatial Analysis", "UIC Permits", "Cartography"],
      bio: "William provides mapping support through his experience utilizing Geographic Information Systems (GIS), spatial analysis, and cartography. During his time at Petrotek, he has assisted with the successful delivery of numerous injection well projects including feasibility studies, UIC Class I and Class II injection well permit applications, and permit renewal applications.",
      personal: "William is a member of GIS Colorado. He and his wife enjoy hiking and traveling."
    },
    {
      name: "Connor Maxwell, B.S.",
      role: "GIS Analyst",
      education: "B.S. Geography, Slippery Rock University",
      tags: ["GIS", "Spatial Analysis", "UIC Permits", "Cartography"],
      bio: "Connor joined Petrotek as a GIS Analyst to support the execution of injection well projects, ranging from feasibility studies to permit renewals. He uses his background in GIS for spatial analysis and to generate detailed mapping deliverables. Connor is a member of the North American Cartographic Information Society (NACIS).",
      personal: "In his free time, he enjoys electronic sound design and snowboarding."
    }
];

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
            Our team consists of dedicated professionals with relevant project experience related to the subsurface injection of wastewater, CO2, and fluids for mining operations.
          </p>
          <div className="w-24 h-1 mt-8" style={{ backgroundColor: maroon }}></div>
        </div>

        {/* Professional Grid - Now uses teamData directly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col border-t-4"
              style={{ borderTopColor: idx < 4 ? maroon : 'transparent' }}
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