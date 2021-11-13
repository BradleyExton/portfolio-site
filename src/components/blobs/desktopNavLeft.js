import React from "react";
import styled from "styled-components";

const Path = styled.path`
  fill: ${({ theme, color }) => color || theme.color.blob.primary};
`;
const DesktopNavLeft = ({ color }) => (
  <svg
    width="246"
    height="100"
    viewBox="0 0 246 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      color={color}
      d="M218.189 -14.2511C241.883 6.5054 253.383 40.711 240.778 62.3022C228.236 83.7551 191.59 92.5935 162.307 94.616C132.917 96.4234 110.551 91.2611 82.7031 93.2693C54.6233 95.3387 20.8921 104.502 4.10649 94.2123C-12.7415 84.0609 -12.6439 54.457 -16.4417 26.2483C-20.0702 -1.88352 -27.3623 -28.6813 -15.4799 -41.4394C-3.49043 -53.9823 27.9054 -52.5467 54.0419 -51.6679C80.116 -50.6509 100.993 -50.3289 129.599 -46.3297C158.035 -42.4075 194.325 -35.0845 218.189 -14.2511Z"
    />
  </svg>
);

export default DesktopNavLeft;
