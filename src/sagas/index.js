import { fork, call, put, takeEvery } from "redux-saga/effects";
import * as Types from "./../constants/ActionTypes";
import { actTakeInterns } from "./../actions/index";
import axios from "axios";
import { actUpdateIntern } from "./../actions/index";

//fork: re nhanh, phan chia process: non-blocking 
//take: phan hoi cac action khi dc dispatch: blocking
//call: goi api: blocking
//put: dispatch cac action: non-blocking 

function* takeListInterns() {
    try {
        const uri = "http://localhost:3001/api/v1/interns";
        const internsDetails = yield call(axios.get, uri);
        yield put(actTakeInterns(internsDetails.data));
    } catch(error) {
        yield put({
            type: Types.TAKE_INTERNS_FAILED,
            error
        })
    }
}

function* addIntern(action) {
    try {
        const uri = "http://localhost:3001/api/v1/interns";
        console.log(action.intern)
        const res = yield call(axios.post, uri, action.intern);
        console.log(res.data.data);
    }catch(error) {
        yield put({
            type: Types.ADD_INTERN_FAILED,
            error
        })
    }
}

function* updateIntern(action) {
    try {
        var { id } = action.intern;
        const uri = `http://localhost:3001/api/v1/interns/${id}`;
        const res = yield call(axios.put, uri, action.intern);
        yield put(actUpdateIntern(res.data.data));
    }catch(error) {
        yield put({
            type: Types.UPDATE_INTERN_FAILED,
            error
        })
    }
}

function* deleteIntern(action) {
    try {
        console.log(action.id);
        const uri = `http://localhost:3001/api/v1/interns/${action.id}`;
        yield call(axios.delete, uri);
    }catch(error) {
        yield put({
            type: Types.DELETE_INTERN_FAILED,
            error
        })
    }
}

function* rootSaga() {
    yield fork(takeListInterns);
    yield takeEvery(Types.ADD_INTERN, addIntern);
    yield takeEvery(Types.UPDATE_INTERN, updateIntern);
    yield takeEvery(Types.DELETE_INTERN, deleteIntern);
}

export default rootSaga;
