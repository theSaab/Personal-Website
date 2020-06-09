
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
        <Header className="header" 
        title={<Link style={{ textDecoration: 'none', color: 'white'}} 
        to="/" className='fa fa-home fa-1.5x'> MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume" className='fa fa-book'>  Resume</Link>
                <Link to="/about" className='fa fa-address-card'>  About Me</Link>
                <Link to="/projects" className='fa fa-tasks'>   Projects</Link>
                <Link to="/contact" className='fa fa-at'>   Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'white', color: 'black'}} 
        to="/" className='fa fa-eye '>MyPortfolio</Link>}>
            <Navigation>
                <Link to="/resume" >Resume</Link>
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