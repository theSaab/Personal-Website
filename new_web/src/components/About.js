
import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl'

class About extends Component {
    state = {}
    render() {
        return (
            <div className='body'>
                <ul class="timeline">
                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="flag">I awoken</span>
                                <span class="time-wrapper"><span class="time">June 2 2001</span></span>
                            </div>
                            <div class="desc">
                                I am born into the dark world of 2001.
                                Is this my fate?
                                Only time will tell.
                        </div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="flag">Ottawa Life</span>
                                <span class="time-wrapper"><span class="time">2001 ~ 2010</span></span>
                            </div>
                            <div class="desc">
                            I grew up in Ottawa South and lived off of Grandma food,
                            weird smells and weirder routines.
                            Any and all friendships lasted no longer than twenty (20) minutes.</div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="flag">Primary School</span>
                                <span class="time-wrapper"><span class="time">2006 - 2012</span></span>
                            </div>
                            <div class="desc">
                                No idea how one survives in primary
                                without breaking a leg or something
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="flag">High School</span>
                                <span class="time-wrapper"><span class="time">2012 - 2018</span></span>
                            </div>
                            <div class="desc">
                                After suffering severe mental abuse by the hands of
                                power hungry teachers. I studied to be accepted into 
                                College Saint-Alexandre. Here I learned that gossip 
                                is a waste bean, and that many things teachers tell 
                                you that matter later on in College actually don't 
                                matter, at all. So that was a bunch of lies. Bruh
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default About;