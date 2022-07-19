import { combineReducers } from "redux"
import Movies from '../reducers/Movies'
import Auth from '../reducers/Auth'
import Register from '../reducers/Register'

const rootReducer = combineReducers ({
    movies: Movies,
    auth: Auth,
    register: Register,
})

export default rootReducer