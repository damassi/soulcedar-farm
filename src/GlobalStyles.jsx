import { color, font, theme } from "./theme";
import { createGlobalStyle } from "styled-components";
import { Link } from "rebass";

// Globals
export const GlobalStyle = createGlobalStyle`

  body, html {
    background: url("/background-gradient.png");
    font-family: ${font("sans")}, sans-serif;
    color: ${color("black60")};
    font-size: ${theme.typography.sizes[4].fontSize}px;
    line-height: ${theme.typography.sizes[4].lineHeight}px;
  }

  ${Link} {
    color: inherit;
    text-decoration: none;
  }

  a {
    transition: all .2s;
    color: inherit;

    &:hover {
      color: ${color("teal")};
    }
  }
`;
