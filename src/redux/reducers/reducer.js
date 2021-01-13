import {combineReducers} from "redux";
import showItemsReducer from "./ItemsReducer";
import ProductFilter from "./ProductFilter";
import CurrentModalReducer from "./CurrentModalReducer";
import {initialState} from "../reducers/InitialState";

const rootReducer = combineReducers({
    items: showItemsReducer,
    filterbyBrand: ProductFilter,
    itemmodal: CurrentModalReducer
});

export default rootReducer;