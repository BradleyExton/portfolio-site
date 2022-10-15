import React from "react";
import styled from "styled-components";

const G = styled.g`
  path {
    fill: ${({ theme, color }) => color || theme.color.icon.primary};
  }
`;

const Twitter = ({ color }) => (
  <svg
    width="42"
    height="43"
    viewBox="0 0 42 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clipPath="url(#clip0_14_137)" color={color}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.0624 0H3.9375C1.77188 0 0 1.77741 0 3.94981V38.1815C0 40.3538 1.77188 42.1313 3.9375 42.1313H38.0624C40.2281 42.1313 41.9999 40.3538 41.9999 38.1815V3.94981C41.9999 1.77741 40.2281 0 38.0624 0ZM34.1287 12.8984C33.1476 13.3359 32.1058 13.6211 31.0392 13.7443C32.1492 13.0804 33.001 12.0183 33.4079 10.7548C32.367 11.3729 31.2113 11.827 29.9897 12.0688C29.0022 11.0207 27.6047 10.3684 26.056 10.3684C23.0812 10.3684 20.6721 12.7833 20.6721 15.7675C20.6721 16.1858 20.7171 16.5987 20.8093 16.9968C16.3346 16.7674 12.3668 14.6184 9.70896 11.3496C9.23094 12.1741 8.97903 13.1109 8.97881 14.0647C8.97881 15.9386 9.92755 17.5947 11.3731 18.5581C10.4895 18.5324 9.66243 18.2875 8.9315 17.8863V17.9548C8.9315 20.5719 10.7887 22.7583 13.2536 23.2528C12.7909 23.3785 12.3137 23.4424 11.8343 23.4426C11.4871 23.4426 11.1515 23.4083 10.8189 23.3453C11.5049 25.4905 13.4907 27.0549 15.8486 27.0976C14.0023 28.5485 11.6832 29.4124 9.15784 29.4124C8.72143 29.4124 8.29592 29.3867 7.87119 29.337C10.2593 30.8749 13.09 31.7628 16.1315 31.7628C26.0367 31.7628 31.4554 23.5304 31.4554 16.3919C31.4554 16.1547 31.4515 15.923 31.44 15.6905C32.4917 14.9363 33.4064 13.9831 34.1257 12.9008L34.1288 12.8984H34.1287Z"
      />
    </G>
    <defs>
      <clipPath id="clip0_14_137">
        <rect width="42" height="42.1313" />
      </clipPath>
    </defs>
  </svg>
);

export default Twitter;
