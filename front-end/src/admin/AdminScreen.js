import React from "react";
import "./AdminScreen.css";
import AdminLeftbar from "../common/AdminLeftBar";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import adminRoutes from "./adminRoutes";
export default function AdminScreen() {
  let { path } = useRouteMatch();
  const renderRoutesAd =
    adminRoutes &&
    adminRoutes.map((route, index) => {
      return (
        <Route
          key={index}
          path={path + route.pathadmin}
          exact={route.exact}
          component={route.mainadmin}
        />
      );
    });
  return (
    <div>
      <AdminLeftbar />
      <Switch>{renderRoutesAd}</Switch>
    </div>
  );
}
