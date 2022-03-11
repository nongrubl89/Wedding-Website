import Link from "next/link";
import styled from "styled-components";

const HeaderStyles = styled.div`
  display: grid;
  grid-template-columns: 85% 5% 5% 5%;
  grid-gap: 1em;
  margin-left: 4rem;
  margin-right: 4rem;
  width: 92vw;
  margin-bottom: 1em;

  h2 {
    font-size: 4rem;
    align-self: center;
  }

  h2:hover,
  a:hover {
    font-style: italic;
    font-weight: 900;
  }

  a {
    align-self: center;
    justify-self: center;
    font-weight: 500;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Link href="/">
        <h2>B&L</h2>
      </Link>
      <Link href="/schedule">Schedule</Link>
      <Link href="/lodging">Lodging</Link>
      <Link href="/respondezsvp">RSVP</Link>
    </HeaderStyles>
  );
}
