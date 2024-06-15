const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-tr from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 mx-2 text-xl rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl rounded-lg bg-opacity-50 hover:bg-opacity-80">
          More info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
