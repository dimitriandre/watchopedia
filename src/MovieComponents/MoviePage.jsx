import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { useState } from "react";

const MoviePage = () => {
  const [movieListState, setMovieListState] = useState(() => {
    return { movieList: ["Die Not So Hard", "Harry Pot de Fleur"] };
  });

  function handleAddMovie(newMovie) {
    setMovieListState((prevState) => {
      return {
        ...prevState,
        movieList: prevState.movieList.concat([newMovie]),
      };
    });
  }
  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie handleAddMovie={handleAddMovie} />
      <MovieList movieList={movieListState.movieList} />
    </div>
  );
};
export default MoviePage;
