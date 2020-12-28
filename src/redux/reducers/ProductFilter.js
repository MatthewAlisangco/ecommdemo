import {FILTER_BRAND} from "../actions/ActionTypes";

import {itemx, menitems, womansitems} from "../../resources/mockData";


// const initialState = {
//         ItemsType: ItemsFilter.WOMAN_ITEMS,
//         payload: womansitems
// };

//https://stackoverflow.com/questions/44412242/how-can-i-apply-multiple-filters-in-react
// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao
export default function ProductFilter (state = [], action) {
    // console.log("action", action, state);

    switch (action.type) {

        case FILTER_BRAND.FILTER_BRAND:
            console.log("filtering");
            let newload = action.payload
            return Object.assign({}, state, {filterbyBrand: newload})
            //old
            // if(action.payload) {
            //     let i = 0
            //     let newload = [];
            //     while (i < action.payload.length) {
            //
            //         if (action.payload[i] == itemx.brand) {
            //             newload.push(itemx[i])
            //         }
            //     }
            //
            //
            //     return Object.assign({}, state, {filterbyBrand: newload})
            // }
            // else {
            //     return Object.assign({}, state, {filteritems: itemx})
            // }


        default:
            return state
    }
}





//size , color, brand
//
// colorFilterChanged: {
//     reducer(state, action) {
//         let { color, changeType } = action.payload
//         const { colors } = state
//         switch (changeType) {
//             case 'added': {
//                 if (!colors.includes(color)) {
//                     colors.push(color)
//                 }
//                 break
//             }
//             case 'removed': {
//                 state.colors = colors.filter(
//                     (existingColor) => existingColor !== color
//                 )
//             }
//             default:
//                 return
//         }