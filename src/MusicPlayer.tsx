import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

interface Song {
  // Define the expected structure of a song in the playlist
  title: string;
  artist: string;
  album: string;
  audio: string; // URL of the audio file
}

export default function MusicPlayer() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(0); // Initial song

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist");
      const data: Song [] = await response.json();
      setSongs(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex md:flex-row p-0 justify-center h-full w-full max-w-4xl ml-auto mr-auto overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-vista-blue-100 to-butterfly-bush-400">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}
