import { put, all, fork, takeEvery } from "redux-saga/effects";
import { GET_CATEGORY_DATA, SET_DATA, SET_UPDATE_DATE } from "./actions";
import FetchClient from "../../utils/FetchClient";

export function* watchInitializeCollections() {
    yield takeEvery(GET_CATEGORY_DATA, init);
}

export function* init({ payload: { url, category } }) {
    const [result] = yield FetchClient.get({ url }) || [];
    const { rates, createdAt } = result || {};

    yield put({
        type: SET_DATA,
        payload: {
            category,
            data: rates, //@todo optimize !!!
        },
    });

    yield put({
        type: SET_UPDATE_DATE,
        payload: {
            category,
            updateDate: createdAt, //@todo optimize !!!
        },
    });
}

export default function* rootSaga() {
    yield all([fork(watchInitializeCollections)]);
}
