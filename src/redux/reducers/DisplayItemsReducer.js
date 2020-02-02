import { ItemsFilter } from '../actions'
// import { combineReducers } from 'redux'
import todos from './todos'

//updates state based on action.


const initialState = {
    ItemsFilter: "None"
}



const ShowItems = (state = ItemsFilter.NONE, action) => {
    switch (action.type) {
        case ItemsFilter.MENS_ITEM:
            return [   ...state,action.filter]
        case ItemsFilter.NONE:
            return [   ...state,action.filter]

        default:
            return state
    }
// }
export default function displayItemsReducer(ShowItems);