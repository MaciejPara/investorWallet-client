import { all, put, takeEvery } from "redux-saga/effects";
import FetchClient from "../../utils/FetchClient";
import { GET_USER_DATA, SET_USER } from "../actions";

export function* watchUserGet() {
    yield takeEvery(GET_USER_DATA, init);
}

export function* init({ payload: { url } }) {
    const user = yield FetchClient.get({ url });

    user.id = user._id;
    delete user._id;

    yield put({
        type: SET_USER,
        payload: (user && user[0]) || null,
    });
}

export default function* rootSaga() {
    yield all([watchUserGet()]);
}
