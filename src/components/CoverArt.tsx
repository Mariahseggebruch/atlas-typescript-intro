type CoverArtProps = {
  imageUrl: string;
};

function CoverArt({ imageUrl }: CoverArtProps)  {
  return (
    <div className="flex cover-art mb-6 w-full justify-center">
      <img
        src={imageUrl}
        alt="Current Album Cover"
        className="rounded-md md:w-400 md:h-400"
      />
    </div>
  );
}

export default CoverArt;
