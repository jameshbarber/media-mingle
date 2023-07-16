// MovieResults.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const MovieResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  console.log(params)
  const moviesData = params.get("movies");
  const decodedMovies = JSON.parse(decodeURIComponent(moviesData));

  return (
    <div>
      {decodedMovies ? (
        <div className="movies">
          {decodedMovies.map((movie) => (
            <div key={movie.imdbID} className="movie">
              <img src={movie.Poster} alt="" />
              <div className="movie-title">
                <p>{movie.Title}</p>
              </div>
              <button className="movie-detailsBtn">Details</button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
  
export default MovieResults;
