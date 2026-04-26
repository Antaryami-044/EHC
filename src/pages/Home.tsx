import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Zap, Globe, ChevronLeft, ChevronRight, Play, Pause, Clock } from 'lucide-react';
import React, { useState, useEffect, useCallback } from 'react';
import ehcLogo from '../assets/logo-removebg-preview.png';
import cktImg from '../assets/home-img.jpg';

// --- DUMMY PROJECT DATA (Top 8 Projects) ---
const projects = [
  {
    id: 1,
    title: "Smart ECG Cloud Monitor",
    category: "IoT & Healthcare",
    desc: "Currently in development, this IoT-based healthcare device measures heartbeats with high precision using an ECG sensor. It actively uploads the real-time heartbeat rate graph to the cloud. Set for final deployment in 2 months.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Collaborative Code Hub",
    category: "Full-Stack Software",
    desc: "A highly secure, full-stack collaborative application engineered to manage and share hardware code snippets in real-time among club members during intense hackathons.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Invoice-QC Automation",
    category: "Automation Scripting",
    desc: "A powerful backend service that validates complex data structures. It successfully reduced manual data verification time by approximately 40% for our club's component procurement records.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Autonomous Quadcopter",
    category: "Robotics",
    desc: "A custom-built drone featuring an integrated AI pipeline. It utilizes advanced gyroscope fusion and obstacle avoidance algorithms to navigate complex indoor environments autonomously.",
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "AI DAG Pipeline Builder",
    category: "System Architecture",
    desc: "An interactive architectural tool built for our members to visually map and validate Directed Acyclic Graphs (DAGs) before deploying logic to microcontrollers.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Smart Greenhouse",
    category: "Embedded Systems",
    desc: "An automated climate control module that monitors soil moisture, ambient humidity, and temperature, triggering localized water pumps using relay logic.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "RFID Access Grid",
    category: "Security Infrastructure",
    desc: "A centralized, database-backed RFID scanner system designed to manage lab access for EHC members, tracking entry and exit logs via a secure local server.",
    img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Algorithmic Sensor Node",
    category: "Data Analytics",
    desc: "A high-speed sensor node utilizing edge-computing to backtest and analyze environmental data streams directly on the chip before transmitting compressed packets.",
    img: "https://images.unsplash.com/photo-1517077304055-6e89abf0ceb6?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function Home() {
  // --- CAROUSEL STATE ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Carousel Controls
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Autoplay Logic (Resets timer if user manually clicks next/prev)
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds delay per slide
    
    return () => clearInterval(timer);
  }, [isPlaying, currentIndex, handleNext]);

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

      {/* --- CUSTOM INDEPENDENT PROJECT CAROUSEL SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        
        {/* Header and Autoplay Indicator */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-slate-900">
            Innovation <span className="text-ehc-indigo">Showcase</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 mt-4 text-slate-500 font-mono text-xs uppercase tracking-widest">
            <Clock size={14} className={isPlaying ? "animate-pulse text-ehc-indigo" : ""} />
            <span>Autoplay {isPlaying ? "On" : "Paused"}</span>
          </div>
        </div>

        {/* Carousel Root Container */}
        <div className="max-w-5xl mx-auto bg-white/60 border border-white rounded-[2rem] shadow-sm p-4 md:p-8">
          
          {/* Sliding Track Viewport */}
          <div className="overflow-hidden w-full relative rounded-2xl bg-white shadow-inner">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 flex-none flex flex-col md:flex-row">
                  
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 h-64 md:h-[400px] relative">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-ehc-indigo shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-slate-50/50">
                    <div className="text-slate-400 font-mono font-bold text-sm mb-4">
                      Project {String(project.id).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black tracking-tighter uppercase text-slate-900 mb-4 leading-none">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                      {project.desc}
                    </p>
                  </div>

                </div>
              ))}
            </motion.div>
          </div>

          {/* Custom Carousel Controls (Ghost Buttons style) */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={handlePrev} 
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>

            <button 
              onClick={togglePlayPause} 
              className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-ehc-indigo transition-colors shadow-sm"
              aria-label="Toggle Autoplay"
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
            </button>

            <button 
              onClick={handleNext} 
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? "w-6 h-2 bg-ehc-indigo" 
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