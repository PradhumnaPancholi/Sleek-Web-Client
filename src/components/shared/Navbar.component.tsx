import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'


// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position='static' className='navbar'>
          <Toolbar>
            <Typography variant='h6'>
              Sleek
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Navbar;
