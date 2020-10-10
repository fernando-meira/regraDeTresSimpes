import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    overflow: hidden;

    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
  };

  body, input, button {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
