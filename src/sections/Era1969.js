


import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Era1969 = ({ onComplete }) => {
  const [frequency, setFrequency] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (frequency === 69 && !isLocked) {
      setIsLocked(true);
      
      gsap.to(".radio-display", { 
        color: "#00FF41", 
        textShadow: "0 0 40px rgba(0, 255, 65, 0.8)", 
        scale: 1.1, 
        duration: 0.5 
      });

      setTimeout(() => {
        gsap.to(".era-container", { 
          opacity: 0, 
          scale: 1.1,
          filter: "blur(20px)",
          duration: 1.2, 
          onComplete: onComplete 
        });
      }, 1800);
    }
  }, [frequency, isLocked, onComplete]);

  const adjustFreq = (val) => {
    if (!isLocked) {
      setFrequency(prev => Math.min(100, Math.max(0, prev + val)));
    }
  };

  return (
    <div className="era-container relative w-full h-full flex flex-col items-center justify-center bg-transparent transition-all duration-700 select-none px-4 md:px-0">
      
      {/* 1. STATUS LINE (Responsive Width & Padding) */}
      <div className="w-full max-w-[90%] md:max-w-2xl border-y border-antique/20 py-4 md:py-6 mb-8 md:mb-12 text-center bg-black/20 backdrop-blur-sm">
        <p className={`text-[9px] md:text-[11px] tracking-[0.4em] md:tracking-[0.8em] uppercase font-bold transition-all duration-500 ${isLocked ? 'text-green-500 animate-pulse' : 'text-antique/60'}`}>
          {isLocked ? "SIGNAL_STABLE // DATA_RECOVERED" : "SEARCHING_DATA_NODE_69"}
        </p>
      </div>

      {/* 2. FREQUENCY NUMBER (Responsive Text Sizes) */}
      <div className="radio-display text-7xl sm:text-9xl md:text-[12rem] font-serif italic text-antique transition-all mb-4 flex items-baseline justify-center">
        {frequency}
        <span className="text-xl md:text-3xl ml-2 md:ml-4 not-italic opacity-50 font-mono tracking-tighter">MHz</span>
      </div>

      {/* 3. TUNING CONTROLS (Responsive Width & Spacing) */}
      <div className="relative w-full max-w-[320px] md:max-w-[600px] flex flex-col items-center space-y-8 md:space-y-10">
        
        {/* Slider */}
        <input 
          type="range" min="0" max="100" value={frequency} 
          onChange={(e) => !isLocked && setFrequency(parseInt(e.target.value))}
          className={`w-full h-[3px] bg-antique/20 appearance-none cursor-pointer accent-antique transition-opacity ${isLocked ? 'opacity-30' : 'opacity-100'}`}
        />

        {/* FREQUENCY STEP BUTTONS (Better Touch Targets for Mobile) */}
        <div className="flex items-center justify-between w-full gap-4 md:gap-12">
          <button 
            onClick={() => adjustFreq(-1)}
            disabled={isLocked}
            className="w-12 h-12 md:w-16 md:h-16 border border-antique/30 rounded-full text-antique hover:bg-antique hover:text-black transition-all flex items-center justify-center font-bold text-lg md:text-xl active:scale-90 disabled:opacity-20"
          >
            -
          </button>

          <div className="flex flex-col items-center flex-1">
             <span className={`text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] mb-2 uppercase text-center ${isLocked ? 'text-green-400' : 'text-antique/40'}`}>
                Fine Tuning
             </span>
             <div className="flex justify-between w-full max-w-[150px] md:max-w-[200px] text-[8px] md:text-[10px] tracking-widest text-antique/60 font-mono">
                <span>00</span>
                <span className={isLocked ? "text-green-400 font-black scale-125 transition-transform" : "opacity-40"}>69</span>
                <span>100</span>
             </div>
          </div>

          <button 
            onClick={() => adjustFreq(1)}
            disabled={isLocked}
            className="w-12 h-12 md:w-16 md:h-16 border border-antique/30 rounded-full text-antique hover:bg-antique hover:text-black transition-all flex items-center justify-center font-bold text-lg md:text-xl active:scale-90 disabled:opacity-20"
          >
            +
          </button>
        </div>
      </div>

      {/* 4. SUCCESS BOX (Responsive Padding & Font) */}
      <div className={`mt-10 md:mt-16 px-6 md:px-12 py-4 md:py-6 border-2 transition-all duration-700 bg-black/40 max-w-[90%] ${isLocked ? 'border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.2)]' : 'border-antique/20 shadow-none'}`}>
        <p className={`text-[10px] md:text-[12px] tracking-[0.3em] md:tracking-[0.6em] uppercase font-black text-center ${isLocked ? 'text-green-500' : 'text-antique/80'}`}>
          {isLocked ? "ACCESS_GRANTED: ARPANET_NODE_ACTIVE" : "LOCATE_HIDDEN_NODE_AT_69"}
        </p>
      </div>

      {/* Background Hint (Responsive Bottom Spacing) */}
      <p className="absolute bottom-6 md:bottom-10 text-[7px] md:text-[9px] tracking-[0.8em] md:tracking-[1.5em] text-antique/10 uppercase font-black text-center px-4 w-full">
        Protocol: Radio_Frequency_Reconstruction
      </p>
    </div>
  );
};

export default Era1969;
