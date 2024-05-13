import React from "react";
import styled from "styled-components";
import ProductHighlight from "../productHighlight";

const HitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 2em 1em;
`;

const Title = styled.div`
  font-weight: black;
  font-size: 24px;
  margin-top: 10px;
  text-align: center;
`;



export function Product(props) {
  const { hit } = props;

  return (
    <HitContainer>
      <Title>
        <ProductHighlight hit={hit} attribute="ProductName" />
      </Title>
    </HitContainer>
  );
}
