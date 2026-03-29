// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';

// const Era2016 = ({ onComplete, userName }) => {
//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.set(".word-16", { opacity: 0, y: 10, filter: "blur(8px)" });
//     tl.to(".phone-frame", { scale: 1, opacity: 1, duration: 1.2, ease: "expo.out" });
//     tl.to(".word-16", { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.12, duration: 0.4 }, "-=0.4");
//   }, []);

//   const text = `Researcher ${userName}, the diary is dying. We no longer store memories; we broadcast fragments. Attention is the new currency.`;

//   return (
//     <div className="h-full w-full flex items-center justify-center p-4"> 
//       <div className="phone-frame opacity-0 scale-90 relative z-10 w-[290px] h-[580px] border-[3px] border-antique/30 bg-[#050505] rounded-[45px] p-8 shadow-[0_0_100px_rgba(212,175,55,0.1)] flex flex-col justify-between overflow-hidden"> 
//         <div className="h-4 w-20 bg-antique/10 mx-auto rounded-full"></div>
//         <div className="text-center space-y-6 flex-1 flex flex-col justify-center">
//           <div className="text-5xl opacity-40 animate-pulse grayscale">📸</div>
//           <p className="text-antique/90 text-sm md:text-base italic leading-relaxed flex flex-wrap justify-center gap-x-1">
//             {text.split(" ").map((w, i) => <span key={i} className="word-16 inline-block">{w}</span>)}
//           </p>
//         </div>
//         <div className="space-y-4 mb-2 text-center">
//           <p className="text-[8px] tracking-[0.4em] text-antique/30 uppercase italic">"Privacy is a ghost."</p>
//           <button onClick={onComplete} className="w-full py-4 border-2 border-antique/40 text-antique text-[9px] tracking-[0.6em] font-black uppercase hover:bg-antique hover:text-black transition-all active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.1)]">DOUBLE_TAP_TO_EVOLVE</button>
//         </div>
//         <div className="h-1 w-24 bg-antique/10 mx-auto rounded-full"></div>
//       </div>
//     </div>
//   );
// };

// export default Era2016;

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Era2016 = ({ onComplete, userName }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(".word-16", { opacity: 0, y: 10, filter: "blur(8px)" });
    tl.to(".phone-frame", { scale: 1, opacity: 1, duration: 1.2, ease: "expo.out" });
    tl.to(".word-16", { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.12, duration: 0.4 }, "-=0.4");
  }, []);

  const text = `Researcher ${userName}, the diary is dying. We no longer store memories; we broadcast fragments. Attention is the new currency.`;

  return (
    // justify-center ke sath padding-bottom (pb-24) fix kiya hai HUD ke liye
    <div className="h-full w-full flex flex-col items-center justify-center p-4 pb-28 md:pb-10 overflow-hidden"> 
      
      {/* 📱 PHONE FRAME (Responsive Height Fix) */}
      <div className="phone-frame opacity-0 scale-90 relative z-10 w-full max-w-[280px] md:max-w-[320px] h-full max-h-[480px] xs:max-h-[520px] md:max-h-[600px] border-[3px] border-antique/30 bg-[#050505] rounded-[40px] md:rounded-[45px] p-6 md:p-10 shadow-[0_0_80px_rgba(212,175,55,0.1)] flex flex-col justify-between overflow-hidden"> 
        
        {/* Top Speaker */}
        <div className="h-1.5 w-16 bg-antique/10 mx-auto rounded-full shrink-0"></div>

        {/* Center Content */}
        <div className="text-center space-y-4 md:space-y-6 flex-1 flex flex-col justify-center py-4">
          <div className="text-4xl md:text-5xl opacity-40 animate-pulse grayscale shrink-0">📸</div>
          <p className="text-antique/90 text-[13px] md:text-base italic leading-relaxed flex flex-wrap justify-center gap-x-1">
            {text.split(" ").map((w, i) => <span key={i} className="word-16 inline-block">{w}</span>)}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="space-y-3 md:space-y-5 mb-2 text-center shrink-0">
          <p className="text-[7px] md:text-[8px] tracking-[0.4em] text-antique/30 uppercase italic">"Privacy is a ghost."</p>
          <button 
            onClick={onComplete} 
            className="w-full py-3.5 md:py-4 border-2 border-antique/40 text-antique text-[9px] tracking-[0.4em] md:tracking-[0.6em] font-black uppercase hover:bg-antique hover:text-black transition-all active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
          >
            DOUBLE_TAP_TO_EVOLVE
          </button>
        </div>

        {/* Home Indicator */}
        <div className="h-1 w-20 bg-antique/10 mx-auto rounded-full shrink-0"></div>
      </div>
    </div>
  );
};

export default Era2016;