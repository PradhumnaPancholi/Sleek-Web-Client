import { AppActions } from '../types/action.types';
import { User } from '../types/User';
import { AppState } from '../store/configureStore';
import { Dispatch } from 'redux';

export const signUpUser = (user: User): AppActions => ({
    type: "Sign_UP_USER",
    user
})

export const signUpUserAction = (userData: {
    id: string
    name: string
    email: string
    avatarName: string
    avatarBGColor: string
}) =>{
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        const {
            id,
            name,
            email,
            avatarName,
            avatarBGColor,
        } = userData

        const user = { id, name, email, avatarName, avatarBGColor}
        
        dispatch(signUpUser(user))
    }
}
    