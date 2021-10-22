import types from "./books-types";

export const addToBooks = payload => {
    return {
        type: types.ADD_TO_BOOKS,
        payload
    }
};

export const removeFromBooks = payload => {
    return {
        type: types.REMOVE_FROM_BOOKS,
        payload
    }
}