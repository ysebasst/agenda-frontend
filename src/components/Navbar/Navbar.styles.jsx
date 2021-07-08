import styled from "styled-components";
import { Link } from "react-router-dom";

import { Wrapper } from "components/Wrapper";

import { colors, breakpoints } from "config";

// ### ### ### STYLED NAVBAR ### ### ###
export const StyledNavbar = styled.nav`
  z-index: 10;
  position: sticky;
  top: 0;
  padding: 0 1rem;
  background-color: ${colors.darkBlue};
  user-select: none;
`;

// ### ### ### STYLED NAVBAR WRAPPER ### ### ###
export const StyledNavbarWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  min-height: 3.5rem;
`;

// ### ### ### STYLED NAVBAR TOGGLE ### ### ###
export const StyledNavbarToggle = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  svg {
    width: 2rem !important;
    height: 2rem !important;
  }
`;

// ### ### ### STYLED NAVBAR BRAND ### ### ###
export const StyledNavbarBrand = styled.h1`
  flex-grow: 1;
  margin-left: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

// ### ### ### STYLED NAVBAR MENU ### ### ###
export const StyledNavbarMenu = styled.ul`
  position: absolute;
  top: 3.5rem;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 3.5rem);
  overflow-y: auto;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  border-top: 1px solid ${colors.darkGray};
  background-color: ${colors.darkBlue};
  transition: transform 0.3s;
  transform-origin: left;
  transform: ${(props) => (props.active ? "scale(1, 1)" : "scale(0, 1)")};
`;

// ### ### ### STYLED NAVBAR MENU WRAPPER ### ### ###
export const StyledNavbarMenuWrapper = styled(Wrapper)``;

// ### ### ### STYLED NAVBAR MENU ITEM ### ### ###
export const StyledNavbarItem = styled.li`
  list-style: none;
`;

// ### ### ### STYLED NAVBAR MENU LINK ### ### ###
export const StyledNavbarLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 3.5rem;
  padding: 0 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  color: inherit;
  background-color: ${(props) =>
    props.selected ? colors.veryDarkGray : colors.darkBlue};
  @media screen and (min-width: ${breakpoints.desktop}) {
    &:hover {
      filter: brightness(0.75);
    }
    &:active {
      filter: brightness(1.25);
    }
  }
  div {
    flex-grow: 1;
    padding: 0 0.25rem;
    svg {
      width: 2rem !important;
      height: 2rem !important;
    }
  }
  span {
    margin-left: 1.75rem;
  }
`;

export const IconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
`;

export const UserMenu = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 0;
  width: 100%;
  min-height: calc(100vh - 3.5rem);
  background-color: ${colors.darkBlue};
  transition: transform 0.3s;
  transform-origin: right;
  transform: ${(props) => (props.active ? "scale(1, 1)" : "scale(0, 1)")};
`;
