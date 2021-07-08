import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStyles } from "./Global.styles";

import { routes, routesAuth } from "config";

import * as pages from "./pages";
import { Navbar } from "./components";

import { userContext } from "store";
import { loginUser } from "store/actions";

function App() {
  const { userDispatch } = useContext(userContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        if (localStorage.getItem("user")) {
          userDispatch(loginUser(JSON.parse(localStorage.getItem("user"))));
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userDispatch]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      {!loading && (
        <>
          <Navbar />
          <Switch>
            {routes.map((route, i) => (
              <Route
                path={route.pathname}
                component={pages[route.component] || pages.NotFound}
                exact
                key={i}
              />
            ))}
            {routesAuth.map((route, i) => (
              <Route
                path={route.pathname}
                component={pages[route.component] || pages.NotFound}
                exact
                key={i}
              />
            ))}
            <Route component={pages.NotFound} />
          </Switch>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
