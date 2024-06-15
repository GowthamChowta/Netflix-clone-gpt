import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useTopRatedMovies;
