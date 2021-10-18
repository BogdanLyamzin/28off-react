import {createStore} from "redux";

import { ADD_TO_CART } from "./types";

const initialState = {
    cart: []
};

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const newCart = [...state.cart, action.payload];
            return {...state, cart: newCart}
        default: 
            return state;
    }
};

const store = createStore(reducer);

export default store;