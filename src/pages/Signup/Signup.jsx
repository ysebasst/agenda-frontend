import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Field, Button, Link } from "components";

import { userContext } from "store";
import { URL_API } from "config";

import { StyledSignup, StyledForm, StyledIcon } from "./Signup.styles";

import {
  faUser,
  faEnvelope,
  faUserCircle,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

import { useInput } from "hooks";

export const Signup = () => {
  const { user } = useContext(userContext);
  const history = useHistory();

  const [errorMessage, setErrorMessage] = useState(null);

  const [name, handleChangeName] = useInput("");
  const [email, handleChangeEmail] = useInput("");
  const [password, handleChangePassword] = useInput("");

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = JSON.stringify({
        name,
        email,
        password,
      });
      const res = await fetch(`${URL_API}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      const resJSON = await res.json();
      if (resJSON.error) {
        setErrorMessage(resJSON.error);
      } else {
        setErrorMessage(null);
      }
      if (resJSON.data) {
        history.push("/iniciar-sesion");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledSignup>
      <StyledForm onSubmit={handleSubmit}>
        <StyledIcon icon={faUserCircle} />
        <Field
          icon={faUser}
          id="name"
          name="name"
          type="text"
          placeholder="nombre"
          value={name}
          onChange={handleChangeName}
        />
        <Field
          icon={faEnvelope}
          id="email"
          name="email"
          type="email"
          placeholder="correo"
          value={email}
          onChange={handleChangeEmail}
        />
        <Field
          icon={faLock}
          id="password"
          name="password"
          type="password"
          placeholder="contraseña"
          value={password}
          onChange={handleChangePassword}
        />
        {errorMessage && <p>{errorMessage}</p>}
        <Button type="submit">Registrarse</Button>
        <p style={{ margin: ".5rem 0", textAlign: "center" }}>
          ¿Tienes una cuenta? &nbsp;
          <Link to="/iniciar-sesion">Inicia sesión</Link>
        </p>
      </StyledForm>
    </StyledSignup>
  );
};
