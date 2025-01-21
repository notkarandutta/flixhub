import Hero from "./hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=60ba90cc94da017da81c7031fb447e74`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setLoading(false);
      });
  }, [id]);
  const renderMovieDetails = () => {
    const imgurl=`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
    const backdropurl=`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`
     if (loading) return <Hero text={"Processing..."}></Hero>;
    if (movieDetails) {
      return (
      <>
      <Hero text={movieDetails.title} backdrop={backdropurl} />
      <div className="container my-5">
        {/* {loading && <Hero text={'Processing...'}></Hero>} */}
        <div className="row">
            <div className="col-md-4 ">
                <img src={imgurl} alt="img.jpg" className="img-thumbnail shadow rounded img-fluid"></img>
            </div>
            <div className="col-md-8">
                <h2>OVERVEIW</h2>
                <p className="lead">{movieDetails.overview}</p>
                <h3 className="d-inline">Release-Date  -</h3>
                <span className="lead"> {movieDetails.release_date}</span>
            </div>
        </div>
      </div>
      </>);
    }
  };
  return renderMovieDetails();
};
export default MovieView;
