import { put, takeEvery } from "redux-saga/effects";
function* test() {
    yield put("ACTIONs");
}
export default function* rootSagas() {
    yield takeEvery("DATA", test);
}