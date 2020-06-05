import React from 'react'
import LandingPage from './landingpage';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import about from './aboutme'
import contact from './contact'
import projects from './projects'
import resume from './resume'



const Main = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/about' component={about} />
        <Route exact path='/contact' component={contact} />
        <Route exact path='/projects' component={projects} />
        <Route exact path='/resume' component={resume} />
    </Switch>
    </BrowserRouter>
)

export default Main;