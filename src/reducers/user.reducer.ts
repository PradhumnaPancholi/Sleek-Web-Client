import { User } from '../types/User'

// a default state for user object//
let userInitialState: User ={
    id: '',
    name: '',
    email: '',
    avatarName: '',
    avatarBGColor: ''
}


const userReducer =  (state = userInitialState, action: any) => {
    switch(action.type) {
        case "SIGN_IN_USER":
            return state= action.payload
        default:
            return state
    }
}

export default userReducer