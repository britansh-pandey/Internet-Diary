// import React from 'react';

// const HUD = ({ progress, era, restorationStatus }) => {
//   return (
//     <div className="fixed inset-0 pointer-events-none z-[100] p-6 md:p-10">
//       {/* Top Left: Protocol */}
//       <div className="absolute top-6 left-6 border-l border-antique/40 pl-4 py-1 bg-black/20">
//         <p className="text-[9px] tracking-[0.4em] font-mono text-antique/60 uppercase">ARCHEOLOGY_PROTOCOL_v2.0</p>
//       </div>

//       {/* Top Right: Status */}
//       <div className="absolute top-6 right-6 text-right border-r border-antique/40 pr-4 py-1 bg-black/20">
//         <p className="text-[9px] tracking-[0.2em] font-mono uppercase italic">
//           STATUS: <span className="text-antique animate-pulse">{restorationStatus}</span>
//         </p>
//         <p className="text-[7px] opacity-30 mt-1 font-mono tracking-widest leading-none">LOC: 40.71° N, 74.00° W</p>
//       </div>

//       {/* Bottom Left: Restoration Progress */}
//       <div className="absolute bottom-10 left-10 w-48">
//         <div className="flex justify-between items-end mb-2">
//           <p className="text-[8px] tracking-widest opacity-40 font-mono italic leading-none">DATA_RESTORATION</p>
//           <p className="text-2xl font-serif italic text-antique leading-none">{progress}%</p>
//         </div>
//         <div className="h-[1px] w-full bg-antique/10 relative overflow-hidden">
//           <div 
//             className="absolute h-full bg-antique transition-all duration-700 ease-out shadow-[0_0_10px_#d4af37]" 
//             style={{ width: `${progress}%` }}
//           ></div>
//         </div>
//       </div>

//       {/* Bottom Right: Era Display */}
//       <div className="absolute bottom-10 right-10 text-right">
//         <p className="text-[9px] tracking-[0.4em] opacity-30 uppercase font-mono mb-1 leading-none">TIMELINE_PHASE</p>
//         <h2 className="text-6xl font-serif italic text-antique tracking-tighter leading-none">
//           {era}
//           <span className="inline-block w-[1px] h-10 bg-antique ml-4 animate-pulse align-middle"></span>
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default HUD;

import React from 'react';

const HUD = ({ progress, era, restorationStatus }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] p-4 md:p-10">
      
      {/* 🟢 TOP LEFT: Protocol (Mobile par hide kiya hai taaki screen saaf rahe) */}
      <div className="hidden md:block absolute top-6 left-6 border-l border-antique/40 pl-4 py-1 bg-black/20">
        <p className="text-[9px] tracking-[0.4em] font-mono text-antique/60 uppercase">
          ARCHEOLOGY_PROTOCOL_v2.0
        </p>
      </div>

      {/* 🟢 TOP RIGHT: Status & Loc (Mobile par hide kiya hai) */}
      <div className="hidden md:block absolute top-6 right-6 text-right border-r border-antique/40 pr-4 py-1 bg-black/20">
        <p className="text-[9px] tracking-[0.2em] font-mono uppercase italic">
          STATUS: <span className="text-antique animate-pulse">{restorationStatus}</span>
        </p>
        <p className="text-[7px] opacity-30 mt-1 font-mono tracking-widest leading-none">
          LOC: 40.71° N, 74.00° W
        </p>
      </div>

      {/* 🟢 BOTTOM LEFT: Restoration Progress (Mobile-Friendly size) */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-32 md:w-48">
        <div className="flex justify-between items-end mb-2">
          <p className="text-[7px] md:text-[8px] tracking-widest opacity-40 font-mono italic leading-none">
            DATA_RESTORATION
          </p>
          <p className="text-xl md:text-2xl font-serif italic text-antique leading-none">
            {progress}%
          </p>
        </div>
        <div className="h-[1px] w-full bg-antique/10 relative overflow-hidden">
          <div 
            className="absolute h-full bg-antique transition-all duration-700 ease-out shadow-[0_0_10px_#d4af37]" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {/* Mobile-only status hint */}
        <p className="md:hidden text-[6px] tracking-widest opacity-30 mt-2 uppercase font-mono italic">
          SYNCING: {restorationStatus}
        </p>
      </div>

      {/* 🟢 BOTTOM RIGHT: Era Display (Dynamic text size) */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right">
        <p className="text-[7px] md:text-[9px] tracking-[0.4em] opacity-30 uppercase font-mono mb-1 leading-none">
          TIMELINE_PHASE
        </p>
        <h2 className="text-3xl md:text-6xl font-serif italic text-antique tracking-tighter leading-none">
          {era}
          <span className="inline-block w-[1px] h-6 md:h-10 bg-antique ml-2 md:ml-4 animate-pulse align-middle"></span>
        </h2>
      </div>

    </div>
  );
};

export default HUD;