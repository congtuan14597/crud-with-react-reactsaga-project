import * as Types from "./../constants/ActionTypes";

export const actTakeInterns = (interns) => {
    return {
        type: Types.TAKE_INTERNS,
        interns: interns
    }
}

export const actAddIntern = (intern) => {
    return {
        type: Types.ADD_INTERN,
        intern: intern
    }
}

export const actGetIntern = (intern) => {
    return {
        type: Types.EDIT_INTERN,
        intern: intern
    }
}

export const actUpdateIntern = (intern) => {
    return {
        type: Types.UPDATE_INTERN,
        intern: intern
    }
}

export const actDeleteIntern = (id) => {
    return {
        type: Types.DELETE_INTERN,
        id
    }
}

export const userPostFetch = (user) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(data => {
            if(data.message) {

            }else {
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))
            }
        })
    }
}

export const loginUser = (user) => {
    return {
        type: Types.LOGIN_USER,
        user
    }
}
