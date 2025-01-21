import Hero from "./hero";
import { Link } from "react-router-dom";
const SearchView = ({ keyword, searchResults }) => {
  const title = `Showing results for ${keyword}`;
  const MovieCard = ({ movie }) => {
    const imglink = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const movieDetail = `/movies/${movie.id}`;
    return (
      <Link to={movieDetail} className="col-lg-3 my-4 text-decoration-none">
        <div className="card" style={{ width: "18rem", overflow: "hidden", borderRadius: "10px",transition: "transform 0.3s ease-in-out", }}>
          <img
            src={imglink}
            className="card-img-top img-thumbnail"
            alt={movie.original_title}
          />
          <div className="card-body" style={{ height: "120px" }}>
            <h5 className="card-title text-truncate">{movie.title}</h5>
            <p className="card-text text-muted mb-0">{movie.release_date}</p>
          </div>
        </div>
      </Link>
    );
  };

  const resultsMovie = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i}></MovieCard>;
  });
  return (
    <>
      <Hero text={title} />
      {resultsMovie && (
        <div className="container">
          <div className="row">{resultsMovie}</div>
        </div>
      )}
    </>
  );
};
export default SearchView;
