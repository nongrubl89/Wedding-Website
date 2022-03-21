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
    padding: 0;
    margin: 0;
    width:100%;
    position: relative;
    font-size: 1.5rem;
    line-height:0;
    margin: 0; 
    height: 100%; 
    overflow: hidden;
    padding-left: 2em;
    padding-right:2em;
    margin:auto;

    a{
      text-decoration: none;
      color: black;
    } 
  }
`;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  );
}
