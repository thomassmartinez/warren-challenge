import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #e02b57;
    --white: #ffffff;
    --black: #000000;
    --gray: #A9A9A9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    background: #ff4d79 
  }

  h1, h2, h3, h4, h5, h6, span, p, th, td {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`;
