import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { useState } from "react";

const MoviePage = () => {
  const [movieListState, setMovieListState] = useState([
    "Die Not So Hard",
    "Harry Pot de Fleur",
  ]);
  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie />
      <MovieList MovieListState={movieListState} />
    </div>
  );
};
export default MoviePage;
