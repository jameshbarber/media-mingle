// MovieResults.js
import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const api_url = "http://www.omdbapi.com/?i=tt3896198&apikey=caa27cea";

//get response from API
const getInfo = () => {
  axios.get(api_url + `&s=${name}` + "&type=movie" + "&page=1").then((res) => {
    if (res.data.Search) {
      const moviesData = JSON.stringify(res.data.Search);
      // navigate(`/movie-results?movies=${moviesData}`);
    }
  });
};

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
}

export default MovieResults;
