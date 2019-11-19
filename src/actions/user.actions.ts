import axios from 'axios'

import { LOG_IN_USER } from './action.types'

// export const signUpUser = (user: User): AppActions => ({
//     type: "SIGN_UP_USER",
//     user
// })

// export const signInUser = (userEmail: string, userPassword: string) => {
//     type: "SIGN_IN_USER"
//     userEmail
//     userPassword
// }

//====Actions======//

export const signInUserAction = ( userEmail: string, userPassword: string) => {
    // return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    // }
    return (dispatch: any) => {
        const req = axios.post('https://sleek777.herokuapp.com/v1/account/login')
        req.then( res => dispatch({
            type: LOG_IN_USER,
            payload: res.data 
        }))
    }
}
    