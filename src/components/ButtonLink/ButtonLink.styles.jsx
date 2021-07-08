import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../config";

export const StyledButtonLink = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.secondary === "true" ? colors.blue : colors.darkBlue};
  cursor: pointer;
  outline: none;
  user-select: none;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(0.75);
  }
  &:active {
    filter: brightness(1.25);
  }
`;
