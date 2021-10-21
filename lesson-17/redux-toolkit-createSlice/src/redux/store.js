import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "./books/books-slice";

const store = configureStore({
    reducer: {
        books: booksReducer
    }
});

export default store;