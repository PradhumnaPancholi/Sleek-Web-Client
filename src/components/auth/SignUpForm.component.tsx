import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import AvatarModal from './AvatarModal.component'

class SignUpForm extends Component{
    render(){
        return(
            <div className= 'signup-form'>
                <Card>
                    <CardContent className='signup-content'>
                        <Typography variant='h5' component='h2'>
                            Create A New Account
                        </Typography>
                        <div>
                            <TextField
                                id='outlined-username-input'
                                label='Username'
                                type='username'
                                name='username'
                                autoComplete='username'
                                margin='normal'
                                variant='outlined'
                                InputProps={{
                                    className:'signup-input-props'
                                }}
                            />
                        </div>
                        <div>
                            <TextField
                                id='outlined-username-input'
                                label='Email'
                                type='email'
                                name='email'
                                autoComplete='email'
                                margin='normal'
                                variant='outlined'
                                InputProps={{
                                    className:'signup-input-props'
                                }}
                            />
                        </div>
                        <div>
                            <TextField
                                id='outlined-password-input'
                                label='Password'
                                type='password'
                                autoComplete='current-password'
                                margin='normal'
                                variant='outlined'
                                InputProps={{
                                    className:'signup-input-props'
                                }}
                            />
                        </div>
                        <div>
                            <AvatarModal />
                        </div>
                        <div>
                            <Button variant='contained'>
                                Sign Up
                            </Button>
                        </div>
                        <Typography variant='h6' component='h5'>
                            Already have an account? <NavLink to='/'>Sign In</NavLink>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default SignUpForm