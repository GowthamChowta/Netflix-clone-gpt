import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <div className="">
        <VideoTitle title={original_title} overview={overview} />
      </div>
      {id && <VideoBackground movie_id={id} />}
    </div>
  );
};
export default MainContainer;
