

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Diary2000 = ({ onComplete }) => {
  const [showButtonText, setShowButtonText] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(".word", { opacity: 0, y: 5 });
    tl.set(".btn-narrative", { opacity: 0 });
    tl.set(".action-btn", { scale: 0.8, opacity: 0 });

    tl.to(".diary-card", { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

    tl.to(".word", { 
      opacity: 1, 
      y: 0, 
      stagger: 0.12, 
      duration: 0.4, 
      ease: "none" 
    });

    tl.to(".btn-narrative", { 
      opacity: 1, 
      duration: 1, 
      onComplete: () => setShowButtonText(true) 
    }, "+=0.5");

    tl.to(".action-btn", { 
      scale: 1, 
      opacity: 1, 
      duration: 0.8, 
      ease: "back.out(1.7)" 
    });
  }, []);

  const diaryContent = "The world is flat now. I can talk to Tokyo while sitting in Delhi. The diary isn't hidden in a book anymore... it's a 'Profile'. We are sharing everything. Privacy is becoming a relic of the past.";

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-transparent p-4 md:p-6 z-10 overflow-hidden select-none">
      
      {/* 📱 THE SOCIAL DIARY CARD (Responsive Width & Padding) */}
      <div className="diary-card opacity-0 translate-y-10 relative w-full max-w-sm md:max-w-xl bg-white/95 rounded-2xl p-6 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.2)] border border-white/20">
        
        {/* Header: Identity Shift (Smaller on Mobile) */}
        <div className="flex items-center gap-3 md:gap-5 mb-6 md:mb-10 border-b border-gray-100 pb-4 md:pb-6">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center text-xl md:text-3xl shadow-lg shadow-blue-100">
            👤
          </div>
          <div className="text-left">
            <h3 className="font-bold text-gray-900 tracking-tight text-lg md:text-xl uppercase font-sans leading-none">Archive_Log_2004</h3>
            <p className="text-[8px] md:text-[10px] text-blue-400 font-black tracking-[0.2em] md:tracking-[0.3em] uppercase mt-1">Identity_Synced_Public</p>
          </div>
        </div>

        {/* 🟢 NARRATIVE TYPING AREA (Adaptive Text Size) */}
        <div className="text-left border-l-4 border-blue-500/30 pl-4 md:pl-8 py-1 md:py-2">
          <p className="text-base md:text-2xl font-serif italic text-gray-700 leading-relaxed flex flex-wrap gap-x-1 md:gap-x-2">
            {diaryContent.split(" ").map((word, i) => (
              <span key={i} className="word inline-block">
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Mock Interactions (Smaller for Mobile) */}
        <div className="flex gap-4 md:gap-8 text-[8px] md:text-[10px] font-black text-gray-300 pt-6 md:pt-10 uppercase tracking-[0.1em] md:tracking-[0.2em]">
           <span className="hover:text-blue-500 cursor-pointer transition-colors">Like_Memory</span>
           <span className="hover:text-blue-500 cursor-pointer transition-colors">Comment</span>
           <span className="opacity-10 hidden xs:inline">Delete_Identity</span>
        </div>
      </div>

      {/* 🟢 BUTTON NARRATIVE & ACTION (Responsive Margins) */}
      <div className="mt-8 md:mt-16 flex flex-col items-center space-y-4 md:space-y-6 text-center max-w-sm px-4">
        
        <p className="btn-narrative text-antique italic text-xs md:text-base leading-relaxed">
          <span className="text-blue-400 font-bold block mb-1 md:mb-2 tracking-[0.2em] uppercase text-[8px] md:text-[10px] not-italic">Instruction:</span>
          "By pressing below, you are committing these personal fragments to the Cloud."
        </p>

        <button 
          onClick={onComplete}
          className="action-btn w-full md:w-auto px-10 md:px-16 py-4 md:py-6 bg-blue-600 text-white font-bold tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[10px] uppercase rounded-full hover:bg-blue-700 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] active:scale-95"
        >
          [ SYNC_TO_CLOUD ]
        </button>

        <p className="text-[7px] md:text-[8px] tracking-[0.8em] md:tracking-[1.5em] text-antique/20 uppercase font-black">
          Warning: Privacy_Protocol_Terminated
        </p>
      </div>

      {/* Era Watermark (Responsive: Smaller/Hidden on Mobile) */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right opacity-10 pointer-events-none hidden sm:block">
         <h4 className="text-4xl md:text-6xl font-serif italic text-white uppercase tracking-tighter leading-none">Diary2000</h4>
         <p className="text-[8px] md:text-[10px] tracking-[0.6em] md:tracking-[1em] text-white uppercase">The Era of Us</p>
      </div>
    </div>
  );
};

export default Diary2000;
