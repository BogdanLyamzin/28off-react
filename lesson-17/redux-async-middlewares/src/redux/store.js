import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import reducer from "./rootReducer";

export const store = configureStore({
    reducer
});

export const persistor = persistStore(store);

