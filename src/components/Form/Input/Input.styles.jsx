import styled from "styled-components";

import { colors } from "config";

export const StyledInput = styled.input`
  position: relative;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: ${(props) => props.marginBottom};
  outline: none;
  border-radius: 0.25rem;
  border: 1px solid ${colors.gray};
  font-size: 1rem;
  transition: border 0.3s;
  &:focus {
    border: 1px solid ${colors.black};
  }
`;
