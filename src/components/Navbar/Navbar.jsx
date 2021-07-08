import { useEffect, useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { userContext } from "store";
import { logoutUser } from "store/actions";

import {
  StyledNavbar,
  StyledNavbarWrapper,
  StyledNavbarToggle,
  StyledNavbarBrand,
  StyledNavbarMenu,
  StyledNavbarItem,
  StyledNavbarLink,
  IconContainer,
  UserMenu,
} from "./Navbar.styles";

import { routes, routesAuth, title } from "config";
import { Wrapper, Icon } from "components";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { user, userDispatch } = useContext(userContext);
  const history = useHistory();
  const [menuActive, setMenuActive] = useState(false);
  const [menuAuthActive, setMenuAuthActive] = useState(false);
  const [titleNow, setTitleNow] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    if (!user && pathname !== "/registrarse") {
      history.push("/iniciar-sesion");
    }
  }, [user, history, pathname]);

  useEffect(() => {
    document.body.style = menuActive || menuAuthActive ? "overflow:hidden" : "";
  }, [menuActive, menuAuthActive]);

  useEffect(() => {
    let newTitle = `${title.BASE_TITLE} 404 Not Found`;
    setTitleNow("404 Not Found");
    routes.forEach((route) => {
      if (route.pathname === pathname) {
        newTitle = `${title.BASE_TITLE} ${route.name}`;
        setTitleNow(route.name);
      }
    });
    routesAuth.forEach((route) => {
      if (route.pathname === pathname) {
        newTitle = `${title.BASE_TITLE} ${route.name}`;
        setTitleNow(route.name);
      }
    });
    document.title = newTitle;
  }, [pathname]);

  const handleClick = (menu) => {
    if (menu === "main-menu") {
      setMenuActive(!menuActive);
      setMenuAuthActive(false);
    }
    if (menu === "user-menu") {
      setMenuActive(false);
      setMenuAuthActive(!menuAuthActive);
    }
  };

  const handleLogout = (e) => {
    setMenuAuthActive(false);
    userDispatch(logoutUser());
  };

  return (
    <StyledNavbar>
      <StyledNavbarWrapper>
        <StyledNavbarToggle
          role="button"
          aria-label="button"
          onClick={() => handleClick("main-menu")}
        >
          <Icon icon={faBars} fixedWidth />
        </StyledNavbarToggle>
        <StyledNavbarBrand>{titleNow}</StyledNavbarBrand>
        <StyledNavbarMenu active={menuActive}>
          {routes.map((route, i) => (
            <StyledNavbarItem key={i}>
              <StyledNavbarLink
                to={route.pathname}
                selected={route.pathname === pathname}
                onClick={() => setMenuActive(false)}
              >
                <Wrapper>
                  <Icon icon={route.icon} />
                  <span>{route.name}</span>
                </Wrapper>
              </StyledNavbarLink>
            </StyledNavbarItem>
          ))}
        </StyledNavbarMenu>
        <IconContainer
          role="button"
          aria-label="button"
          onClick={() => handleClick("user-menu")}
        >
          <Icon icon={faUser} />
        </IconContainer>
        <UserMenu active={menuAuthActive}>
          {!user &&
            routesAuth.map((route, i) => (
              <StyledNavbarItem key={i}>
                <StyledNavbarLink
                  to={route.pathname}
                  selected={route.pathname === pathname}
                  onClick={() => setMenuAuthActive(false)}
                >
                  <Wrapper>
                    <Icon icon={route.icon} />
                    <span>{route.name}</span>
                  </Wrapper>
                </StyledNavbarLink>
              </StyledNavbarItem>
            ))}
          {user && (
            <StyledNavbarItem>
              <StyledNavbarLink to="/" selected={false} onClick={handleLogout}>
                <Wrapper>
                  <Icon icon={faUser} />
                  <span>Cerrar sesión</span>
                </Wrapper>
              </StyledNavbarLink>
            </StyledNavbarItem>
          )}
        </UserMenu>
      </StyledNavbarWrapper>
    </StyledNavbar>
  );
};
