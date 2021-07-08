import { useContext } from "react";

import { userContext } from "store";

import { StyledHome, StyledHomeWrapper } from "./Home.styles";

export const Home = () => {
  const { user } = useContext(userContext);
  return (
    <StyledHome>
      <StyledHomeWrapper>
        <h1>HOME</h1>
        <h3>Id: {user ? user.id : "NOT ID"}</h3>
        <h3>Nombre: {user ? user.name : "NOT NAME"}</h3>
        <h3>Email: {user ? user.email : "NOT EMAIL"}</h3>
      </StyledHomeWrapper>
    </StyledHome>
  );
};
