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
        case 'CLEAN_FAVOURITE':
            return{
                favList: []
            }
        case 'REMOVE_FAVOURITE':
            state.favList.splice(state.favList.indexOf(action.payload), 1);
            return{
                favList: [...state.favList]
            }
        default:
            return state
    }
    
}