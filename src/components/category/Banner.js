const Banner = ({ path }) => {
  path = decodeURI(path)

  return (
    <div
      className="flex flex-col items-center justify-center text-center py-20"
      style={bgStyle}
    >
      <h1 className="text-5xl font-bold text-white">{path}</h1>
    </div>
  );
}

const bgStyle = {
  backgroundImage: `url(https://picsum.photos/1920/1080)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: 'rgba(0, 0, 0, .6)',
  backgroundBlendMode: "multiply",
}

export default Banner;