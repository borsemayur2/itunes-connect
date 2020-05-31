import React from "react";
import SearchBox from "./SearchBox";
import { create } from "apisauce";
import SongsGrid from "./SongsGrid";
import styled from "styled-components";

const { REACT_APP_ITUNES_CONNECT_API } = process.env;

const api = create({
  baseURL: REACT_APP_ITUNES_CONNECT_API,
});

const HomePage = styled.div`
  margin: 20px auto;
`;

const Error = styled.p`
  color: red;
`;

const Home = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const getSearchedSongs = (searchText) => {
    if (!searchText.length) return;

    setLoading(true);
    api
      .get(searchText)
      .then((response) => {
        setSearchResults(response.data.results);
        setLoading(false);
        setError(null);
      })
      .catch((error) => setError(true));
  };

  return (
    <HomePage>
      <h1>iTunes Connect</h1>
      <SearchBox getSearchedSongs={getSearchedSongs} />
      <br />
      {error ? (
        <Error>Something went wrong...</Error>
      ) : (
        <SongsGrid data={searchResults} loading={loading} />
      )}
    </HomePage>
  );
};
export default Home;
