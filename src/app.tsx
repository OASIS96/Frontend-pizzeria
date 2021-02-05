import React, { Suspense } from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/home/home.page"));
const LoginPage = React.lazy(() => import("./pages/login/login.page"));

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Suspense fallback={"Cargando"}>
            <HomePage />
          </Suspense>
        </Route>
        <Route exact path="/login">
          <Suspense fallback={"Cargando"}>
            <LoginPage />
          </Suspense>
        </Route>
        <Redirect from="/" to="home" />
      </Switch>
    </Router>
  );
};
