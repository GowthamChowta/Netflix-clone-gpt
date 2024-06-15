import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  useMovieTrailer(movie_id);
  const trailerId = useSelector((store) => store.movies.trailerId);

  return (
    <div className="w-screen">
      {trailerId && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&playlist=${trailerId}&loop=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
