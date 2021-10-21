import { createReducer } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { addToBooks, removeFromBooks } from "./books-actions";

const booksReducer = createReducer([], {
    [addToBooks]: (store, {payload})=> {
        const newBook = {...payload, id: nanoid()};
        const newBooks = [...store, newBook];
        return newBooks;
    },
    [removeFromBooks]: (store, {payload})=> {
        const updateBooks = store.filter(item => item.id !== payload);
        return updateBooks;
    }
});

export default booksReducer;
