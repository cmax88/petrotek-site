// src/pages/Publications.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FileText, 
  Search, 
  Download, 
  Calendar, 
  User, 
  Filter,
  Mail,
  ChevronRight,
  ArrowUp
} from 'lucide-react';

const Publications = () => {
  const maroon = "#8B1E3F";
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for "Back to Top" button
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pubData = [
    { title: "Class I Injection Well Overview: Feasibility, Permitting & Installation", authors: "Janes, W.", citation: "presented at the 2024 ESD/MWRA 33rd Annual Solid Waste Technical Conference, March 6, 2024; East Lansing, Michigan.", year: 2024, category: "Class I" },
    { title: "Technical Considerations for CO2 Injection", authors: "Wandke, L.", citation: "presented at the 2024 Ground Water Protection Council UIC Conference, February 28, 2024; Oklahoma City, Oklahoma.", year: 2024, category: "CCUS" },
    { title: "Can Financial Assurance Become a Class VI Fatal Flaw?", authors: "Burton, T.", citation: "presented at the 2024 Ground Water Protection Council UIC Conference, February 28, 2024; Oklahoma City, Oklahoma.", year: 2024, category: "CCUS" },
    { title: "Injection Well Seminar: How Injection Technology Works and is the Basis for Regulation", authors: "Cooper, K.J.", citation: "invited Half-Day Short Course for regulators and operators presented at the 2024 Ground Water Protection Council UIC Conference, February 26, 2024; Oklahoma City, Oklahoma.", year: 2024, category: "Regulatory" },
    { title: "Practical Lessons Learned About Risk and Approach for Class VI Permitting", authors: "Cooper, K.J., Burton, T.", citation: "invited presentation to the Alaska Statewide CCUS Workgroup, January 31, 2024; Anchorage, Alaska.", year: 2024, category: "CCUS" },
    { title: "Carbon Capture and Storage: Technology, Permitting, Opportunities and Challenges", authors: "Demuth, H.", citation: "presented at the Texas Aggregates and Concrete Association Meeting, October 19, 2023; Dallas, Texas.", year: 2023, category: "CCUS" },
    { title: "Carbon Capture & Sequestration", authors: "Burton, T, Demuth, H.", citation: "invited presentation to the Alaska Statewide CCUS Workgroup, February 1, 2023; Anchorage, Alaska.", year: 2023, category: "CCUS" },
    { title: "Determining the Area Of Review (AOR) for Class I Injection Wells", authors: "Wandke, L.", citation: "presented at the 2021 Kansas Department of Health and Environment Geology and Well Technology Fall Virtual Seminar, September 14, 2021; Wichita, Kansas.", year: 2021, category: "Class I" },
    { title: "Horizontal Injection Considerations: Pressure Rise and Area of Review", authors: "Wandke, L. and Cooper, K.J.", citation: "presented at the 2020 Ground Water Protection Council Annual Virtual Forum, September 29, 2020.", year: 2020, category: "Engineering" },
    { title: "Health and Safety Considerations for Workover Operations on Class I Wells", authors: "Demuth, J.D.", citation: "presented at the Kansas Department of Health and Environment Geology and Well Technology Unit Fall 2020 Virtual Seminar.", year: 2020, category: "Safety" },
    { title: "Injection Well Seminar: The Basics of Reservoir Engineering as it Applies to Cone-of-Influence, Well Siting, and Injection Interval Formation Evaluation", authors: "Cooper, K.J.", citation: "invited Half-Day Short Course presented at the 2020 GWPC Annual UIC Conference, February 18, 2020; San Antonio, Texas.", year: 2020, category: "Regulatory" },
    { title: "Injection Well Seminar: Operations and Regulation with Understanding", authors: "Cooper, K.J.", citation: "invited Half-Day Short Course presented at the 2019 GWPC Annual UIC Conference, February 27, 2019; Fort Worth, Texas.", year: 2019, category: "Regulatory" },
    { title: "Technical Factors Involved with the Demonstration of No-Migration to Support Land Ban Exemption Petitions", authors: "Payne, A. and Cooper, K.J.", citation: "at the 2018 Ground Water Protection Council Annual Forum, September 11, 2018; New Orleans, Louisiana.", year: 2018, category: "Class I" },
    { title: "Injection Well Seminar: Operations and Regulation with Understanding", authors: "Cooper, K.J.", citation: "invited Full-Day Short Course at the 2018 GWPC Annual Forum, September 10, 2018; New Orleans, Louisiana.", year: 2018, category: "Regulatory" },
    { title: "How Several Factors Influence Well Performance, Testing and Permitting: Density, Temperature and Friction", authors: "Cooper, K.J., Wandke, L. and Pitts, R.", citation: "at the 2018 GWPC Annual UIC Conference, February 12, 2018; Tulsa, Oklahoma.", year: 2018, category: "Engineering" },
    { title: "The Calculation of Injection Effects to Establish the Area of Review (AOR) for Class I Injection Wells", authors: "Payne, A. and Cooper, K.J.", citation: "at the 2018 GWPC Annual UIC Conference, February 12, 2018; Tulsa, Oklahoma.", year: 2018, category: "Class I" },
    { title: "An Introduction to Mechanical Integrity Testing with a Focus on Class I Injection Wells in Kansas", authors: "Cooper, K.J., Wandke, L. and Janes, W.", citation: "invited presentation at the 2017 KDHE Seminar, August 30, 2017; Wichita, Kansas.", year: 2017, category: "Engineering" },
    { title: "Deep Disposal Well Applications for Uranium Operations", authors: "Demuth, H.P. and Janes, W.", citation: "at the U2017 Global Uranium Symposium, August 23, 2017; Casper, Wyoming.", year: 2017, category: "Uranium" },
    { title: "Review of the Aquifer Exemption Process, History and Implementation Related to Groundwater Protection and Use", authors: "Demuth, H.P. and Van Voorhees, R.", citation: "at the National Ground Water Association Deep Groundwater Conference, March 2017; Denver, Colorado.", year: 2017, category: "Uranium" },
    { title: "Review of the Aquifer Exemption Process, History and Implementation Related to Groundwater Protection and Use", authors: "Demuth, H.P., Cooper, K.J.", citation: "at the GWPC Annual UIC Conference, February 25, 2017; Austin, Texas.", year: 2017, category: "Uranium" },
    { title: "An Update on Risk-Informed, Performance Based Licensing of Source Materials: How Are We doing?", authors: "Viellenave, J.H.", citation: "National Mining Association Uranium Recovery Workshop, June 7, 2016; Denver, Colorado.", year: 2016, category: "Uranium" },
    { title: "Is There Really A Problem? A Review of Historical Aquifer Exemptions", authors: "Demuth, H.P.", citation: "at the National Mining Association Uranium Recovery Workshop, June 7, 2016, Denver, Colorado.", year: 2016, category: "Uranium" },
    { title: "An Introduction to Pressure Transient Testing of Injection Wells and Use for UIC Permit and Landban Petition Compliance", authors: "Cooper, K.J., Wandke, L. and Payne, A.", citation: "presented at the 2017 GWPC Annual UIC Conference, February 25, 2016; Austin, Texas.", year: 2016, category: "Engineering" },
    { title: "The Relative Importance of Critical Technical and Regulatory Factors that Define Injection Well Feasibility: Pressure Matters", authors: "Cooper, K.J., Payne, A. and Janes, W.", citation: "presented at the 2016 GWPC Annual UIC Conference, February 25, 2016; Denver, Colorado.", year: 2016, category: "Engineering" },
    { title: "Application and Analysis of Step-Rate Testing to Determine Fracture Pressure in Injection Wells", authors: "Wandke, L. and Cooper, K.J.", citation: "presented at the 2016 GWPC Annual UIC Meeting, February 25, 2016; Denver, Colorado.", year: 2016, category: "Engineering" },
    { title: "Aquifer Exemptions: A Beneficial Process for Industrial Development and Source Water Protection", authors: "Demuth, H.P.", citation: "at the National Mining Association Uranium Recovery Workshop, June 2015; Denver, Colorado.", year: 2015, category: "Uranium" },
    { title: "Groundwater Characterization Lodge Rare Earth Element Project Wyoming", authors: "Lawrence, E.P. and Payne, A.", citation: "presentation at the Western South Dakota Hydrology Conference, April 2014; Rapid City, South Dakota.", year: 2014, category: "Mining" },
    { title: "Wastewater Management at a Proposed Uranium In-situ Recover Project", authors: "Fritz, J., Mays, J., and Demuth, H.P.", citation: "at the Western South Dakota Hydrology Conference, April 2014; Rapid City, South Dakota.", year: 2014, category: "Uranium" },
    { title: "Groundwater Modeling of the Hydraulic Effects of the Proposed Dewey Burdock Uranium In-situ Recovery Project", authors: "Lawrence, E.P., Demuth, H.P., and Mays, J.", citation: "presentation at the Western South Dakota Hydrology Conference, April 2014; Rapid City, South Dakota.", year: 2014, category: "Uranium" },
    { title: "Innovations in In Situ (ISR) Uranium Development", authors: "Viellenave, J.H. and L. Huffman", citation: "Annual Meeting of the Society of Mining Engineers, February 26, 2014; Salt lake City, Utah.", year: 2014, category: "Uranium" },
    { title: "Critical Issues for the Deep Well Injection of ISR Uranium Waste Water", authors: "Cooper, K.J., Demuth, H.P. and Payne, A.", citation: "presented at the U2011 Global Uranium Symposium, September 21, 2011; Casper, Wyoming.", year: 2011, category: "Uranium" },
    { title: "A Method for Calculating An Aquifer Exemption Boundary for Uranium Insitu Recovery Projects", authors: "Lawrence, E.P., Cooper, K.J., and Demuth, H.P.", citation: "presented at the U2011 Global Uranium Symposium, September 21, 2011; Casper, Wyoming.", year: 2011, category: "Uranium" },
    { title: "Application of Numerical Groundwater Flow Models to Uranium ISR Projects", authors: "Lawrence, E.P., Demuth, H.P, and Cooper, K.J.", citation: "at the 2011 NRC/NMA Uranium Recovery Workshop, May 25, 2011; Denver, Colorado.", year: 2011, category: "Uranium" },
    { title: "Use of Hydrologic Tests and Numerical Models to Predict Hydraulic Behavior of an Unconfined Aquifer During Insitu Recovery of Uranium", authors: "Lawrence, E. P, Demuth, H.P, Cooper, K.J., and Wichers, D.", citation: "at the 2010 NGWA Summit, April 14, 2010; Denver, Colorado.", year: 2010, category: "Uranium" },
    { title: "Geologic Considerations for a Class I Disposal Well", authors: "Cooper, K.J. and Hansen, T.", citation: "presentation at the KDHE Geology Section 2009 Fall Seminar, September 2, 2009; Wichita, Kansas.", year: 2009, category: "Class I" },
    { title: "Class I Injection Well Use at ISR Facilities", authors: "Cooper, K.J. and Demuth, H.P.", citation: "at the 2009 NRC/NMA Uranium Recovery Workshop, July 2, 2009; Denver, Colorado.", year: 2009, category: "Uranium" },
    { title: "Groundwater Modeling Applications to Uranium ISR Projects: The Relationship of Sweep Efficiency to Pore Volume Removal", authors: "Lawrence, E.P., Cooper, K.J., and Demuth, H.P.", citation: "at the U2009 Global Uranium Symposium, May 13, 2009; Keystone, Colorado.", year: 2009, category: "Uranium" },
    { title: "Geochemistry of Uranium in In-situ Recovery Aquifers after Restoration", authors: "Schramke, J.A, Demuth, H.P. and Pelizza, M.S", citation: "Presented at the Global Uranium Symposium 2009, May 13, 2009; Keystone, Colorado.", year: 2009, category: "Uranium" },
    { title: "Wastewater Management via Deepwell Injection at ISR/ISL Facilities", authors: "Cooper, K.J., and Demuth, H.P.", citation: "at the 2009 SME Annual Meeting, February 25, 2009; Denver, Colorado.", year: 2009, category: "Uranium" },
    { title: "Groundwater Restoration Results and Long Term Protection of USDW’s: A Case Study of the Irigaray Uranium Project", authors: "Heili, W. and Lawrence E.P.", citation: "at the CSU Health Physics Uranium Symposium, February 2, 2008; Ft. Collins, Colorado.", year: 2008, category: "Uranium" },
    { title: "Overview of Operational Issues Associated with Groundwater, Restoration, and Wastewater Management at ISR/ISL Facilities", authors: "Cooper, K.J., Demuth, H.P., and Lawrence, E.P.", citation: "at the 2008 GWPC Winter UIC Meeting, January 15, 2008; New Orleans, Louisiana.", year: 2008, category: "Uranium" },
    { title: "Groundwater Modeling Supporting Aquifer Restoration at a Uranium ISR Facility, Wyoming", authors: "Lawrence, E. P., Wichers, D.", citation: "In Proceedings of the Global Uranium Symposium 2007, May 2007; Corpus Christi, Texas.", year: 2007, category: "Uranium" },
    { title: "Equipment and Strategies for Deep Well Monitoring", authors: "Cooper, K.J. and Davis, G.", citation: "at the 2001 GWPC Winter UIC Meeting, January 24, 2001; Houston, Texas.", year: 2001, category: "Engineering" },
    { title: "Identifying Compartmentalization in Gas Reservoirs", authors: "Junkin, J.E., Cooper, K.J., and Sippel, M.A.", citation: "World Oil, Gulf Publishing Company, January 1997, v. 218, Number 1, p. 37-44.", year: 1997, category: "Oil & Gas" },
    { title: "Pressure Transient Analysis Techniques Aid Secondary Recovery Method Choices", authors: "Junkin, J.E., Cooper, K.J. and Sippel, M.A.", citation: "Petroleum Engineer International, March 1996, v. 69, Number 2, p. 63-68.", year: 1996, category: "Oil & Gas" },
    { title: "Tools for Identification of Compartmentalization in Moderate-Permeability Gas Reservoirs", authors: "Junkin, J.E. and Cooper, K.J.", citation: "Technical Summary for GRI/DOE/BEG Report no. GRI-95/0104, 11 p., 1995.", year: 1995, category: "Oil & Gas" },
    { title: "Identification of Linear Flow Geometries and Implications for Natural Gas Reservoir Development", authors: "Junkin, J.E., Cooper, K.J. and Sippel, M.A.", citation: "Technical Summary for GRI/DOE/BEG Report no. GRI-95/0162, 11 p., 1995.", year: 1995, category: "Oil & Gas" },
    { title: "In-Situ Stress Measurement at Hazardous Disposal Well Sites: Field Application", authors: "Cooper, K.J. and Lyle, R.R.", citation: "published in the proceedings of the International Symposium at Lawrence Berkeley Laboratory, May 10 – 13, 1994.", year: 1994, category: "Engineering" },
    { title: "The Fate of Underground Injection", authors: "Cooper, K.J. and Lyle, R.R.", citation: "SPE 26385, presented at the 68th Annual Technical Conference of the SPE, October 3 – 6, 1993; Houston, Texas.", year: 1993, category: "Engineering" },
    { title: "Uniqueness of Reservoir Parameter Assignments Based on Interference Test Analysis", authors: "Cooper, K.J. and Collins, R.E.", citation: "presented at the AGU Spring Meeting, May 28 – 31, 1991; Baltimore, Maryland.", year: 1991, category: "Engineering" },
    { title: "Geohydrologic, Geochemical and Geologic Controls on the Occurrence of Radon in Ground Water near Conifer, Colorado", authors: "Lawrence, E. P., Poeter, E., and Wanty, R. B.", citation: "Journal of Hydrology, Vol. 127, 1991, pp. 367-386.", year: 1991, category: "Mining" },
    { title: "Applications of Transient Pressure Interference Tests to Fractured and Unfractured Injection Wells", authors: "Cooper, K.J. and Collins, R.E.", citation: "SPE 19785, presented at the 64th Annual Technical Conference of the SPE, October 8 – 11, 1989; San Antonio, Texas.", year: 1989, category: "Engineering" }
  ];

  const categories = ["All", "CCUS", "Class I", "Uranium", "Engineering", "Oil & Gas", "Mining", "Regulatory", "Safety"];

  const filteredPubs = pubData.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pub.authors.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || pub.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <Link to="/" className="flex items-center text-[#8B1E3F] font-bold mb-8 hover:underline group w-fit">
          <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="mb-12">
          <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
            <FileText className="w-10 h-10" style={{ color: maroon }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Technical Library</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-8">
            Decades of research and field-validated papers in subsurface fluid flow and injection technology.
          </p>
          <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300 w-full sm:w-fit">
            <Mail className="w-5 h-5 mr-3" style={{ color: maroon }} />
            <span className="text-sm font-medium text-gray-700">
              Please <Link to="/" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)} className="text-[#8B1E3F] font-bold hover:underline">contact us</Link> to request a copy of any publication.
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white sticky top-24 z-30 py-6 border-b border-gray-100 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search titles or authors..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8B1E3F] outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full lg:w-auto no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition-all ${
                    activeFilter === cat ? 'bg-[#8B1E3F] text-white' : 'bg-white text-gray-500 hover:border-[#8B1E3F]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
            Showing {filteredPubs.length} Publications
          </div>
        </div>

        {/* List */}
        <div className="space-y-6">
          {filteredPubs.map((pub, idx) => (
            <div key={idx} className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6">
              <div className="hidden md:flex flex-col items-center pt-1 w-16">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#8B1E3F] mb-2 group-hover:bg-[#8B1E3F] group-hover:text-white transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black text-gray-300 tracking-widest">{pub.year}</span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-0.5 bg-[#8B1E3F]/5 text-[#8B1E3F] text-[10px] font-black uppercase rounded">
                    {pub.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#8B1E3F]">
                  {pub.title}
                </h3>
                <div className="flex items-center text-sm font-bold text-gray-700 mb-4 italic">
                  <User className="w-4 h-4 mr-2 text-gray-400" /> {pub.authors}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed border-l-2 pl-4 border-gray-100">
                  {pub.citation}
                </p>
              </div>
              <div className="md:self-center">
                <button 
                  onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
                  className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 hover:text-[#8B1E3F]"
                >
                  Request <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {showBackToTop && (
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-4 bg-[#8B1E3F] text-white rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Publications;