

// import React, { useEffect, useMemo } from 'react';
// import { gsap } from 'gsap';

// // --- 1. THE DATA RAIN (Exact match to your App.js style for consistency) ---
// const DataRain = () => {
//   const streams = useMemo(() => {
//     return [...Array(50)].map((_, i) => ({
//       id: i,
//       left: `${i * 2}%`,
//       duration: `${Math.random() * 4 + 4}s`,
//       delay: `${Math.random() * 5}s`,
//       opacity: Math.random() * 0.4 + 0.1,
//       fontSize: `${Math.random() * 4 + 8}px`,
//       content: `0x${Math.random().toString(16).slice(2, 10).toUpperCase()}_NODE_${Math.floor(Math.random() * 99)}`
//     }));
//   }, []);

//   return (
//     <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-black">
//       {/* Reusing your CSS keyframes/logic */}
//       {streams.map((s) => (
//         <div 
//           key={s.id} 
//           className="matrix-stream text-green-600/40 font-bold" 
//           style={{ 
//             left: s.left, 
//             animationDuration: s.duration, 
//             animationDelay: s.delay, 
//             opacity: s.opacity, 
//             fontSize: s.fontSize, 
//             position: 'absolute',
//             bottom: '-150px' 
//           }}
//         >
//           {s.content} {s.content}
//         </div>
//       ))}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
//     </div>
//   );
// };

// // --- 2. MAIN COMPONENT ---
// const Diary90 = ({ onComplete }) => {

//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.set(".artifact-container", { opacity: 0 });
//     tl.set(".decode-line", { width: 0 });
//     tl.set(".antique-text", { opacity: 0, y: 15 });
//     tl.set(".final-reveal-btn", { opacity: 0, scale: 0.9 });

//     tl.to(".artifact-container", { 
//       opacity: 1, 
//       duration: 1.5, 
//       delay: 0.5,
//       ease: "power2.inOut"
//     });

//     tl.to(".decode-line", {
//       width: "100%",
//       duration: 1.2,
//       ease: "expo.out",
//       stagger: 0.2
//     }, "-=0.5");

//     tl.to(".antique-text", {
//       opacity: 1,
//       y: 0,
//       duration: 0.8,
//       stagger: 0.25,
//       ease: "power3.out"
//     }, "-=0.2");

//     tl.to(".final-reveal-btn", {
//       opacity: 1,
//       scale: 1,
//       duration: 0.8,
//       ease: "back.out(1.7)"
//     }, "+=0.2");

//   }, []);

//   return (
//     <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden select-none font-sans">
      
//       {/* 🟢 ADDED: Global-style Data Rain specifically for this page */}
//       <DataRain />

//       {/* THE ANTIQUE ARTIFACT BLOCK (Added z-10 to stay above rain) */}
//       <div className="artifact-container relative z-10 w-full max-w-2xl bg-black/60 backdrop-blur-sm border border-antique/10 p-16 md:p-20 shadow-[0_0_120px_rgba(212,175,55,0.05)] overflow-hidden">
        
//         <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>

//         <div className="relative z-10 text-center space-y-12">
          
//           <div className="relative inline-block pb-6">
//             <h2 className="antique-text text-antique font-serif italic text-4xl md:text-5xl tracking-tighter">
//               WELCOME TO GEOCITIES
//             </h2>
//             <div className="decode-line absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-antique/30"></div>
//           </div>

//           <div className="decode-box relative p-10 border border-antique/5 bg-black/40">
//             <p className="antique-text text-lg italic text-antique/60 font-serif leading-relaxed px-4">
//               "Researcher, look at this. The year is 1995. The World Wide Web has officially come alive. It's no longer just code or dial-up signals..."
//             </p>
//             <p className="antique-text mt-8 text-xl text-antique/90 font-serif font-black tracking-tight leading-loose uppercase">
//               "We are all connected now by a single string of telephone wire. The first global memory has begun."
//             </p>
//           </div>

//           <div className="final-reveal-btn pt-10">
//             <button 
//               onClick={onComplete}
//               className="px-16 py-6 border-2 border-antique text-antique font-bold tracking-[0.8em] text-[11px] uppercase hover:bg-antique hover:text-black transition-all shadow-[0_0_50px_rgba(212,175,55,0.3)]"
//             >
//               [ ENTER MILLENNIUM ]
//             </button>
//           </div>

//         </div>
//       </div>

//       <div className="absolute top-10 left-10 text-[9px] tracking-[1.5em] text-antique/10 uppercase font-black">ARCHEOLOGY_PROTOCOL_v1.0</div>
//       <div className="absolute bottom-10 right-10 text-[9px] tracking-[1.5em] text-antique/10 uppercase font-black vertical-text select-none">Era_Archive: DIARY90</div>
//     </div>
//   );
// };

// export default Diary90;


import React, { useEffect, useMemo } from 'react';
import { gsap } from 'gsap';

// --- 1. THE DATA RAIN ---
const DataRain = () => {
  const streams = useMemo(() => {
    // Mobile par streams thodi kam (35) rakhi hain performance aur clarity ke liye
    const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 30 : 50;
    return [...Array(count)].map((_, i) => ({
      id: i,
      left: `${i * (100 / count)}%`,
      duration: `${Math.random() * 4 + 4}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.4 + 0.1,
      fontSize: `${Math.random() * 4 + 8}px`,
      content: `0x${Math.random().toString(16).slice(2, 6).toUpperCase()}`
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {streams.map((s) => (
        <div 
          key={s.id} 
          className="matrix-stream text-green-600/40 font-bold" 
          style={{ 
            left: s.left, 
            animationDuration: s.duration, 
            animationDelay: s.delay, 
            opacity: s.opacity, 
            fontSize: s.fontSize, 
            position: 'absolute',
            bottom: '-150px' 
          }}
        >
          {s.content}
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
    </div>
  );
};

// --- 2. MAIN COMPONENT ---
const Diary90 = ({ onComplete }) => {

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(".artifact-container", { opacity: 0, y: 20 });
    tl.set(".decode-line", { width: 0 });
    tl.set(".antique-text", { opacity: 0, y: 10 });
    tl.set(".final-reveal-btn", { opacity: 0, scale: 0.9 });

    tl.to(".artifact-container", { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" });
    tl.to(".decode-line", { width: "100%", duration: 1, ease: "expo.out" }, "-=0.5");
    tl.to(".antique-text", { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 }, "-=0.4");
    tl.to(".final-reveal-btn", { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, "+=0.2");
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden select-none font-sans px-4 pb-20 md:pb-0">
      
      <DataRain />

      {/* 📜 THE ANTIQUE ARTIFACT BLOCK (Fix for iPhone SE/S8+) */}
      <div className="artifact-container relative z-10 w-full max-w-xl bg-black/70 backdrop-blur-md border border-antique/20 p-6 md:p-16 shadow-[0_0_100px_rgba(212,175,55,0.1)] overflow-hidden rounded-sm">
        
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>

        <div className="relative z-10 text-center space-y-6 md:space-y-10">
          
          <div className="relative inline-block pb-4 md:pb-6">
            <h2 className="antique-text text-antique font-serif italic text-2xl md:text-5xl tracking-tighter uppercase leading-tight">
              WELCOME TO GEOCITIES
            </h2>
            <div className="decode-line absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-antique/40"></div>
          </div>

          <div className="decode-box relative p-4 md:p-10 border border-antique/10 bg-black/40">
            <p className="antique-text text-sm md:text-lg italic text-antique/60 font-serif leading-relaxed px-1 md:px-4">
              "Researcher, look at this. The year is 1995. The World Wide Web has officially come alive."
            </p>
            <p className="antique-text mt-4 md:mt-8 text-base md:text-xl text-antique/90 font-serif font-black tracking-tight leading-snug md:leading-loose uppercase">
              "We are all connected now by a single string of telephone wire."
            </p>
          </div>

          <div className="final-reveal-btn pt-4 md:pt-10">
            <button 
              onClick={onComplete}
              className="w-full md:w-auto px-10 md:px-16 py-4 md:py-6 border-2 border-antique text-antique font-bold tracking-[0.4em] md:tracking-[0.8em] text-[9px] md:text-[11px] uppercase hover:bg-antique hover:text-black transition-all shadow-[0_0_40px_rgba(212,175,55,0.3)]"
            >
              [ ENTER MILLENNIUM ]
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Labels - Responsive positioning */}
      <div className="absolute top-4 left-4 md:top-10 md:left-10 text-[7px] md:text-[9px] tracking-[0.5em] md:tracking-[1.5em] text-antique/20 uppercase font-black">
        ARCHEOLOGY_PROTOCOL
      </div>
      <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 text-[7px] md:text-[9px] tracking-[0.5em] md:tracking-[1.5em] text-antique/20 uppercase font-black select-none hidden xs:block">
        Era_Archive: DIARY90
      </div>
    </div>
  );
};

export default Diary90;




