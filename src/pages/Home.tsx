import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Zap, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import ehcLogo from '../assets/logo-removebg-preview.png';
import cktImg from '../assets/home-img.jpg';

// --- REAL PROJECT DATA ---
const projects = [
  {
    id: 1,
    title: "Fire Fighter Bot & Agrobot",
    category: "Robotics & Automation",
    desc: "An innovative dual-purpose robotics project featuring a fire-fighting module and agricultural automation capabilities.",
    creators: "M. Tarun, Badal Ritesh Kumar, Pavani Gontia, Sahil Raj Lenka",
    img: "", // Add an image URL here later, and it will automatically become the background!
  },
  {
    id: 2,
    title: "Smart Pill Box",
    category: "Healthcare IoT",
    desc: "A clever IoT-enabled medical adherence system designed to remind patients to take their medication on schedule using automated alerts.",
    creators: "Prasidhi Sasmal, Soumya Rani Prusty",
    img: "",
  },
  {
    id: 3,
    title: "Smart Blind Stick",
    category: "Assistive Technology",
    desc: "An advanced navigation aid for the visually impaired, utilizing ultrasonic sensors and haptic feedback to detect obstacles in real-time.",
    creators: "K. Kuresh Reddy, Hrydayesh Debta, B. Sai Ganesh, Aditya Anjangi",
    img: "",
  },
  {
    id: 4,
    title: "LED Stack Game",
    category: "Interactive Hardware",
    desc: "A fast-paced, reflex-testing arcade-style game built completely from scratch using logic circuits, microcontrollers, and LED arrays.",
    creators: "Lipsa Acharya, M. Kaivalya",
    img: "",
  },
  {
    id: 5,
    title: "Home Automation System",
    category: "Smart Home",
    desc: "A centralized Bluetooth and Wi-Fi enabled smart home hub allowing users to control appliances, lights, and security systems securely.",
    creators: "EHC Development Team",
    img: "",
  },
  {
    id: 6,
    title: "RFID Door Lock Security",
    category: "Security Infrastructure",
    desc: "A database-backed RFID scanner system designed to manage lab access, tracking entry and exit logs via a secure local ecosystem.",
    creators: "EHC Security Team",
    img: "",
  }
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="overflow-hidden pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-white/40 blur-[120px] rounded-full" />
          <motion.div animate={{ scale: [1.1, 1, 1.1], rotate: [0, -45, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-ehc-indigo/15 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center w-full mt-10">
          <motion.div initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.1 }} className="mb-10 inline-block">
            <div className="relative translate-y-[25px] w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto">
              <div className="absolute inset-0 bg-white/60 blur-[40px] rounded-full animate-pulse" />
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 w-full h-full flex items-center justify-center">
                <img src={ehcLogo} alt="EHC Logo" className="w-full h-full object-contain drop-shadow-2xl" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] sm:leading-[0.85] mb-8 uppercase text-slate-900 w-full">
              <motion.span initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.5 }} className="block">ELECTRONICS</motion.span>
              <motion.span initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.7 }} className="text-gradient block">Hobby Club</motion.span>
            </h1>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.2 }} className="space-y-4 px-2">
            <p className="font-comfortaa text-xs sm:text-sm md:text-xl text-slate-500 tracking-[0.2em] sm:tracking-[0.3em] uppercase max-w-2xl mx-auto leading-relaxed font-bold">
              Building the future of hardware at NIST University
            </p>
            <motion.p initial={{ opacity: 0, y: 10, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 1.5, duration: 2, ease: [0.22, 1, 0.36, 1] }} className="text-ehc-indigo font-bold italic text-base sm:text-lg md:text-2xl tracking-[0.1em] sm:tracking-[0.2em]">
              "...Innovate to Implement"
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.8 }} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-lg mx-auto sm:max-w-none">
            <Link to="/events" className="font-comfortaa w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-ehc-indigo text-white font-bold tracking-widest uppercase rounded-full hover:bg-slate-900 hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-900/20 text-sm sm:text-base">
              Explore Events
            </Link>
            <a href="https://chat.whatsapp.com/Kj4IH9GcMukAo58Dh0c2hP" className="font-comfortaa w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white/60 border border-white/50 text-slate-800 font-bold tracking-widest uppercase rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
              Join Community
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES & ABOUT SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 bento-card flex flex-col justify-between min-h-[400px] relative overflow-hidden group bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-slate-800 shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-ehc-indigo/20 blur-[100px] -mr-32 -mt-32 transition-colors" />
            <div className="relative z-10">
              <span className="font-comfortaa text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4 block">Our Mission</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-6 text-white drop-shadow-md">
                FOSTERING THE <span className="text-slate-400">NEXT GEN</span> OF HARDWARE INNOVATORS.
              </h2>
            </div>
            <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed relative z-10 font-medium">
              EHC at NIST University is a vibrant community dedicated to exploring the boundaries of hardware, IoT, and circuit skills. We provide a platform for students to transform theoretical knowledge into practical innovation.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bento-card bg-gradient-to-br from-indigo-500 to-indigo-700 border-indigo-400 flex flex-col justify-center items-center text-center min-h-[250px] md:min-h-0 text-white shadow-xl shadow-indigo-900/20">
            <div className="text-6xl md:text-7xl font-black tracking-tighter mb-2 drop-shadow-md">50+</div>
            <div className="font-comfortaa text-indigo-100 text-xs font-bold tracking-widest uppercase">Active Members</div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bento-card group bg-blue-50/80 border-blue-100 hover:bg-blue-100/80 transition-colors duration-300">
            <div className="w-12 h-12 bg-blue-500 rounded-2xl shadow-md flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"><Zap size={24} /></div>
            <h3 className="font-comfortaa text-xl md:text-2xl font-bold mb-2 uppercase tracking-tight text-blue-950">IoT Dev</h3>
            <p className="text-blue-800/80 text-sm font-semibold leading-relaxed">Connecting the physical world to the digital realm with smart sensors.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bento-card group bg-purple-50/80 border-purple-100 hover:bg-purple-100/80 transition-colors duration-300">
            <div className="w-12 h-12 bg-purple-500 rounded-2xl shadow-md flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300"><Cpu size={24} /></div>
            <h3 className="font-comfortaa text-xl md:text-2xl font-bold mb-2 uppercase tracking-tight text-purple-950">Circuit Design</h3>
            <p className="text-purple-800/80 text-sm font-semibold leading-relaxed">Mastering the art of efficient micro-scale architecture and PCB design.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bento-card group bg-teal-50/80 border-teal-100 hover:bg-teal-100/80 transition-colors duration-300">
            <div className="w-12 h-12 bg-teal-500 rounded-2xl shadow-md flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"><Globe size={24} /></div>
            <h3 className="font-comfortaa text-xl md:text-2xl font-bold mb-2 uppercase tracking-tight text-teal-950">Robotics</h3>
            <p className="text-teal-800/80 text-sm font-semibold leading-relaxed">Engineering autonomous intelligence and mechanical precision.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-3 bento-card bg-gradient-to-r from-slate-50 to-white border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 shadow-sm">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4 uppercase text-slate-900">Join the SANKALP Fest</h2>
              <p className="font-medium mb-8 text-sm sm:text-base text-slate-600">Our flagship annual event is back. Register now to showcase your innovation and win exciting prizes.</p>
              <Link to="/events" className="font-comfortaa inline-block px-8 py-4 bg-slate-900 text-white font-bold tracking-widest uppercase rounded-full hover:bg-ehc-indigo hover:scale-105 transition-all shadow-xl text-sm sm:text-base">Register Now</Link>
            </div>
            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-lg border-[6px] border-white hover:border-ehc-indigo/30 transition-colors duration-500 group relative bg-white flex items-center justify-center p-2">
              <img src={cktImg} alt="Fest" className="w-full h-auto block object-contain transition-transform duration-700 group-hover:scale-110 transform-gpu" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PREMIUM CENTERED CAROUSEL --- */}
      <section className="w-full bg-slate-950 py-24 relative overflow-hidden">
        
        {/* Dynamic Header */}
        <div className="max-w-7xl mx-auto px-4 text-center mb-16 relative z-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white">
            Innovation <span className="text-ehc-indigo">Showcase</span>
          </h2>
          <p className="font-comfortaa text-slate-400 font-bold text-xs md:text-sm uppercase tracking-widest mt-4">
            Explore {projects.length} Major Hardware Inventions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-[500px] md:h-[550px] flex items-center justify-center">
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevProject} 
            className="absolute left-4 md:left-12 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-ehc-indigo hover:cursor-pointer hover:border-ehc-indigo hover:scale-110 transition-all shadow-xl"
            aria-label="Previous Project"
          >
            <ChevronLeft size={28} />
          </button>

          <button 
            onClick={nextProject} 
            className="absolute right-4 md:right-12 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-ehc-indigo hover:cursor-pointer hover:border-ehc-indigo hover:scale-110 transition-all shadow-xl"
            aria-label="Next Project"
          >
            <ChevronRight size={28} />
          </button>

          {/* Cards Track */}
          <div className="relative w-full max-w-[1200px] mx-auto h-full flex items-center justify-center perspective-[1000px]">
            {projects.map((project, index) => {
              
              let offset = index - activeIndex;
              if (offset < -Math.floor(projects.length / 2)) offset += projects.length;
              if (offset > Math.floor(projects.length / 2)) offset -= projects.length;

              const isActive = offset === 0;

              return (
                <motion.div
                  key={project.id}
                  className="absolute top-0 w-[85vw] max-w-[350px] md:max-w-[450px] h-full rounded-[2rem] overflow-hidden shadow-2xl flex flex-col cursor-pointer group border border-white/10"
                  animate={{
                    x: `${offset * 105}%`,
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 20 : 10 - Math.abs(offset),
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={() => {
                    if (!isActive) setActiveIndex(index);
                  }}
                >
                  {/* --- BACKGROUND LAYER --- */}
                  <div className="absolute inset-0 z-0">
                    {project.img ? (
                      <>
                        {/* If image exists, use it as background with a strong gradient overlay for text readability */}
                        <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40" />
                      </>
                    ) : (
                      /* If no image exists, use a premium dark gradient fallback */
                      <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-950">
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-ehc-indigo/20 blur-[80px] rounded-full transition-colors duration-500 group-hover:bg-ehc-indigo/40" />
                      </div>
                    )}
                  </div>

                  {/* --- FOREGROUND TEXT LAYER --- */}
                  <div className="relative z-10 p-8 md:p-10 flex flex-col h-full text-left">
                    
                    {/* Top Tag */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full w-fit mb-auto">
                      <span className="font-comfortaa text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">{project.category}</span>
                    </div>
                    
                    {/* Main Content (Pushed to bottom) */}
                    <div className="mt-auto pt-8">
                      <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 leading-tight drop-shadow-lg">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed mb-8 drop-shadow-md line-clamp-3">
                        {project.desc}
                      </p>
                      
                      {/* Footer Info */}
                      <div className="pt-5 border-t border-white/20 flex flex-col justify-start">
                        <p className="font-comfortaa text-ehc-indigo text-[10px] font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                          <Cpu size={14}/> Designed By
                        </p>
                        <p className="text-white text-sm font-semibold leading-snug drop-shadow-sm">
                          {project.creators}
                        </p>
                      </div>
                    </div>

                    {/* Massive Background Number Overlay */}
                    <span className="font-comfortaa absolute top-6 right-6 text-white/10 font-black text-6xl md:text-8xl leading-none pointer-events-none select-none z-0">
                      0{project.id}
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Minimalist Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-12 relative z-20">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex 
                  ? "w-8 h-2.5 bg-ehc-indigo" 
                  : "w-2.5 h-2.5 bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Jump to project ${index + 1}`}
            />
          ))}
        </div>

      </section>

    </div>
  );
}