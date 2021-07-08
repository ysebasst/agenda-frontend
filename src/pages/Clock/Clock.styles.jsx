import styled from "styled-components";

import { colors, fonts, breakpoints } from "config";

// ### ### ### STYLED CLOCK WRAPPER ### ### ###
export const StyledClockWrapper = styled.div``;

// ### ### ### STYLED CLOCK LEFT ### ### ###
export const StyledClockLeft = styled.span`
  flex-grow: 1;
  text-align: center;
`;

// ### ### ### STYLED CLOCK RIGHT ### ### ###
export const StyledClockRight = styled.span``;

// ### ### ### STYLED CLOCK TOP ### ### ###
export const StyledClockTop = styled.div``;

// ### ### ### STYLED CLOCK BOTTOM ### ### ###
export const StyledClockBottom = styled.div``;

// ### ### ### STYLED CLOCK BUTTON ### ### ###
export const StyledClockButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border: none;
  outline: none;
  font-size: 1.75rem;
  color: ${colors.white};
  background-color: ${colors.darkGray};
  cursor: pointer;
  transition: filter 0.3s;
  @media screen and (min-width: ${breakpoints.desktop}) {
    &:hover {
      filter: brightness(0.75);
    }
    &:active {
      filter: brightness(1.25);
    }
  }
`;

// ### ### ### STYLED CLOCK ### ### ###
export const StyledClock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-weight: bold;
  background-color: ${colors.darkGray};
  min-height: ${(props) =>
    props.maximized ? "calc(100vh - 3.5rem)" : "unset"};
  user-select: none;
  ${StyledClockTop} {
    display: flex;
    font-family: ${fonts.FONT_FAMILY_MONOSPACE};
    font-size: ${(props) => (props.maximized ? "24vw" : "24vmin")};
    line-height: 1;
    ${StyledClockRight} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: ${(props) => (props.maximized ? "10vw" : "10vmin")};
    }
  }
  ${StyledClockBottom} {
    display: flex;
    font-size: ${(props) => (props.maximized ? "6vw" : "6vmin")};
  }
  ${StyledClockRight} {
    margin-left: ${(props) => (props.maximized ? "4vw" : "4vmin")};
  }
  ${StyledClockButton} {
    &::after {
      content: ${(props) => (props.maximized ? '"▲"' : '"▼"')};
    }
  }
`;
