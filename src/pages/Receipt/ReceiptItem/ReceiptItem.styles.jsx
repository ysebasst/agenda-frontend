import styled from "styled-components";

import { colors } from "config";

export const StyledItem = styled.article`
  overflow: hidden;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: ${colors.black};
  background-color: ${colors.white};
  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 1.5rem;
`;

export const StyledText = styled.p`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
  font-weight: bold;
  span {
    font-weight: normal;
  }
`;
