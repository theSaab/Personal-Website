import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import Parsa from "./parsa";
import Projects from "./Projects";
import Resume from "./Resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/parsa" component={Parsa} />
  </Switch>
);

export default Main;
