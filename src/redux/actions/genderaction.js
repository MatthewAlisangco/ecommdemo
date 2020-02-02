//
// Action type to display items by type
//
// // Action Types to display Grid

import {menitems} from "../../resources/mockData";
import {ItemsFilter} from "./ActionTypes";



// export const ItemsFilter = {
//     NONE : 'NONE',
//     MENS_ITEM: 'MENS_ITEM',
//     WOMAN_ITEMS: 'WOMAN_ITEMS',
//     KIDS_ITEMS: 'KIDS_ITEMS',
// }

export const showItemsType = id => (
    {type: ItemsFilter.MENS_ITEM}
)


export const DisplayItem = (itemsType) => (
    {type: itemsType
    }
)

