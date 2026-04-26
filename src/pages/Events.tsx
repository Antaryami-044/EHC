import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Zap, Cpu, Gamepad2, Globe, Lock, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

import sampratyaImg from '../assets/sampratya prastuti.jpeg';
import posterImg from '../assets/idea presentation.JPG';
import huntImg from '../assets/new hunt event.jpeg';
import circuitImg from '../assets/circuit-a-thon.jpeg';

const events = [
  {
    id: 1, 
    title: "Sampratya Prastuti", 
    subtitle: "Idea Presentation", 
    tagline: "Ignite your passion for electronics!",
    date: "Nov 7th, 2025", 
    time: "1st Half", 
    location: "The Atrium",
    desc: "Present your innovative ideas and solutions for environmental monitoring.",
    img: sampratyaImg, 
    category: "Idea Presentation", 
    icon: <Zap className="text-ehc-indigo" size={14} />,
    formUrl: "", // Add your Google Form link here to open registrations!
    steps: [
      "Abstract Submission: Present your core idea and approach.",
      "Idea Pitching: Pitch your hardware solution to the judges.",
      "Prototype Demonstration: Show a working model or simulation.",
      "Q&A and Evaluation: Answer technical questions from the jury."
    ]
  },
  {
    id: 2, 
    title: "Technical Poster", 
    subtitle: "Visual Innovation", 
    tagline: "Visually communicate your innovations!",
    date: "Nov 6th, 2025", 
    time: "2nd Half", 
    location: "The Atrium",
    desc: "Present your research and ideas through compelling visual posters. Categories include Healthcare, Education, Renewable Energy, and Innovation.",
    img: posterImg, 
    category: "Visual Innovation", 
    icon: <Globe className="text-indigo-500" size={14} />,
    formUrl: "", 
    steps: [
      "Topic Selection: Choose a relevant electronics/IoT domain.",
      "Poster Design: Create a visually compelling technical poster.",
      "Exhibition: Display your poster for attendees and judges.",
      "Presentation: Briefly explain your concept and answer queries."
    ]
  },
  {
    id: 3, 
    title: "Hardware Hunt", 
    subtitle: "Interactive Tech Games", 
    tagline: "Test your reflexes and logic!",
    date: "Nov 6th & 7th, 2025", 
    time: "Round 1 & 2", 
    location: "The Atrium",
    desc: "Play exciting new games designed entirely by our team using different electronics and components! Experience custom-built hardware challenges like fast-reaction games using buttons and LEDs.",
    img: huntImg, 
    category: "Interactive Hardware", 
    icon: <Gamepad2 className="text-indigo-500" size={14} />,
    formUrl: "", 
    steps: [
      "Round 1 (Nov 6): Identify electronic components and solve basic clues.",
      "Logic Puzzles: Complete rapid-fire technical challenges.",
      "Round 2 (Nov 7): Fast-reaction LED and button gameplay.",
      "Final Execution: Highest scorers win the ultimate Hardware Hunt."
    ]
  },
  {
    id: 4, 
    title: "Circuit-A-Thon", 
    subtitle: "Design Challenge", 
    tagline: "Spark Your Creativity!",
    date: "Nov 7th, 2025", 
    time: "1st Half", 
    location: "The Atrium",
    desc: "A thrilling event on electronic circuit design. Create a functioning circuit using the least number of wires! Test your efficiency and logic.",
    img: circuitImg, 
    category: "Design Challenge", 
    icon: <Cpu className="text-indigo-400" size={14} />,
    formUrl: "", 
    steps: [
      "Problem Reveal: Receive your specific circuit problem statement.",
      "Circuit Simulation: Draft and verify your logic on paper/software.",
      "Hardware Assembly: Build the functioning circuit using minimal wires.",
      "Testing & Optimization: Demonstrate the working output to judges."
    ]
  }
];

export default function Events() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleDetails = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="inline-block px-4 py-1 bg-white/60 rounded-full shadow-sm text-ehc-indigo text-[10px] font-black tracking-[0.3em] uppercase mb-6 border border-white">Flagship Fest 2025</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-9xl font-black tracking-tighter leading-none mb-8 text-slate-900">SANKALP <span className="text-gradient">FEST</span></motion.h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-mono uppercase tracking-widest">The ultimate hardware showdown at NIST University.</p>
        </div>

        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div key={event.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group bento-card overflow-hidden p-0 flex flex-col lg:flex-row bg-white/50 relative">
              
              {/* Image Section */}
              <div className="lg:w-1/3 relative p-4 flex flex-col">
                <div className="w-full h-full min-h-[250px] relative overflow-hidden rounded-2xl border-[6px] border-white/60 group-hover:border-ehc-indigo/30 transition-colors duration-500 shadow-sm">
                  <img 
                    src={event.img} 
                    alt={event.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.02] group-hover:opacity-100" 
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-white/90 backdrop-blur-md rounded-full border border-white/50 shadow-sm px-3 py-1.5 flex items-center space-x-2">
                      {event.icon}
                      <span className="text-[10px] font-black tracking-widest uppercase text-slate-800">{event.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-slate-900 group-hover:text-ehc-indigo transition-colors">{event.title}</h2>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">{event.desc}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="flex items-center space-x-3 text-slate-500">
                      <Calendar size={18} className="text-ehc-indigo" />
                      <span className="text-xs font-mono uppercase tracking-wider">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-500">
                      <Clock size={18} className="text-indigo-400" />
                      <span className="text-xs font-mono uppercase tracking-wider">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-500">
                      <MapPin size={18} className="text-indigo-500" />
                      <span className="text-xs font-mono uppercase tracking-wider">{event.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-auto">
                  {event.formUrl ? (
                    <a 
                      href={event.formUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-stencil px-8 py-4 bg-ehc-indigo text-white font-black tracking-widest uppercase rounded-full hover:bg-slate-900 transition-all flex items-center space-x-2 group/btn shadow-md"
                    >
                      <span>Register Now</span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <button disabled className="font-stencil px-8 py-4 bg-slate-200 text-slate-500 font-black tracking-widest uppercase rounded-full flex items-center space-x-2 cursor-not-allowed shadow-sm border border-slate-300">
                      <Lock size={16} />
                      <span>Closed</span>
                    </button>
                  )}
                  
                  {/* Details Button - Added cursor-pointer */}
                  <button 
                    onClick={() => toggleDetails(event.id)} 
                    className={cn(
                      "cursor-pointer font-stencil px-8 py-4 border font-black tracking-widest uppercase rounded-full transition-all flex items-center space-x-2 shadow-sm",
                      expandedId === event.id ? "bg-slate-900 text-white border-slate-900" : "bg-white/60 text-slate-800 border-white hover:bg-white"
                    )}
                  >
                    <span>{expandedId === event.id ? 'Close Details' : 'Details'}</span>
                    {expandedId === event.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>

                {/* Event Execution Plan */}
                <AnimatePresence>
                  {expandedId === event.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-slate-300/50 mt-8"
                    >
                      <div className="pt-8">
                        <h4 className="text-sm font-black tracking-widest uppercase text-ehc-indigo mb-6">Event Execution Plan</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {event.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex space-x-4 items-start">
                              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black shrink-0 shadow-md">
                                {stepIndex + 1}
                              </div>
                              <p className="text-sm text-slate-700 leading-relaxed font-medium mt-1">
                                {step}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}