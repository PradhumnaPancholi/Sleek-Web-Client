import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';


// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" className="navbar">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              Sleek
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
