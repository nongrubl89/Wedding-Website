import Link from "next/link";
import styled from "styled-components";

const HeaderStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, fit-content(50px));
  /* margin-left: 7rem;
  margin-right: 7rem; */
  margin-bottom: 1em;
  grid-column-gap: 1em;
  font-size: 1.5rem;

  h2 {
    font-size: 4rem;
    align-self: center;
  }

  h2:hover,
  a:hover {
    font-style: italic;
    font-weight: 900;
    cursor: pointer;
  }

  a {
    align-self: center;
    justify-self: end;
    font-weight: 900;
    font-size: 1.1em;
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
