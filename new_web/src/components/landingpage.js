
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class LandingPage extends Component {
    state = {}
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src='https://lh3.googleusercontent.com/oVxXHAi3xrQt9nDNdwYhVXOB4Zso8Ft7aJCrOyz0pngAq8fsjnvU0MrovdAM5oepe0juhxxiw0mE2-khN8MWjd8Lrpmr6mKCQ7pFLkOwdiwhBiy-krUYXWFCzUG5lwMmSVZyzRjlLNWJKAm6bfTJHS4RqGLW1tEtYfLH7xtGJ55hiLlQcoyNFMcXgFiPDb8Qjbi6S0Ukh9kopOtLEB7P6DY0YoQXU3M4oiRcLa1o7lCsxZ6V69yyhINaG3_Ta9OM-KahJ0SLG9m570GQLyEmo52dOSUmT7qEWFLATc_96Xq-_t_33IZLQLPYrP_Jf2wa6stv8R0wjcms2P-yGQb1n_Po-3koUJ7mV3rFwUeZLavuto520PKwfLAJJSyTxUKB6v5KZKRYYtsiJgJr04j7-NOLgIGUSTTcCwg6k3LvsrJltXV2BlwMCgTq3KHdqtX7I7Nt6kladR64nrwJhhDxO2OwjH_X1QUmgZFYe7UP0nsnPsrhU4Ht_P_WfoiCBenZL7NuaijCNvjAnFxQrZtLPaOK6d-BAPQTFFzmd4YeOG9tSDDY7x9GbBDuDxDxDom6iqJ__YYctAwz7B-0S7m2Gy0It8wa6SqT08uBHNbcyxYXMtK2FLiBPnmU1apEXb51J6Ssq-gbVMFC7e1DbgmqmjxRLwM8B8PhYUABXcwv08BG4Jf2qQOxjJfdYdl-WA=w741-h987-no?authuser=0'
                            alt='me'
                            className='me' />

                        <div className='banner-text' >
                            <h1>Saba</h1>
                            <hr style={{marginTop:'-20px', borderTop: '3px solid wheat', width: '80%' }} />
                            <h2>McGill University</h2>
                            <h4>Software Engineer</h4>


                            <hr />

                            <p>Python | React | JavaScript | HTML/CSS</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/saba-fathi-7300ab1b0/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square linkedin-hover" aria-hidden="true" />
                                </a>
                                <a href="https://github.com/theSaab" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                <a href="https://www.facebook.com/saba.fathi.35" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>
                                <a href="https://www.youtube.com/channel/UC922yqo9KakjdaV3GUyh_YQ" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;