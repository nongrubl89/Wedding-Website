import styled from "styled-components";
import Rotate from "./Rotate";

const Container = styled.div`
  display: grid;
  /* height: 100vh;
  width: 95%;
  margin: 3em;
  background-color: #e8a7cd; */
  grid-template-columns: 5% 90% 5%;
  height: 80vh;
`;

const Banner = styled.div`
  grid-column: 2/3;
  background-color: #e8a7cd;
`;

export default function Index() {
  return (
    <>
      <Container>
        <Banner>Home</Banner>
      </Container>
      <Rotate />
    </>
  );
}
