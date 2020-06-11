import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import Parsa from './parsa';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path='/parsa' component={Parsa} />
  </Switch>
)

export default Main;