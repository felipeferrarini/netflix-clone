import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import "react-alice-carousel/lib/alice-carousel.css";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --background: #181818;
    --link: #aaa;
    --gray: #444;
    --red: #E50914;
    --black: #141414;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--black);
    color: var(--white);
  }

  body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;