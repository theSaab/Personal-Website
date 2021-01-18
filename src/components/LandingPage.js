import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import camera from "../assets/camera.jpg";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "auto", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img className="me" src={camera} alt="me" />

            <div className="banner-text">
              <h1>Saba</h1>
              <hr
                style={{
                  marginTop: "-20px",
                  borderTop: "3px solid wheat",
                  width: "80%",
                }}
              />
              <h2>McGill University</h2>
              <h4>Software Engineer</h4>

              <hr />

              <p>
                <a href="https://www.python.org/" target="_blank">
                  Python
                </a>{" "}
                |{" "}
                <a href="https://reactjs.org/" target="_blank">
                  React
                </a>{" "}
                |{" "}
                <a href="https://www.javascript.com/" target="_blank">
                  JavaScript
                </a>{" "}
                |{" "}
                <a href="https://html.com/" target="_blank">
                  HTML/CSS
                </a>
              </p>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/saba-fathi2001/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-linkedin-square linkedin-hover"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="https://github.com/theSaab"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                <a
                  href="https://www.facebook.com/saba.fathi.35"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>

                <a
                  href="https://www.youtube.com/channel/UC922yqo9KakjdaV3GUyh_YQ"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
