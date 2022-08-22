import styled from "styled-components";

export const MainContainer = styled.header`
  padding: 0 2rem;
`;

export const Header = styled.h1`
  font-size: 4rem;
  text-align: center;
  line-height: 1.5;
  text-transform: uppercase;
  font-weight: 700;
  margin: 2rem 0;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, max-content);
  grid-gap: 1rem;

  @media only screen and (max-width: 31.25em) {
    grid-template-columns: 1fr;
  }
`;

export const LoaderOverlay = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
