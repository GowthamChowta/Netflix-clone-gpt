import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default usePopularMovies;
