import { createReducer } from "@reduxjs/toolkit";

import {addToCart, removeFromCart} from "./cart-actions";

const cartReducer = createReducer([], {
    [addToCart.type]: (state, action) => [...state, action.payload],
    [removeFromCart]: (state, {payload}) => state.filter(({id}) => 
    id !== payload)    
});

export default cartReducer;