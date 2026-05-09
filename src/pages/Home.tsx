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

// --- SEAMLESS INFINITE SLIDER ANIMATION VARIANTS ---
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function Home() {
  // State for true infinite scrolling
  const [[page, direction], setPage] = useState([0, 0]);

  // Safely wrap the index so it loops endlessly in both directions
  const projectIndex = ((page % projects.length) + projects.length) % projects.length;
  const activeProject = projects[projectIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
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

      {/* --- PREMIUM PROJECT SLIDER SECTION (Left Aligned & Dark Theme) --- */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        
        {/* Dynamic Header & Controls (Strictly Left Aligned) */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 w-full text-left">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-slate-900">
              Innovation <span className="text-ehc-indigo">Showcase</span>
            </h2>
            <p className="text-slate-500 font-mono text-sm uppercase tracking-widest mt-3">
              Explore {projects.length} Major Hardware Inventions
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button 
              onClick={() => paginate(-1)} 
              className="w-14 h-14 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-600 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-900/20"
              aria-label="Previous Project"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => paginate(1)} 
              className="w-14 h-14 rounded-full flex items-center justify-center bg-slate-900 border border-slate-900 text-white hover:bg-ehc-indigo hover:border-ehc-indigo transition-all shadow-lg focus:outline-none focus:ring-4 focus:ring-ehc-indigo/30"
              aria-label="Next Project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Sliding Viewport (Relative height prevents layout collapse during transitions) */}
        <div className="relative w-full h-[700px] sm:h-[800px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Individual Project Card - No White Background */}
              <div className="flex flex-col lg:flex-row bg-slate-900 rounded-3xl overflow-hidden h-full border border-slate-800">
                
                {/* Left: Image Container */}
                <div className="w-full lg:w-3/5 h-[45%] lg:h-full relative group overflow-hidden bg-black">
                  <img 
                    src={activeProject.img} 
                    alt={activeProject.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  {/* Floating Category Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                      <span className="text-white text-[10px] sm:text-xs font-black uppercase tracking-widest">
                        {activeProject.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Content Container (Dark Theme) */}
                <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center relative text-left">
                  {/* Faint Background Number */}
                  <span className="absolute top-4 right-6 text-slate-800/40 font-black text-6xl md:text-8xl -z-0 pointer-events-none select-none">
                    0{activeProject.id}
                  </span>

                  <div className="relative z-10 flex flex-col h-full justify-center">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
                      {activeProject.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                      {activeProject.desc}
                    </p>
                    
                    {/* Designed By Block */}
                    <div className="pt-6 border-t border-slate-800">
                      <p className="text-ehc-indigo text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Cpu size={14} /> Designed & Engineered By
                      </p>
                      <p className="text-slate-200 text-sm font-semibold leading-snug">
                        {activeProject.creators}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Pagination Dots */}
        <div className="flex items-center justify-start gap-3 mt-8 ml-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const diff = index - projectIndex;
                paginate(diff);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === projectIndex 
                  ? "w-10 h-2 bg-ehc-indigo" 
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Jump to project ${index + 1}`}
            />
          ))}
        </div>

      </section>

    </div>
  );
}