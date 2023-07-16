// MovieResults.js
import React, { useEffect, useState } from "react";
import Layout from "../layouts";
import SearchField from "../components/SearchField";
import Searcher from "../services/combined-search";
import ResultListItem from "../components/ResultListItem";
import { Grid } from "@geist-ui/core";

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
      Movie Results
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "10px"
      }}>
        {movies?.map((movie, i) => {
          const { Poster, Title } = movie
          return <ResultListItem key={i} title={Title} image={Poster} />
        })}
      </div>
      Song Results
    </Layout>
  );
}

export default Results;
