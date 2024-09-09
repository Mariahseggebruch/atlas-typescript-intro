import React, { useState } from 'react';
import { PauseIcon, PlayIcon, ForwardIcon, BackwardIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid';

const PlayControls = ({ onPlayPause, onRewind, onFastForward, onShuffle }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
    onPlayPause();
  };

  return (
    <div className="controls-container w-full flex justify-between">
      <button className="text-gray-400 hover:text-gray-700">1x</button>
      <button onClick={onRewind} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <BackwardIcon className="h-5 w-5 text-gray-600" />
      </button>
      <button onClick={handlePlayPauseClick} className="p-3 rounded-full bg-black hover:bg-gray-800">
        {isPlaying ? <PauseIcon className="h-6 w-6 text-white" /> : <PlayIcon className="h-6 w-6 text-white" />}
      </button>
      <button onClick={onFastForward} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <ForwardIcon className="h-5 w-5 text-gray-600" />
      </button>
      <button onClick={onShuffle} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <ArrowPathRoundedSquareIcon className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
};

export default PlayControls;
