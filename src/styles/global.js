import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;

    --blue: #5429cc;
    --blue-dark: #322087;

    --text: #121214;
    --text-title: #363f5f;
    --text-body: #969cb3; 

    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, html, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;

    &:disabled {
      opacity: .6;
      cursor: not-allowed;
    }
  }

  .react-modal-overlay {
    background: rgba(240, 242, 245, .9);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 12px rgba(0,0,0, .4);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .react-modal-content {
    width: 100%;
    max-width: 1080px;
    background: var(--white);
    padding: 2rem;
    border-radius: .25rem;
  }
`;
