import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-black: #050505;
    --color-black-light: #1f1f1f;
    --color-grey-darker: #2d2d2d;
    --color-grey-dark: #3a3a3a;
    --color-grey: #757575;
    --color-grey-light: #e9e9e9;
    --color-grey-lighter: #f4f4f4;
    --color-white: #fff;
    --color-purple: #a445ed;
    --color-red: #ff5252;
  
  /* Font families: */
  --font-monospace: "Inconsolata", monospace;
  --font-sans-serif: "Inter", sans-serif;
  --font-serif: "Lora", serif;

  /* Basic font sizes:  */
  --f-size-heading-lg: 6.4rem;
  --f-size-heading-md: 2.4rem;
  --f-size-heading-sm: 2rem;
  --f-size-body-md: 1.8rem;
  --f-size-body-sm: 1.4rem;

  /* Basic fonts' line height values: */
  --line-height-heading-lg: 7.7rem;
  --line-height-heading-md: 2.9rem;
  --line-height-heading-sm: 2.4rem;
  --line-height-body-md: 2.4rem;
  --line-height-body-sm: 1.7rem;
}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    font-family: var(--font-sans-serif);
    color: var(--color-grey-darker);
    font-size: var(--f-size-body-md);
    line-height: var(--line-height-body-md);
  }
`;

export default GlobalStyles;
