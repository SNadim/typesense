import { InstantSearch, Pagination, RefinementList, SearchBox } from "react-instantsearch-dom";
import styled from "styled-components";
import './App.css';
import Products from "./products";
import { searchClient } from "./typesenseAdapter";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
`;

function App() {
  console.log(process.env.REACT_APP_TYPESENSE_SEARCH_ONLY_API_KEY);
  return (
    <AppContainer>
      <h2>React/Typesense Movies InstantSearch</h2>
      <InstantSearch indexName="products" searchClient={searchClient}>
        <h4>Search Movies</h4>
        <SearchBox />
        <RefinementList attribute="ProductName" />
        <Products />
        <Pagination />
      </InstantSearch>
    </AppContainer>
  );
}

export default App;
