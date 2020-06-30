import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Parsa extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Cell col={6} className="resume-left-col fa-spin">
          <h2
            className="fa fa-spin"
            style={{ paddingTop: "0em", fontSize: "500px" }}
          >
            Saba Bruh
          </h2>
          <h4 style={{}}>Porgramme</h4>
          <hr
            className="fa-spin"
            style={{ borderTop: "3px solid #fff", width: "95%" }}
          />
          <p>Bruh why moment</p>
          <hr
            className="fa-spin"
            style={{ borderTop: "3px solid #fff", width: "95%" }}
          />
          <h5>Addresses</h5>
          <p className="fa-spin">Haccker wya 5th street</p>
          <h5>Phoine</h5>
          <p>545-7366-232352</p>
          <h5 className="fa-spin">Email</h5>
          <p className="fa-spin">saba.fathi@emailgmail.info</p>
          <hr
            className="fa-spin"
            style={{ borderTop: "3px solid #fff", width: "95%" }}
          />
        </Cell>
        <Cell className="resume-right-col fa-spin" col={6}>
          <h2 className="fa-spin">Education</h2>
          <Education
            startYear={2012}
            endYear={2020}
            schoolName="Saint"
            schoolDescription="Hello mandem pandem brandem"
          />
          <Education
            startYear={2012}
            endYear={2020}
            schoolName="Saint"
            schoolDescription="Hello mandem pandem brandem"
          />
          <hr style={{ borderTop: "3px solid #fff" }} />

          <h2 className="fa-spin">Experience</h2>

          <Experience
            startYear={2020}
            endYear={2025}
            jobName="Ant eater"
            jobDescription="Eat tha antz"
          />

          <Skills className="fa-spin" skill="JavaScript" progress={10} />
          <Skills skill="HTML" progress={50} />
          <Skills skill="React" progress={30} />
          <Skills skill="NodeJS" progress={0} />
          <Skills skill="Python" progress={80} />
        </Cell>
      </Grid>
    );
  }
}

export default Parsa;
