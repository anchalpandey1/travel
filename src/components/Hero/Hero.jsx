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
    <div className="hero relative overflow-y-hidden h-80"> {/* Adjust the height as needed */}
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
      <div className="play-pause-overlay absolute inset-0 flex items-center justify-center">
        <button
          className="play-pause-button focus:outline-none"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <PauseIcon className="w-10 h-10" />
          ) : (
            <PlayIcon className="w-10 h-10" />
          )}
        </button>
      </div>
      </div>
  );
};

export default Hero;
