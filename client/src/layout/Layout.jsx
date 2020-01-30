import React from 'react';
import { node } from 'prop-types';
import styled , { createGlobalStyle , ThemeProvider} from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
    body{
      
      /* background: #636e72;
       */
      background: #b2bec3;
      z-index: 100;
      color: ${props => props.theme.colors.secondary};
      font-family: Baumans, sans-serif;
      margin: 0;
      /* padding: 2em 4em;*/
    } 

    *, *::before, *::after{
        box-sizing: border-box;
    }
    :root{
        --font-xxxl: 60px;
        --font-xxl: 38px;
        --font-xl: 24px;
        --font-lg: 20px;
        --font-md: 18px;
        --font-sm: 16px;
        --font-xs: 14px;
        --font-xxs: 12px;
        --bg-bar: linear-gradient(
          90deg,
          rgba(196, 196, 196, 0) 0%,
          #c4c4c4 4.67%,
          #c4c4c4 43.3%,
          rgba(196, 196, 196, 0) 97.81%
          );
    }

    ul{
      margin: 0;
      padding: 0;
    }
    
    li {
      text-align: 'justify';
      font-family: 'Brush Script';
      color: rgb(214, 48, 49);
      font-weight: bold;
      padding: 0.3rem 1.5rem;
    } 

    td {
      font-weight: bold;
      font-style: italic;
    }
    .react-quiz-container .questionWrapper .btn {
      padding-bottom: 2em;
    }
`;

const StyledWrapper = styled.div`
  background: #b2bec3;
  min-height: 100vh;
  width: 100%;
  margin-top: 2em;
`;

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledWrapper>{children}</StyledWrapper>
      </>
    </ThemeProvider>
  );
  
  Layout.propTypes = {
    children: node.isRequired,
  };
  
  export default Layout;