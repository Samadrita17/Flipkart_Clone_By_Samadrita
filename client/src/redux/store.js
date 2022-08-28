
import {createStore, combineReducers , applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import {composeWithDevTools } from 'redux-devtools-extension';

import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer';




//to combine reducers into 1 reducer:
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
});

const middleware = [thunk];

// takes 2 arg(reducers,middleware)
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store; //import in index.js(in client)