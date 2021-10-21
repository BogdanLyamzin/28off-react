import types from "./types";

export const addToBooks = newBook => {
    return {
        type: types.ADD_TO_BOOKS,
        payload: newBook
    }
};

export const removeFromBooks = payload => {
    return {
        type: types.REMOVE_FROM_BOOKS,
        payload
    }
}