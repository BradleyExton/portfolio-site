import React from "react";
import styled from "styled-components";
import { DesktopNavRight, DesktopNavLeft } from "../blobs";
import { FadeIn } from "@components/animations";

const WrapperWithFadeIn = styled(FadeIn)`
  display: flex;
  justify-content: space-between;
`;

const DesktopNavigation = () => {
  return (
    <WrapperWithFadeIn>
      <DesktopNavLeft />
      <DesktopNavRight />
    </WrapperWithFadeIn>
  );
};

export default DesktopNavigation;
