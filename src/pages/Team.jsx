// src/pages/Team.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Linkedin, 
  Mail, 
  Award, 
  Briefcase, 
  GraduationCap,
  ChevronRight
} from 'lucide-react';

const Team = () => {
  const maroon = "#8B1E3F";

  // Placeholder Data - Replace with real team info
  const leadership = [
    {
      name: "Principal Engineer",
      title: "President & CEO",
      bio: "Over 35 years of experience in injection well design and regulatory compliance across North America.",
      initials: "PE"
    },
    {
      name: "Senior Geologist",
      title: "Vice President of Operations",
      bio: "Specializing in structural geology and reservoir characterization for complex subsurface projects.",
      initials: "SG"
    },
    {
      name: "Chief Hydrogeologist",
      title: "Technical Director",
      bio: "Expert in groundwater modeling (MODFLOW) and aquifer exemption petitions for mining clients.",
      initials: "CH"
    }
  ];

  const technicalStaff = [
    {
      name: "Project Manager",
      title: "Senior Petroleum Engineer",
      specialty: "Reservoir Engineering",
      initials: "PM"
    },
    {
      name: "Lead Geoscientist",
      title: "Geologist",
      specialty: "Carbon Capture (CCS)",
      initials: "LG"
    },
    {
      name: "Regulatory Specialist",
      title: "Environmental Analyst",
      specialty: "UIC Permitting",
      initials: "RS"
    },
    {
      name: "Field Operations",
      title: "Site Supervisor",
      specialty: "Well Testing & Safety",
      initials: "FO"
    },
    {
      name: "Simulation Expert",
      title: "Modeling Engineer",
      specialty: "Fluid Dynamics",
      initials: "SE"
    },
    {
      name: "GIS Analyst",
      title: "Data Specialist",
      specialty: "Mapping & Spatial Analysis",
      initials: "GA"
    }
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
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
              <Users className="w-10 h-10" style={{ color: maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Team</h1>
            <p className="text-xl text-[#8B1E3F] font-bold mb-6">Engineers, Geoscientists, and Technical Experts</p>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: maroon }}></div>
            
            <p className="text-2xl text-gray-800 leading-relaxed font-medium">
              Petrotek is led by experienced professionals who are leaders in their respective fields. We bring together diverse disciplines to solve complex subsurface challenges.
            </p>
          </div>

          {/* Leadership Section */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-[#8B1E3F] pl-4">Executive Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group text-center">
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-gray-400 group-hover:bg-[#8B1E3F] group-hover:text-white transition-colors border-4 border-white shadow-inner">
                  {leader.initials}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-[#8B1E3F] font-bold text-sm uppercase tracking-wider mb-4">{leader.title}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {leader.bio}
                </p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <button className="p-2 bg-gray-50 rounded-full text-gray-600 hover:text-[#0077b5] hover:bg-white hover:shadow-md transition-all">
                    <Linkedin size={20} />
                  </button>
                  <button className="p-2 bg-gray-50 rounded-full text-gray-600 hover:text-[#8B1E3F] hover:bg-white hover:shadow-md transition-all">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Staff Grid */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-[#8B1E3F] pl-4">Technical Experts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {technicalStaff.map((staff, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-center space-x-4 hover:bg-white hover:shadow-lg hover:border-gray-200 border border-transparent transition-all">
                <div className="w-16 h-16 bg-white rounded-full flex-shrink-0 flex items-center justify-center text-gray-400 font-bold border border-gray-100 shadow-sm">
                  {staff.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{staff.name}</h4>
                  <p className="text-sm text-[#8B1E3F] font-semibold">{staff.title}</p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center">
                    <Award className="w-3 h-3 mr-1" /> {staff.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Careers / Culture Section */}
          <div className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 mr-4 text-[#8B1E3F]" />
                <h3 className="text-3xl font-bold">Join Our Team</h3>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We are always looking for talented engineers and geoscientists who are passionate about solving problems and adding value. If you are interested in a career at Petrotek, we'd love to hear from you.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-sm font-bold text-white/80">
                  <CheckCircle className="w-5 h-5 mr-3 text-[#8B1E3F]" /> Competitive Compensation
                </div>
                <div className="flex items-center text-sm font-bold text-white/80">
                  <CheckCircle className="w-5 h-5 mr-3 text-[#8B1E3F]" /> Professional Development
                </div>
                <div className="flex items-center text-sm font-bold text-white/80">
                  <CheckCircle className="w-5 h-5 mr-3 text-[#8B1E3F]" /> Collaborative Environment
                </div>
              </div>
              <Link 
                to="/" 
                onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
                className="inline-flex items-center px-8 py-4 bg-[#8B1E3F] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg w-fit"
              >
                Contact HR <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            {/* Culture Image / Graphic */}
            <div className="bg-gray-800 relative hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Team Collaboration" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-60 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-gray-900 via-transparent to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Helper Icon for the list
const CheckCircle = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default Team;