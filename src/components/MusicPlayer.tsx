'use client';

import { useEffect, useRef } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/public/game-photos/bg.mp3'); // <-- путь к твоему mp3 в public
    audio.loop = true;
    audio.volume = 0.6; // можно убрать или поменять
    audioRef.current = audio;

    const start = () => {
      audio.play().catch(() => {});
      window.removeEventListener('click', start);
      window.removeEventListener('touchstart', start);
    };

    window.addEventListener('click', start);
    window.addEventListener('touchstart', start);

    return () => {
      window.removeEventListener('click', start);
      window.removeEventListener('touchstart', start);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null;
  
}
