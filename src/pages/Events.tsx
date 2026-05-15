import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Zap, Cpu, Gamepad2, Globe, Lock, ChevronDown, ChevronUp } from 'lucide-react';

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
    formUrl: "", 
    steps: [
      "Abstract Submission: Present your core idea and approach.",
      "Idea Pitching: Pitch your hardware solution to the judges.",
      "Prototype Demonstration: Show a working model or simulation.",
      "Q&A and Evaluation: Answer technical questions from the jury."
    ]
  },
  {
    id: 2, 
    title: "Poster Presentation", 
    subtitle: "Visual Innovation", 
    tagline: "Design the future of green tech.",
    date: "Nov 7th, 2025", 
    time: "2nd Half", 
    location: "Galleria",
    desc: "Create impactful posters outlining your approach to the 'Green Electronics' theme.",
    img: posterImg, 
    category: "Design", 
    icon: <Globe className="text-ehc-indigo" size={14} />,
    formUrl: "", 
    steps: [
      "Topic Selection: Choose a specific area within Green Electronics.",
      "Design & Layout: Create an engaging and informative A1 poster.",
      "Exhibition: Display your poster to attendees and judges.",
      "Briefing: Give a 2-minute pitch explaining your visual data."
    ]
  },
  {
    id: 3, 
    title: "Treasure Hunt", 
    subtitle: "Tech Quest", 
    tagline: "Decode, Search, and Conquer!",
    date: "Nov 8th, 2025", 
    time: "1st Half", 
    location: "Campus Wide",
    desc: "A thrilling tech-based treasure hunt where hardware clues lead to the ultimate prize.",
    img: huntImg, 
    category: "Competition", 
    icon: <Gamepad2 className="text-ehc-indigo" size={14} />,
    formUrl: "",
    steps: [
      "Team Registration: Form a squad of 3-4 members.",
      "The First Cipher: Decode an Arduino serial output to find the first location.",
      "Physical Challenges: Complete circuit-building tasks at checkpoints.",
      "The Final Relay: Race to assemble the master circuit to stop the timer."
    ]
  },
  {
    id: 4, 
    title: "Circuit-a-Thon", 
    subtitle: "Hardware Hackathon", 
    tagline: "Build, debug, and innovate.",
    date: "Nov 8th, 2025", 
    time: "2nd Half", 
    location: "VLSI Lab",
    desc: "A hands-on competition testing your circuit design, debugging, and breadboarding skills under pressure.",
    img: circuitImg, 
    category: "Hackathon", 
    icon: <Cpu className="text-ehc-indigo" size={14} />,
    formUrl: "",
    steps: [
      "Component Drafting: Select components from the provided inventory.",
      "Circuit Design: Sketch the logic and schematic.",
      "Breadboard Assembly: Wire the physical circuit.",
      "Debugging & Testing: Ensure the output meets the problem statement."
    ]
  }
];

export default function Events() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-9xl font-black tracking-tighter leading-none mb-8 text-slate-900">
            SANKALP <span className="text-gradient">FEST</span>
          </motion.h1>
          <p className="font-comfortaa text-slate-600 max-w-2xl mx-auto text-lg font-bold uppercase tracking-widest">
            The Ultimate Hardware Symposium.
          </p>
        </div>

        {/* Event List Container - Widened to max-w-6xl for horizontal cards */}
        <div className="flex flex-col gap-12 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div 
              key={event.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              // Changed to flex-col (mobile) AND lg:flex-row (desktop side-by-side)
              className="bento-card bg-white/60 p-0 overflow-hidden flex flex-col lg:flex-row hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* LEFT SIDE: Image Container */}
              <div className="relative w-full lg:w-5/12 h-64 sm:h-80 lg:h-auto shrink-0 bg-slate-900 overflow-hidden">
                {/* Image uses absolute inset-0 to perfectly stretch and cover the container height */}
                <img 
                  src={event.img} 
                  alt={event.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" 
                />
                {/* Floating Category Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 shadow-sm z-10">
                  {event.icon}
                  <span className="font-comfortaa text-xs font-bold tracking-widest uppercase text-slate-800">{event.category}</span>
                </div>
              </div>

              {/* RIGHT SIDE: Event Details Container */}
              <div className="w-full lg:w-7/12 p-8 md:p-12 flex flex-col">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-slate-900 mb-2">{event.title}</h2>
                  <h3 className="font-comfortaa text-ehc-indigo font-bold tracking-widest uppercase text-sm">{event.subtitle}</h3>
                </div>
                
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 flex-grow font-medium">
                  {event.desc}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-100">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Calendar className="text-ehc-indigo" size={18} />
                    <span className="text-sm font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Clock className="text-ehc-indigo" size={18} />
                    <span className="text-sm font-semibold">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600 col-span-2 md:col-span-2">
                    <MapPin className="text-ehc-indigo" size={18} />
                    <span className="text-sm font-semibold">{event.location}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                  {event.formUrl ? (
                    <a 
                      href={event.formUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-comfortaa w-full sm:w-auto flex-1 py-4 bg-ehc-indigo text-white font-bold tracking-widest uppercase rounded-full hover:bg-slate-900 transition-colors text-center text-sm shadow-md"
                    >
                      Register Now
                    </a>
                  ) : (
                    <button disabled className="font-comfortaa w-full sm:w-auto flex-1 py-4 bg-slate-100 text-slate-400 font-bold tracking-widest uppercase rounded-full cursor-not-allowed text-center text-sm flex items-center justify-center gap-2">
                      <Lock size={14} /> Registration Closed
                    </button>
                  )}
                  
                  <button 
                    onClick={() => toggleExpand(event.id)}
                    className="font-comfortaa w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold tracking-widest uppercase rounded-full hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    Details {expandedId === event.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>

                {/* Expandable Execution Plan */}
                <AnimatePresence>
                  {expandedId === event.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-slate-200 mt-8"
                    >
                      <div className="pt-8">
                        <h4 className="font-comfortaa text-sm font-bold tracking-widest uppercase text-ehc-indigo mb-6">Event Execution Plan</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {event.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex space-x-4 items-start">
                              <div className="font-comfortaa w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-md">
                                {stepIndex + 1}
                              </div>
                              <p className="text-sm text-slate-700 leading-relaxed font-semibold mt-1">
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