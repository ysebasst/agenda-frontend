import styled from "styled-components";

import { colors, breakpoints } from "../../../config";

export const StyledButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.secondary === "true" ? colors.blue : colors.darkBlue};
  cursor: pointer;
  outline: none;
  user-select: none;
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
