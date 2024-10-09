import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Plus Jakarta Sans Variable';
        font-style: normal;
        font-display: swap;
        font-weight: 200 300 400 500 600 700 800;
        src: url(https://cdn.jsdelivr.net/fontsource/fonts/plus-jakarta-sans:vf@latest/latin-wght-normal.woff2) format('woff2-variations');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
    }
    
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.snow};
        font-family: 'Plus Jakarta Sans Variable';
    }
    
  input,
  button {
    border: 0;
    outline: 0;
    background: none;
    outline: none;
    font-family: 'Plus Jakarta Sans Variable';
    line-height: 1.48;
  }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
        font-weight: 700;
    }

    a {
        text-decoration: none;
        background: none;
        cursor: pointer;
        border: 0;
        outline: 0;
    }

    button {
        cursor: pointer;
        border: 0;
    }

    a,
    button {
        -webkit-tap-highlight-color: transparent;
    }

    ul,
    li,
    p {
        list-style: none;
        text-align: left;
        padding: 0;
        margin-bottom: 0;
    }
`

export default GlobalStyle
