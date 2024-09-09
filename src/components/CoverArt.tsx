import coverPhoto from "../assets/placeholder.svg";

export default function CoverArt() {
  return (
    <div className="flex cover-art mb-6 w-full justify-center">
      <img
        src={coverPhoto}
        alt="Placeholder Cover Art Image"
        className="rounded-md md:w-400 md:h-400"
      />
    </div>
  );
}
