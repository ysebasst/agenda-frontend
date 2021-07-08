import { createGlobalStyle } from "styled-components";

import { colors, fonts } from "./config";

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  html {
    font-size: ${fonts.FONT_SIZE_DEFAULT}px;
  }
  body {
    margin: 0;
    min-height: 100vh;
    font-family: ${fonts.FONT_FAMILY_DEFAULT};
    color: ${colors.white};
    background-color: ${colors.veryDarkGray};
  }
  img {
    max-width: 100%;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
`;
