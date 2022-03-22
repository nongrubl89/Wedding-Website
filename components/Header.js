import Link from "next/link";
import styled from "styled-components";

const HeaderStyles = styled.nav`
  /* display: grid;
  grid-template-columns: 1fr repeat(3, fit-content(50px));
  margin-bottom: 1em;
  grid-column-gap: 1em;
  font-size: 1.5rem; */

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 10px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    font-size: 1.75rem;
    padding-left: 2em;
    padding-right: 2em;
    /* font-weight: 900; */

    @media (min-width: 600px) {
      grid-template-columns: 1fr repeat(3, fit-content(75px));
      grid-gap: 20px;
      justify-items: end;
    }

    @media (max-width: 600px) {
      padding-bottom: 1em;
    }

    .fullWidth {
      grid-column: 1 / 4;

      @media (min-width: 600px) {
        grid-column: 1 / 2;
        justify-self: start;
      }
    }

    h2 {
      font-size: 4rem;
      align-self: center;
    }
    li:hover {
      font-style: italic;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <ul>
        <li className="fullWidth">
          <Link href="/">
            <h2>B&L</h2>
          </Link>
        </li>
        <li className="links">
          <Link href="/schedule">Schedule</Link>
        </li>
        <li className="links">
          <Link href="/lodging">Lodging</Link>
        </li>
        <li className="links">
          <Link href="/respondezsvp">RSVP</Link>
        </li>
      </ul>
    </HeaderStyles>
  );
}
