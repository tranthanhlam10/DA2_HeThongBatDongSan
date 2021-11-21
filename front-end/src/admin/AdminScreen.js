import React from "react";
import "./AdminScreen.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import adminRoutes from "./adminRoutes";
import AdminLeftBar from "../common/AdminLeftBar";
export default function AdminScreen() {
  let { path } = useRouteMatch();
  const renderRoutes =
    adminRoutes &&
    adminRoutes.map((route, index) => {
      return (
        <Route
          key={index}
          path={path + route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  return (
    <div className="home-admin">
      <AdminLeftBar />
      <Switch>{renderRoutes}</Switch>
    </div>
  );
}
