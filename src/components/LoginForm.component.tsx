import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signInUserAction } from '../actions/user.actions'

//interface for state//
interface IState{
    [key: string]: string
}

// eslint-disable-next-line react/prefer-stateless-function
class LoginForm extends Component<{}, IState>{

    constructor(props: any) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    signIn = async () => {
        console.log("this is from sign in")
        // this.props.signInUserAction()
    }

    handleInputChanges = (key: string) => (e: any) => {
        this.setState({ 
             [key] : e.target.value
        })
    }
    
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
                                value={this.state.email}
                                onChange={this.handleInputChanges('email')}
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
                                value={this.state.password}
                                onChange={this.handleInputChanges('password')}
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

const mapStateToProps = (state: any) => ({
    user: state.user
})


export default connect(mapStateToProps, { signInUserAction })(LoginForm);