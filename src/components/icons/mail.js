import React from "react";
import styled from "styled-components";

const Path = styled.path`
  fill: ${({ theme, secondary }) =>
    secondary ? theme.color.icon.secondary : theme.color.icon.primary};
`;

const Mail = ({ secondary }) => (
  <svg
    width="37"
    height="26"
    viewBox="0 0 37 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_417_40)">
      <Path
        d="M1.14421 0L18.8132 14.539L35.7263 0H1.14421ZM0 24.4656L12.5863 11.7314L0 1.37642V24.4686V24.4656ZM13.9744 12.8739L0.996663 26H35.8949L23.4863 12.8739L19.4033 16.3894C19.2441 16.5233 19.0441 16.5979 18.8369 16.6006C18.6297 16.6034 18.4278 16.5342 18.2651 16.4046L13.9744 12.8739ZM24.8503 11.7071L37 24.5689V1.26399L24.8503 11.7071Z"
        secondary={secondary}
      />
    </g>
    <defs>
      <clipPath id="clip0_417_40">
        <rect width="37" height="26" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Mail;
