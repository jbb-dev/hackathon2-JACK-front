import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/Landing/Login";
import Register from "./components/Landing/Register";
import Informations from "./components/Informations";
import AboutUs from "./components/AboutUs";
import Demand1 from "./components/Demands/Demand-part1";
import Demand2 from "./components/Demands/Demand-part2";
import Demand3 from "./components/Demands/Demand-part3";






const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/informations" component={Informations} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/DemandStep1" component={Demand1} />
        <Route exact path="/DemandStep2" component={Demand2} />
        <Route exact path="/DemandStep3" component={Demand3} />
      </Switch>
    </>
  );
};

export default Router;
