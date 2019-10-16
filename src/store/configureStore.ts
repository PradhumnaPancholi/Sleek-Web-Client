import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/user';

export const rootReducer = combineReducers({
    user: userReducer
});

//neeed to understand//
export type AppState = ReturnType<typeof rootReducer>
//------------//

export const store = createStore(rootReducer, applyMiddleware(thunk));