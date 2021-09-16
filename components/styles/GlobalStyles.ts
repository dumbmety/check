import { createGlobalStyle } from "styled-components"
import { theme } from "../styles/ThemeStyles"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    font-size: inherit;
    box-sizing: border-box;
  }

  body {
    color: ${theme.colors.white500};
    background: ${theme.colors.black500};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    font-family: "Manrope", serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyles
