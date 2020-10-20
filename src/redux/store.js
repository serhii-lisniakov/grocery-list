import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import {itemsReducer} from '../redux/List/reducer'

const rootReducer = combineReducers({
    items: itemsReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools()
)