const initialState = {
    users:[],
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_USER":
            return {
                ...state,
                users:[...state.users,action.users],
            };
        default:
            return state;
    }
};

export default userReducer;