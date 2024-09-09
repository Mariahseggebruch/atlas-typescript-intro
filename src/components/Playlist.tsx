import PlayListItem from "./PlayListItem";

function Playlist() {
  const playlistData = [
    { title: "Evan Finds the Third Room", artist: "Khruangbin", length: "4:01" },
    { title: "It's Like", artist: "Tipper", length: "3:38" },
    { title: "Pink Pony Club", artist: "Chappel Roan", length: "4:18" },
    { title: "Babe, I'm Gonna Leave You", artist: "Led Zeppelin", length: "6:43" },
    { title: "Eye In The Sky", artist: "Alan Parsons Project", length: "4:36" },
    { title: "Seven Bridges Road (Live)", artist: "Eagles", length: "3:05" },
    { title: "Stash Pad", artist: "Klo", length: "3:14" },
    { title: "Whack Lack Vol.3", artist: "Fanu", length: "4:51" },
    { title: "How We Do", artist: "Chmura", length: "2:38" },
    {
      title: "Sayonara",
      artist: "Tipper",
      length: "4:27",
    },
  ];
  return (
    <div className="p-8 w-full border-t md:border-l md:border-t-0">
      <h2 className="mb-4 text-lg font-semibold">Playlist</h2>
      {playlistData.map((item) => (
        <PlayListItem
          key={item.title}
          title={item.title}
          artist={item.artist}
          length={item.length}
        />
      ))}
    </div>
  );
}

export default Playlist;
