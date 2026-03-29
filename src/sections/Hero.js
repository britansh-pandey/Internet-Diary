

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Hero = ({ onComplete, setGlobalProgress }) => {
  const canvasRef = useRef(null);
  const diaryRef = useRef(null);
  const [isWiping, setIsWiping] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [localProgress, setLocalProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    const init = () => {
      // Parent container ki width/height ke hisaab se canvas size set karein
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      ctx.fillStyle = '#1a1612'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'destination-out';
    };

    init();
    window.addEventListener('resize', init);
    return () => window.removeEventListener('resize', init);
  }, []);

  const handleAction = (clientX, clientY) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.filter = 'blur(15px)';
    ctx.beginPath();
    ctx.arc(x, y, 100, 0, Math.PI * 2);
    ctx.fill();

    if (localProgress < 100) {
      const newProgress = localProgress + 2;
      setLocalProgress(newProgress);
      setGlobalProgress(newProgress);
      
      if (newProgress >= 30) {
        setLocalProgress(100);
        setGlobalProgress(100);
        setIsRevealed(true);
        triggerMagicReveal();
      }
    }
  };

  const triggerMagicReveal = () => {
    gsap.to(canvasRef.current, { 
      opacity: 0, 
      scale: 1.5, 
      duration: 1.2, 
      ease: "power2.inOut",
      pointerEvents: 'none' 
    });
    
    gsap.to(diaryRef.current, { 
      rotateY: 0, 
      scale: 1, 
      y: 0, 
      duration: 1.5, 
      ease: "back.out(1.5)" 
    });
  };

  const startTornado = () => {
    const tl = gsap.timeline({ onComplete });
    tl.to(diaryRef.current, { 
      rotateZ: 1440, 
      scale: 0, 
      opacity: 0, 
      filter: "blur(30px) brightness(5)",
      duration: 1.5, 
      ease: "power4.in" 
    });
    tl.to("#vortex-flash", { opacity: 1, duration: 0.5, backgroundColor: "#fff" }, "-=0.3");
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-transparent overflow-hidden select-none px-4">
      
      {/* 🟢 RESPONSIVE MAIN HEADING (Requirement #26)
      <div className="absolute top-[8%] md:top-[5%] text-center z-10 pointer-events-none">
        <h1 className="text-4xl md:text-9xl font-serif italic tracking-tighter text-antique/90 drop-shadow-2xl">
           The Internet Diary
        </h1>
      </div> */}

      {/* EMOTIONAL PROMPT */}
      {!isRevealed && (
        <div className="absolute top-[20%] md:top-[22%] text-center z-30 animate-pulse pointer-events-none px-6">
          <h4 className="text-antique/60 font-serif italic text-sm md:text-lg max-w-md mx-auto">
            "50 years of digital dust... Wipe it away to find where our soul went."
          </h4>
        </div>
      )}

      {/* 🟢 3D DIARY CONTAINER (Responsive scaling) */}
      <div className="relative w-full max-w-[300px] h-[400px] md:max-w-[480px] md:h-[620px]" style={{ perspective: '2000px' }}>
        
        <div ref={diaryRef} className="diary-artifact absolute inset-0 transition-all shadow-[0_0_100px_rgba(0,0,0,1)] border-2 border-antique/20 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #2b1e16 0%, #1a120b 100%)', transform: 'rotateY(-25deg)' }}>
          
          <div className="absolute inset-0 border-[6px] md:border-[10px] border-double border-antique/10 m-2 md:m-4 flex flex-col items-center justify-center p-4 md:p-6 text-center">
             <h2 className="text-antique font-serif italic text-2xl md:text-4xl tracking-widest uppercase">The Internet Diary</h2>
             <div className="w-12 md:w-16 h-[1px] bg-antique/20 my-4"></div>
             
             {isRevealed && (
               <div className="animate-fadeIn space-y-4 md:space-y-6">
                 <p className="text-antique/80 italic text-xs md:text-base font-serif max-w-[250px] md:max-w-[300px] leading-relaxed mx-auto">
                   "Every click was a heartbeat, every byte a memory. It's time to remember who we were."
                 </p>
                 <button 
                  onClick={startTornado} 
                  className="w-full md:w-auto px-6 md:px-10 py-3 md:py-4 border-2 border-antique text-antique font-bold tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[10px] uppercase hover:bg-antique hover:text-black transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)]"
                 >
                   [ ENTER_THE_TIMELINE ]
                 </button>
               </div>
             )}
          </div>
        </div>

        {/* DUST CANVAS */}
        <canvas
          ref={canvasRef}
          onMouseMove={(e) => isWiping && handleAction(e.clientX, e.clientY)}
          onMouseDown={() => setIsWiping(true)}
          onMouseUp={() => setIsWiping(false)}
          onTouchStart={() => setIsWiping(true)}
          onTouchEnd={() => setIsWiping(false)}
          onTouchMove={(e) => isWiping && handleAction(e.touches[0].clientX, e.touches[0].clientY)}
          className="absolute inset-0 w-full h-full z-20 cursor-crosshair touch-none"
        />
      </div>

      <div id="vortex-flash" className="fixed inset-0 pointer-events-none z-[2000] opacity-0"></div>
      
      {/* Visual Progress Check */}
      {!isRevealed && (
        <div className="mt-6 md:mt-8 text-[7px] md:text-[8px] tracking-[1em] md:tracking-[1.5em] text-antique/20 uppercase font-black text-center">
          Restoring_Human_Fragment: {localProgress}%
        </div>
      )}
    </div>
  );
};

export default Hero;