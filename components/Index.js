import styled from "styled-components";
import Rotate from "./Rotate";
import Link from "next/link";

const Container = styled.div`
  position: absolute;
  left: 50px;
  width: calc(100% - 100px);
  background-color: #eb92b6;
  padding: 5px;
  text-align: center;
  height: 80vh;
`;

export default function Index() {
  return (
    <>
      <Container>
        <Link href="/respondezsvp" passHref>
          <a>
            <Rotate />
          </a>
        </Link>
      </Container>
      {/* <Rotate /> */}
    </>
  );
}
