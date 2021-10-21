import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
       addToCart: (store, {payload}) => {
            store.push(payload);
       },
       removeFromCart: (store, {payload}) => store.filter(({id}) =>
       id !== payload)
    }
});

const {actions, reducer} = cartSlice;

export const {addToCart, removeFromCart} = actions;

export default reducer;