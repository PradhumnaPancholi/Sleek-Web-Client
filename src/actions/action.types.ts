import { User } from '../types/User'

export const LOG_IN_USER: string = 'LOGIN_USER'
export const LOG_OUT_USER: string = 'LOGOUT_USER'
export const SIGN_UP_USER: string = 'SIGN_UP_USER'
export const FETCH_USER_DATA: string = 'FETCH_USER_DATA'

export interface LogInUserAction {
    type: typeof LOG_IN_USER
    userEmail: string
    userPassword: string
}

export interface LogOutUserAction {
    type: typeof LOG_OUT_USER
    userID: string
}

export interface SignUpUserAction {
    type: typeof SIGN_UP_USER
    user: User
}

export interface FetchUserAction {
    type: typeof FETCH_USER_DATA
    userID: string
}

export type UserActionTypes = LogInUserAction | LogOutUserAction | SignUpUserAction | FetchUserAction

export type AppActions = UserActionTypes