import React from "react";
import styled from "styled-components";

const Path = styled.path`
  fill: ${({ theme, color }) => color || theme.color.icon.primary};
`;

const Hamburger = ({ color }) => (
  <svg
    width="48"
    height="41"
    viewBox="0 0 48 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <Path
        color={color}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.05003 0.970825H43.9504C46.1781 0.970825 48 2.77183 48 4.97318C48 7.17453 46.1781 8.97592 43.9504 8.97592H4.05003C1.82267 8.97592 0 7.17492 0 4.97357C0 2.77183 1.82267 0.970825 4.05003 0.970825ZM4.05003 32.9661H43.9504C46.1781 32.9661 48 34.7671 48 36.9685C48 39.1698 46.1781 40.9708 43.9504 40.9708H4.05003C1.82267 40.9708 0 39.1698 0 36.9685C0 34.7671 1.82267 32.9661 4.05003 32.9661ZM4.05003 16.9687H43.9504C46.1781 16.9687 48 18.7697 48 20.971C48 23.1724 46.1781 24.9738 43.9504 24.9738H4.05003C1.82267 24.9738 0 23.1724 0 20.971C0 18.7697 1.82267 16.9687 4.05003 16.9687Z"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="48"
          height="40"
          fill="white"
          transform="translate(0 0.970825)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default Hamburger;
