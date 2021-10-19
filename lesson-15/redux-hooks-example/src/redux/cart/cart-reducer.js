import types from "./cart-types";

const initialState = []

const cartReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case types.ADD_TO_CART:
            const newCart = [...state, payload]
            return newCart
        case types.REMOVE_FROM_CART:
            const updateCart = state.filter(({id}) => 
            id !== payload)    
            return updateCart
        default: 
            return state;
    }
}

export default cartReducer;