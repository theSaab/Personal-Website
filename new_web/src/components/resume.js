
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education'
import Experience from './Experience'
import Skills from './Skills'


class Resume extends Component {
    state = {  }
    render() { 
        return ( 
            <Grid>
                <Cell col={6} className='resume-left-col'>
                    <div style={{textAlign: 'center'}}>
                    <img 
                        src='sab_trist.JPG'
                        alt='saba'
                        className='sab'
                        />
                    </div>
                    <h2 style={{paddingTop: '0em'}}>Saba Bruh</h2>
                    <h4 style={{}}>Porgramme</h4>
                    <hr style={{borderTop: '3px solid #fff', width: '95%'}}/>
                    <p>Bruh why moment</p>
                    <hr style={{borderTop: '3px solid #fff', width: '95%'}}/>
                    <h5>Addresese</h5>
                    <p>Haccker wya 5th street</p>
                    <h5>Phoine</h5>
                    <p>545-7366-232352</p>
                    <h5>Email</h5>
                    <p>saba.fathi@emailgmail.info</p>
                    <hr style={{borderTop: '3px solid #fff', width: '95%'}}/>
                </Cell>
                <Cell className='resume-right-col' col={6}>
                    <h2>Education</h2>
                    <Education 
                        startYear={2012}
                        endYear={2020}
                        schoolName='Saint'
                        schoolDescription='Hello mandem pandem brandem'

                    />
                    <Education 
                        startYear={2012}
                        endYear={2020}
                        schoolName='Saint'
                        schoolDescription='Hello mandem pandem brandem'
                    />
                    <hr style={{borderTop: '3px solid #fff'}} />

                    <h2>Experience</h2>
                
                <Experience 
                    startYear={2020}
                    endYear={2025}
                    jobName='Ant eater'
                    jobDescription='Eat tha antz'
                    />
                    
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