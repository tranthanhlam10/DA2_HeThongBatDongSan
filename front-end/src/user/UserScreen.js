import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "./UserScreen.css";
import userRoutes from "./userRoutes";
import { Switch, Route, useRouteMatch } from "react-router-dom";
export default function UserScreen() {
  let { path } = useRouteMatch();
  const renderRoutes =
    userRoutes &&
    userRoutes.map((route, index) => {
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
    <div>
      <Header />
      <Switch>{renderRoutes}</Switch>
      <Footer />
    </div>
  );
}
