import types from "./favorites-types";

const initialState = [];

const favoritesReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case types.ADD_TO_FAVORITES:
            return [...state, payload]
        case types.REMOVE_FROM_FAVORITES:
            const updateFavorites = state.filter(({id}) => 
                id !== payload);
            return updateFavorites         
        default: 
            return state;
    }
};

export default favoritesReducer;