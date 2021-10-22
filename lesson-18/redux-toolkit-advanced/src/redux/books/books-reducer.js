import { createReducer } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { addToBooks, removeFromBooks } from "./books-actions";

const booksReducer = createReducer([], {
    [addToBooks]: (store, {payload})=> {
        const newBook = {...payload, id: nanoid()};
        store.push(newBook);
        // const newBooks = [...store, newBook];
        // return newBooks;
    },
    [removeFromBooks]: (store, {payload})=> {
        const idx = store.findIndex(({id}) => id === payload);
        store.splice(idx, 1);
    }
});

export default booksReducer;
