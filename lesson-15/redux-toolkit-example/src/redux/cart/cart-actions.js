import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/add");
export const removeFromCart = createAction("cart/remove");

export default {
    addToCart,
    removeFromCart
}

/*
const createAction = type => {
    const func = payload => {
        return {
            type,
            payload
        }
    }
    func.type = type;
    func.toString = () => type
    return func
}
*/
