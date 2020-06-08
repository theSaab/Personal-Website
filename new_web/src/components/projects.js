

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
                        <CardTitle style={{ color: '#ef5350', height: '176px', background: 'url(https://i.kym-cdn.com/entries/icons/facebook/000/016/540/hgh08Pez.jpg) center / cover' }}>Bruh Mandems</CardTitle>
                        <CardText> Top bruh moments</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#ef5350' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#29b6f6', height: '176px', background: 'url(https://i.redd.it/m36watjbu8d31.jpg) center / cover' }}>Who dunnit</CardTitle>
                        <CardText> Why doe bruh</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#29b6f6' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div><h1>this is Angular</h1></div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h1>this is VueJS</h1></div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div><h1>this is MongoDB</h1></div>
            )
        }
    }

    render() {
        return (
            <div className='tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab className='tab'>React</Tab>
                    <Tab >Angular</Tab>
                    <Tab >VueJS</Tab>
                    <Tab >MongoDB</Tab>
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