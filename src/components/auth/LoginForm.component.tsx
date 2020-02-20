import { Button, Card, CardContent, Typography } from '@material-ui/core'
import React, { FunctionComponent, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Input from '../layouts/Input.component'

const LoginForm: FunctionComponent = () => {
    
    const signIn = async () => {
        // this.props.signInUserAction()
    }

    return(
        <div className= 'login-form'>
            <Card>
                <CardContent className='login-content'>
                    <Typography variant='h5' component='h2'>
                        Log Into Your Account
                    </Typography>
                    <Input type='Email'/>
                    <Input type='Password'/>
                    <div>
                        <Button variant='contained'>
                            Log In
                        </Button>
                    </div>
                    <Typography variant='h6' component='h5'>
                        Don't have an account yet? <NavLink to='/signup'>Sign Up</NavLink>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

const mapStateToProps = (state: any ) => ({
    user: state.user
})


export default connect(mapStateToProps)(LoginForm);