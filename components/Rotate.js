import styled from "styled-components";

const Circle = styled.div`
  position: fixed;
  overflow: hidden;
  z-index: 2;
  bottom: -4em;
  right: -4em;

  @media (max-width: 600px) {
    bottom: -2em;
    right: -2em;
  }

  svg {
    color: #4f6eb0;
    height: 30rem;
    width: 30rem;

    -webkit-animation-name: rotate;
    -moz-animation-name: rotate;
    -ms-animation-name: rotate;
    -o-animation-name: rotate;
    animation-name: rotate;
    -webkit-animation-duration: 10s;
    -moz-animation-duration: 10s;
    -ms-animation-duration: 10s;
    -o-animation-duration: 10s;
    animation-duration: 10s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    -o-animation-timing-function: linear;
    animation-timing-function: linear;

    @media (max-width: 600px) {
      height: 20rem;
      width: 20rem;
    }
  }

  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(360deg);
    }
    to {
      -webkit-transform: rotate(0);
    }
  }
  @-moz-keyframes rotate {
    from {
      -moz-transform: rotate(360deg);
    }
    to {
      -moz-transform: rotate(0);
    }
  }
  @-ms-keyframes rotate {
    from {
      -ms-transform: rotate(360deg);
    }
    to {
      -ms-transform: rotate(0);
    }
  }
  @-o-keyframes rotate {
    from {
      -o-transform: rotate(360deg);
    }
    to {
      -o-transform: rotate(0);
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0);
    }
  }
`;

export default function Rotate() {
  return (
    <Circle>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="150px"
        height="150px"
        viewBox="0 0 300 300"
        enableBackground="new 0 0 300 300"
        xmlSpace="preserve"
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
          />
        </defs>
        <circle cx="100" cy="50" r="75" fill="none" />
        <g>
          <use xlinkHref="#circlePath" fill="none" />
          <text fill="#000" style={{ fontWeight: "900" }}>
            <textPath xlinkHref="#circlePath">
              R.S.V.P by July 8 - - - - - - R.S.V.P by July 8 - - - - - - - -
            </textPath>
          </text>
        </g>
      </svg>
    </Circle>
  );
}
