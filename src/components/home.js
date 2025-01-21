import { useState, useEffect, useRef } from "react";
import {Link } from 'react-router-dom';
const Home = () => {
  const [trending, setTrending] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=60ba90cc94da017da81c7031fb447e74"
    )
      .then((response) => response.json())
      .then((data) => setTrending(data.results))
      .catch((error) => console.error("Error fetching trending movies:", error));
  }, []);
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-dark d-block p-2" style={{width:"100%"}}>
        <h1 className="text-light text-center"> What's Popular</h1>
      <div className="container my-4">
        {trending.length > 0 ? (
          <>
            <div className="d-flex justify-content-between mb-3">
              <button onClick={scrollLeft} className="btn btn-secondary">
                ←
              </button>
              <button onClick={scrollRight} className="btn btn-secondary">
                →
              </button>
            </div>
            <div
              ref={scrollContainerRef}
              className="d-flex overflow-hidden "
              style={{
                gap: "1rem",
                scrollSnapType: "x mandatory",
                paddingBottom: "1rem",
                width: "100%",
                overflowX:"hidden",
              }}
            >
              {trending.map((movie) => (
                <Link to={`movies/${movie.id}`}
                  key={movie.id}
                  className="card text-decoration-none"
                  style={{
                    flex: "0 0 auto",
                    scrollSnapAlign: "start",
                    width: "18rem",
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="card-img-top"
                    alt={movie.title}
                    style={{ width: "100%" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <p>Loading popular movies...</p>
        )}
      </div>
      </div>
    </>
  );
};

export default Home;
