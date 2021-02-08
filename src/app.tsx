import React, { Suspense } from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import PrivateRoute from "./routes/private.routes";
import PublicRoutes from "./routes/public.routes";

const HomePage = React.lazy(() => import("./pages/home/home.page"));
const LoginPage = React.lazy(() => import("./pages/login/login.page"));
const AdminPage = React.lazy(() => import("./pages/admin/admin.page"));

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Suspense fallback="Cargando">
          <HomePage />
          </Suspense>
        </Route>

        <PublicRoutes Component={LoginPage} path="/login" />

        <PrivateRoute Component={AdminPage} path="/admin"></PrivateRoute>

        <Redirect from="*" exact={true} to="/home" />
      </Switch>
    </Router>
  );
};
