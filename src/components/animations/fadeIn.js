import React from "react";
import styled from "styled-components";

const FadeInAnimation = styled.div`
  opacity: 0%;
  @keyframes fadeIn {
    to {
      opacity: 100%;
    }
  }
  animation: fadeIn 0.5s ease forwards 3.3s;
`;
const FadeIn = ({ children, className }) => {
  return <FadeInAnimation className={className}>{children}</FadeInAnimation>;
};

export default FadeIn;
