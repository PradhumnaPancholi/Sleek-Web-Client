import { UserActionTypes } from '../types/action.types'
import { User } from '../types/User'

// a default state for user object//
let userReducerDefaultState: User 


const userReducer =  (state = userReducerDefaultState, action: UserActionTypes): User => {
    switch(action.type) {
        case "SIGN_IN_USER":
            return state //need to fix this later
        default:
            return state
    }
}

export default userReducer