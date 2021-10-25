import { createReducer, combineReducers } from "@reduxjs/toolkit";

import actions from "./books-actions";

const itemsReducer = createReducer([], {
    [actions.getBooksSuccess]: (_, {payload}) => payload,
    [actions.addBookSuccess]: (store, {payload})=> {
        store.push(payload);
    },
    [actions.removeBookSuccess]: (store, {payload})=> {
        const idx = store.findIndex(({id}) => id === payload);
        store.splice(idx, 1);
    }
});

const loadingReducer = createReducer(false, {
    [actions.getBooksRequest]: ()=> true,
    [actions.getBooksSuccess]: ()=> false,
    [actions.getBooksError]: ()=> false
});

const errorReducer = createReducer(null, {
    [actions.getBooksSuccess]: ()=> null,
    [actions.getBooksError]: (_, payload)=> payload
});

const booksReducer = combineReducers({
    items: itemsReducer,
    loading: loadingReducer,
    error: errorReducer
})

export default booksReducer;
