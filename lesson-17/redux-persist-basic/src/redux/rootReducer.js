import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import booksReducer from "./books/books-slice";

const persistConfig = {
    key: "store",
    storage
};

const rootReducer = combineReducers({
    books: booksReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;
