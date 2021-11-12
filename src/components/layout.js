import React from "react";
import { GlobalStyles } from "@styles";

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
