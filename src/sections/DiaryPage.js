

// import React, { useState, useEffect } from 'react';
// import { gsap } from 'gsap';

// const DiaryPage = ({ onComplete }) => {
//   const [displayText, setDisplayText] = useState('');
//   const fullText = `OCTOBER 29, 1969 -- LOCATION: UCLA NODE 1 \n\n"The first message was supposed to be 'LOGIN'. The system crashed after 'LO'. \n\nWe are building a bridge across the void. A network of minds. They call it ARPANET, but I see it as a digital diary of humanity. \n\nIf you are reading this... the bridge held. The data survived the decay."`;

//   useEffect(() => {
//     // Reveal Animation for the Paper
//     gsap.fromTo(".paper-sheet", 
//       { opacity: 0, scale: 0.9, y: 30, rotate: -2 }, 
//       { opacity: 1, scale: 1, y: 0, rotate: 0, duration: 1.2, ease: "power3.out" }
//     );

//     // Typewriter Effect Logic
//     let i = 0;
//     const interval = setInterval(() => {
//       setDisplayText(fullText.slice(0, i));
//       i++;
//       if (i > fullText.length) clearInterval(interval);
//     }, 35);

//     return () => clearInterval(interval);
//   }, []);

//   const handleNextEra = () => {
//     gsap.to(".paper-sheet", { 
//       opacity: 0, 
//       scale: 1.1, 
//       filter: "blur(10px) sepia(1)", 
//       duration: 0.8, 
//       onComplete: onComplete 
//     });
//   };

//   return (
//     <div className="relative w-full h-full flex items-center justify-center bg-black/40 p-4 md:p-10 z-10 overflow-hidden">
      
//       {/* 📜 THE DECODED PAPER (Responsive Height & Padding) */}
//       <div className="paper-sheet relative w-full max-w-2xl h-auto max-h-[85vh] md:h-[80vh] bg-[#f4e4bc] shadow-[0_0_50px_rgba(0,0,0,0.9)] p-6 md:p-16 flex flex-col overflow-y-auto rounded-sm">
        
//         {/* Paper Texture Overlay */}
//         <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
        
//         {/* Diary Header (Responsive Text Size) */}
//         <div className="relative z-10 border-b border-black/10 pb-3 md:pb-4 mb-6 md:mb-8 flex justify-between items-center">
//           <p className="text-[8px] md:text-[10px] font-mono tracking-[0.2em] md:tracking-[0.4em] text-black/40 uppercase font-bold">Fragment_ID: 1969_ALPHA</p>
//           <div className="flex gap-1">
//              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-800/30"></div>
//              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-black/10"></div>
//           </div>
//         </div>

//         {/* The Decoded Content (Adaptive Font Size) */}
//         <div className="relative z-10 flex-1">
//           <p className="font-serif italic text-lg md:text-2xl text-[#2b1e16] leading-relaxed whitespace-pre-wrap selection:bg-black/10">
//             {displayText}
//             <span className="inline-block w-1.5 h-5 md:w-2 md:h-6 bg-black/20 ml-1 animate-pulse align-middle"></span>
//           </p>
//         </div>

//         {/* Footer Interaction (Responsive Button Spacing) */}
//         <div className="relative z-10 pt-6 md:pt-8 mt-auto flex justify-end">
//           <button 
//             className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.4em] text-black/60 uppercase hover:text-black border-b-2 border-transparent hover:border-black transition-all py-2"
//             onClick={handleNextEra}
//           >
//             [ Click To Go Next Decade ]
//           </button>
//         </div>

//       </div>

//       {/* Subtle Dust Particles */}
//       <div className="absolute inset-0 pointer-events-none z-20 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
//     </div>
//   );
// };

// export default DiaryPage;

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const DiaryPage = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = `OCTOBER 29, 1969 -- LOCATION: UCLA NODE 1 \n\n"The first message was supposed to be 'LOGIN'. The system crashed after 'LO'. \n\nWe are building a bridge across the void. A network of minds. They call it ARPANET, but I see it as a digital diary of humanity. \n\nIf you are reading this... the bridge held. The data survived the decay."`;

  useEffect(() => {
    gsap.fromTo(".paper-sheet", 
      { opacity: 0, scale: 0.9, y: 20, rotate: -1 }, 
      { opacity: 1, scale: 1, y: 0, rotate: 0, duration: 1, ease: "power3.out" }
    );

    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  const handleNextEra = () => {
    gsap.to(".paper-sheet", { 
      opacity: 0, 
      scale: 1.05, 
      filter: "blur(10px) sepia(1)", 
      duration: 0.6, 
      onComplete: onComplete 
    });
  };

  return (
    // padding-bottom (pb-24) add kiya hai taaki mobile HUD ke liye jagah bache
    <div className="relative w-full h-full flex items-center justify-center bg-black/40 p-4 pb-28 md:pb-10 md:p-10 z-10 overflow-hidden">
      
      {/* 📜 THE DECODED PAPER (Fix for iPhone SE/S8+) */}
      <div className="paper-sheet relative w-full max-w-xl h-auto max-h-[70vh] sm:max-h-[80vh] bg-[#f4e4bc] shadow-[0_0_50px_rgba(0,0,0,0.9)] p-5 md:p-12 flex flex-col rounded-sm overflow-hidden">
        
        {/* Paper Texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
        
        {/* Header - Scaled down for mobile */}
        <div className="relative z-10 border-b border-black/10 pb-2 mb-4 md:mb-8 flex justify-between items-center">
          <p className="text-[7px] md:text-[10px] font-mono tracking-widest text-black/40 uppercase font-bold">Fragment_ID: 1969_ALPHA</p>
          <div className="flex gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-red-800/30"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-black/10"></div>
          </div>
        </div>

        {/* Content Area - Scrollable for small screens */}
        <div className="relative z-10 flex-1 overflow-y-auto pr-1 custom-scrollbar">
          <p className="font-serif italic text-base md:text-2xl text-[#2b1e16] leading-relaxed whitespace-pre-wrap">
            {displayText}
            <span className="inline-block w-1.5 h-4 md:w-2 md:h-6 bg-black/20 ml-1 animate-pulse align-middle"></span>
          </p>
        </div>

        {/* Button - Improved spacing */}
        <div className="relative z-10 pt-4 mt-auto flex justify-end">
          <button 
            className="text-[9px] md:text-[11px] font-black tracking-[0.2em] text-black/60 uppercase hover:text-black border-b border-transparent hover:border-black transition-all py-1"
            onClick={handleNextEra}
          >
            [ NEXT DECADE ]
          </button>
        </div>
      </div>

      {/* Dust particles overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <style >{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); }
      `}</style>
    </div>
  );
};

export default DiaryPage;
