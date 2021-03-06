import React from "react";
import styled from "styled-components";

const Path = styled.path`
  fill: ${({ theme, color }) => color || theme.color.blob.primary};
`;
const MobileFooter = ({ color }) => (
  <svg
    width="411"
    height="112"
    viewBox="0 0 411 112"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      color={color}
      d="M-725.664 229.812C-935.598 186.249 -938.516 75.944 -921.062 32.1401C-903.604 -11.3826 -770.059 3.91988 -590.515 0.956092C-409.672 -1.56176 -260.068 34.356 -89.5678 31.3635C82.2224 28.2545 276.202 -13.6 412.177 8.19951C548.148 29.7179 633.007 90.4751 738.498 148.526C842.695 206.413 842.948 261.21 804.56 286.914C764.874 312.172 685.257 308.452 517.256 305.588C349.251 302.444 216.154 300.936 23.5116 291.568C-167.837 282.365 -514.437 273.54 -725.664 229.812Z"
      fill="#24A148"
    />
  </svg>
);

export default MobileFooter;
