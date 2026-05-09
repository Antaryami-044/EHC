import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Zap, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import ehcLogo from '../assets/logo-removebg-preview.png';
import cktImg from '../assets/home-img.jpg';

// --- REAL PROJECT DATA (Includes all 6 projects & assigned creators) ---
const projects = [
  {
    id: 1,
    title: "Fire Fighter Bot & Agrobot",
    category: "Robotics & Automation",
    desc: "An innovative dual-purpose robotics project featuring a fire-fighting module and agricultural automation capabilities.",
    creators: "M. Tarun, Badal Ritesh Kumar, Pavani Gontia, Sahil Raj Lenka",
    // To use your own images later, change this to your imported image variable (e.g., img: fireBotImg)
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Smart Pill Box",
    category: "Healthcare IoT",
    desc: "A clever IoT-enabled medical adherence system designed to remind patients to take their medication on schedule using automated alerts.",
    creators: "Prasidhi Sasmal, Soumya Rani Prusty",
    img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Smart Blind Stick",
    category: "Assistive Technology",
    desc: "An advanced navigation aid for the visually impaired, utilizing ultrasonic sensors and haptic feedback to detect obstacles in real-time.",
    creators: "K. Kuresh Reddy, Hrydayesh Debta, B. Sai Ganesh, Aditya Anjangi",
    img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "LED Stack Game",
    category: "Interactive Hardware",
    desc: "A fast-paced, reflex-testing arcade-style game built completely from scratch using logic circuits, microcontrollers, and LED arrays.",
    creators: "Lipsa Acharya, M. Kaivalya",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Home Automation System",
    category: "Smart Home",
    desc: "A centralized Bluetooth and Wi-Fi enabled smart home hub allowing users to control appliances, lights, and security systems securely.",
    creators: "EHC Development Team",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "RFID Door Lock Security",
    category: "Security Infrastructure",
    desc: "A database-backed RFID scanner system designed to manage lab access, tracking entry and exit logs via a secure local ecosystem.",
    creators: "EHC Security Team",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function Home() {
  // --- CAROUSEL STATE ---
  const [virtualActiveIndex, setVirtualActiveIndex] = useState(0);

  // Navigation Logic
  const next = () => setVirtualActiveIndex(prev => prev + 1);
  const prev = () => setVirtualActiveIndex(prev => prev - 1);

  // Generate Array of Visible Items based on infinite virtual index
  const visibleItems = [];
  for (let i = -2; i <= 2; i++) {
      const vIndex = virtualActiveIndex + i;
      // Handle negative modulo for seamless infinite looping
      const actualIndex = ((vIndex % projects.length) + projects.length) % projects.length;
      visibleItems.push({
          project: projects[actualIndex],
          offset: i,
          vIndex
      });
  }

  // Calculate actual display index for dots
  const currentActualIndex = ((virtualActiveIndex % projects.length) + projects.length) % projects.length;

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
            <p className="text-xs sm:text-sm md:text-xl font-mono text-slate-500 tracking-[0.2em] sm:tracking-[0.3em] uppercase max-w-2xl mx-auto leading-relaxed">
              Building the future of hardware at NIST University
            </p>
            <motion.p initial={{ opacity: 0, y: 10, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 1.5, duration: 2, ease: [0.22, 1, 0.36, 1] }} className="text-ehc-indigo font-semibold italic text-base sm:text-lg md:text-2xl tracking-[0.1em] sm:tracking-[0.2em]">
              "...Innovate to Implement"
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.8 }} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-lg mx-auto sm:max-w-none">
            <Link to="/events" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-ehc-indigo text-white font-black tracking-widest uppercase rounded-full hover:bg-slate-900 hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-900/20 text-sm sm:text-base">
              Explore Events
            </Link>
            <a href="#" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white/60 border border-white/50 text-slate-800 font-black tracking-widest uppercase rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
              Join Community
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES & ABOUT SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 bento-card flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-[80px] -mr-32 -mt-32 transition-colors" />
            <div className="relative z-10">
              <span className="text-ehc-indigo text-xs font-black tracking-widest uppercase mb-4 block">Our Mission</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-6 text-slate-900">
                FOSTERING THE <span className="text-slate-400">NEXT GEN</span> OF HARDWARE INNOVATORS.
              </h2>
            </div>
            <p className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed relative z-10">
              EHC at NIST University is a vibrant community dedicated to exploring the boundaries of hardware, IoT, and circuit skills. We provide a platform for students to transform theoretical knowledge into practical innovation.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bento-card bg-indigo-50/50 border-indigo-100 flex flex-col justify-center items-center text-center min-h-[250px] md:min-h-0">
            <div className="text-6xl md:text-7xl font-black tracking-tighter text-ehc-indigo mb-2">50+</div>
            <div className="text-slate-500 text-xs font-black tracking-widest uppercase">Active Members</div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bento-card group">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-ehc-indigo mb-6 group-hover:scale-110 transition-transform"><Zap size={24} /></div>
            <h3 className="text-xl md:text-2xl font-black mb-2 uppercase tracking-tighter text-slate-900">IoT Dev</h3>
            <p className="text-slate-600 text-sm">Connecting the physical world to the digital realm with smart sensors.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bento-card group">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-ehc-indigo mb-6 group-hover:scale-110 transition-transform"><Cpu size={24} /></div>
            <h3 className="text-xl md:text-2xl font-black mb-2 uppercase tracking-tighter text-slate-900">Circuit Design</h3>
            <p className="text-slate-600 text-sm">Mastering the art of efficient micro-scale architecture and PCB design.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bento-card group">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-ehc-indigo mb-6 group-hover:scale-110 transition-transform"><Globe size={24} /></div>
            <h3 className="text-xl md:text-2xl font-black mb-2 uppercase tracking-tighter text-slate-900">Robotics</h3>
            <p className="text-slate-600 text-sm">Engineering autonomous intelligence and mechanical precision.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-3 bento-card bg-white/60 border-white flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4 uppercase text-slate-900">Join the SANKALP Fest</h2>
              <p className="text-slate-600 mb-8 text-sm sm:text-base">Our flagship annual event is back. Register now to showcase your innovation and win exciting prizes.</p>
              <Link to="/events" className="inline-block px-8 py-4 bg-slate-900 text-white font-black tracking-widest uppercase rounded-full hover:bg-ehc-indigo hover:scale-105 transition-all shadow-xl text-sm sm:text-base">Register Now</Link>
            </div>
            
            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-lg border-[6px] border-white/60 hover:border-ehc-indigo/30 transition-colors duration-500 group relative bg-white/50 flex items-center justify-center p-2">
              <img 
                src={cktImg} 
                alt="Fest" 
                className="w-full h-auto block object-contain transition-transform duration-700 group-hover:scale-110 transform-gpu" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- AURA 3D CAROUSEL SECTION --- */}
      <section className="w-full max-w-[100vw] overflow-hidden px-4 py-20 bg-slate-950/5 relative">
        
        {/* Dynamic Header */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-slate-900">
            Aura <span className="text-ehc-indigo">Showcase</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm uppercase tracking-widest mt-4">
            Explore {projects.length} Major Hardware Inventions
          </p>
        </div>

        {/* 3D Perspective Wrapper */}
        <div className="relative w-full h-[550px] md:h-[600px] flex items-center justify-center perspective-[1200px] transform-style-3d">
          <AnimatePresence initial={false}>
            {visibleItems.map(({ project, offset, vIndex }) => {
              const isActive = offset === 0;
              
              return (
                <motion.div
                  key={vIndex}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    x: `${offset * 70}%`, 
                    z: -300,
                    rotateY: -offset * 30
                  }}
                  animate={{
                    opacity: isActive ? 1 : 1 - Math.abs(offset) * 0.4,
                    scale: isActive ? 1 : 0.85,
                    x: `${offset * 70}%`, // Shifts side cards outward
                    z: isActive ? 0 : -Math.abs(offset) * 150, // Pushes side cards back
                    rotateY: -offset * 25, // Rotates side cards inward
                    zIndex: 10 - Math.abs(offset)
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    x: `${offset * 70}%`,
                    z: -300,
                    rotateY: -offset * 30,
                    zIndex: 0
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  
                  // Drag handling for active card
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, { offset }) => {
                    if (offset.x < -50) next();
                    else if (offset.x > 50) prev();
                  }}
                  
                  // Click side cards to navigate to them
                  onClick={() => {
                    if (offset > 0) next();
                    else if (offset < 0) prev();
                  }}
                  
                  className={`absolute w-[85vw] max-w-[340px] md:max-w-[420px] h-[480px] md:h-[520px] rounded-3xl overflow-hidden bg-slate-900 border-[2px] transition-colors duration-300 ${isActive ? 'border-ehc-indigo/60 shadow-[0_20px_60px_rgba(99,102,241,0.4)] cursor-grab active:cursor-grabbing' : 'border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer'}`}
                >
                  
                  {/* Glossy Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent z-10 pointer-events-none" />

                  {/* Project Image */}
                  <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-70" />

                  {/* Text Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent p-6 md:p-8 flex flex-col justify-end z-20">
                    <div className="inline-block px-3 py-1 bg-ehc-indigo/20 border border-ehc-indigo/50 text-indigo-300 text-[10px] font-black tracking-widest uppercase rounded-full w-fit mb-4 backdrop-blur-md">
                      {project.category}
                    </div>
                    
                    <h3 className="text-white text-2xl md:text-3xl font-black tracking-tighter uppercase mb-3 leading-tight drop-shadow-md">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm mb-5 line-clamp-3 leading-relaxed">
                      {project.desc}
                    </p>
                    
                    {/* Creators Tag */}
                    <div className="mt-auto pt-4 border-t border-white/20">
                      <p className="text-ehc-indigo text-[10px] font-black uppercase tracking-widest mb-1">Designed By</p>
                      <p className="text-white text-xs font-medium leading-snug">{project.creators}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="max-w-7xl mx-auto flex flex-col items-center mt-12">
          
          {/* Next/Prev Buttons (Play/Pause removed) */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <button onClick={prev} className="w-14 h-14 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-600 hover:text-white hover:bg-ehc-indigo hover:border-ehc-indigo hover:shadow-lg transition-all shadow-sm">
              <ChevronLeft size={28} />
            </button>

            <button onClick={next} className="w-14 h-14 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-600 hover:text-white hover:bg-ehc-indigo hover:border-ehc-indigo hover:shadow-lg transition-all shadow-sm">
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Minimalist Dots Indicator */}
          <div className="flex items-center justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                   // Calculate how many jumps needed to reach the clicked dot
                   const diff = index - currentActualIndex;
                   setVirtualActiveIndex(prev => prev + diff);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentActualIndex 
                    ? "w-8 h-2 bg-ehc-indigo" 
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}