import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { original_title, poster_path } = movie;
  return (
    <div className="w-48 pr-4">
      {/* <h1>{original_title}</h1> */}
      <img alt="Movie Card" src={IMAGE_CDN_URL + poster_path}></img>
    </div>
  );
};

export default MovieCard;
