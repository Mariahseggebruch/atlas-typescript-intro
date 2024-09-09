import React, { useState } from 'react';
import { SpeakerXMarkIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';

const VolumeControl = () => {
  const [volume, setVolume] = useState(50); // Initial volume

  const handleVolumeChange = (event) => {
    setVolume(parseInt(event.target.value, 10));
  };

  return (
    <div className="flex items-center space-x-2">
      {volume === 0 ? (
        <SpeakerXMarkIcon className="h-5 w-5 text-gray-400" />
      ) : (
        <SpeakerWaveIcon className="h-5 w-5 text-gray-600" />
      )}
      <div className="relative w-64 h-2 rounded-full bg-gray-200">
        <div
          className={`absolute h-full rounded-full bg-blue-500 transition-all duration-300 ease-in-out`}
          style={{ width: `${volume}%` }}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className={`
            absolute w-full h-full appearance-none bg-transparent focus:outline-none
            &::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 12px;
              height: 12px;
              background-color: #4b5563;
              border-radius: 50%;
              cursor: pointer;
            }
          `}
        />
      </div>
    </div>
  );
};

export default VolumeControl;
