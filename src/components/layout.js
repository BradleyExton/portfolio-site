import React from "react";
import { GlobalStyle } from "@styles";

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
