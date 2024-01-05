import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  //Primary Palette
  --color-primary:#623CEA;
  --color-primary-50:#311E75;
  --color-secondary:#50CF9A;
  --color-secondary-50:#E5F8F0;
  --color-tertiary:#FF577F;
  --color-quaternary:#506CCF;
  --color-quaternary-50:#E5E9F8;

  //Social Medias
  --facebook:#506CCF;
  --instagram:#CF50AC;
  --linkedin:#0E76A8;

  //Grey Scale Palette
  --grey-4:#212529;
  --grey-3:#868E96;
  --grey-2:#E9ECEF;
  --grey-1:#F8F9FA;

  --font-family-Inter:'Inter', sans-serif;
  --font-family-IBM:'IBM Plex Sans';
}
`

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 122rem;
  padding: 0 2rem;

`

export default GlobalStyle
