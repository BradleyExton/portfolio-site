import React from "react";
import styled from "styled-components";
import { Name } from "@components";
import { H2 } from "@components/typography";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;
const Hero = () => {
  return (
    <Section>
      <Name />
      <H2>Front End Web Developer</H2>
    </Section>
  );
};

export default Hero;
