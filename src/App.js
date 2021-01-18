import React, { Component } from "react";
import { Content, Drawer, Header, Layout, Navigation } from "react-mdl";
import { Link } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header"
            title={
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/"
                className="fa fa-home fa-1.5x"
              >
                {" "}
                MyPortfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              {/* <Link to="/parsa" className="fa fa-eye">
                {" "}
                Parsa Click Here
              </Link> */}
              <Link to="/resume" className="fa fa-book">
                {" "}
                Resume
              </Link>
              <Link to="/about" className="fa fa-address-card">
                {" "}
                About Me
              </Link>
              <Link to="/projects" className="fa fa-tasks">
                {" "}
                Projects
              </Link>
              <Link to="/contact" className="fa fa-at">
                {" "}
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link
                style={{ textDecoration: "white", color: "black" }}
                to="/"
                className="fa fa-eye "
              >
                MyPortfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
