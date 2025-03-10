import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="py-2 px-6">
      <h1 className="text-3xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
