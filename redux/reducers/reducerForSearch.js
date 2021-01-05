const defaultState = {
    data: []
};

export const reducerForSearch = (state = defaultState, action) => {
    switch(action.type) {
        case 'SEARCH': 
            return{
                ...state,
                data: action.payload.data
            }
    }
    return state
}