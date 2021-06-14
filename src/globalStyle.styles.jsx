import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC&display=swap');

    html {
    line-height: 1.15;
    }

    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Alegraya Sans SC", sans-serif;
    }

    body {
    background: linear-gradient(
        190deg,
        rgb(0, 0, 0) 0%,
        rgb(9, 90, 171) 100%
    );
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: #222;
    overflow: hidden;
    }
`;
