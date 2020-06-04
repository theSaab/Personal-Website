

import React, { Component } from 'react';

//MUI stuff
import AppBar from 'material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


class Navbar extends Component {
    state = {}
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Button color='red'>Login</Button>
                    <Button color='red'>Home</Button>
                    <Button color='red'>Sign Up</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar;