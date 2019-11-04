import { Dispatch } from 'redux'

import { AppState } from '../store/configureStore'
import { AppActions } from '../types/action.types'
import { User } from '../types/User'

export const signUpUser = (user: User): AppActions => ({
    type: "SIGN_UP_USER",
    user
})

export const signInUser = (userEmail: string, userPassword: string) => {
    type: "SIGN_IN_USER"
    userEmail
    userPassword
}

//====Actions======//

export const signInUserAction = ( userEmail: string, userPassword: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {

    }
}
    