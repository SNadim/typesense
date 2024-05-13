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
  console.log(searchClient);
  return (
    <AppContainer>
      <h2>React/Typesense Movies InstantSearch</h2>
      <InstantSearch indexName="products" searchClient={searchClient}>
        <h4>Search Movies</h4>
        <SearchBox />
        <RefinementList />
        <Products />
        <Pagination />
      </InstantSearch>
    </AppContainer>
  );
}

export default App;
