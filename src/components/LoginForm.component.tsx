import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core'
import React, { Component } from 'react'

// eslint-disable-next-line react/prefer-stateless-function
class LoginForm extends Component{
    render() {
        return(
            <div className= 'login-form'>
                <Card>
                    <CardContent className='login-content'>
                        <Typography variant='h5' component='h2'>
                            Log Into Your Account
                        </Typography>
                        <div>
                            <TextField
                                id='outlined-email-input'
                                label='Email'
                                type='email'
                                name='email'
                                autoComplete='email'
                                margin='normal'
                                variant='outlined'
                                InputProps={{
                                    className:'login-input-props'
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
                                    className:'login-input-props'
                                }}
                            />
                        </div>
                        <div>
                            <Button variant='contained'>
                                Log In
                            </Button>
                        </div>
                        <Typography variant='h6' component='h5'>
                            Don't have an account yet? <a href='/signup'>Sign Up</a>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default LoginForm;