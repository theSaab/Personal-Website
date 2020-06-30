import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid className="education-grid">
        <Cell col={4} style={{ paddingTop: "4px" }}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
