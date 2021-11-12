import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@styles";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <>{children}</>
      </ThemeProvider>
    </>
  );
};

export default Layout;
