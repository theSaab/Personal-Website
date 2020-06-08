
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
                        src='https://lh3.googleusercontent.com/8B-BqNmRXAft73_SwQT7MKtHNT2Ers4iF04fV7QBHC9dA_odqvcMKW0ic3eGOu59ouGjgIjcRVDxXWhPVgZW0ajDe6_bdKzxCJJnpZLLYCCOOplnsdQzuhn5vGKruOCPZQ394ToR2GBnVOS94un7CTsvozPIqDHSZ00CLCkP4O8hdB-pMpAFfXf8qckojtTihZRWi3CBZnBSQz_kHn2ErL120kQMacy1bgd8DuCt6ZUWaPnP9oIM9-PtLtjUqjnIjMzJXMzFMrqKeFn0ndg_gKAZGMfBvYSxeYmTSBazCsl_V9gJKYO-SUWWf5MUIlyG0ESolMw88NFYlseXbjAIq1kYhv_93-GZ4DKI0Nd3GVfCZLhNLfVBFUW9AungCQSB3KgOj7JDX-lFo_Wa4seGYn-YXIW6MRGqrm-IgmXYwYAOwg1Yvnukx8MALcvQQ0Y4dBU95AfOusRC2dsggK5yVoJEIZc5RfKlWcqkldGd-bh8Rs_FuUk-uigJ0Wzq2jCo6PdSO7Imx5sQnB5_V8ThiDOWlM5QQaDsEFFCBd4TL2u1QcfsgqGmhyRTVkHm3t_PF00Y6LDkvFhWBzcL9y7vWKc4cRjwalB8Nts0IHiUgI1iZq04j3F3YpiYHXRYPsNUrmEnKiZL9VqIeyF4TIP_T6fCDePDq9ztqPD6ON_m9T60Im1NW1WS6FJYT_VmhA=w1024-h576-no?authuser=0'
                        alt='saba'
                        style={{height: '270px', textAlign:'center'}} />
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
                    skill='javascript'
                    progress={0}
                />
                <Skills
                    skill='HTML'
                    progress={70}
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