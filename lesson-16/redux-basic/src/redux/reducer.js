import { nanoid } from "nanoid";

import types from "./types";

const initialStore = {
    books: []
};

const reducer = (store = initialStore, action)=> {
    switch(action.type) {
        case types.ADD_TO_BOOKS:
            const newBook = {...action.payload, id: nanoid()};
            const newBooks = [...store.books, newBook];
            return {...store, books: newBooks};
        case types.REMOVE_FROM_BOOKS:
            const updateBooks = store.books.filter(
                item => item.id !== action.payload);
                return {...store, books: updateBooks};
        default:
            return store;
    }
};

export default reducer;
