import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import sab_trist from "../assets/sab_trist.jpg";

class Resume extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Cell col={6} className="resume-left-col">
          <div style={{ textAlign: "center" }}>
            <img
              style={{ height: "50%", width: "50%" }}
              src={sab_trist}
              alt="saba"
              className="sab"
            />
          </div>
          <h2 style={{ paddingTop: "0em" }}>Saba</h2>
          <h4 style={{}}>Program</h4>
          <hr style={{ borderTop: "3px solid #fff", width: "95%" }} />
          <p>
            I am a Software Engineer student who  McGill University in
            Montreal. This will be an interesting semester.
          </p>
          <hr style={{ borderTop: "3px solid #fff", width: "95%" }} />
          {/* <h5>Address</h5>
          <p>Hacker 5th Street</p> */}
          <h5>Phone</h5>
          <p>(613) 240-5353</p>
          <h5>Email</h5>
          <p>
            <a
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "inherit",
              }}
              href="mailto:saba.fathi@emailgmail.info"
            >
              saba.fathi@emailgmail.info
            </a>
          </p>
          <hr style={{ borderTop: "3px solid #fff", width: "95%" }} />
        </Cell>
        <Cell className="resume-right-col" col={6}>
          <h2>Education</h2>
          <Education
            startYear={2012}
            endYear={2018}
            schoolName="École Secondaire Saint-Alexandre"
            // schoolDescription=""
          />
          <Education
            startYear={2018}
            endYear={2020}
            schoolName="Heritage College"
            // schoolDescription=""
          />
           <Education
            startYear={2020}
            endYear={2024}
            schoolName="McGill University"
            // schoolDescription=""
          />

          <hr style={{ borderTop: "3px solid #fff" }} />

          <h2>Experience</h2>

          <Experience
            startYear={2019}
            endYear={2020}
            jobName="Lifeguard"
            jobDescription="Ensure the safety of multiple individuals 
                        observation and patience. Control liquid environment with harsh chemicals
                        and modify medium if necessary."
          />

          <hr style={{ borderTop: "3px solid #fff" }} />

          <h3>Programming Experience</h3>
          <Skills skill="Java" progress={80} />
          <Skills skill="Python " progress={80} />
          <Skills skill="HTML" progress={50} />
          <Skills skill="React " progress={30} />
          <Skills skill="NodeJS" progress={5} />
        </Cell>
      </Grid>
    );
  }
}

export default Resume;
