import styled from "styled-components";

import { Form, Icon } from "components";

import { breakpoints, colors } from "../../config";

export const StyledSignup = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 3.5rem);
  padding: 0.5rem;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: ${breakpoints.mobile};
  margin: 4.5rem 0;
`;

export const StyledIcon = styled(Icon)`
  display: block;
  margin: -5rem auto 1.5rem;
  border-radius: 50%;
  font-size: 8rem !important;
  color: ${colors.darkBlue};
  background-color: #fff;
`;
