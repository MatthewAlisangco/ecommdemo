import {ItemsFilter} from "../actions/ActionTypes";

import {menitems, womansitems} from "../../resources/mockData";


// const initialState = {
//         ItemsType: ItemsFilter.WOMAN_ITEMS,
//         payload: womansitems
// };
// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao
export default function showItemsReducer (state = [], action) {
    console.log("action", action, state);
    switch (action.type) {

        case ItemsFilter.MENS_ITEM:
            console.log("Mens");
            return Object.assign({}, state, { payload: menitems })

        case ItemsFilter.WOMAN_ITEMS:
            console.log("Woman");
            return Object.assign({}, state, { payload: womansitems })

        case ItemsFilter.KIDS_ITEMS:
            console.log("Kids");
            return Object.assign({}, state, { payload: "kids" })

        case ItemsFilter.NONE:
            console.log("none");
            return Object.assign({}, state, { payload: "null"} )

        default:
            return state
    }
}


//size , color