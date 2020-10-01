import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import {entriesReducer} from '../redux/entries'

const rootReducer = combineReducers({
    entriesReducer
})

const initialState = localStorage.getItem('grocery') || {};

export const store = createStore(
    rootReducer,
    // initialState,
    composeWithDevTools()
)