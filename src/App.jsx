import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Briefcase, 
  Layers, 
  Send, 
  User, 
  Zap, 
  Server, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Database, 
  Lock, 
  ChevronRight, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Quote 
} from 'lucide-react';

// --- DATA ---
const PERSONAL_INFO = {
  name: "Kennedy Buluma M.",
  title: "Software Engineer",
  email: "kennbuluma@gmail.com",
  location: "Nairobi, Kenya",
  bio: "Full-Stack Developer & Systems Engineer with 7+ years of experience building secure, scalable solutions for enterprise, government, and global clients. I thrive in remote-first teams, architecting backend systems and cloud infrastructure.",
  socials: { github: "https://github.com", linkedin: "#" }
};

const SERVICES = [
  { title: "Enterprise API Design", desc: "High-performance RESTful APIs using Spring Boot and Node.js.", icon: Server, skills: ["Spring Boot", "JWT", "Microservices"] },
  { title: "Biometric & Security", desc: "Integrating fingerprint/iris registration for secure identity management.", icon: ShieldCheck, skills: ["Biometrics", "Android", "Security"] },
  { title: "Full-Stack Web Apps", desc: "Responsive applications using Angular, React, and Bootstrap.", icon: Globe, skills: ["Angular", "React", "TypeScript"] },
  { title: "Systems Admin", desc: "Linux environments, NGINX proxies, and CI/CD pipelines.", icon: Cpu, skills: ["Linux CLI", "NGINX", "Docker"] },
  { title: "Database Engineering", desc: "Optimizing SQL (PostgreSQL, MSSQL, Oracle) and NoSQL.", icon: Database, skills: ["PostgreSQL", "Oracle", "MongoDB"] },
  { title: "Fintech Logic", desc: "Core banking integrations and financial platform customization.", icon: Lock, skills: ["Banking", "MifosX", "Compliance"] }
];

const PROFESSIONAL_EXP = [
  { role: "Software Developer", company: "NgenX Solutions Limited", period: "2018 - Present", achievements: ["Developed Android apps with biometric auth.", "Created RESTful APIs with Spring Boot.", "Managed Linux/NGINX infrastructure."] },
  { role: "Back-end Developer (Contract)", company: "Abidors Ltd (Bulgaria/Singapore)", period: "2022 - 2023", achievements: ["Designed API solutions for global clients.", "Collaborated remotely on system architecture."] },
  { role: "Back-End Developer (Contractor)", company: "Equity Bank Group Limited", period: "2020", achievements: ["Integrated functional logic into core banking.", "Oversaw data processing validation."] }
];

const ACADEMIC_EXP = {
  education: [{ degree: "B.Sc. Information Technology", institution: "JKUAT", year: "2016", details: "Second Class Honours, Upper Division." }],
  skillsDetailed: {
    languages: ["Java", "C#", "Kotlin", "JavaScript", "Python", "PHP", "SQL"],
    frameworks: ["Spring Boot", "Node.js", "Angular", "React"],
    tools: ["Docker", "Git", "NGINX", "Linux CLI"]
  }
};

// --- SUB-COMPONENTS ---
const Button = ({ children, variant = "primary", onClick, icon: IconComponent, href }) => {
  const base = "px-6 py-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  };
  
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[variant]}`}>{IconComponent && <IconComponent size={16}/>}{children}</a>;
  return <button onClick={onClick} className={`${base} ${styles[variant]}`}>{IconComponent && <IconComponent size={16}/>}{children}</button>;
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12 animate-fadeIn">
    <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2 uppercase border-l-4 border-blue-600 pl-4">{title}</h2>
    {subtitle && <p className="text-slate-500 font-medium pl-5 italic">{subtitle}</p>}
  </div>
);

// --- MAIN SECTIONS ---
const HomeView = ({ setSection }) => (
  <div className="space-y-12 animate-fadeIn">
    <div className="bg-slate-900 text-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -mr-20 -mt-20"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
        <div className="w-40 h-40 rounded-[2rem] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-5xl font-black rotate-3 border-4 border-white/10 shadow-2xl shrink-0">KB</div>
        <div>
          <h1 className="text-4xl md:text-6xl font-black mb-3 tracking-tight">{PERSONAL_INFO.name}</h1>
          <p className="text-blue-400 text-xl font-semibold mb-8 uppercase tracking-widest text-sm opacity-90">{PERSONAL_INFO.title}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button onClick={() => setSection('resume')}>Experience History</Button>
            <Button variant="secondary" onClick={() => setSection('contact')}>Get In Touch</Button>
          </div>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><User className="text-blue-600"/> Professional Bio</h3>
        <p className="text-slate-600 leading-relaxed text-base font-medium">{PERSONAL_INFO.bio}</p>
      </div>
      <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><Zap className="text-blue-600"/> Core Principles</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            {label: 'Efficiency', desc: 'Optimized logic'},
            {label: 'Security', desc: 'Hardened systems'},
            {label: 'Scalability', desc: 'Cloud ready'},
            {label: 'Precision', desc: 'Clean code'}
          ].map(item => (
            <div key={item.label} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p className="text-sm font-black text-slate-800">{item.label}</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ResumeView = () => {
  const [tab, setTab] = useState('pro');
  return (
    <div className="animate-fadeIn">
      <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 w-fit mb-10">
        <button onClick={() => setTab('pro')} className={`px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${tab === 'pro' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-400 hover:text-slate-600'}`}>Professional Industry</button>
        <button onClick={() => setTab('aca')} className={`px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${tab === 'aca' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-400 hover:text-slate-600'}`}>Academic CV</button>
      </div>

      {tab === 'pro' ? (
        <div className="space-y-8">
          {PROFESSIONAL_EXP.map((job, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:border-blue-100 transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">{job.role}</h4>
                  <p className="text-blue-600 font-bold text-base flex items-center gap-2">
                    <Briefcase size={16}/> {job.company}
                  </p>
                </div>
                <span className="text-[11px] font-black bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full border border-blue-100 uppercase tracking-tighter">
                  {job.period}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {job.achievements.map((a, j) => (
                  <div key={j} className="text-sm text-slate-600 flex gap-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-100/50">
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5"/>
                    <span className="font-medium leading-relaxed">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-6">
            {ACADEMIC_EXP.education.map((edu, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm">
                <h4 className="font-black text-2xl tracking-tight mb-2">{edu.degree}</h4>
                <p className="text-blue-600 font-bold text-lg mb-4">{edu.institution}</p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">{edu.details}</p>
                  <p className="text-slate-400 text-xs mt-2 font-bold uppercase tracking-widest">Class of {edu.year}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:col-span-4">
            <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-xl sticky top-24">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-blue-400 border-b border-white/10 pb-4">Technical Stack</h4>
              {Object.entries(ACADEMIC_EXP.skillsDetailed).map(([cat, items]) => (
                <div key={cat} className="mb-8 last:mb-0">
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-3 tracking-widest">{cat}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map(item => (
                      <span key={item} className="text-[11px] font-bold px-3 py-1.5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ServicesView = () => (
  <div className="animate-fadeIn">
    <SectionHeader title="Expertise & Services" subtitle="Providing high-value engineering solutions for enterprise systems." />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES.map((s, i) => (
        <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[3rem] -mr-8 -mt-8 group-hover:bg-blue-600 transition-colors"></div>
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner relative z-10">
            <s.icon size={32}/>
          </div>
          <h4 className="font-black text-xl mb-3 tracking-tight text-slate-900">{s.title}</h4>
          <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">{s.desc}</p>
          <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
            {s.skills.map(skill => (
              <span key={skill} className="text-[10px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-lg uppercase">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ContactView = () => (
  <div className="max-w-5xl animate-fadeIn">
    <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm grid md:grid-cols-5 gap-16">
      <div className="md:col-span-3">
        <h3 className="text-4xl font-black mb-4 tracking-tight">Let's Build Something Great</h3>
        <p className="text-slate-500 mb-10 text-lg font-medium">Open to consulting opportunities, system audits, and senior engineering roles.</p>
        
        <div className="space-y-10">
          <div className="flex items-center gap-6 group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
              <Mail size={24}/>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Inquiry</p>
              <p className="font-bold text-xl text-slate-800">{PERSONAL_INFO.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
              <MapPin size={24}/>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Based In</p>
              <p className="font-bold text-xl text-slate-800">{PERSONAL_INFO.location}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:col-span-2 bg-slate-900 p-10 rounded-[2.5rem] flex flex-col justify-between text-white relative overflow-hidden shadow-2xl">
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
        <div className="relative z-10">
          <Quote size={40} className="text-blue-500 mb-6 opacity-40"/>
          <p className="text-lg font-medium leading-relaxed mb-10 italic text-slate-300">
            "Solving complex infrastructure challenges with clean, modular, and secure code architecture."
          </p>
          <div className="flex gap-4">
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm border border-white/10">
              <Github size={24}/>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all backdrop-blur-sm border border-white/10">
              <Linkedin size={24}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  const [section, setSection] = useState('home');

  const navItems = [
    {id: 'home', label: 'Home', icon: Home},
    {id: 'resume', label: 'Experience', icon: Briefcase},
    {id: 'services', label: 'Services', icon: Layers},
    {id: 'contact', label: 'Contact', icon: Send}
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      {/* Sidebar Navigation */}
      <nav className="w-full md:w-80 bg-slate-900 md:h-screen sticky top-0 md:flex flex-col p-8 z-50 shadow-2xl">
        <div className="mb-16 hidden md:block">
          <h2 className="text-white text-3xl font-black tracking-tighter">Kennedy</h2>
          <p className="text-blue-500 text-[11px] font-black uppercase tracking-[0.3em] mt-2">Systems Architect</p>
        </div>
        
        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
          {navItems.map(item => (
            <button key={item.id} onClick={() => { setSection(item.id); window.scrollTo(0,0); }} 
              className={`flex items-center gap-4 px-8 py-5 rounded-[1.5rem] font-bold text-sm transition-all whitespace-nowrap w-full group ${section === item.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/40 translate-x-1' : 'text-slate-500 hover:bg-slate-800/50 hover:text-slate-300'}`}>
              <item.icon size={20} className={section === item.id ? 'text-white' : 'text-slate-600 group-hover:text-blue-400'}/> 
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="mt-auto pt-10 hidden md:block border-t border-white/5">
          <div className="bg-slate-800/50 p-6 rounded-3xl border border-white/5">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Status</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-slate-300">Open for collaboration</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-20 max-w-7xl mx-auto w-full min-h-screen">
        {section === 'home' && <HomeView setSection={setSection}/>}
        {section === 'resume' && <ResumeView/>}
        {section === 'services' && <ServicesView/>}
        {section === 'contact' && <ContactView/>}
        
        <footer className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-50">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">© 2025 Kennedy Buluma M. • Built with React & Tailwind</p>
          <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-tighter">
            <span>Security First</span>
            <span>Scalable Logic</span>
            <span>Global Impact</span>
          </div>
        </footer>
      </main>
    </div>
  );
}