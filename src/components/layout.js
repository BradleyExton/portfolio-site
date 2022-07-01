import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@styles";
import { DesktopNavigation } from "@components/navigation";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DesktopNavigation />
        <>{children}</>
      </ThemeProvider>
    </>
  );
};

export default Layout;
