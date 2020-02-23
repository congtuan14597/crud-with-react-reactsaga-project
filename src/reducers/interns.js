import * as Types from "./../constants/ActionTypes";

var initialState = [];

var findIndex = (interns, id) => {
    var result = -1;
    interns.forEach((intern, index) => {
        if (intern.id === id) {
            result = index;
        }
    });
    return result;
}

const interns = (state = initialState, action) => {
    var index = -1;

    switch(action.type) {
        case Types.TAKE_INTERNS:
            state = action.interns;
            return [...state];
        case Types.TAKE_INTERNS_FAILED: 
            return { ...state, error: action.error }
        case Types.ADD_INTERN:
            state.push(action.intern);
            return [...state];
        case Types.ADD_INTERN_FAILED: 
            return { ...state, error: action.error }
        case Types.UPDATE_INTERN:
            index = findIndex(state, action.intern.id);
            state[index] = action.intern;
            return [...state];
        case Types.UPDATE_INTERN_FAILED: 
            return { ...state, error: action.error }
        case Types.DELETE_INTERN: 
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        case Types.DELETE_INTERN_FAILED: 
            return { ...state, error: action.error }
        default: 
            return [...state];
    }
}

export default interns;
