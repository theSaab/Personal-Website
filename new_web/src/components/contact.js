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
                            src="buffet.jpg"
                            alt="avatar"
                            style={{
                                height: '280px',
                                textAlign: 'center'
                            }} />

                        <p style={{
                            width: '90%',
                            margin: 'auto',
                            paddingTop: '2em',
                            textAlign: 'justify',
                            lineHeight: '2em',
                        }}>
                            If you would like to message me, I am available 18/7
                            through these platforms, do not send spam or
                            I will retaliate. May your road lead to warm sands.
                        </p>

                    </Cell>
                    <Cell col={6} className='contact-right-col'>
                        <h2>Contact Me</h2>
                        <hr style={{ borderTop: '3px solid #ffffff', width: '95%' }} />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', color: 'white', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />  (613)-240-5353
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', color: 'white', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope-o" aria-hidden="true" />  saba.fathi@mail.mcgill.ca
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', color: 'white', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />  saba.fathi@emailgmail.info
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', color: 'white', fontFamily: 'Anton' }}>
                                        <i className="fa fa-skype" aria-hidden="true" />  saba.fathi_1
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', color: 'white', fontFamily: 'Anton' }}>
                                        <i className="fa fa-instagram" aria-hidden="true" />  saab.fathi
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