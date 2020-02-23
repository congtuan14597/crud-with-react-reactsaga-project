import * as Types from "./../constants/ActionTypes";

const initialState = {
    currentUser: {}
}

const users = (state = initialState, action) => {
    switch(action.type) {
        case Types.LOGIN_USER:
            state = action.user
            return { ...state, currentUser: action.user } 
        default: 
            return state;
    }
}

export default users;
