import types from "./favorites-types";

export const addToFavorites = (product)=> {
    return {
        type: types.ADD_TO_FAVORITES,
        payload: product
    }
}

export const removeFromFavorites = (id)=> {
    return {
        type: types.REMOVE_FROM_FAVORITES,
        payload: id
    }
}