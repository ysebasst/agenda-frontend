import styled from "styled-components";

import { rem } from "../../../utils";
import { colors, breakpoints } from "../../../config";

export const StyledField = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: ${(props) => props.marginBottom};
  border-radius: 0.25rem;
  border: 1px solid ${colors.gray};
  background-color: #fff;
  &:focus-within {
    border: 1px solid ${colors.veryDarkGray};
  }
  input {
    border-radius: 0rem;
    border: none !important;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${rem(40)};
  color: ${colors.white};
  background-color: ${colors.darkBlue};
`;

export const ButtonRevealPassword = styled.span`
  display: ${(props) => (props.type === "password" ? "flex" : "none")};
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  outline: none;
  user-select: none;
  color: ${colors.gray};
  background-color: #fff;
  transition: filter 0.3s;
  @media screen and (min-width: ${breakpoints.tablet}) {
    &:hover {
      filter: brightness(0.75);
    }
    &:active {
      filter: brightness(1.25);
    }
  }
`;
