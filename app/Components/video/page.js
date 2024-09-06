'use client';
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

function VideoPage() {
  const [mute, setMute] = useState(true); // Initially muted
  const videoRef = useRef(null); // Reference to control the video element

  const handleMuteToggle = () => {
    setMute((prevMute) => !prevMute);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Mute or unmute the video
    }
  };

  return (
    <div>
<div className="relative object-cover h-full w-full clip-corner"><video
          ref={videoRef}
          autoPlay
          loop
          muted={false}
          className="object-cover h-full w-full ;"
        >
          <source
            src="./background.mp4"
            type="video/mp4"
          />
        </video>

        {/* Mute Button */}
        <button
          onClick={handleMuteToggle}
          className="absolute top-4 left-4 bg-white bg-opacity-60 p-2 rounded-full"
        >
          {mute ? (
            <SpeakerXMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <SpeakerWaveIcon className="h-6 w-6 text-black" />
          )}
        </button>

        
      </div>
      {/* Content Overlay */}
      <div className="space-y-3 w-1/3 font-sans bg-gradient-to-bl from-sky-700 via-blue-700 to-sky-400 p-6 rounded-3xl shadow-lg text-white absolute mt-[-17.5rem] right-0">
          <h1 className="uppercase font-extrabold text-5xl">
            Welcome To, <br /> Khasu Dayan
          </h1>
          <p className='font-semibold'>
            We aim to provide our customers and partners with the highest
            quality of service. The ultimate goal of our business is to ensure
            that our work is performed in a timely and safe manner.
          </p>
          <Button className="text-blue-500 text-xl p-6" variant="outline">
            Write us
            <ChevronRightIcon className="h-4 w-4 text-blue-500" />
          </Button>
        </div>
      </div>
      
  );
}

export default VideoPage;
