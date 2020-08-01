import {combineReducers} from "redux";
import showItemsReducer from "./ItemsReducer";
import ProductFilter from "./ProductFilter";

const rootReducer = combineReducers({
    showItemsReducer, ProductFilter
});

export default rootReducer;