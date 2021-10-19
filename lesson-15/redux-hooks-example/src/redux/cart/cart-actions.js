import types from "./cart-types";

export const addToCart = (product)=> {
    return {
        type: types.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = payload => {
    return {
        type: types.REMOVE_FROM_CART,
        payload
    }
}