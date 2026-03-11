import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://images.pexels.com/photos/3912572/pexels-photo-3912572.jpeg",
  "https://images.pexels.com/photos/32427370/pexels-photo-32427370.jpeg",
  "https://images.pexels.com/photos/8686319/pexels-photo-8686319.jpeg",
  "https://images.pexels.com/photos/6648493/pexels-photo-6648493.jpeg",
  "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFrZXVwfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1611826585949-b0ccabd2c1a4?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D"
];

const breakpoints = [
  0, 0.05,     // Layout 0: Hero
  0.15, 0.22,  // Layout 1: About
  0.32, 0.39,  // Layout 2: Portfolio
  0.49, 0.56,  // Layout 3: Services
  0.66, 0.73,  // Layout 4: Studio
  0.85, 1      // Layout 5: Booking
];

const layouts = [
  // Layout 0: Hero
  [
    { x: "-35vw", y: "-25vh", rotate: -15, scale: 1.1 },
    { x: "35vw", y: "-20vh", rotate: 10, scale: 1.1 },
    { x: "-40vw", y: "15vh", rotate: -5, scale: 1.1 },
    { x: "38vw", y: "15vh", rotate: 20, scale: 1.1 },
    { x: "-25vw", y: "35vh", rotate: 15, scale: 1.1 },
    { x: "25vw", y: "35vh", rotate: -10, scale: 1.1 }
  ],
  // Layout 1: About
  [
    { x: "13vw", y: "-18vh", rotate: -2, scale: 0.9 },
    { x: "25vw", y: "-18vh", rotate: 2, scale: 0.9 },
    { x: "37vw", y: "-18vh", rotate: -1, scale: 0.9 },
    { x: "13vw", y: "18vh", rotate: 1, scale: 0.9 },
    { x: "25vw", y: "18vh", rotate: -2, scale: 0.9 },
    { x: "37vw", y: "18vh", rotate: 2, scale: 0.9 }
  ],
  // Layout 2: Portfolio
  [
    { x: "-25vw", y: "-10vh", rotate: -10, scale: 1 },
    { x: "-15vw", y: "-10vh", rotate: -5, scale: 1 },
    { x: "-5vw", y: "-10vh", rotate: 0, scale: 1 },
    { x: "5vw", y: "-10vh", rotate: 5, scale: 1 },
    { x: "15vw", y: "-10vh", rotate: 10, scale: 1 },
    { x: "25vw", y: "-10vh", rotate: 15, scale: 1 }
  ],
  // Layout 3: Services
  [
    { x: "-35vw", y: "25vh", rotate: -30, scale: 0.9 },
    { x: "-21vw", y: "10vh", rotate: -15, scale: 0.9 },
    { x: "-7vw", y: "0vh", rotate: -5, scale: 0.9 },
    { x: "7vw", y: "0vh", rotate: 5, scale: 0.9 },
    { x: "21vw", y: "10vh", rotate: 15, scale: 0.9 },
    { x: "35vw", y: "25vh", rotate: 30, scale: 0.9 }
  ],
  // Layout 4: Studio (Pushed to edges)
  [
    { x: "-42vw", y: "-35vh", rotate: -20, scale: 0.8 },
    { x: "42vw", y: "-35vh", rotate: 20, scale: 0.8 },
    { x: "-45vw", y: "0vh", rotate: -10, scale: 0.8 },
    { x: "45vw", y: "0vh", rotate: 10, scale: 0.8 },
    { x: "-42vw", y: "35vh", rotate: 20, scale: 0.8 },
    { x: "42vw", y: "35vh", rotate: -20, scale: 0.8 }
  ],
  // Layout 5: Booking (Framing the form)
  [
    { x: "-30vw", y: "-40vh", rotate: -15, scale: 1 },
    { x: "30vw", y: "-40vh", rotate: 15, scale: 1 },
    { x: "-40vw", y: "10vh", rotate: -5, scale: 1.1 },
    { x: "40vw", y: "10vh", rotate: 5, scale: 1.1 },
    { x: "-25vw", y: "40vh", rotate: 15, scale: 0.9 },
    { x: "25vw", y: "40vh", rotate: -15, scale: 0.9 }
  ]
];

const FormationImage = ({ index, progress, src }: { index: number, progress: any, src: string }) => {
  const xValues = [
    layouts[0][index].x, layouts[0][index].x,
    layouts[1][index].x, layouts[1][index].x,
    layouts[2][index].x, layouts[2][index].x,
    layouts[3][index].x, layouts[3][index].x,
    layouts[4][index].x, layouts[4][index].x,
    layouts[5][index].x, layouts[5][index].x
  ];
  const yValues = [
    layouts[0][index].y, layouts[0][index].y,
    layouts[1][index].y, layouts[1][index].y,
    layouts[2][index].y, layouts[2][index].y,
    layouts[3][index].y, layouts[3][index].y,
    layouts[4][index].y, layouts[4][index].y,
    layouts[5][index].y, layouts[5][index].y
  ];
  const rotateValues = [
    layouts[0][index].rotate, layouts[0][index].rotate,
    layouts[1][index].rotate, layouts[1][index].rotate,
    layouts[2][index].rotate, layouts[2][index].rotate,
    layouts[3][index].rotate, layouts[3][index].rotate,
    layouts[4][index].rotate, layouts[4][index].rotate,
    layouts[5][index].rotate, layouts[5][index].rotate
  ];
  const scaleValues = [
    layouts[0][index].scale, layouts[0][index].scale,
    layouts[1][index].scale, layouts[1][index].scale,
    layouts[2][index].scale, layouts[2][index].scale,
    layouts[3][index].scale, layouts[3][index].scale,
    layouts[4][index].scale, layouts[4][index].scale,
    layouts[5][index].scale, layouts[5][index].scale
  ];

  const x = useTransform(progress, breakpoints, xValues);
  const y = useTransform(progress, breakpoints, yValues);
  const rotate = useTransform(progress, breakpoints, rotateValues);
  const scale = useTransform(progress, breakpoints, scaleValues);

  return (
    <div className="absolute top-1/2 left-1/2 w-[20vw] h-[28vw] min-w-[150px] min-h-[210px] max-w-[250px] max-h-[350px] -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className="w-full h-full rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
        style={{ x, y, rotate, scale }}
      >
        <img src={src} alt="" className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};

export default function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const handlePrevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  
  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const formattedDate = `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(formattedDate);
    setIsCalendarOpen(false);
  };

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };
  
  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM'
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative w-full bg-[#EAE6E0] text-[#2C2A28] font-sans">
      {/* Fixed Image Container */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {images.map((src, i) => (
          <FormationImage key={i} index={i} progress={smoothProgress} src={src} />
        ))}
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 w-full">
        {/* Section 1: Hero */}
        <section className="h-[100vh] flex flex-col items-center justify-center pointer-events-none">
          <div className="text-center bg-[#EAE6E0]/60 backdrop-blur-sm p-8 rounded-3xl pointer-events-auto">
            <h1 className="text-6xl md:text-8xl font-serif mb-4 tracking-tighter">enxhithemuaa</h1>
            <p className="text-xl md:text-2xl tracking-[0.2em] uppercase font-light mb-4">Make-up artist</p>
            <p className="text-sm md:text-base tracking-widest uppercase font-medium opacity-80">📍London Pro Makeup & Hair Artist | Bridal</p>
          </div>
        </section>

        {/* Section 2: About */}
        <section className="h-[100vh] flex items-center justify-start px-8 md:px-24 pointer-events-none">
          <div className="max-w-xl bg-[#EAE6E0]/80 backdrop-blur-sm p-8 rounded-3xl pointer-events-auto">
            <h2 className="text-5xl md:text-7xl font-serif mb-6">About Me</h2>
            <p className="text-lg md:text-xl leading-relaxed font-light">
              With over a decade of experience in the beauty industry, I specialize in creating flawless, radiant looks for weddings, editorials, and special events. My philosophy is to enhance your natural beauty, not mask it. Every face is a unique canvas.
            </p>
          </div>
        </section>

        {/* Section 3: Portfolio */}
        <section className="h-[100vh] flex items-end justify-center pb-24 pointer-events-none">
          <div className="text-center max-w-3xl bg-[#EAE6E0]/80 backdrop-blur-sm p-8 rounded-3xl pointer-events-auto">
            <h2 className="text-5xl md:text-7xl font-serif mb-6">Portfolio</h2>
            <p className="text-lg md:text-xl leading-relaxed font-light">
              A curated selection of my favorite works. From avant-garde editorial shoots to timeless bridal elegance, each look is tailored to the individual, capturing their essence in the most beautiful light.
            </p>
          </div>
        </section>

        {/* Section 4: Services */}
        <section className="h-[100vh] flex items-start justify-center pt-32 pointer-events-none">
          <div className="text-center max-w-2xl bg-[#EAE6E0]/80 backdrop-blur-sm p-8 rounded-3xl pointer-events-auto">
            <h2 className="text-5xl md:text-7xl font-serif mb-8">Services</h2>
            <ul className="text-xl md:text-2xl space-y-6 font-light">
              <li className="flex items-center justify-center gap-4">
                <span className="w-12 h-[1px] bg-[#2C2A28]"></span>
                Bridal Makeup & Hair
                <span className="w-12 h-[1px] bg-[#2C2A28]"></span>
              </li>
              <li className="flex items-center justify-center gap-4">
                <span className="w-12 h-[1px] bg-[#2C2A28]"></span>
                Editorial & Fashion
                <span className="w-12 h-[1px] bg-[#2C2A28]"></span>
              </li>
              <li className="flex items-center justify-center gap-4">
                <span className="w-12 h-[1px] bg-[#2C2A28]"></span>
                Special Events
                <span className="w-12 h-[1px] bg-[#2C2A28]"></span>
              </li>
              <li className="flex items-center justify-center gap-4">
                <span className="w-12 h-[1px] bg-[#2C2A28]"></span>
                One-on-One Masterclasses
                <span className="w-12 h-[1px] bg-[#2C2A28]"></span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Our Studio */}
        <section className="min-h-[100vh] flex flex-col items-center justify-center py-24 px-4 pointer-events-none">
          <div className="text-center max-w-5xl bg-[#EAE6E0]/95 backdrop-blur-md p-8 md:p-16 rounded-[3rem] pointer-events-auto shadow-xl">
            <h2 className="text-5xl md:text-7xl font-serif mb-12">Our Studio</h2>
            <div className="w-full">
              <img src="https://images.unsplash.com/photo-1744095407400-aa337918bbb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1ha2V1cCUyMHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D" alt="Studio Details" className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl shadow-md" />
            </div>
            <p className="text-lg md:text-xl leading-relaxed font-light mt-12 max-w-3xl mx-auto">
              Step into a sanctuary of beauty. Our London studio is designed to provide a relaxing, luxurious experience while we craft your perfect look.
            </p>
          </div>
        </section>

        {/* Section 6: Book an Appointment */}
        <section className="min-h-[100vh] flex items-center justify-center px-4 py-24 pointer-events-none">
          <div className="w-full max-w-4xl bg-[#2C2A28]/60 backdrop-blur-xl border border-[#EAE6E0]/10 text-[#EAE6E0] p-8 md:p-16 rounded-[3rem] pointer-events-auto relative overflow-hidden shadow-2xl">
            {/* Elegant decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] opacity-80"></div>
            
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl font-serif mb-4 text-[#F3E5AB]">Book an Appointment</h2>
              <p className="text-lg font-light opacity-80 tracking-wide">Reserve your moment of elegance.</p>
            </div>
            
            <form className="space-y-10 max-w-3xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest opacity-60">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-[#EAE6E0]/30 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors text-lg" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest opacity-60">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-[#EAE6E0]/30 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors text-lg" />
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest opacity-60">Service Required</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Bridal Makeup', 'Event Makeup', 'Editorial', 'Masterclass'].map(service => (
                    <label key={service} className="cursor-pointer group">
                      <input type="radio" name="service" className="peer sr-only" defaultChecked={service === 'Bridal Makeup'} />
                      <div className="text-center py-3 px-2 rounded-xl border border-[#EAE6E0]/20 peer-checked:border-[#D4AF37] peer-checked:bg-[#D4AF37]/10 transition-all">
                        <span className="text-sm font-light group-hover:text-[#D4AF37] transition-colors">{service}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-xs uppercase tracking-widest opacity-60">Select Date</label>
                  <div className="relative">
                    <div 
                      onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                      className="w-full bg-transparent border-b border-[#EAE6E0]/30 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors text-lg cursor-pointer flex justify-between items-center"
                    >
                      <span className={selectedDate ? "text-[#EAE6E0]" : "text-[#EAE6E0]/50"}>
                        {selectedDate ? formatDateDisplay(selectedDate) : "Select a date"}
                      </span>
                      <Calendar className="text-[#D4AF37] w-5 h-5" />
                    </div>

                    {isCalendarOpen && (
                      <div className="absolute top-full left-0 mt-4 w-full bg-[#1A1A1A] border border-[#EAE6E0]/10 rounded-2xl p-6 shadow-2xl z-50">
                        <div className="flex justify-between items-center mb-6">
                          <button 
                            type="button" 
                            onClick={handlePrevMonth}
                            className="p-2 hover:bg-[#EAE6E0]/10 rounded-full transition-colors"
                          >
                            <ChevronLeft className="w-5 h-5 text-[#D4AF37]" />
                          </button>
                          <span className="font-medium text-[#EAE6E0] tracking-wide">
                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                          </span>
                          <button 
                            type="button" 
                            onClick={handleNextMonth}
                            className="p-2 hover:bg-[#EAE6E0]/10 rounded-full transition-colors"
                          >
                            <ChevronRight className="w-5 h-5 text-[#D4AF37]" />
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-7 gap-1 mb-2">
                          {dayNames.map(day => (
                            <div key={day} className="text-center text-xs font-medium text-[#EAE6E0]/50 py-2">
                              {day}
                            </div>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-7 gap-1">
                          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                            <div key={`empty-${i}`} className="h-10" />
                          ))}
                          {Array.from({ length: daysInMonth }).map((_, i) => {
                            const day = i + 1;
                            const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                            const isSelected = selectedDate === dateStr;
                            
                            return (
                              <button
                                key={day}
                                type="button"
                                onClick={() => handleDateSelect(day)}
                                className={`h-10 w-full rounded-full flex items-center justify-center text-sm transition-all ${
                                  isSelected 
                                    ? 'bg-[#D4AF37] text-[#1A1A1A] font-medium shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                                    : 'text-[#EAE6E0] hover:bg-[#D4AF37]/20 hover:text-[#D4AF37]'
                                }`}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4 min-h-[200px]">
                  {selectedDate ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4 h-full"
                    >
                      <label className="text-xs uppercase tracking-widest opacity-60">Select Time</label>
                      <div className="grid grid-cols-3 gap-3 max-h-[220px] overflow-y-auto pr-2 time-scrollbar">
                        {timeSlots.map(time => (
                          <label key={time} className="cursor-pointer group">
                            <input type="radio" name="time" className="peer sr-only" />
                            <div className="text-center py-2 rounded-lg border border-[#EAE6E0]/20 peer-checked:border-[#D4AF37] peer-checked:bg-[#D4AF37]/10 transition-all hover:border-[#D4AF37]/50">
                              <span className="text-xs font-light group-hover:text-[#D4AF37] transition-colors">{time}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center border border-dashed border-[#EAE6E0]/20 rounded-xl p-6 text-center opacity-50">
                      <Calendar className="w-8 h-8 mb-2 text-[#EAE6E0]/50" />
                      <p className="text-sm font-light">Please select a date first<br/>to see available times.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-8 text-center">
                <button className="px-12 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#1A1A1A] rounded-full font-medium tracking-widest uppercase hover:opacity-90 transition-opacity shadow-lg">
                  Request Booking
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
