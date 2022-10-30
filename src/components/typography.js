import styled from "styled-components";
import { SCREEN_SIZES } from "@utils";

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h2};
  color: ${({ theme, secondary }) =>
    secondary ? theme.color.text.secondary : theme.color.text.primary};
  font-weight: lighter;
  user-select: none;
  @media (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }
`;

export const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.navLinks};
  color: ${({ theme, secondary }) =>
    secondary ? theme.color.text.secondary : theme.color.text.primary};
  font-weight: bold;
  text-decoration: none;
  user-select: none;
`;

export const CallToActionText = styled.p`
  transition: color 1s ease-out;
  font-size: ${({ theme }) => theme.fontSize.navLinks};
  color: ${({ theme, secondary }) =>
    secondary ? theme.color.text.secondary : theme.color.text.primary};
`;
