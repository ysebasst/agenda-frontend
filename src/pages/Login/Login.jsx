import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Field, Button, Link } from "components";

import { userContext } from "store";
import { loginUser } from "store/actions";
import { URL_API } from "config";
import { useInput } from "hooks";

import { StyledLogin, StyledForm, StyledIcon } from "./Login.styles";

import {
  faEnvelope,
  faUserCircle,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

export const Login = () => {
  const { user, userDispatch } = useContext(userContext);
  const history = useHistory();

  const [errorMessage, setErrorMessage] = useState(null);

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
        email,
        password,
      });
      const res = await fetch(`${URL_API}/user/login`, {
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
        userDispatch(
          loginUser({ ...resJSON.data.user, token: resJSON.data.token })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledLogin>
      <StyledForm onSubmit={handleSubmit}>
        <StyledIcon icon={faUserCircle} />
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
        <Button type="submit">Ingresar</Button>
        <p style={{ margin: ".5rem 0", textAlign: "center" }}>
          ¿No tienes una cuenta? &nbsp;
          <Link to="/registrarse">Registrate</Link>
        </p>
      </StyledForm>
    </StyledLogin>
  );
};
