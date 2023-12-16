import { createGlobalStyle } from "styled-components"
// import styled from "styled-components"

export const GlobalReset = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body, html {
    width: 100vw;
    height: 100vh;
}

body { 
    background-color: var(--grey-4);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button{
    font-family:'IBM Plex Sans';
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
    /* outline: none; */
  }

  button{
    cursor: pointer;
    background: transparent;
    border: none;
  }

  ul{
    list-style: none;
  }

  input{
    border: 0;
    background: transparent;
  }
  `
// export const StyledPadding = styled.div`
//   padding: clamp(.625rem, 10vw, 8.125rem);
//   `
