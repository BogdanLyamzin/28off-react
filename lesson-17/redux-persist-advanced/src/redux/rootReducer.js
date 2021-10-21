import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import booksReducer from "./books/books-slice";
import cartReducer from "./cart/cart-slice";

const persistConfig = {
    key: "store",
    storage,
    // blacklist: ["cart"]
    whitelist: ["books"]
};

const rootReducer = combineReducers({
    books: booksReducer,
    cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;
