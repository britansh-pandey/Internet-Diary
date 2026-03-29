

// import React, { useState, useEffect, useMemo } from 'react';
// import { gsap } from 'gsap';

// // --- 🟢 DATA RAIN (Wahi Original Logic - No Changes) ---
// const DataRain = () => {
//   const streams = useMemo(() => {
//     return [...Array(45)].map((_, i) => ({
//       id: i,
//       left: `${i * 2.2}%`,
//       duration: `${Math.random() * 5 + 4}s`,
//       delay: `${Math.random() * 6}s`,
//       opacity: Math.random() * 0.5 + 0.3, 
//       fontSize: `${Math.random() * 4 + 11}px`,
//       content: `0x${Math.random().toString(16).slice(2, 6).toUpperCase()}`
//     }));
//   }, []);

//   return (
//     <>
//       <style>
//         {`
//           @keyframes streamUpHeavy {
//             0% { transform: translateY(0); opacity: 0; }
//             10% { opacity: 1; }
//             90% { opacity: 1; }
//             100% { transform: translateY(-115vh); opacity: 0; }
//           }
//           .matrix-reverse-heavy {
//             animation: streamUpHeavy linear infinite;
//             writing-mode: vertical-rl;
//             text-orientation: upright;
//             letter-spacing: 5px;
//             color: #00FF41; 
//             text-shadow: 0 0 12px rgba(0, 255, 65, 0.9);
//           }
//         `}
//       </style>
//       <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-black">
//         {streams.map((s) => (
//           <div key={s.id} className="matrix-reverse-heavy font-mono font-black" 
//                style={{ left: s.left, animationDuration: s.duration, animationDelay: s.delay, opacity: s.opacity, fontSize: s.fontSize, position: 'absolute', bottom: '-200px' }}>
//             {s.content} {s.content}
//           </div>
//         ))}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
//       </div>
//     </>
//   );
// };

// const Era1990 = ({ onComplete }) => {
//   const [status, setStatus] = useState('IDLE'); 
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     gsap.fromTo(".browser-window", 
//       { opacity: 0, scale: 0.9, y: 30 }, 
//       { opacity: 1, scale: 1, y: 0, duration: 1, ease: "expo.out" }
//     );
//   }, []);

//   const startConnection = () => {
//     setStatus('CONNECTING');
//     let p = 0;
//     const interval = setInterval(() => {
//       p += Math.random() * 10;
//       if (p >= 100) {
//         p = 100;
//         clearInterval(interval);
//         setStatus('SUCCESS');
//         setTimeout(onComplete, 2200); 
//       }
//       setProgress(Math.min(p, 100));
//     }, 400);
//   };

//   return (
//     <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden p-4 md:p-6 z-10">
      
//       <DataRain />

//       {/* 🔴 TOP HUD (Responsive Spacing) */}
//       <div className="absolute top-12 md:top-16 text-center space-y-2 z-20 px-4">
//         <p className="text-antique/40 text-[7px] md:text-[9px] tracking-[0.8em] md:tracking-[1.5em] uppercase animate-pulse">Establishing Legacy Link</p>
//         <h2 className="text-white font-serif italic text-lg md:text-3xl">"The sound that changed the world."</h2>
//       </div>

//       {/* 🔴 BROWSER WINDOW (Responsive Width & Scale) */}
//       <div className="browser-window relative z-10 w-full max-w-[340px] md:max-w-lg bg-[#c0c0c0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden mb-20 md:mb-0">
//         {/* Title Bar */}
//         <div className="bg-[#000080] p-1 flex justify-between items-center px-2">
//           <div className="flex items-center gap-2">
//             <span className="text-white font-bold text-[8px] md:text-[10px] tracking-tight font-sans italic">Netscape Navigator v1.0</span>
//           </div>
//           <div className="flex gap-1">
//             <div className="w-3 h-3 md:w-4 md:h-4 bg-[#c0c0c0] border border-gray-800 text-[8px] md:text-[10px] flex items-center justify-center text-black font-bold cursor-default">X</div>
//           </div>
//         </div>

//         {/* Content Area (Responsive Padding) */}
//         <div className="p-6 md:p-12 text-center space-y-6 md:space-y-8 bg-[#c0c0c0] text-black">
//           <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-400 mx-auto border-2 border-inset flex items-center justify-center shadow-inner relative group bg-gradient-to-br from-gray-200 to-gray-400">
//               <span className="text-3xl md:text-5xl group-hover:scale-110 transition-transform drop-shadow-lg">🌐</span>
//           </div>

//           <div className="space-y-3 md:space-y-4">
//             <h3 className="font-bold text-lg md:text-xl font-sans uppercase tracking-tighter text-blue-900 italic">AOL Dial-Up</h3>
//             <p className="text-gray-800 text-[10px] md:text-[11px] font-sans font-bold leading-relaxed max-w-xs mx-auto">
//               In 1990, this was the sound of freedom. <br className="hidden md:block"/> 
//               <span className="opacity-60 italic">"Welcome to the World Wide Web."</span>
//             </p>
//           </div>

//           <div className="min-h-[60px] md:min-h-[70px] flex items-center justify-center">
//             {status === 'IDLE' && (
//               <button 
//                 onClick={startConnection}
//                 className="w-full md:w-auto px-8 md:px-14 py-3 md:py-4 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-900 active:bg-gray-400 font-sans text-[10px] md:text-xs font-bold text-black shadow-[3px_3px_0px_rgba(0,0,0,0.2)] uppercase tracking-widest"
//               >
//                 Connect to Future
//               </button>
//             )}

//             {status === 'CONNECTING' && (
//               <div className="w-full space-y-4 md:space-y-6">
//                 <div className="text-[9px] md:text-[10px] font-bold font-sans h-4 uppercase tracking-wider text-blue-800 animate-pulse italic">
//                   {progress < 40 && "Negotiating..."}
//                   {progress >= 40 && progress < 80 && "Handshake..."}
//                   {progress >= 80 && "Opening..."}
//                 </div>
//                 <div className="w-full h-4 md:h-6 bg-gray-300 border-2 border-gray-600 p-[1px] md:p-[2px] relative">
//                   <div className="h-full bg-[#000080] transition-all duration-300" style={{ width: `${progress}%` }}></div>
//                 </div>
//                 <p className="text-[#000080] font-mono text-[8px] md:text-[9px] tracking-widest uppercase font-bold">56 KBPS // SYNC</p>
//               </div>
//             )}

//             {status === 'SUCCESS' && (
//               <div className="space-y-2 md:space-y-4 animate-bounce">
//                 <div className="text-green-800 font-black font-sans text-base md:text-lg tracking-tight uppercase">"You've Got Mail."</div>
//                 <p className="text-[8px] text-gray-600 uppercase font-bold tracking-[0.4em]">Connected</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* 🔴 RESPONSIVE FOOTER (Fixed Overlap) */}
//       <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black via-black/90 to-transparent z-20">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-10">
          
//           <div className="space-y-2 text-center md:text-left md:pl-64"> 
//             <p className="text-[8px] md:text-[10px] tracking-[0.6em] md:tracking-[1em] text-antique/50 uppercase font-black">Archive_Phase: 03</p>
//             <p className="text-antique italic text-base md:text-xl max-w-2xl leading-relaxed">
//               "It wasn't just data, it was our first global conversation."
//             </p>
//           </div>

//           <div className="hidden md:block text-right opacity-30">
//             <p className="text-[9px] tracking-[1.2em] text-white uppercase font-mono">Ref: 1990_WWW</p>
//           </div>
//         </div>
//       </div>

//       {/* Scanline Overlay */}
//       <div className="fixed inset-0 pointer-events-none z-[1000] opacity-[0.06] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"></div>
//     </div>
//   );
// };

// export default Era1990;


import React, { useState, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';

// --- 🟢 DATA RAIN (Unchanged) ---
const DataRain = () => {
  const streams = useMemo(() => {
    return [...Array(45)].map((_, i) => ({
      id: i,
      left: `${i * 2.2}%`,
      duration: `${Math.random() * 5 + 4}s`,
      delay: `${Math.random() * 6}s`,
      opacity: Math.random() * 0.5 + 0.3, 
      fontSize: `${Math.random() * 4 + 11}px`,
      content: `0x${Math.random().toString(16).slice(2, 6).toUpperCase()}`
    }));
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes streamUpHeavy {
            0% { transform: translateY(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-115vh); opacity: 0; }
          }
          .matrix-reverse-heavy {
            animation: streamUpHeavy linear infinite;
            writing-mode: vertical-rl;
            text-orientation: upright;
            letter-spacing: 5px;
            color: #00FF41; 
            text-shadow: 0 0 12px rgba(0, 255, 65, 0.9);
          }
        `}
      </style>
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-black">
        {streams.map((s) => (
          <div key={s.id} className="matrix-reverse-heavy font-mono font-black" 
               style={{ left: s.left, animationDuration: s.duration, animationDelay: s.delay, opacity: s.opacity, fontSize: s.fontSize, position: 'absolute', bottom: '-200px' }}>
            {s.content} {s.content}
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
      </div>
    </>
  );
};

const Era1990 = ({ onComplete }) => {
  const [status, setStatus] = useState('IDLE'); 
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    gsap.fromTo(".browser-window", 
      { opacity: 0, scale: 0.9, y: 20 }, 
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "expo.out" }
    );
  }, []);

  const startConnection = () => {
    setStatus('CONNECTING');
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 10;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setStatus('SUCCESS');
        setTimeout(onComplete, 2200); 
      }
      setProgress(Math.min(p, 100));
    }, 400);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between bg-black overflow-hidden pt-12 pb-24 md:pt-16 md:pb-16 z-10 px-4">
      
      <DataRain />

      {/* 🔴 TOP HUD (Scaled for small screens) */}
      <div className="relative text-center space-y-1 z-20 w-full">
        <p className="text-antique/40 text-[7px] md:text-[9px] tracking-[0.8em] md:tracking-[1.5em] uppercase animate-pulse">Establishing Legacy Link</p>
        <h2 className="text-white font-serif italic text-base md:text-3xl leading-tight">"The sound that changed the world."</h2>
      </div>

      {/* 🔴 BROWSER WINDOW (Responsive scaling for iPhone SE/S8+) */}
      <div className="browser-window relative z-10 w-full max-w-[320px] md:max-w-lg bg-[#c0c0c0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex-shrink-1">
        {/* Title Bar */}
        <div className="bg-[#000080] p-1 flex justify-between items-center px-2">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-[8px] md:text-[10px] tracking-tight font-sans italic">Netscape Navigator v1.0</span>
          </div>
          <div className="flex gap-1">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-[#c0c0c0] border border-gray-800 text-[8px] md:text-[10px] flex items-center justify-center text-black font-bold">X</div>
          </div>
        </div>

        {/* Content Area - Tighter padding for mobile */}
        <div className="p-4 md:p-12 text-center space-y-4 md:space-y-8 bg-[#c0c0c0] text-black">
          <div className="w-12 h-12 md:w-24 md:h-24 bg-gray-400 mx-auto border-2 border-inset flex items-center justify-center shadow-inner bg-gradient-to-br from-gray-200 to-gray-400">
              <span className="text-2xl md:text-5xl group-hover:scale-110 transition-transform">🌐</span>
          </div>

          <div className="space-y-2 md:space-y-4">
            <h3 className="font-bold text-base md:text-xl font-sans uppercase tracking-tighter text-blue-900 italic leading-none">AOL Dial-Up</h3>
            <p className="text-gray-800 text-[9px] md:text-[11px] font-sans font-bold leading-tight max-w-[240px] md:max-w-xs mx-auto">
              In 1990, the sound of freedom. <br className="hidden md:block"/> 
              <span className="opacity-60 italic text-[8px] md:text-[10px]">"Welcome to the WWW."</span>
            </p>
          </div>

          <div className="min-h-[50px] md:min-h-[70px] flex items-center justify-center">
            {status === 'IDLE' && (
              <button 
                onClick={startConnection}
                className="w-full md:w-auto px-6 md:px-14 py-3 md:py-4 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-900 active:bg-gray-400 font-sans text-[9px] md:text-xs font-bold text-black shadow-[2px_2px_0px_rgba(0,0,0,0.2)] uppercase tracking-widest"
              >
                Connect to Future
              </button>
            )}

            {status === 'CONNECTING' && (
              <div className="w-full space-y-3 md:space-y-6">
                <div className="text-[8px] md:text-[10px] font-bold font-sans h-3 uppercase tracking-wider text-blue-800 animate-pulse italic">
                  {progress < 100 ? "Syncing..." : "Connected"}
                </div>
                <div className="w-full h-3 md:h-6 bg-gray-300 border-2 border-gray-600 p-[1px] md:p-[2px] relative">
                  <div className="h-full bg-[#000080] transition-all duration-300" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            )}

            {status === 'SUCCESS' && (
              <div className="space-y-1 md:space-y-4 animate-bounce">
                <div className="text-green-800 font-black font-sans text-sm md:text-lg uppercase">"You've Got Mail."</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🔴 RESPONSIVE FOOTER (Z-Index fix for Restoration Bar) */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-3 z-20">
        <div className="space-y-1 text-center md:text-left md:pl-64"> 
          <p className="text-[7px] md:text-[10px] tracking-[0.6em] md:tracking-[1em] text-antique/50 uppercase font-black">Archive_Phase: 03</p>
          <p className="text-antique italic text-xs md:text-xl max-w-2xl leading-snug">
            "It wasn't just data, it was our first global conversation."
          </p>
        </div>

        <div className="hidden md:block text-right opacity-30">
          <p className="text-[9px] tracking-[1.2em] text-white uppercase font-mono">Ref: 1990_WWW</p>
        </div>
      </div>

      {/* Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1000] opacity-[0.06] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"></div>
    </div>
  );
};

export default Era1990;