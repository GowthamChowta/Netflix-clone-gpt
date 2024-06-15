import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerId } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`;
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    // There can be multiple trailers
    const filterTrailerVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailerVideo =
      filterTrailerVideos.length === 0
        ? json.results[0]
        : filterTrailerVideos[0];
    dispatch(addTrailerId(trailerVideo.key));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
