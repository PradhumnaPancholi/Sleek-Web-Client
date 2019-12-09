import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core'
import React, { FunctionComponent, useState } from 'react'
import { connect } from 'react-redux'

import { signInUserAction } from '../actions/user.actions'

//interface for state//
interface LoginFormState{
    email: string
    password: string 
}

// eslint-disable-next-line react/prefer-stateless-function
// const LoginForm: FunctionComponent<Partial<LoginFormState>> = () => {
const LoginForm: FunctionComponent = () => {
    
    const [credentials , setCredentials] = useState<LoginFormState>({
        email: '',
        password: ''
    })
    
    const signIn = async () => {
        console.log("this is from sign in")
        // this.props.signInUserAction()
    }

    const handleInputChanges = (e: any) => {
        const {name, value} = e.target
        // setState.name = value
    }

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
                            value={credentials.email}
                            onChange={this.handleInputChanges}
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
                            name='password'
                            value={credentials.password}
                            onChange={this.handleInputChanges}
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

const mapStateToProps = (state: any ) => ({
    user: state.user
})


export default connect(mapStateToProps, { signInUserAction })(LoginForm);