import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/Landing/Login";
import Register from "./components/Landing/Register";
import Informations from "./components/Informations";
import Profile from "./components/Profile"
import Home from "./components/Home"

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/informations" component={Informations} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </>
  );
};

export default Router;
