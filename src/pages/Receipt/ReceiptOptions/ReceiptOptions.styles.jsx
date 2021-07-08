import styled from "styled-components";

import { colors, breakpoints } from "config";

export const StyledReceiptOptions = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  text-align: center;
  color: ${colors.black};
  background-color: ${colors.white};
`;

export const StyledButton = styled.span`
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: ${colors.darkGray};
  background-color: ${(props) => props.color || colors.white};
  &:not(:last-of-type) {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background-color: ${colors.darkGray};
      opacity: 0.25;
    }
  }
`;

export const StyledText = styled.span`
  display: none;
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: inline;
    margin-left: 1rem;
  }
`;
