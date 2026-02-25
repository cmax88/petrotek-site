// src/pages/InjectionWells.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Droplet, 
  ClipboardCheck, 
  Beaker, 
  Settings, 
  ShieldCheck, 
  CheckCircle2, 
  Info,
  ChevronRight,
  Plus,
  Minus,
  HelpCircle
} from 'lucide-react';

const InjectionWells = () => {
  const maroon = "#8B1E3F";
  
  // State for the first accordion (Technology)
  const [techOpenIndex, setTechOpenIndex] = useState(null);
  // State for the second accordion (FYI)
  const [fyiOpenIndex, setFyiOpenIndex] = useState(null);

  // Placeholder image URL - replace with your actual image later
  const injectionWellImage = "https://petrotek.com/wp-content/uploads/elementor/thumbs/Injection-Well-3D-qg3dwrpdvagdnjryarnr1gnw6cokhg4cmbgdmeshz4.png";

  const toggleTechAccordion = (index) => {
    setTechOpenIndex(techOpenIndex === index ? null : index);
  };

  const toggleFyiAccordion = (index) => {
    setFyiOpenIndex(fyiOpenIndex === index ? null : index);
  };

  const categories = [
    {
      title: "Permitting and Feasibility",
      icon: <ClipboardCheck className="w-6 h-6" style={{ color: maroon }} />,
      items: [
        "Permitting for all well classes (I, II, III, V, VI)",
        "Fluid flow and transport modeling",
        "Aquifer exemption applications",
        "Geologic and reservoir evaluation",
        "Land-ban disposal exemption petitions",
        "Litigation support & expert witness testimony",
        "Well design, installation, completion & testing"
      ]
    },
    {
      title: "Well Testing and Assessment",
      icon: <Beaker className="w-6 h-6" style={{ color: maroon }} />,
      items: [
        "Part I and Part II mechanical integrity testing",
        "Falloff/step-rate pressure transient testing",
        "Open and cased hole log evaluation",
        "Performance diagnostics",
        "Well feasibility and risk assessment"
      ]
    },
    {
      title: "Field Operations",
      icon: <Settings className="w-6 h-6" style={{ color: maroon }} />,
      items: [
        "Workovers, maintenance and repair",
        "Wellsite drilling and workover supervision",
        "Stimulation and completion optimization",
        "Wellsite project management",
        "Well closure (plugging and abandonment)"
      ]
    },
    {
      title: "Operations and Regulatory Support",
      icon: <ShieldCheck className="w-6 h-6" style={{ color: maroon }} />,
      items: [
        "Operations and compliance training",
        "State and Federal monitoring reports",
        "Compliance auditing and evaluation",
        "Contract injection operation"
      ]
    }
  ];

  const techAccordionData = [
    {
      question: "What injection streams are disposed in Class I injection wells?",
      content: (
        <>
          <p className="mb-4 text-gray-600 leading-relaxed">
            A wide variety of liquid wastes can be managed using deep injection well technology. Typically, these wastes are large water volume, low concentration waste streams that are aqueous and comprised of more than 95% water. Often these liquids have already been recycled or pre-treated and are not usable as a resource since they have little economic or energy value. Some common dilute wastes now managed via deep well disposal include:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <ul className="space-y-2">
              {["Salt Water Brines", "Dilute Hydrocarbons and Solvents", "Heavy Metal Solutions", "Agricultural Waste Waters", "Storm Water and Municipal Waste"].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-[#8B1E3F] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {["Meat & Crop Processing Liquids", "Inorganic Solutions from Manufacturing", "Industrial Cleaning Solutions", "Groundwater Clean-ups"].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-[#8B1E3F] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-600 italic border-l-4 border-[#8B1E3F] pl-4">
            For comparison, the concentrations of disposed materials in many of these injected wastes are similar to mixing a two-gallon can of a product like salt into a large tank of fresh water (2 gallons / 4000 gallons ~ 500 parts per million).
          </p>
        </>
      )
    },
    {
      question: "What industries use deep well disposal?",
      content: (
        <>
          <p className="mb-4 text-gray-600 leading-relaxed">
            A wide variety of domestic and foreign facilities now depend on deep injection wells for the safe disposal of liquid wastes. Some of the industries in the United States that use deep injection well technology include:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
             {[
               "Food Processors", "Chemical Plants", "Oil and Gas", "Pharmaceuticals",
               "Ethanol Plants", "Cosmetics", "Municipal Water Supply", "Mining",
               "Refineries", "Power Generation", "Heavy Manufacturing", "Waste Management",
               "Potable Water-treatment", "Food Production", "Steel Mills", "Clothing Manufacturing"
             ].map((industry, i) => (
               <div key={i} className="flex items-center text-sm font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                 <CheckCircle2 className="w-4 h-4 mr-2 text-[#8B1E3F] opacity-70" />
                 {industry}
               </div>
             ))}
          </div>
        </>
      )
    }
  ];

  const fyiAccordionData = [
    {
      question: "Where are disposal wells?",
      content: "Disposal, or injection wells, are used throughout the world. In the United States, disposal wells associated with oil and gas production are regulated as Class II wells while industrial injectors are regulated as Class I wells. In the oil and gas industry, disposal wells can be found in most areas where hydrocarbons are produced. Class I wells are used in areas where there is an industrial need and where both restrictive geologic and hydrologic standards can be met. A primary consideration in well location is the natural ability of underground formations to contain and isolate both natural and injected fluids. The geology in many areas of the United States where a thick section of sedimentary rock is present often meet these strict requirements. There are more than 400,000 disposal wells currently operating throughout the United States. Approximately 1,000 of these injectors are Class I wells."
    },
    {
      question: "Are disposal wells safe?",
      content: (
        <>
          <p className="mb-4">Class I industrial disposal wells are the safest, most effective way to manage many dilute liquid industrial wastes. Protection of drinking and irrigation water is the primary concern in the construction, operation and regulatory oversight of such wells. Deep well technology has been proven through wide use over more than 50 years. There has never been an instance of surface or drinking water contamination due to operation of a Class I disposal well that was sited, constructed and operated according to current US EPA standards.</p>
          <p className="mb-4">In the United States, Class I industrial deep wells are built to strict standards and operated under tight regulation and oversight. Class I wells have been used throughout the country during the past century to protect the environment from the surface disposal of industrial liquid wastes.</p>
          <p className="mb-4">Based on a number of academic studies and the collection of data from existing well sites, waste concentrations are reduced by natural processes in the disposal formation after injection. In addition to dilution by mixing with natural brines, neutralization, adsorption, precipitation, other reactions and microbial degradation occur in the injection zone. This serves as waste treatment underground.</p>
          <p className="mb-4">Disposal wells of various types are used in countries throughout the world to safely manage liquid waste by permanently isolating it from the environment. Environment Canada, the primary environmental regulatory agency in Canada, approves and permits disposal into deep wells in appropriate areas as a responsible option for the management of liquid wastes.</p>
          <p className="mb-4">The Kansas Department of Health and Environment says that “injection into a Class I well is considered an environmentally sound practice”. The state of Kansas has several hundred oil and gas disposal wells and almost 50 Class I industrial disposal wells.</p>
          <p className="mb-4">The Michigan Department of Natural Resources (MDNR) has documentation that no instances of contamination have occurred due to Class I well operation in the state. In addition, the Michigan Deep Well Injection Committee reported that “Most of Michigan has the subsurface geologic conditions required for proper waste disposal by deep well injection”.</p>
          <p>The largest concentration of disposal wells in the United States is in Texas (including almost 100 Class I wells). The Texas Commission on Environmental Quality that regulates these injection systems says that deep well injection has “an excellent record of environmental protection”.</p>
        </>
      )
    },
    {
      question: "Who regulates Class I, III, V and VI disposal wells?",
      content: (
        <>
          <p className="mb-4">Throughout the United States, the Environmental Protection Agency provides oversight and closely monitors deep well disposal operations under the Safe Drinking Water Act regulations. Laws, policies and regulations have matured over the past 100 years to enhance the safety of both non-hazardous and hazardous injection well operation. In many cases, state governments have been granted primary authority to conduct an Underground Injection Control (UIC) program. In others, the federal government directly implements the regulations. In all cases, strict standards are enforced by law to ensure that environmentally protective practices are followed. Geologic and engineering information is carefully evaluated and approved by regulators before deep well construction can begin and is reviewed after drilling has been completed, and before injection operations are authorized. Continuous protection of all usable groundwater is accomplished by rigid construction and monitoring requirements that provide at least four separate layers of protection. In addition to strict construction requirements, annual testing and limitation of waste type, disposal volume and injection well pressure are required to further promote protection of the subsurface environment. Detailed records of wastes disposed and all site operations must be submitted to the EPA or state regulators. Twenty-four-hour monitoring of operations is required to verify safe operation and permit compliance.</p>
          <p>
            You can learn more about Class I injection wells by visiting the EPA website at: <a href="https://www.epa.gov/uic" target="_blank" rel="noopener noreferrer" className="text-[#8B1E3F] hover:underline font-bold">https://www.epa.gov/uic</a>
          </p>
        </>
      )
    },
    {
      question: "What is the nature of the liquid in the injection zone?",
      content: "By almost any definition, the naturally occurring waters typically present in injection zones are highly saline and unfit for use. The salinity of the native brines is often several times the concentration of normal seawater. In fact, the natural waters often demonstrate many similarities to some of the wastes that are injected into the zones for disposal."
    },
    {
      question: "How do well operators prevent liquid backing up into the pipe and having nowhere to go?",
      content: "The pore space (void space inside the rock [picture a hard sponge]) in the formations at several thousand feet of depth in the vicinity of disposal wells are already 100% saturated with natural brines. In many injection zones, these brines have specific gravities of between 1.05 and 1.2. This brine can be several times the salinity of seawater. When operated, Class I wells have fluid inside the tubing from the surface all the way down to the injection zone. By adding a carefully controlled amount of pressure to the fluid by pumping during disposal operations, wells can be used to add the injectate to the brine already present in the injection formation. This is accomplished by pushing natural fluids out of the rock pore spaces near the well and into neighboring pore spaces by compressing these moving fluids and the fluid already contained inside those rock spaces to a higher pressure. This effect continues radially away from the well."
    },
    {
      question: "Does the permitting process consider how long such a well can be used?",
      content: "Yes. The permitting process considers a wide variety of factors regarding injection well operations and site suitability which includes a determination of how long a well can be used and how much liquid can be disposed in a well. These limitations are determined based on the capacity of the disposal reservoir and the expected operational lifetime of the well components. Fortunately, these issues are also monitored on a daily, monthly and annual basis. If well monitoring shows any problems with system performance, the well must be shut down and repaired or permanently abandoned to make certain that waste stays in the injection zone according to the permitted well design. Clauses describing this monitoring, repair or abandonment, and the financial assurance to follow the specified procedures, are required as permit conditions before injection operations can begin."
    },
    {
      question: "How are injection wells monitored to ensure safety and compliance with the law?",
      content: (
        <>
          <p className="mb-4">Monitoring conducted to verify the suitability of the well for continued injection of waste is essentially of two types: continuous and periodic. Continuous monitoring provides data regarding how the well is operated, and is used to document operational changes that could signal any change in the well condition. Periodic monitoring is used to validate the continuous monitoring, and to more thoroughly investigate well and disposal reservoir conditions to verify waste containment.</p>
          <p className="mb-4">Periodic mechanical integrity testing of well systems is conducted as required by regulations. Based on initial completion as a non-hazardous well, Part I annual testing may consist of standard annulus pressure testing and an associated reservoir falloff test. The annulus pressure test measurements are recorded using a calibrated pressure gauge on the wellhead, and are often witnessed by a regulatory inspector. A maximum change in pressure is allowed during the one-hour test. The gauges used to monitor pressure during the casing/tubing annular pressure tests are calibrated with a deadweight tester which is accurate to 0.1% of indicated pressure. Copies of gauge certifications are included with the pressure test records and reports.</p>
          <p>Part II periodic mechanical integrity testing is completed before wells become operational and thereafter on a five-year cycle or as required by permit. For wells used to inject non-hazardous waste, this testing consists of a radioactive tracer survey or equivalent acceptable method to verify the adequacy of the cement at the base of the long-string casing. In addition, well logging designed to investigate vertical movement of fluids behind pipe will be conducted in the form of temperature, noise, oxygen activation logging or equivalent acceptable testing. Part II periodic mechanical integrity testing is required on an annual basis for wells used to dispose of hazardous wastes. Continuous monitoring of infection rate and other parameters will also be accomplished as required by regulation. Analysis of the waste stream for chemical and physical parameters is also completed on a case-by-case basis as required by permit.</p>
        </>
      )
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
            <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
              <Droplet className="w-10 h-10" style={{ color: maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Injection Well Services</h1>
            <p className="text-xl text-[#8B1E3F] font-bold mb-6">Class I Hazardous and Class I, II, III, V, and VI Non-Hazardous</p>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: maroon }}></div>
          </div>

          {/* Detailed Content with Side-by-Side Image */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
            {/* Left Column: Text Content */}
            <div className="lg:w-3/5 prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>
                Our personnel have hundreds of years of combined injection well experience and are familiar with state and federal regulators throughout the country. Petrotek offers engineering and geology services where licensed. On a continual basis, our staff provides technical consulting and field services regarding a wide variety of issues to ensure the continued safe and responsible operation of all classes of waste injection wells.
              </p>
              <br></br>
              <p>
                Team professionals provide technical services to operators of deep injection wells throughout the United States. Staff members have prepared underground injection control (UIC) permits and Land Ban Petitions that have been accepted by state and federal regulatory agencies; conducted reservoir modeling studies; and provided field activity supervision for facilities that require injection wells throughout the country. We have experience regarding all aspects of deepwells ranging from feasibility studies to design; installation; maintenance; testing and contract operations. Petrotek staff are experienced with deepwell permitting issues related to existing and new facilities throughout the United States.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:w-2/5">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <img 
                  src={injectionWellImage} 
                  alt="Injection Well Diagram" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Service Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="mb-6 bg-white p-3 inline-block rounded-lg shadow-sm">{cat.icon}</div>
                <h3 className="text-xl font-bold mb-6 text-gray-900">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-3 mt-1 text-[#8B1E3F] opacity-60 shrink-0" />
                      <span className="text-gray-700 font-medium text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technology Accordion Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-[#8B1E3F] mb-8 flex items-center">
              <Info className="mr-3" /> Learn more about Injection Well Technology
            </h2>
            
            <div className="space-y-4">
              {techAccordionData.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
                  <button
                    onClick={() => toggleTechAccordion(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-lg text-gray-900">{item.question}</span>
                    <span className="ml-4 text-[#8B1E3F]">
                      {techOpenIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                    </span>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      techOpenIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/JpgU5Ewde_E?si=E_Zqcpbo-Bi8M5nI" 
                title="Protective Aspects of Injection Wells"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* NEW: Disposal Well FYI Accordion Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-[#8B1E3F] mb-8 flex items-center">
              <HelpCircle className="mr-3" /> Disposal Well FYI
            </h2>
            
            <div className="space-y-4">
              {fyiAccordionData.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
                  <button
                    onClick={() => toggleFyiAccordion(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-lg text-gray-900">{item.question}</span>
                    <span className="ml-4 text-[#8B1E3F]">
                      {fyiOpenIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                    </span>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      fyiOpenIndex === index ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-gray-600 leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
             <h3 className="text-2xl font-bold mb-6 text-gray-900">Need expert assistance with your Injection Well project?</h3>
             <Link 
               to="/" 
               onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
               className="inline-flex items-center px-8 py-4 bg-[#8B1E3F] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
             >
               Contact Our Engineers <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InjectionWells;