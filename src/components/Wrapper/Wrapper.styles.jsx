import styled from "styled-components";

import { breakpoints } from "config";

export const StyledWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${breakpoints.tablet}) {
    max-width: ${breakpoints.tablet};
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    max-width: ${breakpoints.desktop};
  }
`;
