import React, { useState } from "react";
import styled from "styled-components";
import { Mail } from "@components/icons";
import { CallToActionText } from "@components/typography";

const CallToAction = styled.a`
  * {
    transition: fill 1s ease-out;
  }
  display: flex;
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: 4px;
  text-decoration: none;
  gap: 1rem;

  position: relative;

  transition: background-color ${({ isHovered }) => (isHovered ? "0.8s" : "0s")}
    ease-in;
  .c-button__blobs {
    height: 100%;
    filter: url(#goo);
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: -3px;
    right: -1px;
    z-index: -1;
    div {
      background-color: ${({ theme }) => theme.color.primary};
      width: 34%;
      height: 100%;
      border-radius: 100%;
      position: absolute;
      transform: scale(1.4) translateY(125%) translateZ(0);
      transition: all 700ms ease;
      &:nth-child(1) {
        left: -5%;
      }
      &:nth-child(2) {
        left: 30%;
        transition-delay: 60ms;
      }
      &:nth-child(3) {
        left: 66%;
        transition-delay: 25ms;
      }
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
    .c-button__blobs {
      div {
        transform: scale(1.4) translateY(0) translateZ(0);
      }
    }
  }
`;

const CallToActionBtn = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <CallToAction
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href="mailto: abc@example.com"
        isHovered={isHovered}
      >
        <Mail secondary={!isHovered} />
        <CallToActionText secondary={isHovered}>Get In Touch</CallToActionText>
        <div className="c-button__blobs">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </CallToAction>
    </>
  );
};

export default CallToActionBtn;
