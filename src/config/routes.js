import {
  faHome,
  faClock,
  faReceipt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const routes = [
  {
    pathname: "/",
    name: "Inicio",
    component: "Home",
    icon: faHome,
  },
  {
    pathname: "/reloj",
    name: "Reloj",
    component: "Clock",
    icon: faClock,
  },
  {
    pathname: "/recibos",
    name: "Recibos",
    component: "Receipt",
    icon: faReceipt,
  },
];

export const routesAuth = [
  {
    pathname: "/iniciar-sesion",
    name: "Iniciar sesión",
    component: "Login",
    icon: faUser,
  },
  {
    pathname: "/registrarse",
    name: "Registrarse",
    component: "Signup",
    icon: faUser,
  },
];
