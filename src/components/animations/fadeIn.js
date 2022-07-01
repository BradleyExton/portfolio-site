import React from "react";
import styled from "styled-components";

const FadeInAnimation = styled.div`
  opacity: 0%;
  @keyframes fadeIn {
    to {
      opacity: 100%;
    }
  }
  animation: fadeIn 3.5s ease forwards 2s;
`;
const FadeIn = ({ children, className }) => {
  return <FadeInAnimation className={className}>{children}</FadeInAnimation>;
};

export default FadeIn;
