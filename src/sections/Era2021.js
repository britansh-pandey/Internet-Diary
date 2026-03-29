// import React, { useEffect, useMemo, useRef } from 'react';
// import { gsap } from 'gsap';

// const Era2021 = ({ onComplete, userName }) => {
//   const containerRef = useRef(null);
//   const buttonRef = useRef(null);

//   const rainStreams = useMemo(() => {
//     return [...Array(30)].map((_, i) => ({
//       id: i,
//       left: `${Math.random() * 100}%`,
//       duration: 8 + Math.random() * 12, 
//       delay: Math.random() * -20,
//       fontSize: `${Math.floor(Math.random() * 10) + 12}px`,
//       content: Array.from({ length: 40 }, () => Math.random() > 0.5 ? "0" : "1").join("")
//     }));
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

//       tl.fromTo(".phase-header", 
//         { y: -20, opacity: 0, letterSpacing: "2em" }, 
//         { y: 0, opacity: 0.4, letterSpacing: "1em", duration: 2 }
//       )
//       .to(".word-21", {
//         opacity: 1,
//         filter: "blur(0px)",
//         y: 0,
//         stagger: { each: 0.05, from: "random" },
//         duration: 1,
//       }, "-=1")
//       .fromTo(".scanner-line", 
//         { top: "0%" }, 
//         { top: "100%", duration: 4, repeat: -1, ease: "linear" }, 
//         0
//       );

//       const handleButtonMove = (e) => {
//         const { clientX, clientY } = e;
//         const rect = buttonRef.current.getBoundingClientRect();
//         const x = (clientX - (rect.left + rect.width / 2)) * 0.3;
//         const y = (clientY - (rect.top + rect.height / 2)) * 0.3;
//         gsap.to(".upgrade-btn", { x, y, duration: 0.6 });
//       };

//       const handleButtonLeave = () => {
//         gsap.to(".upgrade-btn", { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
//       };

//       buttonRef.current?.addEventListener("mousemove", handleButtonMove);
//       buttonRef.current?.addEventListener("mouseleave", handleButtonLeave);

//       const handleParallax = (e) => {
//         const xVal = (e.clientX / window.innerWidth - 0.5) * 30;
//         const yVal = (e.clientY / window.innerHeight - 0.5) * 30;
//         gsap.to(".data-layer", { x: xVal, y: yVal, duration: 1.5 });
//       };

//       window.addEventListener("mousemove", handleParallax);
//       return () => {
//         window.removeEventListener("mousemove", handleParallax);
//         buttonRef.current?.removeEventListener("mousemove", handleButtonMove);
//         buttonRef.current?.removeEventListener("mouseleave", handleButtonLeave);
//       };
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const text = `${userName}, the world went quiet. The screen became our only window. The diary is now a cloud log, shared but belonging to no one.`;

//   return (
//     <div ref={containerRef} className="h-screen w-full flex flex-col items-center justify-center font-mono relative overflow-hidden bg-[#050505] text-antique select-none">
//       <div 
//         className="data-layer absolute inset-0 pointer-events-none z-0"
//         style={{
//           WebkitMaskImage: 'radial-gradient(circle, transparent 20%, black 70%)',
//           maskImage: 'radial-gradient(circle, transparent 20%, black 70%)'
//         }}
//       >
//         {rainStreams.map((s) => (
//           <div 
//             key={s.id} 
//             className="matrix-stream" 
//             style={{ 
//               left: s.left, 
//               animationDuration: `${s.duration}s`, 
//               animationDelay: `${s.delay}s`,
//               fontSize: s.fontSize,
//               opacity: Math.random() * 0.5 + 0.2 
//             }}
//           >
//             {s.content}
//           </div>
//         ))}
//       </div>

//       <div className="scanner-line absolute left-0 w-full h-[2px] bg-antique/10 z-20 pointer-events-none shadow-[0_0_15px_rgba(212,175,55,0.2)]" />

//       <div className="text-layer text-center space-y-12 z-10 max-w-3xl px-6">
//         <h2 className="phase-header tracking-[1.2em] uppercase text-[10px] font-black italic opacity-0">
//           // ARCHIVE_RECOVERY_PHASE_05 //
//         </h2>

//         <div className="relative group">
//           <div className="absolute -top-8 -left-8 w-6 h-6 border-t-2 border-l-2 border-antique/20 group-hover:border-antique/50 transition-colors duration-700" />
//           <div className="absolute -bottom-8 -right-8 w-6 h-6 border-b-2 border-r-2 border-antique/20 group-hover:border-antique/50 transition-colors duration-700" />
          
//           <p className="font-serif italic text-2xl md:text-4xl leading-[1.6] text-antique/90">
//             {text.split(" ").map((w, i) => (
//               <span key={i} className="word-21 inline-block opacity-0 blur-lg translate-y-4">
//                 {w}&nbsp;
//               </span>
//             ))}
//           </p>
//         </div>

//         <div className="flex flex-col items-center gap-6 pt-8">
//           <div ref={buttonRef} className="p-10">
//             <button 
//               onClick={onComplete} 
//               className="upgrade-btn group relative px-20 py-8 border border-antique/30 hover:border-antique overflow-hidden transition-colors duration-500 bg-black/60 backdrop-blur-md"
//             >
//               <div className="absolute inset-0 bg-antique translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
//               <span className="relative z-10 text-[11px] tracking-[1em] uppercase font-black text-antique/60 group-hover:text-black transition-colors duration-500">
//                 INITIATE_UPGRADE_2026
//               </span>
//             </button>
//           </div>
//           <p className="text-[7px] tracking-[0.5em] uppercase opacity-30 animate-pulse">Status: Signal_Found</p>
//         </div>
//       </div>
//       <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay" />
//     </div>
//   );
// };

// export default Era2021;
import React, { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';

const Era2021 = ({ onComplete, userName }) => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  const rainStreams = useMemo(() => {
    // Mobile par streams kam ki hain taaki text readability bani rahe
    const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 35;
    return [...Array(count)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: 8 + Math.random() * 12, 
      delay: Math.random() * -20,
      fontSize: `${Math.floor(Math.random() * 8) + 10}px`,
      content: Array.from({ length: 30 }, () => Math.random() > 0.5 ? "0" : "1").join("")
    }));
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(".phase-header", 
        { y: -20, opacity: 0, letterSpacing: "1.5em" }, 
        { y: 0, opacity: 0.4, letterSpacing: "0.8em", duration: 2 }
      )
      .to(".word-21", {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        stagger: { each: 0.04, from: "random" },
        duration: 0.8,
      }, "-=1.2");

      // Scanner animation
      gsap.fromTo(".scanner-line", 
        { top: "0%" }, 
        { top: "100%", duration: 4, repeat: -1, ease: "linear" }
      );

      const handleParallax = (e) => {
        const xVal = (e.clientX / window.innerWidth - 0.5) * 20;
        const yVal = (e.clientY / window.innerHeight - 0.5) * 20;
        gsap.to(".data-layer", { x: xVal, y: yVal, duration: 1.2 });
      };

      window.addEventListener("mousemove", handleParallax);
      return () => window.removeEventListener("mousemove", handleParallax);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const text = `${userName}, the world went quiet. The screen became our window. The diary is now a cloud log.`;

  return (
    <div ref={containerRef} className="h-full w-full flex flex-col items-center justify-center font-mono relative overflow-hidden bg-[#050505] text-antique select-none p-4 pb-24 md:pb-0">
      
      {/* 🟢 DATA LAYER (Binary Rain) */}
      <div 
        className="data-layer absolute inset-0 pointer-events-none z-0"
        style={{
          WebkitMaskImage: 'radial-gradient(circle, transparent 30%, black 80%)',
          maskImage: 'radial-gradient(circle, transparent 30%, black 80%)'
        }}
      >
        {rainStreams.map((s) => (
          <div 
            key={s.id} 
            className="matrix-stream opacity-20" 
            style={{ 
              left: s.left, 
              animationDuration: `${s.duration}s`, 
              animationDelay: `${s.delay}s`,
              fontSize: s.fontSize,
            }}
          >
            {s.content}
          </div>
        ))}
      </div>

      <div className="scanner-line absolute left-0 w-full h-[1px] bg-antique/5 z-20 pointer-events-none" />

      {/* 🔴 CONTENT LAYER (Adjusted for iPhone SE) */}
      <div className="text-layer text-center space-y-6 md:space-y-12 z-10 max-w-3xl px-4 md:px-6">
        
        <h2 className="phase-header tracking-[0.6em] md:tracking-[1.2em] uppercase text-[8px] md:text-[10px] font-black italic opacity-0">
      {/* RECOVERY_PHASE_05 */}
        </h2>

        <div className="relative py-4 md:py-8">
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-antique/20" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-antique/20" />
          
          <p className="font-serif italic text-xl md:text-4xl leading-relaxed text-antique/90 px-2">
            {text.split(" ").map((w, i) => (
              <span key={i} className="word-21 inline-block opacity-0 blur-md translate-y-2">
                {w}&nbsp;
              </span>
            ))}
          </p>
        </div>

        {/* 🟢 ACTION AREA */}
        <div className="flex flex-col items-center gap-4 md:gap-8 pt-4">
          <div ref={buttonRef} className="w-full max-w-[280px] md:max-w-none">
            <button 
              onClick={onComplete} 
              className="upgrade-btn group relative w-full md:w-auto px-8 md:px-20 py-4 md:py-8 border border-antique/30 bg-black/40 backdrop-blur-md overflow-hidden transition-all"
            >
              <div className="absolute inset-0 bg-antique translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-[9px] md:text-[11px] tracking-[0.5em] md:tracking-[1em] uppercase font-black text-antique/60 group-hover:text-black">
                UPGRADE_2026
              </span>
            </button>
          </div>
          <p className="text-[6px] md:text-[8px] tracking-[0.4em] uppercase opacity-30 animate-pulse">Status: Signal_Found</p>
        </div>
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-overlay" />
    </div>
  );
};

export default Era2021;
