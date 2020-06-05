// import React, { Component } from 'react';
// import './App.css'
// import { Route, Switch, BrowserRouter as Router, Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
// import Main from './components/Main'
// import Resume from './components/Resume'
// import About from './components/About'
// import Projects from './components/Projects'
// import Contact from './components/Contact'

// class App extends Component {
//   constructor() {
//     super()
//       this.state = {}
//   }
//   render() {
//     return (
//       <div className="demo-big-content">
//         <Layout>
//           <Header title="Title" scroll>
//             <Router>
//               <Switch>
//                 <Route exact path="/resume" component={Resume} />
//                 <Route exact path="/about" component={About} />
//                 <Route exact path="/projects" component={Projects} />
//                 <Route exact path="/contact" component={Contact} />
//               </Switch>
//             </Router>
//           </Header>
//           <Drawer title="Title">
//             <Navigation>
//               <a href="/">Link</a>
//               <a href="/">Link</a>
//               <a href="/">Link</a>
//               <a href="/">Link</a>
//             </Navigation>
//           </Drawer>
//           <Content>
//             <div className="page-content" />
//             <Main />
//           </Content>
//         </Layout>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;