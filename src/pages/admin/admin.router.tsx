import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import React from "react";
import DashboardPageAdmin from "./pages/dashboard/dashboard.page";
import SliderPageAdmin from "./pages/slider/slider.page";

const AdminRouter = () => {

  const { path } = useRouteMatch();

  console.log('ddxd',path)

  return (
    <Switch>
      <Route exact path="/admin/dashboard">
        <DashboardPageAdmin />
      </Route>

      <Route exact path="/admin/slider">
        <SliderPageAdmin />
      </Route>

      <Redirect from="*" to="/admin/dashboard" />
    </Switch>
  );
};

export default AdminRouter;
