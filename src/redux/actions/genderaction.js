//
// Action type to display items by type
//
// // Action Types to display Grid

import {ItemsFilter} from "./ActionTypes";

// export const showItemsType = id => ({type: ItemsFilter.MENS_ITEM})

export const DisplayItem = (itemsType) => ({type: itemsType})