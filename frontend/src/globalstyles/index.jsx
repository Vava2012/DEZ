import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Chomsky';
    src: url('/fonts/Chomsky.otf') format('opentype'),
         url('/fonts/Chomsky.woff') format('woff'),
         url('/fonts/Chomsky.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  

  :root {
    --logo-font: 'Chomsky', serif;
    --heading-font: 'Times New Roman', serif;
    --subheading-font: 'Times New Roman', serif;
    --text-font: 'Times New Roman', serif;
    --highlight-font: 'Times New Roman', serif;
    --category-font: 'Arial';
    --button-color: #005999;
    --category-color: #005999;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    margin-top: 0px;
    min-height: 100vh;
    font-family: var(--text-font);
    line-height: 1.5;
    background-color: #005999;
  }

  h1 {
    font-family: var(--heading-font);
    font-weight: 600;
    color: #333;
    cursor: pointer;
  }

  
  h1.page-title {
    font-family: var(--heading-font);
    font-size: 50px;
    line-height: 1;
    letter-spacing: 1px;
    padding-bottom: 8px;

    &:hover {
      color: #000000; 
    }
  }

  h2, blockquote {
    font-family: var(--subheading-font);
  }

  h3 {
    font-family: var(--subheading-font);
    font-weight: 500;
    color: #333;
    cursor: pointer;
  }
  
  h3.page-title {
    font-family: var(--heading-font);
    font-size: 16px;
    padding-bottom: 8px;

    &:hover {
      color: #000000; 
    }
  }

  p, li, a, input, label {
    font-family: var(--text-font);
    color: #4a4a4a;
  }

  .logo {
    font-family: var(--logo-font);
  }
`;

export const Category = styled.div`
  color: var(--category-color);
  font-weight: 400;
  text-transform: uppercase;
  font-family: var(--category-font);
  font-size: 14px;
`;

export const MainContainer = styled.main`
  background-color: white;
  max-width: 1200px;
  min-height: 1000px;
  width: 80%;
  height: 80%;
  gap: 20px;
  margin-top: 120px;
  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: auto;
  
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;

export const CategoryHeading = styled.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px 0;
  color: #005999;
  font-size: 24px;
  font-weight: 600;
`;