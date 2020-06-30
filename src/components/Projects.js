import React, { Component } from "react";
import {
  Button,
  Card,
  CardActions,
  CardText,
  CardTitle,
  Cell,
  Grid,
  Tab,
  Tabs,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    // Python Page
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-name">
          <Card
            shadow={5}
            style={{
              heigth: "auto",
              width: "500px",
              minWidth: "50px",
              margin: "15px auto",
            }}
          >
            <CardTitle
              style={{
                color: "white",
                height: "400px",
                background:
                  "url(https://attackofthefanboy.com/wp-content/uploads/2018/11/fallout-terminal-computer-hacking-guide.jpg) center / cover",
              }}
            ></CardTitle>

            <CardText>
              <p style={{ fontSize: "20px", color: "black" }}>
                <strong>Fallout Hacking Simulator</strong>
                <br />
                Python simulation of the hacking in Fallout games.
              </p>
            </CardText>

            <CardActions border>
              <a
                href="https://github.com/theSaab/Project/blob/master/fallout_terminal..py"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  style={{
                    backgroundColor: "lightblue",
                    color: "blue",
                    fontSize: "20px",
                  }}
                >
                  Github
                </Button>
              </a>
            </CardActions>
          </Card>

          <Card
            shadow={5}
            style={{ width: "500px", minWidth: "50px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "white",
                height: "300px",
                background:
                  "url(https://leetcode.com/static/images/LeetCode_Sharing.png) center / cover",
              }}
            ></CardTitle>

            <CardText>
              <p style={{ fontSize: "20px", color: "black" }}>
                <strong>Python Leetcode Work</strong>
                <br />
                All work related to my Python Leetcode work, a project in
                itself.
              </p>
            </CardText>

            <CardActions border>
              <a
                href="https://github.com/theSaab/leetcode"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  style={{
                    backgroundColor: "lightblue",
                    color: "blue",
                    fontSize: "20px",
                  }}
                >
                  Github
                </Button>
              </a>
            </CardActions>
          </Card>

          <Card
            shadow={5}
            style={{ width: "500px", minWidth: "50px", margin: "10px auto" }}
          >
            <CardTitle
              style={{
                color: "white",
                height: "300px",
                background:
                  "url(https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fit,f_auto,fl_progressive,q_auto,w_1333/v1428566541/article/R11851_image1) center",
              }}
            ></CardTitle>

            <CardText>
              <p style={{ fontSize: "20px", color: "black" }}>
                <strong>TypeTester Program</strong>
                <br />A Python program made to test your typing skills. (Needs
                Tuning)
              </p>
            </CardText>

            <CardActions border>
              <a
                href="https://github.com/theSaab/Python_Projects/blob/master/speed_typing_test.py"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  style={{
                    backgroundColor: "lightblue",
                    color: "blue",
                    fontSize: "20px",
                  }}
                >
                  Github
                </Button>
              </a>
            </CardActions>
          </Card>

          <Card
            shadow={5}
            style={{ width: "500px", minWidth: "50px", margin: "10px auto" }}
          >
            <CardTitle
              style={{
                color: "white",
                height: "350px",
                background:
                  "url(https://media.wired.com/photos/5954a1b05578bd7594c46869/master/w_1600,c_limit/reddit-alien-red-st.jpg) center / cover",
              }}
            ></CardTitle>

            <CardText>
              <p style={{ fontSize: "20px", color: "black" }}>
                <strong>Email API</strong>
                <br />
                Spam Python program that sends you an email of all the Top{" "}
                <i>r/gaming</i> posts of reddit.
              </p>
            </CardText>

            <CardActions border>
              <a
                href="https://github.com/theSaab/Python_Projects/blob/master/auto_email.py"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  style={{
                    backgroundColor: "lightblue",
                    color: "blue",
                    fontSize: "20px",
                  }}
                >
                  Github
                </Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    }

    // React Page
    else if (this.state.activeTab === 1) {
      return (
        <div className="react">
          <Card
            shadow={5}
            style={{ width: "500px", minWidth: "50px", margin: "10px auto" }}
          >
            <CardTitle
              style={{
                color: "white",
                height: "350px",
                background:
                  "url(https://images-na.ssl-images-amazon.com/images/I/51G26e3Y9XL._AC_SX425_.jpg) center / cover",
              }}
            ></CardTitle>

            <CardText>
              <p style={{ fontSize: "20px", color: "black" }}>
                <strong>Counter</strong>
                <br />
                Counter React Program, not very interesting.
              </p>
            </CardText>

            <CardActions border>
              <a
                href="https://github.com/theSaab/Website"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  style={{
                    backgroundColor: "lightblue",
                    color: "blue",
                    fontSize: "20px",
                  }}
                >
                  Github
                </Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="toBeDeveloped">
          <h1>To be developed.</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="toBeDeveloped">
          <h1>To be developed.</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab className="tab">Python</Tab>
          <Tab>React</Tab>
          {/*<Tab >To be developed.</Tab>
                    <Tab >To be developed.</Tab> */}
        </Tabs>

        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
