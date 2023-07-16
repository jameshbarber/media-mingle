// MovieResults.js
import React, { useEffect, useState } from "react";
import Layout from "../layouts";
import SearchField from "../components/SearchField";
import Searcher from "../services/combined-search";

const getMovieName = () => {
  let params = new URLSearchParams(window.location.search);
  return params.get("name");
}

const Results = () => {
  const searchedName = getMovieName();
  const [searchResults, setSearchResults] = useState()

  useEffect(() => {
    Searcher.search(searchedName).then((res => setSearchResults(res)))
  })

  if (!searchResults) return "Loading..."

  const { movies, songs } = searchResults

  return (
    <Layout>
      <SearchField value={searchedName} />
      {movies?.map((movie) => (
        <div key={movie.imdbID} className="movie">
          <img src={movie.Poster} alt="" />
          <div className="movie-title">
            <p>{movie.Title}</p>
          </div>
          <button className="movie-detailsBtn">Details</button>
        </div>
      ))}
    </Layout>
  );
}

export default Results;
