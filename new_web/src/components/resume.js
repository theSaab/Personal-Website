
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education'
import Experience from './Experience'
import Skills from './Skills'


class Resume extends Component {
    state = {}
    render() {
        return (
            <Grid>
                <Cell col={6} className='resume-left-col'>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src='sab_trist.JPG'
                            alt='saba'
                            className='sab'
                        />
                    </div>
                    <h2 style={{ paddingTop: '0em' }}>Saba Bruh</h2>
                    <h4 style={{}}>Program</h4>
                    <hr style={{ borderTop: '3px solid #fff', width: '95%' }} />
                    <p>
                        I am a software engineer student who goes to
                        McGill University in Montreal, who is awaiting
                        orders to study at home. This will be an interesting semester.
                    </p>
                    <hr style={{ borderTop: '3px solid #fff', width: '95%' }} />
                    <h5>Addresse</h5>
                    <p>Haccker 5th street</p>
                    <h5>Phone</h5>
                    <p>613-240-5353</p>
                    <h5>Email</h5>
                    <p>saba.fathi@emailgmail.info</p>
                    <hr style={{ borderTop: '3px solid #fff', width: '95%' }} />
                </Cell>
                <Cell className='resume-right-col' col={6}>
                    <h2>Education</h2>
                    <Education
                        startYear={2012}
                        endYear={2018}
                        schoolName='Saint-Alexandre'
                        schoolDescription='Old looking school with some very rich
                        people and some other not very rich people. Nothing else interesting
                        about the school.'

                    />
                    <Education
                        startYear={2018}
                        endYear={2020}
                        schoolName='Heritage College'
                        schoolDescription='Old head school for liberal art students
                        and liberals.The english version of Felix-Lecler Cegep.'
                    />

                    <hr style={{ borderTop: '3px solid #fff' }} />

                    <h2>Experience</h2>

                    <Experience
                        startYear={2019}
                        endYear={2019}
                        jobName='Lifeguard'
                        jobDescription='Ensure the safety of multiple individuals 
                        observation and patience. Control liquid environment with harsh chemicals
                        and modify medium if necessary.'
                    />

                    <hr style={{ borderTop: '3px solid #fff' }} />

                    <h3>Programming Experience</h3>

                    <Skills
                        skill='JavaScript'
                        progress={10}
                    />
                    <Skills
                        skill='HTML'
                        progress={50}
                    />
                    <Skills
                        skill='React'
                        progress={30}
                    />
                    <Skills
                        skill='NodeJS'
                        progress={0}
                    />
                    <Skills
                        skill='Python'
                        progress={80}
                    />
                </Cell>
            </Grid>
        );
    }
}

export default Resume;