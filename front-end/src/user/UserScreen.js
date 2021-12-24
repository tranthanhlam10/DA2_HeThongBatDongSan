import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Home from "./home/Home";
import Wishlist from "./Wishlist/Wishlist";
import SearchingList from "./SearchingList/SearchingList";
import RealEstateDetail from "./RealEstateDetail/RealEstateDetail";
import UserInfo from "./UserInfo/UserInfo";

import Post from "./Post/Post";
import "./UserScreen.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function UserScreen() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          <Route exact={true} path="/searchinglist">
            <SearchingList />
          </Route>
          <Route path="/realestate">
            <RealEstateDetail />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/userinfo">
            <UserInfo />
          </Route>
          <Route path="" exact={true}>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
