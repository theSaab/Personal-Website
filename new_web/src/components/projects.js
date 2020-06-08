

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

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#ffffff', height: '176px',
                            background: 'url(https://twinfinite.net/wp-content/uploads/2015/11/fallout-4-hacking-600x337.jpg) center / cover'
                        }}>
                            Fallout Hacking Simulator</CardTitle>
                        <CardText> Python simulation of the hacking in Fallout games. </CardText>
                        <CardActions border>
                            <a href="https://github.com/theSaab/Project/blob/master/fallout_terminal..py" rel="noopener noreferrer" target="_blank">
                                <Button>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{ color: '' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>


                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#24a9ae', height: '176px',
                            background: 'url(https://leetcode.com/static/images/LeetCode_Sharing.png) center / cover'
                        }}>
                        </CardTitle>
                        <CardText>All work realted to my Python leetcode work,
                        a project in itself.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/theSaab/leetcode" rel="noopener noreferrer" target="_blank">
                                <Button>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{ color: '#ffffff' }}>
                            <IconButton name='share' onClick='' />
                            </CardMenu>
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
                    <Tab className='tab'>React</Tab>
                    <Tab >To be developed.</Tab>
                    <Tab >To be developed.</Tab>
                    <Tab >To be developed.</Tab>
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