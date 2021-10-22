import { nanoid } from "nanoid";

import types from "./books-types";

const initialBooksStore = [];

const booksReducer = (store = initialBooksStore, {type, payload})=> {
    switch(type) {
        case types.ADD_TO_BOOKS:
            const newBook = {...payload, id: nanoid()};
            const newBooks = [...store, newBook];
            return newBooks;
        case types.REMOVE_FROM_BOOKS:
            const updateBooks = store.filter(
                item => item.id !== payload);
                return updateBooks;
        default:
            return store;
    }
};

export default booksReducer;
