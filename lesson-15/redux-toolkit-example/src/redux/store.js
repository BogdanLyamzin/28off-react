import {configureStore} from "@reduxjs/toolkit";

import cartReducer from "./cart/cart-reducer";
import favoritesReducer from "./favorites/favorites-reducer"

const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoritesReducer
    }
})


export default store;