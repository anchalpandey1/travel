import React, { useState, useRef } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/solid';

import b from '../../assets/images/b.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="hero relative overflow-y-hidden md:h-[35em]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="hero-video"
        onClick={togglePlayPause}
      >
        <source src={b} type="video/mp4" />
      </video>
      <div className="absolute bottom-4 left-4">
        <button
          className="play-pause-button focus:outline-none text-red-500"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <PauseIcon className="w-6 h-6" />
          ) : (
            <PlayIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Hero;
