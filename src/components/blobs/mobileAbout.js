import React from "react";
import styled from "styled-components";

const Path = styled.path`
  fill: ${({ theme, color }) => color || theme.color.blob.primary};
`;

const MobileAbout = ({ color }) => (
  <svg
    width="411"
    height="576"
    viewBox="0 0 411 576"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      color={color}
      d="M576.921 81.3847C635.629 153.254 555.09 364.229 515.037 449.03C475.191 533.294 428.642 511.327 348.605 526.847C268.335 541.584 230.112 481.038 153.974 496.117C77.1907 511.489 -37.9474 602.24 -80.7311 567.971C-123.722 534.239 -115.453 422.599 -118.136 317.269C-120.38 212.183 -79.8507 107.31 -44.1458 56.006C-8.2086 5.48424 23.55 8.23794 94.2615 4.5056C164.766 1.3112 221.351 -3.10255 297.922 4.26408C374.054 11.3863 517.774 9.27056 576.921 81.3847Z"
    />
  </svg>
);

export default MobileAbout;
