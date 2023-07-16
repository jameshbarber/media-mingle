// MovieResults.js
import React, { useEffect, useState } from "react";
import Layout from "../layouts";
import SearchField from "../components/SearchField";
import Searcher from "../services/combined-search";
import ResultListItem from "../components/ResultListItem";

const getMovieName = () => {
  let params = new URLSearchParams(window.location.search);
  return params.get("name");
}

const ResultContainer = ({ children }) => {
  return <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "10px"
  }}>
    {children}
  </div>
}

const Loader = () => {
  return <ResultContainer>{[1, 2, 3, 4, 5, 6].map(i => {
    return <ResultListItem key={i} />
  })}</ResultContainer>
}

const MovieResults = ({ movies, loading }) => {

  if (loading) return <Loader />

  return <div>
    Movie Results
    <ResultContainer>
      {movies?.map((movie, i) => {
        const { Poster, Title } = movie
        return <ResultListItem key={i} title={Title} image={Poster} />
      })}
    </ResultContainer>
  </div>
}


const Results = () => {
  const [loading, setLoading] = useState()
  const searchedName = getMovieName();
  const [searchResults, setSearchResults] = useState()

  useEffect(() => {
    setLoading(true)
    Searcher.search(searchedName).then((res => {
      setSearchResults(res)
      setLoading(false)
    }))

  }, [searchedName])

  return (
    <Layout>
      <SearchField value={searchedName} />
      <MovieResults loading={loading} movies={searchResults?.movies} />
    </Layout>
  );
}

export default Results;
