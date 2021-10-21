import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const booksSlice = createSlice({
    name: "books",
    initialState: [],
    reducers: {
        addToBooks: {
            reducer: (store, {payload})=> {
                store.push(payload);
            },
            prepare: (data)=> {
                const newBook = {...data, id: nanoid()};
                return {
                    payload: newBook
                }
            }
        },
        // addToBooks: (store, {payload})=> {
        //     const newBook = {...payload, id: nanoid()};
        //     store.push(newBook);
        // },
        removeFromBooks: (store, {payload}) => 
            store.filter(({id}) => id !== payload)
    }
});

const {actions, reducer} = booksSlice;

export const {addToBooks, removeFromBooks} = actions;

export default reducer;

