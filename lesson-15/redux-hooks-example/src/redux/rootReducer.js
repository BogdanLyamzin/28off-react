import { combineReducers } from "redux";

import cartReducer from "./cart/cart-reducer";
import favoritesReducer from "./favorites/favorites-reducer"

const rootReducer = combineReducers({
    cart: cartReducer,
    favorites: favoritesReducer
});

export default rootReducer;