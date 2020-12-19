import {combineReducers} from "redux";
import showItemsReducer from "./ItemsReducer";
import ProductFilter from "./ProductFilter";

import {initialState} from "../reducers/InitialState";

const rootReducer = combineReducers({
    items: showItemsReducer,
    filterbyBrand: ProductFilter
});

export default rootReducer;