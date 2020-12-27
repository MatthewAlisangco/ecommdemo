import {ItemsFilter} from "../actions/ActionTypes";
import {FILTER_BRAND} from "../actions/ActionTypes";
import {menitems, womansitems, itemx} from "../../resources/mockData";
// import {initialState} from "../reducers/InitialState";

// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao


const selectedBrands = state => state.items.filterbyBrand
const getItems = state => state.items;

// export const getItemByBrand = createSelector([selectedBrands,getItems]),
//     ()





export default function showItemsReducer (state = [], action) {
    console.log("action", action, state);
    switch (action.type) {

        case ItemsFilter.MENS_ITEM:
            // state.itemslist = itemx
            console.log("Mens");
            // console.log(itemx.Products[0])
            return Object.assign({}, state, { items: itemx  })

        case ItemsFilter.WOMAN_ITEMS:
            // state.itemslist = womansitems
            console.log("Woman");
            return Object.assign({}, state, { payload: menitems})

        case ItemsFilter.KIDS_ITEMS:
            console.log("Kids");
            return Object.assign({}, state, { payload: menitems})

        case ItemsFilter.NONE:
            console.log("none");
            return Object.assign({}, state, { payload: null} )
        // case FILTER_BRAND.FILTER_BRAND:
        //     console.log("filtering");
        //     let newload = [];
        //
        //     if(action.payload){
        //         let i = 0
        //         let j = 0
        //         while(i < action.payload.length){
        //             while(j < state.payload.length){
        //                 if(action.payload[i] == state.payload[j].Brand){
        //                     newload.push(state.payload[j])
        //                 }
        //                 j++;
        //             }
        //             i++;
        //                 // for(int
        //                 //     state.payload[i].Brand
        //             // if(action.payload[i] == state.payload[i].Brand){
        //             //     newload.push(state.payload[i])
        //             // }
        //             // i++;
        //         }
        //         return Object.assign({}, state, { payload: newload })
        //     }
        //     else {
        //         return state
        //     }
        default:
            return state
    }
}


//itemsfilter
// export default function FilterItem (state = [], action) {
//     console.log("action", action, state);
//     switch (action.type) {
//
//         case FILTER_BRAND:
//             console.log("filtering");
//             // if(action.payload){
//             //     let i = 0
//             //     let newload = [];
//             //     while(i < action.payload.length){
//             //
//             //         if(action.payload[i] == itemx.brand){
//             //             newload.push(itemx.brand)
//             //         }
//             //     }
//             //
//             // }
//             return Object.assign({}, state, { payload: itemx })
//
//
//         default:
//             return state
//     }
// }

// function filterHelper()


//size , color