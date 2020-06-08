import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { withRouter } from 'react-router-dom';


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} className='contact-left-col'>
                        <h2>Saba Jun</h2>
                        <img
                            src="https://i.kym-cdn.com/photos/images/newsfeed/001/598/769/782.jpg"
                            alt="avatar"
                            style={{ height: '380px', textAlign: 'center' }}
                        />
                        <p style={{ width: '90%', margin: 'auto', paddingTop: '2em', textAlign: 'justify' }}>
                            My name is Monke, I have lived for Eons, and will live for more. I have transcended time and space.
                            Do not underestimate me bruh, I know of your top bruh moments.
             </p>

                    </Cell>
                    <Cell col={6} className='contact-right-col'>
                        <h2>Contact Me</h2>
                        <hr style={{borderTop: '3px solid #000000', width: '95%'}}/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />  (613)-240-5353
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope-o" aria-hidden="true" />  saba.fathi@mail.mcgill.ca
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />  saba.fathi@emailgmail.info
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-skype" aria-hidden="true" />  N/A
                                        </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;