import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () =>{
      const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
      const data = await fetch(url, API_OPTIONS)
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
      console.log(json);    
    }
  
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;