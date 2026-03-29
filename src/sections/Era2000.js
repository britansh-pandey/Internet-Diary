
// import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const Era2000 = ({ onComplete }) => {
//   const [synced, setSynced] = useState(false);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Brain pulsing effect
//       gsap.to(".brain-node", { opacity: 0.8, scale: 1.05, duration: 2, repeat: -1, yoyo: true });
//       // Circuit lines flicker
//       gsap.to(".circuit-path", { strokeDashoffset: 0, duration: 3, repeat: -1, ease: "linear" });
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   const startSync = () => {
//     gsap.to(".sync-progress", { 
//       width: "100%", 
//       duration: 3, 
//       ease: "power2.inOut", 
//       onComplete: () => setSynced(true) 
//     });
//   };

//   return (
//     <div ref={containerRef} className="relative w-full h-full flex flex-col items-center justify-center bg-transparent p-4 md:p-6 overflow-hidden font-mono text-antique overflow-y-auto">
      
//       {/* 1. TOP HUD BAR (Responsive Layout) */}
//       <div className="w-full max-w-4xl border-b border-antique/20 pb-4 mb-6 md:mb-8 flex flex-col md:flex-row justify-between items-center gap-4 px-2 md:px-4 relative z-10 text-center md:text-left">
//         <div className="flex items-center gap-3 md:gap-4">
//           <div className="w-8 h-5 md:w-10 md:h-6 border border-antique/40 bg-antique/5 flex items-center justify-center text-[8px] md:text-[10px] font-bold">🇬🇧</div>
//           <span className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-60 font-black">Britain_Restoration_Node</span>
//         </div>
//         <h1 className="text-xl md:text-2xl font-serif italic tracking-tighter text-antique/90">TheDiary.com</h1>
//         <div className="hidden sm:block text-right text-[8px] md:text-[10px] tracking-widest opacity-60 font-bold uppercase">
//           Current Era: 1969 - 2004
//         </div>
//       </div>

//       {/* 2. MAIN ARTIFACT BOX (Adaptive Grid) */}
//       <div className="w-full max-w-4xl bg-black/60 backdrop-blur-sm border border-antique/30 p-6 md:p-8 shadow-[0_0_100px_rgba(212,175,55,0.05)] relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          
//           {/* Left Side: Neural Visualization (Smaller on mobile) */}
//           <div className="relative aspect-square max-w-[280px] md:max-w-full mx-auto w-full border border-antique/10 bg-black/40 flex items-center justify-center overflow-hidden">
//              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
//              <div className="brain-node text-5xl md:text-7xl filter drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">🧠</div>
//              <svg className="absolute inset-0 w-full h-full opacity-30">
//                 <path d="M10 10 L50 50 L90 10" stroke="#d4af37" fill="transparent" className="circuit-path" strokeDasharray="100" strokeDashoffset="100" />
//              </svg>
//           </div>

//           {/* Right Side: Log Content (Responsive Typography) */}
//           <div className="space-y-4 md:space-y-6">
//             <div className="space-y-1 md:space-y-2 border-l-2 border-antique/20 pl-4">
//               <p className="text-[8px] md:text-[10px] text-cyan-400 font-bold tracking-widest uppercase">Fragment_ID: 2004_ALPHA_BLOG</p>
//               <p className="text-[8px] md:text-[10px] text-antique/40 uppercase">Status: Syncing_Identity...</p>
//             </div>
            
//             <div className="text-sm md:text-base leading-relaxed italic text-antique/80 font-serif">
//               "The original paper ink is now drying on a private 'Web-Log' server. 
//               My solitude is broadcasted. I sit alone in London, talking to strangers 
//               in Tokyo through a 56kbps line. Is my thought truly mine anymore?"
//             </div>

//             <div className="pt-4 md:pt-6">
//               <div className="flex justify-between text-[8px] md:text-[9px] uppercase tracking-widest mb-2 md:mb-3 opacity-60 font-bold">
//                 <span>Sync_Bar</span>
//                 <span className="hidden xs:inline">Network: Fragmented</span>
//               </div>
//               <div className="w-full h-6 md:h-8 bg-black/80 border border-antique/20 relative p-0.5 md:p-1 overflow-hidden">
//                 <div className="sync-progress h-full bg-gradient-to-r from-cyan-600 to-antique w-0 relative">
//                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 3. SYNC BUTTON (Responsive Width) */}
//         <div className="mt-8 md:mt-12 flex justify-center">
//           {!synced ? (
//             <button 
//               onClick={startSync}
//               className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-5 bg-antique/10 border-2 border-antique/60 text-antique font-black tracking-[0.3em] md:tracking-[0.6em] text-[10px] md:text-xs uppercase hover:bg-antique hover:text-black transition-all shadow-[0_10px_40px_rgba(212,175,55,0.1)] active:scale-95"
//             >
//               Sync Digital Identity
//             </button>
//           ) : (
//             <button 
//               onClick={onComplete}
//               className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-5 bg-cyan-600 text-white font-black tracking-[0.3em] md:tracking-[0.6em] text-[10px] md:text-xs uppercase animate-pulse border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
//             >
//               Access Restored_2004
//             </button>
//           )}
//         </div>
//       </div>

//       <p className="mt-6 md:mt-8 text-[6px] md:text-[8px] tracking-[0.8em] md:tracking-[1.5em] text-antique/20 uppercase font-black relative z-10 text-center">
//         Restoration_Protocol_v2.0 // Node_Active
//       </p>
//     </div>
//   );
// };

// export default Era2000;

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Era2000 = ({ onComplete }) => {
  const [synced, setSynced] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".brain-node", { opacity: 0.8, scale: 1.05, duration: 2, repeat: -1, yoyo: true });
      gsap.to(".circuit-path", { strokeDashoffset: 0, duration: 3, repeat: -1, ease: "linear" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const startSync = () => {
    gsap.to(".sync-progress", { 
      width: "100%", 
      duration: 3, 
      ease: "power2.inOut", 
      onComplete: () => setSynced(true) 
    });
  };

  return (
    <div ref={containerRef} className="relative w-full h-full flex flex-col items-center justify-center bg-transparent p-4 md:p-6 overflow-hidden font-mono text-antique">
      
      {/* 1. TOP HUD BAR (Denser on mobile) */}
      <div className="w-full max-w-4xl border-b border-antique/20 pb-2 mb-4 md:mb-8 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 px-2 relative z-10 text-center md:text-left">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="w-7 h-4 md:w-10 md:h-6 border border-antique/40 bg-antique/5 flex items-center justify-center text-[7px] md:text-[10px] font-bold">🇬🇧</div>
          <span className="text-[7px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-60 font-black">Restoration_Node</span>
        </div>
        <h1 className="text-lg md:text-2xl font-serif italic tracking-tighter text-antique/90">TheDiary.com</h1>
        <div className="hidden sm:block text-[8px] md:text-[10px] tracking-widest opacity-60 font-bold uppercase">
          1969 - 2004
        </div>
      </div>

      {/* 2. MAIN ARTIFACT BOX (Compact for small screens) */}
      <div className="w-full max-w-4xl bg-black/60 backdrop-blur-sm border border-antique/30 p-4 md:p-8 shadow-[0_0_100px_rgba(212,175,55,0.05)] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10">
          
          {/* Neural Visualization (Scaled down on small mobile) */}
          <div className="relative aspect-square max-w-[140px] xs:max-w-[200px] md:max-w-full mx-auto w-full border border-antique/10 bg-black/40 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
             <div className="brain-node text-4xl md:text-7xl filter drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">🧠</div>
             <svg className="absolute inset-0 w-full h-full opacity-30">
                <path d="M10 10 L50 50 L90 10" stroke="#d4af37" fill="transparent" className="circuit-path" strokeDasharray="100" strokeDashoffset="100" />
             </svg>
          </div>

          {/* Log Content (Tighter margins) */}
          <div className="space-y-3 md:space-y-6">
            <div className="space-y-1 border-l-2 border-antique/20 pl-3">
              <p className="text-[7px] md:text-[10px] text-cyan-400 font-bold tracking-widest uppercase leading-none">2004_ALPHA_BLOG</p>
              <p className="text-[7px] md:text-[10px] text-antique/40 uppercase leading-none">Syncing_Identity...</p>
            </div>
            
            <div className="text-xs md:text-base leading-relaxed italic text-antique/80 font-serif">
              "The original paper ink is now drying on a private 'Web-Log' server. 
              My solitude is broadcasted... talking to strangers 
              in Tokyo. Is my thought truly mine anymore?"
            </div>

            <div className="pt-2">
              <div className="flex justify-between text-[7px] md:text-[9px] uppercase tracking-widest mb-1 md:mb-3 opacity-60 font-bold">
                <span>Sync_Bar</span>
                <span className="hidden xs:inline">Fragmented</span>
              </div>
              <div className="w-full h-4 md:h-8 bg-black/80 border border-antique/20 relative p-0.5 overflow-hidden">
                <div className="sync-progress h-full bg-gradient-to-r from-cyan-600 to-antique w-0 relative">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. SYNC BUTTON (Responsive Padding) */}
        <div className="mt-6 md:mt-12 flex justify-center pb-2">
          {!synced ? (
            <button 
              onClick={startSync}
              className="w-full sm:w-auto px-8 md:px-16 py-3 md:py-5 bg-antique/10 border-2 border-antique/60 text-antique font-black tracking-[0.2em] md:tracking-[0.6em] text-[9px] md:text-xs uppercase hover:bg-antique hover:text-black transition-all active:scale-95"
            >
              Sync Identity
            </button>
          ) : (
            <button 
              onClick={onComplete}
              className="w-full sm:w-auto px-8 md:px-16 py-3 md:py-5 bg-cyan-600 text-white font-black tracking-[0.2em] md:tracking-[0.6em] text-[9px] md:text-xs uppercase animate-pulse border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              Access Restored
            </button>
          )}
        </div>
      </div>

      <p className="mt-4 text-[6px] md:text-[8px] tracking-[0.8em] md:tracking-[1.5em] text-antique/20 uppercase font-black relative z-10 text-center">
        Restoration_Protocol_v2.0
      </p>
    </div>
  );
};

export default Era2000;