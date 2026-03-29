

// import React, { useState, useMemo, useEffect } from 'react';
// import { gsap } from 'gsap';
// // 1. Naya Master Hook Import kiya
// import useAudio from './hooks/useAudio'; 

// // Components & Sections Imports
// import HUD from './components/HUD';
// import Hero from './sections/Hero';
// import Era1969 from './sections/Era1969';
// import DiaryPage from './sections/DiaryPage';
// import Era1980 from './sections/Era1980';
// import Era1990 from './sections/Era1990';
// import Diary90 from './sections/Diary90';
// import Era2000 from './sections/Era2000';
// import Diary2000 from './sections/Diary2000';
// import Era2016 from './sections/Era2016';
// import Era2021 from './sections/Era2021';
// import Era2026 from './sections/Era2026';

// // --- 🟢 MASTER DATA RAIN ---
// const DataRain = () => {
//   const streams = useMemo(() => {
//     return [...Array(55)].map((_, i) => ({
//       id: i,
//       left: `${i * 1.8}%`,
//       duration: `${Math.random() * 6 + 4}s`,
//       delay: `${Math.random() * 5}s`,
//       opacity: Math.random() * 0.4 + 0.1,
//       fontSize: `${Math.random() * 4 + 11}px`,
//       content: `0x${Math.random().toString(16).slice(2, 6).toUpperCase()}`
//     }));
//   }, []);

//   return (
//     <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
//       {streams.map((s) => (
//         <div key={s.id} className="matrix-stream"
//           style={{
//             left: s.left,
//             animationDuration: s.duration,
//             animationDelay: s.delay,
//             opacity: s.opacity,
//             fontSize: s.fontSize,
//             position: 'absolute'
//           }}>
//           {s.content} {s.content}
//         </div>
//       ))}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
//     </div>
//   );
// };

// // --- 🟢 NARRATIVE INTRO ---
// const NarrativeIntro = ({ userName, onNext }) => {
//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.fromTo(".story-word",
//       { opacity: 0, y: 15, filter: "blur(10px)" },
//       { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, stagger: 0.15 }
//     );
//   }, []);

//   const storyLines = `The year is 2026. The internet has collapsed. You are researcher ${userName}. Your mission: Restore the digital fragments of a lost 50-year diary.`;

//   return (
//     <div className="animate-fadeIn space-y-12 text-center max-w-3xl px-6">
//       <p className="text-xl md:text-2xl italic font-serif leading-relaxed text-antique/90 flex flex-wrap justify-center gap-x-2">
//         {storyLines.split(" ").map((word, i) => (
//           <span key={i} className="story-word inline-block">{word}</span>
//         ))}
//       </p>
//       <div className="story-btn pt-8">
//         <button onClick={onNext} className="px-14 py-6 border-2 border-antique text-antique font-bold tracking-[0.6em] text-[11px] uppercase hover:bg-antique hover:text-black transition-all">
//           Analyze Fragment
//         </button>
//       </div>
//     </div>
//   );
// };

// // --- 🔵 MASTER APP ---
// function App() {
//   const [isStarted, setIsStarted] = useState(false);
//   const [currentEra, setCurrentEra] = useState('Hero');
//   const [restorationProgress, setRestorationProgress] = useState(0);
//   const [status, setStatus] = useState('OFFLINE');
//   const [userName, setUserName] = useState('');
//   const [introStep, setIntroStep] = useState('identity');

//   // 2. Yahan Master Hook use kiya (playGlobalMusic added)
//   const { playWipe, playGlobalMusic } = useAudio();

//   // 3. User interaction handler for Music + Start
//   const handleInteraction = () => {
//     playGlobalMusic(); // Background music ko trigger karega
//     if (!isStarted && introStep === 'ready') {
//       setIsStarted(true);
//       setStatus('INITIALIZING');
//     }
//   };

//   const next = (era, stat) => {
//     playWipe(); // Era change par sound
//     setCurrentEra(era);
//     setStatus(stat);
//   };

//   return (
//     <main
//       onClick={handleInteraction} // Global interaction bypass for browser
//       className="relative w-full h-screen bg-black text-antique overflow-hidden font-sans px-4 md:px-0"
//     >
//       <DataRain />

//       {/* Intro Overlay */}
//       {!isStarted && (
//         <div className="relative z-[500] fixed inset-0 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
//           <div className="max-w-4xl w-full border border-antique/20 bg-[#080808]/95 p-8 md:p-20 shadow-2xl relative">
//             {introStep === 'identity' && (
//               <form onSubmit={(e) => { e.preventDefault(); if (userName) setIntroStep('story'); }} className="space-y-12 text-center">
//                 <h1 className="text-2xl md:text-5xl font-serif italic text-antique">Who is attempting this restoration?</h1>
//                 <input autoFocus className="w-full bg-transparent border-b-2 border-antique/20 py-4 outline-none text-antique tracking-[0.5em] uppercase text-xl md:text-4xl text-center" placeholder="ENTER NAME..." value={userName} onChange={(e) => setUserName(e.target.value)} />
//               </form>
//             )}
//             {introStep === 'story' && <NarrativeIntro userName={userName} onNext={() => setIntroStep('ready')} />}
//             {introStep === 'ready' && (
//               <div className="text-center space-y-12">
//                 <h2 className="text-5xl md:text-9xl font-serif italic text-antique animate-pulse">The Internet Diary</h2>
//                 <button onClick={handleInteraction} className="px-10 md:px-20 py-6 md:py-8 border-2 border-antique font-black tracking-[1em] text-[10px] md:text-[12px] uppercase hover:bg-antique hover:text-black transition-all">Restore Diary</button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Main Experience */}
//       {isStarted && (
//         <div className="h-full w-full animate-fadeIn relative">
//           <HUD progress={restorationProgress} era={currentEra.toUpperCase()} restorationStatus={status} />

//           <div className="relative z-10 w-full h-full">
//             {(() => {
//               switch (currentEra) {
//                 case 'Hero': return <Hero onComplete={() => next('1969', 'CONNECTED: ARPANET')} setGlobalProgress={setRestorationProgress} />;
//                 case '1969': return <Era1969 onComplete={() => next('Diary', 'DECODING...')} />;
//                 case 'Diary': return <DiaryPage onComplete={() => next('1980', 'BOOTING_V8.0')} />;
//                 case '1980': return <Era1980 onComplete={() => next('1990', 'DIALUP_SYNC')} />;
//                 case '1990': return <Era1990 onComplete={() => next('Diary90', 'WWW_GRANTED')} />;
//                 case 'Diary90': return <Diary90 onComplete={() => next('2000', 'SYNCING_NODES')} />;
//                 case '2000': return <Era2000 onComplete={() => next('Diary2000', 'SOCIAL_RESTORED')} />;
//                 case 'Diary2000': return <Diary2000 onComplete={() => next('2016', 'FEED_ARTIFACT')} />;
//                 case '2016': return <Era2016 userName={userName} onComplete={() => next('2021', 'ISOLATION_PROTOCOL')} />;
//                 case '2021': return <Era2021 userName={userName} onComplete={() => next('2026', 'SINGULARITY_LINK')} />;
//                 case '2026': return <Era2026 userName={userName} onComplete={() => next('FINALE', 'COMPLETE')} />;
//                 case 'FINALE': return (
//                   <div className="flex flex-col items-center justify-center h-full text-center p-6 md:p-10 relative z-[100]">
//                     <h1 className="text-4xl md:text-8xl font-serif italic mb-8 text-antique animate-pulse uppercase">Mission Accomplished</h1>
//                     <p className="text-antique/40 tracking-[0.4em] md:tracking-[0.8em] uppercase text-[9px] md:text-[11px] mb-12">Restored by {userName}.</p>
//                     <button onClick={() => window.location.reload()} className="px-10 py-5 border-2 border-antique text-antique text-[10px] uppercase font-black">Restart Simulation</button>
//                   </div>
//                 );
//                 default: return null;
//               }
//             })()}
//           </div>
//           <div className="fixed inset-0 pointer-events-none z-[1000] opacity-[0.08] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]"></div>
//         </div>
//       )}
//     </main>
//   );
// }

// export default App;

// import React, { useState, useMemo, useEffect } from 'react';
// import { gsap } from 'gsap';
// // 1. Naya Master Hook Import kiya
// import useAudio from './hooks/useAudio'; 

// // Components & Sections Imports
// import HUD from './components/HUD';
// import Hero from './sections/Hero';
// import Era1969 from './sections/Era1969';
// import DiaryPage from './sections/DiaryPage';
// import Era1980 from './sections/Era1980';
// import Era1990 from './sections/Era1990';
// import Diary90 from './sections/Diary90';
// import Era2000 from './sections/Era2000';
// import Diary2000 from './sections/Diary2000';
// import Era2016 from './sections/Era2016';
// import Era2021 from './sections/Era2021';
// import Era2026 from './sections/Era2026';

// // --- 🟢 MASTER DATA RAIN ---
// const DataRain = () => {
//   const streams = useMemo(() => {
//     return [...Array(55)].map((_, i) => ({
//       id: i,
//       left: `${i * 1.8}%`,
//       duration: `${Math.random() * 6 + 4}s`,
//       delay: `${Math.random() * 5}s`,
//       opacity: Math.random() * 0.4 + 0.1,
//       fontSize: `${Math.random() * 4 + 11}px`,
//       content: `0x${Math.random().toString(16).slice(2, 6).toUpperCase()}`
//     }));
//   }, []);

//   return (
//     <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
//       {streams.map((s) => (
//         <div key={s.id} className="matrix-stream"
//           style={{
//             left: s.left,
//             animationDuration: s.duration,
//             animationDelay: s.delay,
//             opacity: s.opacity,
//             fontSize: s.fontSize,
//             position: 'absolute'
//           }}>
//           {s.content} {s.content}
//         </div>
//       ))}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
//     </div>
//   );
// };

// // --- 🟢 NARRATIVE INTRO ---
// const NarrativeIntro = ({ userName, onNext }) => {
//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.fromTo(".story-word",
//       { opacity: 0, y: 15, filter: "blur(10px)" },
//       { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, stagger: 0.15 }
//     );
//   }, []);

//   const storyLines = `The year is 2026. The internet has collapsed. You are researcher ${userName}. Your mission: Restore the digital fragments of a lost 50-year diary.`;

//   return (
//     <div className="animate-fadeIn space-y-12 text-center max-w-3xl px-6">
//       <p className="text-xl md:text-2xl italic font-serif leading-relaxed text-antique/90 flex flex-wrap justify-center gap-x-2">
//         {storyLines.split(" ").map((word, i) => (
//           <span key={i} className="story-word inline-block">{word}</span>
//         ))}
//       </p>
//       <div className="story-btn pt-8">
//         <button onClick={onNext} className="px-14 py-6 border-2 border-antique text-antique font-bold tracking-[0.6em] text-[11px] uppercase hover:bg-antique hover:text-black transition-all">
//           Analyze Fragment
//         </button>
//       </div>
//     </div>
//   );
// };

// // --- 🔵 MASTER APP ---
// function App() {
//   const [isStarted, setIsStarted] = useState(false);
//   const [currentEra, setCurrentEra] = useState('Hero');
//   const [restorationProgress, setRestorationProgress] = useState(0);
//   const [status, setStatus] = useState('OFFLINE');
//   const [userName, setUserName] = useState('');
//   const [introStep, setIntroStep] = useState('identity');

//   const { playWipe, playGlobalMusic } = useAudio();

//   const handleInteraction = () => {
//     playGlobalMusic(); 
//     if (!isStarted && introStep === 'ready') {
//       setIsStarted(true);
//       setStatus('INITIALIZING');
//     }
//   };

//   const next = (era, stat) => {
//     playWipe(); 
//     setCurrentEra(era);
//     setStatus(stat);
//   };

//   return (
//     <main
//       // 🟢 Is onClick interaction se audio context block nahi hoga
//       onClick={handleInteraction} 
//       className="relative w-full h-screen bg-black text-antique overflow-hidden font-sans px-4 md:px-0"
//     >
//       <DataRain />

//       {!isStarted && (
//         <div className="relative z-[500] fixed inset-0 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
//           <div className="max-w-4xl w-full border border-antique/20 bg-[#080808]/95 p-8 md:p-20 shadow-2xl relative">
//             {introStep === 'identity' && (
//               <form onSubmit={(e) => { e.preventDefault(); if (userName) setIntroStep('story'); }} className="space-y-12 text-center">
//                 <h1 className="text-2xl md:text-5xl font-serif italic text-antique">Who is attempting this restoration?</h1>
//                 <input autoFocus className="w-full bg-transparent border-b-2 border-antique/20 py-4 outline-none text-antique tracking-[0.5em] uppercase text-xl md:text-4xl text-center" placeholder="ENTER NAME..." value={userName} onChange={(e) => setUserName(e.target.value)} />
//               </form>
//             )}
//             {introStep === 'story' && <NarrativeIntro userName={userName} onNext={() => setIntroStep('ready')} />}
//             {introStep === 'ready' && (
//               <div className="text-center space-y-12">
//                 <h2 className="text-5xl md:text-9xl font-serif italic text-antique animate-pulse">The Internet Diary</h2>
//                 <button onClick={handleInteraction} className="px-10 md:px-20 py-6 md:py-8 border-2 border-antique font-black tracking-[1em] text-[10px] md:text-[12px] uppercase hover:bg-antique hover:text-black transition-all">Restore Diary</button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {isStarted && (
//         <div className="h-full w-full animate-fadeIn relative">
//           <HUD progress={restorationProgress} era={currentEra.toUpperCase()} restorationStatus={status} />

//           <div className="relative z-10 w-full h-full">
//             {(() => {
//               switch (currentEra) {
//                 case 'Hero': return <Hero onComplete={() => next('1969', 'CONNECTED: ARPANET')} setGlobalProgress={setRestorationProgress} />;
//                 case '1969': return <Era1969 onComplete={() => next('Diary', 'DECODING...')} />;
//                 case 'Diary': return <DiaryPage onComplete={() => next('1980', 'BOOTING_V8.0')} />;
//                 case '1980': return <Era1980 onComplete={() => next('1990', 'DIALUP_SYNC')} />;
//                 case '1990': return <Era1990 onComplete={() => next('Diary90', 'WWW_GRANTED')} />;
//                 case 'Diary90': return <Diary90 onComplete={() => next('2000', 'SYNCING_NODES')} />;
//                 case '2000': return <Era2000 onComplete={() => next('Diary2000', 'SOCIAL_RESTORED')} />;
//                 case 'Diary2000': return <Diary2000 onComplete={() => next('2016', 'FEED_ARTIFACT')} />;
//                 case '2016': return <Era2016 userName={userName} onComplete={() => next('2021', 'ISOLATION_PROTOCOL')} />;
//                 case '2021': return <Era2021 userName={userName} onComplete={() => next('2026', 'SINGULARITY_LINK')} />;
//                 case '2026': return <Era2026 userName={userName} onComplete={() => next('FINALE', 'COMPLETE')} />;
//                 case 'FINALE': return (
//                   <div className="flex flex-col items-center justify-center h-full text-center p-6 md:p-10 relative z-[100]">
//                     <h1 className="text-4xl md:text-8xl font-serif italic mb-8 text-antique animate-pulse uppercase">Mission Accomplished</h1>
//                     <p className="text-antique/40 tracking-[0.4em] md:tracking-[0.8em] uppercase text-[9px] md:text-[11px] mb-12">Restored by {userName}.</p>
//                     <button onClick={() => window.location.reload()} className="px-10 py-5 border-2 border-antique text-antique text-[10px] uppercase font-black">Restart Simulation</button>
//                   </div>
//                 );
//                 default: return null;
//               }
//             })()}
//           </div>
//           <div className="fixed inset-0 pointer-events-none z-[1000] opacity-[0.08] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]"></div>
//         </div>
//       )}
//     </main>
//   );
// }

// export default App;
import React, { useState, useMemo, useEffect } from 'react';
import { gsap } from 'gsap';
import useAudio from './hooks/useAudio'; 

// Components & Sections Imports
import HUD from './components/HUD';
import Hero from './sections/Hero';
import Era1969 from './sections/Era1969';
import DiaryPage from './sections/DiaryPage';
import Era1980 from './sections/Era1980';
import Era1990 from './sections/Era1990';
import Diary90 from './sections/Diary90';
import Era2000 from './sections/Era2000';
import Diary2000 from './sections/Diary2000';
import Era2016 from './sections/Era2016';
import Era2021 from './sections/Era2021';
import Era2026 from './sections/Era2026';

const DataRain = () => {
  const streams = useMemo(() => {
    return [...Array(55)].map((_, i) => ({
      id: i,
      left: `${i * 1.8}%`,
      duration: `${Math.random() * 6 + 4}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.4 + 0.1,
      fontSize: `${Math.random() * 4 + 11}px`,
      content: `0x${Math.random().toString(16).slice(2, 6).toUpperCase()}`
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {streams.map((s) => (
        <div key={s.id} className="matrix-stream" 
             style={{ left: s.left, animationDuration: s.duration, animationDelay: s.delay, opacity: s.opacity, fontSize: s.fontSize, position: 'absolute' }}>
          {s.content} {s.content}
        </div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
    </div>
  );
};

const NarrativeIntro = ({ userName, onNext }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".story-word", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 });
  }, []);

  return (
    <div className="animate-fadeIn space-y-12 text-center max-w-3xl px-6">
      <p className="text-xl md:text-2xl italic font-serif leading-relaxed text-antique/90 flex flex-wrap justify-center gap-x-2">
        The year is 2026. The internet has collapsed. You are researcher {userName}. Your mission: Restore the digital fragments of a lost 50-year diary.
      </p>
      <div className="story-btn pt-8">
        <button onClick={onNext} className="px-14 py-6 border-2 border-antique text-antique font-bold tracking-[0.6em] text-[11px] uppercase hover:bg-antique hover:text-black transition-all">
          Analyze Fragment
        </button>
      </div>
    </div>
  );
};

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentEra, setCurrentEra] = useState('Hero');
  const [restorationProgress, setRestorationProgress] = useState(0);
  const [status, setStatus] = useState('OFFLINE');
  const [userName, setUserName] = useState('');
  const [introStep, setIntroStep] = useState('identity');

  const { playWipe, playGlobalMusic } = useAudio();

  const handleInteraction = () => {
    playGlobalMusic(); 
    if (!isStarted && introStep === 'ready') {
      setIsStarted(true);
      setStatus('INITIALIZING');
    }
  };

  const next = (era, stat) => {
    playWipe(); 
    setCurrentEra(era);
    setStatus(stat);
  };

  return (
    <main
      onClick={handleInteraction} 
      className="relative w-full h-screen bg-black text-antique overflow-hidden font-sans px-4 md:px-0"
    >
      <DataRain />

      {!isStarted && (
        <div className="relative z-[500] fixed inset-0 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="max-w-4xl w-full border border-antique/20 bg-[#080808]/95 p-8 md:p-20 shadow-2xl relative">
            {introStep === 'identity' && (
              <form onSubmit={(e) => { e.preventDefault(); if (userName) setIntroStep('story'); }} className="space-y-12 text-center">
                <h1 className="text-2xl md:text-5xl font-serif italic text-antique">Who is attempting this restoration?</h1>
                <input autoFocus className="w-full bg-transparent border-b-2 border-antique/20 py-4 outline-none text-antique tracking-[0.5em] uppercase text-xl md:text-4xl text-center" placeholder="ENTER NAME..." value={userName} onChange={(e) => setUserName(e.target.value)} />
              </form>
            )}
            {introStep === 'story' && <NarrativeIntro userName={userName} onNext={() => setIntroStep('ready')} />}
            {introStep === 'ready' && (
              <div className="text-center space-y-12">
                <h2 className="text-5xl md:text-9xl font-serif italic text-antique animate-pulse">The Internet Diary</h2>
                <button onClick={handleInteraction} className="px-10 md:px-20 py-6 md:py-8 border-2 border-antique font-black tracking-[1em] text-[10px] md:text-[12px] uppercase hover:bg-antique hover:text-black transition-all">Restore Diary</button>
              </div>
            )}
          </div>
        </div>
      )}

      {isStarted && (
        <div className="h-full w-full animate-fadeIn relative">
          <HUD progress={restorationProgress} era={currentEra.toUpperCase()} restorationStatus={status} />
          <div className="relative z-10 w-full h-full">
            {(() => {
              switch (currentEra) {
                case 'Hero': return <Hero onComplete={() => next('1969', 'CONNECTED: ARPANET')} setGlobalProgress={setRestorationProgress} />;
                case '1969': return <Era1969 onComplete={() => next('Diary', 'DECODING...')} />;
                case 'Diary': return <DiaryPage onComplete={() => next('1980', 'BOOTING_V8.0')} />;
                case '1980': return <Era1980 onComplete={() => next('1990', 'DIALUP_SYNC')} />;
                case '1990': return <Era1990 onComplete={() => next('Diary90', 'WWW_GRANTED')} />;
                case 'Diary90': return <Diary90 onComplete={() => next('2000', 'SYNCING_NODES')} />;
                case '2000': return <Era2000 onComplete={() => next('Diary2000', 'SOCIAL_RESTORED')} />;
                case 'Diary2000': return <Diary2000 onComplete={() => next('2016', 'FEED_ARTIFACT')} />;
                case '2016': return <Era2016 userName={userName} onComplete={() => next('2021', 'ISOLATION_PROTOCOL')} />;
                case '2021': return <Era2021 userName={userName} onComplete={() => next('2026', 'SINGULARITY_LINK')} />;
                case '2026': return <Era2026 userName={userName} onComplete={() => next('FINALE', 'COMPLETE')} />;
                case 'FINALE': return (
                  <div className="flex flex-col items-center justify-center h-full text-center p-6 md:p-10 relative z-[100]">
                    <h1 className="text-4xl md:text-8xl font-serif italic mb-8 text-antique animate-pulse uppercase">Mission Accomplished</h1>
                    <button onClick={() => window.location.reload()} className="px-10 py-5 border-2 border-antique text-antique text-[10px] uppercase font-black">Restart Simulation</button>
                  </div>
                );
                default: return null;
              }
            })()}
          </div>
          <div className="fixed inset-0 pointer-events-none z-[1000] opacity-[0.08] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]"></div>
        </div>
      )}
    </main>
  );
}

export default App;