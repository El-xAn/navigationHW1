const defaultState = {
    state: true
};

export const reducerForLoading = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOAD': 
            return{
                ...state,
                state: action.payload
            }
        default: {
            return state
        }    
    }
    
}