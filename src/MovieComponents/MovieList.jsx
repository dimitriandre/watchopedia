const MovieList = (props) => {
  return (
    <div>
      {props.movieList.map((movie, index) => (
        <div key={index} className="p-2" style={{ color: "white" }}>
          {movie}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
