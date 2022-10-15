import React from "react";
import styled from "styled-components";
import { DesktopNavRight, DesktopNavLeft } from "@components/blobs";
import { Instagram, Twitter, Github } from "@components/icons";
import { FadeIn } from "@components/animations";

const WrapperWithFadeIn = styled(FadeIn)`
  display: flex;
  justify-content: space-between;
`;

const SocialMediaNavWrapper = styled.div`
  position: relative;
`;

const SocialMediaLinks = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 85%;
  width: 90%;
`;

const ExternalLink = styled.a``;

const InternalLinksWrapper = styled.div``;

const InternalLinks = styled.nav``;

const DesktopNavigation = () => {
  return (
    <WrapperWithFadeIn>
      <SocialMediaNavWrapper>
        <DesktopNavLeft />
        <SocialMediaLinks>
          <ExternalLink
            href="https://www.instagram.com/webdevbradley"
            target="_blank"
          >
            <Instagram />
          </ExternalLink>
          <ExternalLink href="https://twitter.com/ExtonBradley" target="_blank">
            <Twitter />
          </ExternalLink>
          <ExternalLink href="https://github.com/BradleyExton" target="_blank">
            <Github />
          </ExternalLink>
        </SocialMediaLinks>
      </SocialMediaNavWrapper>
      <InternalLinksWrapper>
        <DesktopNavRight />
        <InternalLinks></InternalLinks>
      </InternalLinksWrapper>
    </WrapperWithFadeIn>
  );
};

export default DesktopNavigation;
