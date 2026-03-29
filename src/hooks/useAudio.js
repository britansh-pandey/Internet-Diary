



import { useEffect, useRef } from 'react';
import { Howl } from 'howler';

const useAudio = () => {
  const wipeSound = useRef(null);
  const ambientSound = useRef(null);
  const typewriterSound = useRef(null);
  const globalMusic = useRef(null); // among-us logic added here

  useEffect(() => {
    // 1. Wipe/Transition Sound
    wipeSound.current = new Howl({
      src: ['https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'], 
      volume: 0.2,
      rate: 1.5
    });

    // 2. Global Background Music (Among Us)
    globalMusic.current = new Howl({
      src: ['/sounds/among-us-theme.mp3'], // Path check kar lena
      loop: true,
      volume: 0.15,
      html5: false, // Zaroori hai pool bachane ke liye
      preload: true
    });

    // 3. Typewriter Sound
    typewriterSound.current = new Howl({
      src: ['https://assets.mixkit.co/active_storage/sfx/2355/2355-preview.mp3'], 
      volume: 0.1,
      rate: 1.8 
    });

    return () => {
      if (wipeSound.current) wipeSound.current.unload();
      if (globalMusic.current) globalMusic.current.unload();
      if (typewriterSound.current) typewriterSound.current.unload();
    };
  }, []);

  const playWipe = () => {
    if (wipeSound.current) wipeSound.current.play();
  };

  const playGlobalMusic = () => {
    if (globalMusic.current && !globalMusic.current.playing()) {
      globalMusic.current.play();
      console.log("Music Started!"); 
    }
  };

  const playTypewriter = () => {
    if (typewriterSound.current) {
      typewriterSound.current.rate(1.6 + Math.random() * 0.4);
      typewriterSound.current.play();
    }
  };

  return { playWipe, playTypewriter, playGlobalMusic };
};

export default useAudio;


