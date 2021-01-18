import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <ul class="timeline">
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag">I awoken</span>
                <span class="time-wrapper">
                  <span class="time">June 2 2001</span>
                </span>
              </div>
              <div class="desc">
                I was born in Ottawa in 2001.
              </div>
            </div>
          </li>

          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag">Ottawa Life</span>
                <span class="time-wrapper">
                  <span class="time">2001 ~ 2010</span>
                </span>
              </div>
              <div class="desc">
                I grew up in Ottawa South.
              </div>
            </div>
          </li>

          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag">Primary School</span>
                <span class="time-wrapper">
                  <span class="time">2006 - 2012</span>
                </span>
              </div>
              <div class="desc">
                I went to Rapides-Deschenes primary school in Gatineau.
              </div>
            </div>
          </li>

          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag">High School</span>
                <span class="time-wrapper">
                  <span class="time">2012 - 2018</span>
                </span>
              </div>
              <div class="desc">
                I went to College Saint-Alexandre and obtained a high school diploma.                
              </div>
            </div>
          </li>

          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag">Cegep</span>
                <span class="time-wrapper">
                  <span class="time">2018 - 2020</span>
                </span>
              </div>
              <div class="desc">
                I obtained my college degree from Heritage College.                
              </div>
            </div>
          </li>

          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag">University</span>
                <span class="time-wrapper">
                  <span class="time">2020 - 2024</span>
                </span>
              </div>
              <div class="desc">
                I am currently studying remotely for a B.Eng in Software Engineering.
              </div>
            </div>
          </li>

        </ul>
      </div>
    );
  }
}
export default About;
