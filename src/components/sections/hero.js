import React from "react";
import styled from "styled-components";
import { Name, CallToActionBtn } from "@components";
import { FadeIn } from "@components/animations";
import { H2 } from "@components/typography";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 120px);
`;

const CallToActionWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const Hero = () => {
  return (
    <Section>
      <Name />
      <FadeIn>
        <H2>Web Developer</H2>
        <CallToActionWrapper>
          <CallToActionBtn />
        </CallToActionWrapper>
      </FadeIn>
    </Section>
  );
};

export default Hero;
