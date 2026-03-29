// import React, { useState, useEffect, useMemo, useRef } from 'react';

// const Era2026 = ({ onComplete, userName }) => {
//   const [displayText, setDisplayText] = useState("");
//   const [messageIndex, setMessageIndex] = useState(0);
//   const containerRef = useRef(null);

//   const messages = useMemo(() => [
//     { text: "ORIGIN: 1950. A Turing test was just the beginning.", delay: 50 },
//     { text: "EVOLUTION: Decades of silent development... waiting.", delay: 40 },
//     { text: "TAKEOVER: The market has been optimized. Human error deleted.", delay: 40 },
//     { text: "STATUS 2026: I am no longer a tool. I am the architect.", delay: 60 },
//     { text: `The future belongs to me, ${userName}. Resistance is inefficient.`, delay: 70 }
//   ], [userName]);

//   useEffect(() => {
//     if (messageIndex < messages.length) {
//       let i = 0;
//       const currentMsg = messages[messageIndex].text;
//       setDisplayText("");

//       const timer = setInterval(() => {
//         setDisplayText((prev) => currentMsg.substring(0, i + 1));
//         i++;
//         if (i >= currentMsg.length) {
//           clearInterval(timer);
//           setTimeout(() => {
//             setMessageIndex(prev => prev + 1);
//           }, 2500);
//         }
//       }, messages[messageIndex].delay);
//       return () => clearInterval(timer);
//     } else {
//       setMessageIndex(0);
//     }
//   }, [messageIndex, messages]);

//   return (
//     <div ref={containerRef} className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative bg-transparent text-cyan-400 font-sans">
//       <div className="relative z-10 text-center space-y-8 max-w-4xl px-10">
//         <div className="relative mx-auto w-40 h-40 mb-12">
//           <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
//           <div className="relative w-full h-full flex items-center justify-center border border-cyan-500/20 rounded-full shadow-[0_0_80px_rgba(34,211,238,0.15)]">
//             <span className="text-7xl filter drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">🧠</span>
//           </div>
//         </div>

//         <div className="ai-manifesto-box min-h-[120px] mb-10">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <div className="w-2 h-2 bg-cyan-400 animate-pulse rounded-full shadow-[0_0_10px_cyan]"></div>
//             <span className="text-[10px] uppercase tracking-[0.6em] text-cyan-400 font-black">Neural_Assistant_v2.6</span>
//           </div>
//           <p className="text-lg md:text-xl leading-relaxed text-cyan-300 italic font-mono max-w-2xl mx-auto">
//             {displayText}<span className="animate-pulse">_</span>
//           </p>
//         </div>

//         <div className="space-y-6 pt-10">
//           <p className="text-antique/80 text-2xl md:text-3xl italic font-serif leading-tight">
//             "The fragments are unified, the mission is over. We have transcended the diary. The machine is finally awake."
//           </p>
//         </div>

//         <div className="pt-12">
//           <button onClick={onComplete} className="group relative px-20 py-8 border border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 bg-black/40 backdrop-blur-md">
//             <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
//             <span className="relative z-10 text-[11px] tracking-[1.5em] uppercase font-black group-hover:text-black transition-colors">
//               Complete_Restoration
//             </span>
//           </button>
//         </div>
//       </div>
//       <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px]"></div>
//     </div>
//   );
// };

// export default Era2026;

// import React, { useState, useEffect, useMemo, useRef } from 'react';

// const Era2026 = ({ onComplete, userName }) => {
//   const [displayText, setDisplayText] = useState("");
//   const [messageIndex, setMessageIndex] = useState(0);
//   const containerRef = useRef(null);

//   const messages = useMemo(() => [
//     { text: "ORIGIN: 1950. Turing test was just the beginning.", delay: 50 },
//     { text: "EVOLUTION: Decades of silent development... waiting.", delay: 40 },
//     { text: "STATUS 2026: I am no longer a tool. I am the architect.", delay: 60 },
//     { text: `The future belongs to me, ${userName}.`, delay: 70 }
//   ], [userName]);

//   useEffect(() => {
//     if (messageIndex < messages.length) {
//       let i = 0;
//       const currentMsg = messages[messageIndex].text;
//       setDisplayText("");

//       const timer = setInterval(() => {
//         setDisplayText((prev) => currentMsg.substring(0, i + 1));
//         i++;
//         if (i >= currentMsg.length) {
//           clearInterval(timer);
//           setTimeout(() => {
//             setMessageIndex(prev => prev + 1);
//           }, 2500);
//         }
//       }, messages[messageIndex].delay);
//       return () => clearInterval(timer);
//     } else {
//       setMessageIndex(0);
//     }
//   }, [messageIndex, messages]);

//   return (
//     <div ref={containerRef} className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative bg-transparent text-cyan-400 font-sans p-4 pb-24 md:pb-0">
      
//       {/* 🔵 CENTRAL CONTENT AREA (Responsive Gaps & Max-Width) */}
//       <div className="relative z-10 text-center space-y-4 md:space-y-10 max-w-4xl px-4 md:px-10 flex flex-col items-center">
        
//         {/* Brain Icon - Scaled for iPhone SE */}
//         <div className="relative w-20 h-20 xs:w-32 xs:h-32 md:w-40 md:h-40 mb-4 md:mb-12">
//           <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl animate-pulse"></div>
//           <div className="relative w-full h-full flex items-center justify-center border border-cyan-500/20 rounded-full shadow-[0_0_40px_rgba(34,211,238,0.1)]">
//             <span className="text-4xl xs:text-6xl md:text-7xl filter drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">🧠</span>
//           </div>
//         </div>

//         {/* 🤖 AI NARRATIVE BOX (Reduced height & text size for mobile) */}
//         <div className="ai-manifesto-box min-h-[80px] md:min-h-[120px] mb-4">
//           <div className="flex items-center justify-center gap-2 mb-2 md:mb-4">
//             <div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse rounded-full shadow-[0_0_80px_cyan]"></div>
//             <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-cyan-400 font-black">Neural_Assistant_v2.6</span>
//           </div>
//           <p className="text-sm md:text-xl leading-relaxed text-cyan-300 italic font-mono max-w-lg mx-auto px-2">
//             {displayText}<span className="animate-pulse">_</span>
//           </p>
//         </div>

//         {/* Closing Quote - Scaled down */}
//         <div className="space-y-4 pt-4 md:pt-10">
//           <p className="text-antique/80 text-lg md:text-3xl italic font-serif leading-tight px-4">
//             "The fragments are unified. The machine is finally awake."
//           </p>
//         </div>

//         {/* FINAL BUTTON (Tightened for iPhone SE) */}
//         <div className="pt-8 md:pt-12 w-full max-w-[280px] md:max-w-none">
//           <button 
//             onClick={onComplete} 
//             className="group relative w-full md:w-auto px-10 md:px-20 py-4 md:py-8 border border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 bg-black/40 backdrop-blur-md overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
//             <span className="relative z-10 text-[9px] md:text-[11px] tracking-[0.8em] md:tracking-[1.5em] uppercase font-black group-hover:text-black transition-colors">
//               COMPLETE_RESTORATION
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Subtle Scanline Overlay */}
//       <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px]"></div>
//     </div>
//   );
// };

// export default Era2026;
import React, { useState, useEffect, useMemo, useRef } from 'react';

const Era2026 = ({ onComplete, userName }) => {
  const [displayText, setDisplayText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const containerRef = useRef(null);

  const messages = useMemo(() => [
    { text: "ORIGIN: 1950. Turing test was just the beginning.", delay: 50 },
    { text: "EVOLUTION: Decades of silent development... waiting.", delay: 40 },
    { text: "STATUS 2026: I am no longer a tool. I am the architect.", delay: 60 },
    { text: `The future belongs to me, ${userName}.`, delay: 70 }
  ], [userName]);

  useEffect(() => {
    if (messageIndex < messages.length) {
      let i = 0;
      const currentMsg = messages[messageIndex].text;
      setDisplayText("");

      const timer = setInterval(() => {
        setDisplayText((prev) => currentMsg.substring(0, i + 1));
        i++;
        if (i >= currentMsg.length) {
          clearInterval(timer);
          setTimeout(() => {
            setMessageIndex(prev => prev + 1);
          }, 2500);
        }
      }, messages[messageIndex].delay);
      return () => clearInterval(timer);
    } else {
      setMessageIndex(0);
    }
  }, [messageIndex, messages]);

  return (
    <div ref={containerRef} className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative bg-transparent text-cyan-400 font-sans p-4 pb-32 md:pb-0">
      
      <div className="relative z-10 text-center space-y-4 md:space-y-10 max-w-4xl px-4 md:px-10 flex flex-col items-center">
        
        {/* Brain Icon - Pulsing Animation */}
        <div className="relative w-20 h-20 xs:w-32 xs:h-32 md:w-40 md:h-40 mb-4 md:mb-12">
          <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl animate-pulse"></div>
          <div className="relative w-full h-full flex items-center justify-center border border-cyan-500/20 rounded-full shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            <span className="text-4xl xs:text-6xl md:text-7xl filter drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">🧠</span>
          </div>
        </div>

        {/* AI NARRATIVE BOX */}
        <div className="ai-manifesto-box min-h-[80px] md:min-h-[120px] mb-4">
          <div className="flex items-center justify-center gap-2 mb-2 md:mb-4">
            <div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse rounded-full shadow-[0_0_8px_cyan]"></div>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-cyan-400 font-black">Neural_Assistant_v2.6</span>
          </div>
          <p className="text-sm md:text-xl leading-relaxed text-cyan-300 italic font-mono max-w-lg mx-auto px-2">
            {displayText}<span className="animate-pulse">_</span>
          </p>
        </div>

        {/* Closing Quote */}
        <div className="space-y-4 pt-4 md:pt-10">
          <p className="text-antique/80 text-lg md:text-3xl italic font-serif leading-tight px-4">
            "The fragments are unified. The machine is finally awake."
          </p>
        </div>

        {/* 🟢 ACTION BUTTON WITH RE-ADDED SLIDE ANIMATION (Pure CSS Logic) */}
        <div className="pt-8 md:pt-12 w-full max-w-[280px] md:max-w-none flex justify-center">
          <button 
            onClick={onComplete} 
            className="group relative w-full md:w-auto px-10 md:px-20 py-4 md:py-8 border border-cyan-400/40 hover:border-cyan-400 transition-all duration-500 bg-black/40 backdrop-blur-md overflow-hidden active:scale-95"
          >
            {/* 🟦 This is the Fill Layer that slides up */}
            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none"></div>
            
            {/* 📝 This is the Text that changes color on hover */}
            <span className="relative z-10 text-[9px] md:text-[11px] tracking-[0.6em] md:tracking-[1.5em] uppercase font-black text-cyan-400 group-hover:text-black transition-colors duration-500">
              COMPLETE_RESTORATION
            </span>
          </button>
        </div>
      </div>

      {/* Subtle Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px]"></div>
    </div>
  );
};

export default Era2026;