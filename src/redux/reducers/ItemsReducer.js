import {ItemsFilter} from "../actions/ActionTypes";
import {FILTER_BRAND} from "../actions/ActionTypes";
import {mockMens, mockWomans, mockKids} from "../../resources/mockData";
// import {initialState} from "../reducers/InitialState";

// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao

export default function showItemsReducer (state =[] , action) {
    switch (action.type) {

        case ItemsFilter.MENS_ITEM:
            console.log("Mens");
            return Object.assign({}, state, { items: mockMens  })

        case ItemsFilter.WOMAN_ITEMS:
            console.log("Woman");
            return Object.assign({}, state, { items: mockWomans})

        case ItemsFilter.KIDS_ITEMS:
            console.log("Kids");
            return Object.assign({}, state, { items: mockKids})

        case ItemsFilter.NONE:
            console.log("none");
            return Object.assign({}, state, { items: []} )

        default:
            return state
    }
}
