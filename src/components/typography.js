import styled from "styled-components";

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h2};
  color: ${({ theme, secondary }) =>
    secondary ? theme.color.text.secondary : theme.color.text.primary};
  font-weight: lighter;
`;
