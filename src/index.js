import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
// import rootReducer from "./reducers/reducer";
// import configureStore from "./redux/StoreConfiguration";
import rootReducer from "./redux/reducers/reducer";
import {ItemsFilter} from "./redux/actions/ActionTypes";
import {womansitems} from "./resources/mockData";
// 8
//
const store = createStore(rootReducer);
// const initialState = {
//     ItemsType: ItemsFilter.WOMAN_ITEMS,
//     payload: womansitems
// };
ReactDOM.render(  <Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));


// ReactDOM.render(
//     <App />
// , document.getElementById('root'));
// //

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
