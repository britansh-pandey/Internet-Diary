

// // import React, { useState, useEffect } from 'react';
// // import { gsap } from 'gsap';

// // const Era1980 = ({ onComplete, setGlobalProgress = () => {} }) => {
// //   const [rewindProgress, setRewindProgress] = useState(0); 
// //   const [isRestored, setIsRestored] = useState(false);

// //   const handleRewind = (e) => {
// //     if (isRestored) return;
// //     const val = parseInt(e.target.value);
// //     setRewindProgress(val);
    
// //     if (setGlobalProgress) setGlobalProgress(val); 
    
// //     if (val >= 90 && !isRestored) {
// //       setIsRestored(true);
// //       triggerMagicReveal();
// //     }
// //   };

// //   const triggerMagicReveal = () => {
// //     gsap.to(".vcr-box", { 
// //       scale: 1.02, // Mobile par scale thoda kam rakha hai safety ke liye
// //       boxShadow: "0 0 60px rgba(212,175,55,0.4)", 
// //       borderColor: "rgba(212,175,55,0.8)",
// //       duration: 1 
// //     });

// //     setTimeout(() => {
// //       gsap.to(".era-1980-container", { 
// //         opacity: 0, 
// //         scale: 1.1, 
// //         filter: "blur(20px)",
// //         duration: 1.5, 
// //         onComplete: onComplete 
// //       });
// //     }, 4000); 
// //   };

// //   return (
// //     <div className="era-1980-container relative w-full h-full flex flex-col items-center justify-center bg-transparent select-none font-mono text-antique px-4">
      
// //       {/* 🔴 TOP HUD INFO (Responsive: Mobile par center, Desktop par left) */}
// //       <div className="absolute top-6 md:top-10 left-6 md:left-10 space-y-1 opacity-40 text-center md:text-left w-full md:w-auto">
// //         <p className="text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-black">Mode: Playback_Recovery</p>
// //         <p className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em]">REC ● OCT_1984_MEMORY_SLOT</p>
// //       </div>

// //       {/* 🔴 THE MAIN ARTIFACT BOX (Responsive: Width adjusted for small screens) */}
// //       <div className="vcr-box relative w-full max-w-[320px] h-[450px] md:max-w-[450px] md:h-[550px] border-4 border-double border-antique/20 bg-black/60 backdrop-blur-md p-6 md:p-10 text-center overflow-hidden flex flex-col items-center justify-center shadow-2xl mt-12 md:mt-0">
        
// //         {/* Subtle VHS Scanline Overlay */}
// //         <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px]"></div>

// //         <div className="relative z-10 space-y-6 md:space-y-10">
// //             {!isRestored ? (
// //               <div className="space-y-4 md:space-y-6 animate-fadeIn">
// //                 <p className="text-[8px] md:text-[10px] tracking-[0.5em] md:tracking-[0.8em] text-antique/30 uppercase font-black">Memory_Corrupted</p>
// //                 <h3 className="text-xl md:text-3xl font-serif italic text-antique leading-tight px-2">
// //                   "The record is entangled..."
// //                 </h3>
// //                 <p className="text-[10px] md:text-xs text-antique/60 leading-relaxed uppercase tracking-widest px-2">
// //                   The old magnetic tape is twisted. <br/> 
// //                   <span className="text-antique font-bold">Use the slider below</span> to rewind and repair the first digital thought.
// //                 </p>
// //               </div>
// //             ) : (
// //               <div className="animate-fadeIn space-y-6 md:space-y-8 px-2">
// //                 <p className="text-[8px] md:text-[10px] tracking-[0.5em] md:tracking-[0.8em] text-green-500 font-black uppercase animate-pulse">
// //                   Signal_Restored
// //                 </p>
// //                 <p className="text-lg md:text-2xl font-serif italic leading-relaxed text-antique/90">
// //                   "I typed my name, and for the first time, a machine spoke back to me. 1984 felt like the future."
// //                 </p>
// //                 <div className="h-[1px] w-16 md:w-24 bg-antique/40 mx-auto"></div>
// //                 <p className="text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] text-antique/40 uppercase">
// //                   Data_Node: Personal_Computing_Genesis
// //                 </p>
// //               </div>
// //             )}
// //         </div>
// //       </div>

// //       {/* 🔴 REWIND CONTROLLER (Responsive: Width 100% on mobile) */}
// //       <div className="mt-10 md:mt-16 w-full max-w-[300px] md:max-w-[500px] flex flex-col items-center space-y-6 md:space-y-8 relative z-10">
        
// //         <div className="flex justify-between w-full text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] font-bold opacity-60">
// //           <span>1980</span>
// //           <span className={isRestored ? "text-green-500" : "text-antique animate-pulse"}>
// //             {isRestored ? "SYSTEM_REPAIRED" : `REWINDING: ${rewindProgress}%`}
// //           </span>
// //           <span>1989</span>
// //         </div>

// //         <input 
// //           type="range" min="0" max="100" value={rewindProgress}
// //           onChange={handleRewind}
// //           disabled={isRestored}
// //           className={`w-full h-1 accent-antique cursor-pointer transition-opacity ${isRestored ? 'opacity-20 cursor-default' : 'opacity-100'}`}
// //         />
        
// //         <p className="text-[7px] md:text-[8px] tracking-[0.8em] md:tracking-[1.2em] text-antique/20 uppercase font-black text-center">
// //           Magnetic_Tape_Integrity_Check
// //         </p>
// //       </div>

// //       {/* BOTTOM RIGHT ERA INDICATOR (Mobile: Hide coordinates or simplify) */}
// //       <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 text-right opacity-30">
// //         <h4 className="text-2xl md:text-4xl font-serif italic tracking-tighter">1980s</h4>
// //         <p className="text-[7px] md:text-[8px] tracking-[0.3em] md:tracking-[0.5em] uppercase">The Personal Era</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Era1980;

// import React, { useState, useEffect } from 'react';
// import { gsap } from 'gsap';

// const Era1980 = ({ onComplete, setGlobalProgress = () => {} }) => {
//   const [rewindProgress, setRewindProgress] = useState(0); 
//   const [isRestored, setIsRestored] = useState(false);

//   const handleRewind = (e) => {
//     if (isRestored) return;
//     const val = parseInt(e.target.value);
//     setRewindProgress(val);
//     if (setGlobalProgress) setGlobalProgress(val); 
//     if (val >= 90 && !isRestored) {
//       setIsRestored(true);
//       triggerMagicReveal();
//     }
//   };

//   const triggerMagicReveal = () => {
//     gsap.to(".vcr-box", { 
//       scale: 1.02,
//       boxShadow: "0 0 60px rgba(212,175,55,0.4)", 
//       borderColor: "rgba(212,175,55,0.8)",
//       duration: 1 
//     });

//     setTimeout(() => {
//       gsap.to(".era-1980-container", { 
//         opacity: 0, 
//         scale: 1.1, 
//         filter: "blur(20px)",
//         duration: 1.5, 
//         onComplete: onComplete 
//       });
//     }, 4000); 
//   };

//   return (
//     // min-h-full aur pt/pb add kiya hai taaki safe area bana rahe
//     <div className="era-1980-container relative w-full h-full flex flex-col items-center justify-between bg-transparent select-none font-mono text-antique px-4 pt-16 pb-24 md:pt-10 md:pb-10">
      
//       {/* 🔴 TOP HUD INFO - Simplified for small screens */}
//       <div className="absolute top-4 md:top-10 left-0 w-full md:left-10 md:w-auto text-center md:text-left opacity-40">
//         <p className="text-[7px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-black">Mode: Playback_Recovery</p>
//         <p className="text-[7px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] hidden xs:block">REC ● OCT_1984_MEMORY_SLOT</p>
//       </div>

//       {/* 🔴 THE MAIN ARTIFACT BOX - Dynamic scaling for height-constrained devices */}
//       <div className="vcr-box relative w-full max-w-[300px] md:max-w-[450px] flex-grow md:flex-none h-auto min-h-[320px] md:h-[500px] border-4 border-double border-antique/20 bg-black/60 backdrop-blur-md p-5 md:p-10 text-center overflow-hidden flex flex-col items-center justify-center shadow-2xl my-4">
        
//         <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px]"></div>

//         <div className="relative z-10 space-y-4 md:space-y-10">
//             {!isRestored ? (
//               <div className="space-y-3 md:space-y-6 animate-fadeIn">
//                 <p className="text-[7px] md:text-[10px] tracking-[0.5em] md:tracking-[0.8em] text-antique/30 uppercase font-black">Memory_Corrupted</p>
//                 <h3 className="text-lg md:text-3xl font-serif italic text-antique leading-tight px-1">
//                   "The record is entangled..."
//                 </h3>
//                 <p className="text-[9px] md:text-xs text-antique/60 leading-relaxed uppercase tracking-widest px-1">
//                   The magnetic tape is twisted. <br/> 
//                   <span className="text-antique font-bold">Use the slider</span> to repair the memory.
//                 </p>
//               </div>
//             ) : (
//               <div className="animate-fadeIn space-y-4 md:space-y-8 px-1">
//                 <p className="text-[7px] md:text-[10px] tracking-[0.5em] md:tracking-[0.8em] text-green-500 font-black uppercase animate-pulse">
//                   Signal_Restored
//                 </p>
//                 <p className="text-base md:text-2xl font-serif italic leading-relaxed text-antique/90">
//                   "I typed my name, and for the first time, a machine spoke back to me."
//                 </p>
//                 <div className="h-[1px] w-12 md:w-24 bg-antique/40 mx-auto"></div>
//               </div>
//             )}
//         </div>
//       </div>

//       {/* 🔴 REWIND CONTROLLER - Positioned relatively to avoid HUD overlap */}
//       <div className="w-full max-w-[280px] md:max-w-[500px] flex flex-col items-center space-y-4 md:space-y-8 relative z-10">
        
//         <div className="flex justify-between w-full text-[7px] md:text-[10px] tracking-[0.2em] md:tracking-[0.5em] font-bold opacity-60">
//           <span>1980</span>
//           <span className={isRestored ? "text-green-500" : "text-antique animate-pulse"}>
//             {isRestored ? "REPAIRED" : `SYNC: ${rewindProgress}%`}
//           </span>
//           <span>1989</span>
//         </div>

//         <input 
//           type="range" min="0" max="100" value={rewindProgress}
//           onChange={handleRewind}
//           disabled={isRestored}
//           className={`w-full h-1 accent-antique cursor-pointer transition-opacity ${isRestored ? 'opacity-20 cursor-default' : 'opacity-100'}`}
//         />
        
//         <p className="text-[6px] md:text-[8px] tracking-[0.5em] md:tracking-[1.2em] text-antique/20 uppercase font-black text-center">
//           Magnetic_Tape_Integrity_Check
//         </p>
//       </div>

//       {/* ERA INDICATOR - Hidden on super small height screens to save space */}
//       <div className="absolute bottom-4 right-4 text-right opacity-30 hidden xs:block">
//         <h4 className="text-xl md:text-4xl font-serif italic tracking-tighter leading-none">1980s</h4>
//       </div>
//     </div>
//   );
// };

// export default Era1980;

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Era1980 = ({ onComplete, setGlobalProgress = () => {} }) => {
  const [rewindProgress, setRewindProgress] = useState(0); 
  const [isRestored, setIsRestored] = useState(false);

  const handleRewind = (e) => {
    if (isRestored) return;
    const val = parseInt(e.target.value);
    setRewindProgress(val);
    if (setGlobalProgress) setGlobalProgress(val); 
    if (val >= 90 && !isRestored) {
      setIsRestored(true);
      triggerMagicReveal();
    }
  };

  const triggerMagicReveal = () => {
    gsap.to(".vcr-box", { 
      scale: 1.02,
      boxShadow: "0 0 60px rgba(212,175,55,0.4)", 
      borderColor: "rgba(212,175,55,0.8)",
      duration: 1 
    });

    setTimeout(() => {
      gsap.to(".era-1980-container", { 
        opacity: 0, 
        scale: 1.1, 
        filter: "blur(20px)",
        duration: 1.5, 
        onComplete: onComplete 
      });
    }, 4000); 
  };

  return (
    // min-h-full aur pt/pb add kiya hai taaki safe area bana rahe
    <div className="era-1980-container relative w-full h-full flex flex-col items-center justify-between bg-transparent select-none font-mono text-antique px-4 pt-16 pb-24 md:pt-10 md:pb-10">
      
      {/* 🔴 TOP HUD INFO - Simplified for small screens */}
      <div className="absolute top-4 md:top-10 left-0 w-full md:left-10 md:w-auto text-center md:text-left opacity-40">
        <p className="text-[7px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-black">Mode: Playback_Recovery</p>
        <p className="text-[7px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] hidden xs:block">REC ● OCT_1984_MEMORY_SLOT</p>
      </div>

      {/* 🔴 THE MAIN ARTIFACT BOX - Dynamic scaling for height-constrained devices */}
      <div className="vcr-box relative w-full max-w-[300px] md:max-w-[450px] flex-grow md:flex-none h-auto min-h-[320px] md:h-[500px] border-4 border-double border-antique/20 bg-black/60 backdrop-blur-md p-5 md:p-10 text-center overflow-hidden flex flex-col items-center justify-center shadow-2xl my-4">
        
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px]"></div>

        <div className="relative z-10 space-y-4 md:space-y-10">
            {!isRestored ? (
              <div className="space-y-3 md:space-y-6 animate-fadeIn">
                <p className="text-[7px] md:text-[10px] tracking-[0.5em] md:tracking-[0.8em] text-antique/30 uppercase font-black">Memory_Corrupted</p>
                <h3 className="text-lg md:text-3xl font-serif italic text-antique leading-tight px-1">
                  "The record is entangled..."
                </h3>
                <p className="text-[9px] md:text-xs text-antique/60 leading-relaxed uppercase tracking-widest px-1">
                  The magnetic tape is twisted. <br/> 
                  <span className="text-antique font-bold">Use the slider</span> to repair the memory.
                </p>
              </div>
            ) : (
              <div className="animate-fadeIn space-y-4 md:space-y-8 px-1">
                <p className="text-[7px] md:text-[10px] tracking-[0.5em] md:tracking-[0.8em] text-green-500 font-black uppercase animate-pulse">
                  Signal_Restored
                </p>
                <p className="text-base md:text-2xl font-serif italic leading-relaxed text-antique/90">
                  "I typed my name, and for the first time, a machine spoke back to me."
                </p>
                <div className="h-[1px] w-12 md:w-24 bg-antique/40 mx-auto"></div>
              </div>
            )}
        </div>
      </div>

      {/* 🔴 REWIND CONTROLLER - Positioned relatively to avoid HUD overlap */}
      <div className="w-full max-w-[280px] md:max-w-[500px] flex flex-col items-center space-y-4 md:space-y-8 relative z-10">
        
        <div className="flex justify-between w-full text-[7px] md:text-[10px] tracking-[0.2em] md:tracking-[0.5em] font-bold opacity-60">
          <span>1980</span>
          <span className={isRestored ? "text-green-500" : "text-antique animate-pulse"}>
            {isRestored ? "REPAIRED" : `SYNC: ${rewindProgress}%`}
          </span>
          <span>1989</span>
        </div>

        <input 
          type="range" min="0" max="100" value={rewindProgress}
          onChange={handleRewind}
          disabled={isRestored}
          className={`w-full h-1 accent-antique cursor-pointer transition-opacity ${isRestored ? 'opacity-20 cursor-default' : 'opacity-100'}`}
        />
        
        <p className="text-[6px] md:text-[8px] tracking-[0.5em] md:tracking-[1.2em] text-antique/20 uppercase font-black text-center">
          Magnetic_Tape_Integrity_Check
        </p>
      </div>

      {/* ERA INDICATOR - Hidden on super small height screens to save space */}
      <div className="absolute bottom-4 right-4 text-right opacity-30 hidden xs:block">
        <h4 className="text-xl md:text-4xl font-serif italic tracking-tighter leading-none">1980s</h4>
      </div>
    </div>
  );
};

export default Era1980;