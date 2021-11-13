import React from "react";
import styled from "styled-components";

const Path = styled.path`
  fill: ${({ theme, color }) => color || theme.color.blob.primary};
`;

const About = ({ color }) => (
  <svg
    width="1145"
    height="413"
    viewBox="0 0 1145 413"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      color={color}
      d="M1024.68 52.6512C1159.5 102.755 1152.08 253.62 1136.85 314.376C1121.64 374.747 1034.82 359.861 916.109 372.068C796.576 383.724 700.911 341.347 588.161 353.183C474.551 365.237 343.015 431.337 255.147 407.668C167.257 384.384 116.417 305.065 51.7341 230.387C-12.1087 155.876 -7.63067 80.8746 19.8763 43.9463C48.2022 7.56943 100.418 9.04737 211.023 5.34111C321.606 2.01955 409.295 -1.95858 535.607 2.12077C661.078 6.0333 889.017 2.3808 1024.68 52.6512Z"
    />
  </svg>
);

export default About;
