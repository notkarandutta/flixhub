import Hero from "./hero";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Upcoming = () => {
  const [soon, setSoon] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=60ba90cc94da017da81c7031fb447e74&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setSoon(data.results))
      .catch((error) =>
        console.error("Error fetching trending movies:", error)
      );
  }, []);
  return (
   <>
    <Hero text={'Coming-Soon'} />     
      <div className="container">
      <div className="row">
        {soon.map((movie) => (
          <Link to={`/movies/${movie.id}`} className="col-lg-3 my-4 text-decoration-none">
          <div className="card" style={{ width: "18rem", overflow: "hidden", borderRadius: "10px",transition: "transform 0.3s ease-in-out", }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="card-img-top img-thumbnail"
              alt={movie.original_title}
            />
            <div className="card-body" style={{ height: "120px" }}>
              <h5 className="card-title text-truncate">{movie.title}</h5>
              <p className="card-text text-muted mb-0">{movie.release_date}</p>
            </div>
          </div>
        </Link>
        ))}
    </div></div></>
  );
};
export default Upcoming;
