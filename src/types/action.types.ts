import { User } from "./User";

export const LOG_IN_USER: string = 'LOGIN_USER'
export const LOG_OUT_USER: string = 'LOGOUT_USER'
export const SIGN_UP_USER: string = 'SIGN_UP_USER'
export const FETCH_USER_DATA: string = 'FETCH_UER_DATA'

export interface LogInUserAction {
    type: typeof LOG_IN_USER,
    payload: User
}

export interface LogOutUserAction {
    type: typeof LOG_OUT_USER,
    payload: string
}

export interface SignUpUserAction {
    type: typeof SIGN_UP_USER,
    payload: User
}

export interface FetchUserAction {
    type: typeof FETCH_USER_DATA,
    payload: User
}

export type UserActionTypes = LogInUserAction | LogOutUserAction | SignUpUserAction | FetchUserAction

export type AppAction = UserActionTypes