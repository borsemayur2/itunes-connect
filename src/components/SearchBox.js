import React from "react";
import styled from "styled-components";
import Search from "antd/lib/input/Search";

const Container = styled.div`
  width: 300px;
  margin: auto;
`;

const SearchBox = (props) => {
  const [searchText, setSearchText] = React.useState("");

  const onChangeSearchInput = (event) => setSearchText(event.target.value);

  const onSearch = () => props.getSearchedSongs(searchText);

  return (
    <Container>
      <Search
        placeholder="Search Song"
        value={searchText}
        onChange={onChangeSearchInput}
        size="small"
        onSearch={onSearch}
      />
    </Container>
  );
};

export default SearchBox;
