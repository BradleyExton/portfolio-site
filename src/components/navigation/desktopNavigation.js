import React from "react";
import styled from "styled-components";
import { DesktopNavRight, DesktopNavLeft } from "@components/blobs";
import { FadeIn } from "@components/animations";

const WrapperWithFadeIn = styled(FadeIn)`
  display: flex;
  justify-content: space-between;
`;

const SocialMediaNavWrapper = styled.div``;

const SocialMediaLinks = styled.div``;

const InternalLinksWrapper = styled.div``;

const InternalLinks = styled.nav``;

const DesktopNavigation = () => {
  return (
    <WrapperWithFadeIn>
      <SocialMediaNavWrapper>
        <DesktopNavLeft />
        <SocialMediaLinks>Test</SocialMediaLinks>
      </SocialMediaNavWrapper>
      <InternalLinksWrapper>
        <DesktopNavRight />
        <InternalLinks>test</InternalLinks>
      </InternalLinksWrapper>
    </WrapperWithFadeIn>
  );
};

export default DesktopNavigation;
