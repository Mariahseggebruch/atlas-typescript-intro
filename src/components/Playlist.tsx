import React from "react";
import PlayListItem from "./PlayListItem";

interface PlaylistProps {
  songs: Song[];
  currentlyPlaying: number;
  onSongClick: (index: number) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ songs, currentlyPlaying, onSongClick }) => {
  return (
    <div className="p-8 w-full border-t md:border-l md:border-t-0">
      <h2 className="mb-4 text-lg font-semibold">Playlist</h2>
      {songs.map((song, index) => (
        <PlayListItem
          key={song.id || song.title}
          title={song.title}
          artist={song.artist}
          length={song.length}
          isSelected={index === currentlyPlaying}
          onClick={() => onSongClick(index)}
        />
      ))}
    </div>
  );
};

export default Playlist;
