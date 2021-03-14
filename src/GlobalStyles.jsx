import { color, font, theme } from "./theme"
import { createGlobalStyle } from "styled-components"
import backgroundImage from "./assets/background-gradient.png"
import { Link } from "rebass"

// Globals
export const GlobalStyle = createGlobalStyle`
  body, html {
    background: url(${backgroundImage});
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
`
