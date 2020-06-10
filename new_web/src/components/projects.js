

import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className='projects-name'>

                    <Card shadow={5}
                        style={{
                            heigth: 'auto',
                            width: '500px',
                            minWidth: '50px',
                            margin: '15px auto'
                        }}>

                        <CardTitle
                            style={{
                                color: 'white', height: '400px',
                                background: 'url(https://twinfinite.net/wp-content/uploads/2015/11/fallout-4-hacking-600x337.jpg) center / cover'
                            }}>
                            Fallout Hacking Simulator
                        </CardTitle>

                        <CardText >
                            <p style={{ fontSize: '20px', color: 'black' }}>
                                Python simulation of the hacking in Fallout games.
                                </p>
                        </CardText>

                        <CardActions border>
                            <a href="https://github.com/theSaab/Project/blob/master/fallout_terminal..py" rel="noopener noreferrer" target="_blank">
                                <Button
                                    style={{ backgroundColor: 'lightblue', color: 'blue', fontSize: '20px' }}>
                                    Github
                                </Button>
                            </a>
                        </CardActions>
                    </Card>


                    <Card shadow={5}
                        style={{ width: '500px', minWidth: '50px', margin: 'auto' }}>
                        <CardTitle style={{
                            color: 'white', height: '300px',
                            background: 'url(https://leetcode.com/static/images/LeetCode_Sharing.png) center / cover'
                        }}>
                        </CardTitle>

                        <CardText >
                            <p style={{ fontSize: '20px', color: 'black' }}>
                                All work realted to my Python leetcode work,
                            a project in itself. </p>
                        </CardText>

                        <CardActions border>
                            <a href="https://github.com/theSaab/leetcode"
                                rel="noopener noreferrer"
                                target="_blank">
                                <Button
                                    style={{ backgroundColor: 'lightblue', color: 'blue', fontSize: '20px' }}>
                                    Github
                                </Button>
                            </a>
                        </CardActions>

                    </Card>

                    <Card shadow={5}
                        style={{ width: '500px', minWidth: '50px', margin: '10px auto' }}>
                        <CardTitle style={{
                            color: 'white', height: '300px',
                            background: 'url(https://lh3.googleusercontent.com/proxy/NhcDVaSdXOuQXp1dakMCCMjYgtMlDN7J6SroCd26vd71D2c6696Jw3d-KN0c5qD42dKL3xVocEyAPF50wn77KMxFDeWpGkxHH_WMXlGa5HhJ9K5fIhPtPFcbIDTE51nb8w) center / cover'
                        }}>
                        </CardTitle>

                        <CardText >
                            <p style={{ fontSize: '20px', color: 'black' }}>
                                A python program made to test your typing skills. (Needs Tuning)
                                </p>
                        </CardText>

                        <CardActions border>
                            <a href="https://github.com/theSaab/Python_Projects/blob/master/speed_typing_test.py"
                                rel="noopener noreferrer"
                                target="_blank">
                                <Button
                                    style={{ backgroundColor: 'lightblue', color: 'blue', fontSize: '20px' }}>
                                    Github
                                </Button>
                            </a>
                        </CardActions>
                    </Card>

                    <Card shadow={5}
                        style={{ width: '500px', minWidth: '50px', margin: '10px auto' }}>
                        <CardTitle style={{
                            color: 'white', height: '350px',
                            background: 'url(https://media.wired.com/photos/5954a1b05578bd7594c46869/master/w_1600,c_limit/reddit-alien-red-st.jpg) center / cover'
                        }}>
                        </CardTitle>

                        <CardText >
                            <p style={{ fontSize: '20px', color: 'black' }}>
                                Spam Python that send you an email
                                of all Top r/gaming Posts of reddit.
                                </p>
                        </CardText>

                        <CardActions border>
                            <a href="https://github.com/theSaab/Python_Projects/blob/master/auto_email.py"
                                rel="noopener noreferrer"
                                target="_blank">
                                <Button
                                    style={{ backgroundColor: 'lightblue', color: 'blue', fontSize: '20px' }}>
                                    Github
                                </Button>
                            </a>
                        </CardActions>
                    </Card>

                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className='toBeDeveloped'><h1>To be developed.</h1></div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className='toBeDeveloped'><h1>To be developed.</h1></div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div className='toBeDeveloped'><h1>To be developed.</h1></div>
            )
        }
    }

    render() {
        return (
            <div className='tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab className='tab'>Python</Tab>
                    {/* <Tab >To be developed.</Tab>
                    <Tab >To be developed.</Tab>
                    <Tab >To be developed.</Tab> */}
                </Tabs>

                <Grid className='projects-grid'>
                    <Cell col={12}>
                        <div className='content'>{this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div >
        )
    }
}

export default Projects;