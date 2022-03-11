import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Playfair Display', serif;
    /* padding: 0;
    margin: 0; */
    font-size: 1.5rem;
    line-height:0;

    a{
      text-decoration: none;
      color: black;
    }
  }
`;

export default function Page({ children, cool }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  );
}
