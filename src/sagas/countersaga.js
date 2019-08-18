import {put,takeEvery,takeLatest} from "redux-saga/effects";
import {increment,decrement} from "../actions/actions";
const delay=(ms)=>new Promise((abcd)=>{console.log(abcd);setTimeout(abcd,ms)});
export default function* watcherSaga(){
    //yield takeEvery("INCREMENT_ASYNC",incrementAsync);
    //yield takeEvery("DECREMENT_ASYNC",decrementAsync);
    yield takeLatest("INCREMENT_ASYNC",incrementAsync);
    yield takeLatest("DECREMENT_ASYNC",decrementAsync);
}
function* incrementAsync(){
    yield delay(1000);
    yield put(increment());
}
function* decrementAsync(){
    yield delay(1000);
    yield put(decrement());
}