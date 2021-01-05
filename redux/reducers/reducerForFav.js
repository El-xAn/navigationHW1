const defaultState = {
    favList: []
};

export const reducerForFav = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_FAVOURITE': 
            return{
                ...state,
                favList: [...state.favList, action.payload]
            }
    }
    return state
}