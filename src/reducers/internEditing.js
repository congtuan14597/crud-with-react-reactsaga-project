import * as Types from "./../constants/ActionTypes";

var initialState = {};

const internEditing = (state = initialState, action) => {
    switch(action.type) {
        case Types.EDIT_INTERN:     
            return action.intern;
        default: 
            return state;
    }
}

export default internEditing;
