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

// 25 Unique items using your 25 distinct images
const initialImages = [
  { id: 1, src: img1, title: "SANKALP Fest", category: "Event", desc: "Showcasing the ultimate hardware showdown and competitive spirit at NIST University." },
  { id: 2, src: img2, title: "Day-2", category: "sankalp 2025", desc: "The second day of the SANKALP fest, Night photo shoot" },
  { id: 3, src: img3, title: "Fest Night", category: "sankalp 2024", desc: "Night Shoot" },
  { id: 4, src: img4, title: "Batch 22-23-24", category: "Group Photo", desc: "Never a dull moment when we're all together." },
  { id: 5, src: img5, title: "2k22", category: "batchPhoto", desc: "Rooftop laughs and good company." },
  { id: 6, src: img6, title: "Sankalp day-1", category: "Room", desc: "A thoughtfully curated sanctuary blending cozy textures, ambient lighting, and personal accents to create a stylish, inviting retreat." },
  { id: 7, src: img7, title: "Project ShowCase", category: "Project", desc: "Demonstrating a custom IoT-based healthcare device measuring real-time heartbeat data using an ECG sensor." },
  { id: 8, src: img8, title: "2k24", category: "batchPhoto", desc: "Power team assembled!" },
  { id: 9, src: img9, title: "Senior-Junior", category: "sankalp", desc: "From mentors to friends, building a future together one memory at a time." },
  { id: 10, src: img10, title: "2k23", category: "batchPhoto", desc: "This photo was taken right before things got chaotic." },
  { id: 11, src: img11, title: "Mentorship in Action", category: "sankalp", desc: "Cherished Moments & Shared Stories" },
  { id: 12, src: img12, title: "Club Bonding", category: "Meetup", desc: "The EHC family gathering for a group photo after a successful and busy semester." },
  { id: 13, src: img13, title: "Welcome Series", category: "Farewell", desc: "Honouring the legacy of our seniors as we celebrate the journey shared and the new adventures ahead." },
  { id: 14, src: img14, title: "Sensor Fusion 2020", category: "batchPhoto", desc: "Impact Frame" },
  { id: 15, src: img15, title: "The Powerhouse Crew", category: "Farewell", desc: "How lucky we are to have seniors who make saying goodbye so incredibly hard." },
  { id: 16, src: img16, title: "20-21-22", category: "Farewell", desc: "Grateful for this tribe and all the memories we've made. ❤️" },
  { id: 17, src: img17, title: "Electronics Expo", category: "Workshop 22", desc: "Nurturing minds and shaping the future together, one lesson at a time." },
  { id: 18, src: img18, title: "Batch 2k21", category: "sankalp", desc: "The dream team bringing ideas to life." },
  { id: 19, src: img19, title: "Batch 2k22", category: "sankalp", desc: "Surrounded by the people who make life fun. 👯‍♀️🔥" },
  { id: 20, src: img20, title: "Final Chapter: Class of 2020", category: "sankalp", desc: "From strangers to family, capturing our last moment together before the next adventure." },
  { id: 21, src: img21, title: "2021: End of an Era", category: "Farewell", desc: "Designing and printing custom chassis and mounts for robotics projects." },
  { id: 22, src: img22, title: "21-24", category: "groupPhoto", desc: "Chasing sunsets and good vibes with the best crew." },
  { id: 23, src: img23, title: "The Road Less Traveled: 2022", category: "groupPhoto", desc: " Roaming the globe, collecting stories, and sharing laughs." },
  { id: 24, src: img24, title: "Alumni Meet", category: "Farewell", desc: "We didn't realize we were making memories, we just knew we were having fun." },
  { id: 25, src: img25, title: "Legacy in Motion", category: "Farewell", desc: "Walked in as strangers, leaving as legends ready to conquer the world." }
];

export default function Gallery() {
  const [displayImages, setDisplayImages] = useState(initialImages);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Shuffles the array on every page load
    const shuffleArray = (array: typeof initialImages) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    setDisplayImages(shuffleArray(initialImages));

    // 2.5 second professional loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  const nextImage = () => setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % displayImages.length : null));
  const prevImage = () => setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + displayImages.length) % displayImages.length : null));

  return (
    <div className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-9xl font-black tracking-tighter leading-none mb-8 text-slate-900">
            THE <span className="text-gradient">ARCHIVE</span>
          </motion.h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-mono uppercase tracking-widest">
            Capturing the essence of innovation at NIST University.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center min-h-[40vh]"
            >
              <div aria-label="Loading..." role="status" className="flex items-center space-x-3">
                <svg className="h-8 w-8 animate-spin stroke-slate-500" viewBox="0 0 256 256">
                  <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                  <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                  <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                  <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                  <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                  <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                  <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                  <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                </svg>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-widest font-stencil">Loading Assets...</span>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="gallery"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {displayImages.map((image, index) => (
                <motion.div 
                  key={image.id} 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true, margin: "100px" }} 
                  transition={{ delay: (index % 4) * 0.1, duration: 0.4 }} 
                  onClick={() => openLightbox(index)} 
                  className={`relative group cursor-pointer overflow-hidden rounded-2xl border-[6px] border-white/60 group-hover:border-ehc-indigo/30 transition-colors duration-500 shadow-sm min-h-[250px] transform-gpu ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    decoding="async"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] transform-gpu will-change-transform" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10">
                    <span className="text-ehc-light text-[10px] font-black tracking-widest uppercase mb-2">{image.category}</span>
                    <h3 className="text-2xl font-black tracking-tighter uppercase text-white">{image.title}</h3>
                    <div className="mt-4 flex items-center text-ehc-rose text-xs font-bold uppercase tracking-widest">
                      <Maximize2 size={14} className="mr-2" /> View Full
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && !isLoading && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
          >
            <button onClick={closeLightbox} className="absolute top-8 right-8 text-slate-500 hover:text-slate-900 transition-colors z-[110]">
              <X size={32} />
            </button>
            <button onClick={prevImage} className="absolute left-4 md:left-8 text-slate-500 hover:text-slate-900 transition-colors z-[110]">
              <ChevronLeft size={48} />
            </button>
            <button onClick={nextImage} className="absolute right-4 md:right-8 text-slate-500 hover:text-slate-900 transition-colors z-[110]">
              <ChevronRight size={48} />
            </button>

            <motion.div 
              key={displayImages[selectedImageIndex].id} 
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
                <span className="text-ehc-indigo text-xs font-black tracking-widest uppercase mb-2 block">
                  {displayImages[selectedImageIndex].category}
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-slate-900">
                  {displayImages[selectedImageIndex].title}
                </h2>
                <p className="text-slate-600 mt-4 text-sm md:text-base leading-relaxed">
                  {displayImages[selectedImageIndex].desc}
                </p>
                <p className="text-slate-400 mt-4 font-mono text-xs uppercase tracking-widest">
                  Image {selectedImageIndex + 1} of {displayImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}