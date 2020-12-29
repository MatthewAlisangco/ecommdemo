import {ItemsFilter} from "../actions/ActionTypes";
import {FILTER_BRAND} from "../actions/ActionTypes";
import {menitems, womansitems, itemx} from "../../resources/mockData";
// import {initialState} from "../reducers/InitialState";

// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao

export default function showItemsReducer (state =[] , action) {
    // console.log("action", action, state);
    switch (action.type) {

        case ItemsFilter.MENS_ITEM:

            console.log("Mens");
            // console.log(itemx.Products[0])
            return Object.assign({}, state, { items: itemx  })

        case ItemsFilter.WOMAN_ITEMS:
            // state.itemslist = womansitems
            console.log("Woman");
            return Object.assign({}, state, { items: menitems})

        case ItemsFilter.KIDS_ITEMS:
            console.log("Kids");
            return Object.assign({}, state, { items: menitems})

        case ItemsFilter.NONE:
            console.log("none");
            return Object.assign({}, state, { items: []} )

        default:
            return state
    }
}
