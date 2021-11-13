import React from "react";
import styled from "styled-components";

const Path = styled.path`
  fill: ${({ theme, color }) => color || theme.color.blob.primary};
`;
const Right2 = ({ color }) => (
  <svg
    width="51"
    height="505"
    viewBox="0 0 51 505"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      color={color}
      d="M194.238 469.47C146.218 507.633 76.2658 517.616 38.7309 485.768C1.44245 454.089 -3.42827 380.58 2.42206 323.623C8.72394 266.538 26.1572 225.409 31.5569 171.214C36.9154 116.552 30.4456 48.5262 55.9299 19.9289C81.1679 -8.83716 138.36 1.82544 194.154 4.51274C249.742 7.4981 303.973 2.97497 324.674 30.3106C344.923 57.7755 331.684 117.566 321.274 167.452C310.618 217.17 303.037 257.152 285.773 310.677C268.713 363.903 242.463 431.01 194.238 469.47Z"
    />
  </svg>
);

export default Right2;
