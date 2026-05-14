import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

// Exact imports matching the specific uppercase/lowercase extensions from your screenshot
import img1 from '../assets/gallery/img1.JPG';
import img2 from '../assets/gallery/img2.JPG';
import img3 from '../assets/gallery/img3.jpeg';
import img4 from '../assets/gallery/img4.JPG';
import img5 from '../assets/gallery/img5.JPG';
import img6 from '../assets/gallery/img6.JPG';
import img7 from '../assets/gallery/img7.JPG';
import img8 from '../assets/gallery/img8.jpg'; 
import img9 from '../assets/gallery/img9.jpg'; 
import img10 from '../assets/gallery/img10.jpg'; 
import img11 from '../assets/gallery/img11.JPG';
import img12 from '../assets/gallery/img12.JPG';
import img13 from '../assets/gallery/img13.JPG';
import img14 from '../assets/gallery/img14.JPG';
import img15 from '../assets/gallery/img15.JPG';
import img16 from '../assets/gallery/img16.JPG';
import img17 from '../assets/gallery/img17.jpg';
import img18 from '../assets/gallery/img18.jpg';
import img19 from '../assets/gallery/img19.jpg';
import img20 from '../assets/gallery/img20.jpg';
import img21 from '../assets/gallery/img21.jpg';
import img22 from '../assets/gallery/img22.jpg';
import img23 from '../assets/gallery/img23.jpg';
import img24 from '../assets/gallery/img24.JPG';
import img25 from '../assets/gallery/img25.JPG';

const galleryImages = [
  { src: img1, category: "Hardware", title: "Circuit Build", desc: "Members assembling a complex breadboard circuit during our weekend hackathon." },
  { src: img2, category: "Event", title: "Tech Symposium", desc: "Keynote speech at the annual NIST Tech Symposium." },
  { src: img3, category: "Team", title: "Core Committee", desc: "The EHC Core Committee brainstorming session." },
  { src: img4, category: "Robotics", title: "Line Follower", desc: "Testing the newly built line follower robot." },
  { src: img5, category: "Event", title: "Workshop", desc: "Hands-on soldering workshop for first-year students." },
  { src: img6, category: "Hardware", title: "IoT Sensor", desc: "Calibrating the new IoT weather station module." },
  { src: img7, category: "Team", title: "Project Demo", desc: "Presenting the final year IoT project to the faculty." },
  { src: img8, category: "Event", title: "SANKALP Fest", desc: "Crowd gathering for the main event at SANKALP." },
  { src: img9, category: "Robotics", title: "Drone Assembly", desc: "Fine-tuning the quadcopter ESCs." },
  { src: img10, category: "Hardware", title: "PCB Design", desc: "Reviewing the custom PCB layout before printing." },
  { src: img11, category: "Event", title: "Award Ceremony", desc: "Winners of the Circuit-a-Thon receiving their prizes." },
  { src: img12, category: "Team", title: "Late Night Code", desc: "The software team fixing bugs at 2 AM." },
  { src: img13, category: "Hardware", title: "Raspberry Pi", desc: "Setting up the Raspberry Pi server for home automation." },
  { src: img14, category: "Event", title: "Guest Lecture", desc: "Industry expert discussing the future of embedded systems." },
  { src: img15, category: "Robotics", title: "Arm Calib", desc: "Programming the 6-axis robotic arm." },
  { src: img16, category: "Team", title: "Group Photo", desc: "EHC members at the end of the semester." },
  { src: img17, category: "Hardware", title: "Soldering", desc: "Precision soldering on an SMD board." },
  { src: img18, category: "Event", title: "Exhibition", desc: "Displaying our best projects at the college exhibition." },
  { src: img19, category: "Robotics", title: "Agrobot Test", desc: "Field testing the agricultural automation bot." },
  { src: img20, category: "Team", title: "Discussion", desc: "Planning the next major flagship event." },
  { src: img21, category: "Hardware", title: "Microcontroller", desc: "Flashing firmware onto the ESP32." },
  { src: img22, category: "Event", title: "Registration", desc: "Students lining up to register for the workshop." },
  { src: img23, category: "Robotics", title: "Chassis Build", desc: "Assembling the metal chassis for the combat bot." },
  { src: img24, category: "Team", title: "Mentorship", desc: "Seniors guiding juniors through complex schematics." },
  { src: img25, category: "Hardware", title: "Oscilloscope", desc: "Analyzing waveforms during circuit debugging." },
];

const categories = ["All", "Hardware", "Event", "Team", "Robotics"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayImages, setDisplayImages] = useState(galleryImages);

  useEffect(() => {
    const shuffleArray = (array: any[]) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    setDisplayImages(shuffleArray(galleryImages));

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const filteredImages = activeCategory === "All" 
    ? displayImages 
    : displayImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % displayImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + displayImages.length) % displayImages.length);
    }
  };

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-16 h-16 border-4 border-ehc-indigo border-t-transparent rounded-full mb-8" />
        <motion.h2 animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="font-comfortaa text-white text-2xl font-bold tracking-[0.2em] uppercase">
          Loading Assets
        </motion.h2>
        <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest font-semibold">Initializing Memory Core...</p>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-9xl font-black tracking-tighter leading-none mb-8 text-slate-900">
            MEMORY <span className="text-gradient">CORE</span>
          </motion.h1>
          <p className="font-comfortaa text-slate-600 max-w-2xl mx-auto text-lg font-bold uppercase tracking-widest">
            Visual logs of our journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-comfortaa px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-ehc-indigo text-white shadow-md scale-105' 
                  : 'bg-white/60 text-slate-600 hover:bg-white hover:shadow-sm border border-white/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((image, index) => {
              const originalIndex = displayImages.findIndex(img => img.src === image.src);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  key={image.src}
                  className="relative group cursor-pointer break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all border-[6px] border-white/60 hover:border-ehc-indigo/30"
                  onClick={() => openLightbox(originalIndex)}
                >
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    loading="lazy" 
                    className="w-full h-auto object-cover transform-gpu transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="font-comfortaa text-ehc-indigo text-[10px] font-bold tracking-widest uppercase mb-2 block">{image.category}</span>
                      <h3 className="text-white font-black uppercase tracking-tighter text-xl mb-1">{image.title}</h3>
                      <p className="text-slate-300 text-xs line-clamp-2 font-medium">{image.desc}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={14} />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
              onClick={closeLightbox}
            >
              <button 
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50"
                onClick={closeLightbox}
              >
                <X size={24} />
              </button>

              <button 
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50"
                onClick={prevImage}
              >
                <ChevronLeft size={32} />
              </button>

              <button 
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50"
                onClick={nextImage}
              >
                <ChevronRight size={32} />
              </button>

              <motion.div 
                key={selectedImageIndex} 
                initial={{ opacity: 0, scale: 0.9, y: 20 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.9, y: 20 }} 
                className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center transform-gpu"
              >
                <img 
                  src={displayImages[selectedImageIndex].src} 
                  alt={displayImages[selectedImageIndex].title} 
                  decoding="async"
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border-[6px] border-white/60 transform-gpu" 
                />
                <div className="mt-8 text-center max-w-2xl px-4">
                  <span className="font-comfortaa text-ehc-indigo text-xs font-bold tracking-widest uppercase mb-2 block">
                    {displayImages[selectedImageIndex].category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white">
                    {displayImages[selectedImageIndex].title}
                  </h2>
                  <p className="text-slate-300 mt-4 text-sm md:text-base leading-relaxed font-medium">
                    {displayImages[selectedImageIndex].desc}
                  </p>
                  <p className="font-comfortaa text-slate-500 mt-4 text-xs uppercase tracking-widest font-bold">
                    Image {selectedImageIndex + 1} of {displayImages.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}