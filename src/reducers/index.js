import { combineReducers } from 'redux';
import interns from "./interns";
import internEditing from "./internEditing";
import users from "./users";
import { reducer as formReducer } from 'redux-form'

const appReducers = combineReducers({
    interns: interns,
    internEditing: internEditing,
    users: users,
    form: formReducer
});

export default appReducers;
